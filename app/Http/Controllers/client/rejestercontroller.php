<?php


namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\state;
use App\Models\district;
use Illuminate\Support\Facades\Session;
class rejestercontroller extends Controller
{
    public function register(){
        $stats=state::all();
        return view('client.register',['stats'=>$stats]);
    }
    public function insertrej(Request $request)
   
{
    $remember_token = rand(100000, 999999);
    if ($request->isMethod('get')) {
        return view('client.clientindex');
    } else {
        $data = $request->all();

        $ans = DB::table('registration')->insert(["name"=>$data['name'],"email"=>$data['email'],"password"=>$data['password'],"mobileno"=>$data['mobileno'],"stat"=>$data['state'],"city"=>$data['city'],"type"=>'user',"remember_token"=>$remember_token]);
    //   echo"<pre>";
    //   print_r($ans);
    //   die();

        return redirect()->back()->with("message", "Insert Sucessfully...");
    }
}

    public function getcities($id)
    {
        $cities= district::where("state_id",$id)->get()->pluck("name","id");

    
      return response()->json($cities);
    }
public function login(){
    return view('client.login');
}
public function clientlogin(Request $req)
    {
        $email=$req->input('email');
        $password=$req->input('password');
        $data=DB::table('registration')->where('email',$email)->first();


        $count=DB::table('registration')->where(['email'=>$email])->count();
        $count1=DB::table('registration')->where(['password'=>$password])->count();


        if($email !=" " && $password !=" ")
        {
            if($count>0 && $count1>0)
            {
                Session::put('user_id',$data->id);
                Session::put('studemail',$data->email);
                Session::put('studfname',$data->name);
                return redirect('/');
            }
            else{
                return redirect()->back()->with('error',"please enter right EMAIL and PASSWORD");
            }
        }
        else{
            return redirect()->back()->with('error',"enter email and password");
        }
    }
    public function logout()
    {
        Session()->forget('user_id');
        Session()->forget('studemail');
        Session()->forget('studfname');
        return redirect('login');
    }
}
