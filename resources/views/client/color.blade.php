@extends('client.header-footer')
@section('contant')

<div class="breadcrumb-container lazy" style="background-image: url('client/assests/img/mani-banner-2.jpg');" data-was-processed="true">
    <nav class="breadcrumbs page-width breadcrumbs-empty">

        <h3 class="head-title">Fashion </h3>

        <a href="/" title="Back to the frontpage">Home</a>
        <span class="divider">‐</span>
        <span>Fashion</span>
    </nav>
</div>
<br><br>
<div class="page-container" id="PageContainer">
    <main class="main-content" id="MainContent">

        <div class="page-width collection_templete">
            <div class="row">
                <div id="shopify-section-1605862126ca3050f5" class="shopify-section ishi-product-block-style1">

                    <div class="ishiproduct-block page-width">
                        <div class="section-header text-center">
                            <h2 class="home-title">SPECIAL PRODUCTS</h2>
                        </div>

                        <div id="ishiproduct-block-carousel-1605862126ca3050f5" class="logo-bar">
                            <div class="tab-content">
                                <div class="row tab_content tab-pane active" id="linkproductblock1-1605862126ca3050f5">
                                    <div class="products-display" data-small="2" data-mobile="2" data-tablet="2" data-laptop="3" data-desktop="4" data-nav="true" data-rewind="true" data-loop="false">
                                        <div class="owl-item">

                                            <?php
                                            use App\Models\product;
                                            $d = product::get(); ?>
                                            @foreach($d as $detail)
                                            <div class="item grid__item grid__item--1e503d85-4528-476f-9f7b-7b57e540e319 ">
                                                <div class="grid-view-item">
                                                    <div class="grid-view-item__image-container">
                                                        <div class="grid-view-item__image-wrapper js position-center">
                                                            <a href="{{url('color')}}/{{$detail->id}}">
                                                                <div class="image-inner">
                                                                    <div class="reveal">
                                                                        <img class="grid-view-item__image lazy owl-lazy main-img loaded" data-src="{{url('item_img')}}/{{$detail->tblproductimage}}" alt="8 Granddad shirt." src="{{url('item_img')}}/{{$detail->tblproductimage}}" data-was-processed="true" style="opacity: 1;height:400px;width:500px">
                                                                        <!-- <img class="extra-img lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/prodect-1.webp')}}" alt="8 Granddad shirt." src="{{URL:: asset('client/assests/img/prodect-1.webp')}}" data-was-processed="true" style="opacity: 1;"> -->
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div class="thumbnail-buttons button-position-center">
                                                                <div class="quick-view card-1" style="background: none; margin: 8px 2px;">
                                                                    <a href="#">
                                                                        ADD TO CART
                                                                    </a>
                                                                </div>

                                                                <div class="quick-view card-1" style="background: none; margin: 8px 2px;">
                                                                    <a href="product-card.html">
                                                                        BUY NOW
                                                                    </a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="product-description">
                                                            <div class="product-detail">
                                                                <a href="/collections/men/products/8-granddad-shirt">
                                                                    <div class="h4 grid-view-item__title">{{$detail->tblproductitle}}
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="grid-view-item__meta">
                                                                <div class="qv-discountprice regular">
                                                                </div>
                                                                <span class="visually-hidden">
                                                                    {{$detail->tblproductcode}}
                                                                </span>
                                                                <br>
                                                                <div class="product-price__price product-price__sale">
                                                                    <span class="qv-regularprice is-bold">
                                                                        {{$detail->tblproductprice}}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>




                    <style type="text/css">
                        .ishi-product-block-style1 {
                            margin-bottom: 70px;
                        }

                        @media (max-width: 767px) {
                            .ishi-product-block-style1 {
                                margin-bottom: 30px;
                            }
                        }
                    </style>
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

@endsection
