<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Models\product;
use App\Models\Catagory;
use Illuminate\Pagination\Paginator;

class ProductController extends Controller
{
    public function product()
    {
        $data = DB::table('tblcatagory')->get();
        return view('admin.product')->with(['data' => $data]);
    }
    // public function insertpro(Request $request)
    // {
    //     if ($request->isMethod('get'))
    //     {
    //         return view('tblproduct');
    //     }
    //     else
    //     {
    //         $data=$request->all();
    //           $img=array();
    //         if($files=$request->file('img'))
    //         {
    //           foreach($files as $file)
    //           {
    //             $name=$file->getClientOriginalName();
    //              $t=time().$name;

    //             $img = explode(".",$t);

    //            $file->move(public_path('item_img'),$t );
    //             $image[]=$t;
    //           }
    //         }
    //           if($img [1] =='png' ||  $img [1] == "jpg" ||  $img [1] =="jpeg"||  $img [1] == "mp4")
    //           {
    //           $ans=DB::table('tblproduct')->insert(["cid" => $data['name'],"tblproductitle" =>$data['producttittle'],"tblproductprice" =>$data['productprice'],"tblproductcode" =>$data['productcode'],"discripation"=>$data['discripation'],"tblproductimage"=>implode(",",$image)]);
    //           return redirect()->back()->with("message","Insert Sucessfully...");
    //           }
    //           else
    //          {
    //            return redirect()->back()->with('error','Invalid Image Type');
    //          }
    //     }
    // }
    public function insertpro(Request $request)
    {
        $product = new product;
        $product->cid = $request->get('name');
        $product->tblproductitle = $request->get('producttittle');
        $product->tblproductprice = $request->get('productprice');
        $product->tblproductcode = $request->get('productcode');
        $product->color = $request->get('productcolor');
        $product->discripation = $request->get('discripation');
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('item_img', $filename);
            $product->tblproductimage = $filename;
        }
        $product->save();

        return redirect()->back()->with('message', 'product added successfully');
    }
    // public function showproduct(Request $request)
    // {
    //     $requestData = ['id', 'cid', 'tblproductitle', 'tblproductprice', 'tblproductcode', 'color', 'tblproductimage'];
    //     $pro = $request->input('search');
    //     $min_price = $request->input('min_price');
    //     $max_price = $request->input('max_price');
    //     $data = DB::table('tblcatagory')
    //         ->join('tblproduct', 'tblproduct.cid', '=', 'tblcatagory.id')
    //         ->where('tblproductitle', "like", "%" . $pro . "%")
    //         ->get();
    //     // ->Paginate(5);
    //     return view('admin.showproduct')->with(['data' => $data,'min_price' => $min_price, 'max_price' => $max_price]);
    // }
    public function showproduct(Request $request)
    {
        $requestData = ['id', 'cid', 'tblproductitle', 'tblproductprice', 'tblproductcode', 'color', 'tblproductimage'];
        $min_price = $request->input('min_price');
        $max_price = $request->input('max_price');
        if (($min_price) && ($max_price)) {
            $data = DB::table('tblcatagory')
            ->join('tblproduct', 'tblproduct.cid', '=', 'tblcatagory.id')
            ->whereBetween('tblproductprice', [$min_price, $max_price])->get();
        }
        elseif (! is_null($min_price)) {
            $data = DB::table('tblcatagory')
            ->join('tblproduct', 'tblproduct.cid', '=', 'tblcatagory.id')
            ->where('tblproductprice', '>=', $min_price)->get();
        }
        elseif (! is_null($max_price)) {
            $data = DB::table('tblcatagory')
            ->join('tblproduct', 'tblproduct.cid', '=', 'tblcatagory.id')
            ->where('tblproductprice', '<=', $max_price)->get();
        }
        else {
                $data = DB::table('tblcatagory')
                ->join('tblproduct', 'tblproduct.cid', '=', 'tblcatagory.id')->get();
            }
        return view('admin.showproduct')->with(['data' => $data, 'min_price' => $min_price, 'max_price' => $max_price]);
    }

//  public function search($price, Request $request, product $property)
//     {
//         $category = $property->category;
//         $query = product::query();

//         // Code for min and max price

//         $min_price = $request->has('min_price');
//         $max_price = $request->has('max_price');
//         //dd($max_price);

//         if (($min_price) && ($max_price)) {
//             $query->whereBetween('price', [$min_price, $max_price]);
//         }
//         elseif (! is_null($min_price)) {
//             $query->where('price', '>=', $min_price);
//         }
//         elseif (! is_null($max_price)) {
//             $query->where('price', '<=', $max_price);
//         }

//         $results = $query->get();
//         return view('admin.search', compact('category','results'));
//     }




    public function editproduct($id)
    {
        $product = product::find($id);
        $cat = Catagory::all();
        // echo"<pre>";
        // print_r($category);
        // die();
        return view('admin.editproduct', ['data' => $product, 'cat' => $cat]);
    }
    //     public function editprod(Request $request)
    //     {
    //         $time=date('Y-m-d H:i:s',time());
    //       $data= $request->all();

    //       $data = $request->all();

    //         if(@$data['img']!='')
    //         {
    //           $img=array();
    //           if($files=$request->file('img'))
    //           {
    //             foreach($files as $file)
    //             {
    //               $name=$file->getClientOriginalName();
    //               $img = explode(".",$name);
    //               $t=time().".".$img[1] ;
    //               if($img [1] =='png' ||  $img [1] == "jpg" ||  $img [1] =="jpeg"||  $img [1] == "mp4" )
    //               {
    //                 $file->move(base_path('public/item_img'),$t );
    //                 DB::table('tblproduct')->where('id',$data['id'])->update(["cid" => $data['name'],"tblproductitle" =>$data['producttittle'],"tblproductprice" =>$data['productprice'],"tblproductcode" =>$data['productcode'],"discripation"=>$data['discripation'],"tblproductimage"=>$t,'updated_at'=>$time]);

    //                 $photo = $request->input('oldimg');

    //                 if($photo!='')
    //                 {
    //                   if(file_exists('public/item_img/'.$photo))
    //                   {
    //                    unlink('public/item_img/'.$photo);
    //                   }
    //                   else
    //                   {
    //                       echo "file not exist";
    //                   }
    //                 }

    //               }
    //               else
    //               {
    //                 return redirect()->back()->with('error','Invalid Image Type');
    //               }
    //             }
    //              return redirect()->back()->with('message','Update Sucessfully!');
    //           }
    //         }
    //         else
    //         {
    //           DB::table('tblproduct')->where('id',$data['id'])->update(["cid" => $data['name'],"tblproductitle" =>$data['producttittle'],"tblproductprice" =>$data['productprice'],"tblproductcode" =>$data['productcode'],"discripation"=>$data['discripation'],'updated_at'=>$time]);

    //           return redirect()->back()->with('message','Update Sucessfully!');
    //         }
    //   }
    public function editprod(Request $request)
    {
        $product = product::find($request->get('id'));
        // echo "<pre>";
        // print_r($product);
        // die;
        // $data=$request->all();
        $product->cid = $request->get('name');
        $product->tblproductitle = $request->get('producttittle');
        $product->tblproductprice = $request->get('productprice');
        $product->tblproductcode = $request->get('productcode');
        $product->color = $request->get('productcolor');
        $product->discripation = $request->get('discripation');
        if ($request->hasfile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('item_img', $filename);
            $product->tblproductimage = $filename;
        }
        $product->save();
        //    echo"<pre>";
        //    print_r('$product');
        //    die();
        return redirect('showproduct')->with('message', 'product update succsessfully.....');
    }
    public function deleteprodut(Request $request, $id)
    {
        $data = DB::table('tblproduct')->where('id', $id)->delete();
        return redirect()->back()->with('message', 'delete succesfully');
    }
    //   public function showproductdetail($imageid)
    //   {
    //     $data =DB::table('tblcatagory')
    //     ->join('tblproduct','tblproduct.cid','=','tblcatagory.tblname')
    //     ->select('tblcatagory.tblname','tblproduct.*')
    //     ->where("tblproduct.id" ,$imageid)
    //     ->get();

    // //    echo "<pre>";
    // //    print_r($data);
    // //    die();
    //     return view('admin.imgmodel')->with(["data"=>$data]);
    //   }

    public function viewimage($id)
    {
        // $data=DB::table('tblproducts')->where('id',$id)->get();

        $pdata = DB::table('tblcatagory')
            ->join('tblproduct', 'tblproduct.cid', '=', 'tblcatagory.id')
            ->where('tblproduct.id', $id)
            ->get();

        $imgdata = DB::table('tblproduct')
            ->join('addimage', 'addimage.pid', '=', 'tblproduct.id')
            ->where('tblproduct.id', $id)
            ->get();

        return view('admin.viewimage')->with(['pdata' => $pdata, 'imgdata' => $imgdata]);
    }
    // public function summare()
    // {
    //     return view('admin.summarenote');
    // }
}
