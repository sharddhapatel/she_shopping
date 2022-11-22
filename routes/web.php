<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\admincontroller;
use App\Http\Controllers\admin\CatagoryController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\ImageController;
use App\Http\Controllers\client\HomeController;
USE App\Http\Controllers\client\rejestercontroller;
use App\Http\Controllers\client\cartcontroller;
use App\Http\Controllers\client\stripcontroller;
use App\Http\Controllers\admin\timercontroller;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
route::get('admin',[admincontroller::class,'login']);
route::get('search_date',[CatagoryController::class,'searchdate']);
// route::post('storedata',[CatagoryController::class,'store']);
route::get('demo',[admincontroller::class,'demo']);
route::post('indemo',[admincontroller::class,'indemo']);



route::get('sliderdemo',[admincontroller::class,'sliderdemo']);


route::post('adminlogin',[admincontroller::class,'adminlogin']);
Route::group(['middleware'=>'Client'],function()
{
route::get('additem',[admincontroller::class,'additem']);
route::get('index',[admincontroller::class,'index']);
route::get('adminlogout',[admincontroller::class,'logout']);
route::get('showcontact',[admincontroller::class,'showcontact']);
//**********************************catagoty****************************
route::post('insertcat',[CatagoryController::class,'insertcat']);
route::get('showcatagory',[CatagoryController::class,'showcatagory']);
route::get('editcatagory/{id}',[CatagoryController::class,'editcatagory']);
route::post('editcat/{id}',[CatagoryController::class,'editcat']);
route::post('editcata',[CatagoryController::class,'editcat']);
route::get('deletecatagory/{id}',[CatagoryController::class,'deletecatagory']);

// *************************************prouct***********************************
route::get('aproduct',[ProductController::class,'product']);
route::post('insertpro',[ProductController::class,'insertpro']);
route::get('showproduct',[ProductController::class,'showproduct']);

route::get('search',[ProductController::class,'search']);

route::get('editproduct/{id}',[ProductController::class,'editproduct']);
route::post('editprodact',[ProductController::class,'editprod']);
route::get('deleteprodut/{id}',[ProductController::class,'deleteprodut']);
route::get('showproductdetail/{id}',[ProductController::class,'showproductdetail']);
 route::get('viewimage/{id}',[ProductController::class,'viewimage']);
 route::get('summarenote',[ProductController::class,'summare']);
// ************************************IMG************************************
route::get('proimg/{id}',[ImageController::class,'proimg']);
route::post('insertimg',[ImageController::class,'insertimg']);
route::get('showimg',[ImageController::class,'showimg']);
route::get('editimg/{id}',[ImageController::class,'editimg']);
route::post('editimages',[ImageController::class,'editimages']);
route::get('deleteimages/{id}',[ImageController::class,'deleteimages']);

// ************************************TIMER***********************************

});
// **************************************************************************************************
// ***********************************CLIENT*********************************************************
route:: get('register',[rejestercontroller::class,'register']);
route::post('insertrej',[rejestercontroller::class,'insertrej']);
route::get('getcities/{id}',[rejestercontroller::class,'getcities']);
route:: get('login',[rejestercontroller::class,'login']);
route:: get('logout',[rejestercontroller::class,'logout']);
route:: post('clientlogin',[rejestercontroller::class,'clientlogin']);

route::get('forget',[HomeController::class,'forget']);
route::post('resetlink',[HomeController::class,'resetlink']);
route::get('reset/{token}',[HomeController::class,'reset']);
route::post('resendpassword',[HomeController::class,'resendpassword']);


route:: get('/',[HomeController::class,'clientindex']);
route:: get('product',[HomeController::class,'product']);
route:: get('lengha',[HomeController::class,'lengha']);
route:: get('contact',[HomeController::class,'contact']);
route:: get('show',[HomeController::class,'show']);
route:: get('color',[HomeController::class,'color']);
route:: get('viewdetail/{id}',[HomeController::class,'viewdetail']);
route::get('getcatrgoty/{id}',[HomeController::class,'getcatrgoty']);

route:: get('rating',[HomeController::class,'rating']);
route:: post('rate',[HomeController::class,'insertrate']);
Route::group(['middleware'=>'admin'],function()
{

// route::get('getcatrgoty/{id}',[HomeController::class,'getcatrgoty']);
route:: get('showtimer',[timercontroller::class,'showtimer']);
route:: get('addtimer',[timercontroller::class,'addtimer']);
route:: post('inserttimer',[timercontroller::class,'inserttimer']);
// **********************************************************************************
// *****************************CART*************************************************
route:: get('cart',[cartcontroller::class,'cart']);
route:: get('addtocart/{id}',[cartcontroller::class,'addtocart']);
route:: get('update-cart',[cartcontroller::class,'update']);
route::delete('removecart',[cartcontroller::class,'remove']);
route:: get('strip',[stripcontroller::class,'strip']);
route:: post('storeaddresh',[stripcontroller::class,'storeaddresh']);

route:: get('cartdemo',[cartcontroller::class,'cartdemo']);
});




