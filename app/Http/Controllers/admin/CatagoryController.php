<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Catagory;
use Carbon\Carbon;
use GuzzleHttp\Psr7\Request as Psr7Request;
use Symfony\Component\Console\Input\Input;

class CatagoryController extends Controller
{

    public function insertcat(Request $request)
    {
        $category = new Catagory;
        $category->tblname = $request->get('name');
        // $category->name = $request->get('pname');
        $category->date = $request->get('date');
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;  
            $file->move('item_img', $filename);
            $category->tblimg = $filename;
        }
        $category->save();
        return redirect()->back()->with('message', 'Category added successfully');
    }

    public function showcatagory(Request $request)
    {
        $requestData = ['id', 'tblname', 'tblimg', 'date'];
        $data = DB::table('tblcatagory')->get();
        return view('admin.showcatagory')->with(['data' => $data]);
    }

    public function searchdate(Request $request)
    {
        $requestData = ['id', 'tblname', 'tblimg', 'date'];
        $date = $request->all();

        $search = $request->input('datesearch');
        $catagory = $request->input('user');
        // if($request->ajax())
        // {
        //     echo"HELLO";
        if ($search == "lastmonth") {
            $data = DB::table('tblcatagory')->whereMonth('created_at', '=', Carbon::now()->subMonth(1))->get();
        } elseif ($search == "last7days") {
            $data = DB::table('tblcatagory')->where('created_at', '>=', Carbon::now()->subDays(7))->get();
        } elseif ($search == "last15days") {
            $data = DB::table('tblcatagory')->where('created_at', '>=', Carbon::now()->subdays(15))->get();
        } elseif ($search  == "lastyear") {
            $data = DB::table('tblcatagory')->whereYear('created_at', date('Y', strtotime('-1 year')))->get();
        } elseif ($search == "today") {
            $data = DB::table('tblcatagory')->whereDate('created_at', Carbon::today())->get();
        } elseif ($search == "yesterday") {
            $data = DB::table('tblcatagory')->whereDate('created_at', '=', Carbon::yesterday())->get();
        } elseif ($search == "thismonth") {
            $data = DB::table('tblcatagory')->whereMonth('created_at', Carbon::now()->month)->get();
        } elseif ($request->user) {
            $data = DB::table('tblcatagory')->where('tblname', "like", "%" . $catagory . "%")->get();
        } else {
            $data = DB::table('tblcatagory')->get();
        }
        return view('admin.showcatagory')->with(['data' => $data, 'catagory' => $catagory]);
    }
    // public function store(){
    // }
    public function editcatagory($id)
    {
        $data = DB::table('tblcatagory')->where('id', $id)->first();
        return view('admin.editcat')->with('data', $data);
    }
    //     public function editcat(Request $request)
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
    //                 DB::table('tblcatagory')->where('id',$data['id'])->update(["tblname" => $data['name'],"tblimg"=>$t,'updated_at'=>$time]);

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
    //           DB::table('tblcatagory')->where('id',$data['id'])->update(["tblname" => $data['name'],'updated_at'=>$time]);

    //           return redirect()->back()->with('message','Update Sucessfully!');
    //         }
    //   }

    public function editcat(Request $request, $id)
    {
        $category = Catagory::find($id);
        // $data=$request->all();
        $category->tblname = $request->get('name');


        if ($request->hasfile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('item_img', $filename);
            $category->tblimg = $filename;
        }
        $category->save();
        return redirect('showcatagory')->with('message', 'category update succsessfully........');
    }
    public function deletecatagory(Request $request, $id)
    {
        $data = DB::table('tblcatagory')->where('id', $id)->delete();
        return redirect()->back()->with('message', 'delete succesfully');
    }
}
