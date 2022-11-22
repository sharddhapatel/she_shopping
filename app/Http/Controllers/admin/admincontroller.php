<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\district;
use App\Models\state;
use App\Models\demo;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;

class admincontroller extends Controller
{
    public function additem()
    {
        $data = DB::table('tblcatagory')->count();
        $ans = DB::table('tblproduct')->count();
        return view('admin.add-item')->with(['data' => $data, 'ans' => $ans]);
    }
    public function index()
    {
        $a = DB::table('tblcatagory')->get();
        $b = DB::table('tblproduct')->get();
        return view('admin.index')->with(['a' => $a, 'b' => $b]);
    }

    public function rejester()
    {
        $stats = state::all();
        return view('admin.rejester', ['stats' => $stats]);
    }

    //     public function insertrej(Request $request)
    //     {
    //       if ($request->isMethod('get'))
    //       {
    //           return view('admin.rejester');
    //       }
    //      else
    //      {
    //             $data = $request->all();
    //             $same=DB::table('registration')->where('name',$data['name'],'email',$data['email'])->count();
    //             if($same>0)
    //             {
    //             return redirect()->back()->with('error','exist');
    //             }
    //             else
    //             {
    //                 if($data['name']!='')
    //                 {
    //                     DB::table('registration')->insert(["name"=>$data['name'],"email"=>$data['email'],"password"=>$data['password'],"mobileno"=>$data['mobileno'],"stat"=>$data['state'],"city"=>$data['city']]);
    // echo"<pre>";
    // print_r($data);
    // die();
    //                     return redirect()->back()->with('message','Insert Category Successfully');
    //                 }
    //                 else
    //                 {
    //                     return redirect()->back()->with('error','Category Are Not Inserted');
    //                 }
    //            }
    //       }
    //     }

    public function insertrej(Request $request)
    {
        if ($request->isMethod('get')) {
            return view('admin.rejester');
        } else {
            $data = $request->all();
            $ans = DB::table('registration')->insert(["name" => $data['name'], "email" => $data['email'], "password" => $data['password'], "mobileno" => $data['mobileno'], "stat" => $data['state'], "city" => $data['city']]);
            //   echo"<pre>";
            //   print_r($ans);
            //   die();
            return redirect()->back()->with("message", "Insert Sucessfully...");
        }
    }

    public function getcities($id)
    {
        $cities = district::where("state_id", $id)->get()->pluck("name", "id");

        // echo "<pre>";
        // print_r($cities);
        // die;
        return response()->json($cities);
    }


    public function login()
    {
        return view('admin.login');
    }
    // public function adminlogin(Request $req)
    // {
    //     $email = $req->input('txtemail');
    //     $password = $req->input('txtpwd');
    //     $data = DB::table('registration')->where('email', $email)->first();


    //     $count = DB::table('registration')->where(['email' => $email])->count();
    //     $count1 = DB::table('registration')->where(['password' => $password])->count();
    //     // echo "<pre>";
    //     // print_r($email);
    //     // print_r($password);
    //     // die;

    //     if ($email != " " && $password != " ") {
    //         if ($count > 0 && $count1 > 0) {
    //             Session::put('studemail', $data->email);
    //             Session::put('studfname', $data->name);
    //             return redirect('index');
    //         } else {
    //             return redirect()->back()->with('error', "please enter right EMAIL and PASSWORD");
    //         }
    //     } else {
    //         return redirect()->back()->with('error', "enter email and password");
    //     }
    // }
    public function adminlogin(Request $request)
    {
        $data = $request->all();
        $email = $request->Input('txtemail');
        $password = $request->Input('txtpwd');
        $same = DB::table('login')->where(['email' => $email, 'password' => $password])->count();
        $data = DB::table('login')->where('email', $email)->first();

        // echo "<pre>";
        // print_r($email);
        // print_r($password);
        // print_r($same);
        if (($email != " ") && ($password != " ")) {
            if ($same > 0) {
                Session::put('studemail', $data->email);
                return redirect('index')->with(['data' => $data]);
            } else {
                return redirect('admin')->with('error', 'Email and Password has been wrong....');
            }
        } else {
            return redirect('admin')->with('error', 'Email and Password Empty...');
        }
    }
    public function logout()
    {
        Session()->forget('txtemail');
        return redirect('admin');
    }
    public function showcontact(Request $request)
    {
        $requestData = ['id', 'fname', 'email', 'phoneno', 'message'];
        $name = $request->input('search');
        $data = DB::table('contact')
            ->where('fname', "like", "%" . $name . "%")
            ->get();
        return view('admin.showcontact')->with(['data' => $data]);
    }
    // public function forget()
    // {
    //     return view('admin.forget');
    // }
    // public function forgetpassword(){
    //     return view('admin.forget');
    // }
    // public function resetlink(Request $request)
    // {
    //     $request->validate([
    //         'email' => 'required|email|exists:login,email'
    //     ]);
    //     $token = Str::random(64);
    //     DB::table('passwordreset')->insert([
    //         'email' => $request->email,
    //         'token' => $token,
    //         'created_at' => carbon::now(),
    //     ]);
    //     Notification::send($)
    //     // Mail::send('email.forget', ['token' => $token], function($message) use($request){
    //     //     $message->to($request->email);
    //     //     $message->subject('Reset Password');
    //     // });

    //     return back()->with('message', 'We have e-mailed your password reset link!');
    // }
    public function demo()
    {
        return view('admin.demo');
    }
    public function indemo(Request $request)
    {
        $multi = new demo;

        $multi->name = $request->get('game[]');


        $multi->save();
        return view('admin.demo');
    }
    public function sliderdemo()
    {
        return view('admin.slider');
    }
}
