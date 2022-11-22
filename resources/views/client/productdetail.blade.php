@extends('client.header-footer')
@section('contant')
<link rel="stylesheet" href="{{URL:: asset('assets/css/style.css')}}">

<div class="breadcrumb-container lazy" style="background-image: url('client/assests/img/mani-banner-2.jpg');" data-was-processed="true">
    <nav class="breadcrumbs page-width breadcrumbs-empty">

        <h3 class="head-title">Fashion </h3>

        <a href="/" title="Back to the frontpage">Home</a>

        <span>Fashion</span>
    </nav>
</div>
<br>
<br>
<div class="page-container  " id="PageContainer">
    <main class="main-content" id="MainContent">

        <div class="page-width collection_templete">
            <div class="row">
                <div id="_desktop_sidebar" class="col-md-3 col-sm-12 col-xs-12 normal-sidebar sidebar_content">
                    <div id="shopify-section-Ishi_sidebar" class="shopify-section">
                        <div data-section-id="Ishi_sidebar" data-section-type="sidebar-section">
                        </div>
                    </div>
                </div>

                <div class="normal_main_content col-md-9">
                    <div id="shopify-section-product-template" class="shopify-section">
                        <div class="product-template__container" id="ProductSection-product-template" data-section-id="product-template" data-section-type="product" data-enable-history-state="true">

                            <div class="row product-single">
                                <div class="col-sm-6 product-single__photos product-single-left" data-product-single-media-group="">
                                    <h3 itemprop="name" class="product-single__title text-center hidden-sm-up">Formal gray shirt
                                    </h3>

                                    <div class="single-left">
                                        <div class="">
                                            <div class="slider-for slick-initialized">
                                                <div class="slick-list draggable">
                                                    <div class="slick-track" style="opacity: 1;">
                                                        <!-- <div class="product1 slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style="width: 533px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;"> -->
                                                        @foreach ($pdata as $data )
                                                        <img id="featured" src="{{ url('item_img') }}/{{ $data->tblproductimage }}" height="500" width="1500px" alt="">

                                                        <!-- </div> -->

                                                    </div>
                                                </div>
                                            </div>
                                            <div id="slide-wrapper">
                                                <img id="slideLeft" class="arrow" src="{{URL::asset('client/assests/img/arrow-left.jpg')}}" alt="" srcset="">
                                                <div id="slider">

                                                    <img class="thumbnail active" src="{{ url('item_img') }}/{{ $data->tblproductimage }}" alt="{{ url('item_img') }}/{{ $data->tblproductimage  }}" height="120px" srcset="">


                                                    @foreach($imgdata as $productd)
                                                    <img class="thumbnail active" src="{{ url('item_img') }}/{{ $productd->image }}" alt="{{ url('item_img') }}/{{ $productd->image }}" height="120px" srcset="">
                                                    
                                                    @endforeach
                                                </div>
                                                <img id="slideRight" class="arrow" src="{{URL::asset('client/assests/img/arrow-right.jpg')}}" alt="" srcset="">
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 product-single-right">
                                    <div class="product-single__meta">

                                        <h1 itemprop="name" class="product-single__title hidden-sm-down">
                                            {{$data->tblproductitle}}
                                        </h1>

                                        <div class="review">
                                            {{-- <span class="spr-badge" id="spr_badge_4634914029623" data-rating="4.0"><span class="spr-starrating spr-badge-starrating"><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star-empty"></i></span>
                                                <span class="spr-badge-caption">1 review</span>
                                            </span>


                                            <a href="javascript:void(0);" class="write_comment" aria-describedby="a11y-external-message">Write Review<i class="material-icons comments" aria-hidden="true"></i></a> --}}
                                            <!-- <div style="margin-top: 12px;color: #000000;font-weight: 500;">Share your experience with others!</div> -->


                                            <form method="post" action="{{url('rate')}}" enctype="multipart/form-data">
                                                {{csrf_field()}}
                                                {{-- <input type="hidden"  name="id"  class="form__input" placeholder="name" value="{{$data->id}}"> --}}
                                                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
                                                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                
                                                <div class="rating left" >
                                                    <div class="stars right" name="rate">
                                                        {{-- <a class="star" name="rate" value="one"></a>
                                                        <a class="star" name="rate"  value="two" ></a>
                                                        <a class="star" name="rate" value="three" ></a>
                                                        <a class="star" name="rate" value="four" ></a>
                                                        <a class="star" name="rate" value="five" ></a> --}}
                                                       
                                                    </div> 
                                               
                                                </div>
                                                {{-- <button type="submit" >Rate</button> --}}
                                                
                                            </form>
                                        </div>

                                        <div class="price-product" data-price="">
                                            <div class="product-single__price product-single__price-product-template">

                                                <span class="visually-hidden">Regular price</span>
                                                <span class="product-price__price product-price__price-product-template">
                                                    <span id="ProductPrice-product-template" itemprop="price" style="text-decoration: none;" data-regular-price="">

                                                        <i class="fa fa-rupee" style="font-size:36px"></i>{{$data->tblproductprice}}
                                                    </span>
                                                    <s id="ComparePrice-product-template" itemprop="price" class="regular-price hide"></s>
                                                </span>
                                            </div>
                                        </div>


                                        <p itemprop="brand" class="product-single__vendor">Product Code :
                                            <span>{{$data->tblproductcode}}</span>
                                        </p>
                                        <p itemprop="brand" class="product-single__vendor">Discripation :
                                            <span> {!! nl2br($data->discripation) !!}</span>

                                        </p>
                                        <div class="ishi-progress-content" data-quantity="10">
                                            <div class="quantity-value">
                                                Hurry! Only
                                                <div id="variant-stock" class="variant_quantity">
                                                    3
                                                </div>
                                                units left in stock!
                                            </div>
                                            <div id="ishi-progress-bar">
                                                <span style="width: 35%;"></span>
                                            </div>
                                        </div>
                                        <?php  $samedata=DB::table('tblproduct')
                                        ->where('tblproduct.tblproductcode', $data->tblproductcode)
                                       ->get();?>
                                        <div id="slide-wrapper">
                                            <img id="slideLeft" class="arrow" src="{{URL::asset('client/assests/img/arrow-left.jpg')}}" alt="" srcset="">
                                            <div id="slider">

                                            {{-- <img class="thumbnail active" src="{{ url('item_img') }}/{{ $samedata->tblproductimage }}" alt="{{ url('item_img') }}/{{ $samedata->tblproductimage  }}" height="120px" srcset=""> --}}
                                                @foreach($samedata as $produt)
                                                <img class="thumbnail" src="{{ url('item_img') }}/{{ $produt->tblproductimage }}" alt="{{ url('item_img') }}/{{ $produt->tblproductimage }}" height="120px" srcset="">
                                                @endforeach
                                            </div>
                                            <img id="slideRight" class="arrow" src="{{URL::asset('client/assests/img/arrow-right.jpg')}}" alt="" srcset="">
                                        </div>
                                        <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer" class="product-selection-bottom">
                                            <meta itemprop="priceCurrency" content="USD">
                                            <meta itemprop="price" content="54.0">
                                            <link itemprop="availability" href="http://schema.org/InStock">
                                            <div class="product-selection ">
                                                <form method="post" action="/cart/add" id="product_form_4634914029623" accept-charset="UTF-8" class="product-form cart-product-page product-form-product-template" enctype="multipart/form-data" novalidate="novalidate" data-product-form="" data-section="product-template">
                                                    <input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓">

                                                    <div class="product-form__controls-group">

                                                        <div class="selector-wrapper js product-form__item">
                                                            <label for="SingleOptionSelector-0">
                                                                Size
                                                            </label>
                                                            <select class="single-option-selector single-option-selector-product-template product-form__input" id="SingleOptionSelector-0" data-index="option1">

                                                                <option value="S" selected="selected">S
                                                                </option>

                                                                <option value="M">M</option>

                                                            </select>
                                                        </div>
                                                        <div class="selector-wrapper js product-form__item">
                                                            <label for="SingleOptionSelector-1">
                                                                Color
                                                            </label>
                                                            <select class="single-option-selector single-option-selector-product-template product-form__input" id="SingleOptionSelector-1" data-index="option2">
                                                                <option value="Blue" selected="selected">
                                                                    Blue</option>
                                                                <option value="Red">Red</option>
                                                            </select>
                                                        </div>


                                                    </div>

                                                    {{-- <div class="quantity-cart">
                                                        <div class="product-form__item product-form__item--quantity selector-wrapper">
                                                            <label>Quantity</label>
                                                            <div class="dec button qtyminus">-</div>
                                                            <input name="quantity" value="1" class="quantity" data-quantity-input="">
                                                            <div class="inc button qtyplus">+</div>
                                                        </div>



                                                    </div>
                                                    <input type="hidden" name="return_to" value="back">
                                                    <div class="dynamic-checkout" style="display: flex;width: 100%;">
                                                        <div class="product-form__item product-form__item--submit col-sm-6">
                                                            <button type="button" id="AddToCart-product-template" name="add" class="product-addToCart addToCart enable btn" data-add-to-cart="">
                                                                
                                                                    ADD TO CART
                                                               
                                                            </button>
                                                        </div>
                                                        <div class="product-form__item product-form__item--submit col-sm-6">
                                                            <a href="checkouts.html">
                                                                <button style="background-color: #000;" type="button" id="AddToCart-product-template" name="add" class="product-addToCart addToCart enable btn" data-add-to-cart="">
                                                                    BUY IT NOW
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div> --}}

                                                    <div id="shopify-section-160439910015930d88" class="shopify-section ishi-service-block-style1">
                                                        <div class="ishiservices">

                                                            <div class="ishiservices-content page-width-2 ">
                                                                <div class="service-block " id="services-160439910015930d88">



                                                                    <div class="services col-xs-12 card-555">
                                                                        <a href="/">
                                                                            <div class="service-img-outer">
                                                                                <div class="service-img">

                                                                                    <img src="assests/img/d-2.webp" alt="">

                                                                                </div>
                                                                            </div>
                                                                            <div class="service-text">

                                                                                <div class="service-title">MONEY BACK</div>


                                                                                <div class="service-desc">14 Days to change your mind</div>

                                                                            </div>
                                                                        </a>
                                                                    </div>

                                                                    <div class="services  col-xs-12 card-555">
                                                                        <a href="/">
                                                                            <div class="service-img-outer">
                                                                                <div class="service-img">

                                                                                    <img src="assests/img/d-3.webp" alt="">

                                                                                </div>
                                                                            </div>
                                                                            <div class="service-text">

                                                                                <div class="service-title">1000 PRODUCT ADD</div>


                                                                                <div class="service-desc">Products added every day</div>

                                                                            </div>
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>


                                                        </div>


                                                        <style type="text/css">
                                                            .ishi-service-block-style1 {
                                                                margin-bottom: 70px;
                                                            }

                                                            @media (min-width: 768px) {
                                                                .ishi-service-block-style1 {
                                                                    margin-top: 0px;
                                                                }
                                                            }

                                                            @media (max-width: 767px) {
                                                                .ishi-service-block-style1 {
                                                                    margin-bottom: 30px;
                                                                }
                                                            }
                                                        </style>

                                                    </div>

                                            </div>
                                        </div>

                                        </form>
                                    </div>
                                </div>
                            </div>


                            <!-- <div class="row product-single">
                                <div class="col-sm-6 product-single__photos product-single-left" data-product-single-media-group="">
                                    <h3 itemprop="name" class="product-single__title text-center hidden-sm-up">Formal
                                        gray shirt
                                    </h3>

                                    <div class="single-left">
                                        <div class="">
                                            <div class="slider-for">
                                                <div class="product1">

                                                    <img src="{{ url('item_img') }}/{{ $data->tblproductimage }}" height="auto" alt="">

                                                </div>
                                            </div>

                                        </div>
                                        <div id="slide-wrapper" style="display: flex;">



                                            @foreach($imgdata as $img)

                                            <div id="slider">
                                                <img class="thumbnail active" src="{{ url('item_img') }}/{{ $img->tblproductimage }}" alt="" height="200px" srcset="">

                                            </div>
                                            @endforeach

                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 product-single-right">
                                    <div class="product-single__meta">

                                        <h1 itemprop="name" class="product-single__title hidden-sm-down">
                                            Formal gray shirt</h1>

                                        <div class="review">
                                            <span class="spr-badge" id="spr_badge_4634914029623" data-rating="4.0"><span class="spr-starrating spr-badge-starrating"><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star-empty"></i></span>
                                                <span class="spr-badge-caption">1 review</span>
                                            </span>


                                            <a href="javascript:void(0);" class="write_comment" aria-describedby="a11y-external-message">Write Review<i class="material-icons comments" aria-hidden="true"></i></a>

                                        </div>

                                        <div class="price-product" data-price="">
                                            <div class="product-single__price product-single__price-product-template">

                                                <span class="visually-hidden">Regular price</span>
                                                <span class="product-price__price product-price__price-product-template">
                                                    <span id="ProductPrice-product-template" itemprop="price" style="text-decoration: none;" data-regular-price="">
                                                        $54.00
                                                    </span>
                                                    <s id="ComparePrice-product-template" itemprop="price" class="regular-price hide"></s>
                                                </span>

                                            </div>
                                        </div>


                                        <p itemprop="brand" class="product-single__vendor">Vendor :
                                            <span>Aveda</span>
                                        </p>


                                        <p itemprop="brand" class="product-single__vendor">Product Type :
                                            <span>fashion</span>
                                        </p>



                                        <div class="wishlist-chart">
                                            <div class="add-to-wishlist">
                                                <div class="show">
                                                    <div class="default-wishbutton-formal-gray-shirt loading">
                                                        <a class="add-in-wishlist-js btn" data-href="formal-gray-shirt"><i class="fa fa-heart"></i><span class="tooltip-label">Add
                                                                to
                                                                wishlist</span></a>
                                                    </div>
                                                    <div class="loadding-wishbutton-formal-gray-shirt loading btn loader-btn" style="display: none; pointer-events: none"><a class="add_to_wishlist" data-href="formal-gray-shirt"><i class="fa fa-circle-o-notch fa-spin"></i><span class="tooltip-label">Add to
                                                                wishlist</span></a></div>
                                                    <div class="added-wishbutton-formal-gray-shirt loading" style="display: none;"><a class="added-wishlist btn add_to_wishlist" href="/pages/wishlist"><i class="fa fa-heart"></i><span class="tooltip-label">View
                                                                Wishlist</span></a></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="ishi-progress-content" data-quantity="10">
                                            <div class="quantity-value">
                                                Hurry! Only
                                                <div id="variant-stock" class="variant_quantity">
                                                    3
                                                </div>
                                                units left in stock!
                                            </div>
                                            <div id="ishi-progress-bar">
                                                <span style="width: 35%;"></span>
                                            </div>
                                        </div>


                                        <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer" class="product-selection-bottom">
                                            <meta itemprop="priceCurrency" content="USD">
                                            <meta itemprop="price" content="54.0">
                                            <link itemprop="availability" href="http://schema.org/InStock">
                                            <div class="product-selection ">
                                                <form method="post" action="/cart/add" id="product_form_4634914029623" accept-charset="UTF-8" class="product-form cart-product-page product-form-product-template" enctype="multipart/form-data" novalidate="novalidate" data-product-form="" data-section="product-template">
                                                    <input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓">
                                                    <div class="quantity-cart">
                                                        <div class="product-form__item product-form__item--quantity selector-wrapper">
                                                            <label>Quantity</label>
                                                            <div class="dec button qtyminus">-</div>
                                                            <input name="quantity" value="1" class="quantity" data-quantity-input="">
                                                            <div class="inc button qtyplus">+</div>
                                                        </div>

                                                        <select name="id" id="ProductSelect-product-template" data-section="product-template" class="product-form__variants no-js">
                                                            <option selected="selected" value="32384508919863" data-stock="3">
                                                                S / Blue
                                                            </option>
                                                            <option disabled="disabled">S / Red - SOLD OUT
                                                            </option>
                                                            <option value="32384509018167" data-stock="2">
                                                                M / Blue
                                                            </option>
                                                            <option value="32384509050935" data-stock="1">
                                                                M / Red
                                                            </option>


                                                        </select>

                                                    </div>
                                                    <input type="hidden" name="return_to" value="back">
                                                    <div class="dynamic-checkout" style="display: flex;width: 100%;">
                                                        <div class="product-form__item product-form__item--submit col-sm-6">
                                                            <button type="button" id="AddToCart-product-template" name="add" class="product-addToCart addToCart enable btn" data-add-to-cart="">
                                                                ADD TO CART
                                                            </button>
                                                        </div>
                                                        <div class="product-form__item product-form__item--submit col-sm-6">
                                                            <a href="checkouts.html">
                                                                <button style="background-color: #000;" type="button" id="AddToCart-product-template" name="add" class="product-addToCart addToCart enable btn" data-add-to-cart="">
                                                                    BUY IT NOW
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div id="shopify-section-160439910015930d88" class="shopify-section ishi-service-block-style1">
                                                        <div class="ishiservices">

                                                            <div class="ishiservices-content page-width-2 ">
                                                                <div class="service-block " id="services-160439910015930d88">



                                                                    <div class="services col-xs-12 card-555">
                                                                        <a href="/">
                                                                            <div class="service-img-outer">
                                                                                <div class="service-img">

                                                                                    <img src="{{URL:: asset('client/assests/img/d-2.webp')}}" alt="">

                                                                                </div>
                                                                            </div>
                                                                            <div class="service-text">

                                                                                <div class="service-title">MONEY BACK
                                                                                </div>


                                                                                <div class="service-desc">14 Days to
                                                                                    change your mind</div>

                                                                            </div>
                                                                        </a>
                                                                    </div>

                                                                    <div class="services  col-xs-12 card-555">
                                                                        <a href="/">
                                                                            <div class="service-img-outer">
                                                                                <div class="service-img">

                                                                                    <img src="{{URL:: asset('client/assests/img/d-3.webp')}}" alt="">

                                                                                </div>
                                                                            </div>
                                                                            <div class="service-text">

                                                                                <div class="service-title">1000 PRODUCT
                                                                                    ADD</div>


                                                                                <div class="service-desc">Products added
                                                                                    every day</div>

                                                                            </div>
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>


                                                        </div>


                                                        <style type="text/css">
                                                            .ishi-service-block-style1 {
                                                                margin-bottom: 70px;
                                                            }

                                                            @media (min-width: 768px) {
                                                                .ishi-service-block-style1 {
                                                                    margin-top: 0px;
                                                                }
                                                            }

                                                            @media (max-width: 767px) {
                                                                .ishi-service-block-style1 {
                                                                    margin-bottom: 30px;
                                                                }
                                                            }
                                                        </style>

                                                    </div>

                                            </div>
                                        </div>

                                        </form>
                                    </div>
                                </div>
                            </div> -->



                        </div>
                    </div>

                    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
                    <script>
                        $(document).ready(function() {
                            resetstarcolor();
                            $('.fa-star').mouseover(function() {
                                resetstarcolor();
                
                                var currentIndex = parseInt($(this).data('rating'));
                                for (var i=1; i<=currentIndex; i++)
                                $('.fa-star:eq('+i+')').css('color','green');
                
                            });
                            $('.fa-star').mouseleave(function() {
                            });
                        });
                        function resetstarcolor(){
                    </script>

                    {{-- rating --}}

                    <script type="text/javascript">
                        jQuery(document).ready(function($)
                         {
                          $('.rating .star').hover(function() {
                            $(this).addClass('to_rate');
                            $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
                            $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
                          }).mouseout(function() {
                            $(this).parent().find('.star').removeClass('to_rate');
                            $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
                          }).click(function() {
                            $(this).removeClass('to_rate').addClass('rated');
                            $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
                            $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
                            /*Save your rate*/
                            /*TODO*/
                          });
                        });
                        </script> 

                    {{-- *rating --}}
                    <script type="application/json" id="ProductJson-product-template">
                        {
                            "id": 4634914029623,
                            "title": "Formal gray shirt",
                            "handle": "formal-gray-shirt",
                            "description": "\u003cp\u003eFaded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!\u003c\/p\u003e\n\u003ch4\u003eSample Unordered List\u003c\/h4\u003e\n\u003cul\u003e\n\u003cli\u003eComodous in tempor ullamcorper miaculis\u003c\/li\u003e\n\u003cli\u003ePellentesque vitae neque mollis urna mattis laoreet.\u003c\/li\u003e\n\u003cli\u003eDivamus sit amet purus justo.\u003c\/li\u003e\n\u003cli\u003eProin molestie egestas orci ac suscipit risus posuere loremou.\u003c\/li\u003e\n\u003c\/ul\u003e\n\u003ch4\u003eSample Ordered Lista\u003c\/h4\u003e\n\u003col\u003e\n\u003cli\u003eComodous in tempor ullamcorper miaculis\u003c\/li\u003e\n\u003cli\u003ePellentesque vitae neque mollis urna mattis laoreet.\u003c\/li\u003e\n\u003cli\u003eDivamus sit amet purus justo.\u003c\/li\u003e\n\u003cli\u003eProin molestie egestas orci ac suscipit risus posuere loremous\u003c\/li\u003e\n\u003c\/ol\u003e\n\u003ch4\u003eSample Paragraph Text\u003c\/h4\u003e\n\u003cblockquote\u003e\n\u003cp\u003eFaded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!\u003c\/p\u003e\n\u003c\/blockquote\u003e\n\u003cdiv class=\"custom-tab\"\u003e\n\u003cdiv class=\"title\"\u003ecustom tab1\u003c\/div\u003e\n\u003cdiv class=\"description\"\u003e\n\u003cp\u003eThis is a custom product tab. You can set different content for tabs for each product. You can add content of the tabs in the admin on product configuration page.\u003c\/p\u003e\n\u003c\/div\u003e\n\u003c\/div\u003e",
                            "published_at": "2020-11-13T01:06:56-05:00",
                            "created_at": "2020-11-13T01:07:02-05:00",
                            "vendor": "Aveda",
                            "type": "fashion",
                            "tags": ["brand_nike", "brand_reebok", "color_green", "color_yellow", "fashion_kids", "fashion_men", "fashion_women", "size_l", "size_m", "size_s", "size_xl"],
                            "price": 5400,
                            "price_min": 5400,
                            "price_max": 5500,
                            "available": true,
                            "price_varies": true,
                            "compare_at_price": null,
                            "compare_at_price_min": 0,
                            "compare_at_price_max": 0,
                            "compare_at_price_varies": false,
                            "variants": [{
                                "id": 32384508919863,
                                "title": "S \/ Blue",
                                "option1": "S",
                                "option2": "Blue",
                                "option3": null,
                                "sku": "",
                                "requires_shipping": true,
                                "taxable": true,
                                "featured_image": {
                                    "id": 15385735397431,
                                    "product_id": 4634914029623,
                                    "position": 1,
                                    "created_at": "2020-11-13T02:22:22-05:00",
                                    "updated_at": "2020-11-13T02:22:22-05:00",
                                    "alt": null,
                                    "width": 1000,
                                    "height": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/18_4988bca6-124e-455d-bcf9-27d050106904.png?v=1605252142",
                                    "variant_ids": [32384508919863]
                                },
                                "available": true,
                                "name": "Formal gray shirt - S \/ Blue",
                                "public_title": "S \/ Blue",
                                "options": ["S", "Blue"],
                                "price": 5400,
                                "weight": 0,
                                "compare_at_price": null,
                                "inventory_management": "shopify",
                                "barcode": null,
                                "featured_media": {
                                    "alt": null,
                                    "id": 7553714094135,
                                    "position": 1,
                                    "preview_image": {
                                        "aspect_ratio": 1.0,
                                        "height": 1000,
                                        "width": 1000,
                                        "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/18_4988bca6-124e-455d-bcf9-27d050106904.png?v=1605252142"
                                    }
                                }
                            }, {
                                "id": 32384508985399,
                                "title": "S \/ Red",
                                "option1": "S",
                                "option2": "Red",
                                "option3": null,
                                "sku": "",
                                "requires_shipping": true,
                                "taxable": true,
                                "featured_image": {
                                    "id": 15385735364663,
                                    "product_id": 4634914029623,
                                    "position": 2,
                                    "created_at": "2020-11-13T02:22:22-05:00",
                                    "updated_at": "2020-11-13T02:22:22-05:00",
                                    "alt": null,
                                    "width": 1000,
                                    "height": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/19_d6bcca69-9828-45eb-a43c-1c00bb3f079e.png?v=1605252142",
                                    "variant_ids": [32384508985399]
                                },
                                "available": false,
                                "name": "Formal gray shirt - S \/ Red",
                                "public_title": "S \/ Red",
                                "options": ["S", "Red"],
                                "price": 5400,
                                "weight": 0,
                                "compare_at_price": null,
                                "inventory_management": "shopify",
                                "barcode": null,
                                "featured_media": {
                                    "alt": null,
                                    "id": 7553714126903,
                                    "position": 2,
                                    "preview_image": {
                                        "aspect_ratio": 1.0,
                                        "height": 1000,
                                        "width": 1000,
                                        "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/19_d6bcca69-9828-45eb-a43c-1c00bb3f079e.png?v=1605252142"
                                    }
                                }
                            }, {
                                "id": 32384509018167,
                                "title": "M \/ Blue",
                                "option1": "M",
                                "option2": "Blue",
                                "option3": null,
                                "sku": "",
                                "requires_shipping": true,
                                "taxable": true,
                                "featured_image": {
                                    "id": 15385735430199,
                                    "product_id": 4634914029623,
                                    "position": 3,
                                    "created_at": "2020-11-13T02:22:22-05:00",
                                    "updated_at": "2020-11-13T02:22:22-05:00",
                                    "alt": null,
                                    "width": 1000,
                                    "height": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/20_e1466f98-0a72-4ec0-a714-243d0ee63635.png?v=1605252142",
                                    "variant_ids": [32384509018167]
                                },
                                "available": true,
                                "name": "Formal gray shirt - M \/ Blue",
                                "public_title": "M \/ Blue",
                                "options": ["M", "Blue"],
                                "price": 5500,
                                "weight": 0,
                                "compare_at_price": null,
                                "inventory_management": "shopify",
                                "barcode": null,
                                "featured_media": {
                                    "alt": null,
                                    "id": 7553714159671,
                                    "position": 3,
                                    "preview_image": {
                                        "aspect_ratio": 1.0,
                                        "height": 1000,
                                        "width": 1000,
                                        "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/20_e1466f98-0a72-4ec0-a714-243d0ee63635.png?v=1605252142"
                                    }
                                }
                            }, {
                                "id": 32384509050935,
                                "title": "M \/ Red",
                                "option1": "M",
                                "option2": "Red",
                                "option3": null,
                                "sku": "",
                                "requires_shipping": true,
                                "taxable": true,
                                "featured_image": {
                                    "id": 15385736347703,
                                    "product_id": 4634914029623,
                                    "position": 5,
                                    "created_at": "2020-11-13T02:22:33-05:00",
                                    "updated_at": "2020-11-13T02:22:34-05:00",
                                    "alt": null,
                                    "width": 1000,
                                    "height": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/2_34243a8c-619c-4aca-8022-70dc0a3c8554.png?v=1605252154",
                                    "variant_ids": [32384509050935]
                                },
                                "available": true,
                                "name": "Formal gray shirt - M \/ Red",
                                "public_title": "M \/ Red",
                                "options": ["M", "Red"],
                                "price": 5500,
                                "weight": 0,
                                "compare_at_price": null,
                                "inventory_management": "shopify",
                                "barcode": null,
                                "featured_media": {
                                    "alt": null,
                                    "id": 7553714847799,
                                    "position": 5,
                                    "preview_image": {
                                        "aspect_ratio": 1.0,
                                        "height": 1000,
                                        "width": 1000,
                                        "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/2_34243a8c-619c-4aca-8022-70dc0a3c8554.png?v=1605252153"
                                    }
                                }
                            }],
                            "images": ["\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/18_4988bca6-124e-455d-bcf9-27d050106904.png?v=1605252142", "\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/19_d6bcca69-9828-45eb-a43c-1c00bb3f079e.png?v=1605252142", "\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/20_e1466f98-0a72-4ec0-a714-243d0ee63635.png?v=1605252142", "\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/1_33a2f5da-63ee-4c5e-927c-b93a4134e81c.png?v=1605252154", "\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/2_34243a8c-619c-4aca-8022-70dc0a3c8554.png?v=1605252154", "\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/3_697e3437-c804-4ae4-a693-97c89ab33991.png?v=1605252154", "\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/4_8c1714b2-35c5-4d35-8d35-5eab3595a517.png?v=1605252154"],
                            "featured_image": "\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/18_4988bca6-124e-455d-bcf9-27d050106904.png?v=1605252142",
                            "options": ["Size", "Color"],
                            "media": [{
                                "alt": null,
                                "id": 7553714094135,
                                "position": 1,
                                "preview_image": {
                                    "aspect_ratio": 1.0,
                                    "height": 1000,
                                    "width": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/18_4988bca6-124e-455d-bcf9-27d050106904.png?v=1605252142"
                                },
                                "aspect_ratio": 1.0,
                                "height": 1000,
                                "media_type": "image",
                                "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/18_4988bca6-124e-455d-bcf9-27d050106904.png?v=1605252142",
                                "width": 1000
                            }, {
                                "alt": null,
                                "id": 7553714126903,
                                "position": 2,
                                "preview_image": {
                                    "aspect_ratio": 1.0,
                                    "height": 1000,
                                    "width": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/19_d6bcca69-9828-45eb-a43c-1c00bb3f079e.png?v=1605252142"
                                },
                                "aspect_ratio": 1.0,
                                "height": 1000,
                                "media_type": "image",
                                "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/19_d6bcca69-9828-45eb-a43c-1c00bb3f079e.png?v=1605252142",
                                "width": 1000
                            }, {
                                "alt": null,
                                "id": 7553714159671,
                                "position": 3,
                                "preview_image": {
                                    "aspect_ratio": 1.0,
                                    "height": 1000,
                                    "width": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/20_e1466f98-0a72-4ec0-a714-243d0ee63635.png?v=1605252142"
                                },
                                "aspect_ratio": 1.0,
                                "height": 1000,
                                "media_type": "image",
                                "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/20_e1466f98-0a72-4ec0-a714-243d0ee63635.png?v=1605252142",
                                "width": 1000
                            }, {
                                "alt": null,
                                "id": 7553714815031,
                                "position": 4,
                                "preview_image": {
                                    "aspect_ratio": 1.0,
                                    "height": 1000,
                                    "width": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/1_33a2f5da-63ee-4c5e-927c-b93a4134e81c.png?v=1605252154"
                                },
                                "aspect_ratio": 1.0,
                                "height": 1000,
                                "media_type": "image",
                                "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/1_33a2f5da-63ee-4c5e-927c-b93a4134e81c.png?v=1605252154",
                                "width": 1000
                            }, {
                                "alt": null,
                                "id": 7553714847799,
                                "position": 5,
                                "preview_image": {
                                    "aspect_ratio": 1.0,
                                    "height": 1000,
                                    "width": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/2_34243a8c-619c-4aca-8022-70dc0a3c8554.png?v=1605252153"
                                },
                                "aspect_ratio": 1.0,
                                "height": 1000,
                                "media_type": "image",
                                "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/2_34243a8c-619c-4aca-8022-70dc0a3c8554.png?v=1605252153",
                                "width": 1000
                            }, {
                                "alt": null,
                                "id": 7553714880567,
                                "position": 6,
                                "preview_image": {
                                    "aspect_ratio": 1.0,
                                    "height": 1000,
                                    "width": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/3_697e3437-c804-4ae4-a693-97c89ab33991.png?v=1605252154"
                                },
                                "aspect_ratio": 1.0,
                                "height": 1000,
                                "media_type": "image",
                                "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/3_697e3437-c804-4ae4-a693-97c89ab33991.png?v=1605252154",
                                "width": 1000
                            }, {
                                "alt": null,
                                "id": 7553714913335,
                                "position": 7,
                                "preview_image": {
                                    "aspect_ratio": 1.0,
                                    "height": 1000,
                                    "width": 1000,
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/4_8c1714b2-35c5-4d35-8d35-5eab3595a517.png?v=1605252154"
                                },
                                "aspect_ratio": 1.0,
                                "height": 1000,
                                "media_type": "image",
                                "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0054\/0567\/1479\/products\/4_8c1714b2-35c5-4d35-8d35-5eab3595a517.png?v=1605252154",
                                "width": 1000
                            }],
                            "content": "\u003cp\u003eFaded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!\u003c\/p\u003e\n\u003ch4\u003eSample Unordered List\u003c\/h4\u003e\n\u003cul\u003e\n\u003cli\u003eComodous in tempor ullamcorper miaculis\u003c\/li\u003e\n\u003cli\u003ePellentesque vitae neque mollis urna mattis laoreet.\u003c\/li\u003e\n\u003cli\u003eDivamus sit amet purus justo.\u003c\/li\u003e\n\u003cli\u003eProin molestie egestas orci ac suscipit risus posuere loremou.\u003c\/li\u003e\n\u003c\/ul\u003e\n\u003ch4\u003eSample Ordered Lista\u003c\/h4\u003e\n\u003col\u003e\n\u003cli\u003eComodous in tempor ullamcorper miaculis\u003c\/li\u003e\n\u003cli\u003ePellentesque vitae neque mollis urna mattis laoreet.\u003c\/li\u003e\n\u003cli\u003eDivamus sit amet purus justo.\u003c\/li\u003e\n\u003cli\u003eProin molestie egestas orci ac suscipit risus posuere loremous\u003c\/li\u003e\n\u003c\/ol\u003e\n\u003ch4\u003eSample Paragraph Text\u003c\/h4\u003e\n\u003cblockquote\u003e\n\u003cp\u003eFaded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!\u003c\/p\u003e\n\u003c\/blockquote\u003e\n\u003cdiv class=\"custom-tab\"\u003e\n\u003cdiv class=\"title\"\u003ecustom tab1\u003c\/div\u003e\n\u003cdiv class=\"description\"\u003e\n\u003cp\u003eThis is a custom product tab. You can set different content for tabs for each product. You can add content of the tabs in the admin on product configuration page.\u003c\/p\u003e\n\u003c\/div\u003e\n\u003c\/div\u003e"
                        }
                    </script>
                    <script type="application/json" id="ModelJson-product-template">
                        []
                    </script>


                    <script>
                        jQuery(document).ready(function() {
                            $(".write_comment").click(function(e) {
                                $('.product-tab .nav-tabs a[href="#product-review"]').trigger('click');
                                $('html, body').animate({
                                    scrollTop: $(".product-tab").offset().top - 100
                                }, 2000);
                            });
                        });
                    </script>


                </div>


            </div>

            <div id="_mobile_sidebar" class=" sidebar_content"></div>



            <script>
                theme.productStrings = {
                    addToCart: "ADD TO CART",
                    soldOut: "SOLD OUT",
                    unavailable: "Unavailable"
                }
            </script>




        </div>
</div>
<br>
<br>
<div id="shopify-section-1604480299f884e0f8" class="shopify-section ishi-collection-section">
    <div class="ishicollectionblock">
        <div class="collectionblock-inner page-width">

            <div class="section-header text-center">
                <h2 class="home-title">OUR COLLECTION</h2>
            </div>



            <div class="story-image-wrapper banner-image-left col-md-3 col-xs-6">
                <div class="ishicollectionblock-container" style="border-radius: 4px;">
                    <div class="image-container">
                        <a href="#">
                            <img class="lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/banner-1.jpg')}}" data-widths="[450]" data-sizes="auto" alt="" sizes="auto" src="{{URL:: asset('client/assests/img/banner-1.jpg')}}" data-was-processed="true"/>
                        </a>
                        <a href="#" class="menu-container">
                            <span class="heading"> WOMEN</span>

                        </a>

                    </div>
                </div>
            </div>

            <div class="story-image-wrapper banner-image-left col-md-3 col-xs-6">
                <div class="ishicollectionblock-container" style="border-radius: 4px;">
                    <div class="image-container">
                        <a href="#">

                            <img class="lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/banner-2.jpg')}}" data-widths="[450]" data-sizes="auto" alt="" sizes="auto" src="{{URL:: asset('client/assests/img/banner-2.jpg')}}" data-was-processed="true"/>

                        </a>
                        <a href="#" class="menu-container">
                            <span class="heading"> WOMEN</span>

                        </a>

                    </div>
                </div>
            </div>


            <div class="story-image-wrapper banner-image-left col-md-3 col-xs-6">
                <div class="ishicollectionblock-container" style="border-radius: 4px;">
                    <div class="image-container">
                        <a href="#">

                            <img class="lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/banner-3.jpg')}}" data-widths="[450]" data-sizes="auto" alt="" sizes="auto" src="{{URL:: asset('client/assests/img/banner-3.jpg')}}" data-was-processed="true"/>

                        </a>
                        <a href="#" class="menu-container">
                            <span class="heading"> WOMEN</span>

                        </a>

                    </div>
                </div>
            </div>


            <div class="story-image-wrapper banner-image-left col-md-3 col-xs-6">
                <div class="ishicollectionblock-container" style="border-radius: 4px;">
                    <div class="image-container">
                        <a href="#">
                            <img class="lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/banner-4.jpg')}}" data-widths="[450]" data-sizes="auto" alt="" sizes="auto" src="{{URL:: asset('client/assests/img/banner-4.jpg')}}" data-was-processed="true"/>
                        </a>
                        <a href="#" class="menu-container">
                            <span class="heading"> WOMEN</span>

                        </a>

                    </div>
                </div>
            </div>




        </div>
    </div>

    <style type="text/css">
        .ishi-collection-section {
            margin-bottom: 40px;
        }

        @media (max-width: 767px) {
            .ishi-collection-section {
                margin-bottom: 0px;
            }
        }
    </style>


</div>
</main>
</div>
</div>









<div id="shopify-section-cookieconsent " class="shopify-section cookie-consent ">
    <style>
        #cookieconsent {
            position: fixed;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 25px 10px;
            z-index: 98;
            left: 0;
            right: 0;
            bottom: 0;
        }

        #cookieconsent.position-left {
            width: 30%;
            left: 15px;
            right: auto;
            bottom: 15px;
        }

        #cookieconsent.position-right {
            width: 30%;
            left: auto;
            right: 15px;
            bottom: 15px;
        }

        #cookieconsent .message p {
            text-align: center;
            color: #fff;
            margin-bottom: 10px;
        }

        #cookieconsent .message a {
            color: #ffffff;
            text-decoration: underline;
        }

        #cookieconsent .btn {
            color: #000000;
            background-color: #ffffff;
            border-color: #ffffff;
        }

        @media (max-width: 767px) {

            /* If media is below 768 */
            #cookieconsent.position-left,
            #cookieconsent.position-right {
                width: 100%;
                left: 0;
                right: 0px;
                bottom: 0px;
            }
        }
    </style>

    <script type="text/javascript ">
        jQuery(document).ready(function($) {
            if ($.cookie("cookieconsent ") != "true ") {
                setTimeout(function() {
                    $("#cookieconsent ").show();
                }, 3000);
            }
            $(".cookieconsent-btn ").click(function() {
                $("#cookieconsent ").hide();
                $.cookie("cookieconsent ", "true ", {
                    expires: 7,
                    path: '/'
                });
            });
        });
    </script>

</div>
<div id="shopify-section-newsletterpopup " class="shopify-section newsletter-popup ">






    <style type="text/css ">
        .newsletter-popup .popup-bg-color {
            background-color: #ffffff;
        }

        .newsletter-popup .modal-content .modal-body .popup-text,
        .newsletter-popup .modal-content .modal-header .close {
            color: #000000;
        }

        @media (max-width: 767px) {

            /* If media is below 768 */
            .newsletter-popup .modal-content.popup-bg-image {
                background-image: none !important;
            }
        }
    </style>

    <script type="text/javascript ">
        jQuery(document).ready(function($) {

            if ($.cookie("customer_posted ") != "true ") {
                $('#newsletterPopup').modal();
            }

            const urlParams = new URLSearchParams(window.location.search);

            $('#newsletterPopup').on('hidden.bs.modal', function() {
                if ($('.dono-show-check').prop("checked ") == true) {
                    $.cookie("customer_posted ", "true ", {
                        expires: 1,
                        path: '/'
                    });
                }
            });

            if (urlParams.get('customer_posted') == "true ") {
                var cookieValue = $.cookie("customer_posted ");
                $.cookie("customer_posted ", "true ", {
                    expires: 7,
                    path: '/'
                });
            }

        });
    </script>

</div>
<script>
    $(function() {
        // Current Ajax request.
        var currentAjaxRequest = null;
        // Grabbing all search forms on the page, and adding a .search-results list to each.
        var searchForms = $('form[action="/search "]').css('position', 'relative').each(function() {
            // Grabbing text input.
            var input = $(this).find('input[name="q "]');
            // Adding a list for showing search results.
            var offSet = input.position().top + input.innerHeight();
            $('<ul class="search-results "></ul>').css({
                'position': 'absolute',
                'left': '0px',
                'top': offSet
            }).appendTo($(this)).hide();
            // Listening to keyup and change on the text field within these search forms.
            input.attr('autocomplete', 'off').bind('keyup change', function() {
                // What's the search term?
                var term = $(this).val();
                // What's the search form?
                var form = $(this).closest('form');
                // What's the search URL?
                var searchURL = '/search?type=product&q=' + term;
                // What's the search results list?
                var resultsList = form.find('.search-results');
                // If that's a new term and it contains at least 3 characters.
                if (term.length > 3 && term != $(this).attr('data-old-term')) {
                    // Saving old query.
                    $(this).attr('data-old-term', term);
                    // Killing any Ajax request that's currently being processed.
                    if (currentAjaxRequest != null) currentAjaxRequest.abort();
                    // Pulling results.
                    currentAjaxRequest = $.getJSON(searchURL + '&view=json', function(data) {
                        // Reset results.
                        resultsList.empty();
                        // If we have no results.
                        if (data.results_count == 0) {
                            // resultsList.html('<li><span class="title ">No results.</span></li>');
                            // resultsList.fadeIn(200);
                            resultsList.hide();
                        } else {
                            // If we have results.
                            $.each(data.results, function(index, item) {
                                var link = $('<a></a>').attr('href', item.url);
                                link.append('<span class="thumbnail "><img src=" ' + item.thumbnail + ' " /></span>');
                                link.append('<span class="type ">' + item.type + '</span>');
                                link.append('<span class="title ">' + item.title + '</span>');
                                link.append('<span class="price ">' + item.price + '</span>');
                                link.wrap('<li></li>');
                                resultsList.append(link.parent());
                            });

                            if (data.results_count > 10) {
                                resultsList.append('<li><span class="title "><a href=" ' + searchURL + ' ">See all results (' + data.results_count + ')</a></span></li>');
                            }
                            resultsList.fadeIn(200);
                        }
                    });
                }
            });
        });

        $('body').bind('click', function() {
            $('.search-results').hide();
        });
    });
</script>




<div id="cartmessage ">
    <div class="title-success hide ">Added To Cart : </div>
    <div class="title-failed hide ">Add To Cart Failed : </div>
</div>
<div id="wishlistmessage ">
    <div class="title-success hide ">prouduct successfully added to wishlist !</div>
</div>


<div class="modal fade size-chart-modal " id="myModal " tabindex="-1 " role="dialog " aria-hidden="true ">
    <div class="modal-dialog ">
        <div class="modal-content ">
            <div class="modal-header ">
                <button type="button " class="close " data-dismiss="modal " aria-hidden="true ">x</button>
            </div>
            <div class="modal-body row ">
                <div class="modal-img col-sm-12 col-md-6 "><img src="{{URL:: asset('client/assests/img/sizechart2687.png?v=1604665385')}} " data-widths="[480] "></div>
                <div class="modal-text col-sm-12 col-md-6 ">
                    <div class="custom_size_chart_des ">
                        <h4>Measurement Term Definitions</h4>
                        <div class="custom-text-right-table ">
                            <table class="table ">
                                <thead class="thead-light ">
                                    <tr>
                                        <th scope="col ">Size</th>
                                        <th scope="col ">Chest</th>
                                        <th scope="col ">Brand Size</th>
                                        <th scope="col ">Shoulder</th>
                                        <th scope="col ">Length</th>
                                        <th scope="col ">Sleeve Length</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>38</td>
                                        <td>40.2</td>
                                        <td>38</td>
                                        <td>17.9</td>
                                        <td>29.9</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>39</td>
                                        <td>41.3</td>
                                        <td>39</td>
                                        <td>18.2</td>
                                        <td>30.1</td>
                                        <td>24.5</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>42.5</td>
                                        <td>40</td>
                                        <td>18.5</td>
                                        <td>30.3</td>
                                        <td>25</td>
                                    </tr>
                                    <tr>
                                        <td>42</td>
                                        <td>44.9</td>
                                        <td>42</td>
                                        <td>19.1</td>
                                        <td>30.7</td>
                                        <td>25.5</td>
                                    </tr>
                                    <tr>
                                        <td>44</td>
                                        <td>47.2</td>
                                        <td>44</td>
                                        <td>19.7</td>
                                        <td>31.1</td>
                                        <td>26</td>
                                    </tr>
                                    <tr>
                                        <td>46</td>
                                        <td>49.6</td>
                                        <td>46</td>
                                        <td>20.3</td>
                                        <td>31.5</td>
                                        <td>26.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="custom-text-right ">
                            <p><strong>Effective Top Tube Length:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <p><strong>Seat Tube Length:</strong> dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled but also the leap into electronic typesetting, remaining essentially
                                unchanged.
                            </p>
                            <p><strong>Head Tube Length:</strong> Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
                            <p><strong>Head Angle:</strong> Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p><strong>Fork Rake (rake):</strong> It has survived not only five centuries popularised of Letraset sheets containing and more recently with desktop publishing software like Aldus PageMaker including versions.</p>
                            <p><strong>Stand Over Height:</strong>sub-title galley of type and scrambled it to make a type specimen book. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="quickviewModal " class="modal fade " role="dialog " tabindex="-1 " aria-hidden="true ">
    <div class="modal-dialog ">

        <div class="modal-content ">
            <div class="modal-header ">
                <button type="button " class="close " data-dismiss="modal ">&times;</button>
            </div>
            <div class="modal-body ">
                <div class="row ">
                    <div class="col-sm-6 ">
                        <div id="qv-images-container ">
                            <div id="qv-product-cover ">
                                <img id="main-thumbnail " src="# " alt="product-img ">
                            </div>
                            <div id="qv-thumbnails " class="owl-carousel owl-theme ">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <div id="qv-text-container ">
                            <div id="qv-productname "></div>
                            <div id="qv-productprice "></div>
                            <div id="qv-spr-badge "></div>
                            <div id="qv-productdescription "></div>
                            <div id="qv-quantity "></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer ">
            </div>
        </div>
    </div>
</div>
<a id="slidetop" href="#top" title="top" style="display: block;">Top</a>
</main>
<script type="text/javascript">
    let thumbnails = document.getElementsByClassName('thumbnail')
    let activeImages = document.getElementsByClassName('active')
    for (var i = 0; i < thumbnails.length; i++) {

        thumbnails[i].addEventListener('mouseover', function() {
            console.log(activeImages)

            if (activeImages.length > 0) {
                activeImages[0].classList.remove('active')
            }

            this.classList.add('active')
            document.getElementById('featured').src = this.src
        })
    }
    let buttonRight = document.getElementById('slideRight');
    let buttonLeft = document.getElementById('slideLeft');
    buttonLeft.addEventListener('click', function() {
        document.getElementById('slider').scrollLeft -= 180
    })
    buttonRight.addEventListener('click', function() {
        document.getElementById('slider').scrollLeft += 180
    })
</script>
@endsection
