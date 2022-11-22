@extends('client.header-footer')
@section('contant')

<div class="page-container  " id="PageContainer">
    <main class="main-content" id="MainContent">


        <div class="breadcrumb-container lazy" style="background-image: url('client/assests/img/mani-banner-2.jpg');" data-was-processed="true">
            <div id="shopify-section-1562828445846" class="shopify-section ishi-slider-section">
                <div class="ishislider">
                    <div class="slideshow-block">

                        <div id="ishislideshow-carousel" class="main-slider owl-carouselowl-carousel slider-with-options owl-theme logo-bar" data-small="1" data-mobile="1" data-tablet="1" data-laptop="1" data-desktop="1" data-autoplaytimeout="5000" data-autoplay="true" data-nav="true" data-dots="true" data-loop="true">


                            <div class="slideshow__item">
                                <div class="slideshow__link">

                                    <img src="{{URL::asset('client/assests/img/mani-banner-1.webp')}}" alt="" class="logo-bar__image" />

                                    <img src="{{URL::asset('client/assests/img/mani-banner-1-1.webp')}}" alt="" class="logo-bar__image-2" />



                                </div>
                            </div>

                            <div class="slideshow__item">
                                <div href="#" class="slideshow__link">

                                    <img src="{{URL::asset('client/assests/img/mani-banner-2.jpg')}}" alt="" class="logo-bar__image" />

                                    <img src="{{URL::asset('client/assests/img/mani-banner-1-2.webp')}}" alt="" class="logo-bar__image-2" />

                                </div>
                            </div>

                            <div class="slideshow__item">
                                <div href="#" class="slideshow__link">

                                    <img src="{{URL::asset('client/assests/img/mani-banner-3.jpg')}}" alt="" class="logo-bar__image" />

                                    <img src="{{URL::asset('client/assests/img/mani-banner-1-3.webp')}}" alt="" class="logo-bar__image-2" />



                                </div>
                            </div>



                        </div>


                    </div>
                </div>

                <style type="text/css">
                    .ishi-slider-section {
                        margin-bottom: 50px;
                    }

                    .ishi-slider-section .slider-content-right {
                        float: right;
                    }

                    .ishi-slider-section .slider-content-left {
                        float: left;
                    }

                    .ishi-slider-section .slider-content-center {
                        margin: 0 auto;
                        float: unset;
                    }

                    @media (max-width: 767px) {
                        .ishi-slider-section {
                            margin-bottom: 30px;
                        }
                    }
                </style>

                <script>
                    $('.main-slider').slick({
                        dots: false,
                        infinite: true,
                        arrows: false,
                        speed: 1000,
                        fade: true,
                        autoplay: true,
                        autoplaySpeed: 1000,
                        cssEase: 'linear'

                    });
                </script>


            </div>
            <!-- <nav class="breadcrumbs page-width breadcrumbs-empty">

                <h3 class="head-title">Fashion </h3>

                <a href="/" title="Back to the frontpage">Home</a>
                <span class="divider">‐</span>
                <span>Fashion</span>
            </nav> -->
        </div>
</div><br><br>



<!-- product detail -->
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 column" style="background: #fff;padding: 15px; border-radius: 5px;">
            <button class="sidebar-toggle position-left" data-toggle="modal" data-target="#modalShopFilters"><i class="icon-layout"></i></button>
            <aside class="sidebar sidebar-offcanvas">
                <!-- Widget Categories-->
                <section class="widget widget-categories">
                    <h3 class="widget-title">Shop Categories</h3>
                    <ul>
                        <?php $data = \App\Models\Catagory::get(); ?>
                        @foreach($data as $cat)

                        <li><a href="{{url('getcatrgoty')}}/{{$cat->id}}">{{$cat->tblname}}</a>
                            @endforeach
                    </ul>
                </section>
                <!-- Widget Price Range-->


                <?php $img = App\Models\product::get()->take(3)->sortByDesc('created_at'); ?>
                @foreach($img as $pick)
                <section class="widget">

                    <!-- Single Post -->
                    <div class="d-table">


                        <img class="d-block w-200 mx-auto img-thumbnail rounded-circle d-table-cell align-middle" src="{{ url('item_img') }}/{{ $pick->tblproductimage }}" alt="{{ url('item_img') }}/{{ $pick->tblproductimage }}" style="height:150px">

                        <div class="pl-3 d-table-cell align-middle">
                            <h5><a href="https://dssaree.com/product-detail/kp-3070">{{$pick->tblproductitle}}</a>
                            </h5>

                            <p class="text-muted mb-2">{{$pick->tblproductprice}} </p>
                        </div>
                    </div>
                </section>
                @endforeach

            </aside>
        </div>

        <div class="col-lg-9 col-md-9 col-sm-6">
            <div class="row" style="margin: top 5px;">
                <?php

                use Illuminate\Database\Eloquent\Model;
                use App\Models\product;

                $d = product::get(); ?>
                @foreach($d as $ans)
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="grid-item" style="margin-bottom: 10px;">
                        <div class="product-card">

                            <div class="product-badge">10% Off</div>

                            <a class="product-thumb" href="{{url('viewdetail')}}/{{$ans->id}}">
                                <img src="{{url('item_img')}}/{{$ans->tblproductimage}}" alt="https://www.dssaree.com//storage/photos/7/Womens-Pinksilk-saree.jpg">
                            </a>
                            <h3 class="product-title">
                                <a href="#"> {{$ans->tblproductitle}}</a>
                            </h3>
                            <h3 class="product-title">
                                <a href="#">  {!! nl2br($ans->discripation) !!}</a>
                            </h3>
                            <h4 class="product-price">
                                {{$ans->tblproductprice}}
                            </h4>
                            <div class="product-buttons" style="display: flex;">
                                <!-- <a class="btn" href="https://dssaree.com/wishlist/new-saree" data-id="3" title="Whishlist"> -->
                                <i class="mdi mdi-heart-outline menu-icon"></i></a>
                                <a class="btn " href="{{url('addtocart')}}/{{$ans->id}}">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="gutter-sizer"></div>
                    <div class="grid-sizer"></div>
                </div>
               
                @endforeach
                {{-- {{ $page->links() }} --}}
               {{ $page->links() }}
            </div>
     
            {{-- <nav class="pagination1">
                <div class="column">
                    <ul class="pages">

                        <li class="active">
                            <nav>
                                <ul class="pagination">
                                        <li class="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                        <span class="page-link" aria-hidden="true">‹</span>
                                    </li>
                                    <li class="page-item active" aria-current="page"><span class="page-link">1</span></li>
                                    <li class="page-item"><a class="page-link" href="">2</a></li>
                                    <li class="page-item"><a class="page-link" href="">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="" rel="next" aria-label="Next »">›</a>
                                    </li> 
                                </ul>
                            </nav>
                        </li>

                    </ul>
                </div>

            </nav> --}}
        </div>

    </div>
</div>

<!--End  -->

<br>
<br>

<!--section end -->

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
        </div>imgproduct-thumb
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

@endsection
