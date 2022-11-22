<?php


namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\contact;
use Illuminate\Support\Facades\Session;
class cartcontroller extends Controller
{
    public function cart()
    {
        return view('client.detail');
    }

    public function addtocart(Request $request, $id)
    {
        $user_id = Session::get('user_id');
        $product = DB::select('select * from tblproduct where id=' . $id);

        $cart = Session::get('cart' . $user_id);
        if (isset($cart[$id])) {
            $cart[$id]['quantity'] += 1;
            session()->put('cart' . $user_id, $cart);
            return redirect()->back()->with('success', 'Product added to cart successfully!');
        }
        $cart[$product[0]->id] = array(
            "id" => $product[0]->id,
            "tblproductitle" => $product[0]->tblproductitle,
            "tblproductprice" => $product[0]->tblproductprice,
            "tblproductimage" => $product[0]->tblproductimage,
            "quantity" => 1,
        );
        Session::put('cart' . $user_id, $cart);
  
        return redirect()->back()->with(["message" => "Product added to cart successfully!"]);
    }
    public function update(Request $request)
    {
        if ($request->id and $request->quantity) {
            $user = Session::get('user_id');
            $cart = session()->get('cart' . $user);
            $cart[$request->id]["quantity"] = $request->quantity;
            session()->put('cart' . $user, $cart);
            session()->flash('message', 'Cart Updated Successfully');
        }
        return redirect()->back();
    }
    // public function remove(Request $request)
    // {
    //     if($request->id) {
    //         $user = Session::get('user_id');
    //         $cart = session()->get('cart' .$user);
    //         if(isset($cart[$request->id])) {
    //             unset($cart[$request->id]);
    //             session()->put('cart', $cart);
    //         }
    //         session()->flash('success', 'Product removed successfully');
    //     }
    // }

    public function remove(Request $request)
    {
        if($request->id) {
            $cart = session()->get('cart');
            if(isset($cart[$request->id])) {
                unset($cart[$request->id]);
                session()->put('cart', $cart);
            }
            session()->flash('success', 'Product removed successfully');
        }
    }



    
    public function cartdemo(){
        return view('client.adddemo');
    }

}
