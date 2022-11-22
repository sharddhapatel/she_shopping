<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\contact;
use Illuminate\Support\Facades\Notification;
use App\Models\rejester;
use App\Models\User;
use App\Models\product;
use App\Notifications\Resetpassword;
use Illuminate\Support\Facades\Hash;
use Illuminate\Pagination\Paginator;
USE App\Models\rate;

class HomeController extends Controller
{
    public function clientindex()
    {
        return view('client.index');
    }
    public function product(Request $request)
    {
        // $page = product::paginate(3);
        $page=DB::table('tblproduct')->paginate(5);
        // dd($page);
        return view('client.product',compact('page'));
        // return view('client.product', [
        //     'users' => DB::table('tblproduct')->paginate(5)
        // ]);
    }
    public function color(Request $request)
    {
        // $productcode=tblproduct::where('productcode',$request->get('tblproductcode'))->first();
        // $productcolor=tblproduct::where('productcolor',$request->get('color'))->first();

        // if($productcode "=" $productcolor)
        // {
        //     return redirect('client.color');
        // }
        // else
        // {
        //     return redirect()->back()->with('error', 'color are not the same');
        // }
        // if()
        // {

        // }
        // else{

        // }
        return view('client.color');
    }
    public function getcatrgoty($id)
    {
        $catdata = DB::table('tblcatagory')
            ->join('tblproduct', 'tblproduct.cid', '=', 'tblcatagory.id')
            ->where('tblcatagory.id',$id)
            ->get();

        return view('client.showpd')->with(['catdata' => $catdata]);
    }


    public function contact()
    {
        return view('client.contact');
    }

    public function lengha()
    {
        $data = DB::table('tblproduct')->get();
        return view('client.lengha')->with(['data' => $data]);
    }

    public function viewdetail($id)
    {

        $pdata = DB::table('tblcatagory')
            ->join('tblproduct', 'tblproduct.cid', '=', 'tblcatagory.id')
            ->where('tblproduct.id', $id)
            ->get();

        $imgdata = DB::table('tblproduct')
            ->join('addimage', 'addimage.pid', '=', 'tblproduct.id')
            ->where('tblproduct.id', $id)
            ->get();

// echo"<pre>";
// print_r($imgdata);
        return view('client.productdetail')->with(['pdata' => $pdata, 'imgdata' => $imgdata]);
    }
    public function insertcontact(Request $request)
    {
        $contact = new contact;
        $contact->fname = $request->get('fname');
        $contact->email = $request->get('email');
        $contact->phoneno = $request->get('phoneno');
        $contact->message = $request->get('message');

        $contact->save();
        return redirect()->back()->with('message', 'Contact added successfully');
    }
    public function forget()
    {
        return view('client.forget');
    }
    public function resetlink(Request $request)
    {
        $data = $request->all();
        $remember_token = rand(100000, 999999);
        $email = $request->input('email');
        $same = DB::table('registration')->where(['email' => $email])->count();

        $time = date('y-m-d H:i:s', time());
        if ($same > 0) {
            $reset = DB::table('registration')->where(['email' => $email])->update(['remember_token' => $remember_token, 'updated_at' => $time]);

            $list = DB::table('registration')->where(['email' => $email])->first();
            $users = rejester::where("email", $data['email'])->first();

            Notification::send($users, new ResetPassword($remember_token));
            return redirect('forget')->with(["message" => "Link send successfully...", "list" => $list]);
        } else {
            return redirect('forget')->with('error', "Email must be Rejestered First");
        }
    }

    public function reset(Request $request, $token)
    {
        $email = $request->input('email');
        $time = date('Y-m-d H:i:s', time());
        $query = DB::table('registration')->where('remember_token', $token)->get();
        if (count($query) > 0) {
            DB::table('registration')->where('remember_token', $token)->whereRaw('ABS(TIMESTAMPDIFF(MINUTE, "' . $query[0]->updated_at . '", ?)) >=1', [$time])->update(array("remember_token" => $token, 'updated_at' => $time));
        }
        $list = DB::table('registration')->where(['remember_token' => $token])->first();
        if ($list) {
            return view('client.resend')->with(["list" => $list, 'token' => $token]);
        } else {
            return redirect('forget')->with('error', 'Link Expire plese Resend The Link');
        }
    }

    public function resendpassword(Request $request)
    {
        $data = $request->all();
        $npass = $request->input('npass');
        $cpass = $request->input('cpass');
        $id = $request->input('id');

        $time = date('Y-m-d H:i:s', time());
        $list = DB::table('registration')->where('id', $data['id'])->first();

        if ($npass != '' && $cpass != '') {
            if ($npass == $cpass) {
                $b = DB::table('registration')->where('id', $id)->update(["password" => $npass,'updated_at' => $time]);
                return redirect('login')->with(['data' => $data, 'id' => $id]);
            } else {
                return redirect()->back()->with("error", "New Password and Confirm Password not same");
            }
        }
         else {
            return redirect()->back()->with("error", "Plese Fill all Fields");
        }
    }
    public function rating(){
        return view('client.rating');
    }
    public function insertrate(Request $request)
    {
        $rate = $request->input('rate');
        if ($request->isMethod('get')) {
                     return view('client.productdetail');
                 } else {
                     $data = $request->all();
        
                     $ans = DB::table('ret')->insert(["rating"=>$rate]);
        
                     return redirect()->back()->with("message", "Insert Sucessfully...");
                 }
                 
    }
    // public function insertrate(Request $request)
    // {
    //     $rating = new rate;   
    //     $rating->rating = $request->get('rate');
    //     $rating->save();
    
    //     return redirect()->back()->with('message', 'Rate added successfully');
    // }
}




   