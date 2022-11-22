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
<br>
<br>
<div class="page-container  " id="PageContainer">
    <main class="main-content" id="MainContent">

        <div class="normal_main_content ">


            <section id="shopify-section-template--14155864932407__contact-banner" class="shopify-section">
                <div class="page-width-2" style="    padding-left: 15px;
                            padding-right: 15px;">
                    <div class="section-header text-center">
                        <h2 class="home-title">Contact</h2>
                    </div>
                    <div class="row">

                        <div class="contact-form-information">

                            <div class="contact-banner col-lg-4 col-md-12">
                                <div class="image-wrapper ">
                                    <a class="ishi-customhover-fadeinrotate3D" href="#">
                                        <img class="lazy loaded" data-src="{{URL:: asset('client/assests/img/m-3.jpg')}} " data-widths="[400] " data-sizes="auto " alt=" " sizes="auto " src="{{URL:: asset('client/assests/img/m-3.jpg')}}" data-was-processed="true">
                                    </a>
                                </div>
                            </div>

                            <div class="information-container col-lg-8 col-md-12">
                                <div class="title-container">

                                    <h3 class="heading">GET IN TOUCH</h3>


                                    <span class="subheading">We'd Love to Hear From You, Lets Get In Touch!</span>

                                </div>
                                <div class="list-contact-info col-xs-12">

                                    <div class="contact_info_item col-xs-6">
                                        <h3>Address</h3>
                                        <p>4005, Silver Business Point </p>
                                        <p>India</p>
                                    </div>


                                    <div class="contact_info_item col-xs-6">
                                        <h3>Phone</h3>
                                        <p>9988776655</p>
                                    </div>


                                    <div class="contact_info_item col-xs-6">
                                        <h3>Email</h3>
                                        <p>
                                            <a href="mailto:info@gmail.com">
                                                info@gmail.com
                                            </a>
                                        </p>
                                    </div>


                                    <div class="contact_info_item col-xs-6">
                                        <h3>Additional Information</h3>
                                        <p>We are open: Monday - Saturday, 10AM - 5PM and closed on sunday sorry for that.</p>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style type="text/css">
                    #shopify-section-template--14155864932407__contact-banner {
                        margin-bottom: 70px;
                    }

                    @media (max-width: 767px) {
                        #shopify-section-template--14155864932407__contact-banner {
                            margin-bottom: 30px;
                        }
                    }
                </style>


            </section>
            <section id="shopify-section-template--14155864932407__iframe" class="shopify-section">
                <div class="contact-map">


                    <div id="iframe-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1859.402963947073!2d72.8862290081946!3d21.23954304648966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3be04f5ab22365f7%3A0xea9f5f8c9fe53881!2sGopinath%20Society%2C%20Mota%20Varachha%2C%20Surat%2C%20Gujarat%20394101!3m2!1d21.2392939!2d72.8873622!5e0!3m2!1sen!2sin!4v1663308849073!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        {{-- <iframe src="https://www.google.com/maps/dir//Opera+business+hub,+Gujarat+State+Highway+167,+Shanti+Niketan+Society,+Mota+Varachha,+Surat,+Gujarat+394101/@21.238028,72.8866396,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be04fa0b44e199f:0xb2b2adaf3c125594!2m2!1d72.8888278!2d21.2380278" style="border:0;" width="100%" height="400" frameborder="0"></iframe>  --}}
                    </div>

                        
                    </div>

                </div>

                <style type="text/css">
                    #shopify-section-template--14155864932407__iframe {
                        margin-bottom: 30px;
                    }

                    @media (max-width: 767px) {
                        #shopify-section-template--14155864932407__iframe {
                            margin-bottom: 0px;
                        }
                    }
                </style>

            </section>
            <section id="shopify-section-template--14155864932407__form" class="shopify-section">
                <div class="contact-form-bottom page-width">
                    <div class="title-container">

                        <h3 class="heading">LEAVE US A MESSAGE</h3>


                        <span class="subheading">-Good For Nature, Good For You-</span>


                    </div>
                    <div class="col-sm-12  product-single-left" style="margin: 8px;" data-product-single-media-group="">
                        @if(Session::has('message'))
                        <div class="alert alert-success">
                            <i class="fa-lg fa fa-warning"></i>
                            {!! session('message') !!}
                        </div>
                        @elseif(Session::has('error'))
                        <div class="alert alert-danger">
                            <i class="fa-lg fa fa-warning"></i>
                            {!! session('error') !!}
                        </div>
                        @endif
                        <form class="row" method="post" action="{{url('insertcontact')}}">
                            {{csrf_field()}}

                            <div class="col-md-4" style="padding: 8px;">
                                <input type="text" class="form-control" name="fname" placeholder="First name" aria-label="First name">
                            </div>
                            <div class="col-md-4" style="padding: 8px;">
                                <input type="email" class="form-control" name="email" placeholder="Email" aria-label="Last name">
                            </div>
                            <div class="col-md-4" style="padding: 8px;">
                                <input type="tel" class="form-control" name="phoneno" placeholder="Phone number" aria-label="Last name">
                            </div>
                            <div class="col-md-12" style="padding: 8px;">
                                <textarea type="tel" class="form-control" name="message" placeholder="Message" aria-label="Last name"></textarea>
                            </div>
                            <div class="col-md-12" style="padding: 8px;">
                                <!-- <a href="shipping.html" type="submit" class="btn btn-primary" style="width: 100%; height: 46px;    padding-top: 11px;">
                                    SEND
                                </a> -->
                                <button type="submit" class="btn btn-primary" >submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <style type="text/css">
                    #shopify-section-template--14155864932407__form {
                        margin-bottom: 70px;
                    }

                    @media (max-width: 767px) {
                        #shopify-section-template--14155864932407__form {
                            margin-bottom: 30px;
                        }
                    }
                </style>


            </section>
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

                            <img class="lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/banner-1.jpg')}}" data-widths="[450]" data-sizes="auto" alt="" sizes="auto" src="{{URL:: asset('client/assests/img/banner-1.jpg')}}" data-was-processed="true">

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

                            <img class="lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/banner-2.jpg')}}" data-widths="[450]" data-sizes="auto" alt="" sizes="auto" src="{{URL:: asset('client/assests/img/banner-2.jpg')}}" data-was-processed="true">

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

                            <img class="lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/banner-3.jpg')}}" data-widths="[450]" data-sizes="auto" alt="" sizes="auto" src="{{URL:: asset('client/assests/img/banner-3.jpg')}}" data-was-processed="true">

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
                            <img class="lazy owl-lazy loaded" data-src="{{URL:: asset('client/assests/img/banner-4.jpg')}}" data-widths="[450]" data-sizes="auto" alt="" sizes="auto" src="{{URL:: asset('client/assests/img/banner-4.jpg')}}" data-was-processed="true">
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
                <div class="modal-img col-sm-12 col-md-6 "><img src="{{URL:: asset('client/assests/img/sizechart2687.png?v=1604665385')}}" data-widths="[480] "></div>
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




@endsection
