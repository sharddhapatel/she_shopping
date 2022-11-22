@extends('admin.header-footer')
@section('contant')
<link rel="stylesheet" href="{{URL:: asset('assets/css/style.css')}}">
<!-- main content -->
<main class="main">
    <div class="container-fluid">
        <div class="row row--grid">
            <!-- main title -->
            <div class="col-12">
                <div class="main__title">
                    <!-- <h2>Dashboard</h2>

                    <a href="add-item.html" class="main__title-link">add item</a> -->
                </div>
            </div>
            <!-- end main title -->
            <!-- stats -->

            <div class="col-12">
                <div class="img_row_one">
                    <center>
                        <h1><i>DISENER</i></h1>
                    </center>

                </div>
                <div class="image-row">
                    <div class="image-row-col-1">
                        @foreach ($pdata as $image )
                        <h2><i>Category:-{{ $image->tblname }}</i></h2>
                        <h2><i>Title:-{{ $image->tblproductitle }}</i></h2>
                        <h2><i>Price:-{{ $image->tblproductprice }}</i></h2>
                        <h2><i>Code:-{{ $image->tblproductcode }}</i></h2>
                        <h2>Discription:-{{ $image->discripation }}</h2>


                    </div>
                    <div class="img_row_two_col_two">
                        <div class="col-sm-6 product-single__photos product-single-left" data-product-single-media-group="">
                            <h3 itemprop="name" class="product-single__title text-center hidden-sm-up">
                            </h3>
                            <div class="single-left">
                                <div class="">
                                    <div class="slider-for slick-initialized">
                                        <div class="slick-list draggable">
                                            <div class="slick-track" style="opacity: 1;">
                                                <!-- <div class="product1 slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style="width: 533px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;"> -->

                                                <img id="featured" src="{{ url('item_img') }}/{{ $image->tblproductimage }}" height="500" width="1500px" alt="">

                                                <!-- </div> -->

                                            </div>
                                        </div>
                                    </div>
                                    <div id="slide-wrapper">
                                        <!-- <img id="slideLeft" class="arrow" src="{{URL::asset('assests/img/section/arrowleft.png')}}" alt="" srcset=""> -->
                                        <div id="slider">

                                            <img class="thumbnail active" src="{{ url('item_img') }}/{{ $image->tblproductimage }}" alt="{{ url('item_img') }}/{{ $image->tblproductimage  }}" height="120px" srcset="">
                                            @foreach($imgdata as $productd)
                                            <img class="thumbnail active" src="{{ url('item_img') }}/{{ $productd->image }}" alt="{{ url('item_img') }}/{{ $productd->image }}" height="120px" srcset="">
                                            @endforeach
                                        </div>
                                        <!-- <img id="slideRight" class="arrow" src="{{URL::asset('assests/img/arrow-right.jpg')}}" alt="" srcset=""> -->
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

    <!-- end stats -->
    </div>
    </div>
</main>
<!-- end main content -->

<!-- JS -->
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
