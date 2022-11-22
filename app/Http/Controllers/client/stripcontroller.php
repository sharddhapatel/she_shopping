<?php


namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Stripe;
use Illuminate\Support\Facades\Session;

class stripcontroller extends Controller
{
    public function strip()
    {
        $addresh = DB::table('address')->get();
        return view('client.strip')->with('addresh', $addresh);
    }
    public function storeaddresh(Request $request)
    {
        $user_id = Session::get('user_id');
        $email = Session::get('studemail');
        $name = Session::get('studfname');
        $data = $request->all();
        $cart = Session::get('cart' . $user_id);
        $total = 0;
        $pro_quality = '';
        $pid = '';
        foreach ($cart as $ccart)
        {
            $total += $ccart['tblproductprice'] * $ccart['quantity'];
            $qty = $ccart['quantity'] . "," . $pro_quality;
            $pid = $ccart['id'] . "," . $pid;
        }
        // echo "<pre>";
        //     print_r($pid);
        //     die;
        if (@$data['oldadd'] != '') {
            $address = $data['oldadd'];
            $oid = DB::table('carttbl')->insertGetId(["uid" => $user_id, "pid" => $pid, "price" => $total, "pro_quality" => $qty, "address" => $address, "status" => "pending"]);
        }
        if ($data['newaddress'] != '' && $data['city'] != '' && $data['zipcode'] != '') {
            DB::table('address')->insert(['uid' => $user_id, "addresh" => $data['newaddress'], "city" => $data['city'], "zipcode" => $data['zipcode']]);
            $address = $data['newaddress'] . " , " . $data['city'] . " , " . $data['zipcode'];

            $oid = DB::table('carttbl')->insertGetId(["uid" => $user_id, "pid" => $pid, "price" => $total, "pro_quality" => $qty, "address" => $address, "status" => "pending"]);
        }
        $month = $request->input('month');
        $year = $request->input('year');
        $expiredate = $month . "/" . $year;

        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $customer = Stripe\Customer::create(array(
            'name' =>  $name,
            'email' => $email,
            'source' => $request->stripeToken
        ));
        $payment_intent = Stripe\PaymentIntent::create(array(
            'shipping' => [
                'name' => $name,
                'address' => [
                    'line1' => $address,
                    'country' => 'US',
                ],
            ],
            'metadata' => array(
                'user_id' => $user_id,
            ),
            'customer' => $customer->id,
            'amount' => $total * 100,
            'currency' => "inr",
            'description' => "Card Payment",
        ));

        // $intent = $payment_intent->client_secret;
        // $payment_intent = \Stripe\PaymentIntent::create([

        //     'description' => 'Stripe Test Payment',
        //     'amount' => $total * 100,
        //     'currency' => 'INR',
        //     'description' => 'Payment From Codehunger',
        //     'payment_method_types' => ['card'],
        // ]);
        // $intent = $payment_intent->client_secret;
        Session::flash('success', 'Payment successful!');

        DB::table('bill')->insert(["order_id" => $oid, "cardname" => $data['cardname'], "cardno" => $data['cardno'], "cvv" => $data['cvv'], "expiry_month" => $data['month'], "expiry_year" => $data['year'], "payment_method" => "card", "payment_status" => $payment_intent['status'], 'charge_id' => $payment_intent['id']]);
        // echo"<pre>";
        // print_r($payment_intent);
        // die();
        Session::forget('cart' . $user_id);
        return redirect('product')->with('message', 'Order Sucessfully');
        }
    }

