<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
   public function proimg($id){
       $data=DB::table('tblproduct')->where('id',$id)->first();

       return view('admin.addimage')->with('data',$data);
   }
   
   public function insertimg(Request $request)
   {
    
       if ($request->isMethod('get'))
       {
           return view('admin.addimage');
       }
       else
       {
           $data=$request->all();
             $img=array();
           if($files=$request->file('img'))
           {
             foreach($files as $file)
             {
               $name=$file->getClientOriginalName();
                $t=time().$name;
               $img = explode(".",$t);
              $file->move(public_path('item_img'),$t );
               $image[]=$t;
             }
           }
             if($img [1] =='png' ||  $img [1] == "jpg" ||  $img [1] =="jpeg"||  $img [1] == "mp4")
             {
             $ans=DB::table('addimage')->insert(["pid" => $data['id'],"image"=>implode(",",$image)]);

             return redirect()->back()->with("message","Insert Sucessfully...");
             }
             else
            {
              return redirect()->back()->with('error','Invalid Image Type');
            }
       }
   }

   public function showimg(Request $request)
   {
     $requestData = ['id','pid','image'];
       $data = DB::table('addimage')
       ->get();
     return view('admin.showimg')->with(['data'=>$data]);
   }

   public function editimg($id)
   {
       $data=DB::table('addimage')->where('id',$id)->first();
       return view('admin.editimg')->with('data',$data);
   }

   public function editimages(Request $request)
   {
       $time=date('Y-m-d H:i:s',time());
     $data= $request->all();

     $data = $request->all();

       if(@$data['img']!='')
       {
         $img=array();
         if($files=$request->file('img'))
         {
           foreach($files as $file)
           {
             $name=$file->getClientOriginalName();
             $img = explode(".",$name);
             $t=time().".".$img[1] ;
             if($img [1] =='png' ||  $img [1] == "jpg" ||  $img [1] =="jpeg"||  $img [1] == "mp4" )
             {
               $file->move(base_path('public/item_img'),$t );
               DB::table('addimage')->where('id',$data['id'])->update(["image"=>$t,'updated_at'=>$time]);

               $photo = $request->input('oldimg');

               if($photo!='')
               {
                 if(file_exists('public/item_img/'.$photo))
                 {
                  unlink('public/item_img/'.$photo);
                 }
                 else
                 {
                     echo "file not exist";
                 }
               }

             }
             else
             {
               return redirect()->back()->with('error','Invalid Image Type');
             }
           }
            return redirect()->back()->with('message','Update Sucessfully!');
         }
       }
       else
       {
         DB::table('addimage')->where('id',$data['id'])->update(['updated_at'=>$time]);

         return redirect()->back()->with('message','Update Sucessfully!');
       }
 }

 public function deleteimages(Request $request,$id)
 {
     $data=DB::table('addimage')->where('id',$id)->delete();
     return redirect()->back()->with('message','delete succesfully');
 }

}
