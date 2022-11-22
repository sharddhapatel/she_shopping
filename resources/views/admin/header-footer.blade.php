<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from dmitryvolkov.me/demo/hotflix2.1/admin/add-item.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 10 Aug 2021 08:27:41 GMT -->

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS -->
    <link rel="stylesheet" href="{{URL:: asset('assets/css/bootstrap-reboot.min.css')}}">
    <link rel="stylesheet" href="{{URL:: asset('assets/css/bootstrap-grid.min.css')}}">
    <link rel="stylesheet" href="{{URL:: asset('assets/css/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{URL:: asset('assets/css/jquery.mCustomScrollbar.min.css')}}">
    <link rel="stylesheet" href="{{URL:: asset('assets/css/select2.min.css')}}">
    <link rel="stylesheet" href="{{URL:: asset('assets/css/ionicons.min.css')}}">
    <link rel="stylesheet" href="{{URL:: asset('assets/css/admin.css')}}">
    <link rel="stylesheet" href="{{URL::asset('assets/summernote.css')}}">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-3-typeahead/4.0.1/bootstrap3-typeahead.min.js"></script>



  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script> -->



    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.1/css/bootstrap-colorpicker.min.css" rel="stylesheet">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.1/js/bootstrap-colorpicker.min.js"></script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-colorpicker/2.5.3/css/bootstrap-colorpicker.min.css" rel="stylesheet">


    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <!-- include summernote css/js -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>

    <!-- Favicons -->
    <link rel="icon" type="image/png" href="{{URL:: asset('assets/icon/she.png')}}" sizes="32x32">
    <link rel="apple-touch-icon" href="{{URL:: asset('assets/icon/she.png')}}">

    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Dmitry Volkov">
    <title>SheShopping</title>

</head>

<body>
    <!-- header -->
    <header class="header">
        <div class="header__content">
            <!-- header logo -->
            <a href="index.html" class="header__logo">
                <img src="{{URL:: asset('assets/img/logo.svg')}}" alt="">
            </a>
            <!-- end header logo -->

            <!-- header menu btn -->
            <button class="header__btn" type="button">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <!-- end header menu btn -->
        </div>
    </header>
    <!-- end header -->

    <!-- sidebar -->
    <div class="sidebar">
        <!-- sidebar logo -->
        <a href="index.html" class="sidebar__logo">
            <img src="{{URL:: asset('assets/img/logo.svg')}}" alt="">
        </a>
        <!-- end sidebar logo -->

        <!-- sidebar user -->
        <div class="sidebar__user">
            <div class="sidebar__user-img">
                <img src="{{URL:: asset('assets/img/user.svg')}}" alt="">
            </div>

            <div class="sidebar__user-title">
                <span>Admin</span>
                <p>John Doe</p>
            </div>

            <button class="sidebar__user-btn" type="button">
                <i class="icon ion-ios-log-out"></i>
            </button>
        </div>
        <!-- end sidebar user -->

        <!-- sidebar nav -->
        <div class="sidebar__nav-wrap">
            <ul class="sidebar__nav">
                <li class="sidebar__nav-item">
                    <a href="{{url('index')}}" class="sidebar__nav-link"><i class="icon ion-ios-keypad"></i> <span>Dashboard</span></a>
                </li>

                <li class="sidebar__nav-item">
                    <a href="{{url('showcatagory')}}" class="sidebar__nav-link"><i class="icon ion-ios-film"></i> <span>CATAGORY</span></a>
                </li>
              
                <li class="sidebar__nav-item">
                    <a href="{{url('showproduct')}}" class="sidebar__nav-link"><i class="icon ion-ios-film"></i> <span>Product</span></a>
                </li>
                <li class="sidebar__nav-item">
                    <a href="{{url('showimg')}}" class="sidebar__nav-link"><i class="icon ion-ios-film"></i> <span>Images</span></a>
                </li>
                <li class="sidebar__nav-item">
                    <a href="{{url('showtimer')}}" class="sidebar__nav-link"><i class="icon ion-ios-film"></i> <span>Timer</span></a>
                </li>
                <li class="sidebar__nav-item">
                    <a href="{{url('showcontact')}}" class="sidebar__nav-link"><i class="icon ion-ios-film"></i> <span>Contact</span></a>
                </li>
                <li class="sidebar__nav-item">
                    <a href="{{url('admin')}}" class="sidebar__nav-link"><i class="icon ion-ios-film"></i> <span>Login</span></a>
                </li>

            </ul>
        </div>
        <!-- end sidebar nav -->

        <!-- sidebar copyright -->
        <div class="sidebar__copyright">© She Shopping, 2021—2022. <br>Create by <a href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank">Dmitry Volkov</a></div>
        <!-- end sidebar copyright -->
    </div>
    <!-- end sidebar -->

    @yield('contant')
    <!-- JS -->
    <script src="{{URL:: asset('assets/js/jquery-3.5.1.min.js')}}"></script>
    <script src="{{URL:: asset('assets/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{URL:: asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
    <script src="{{URL:: asset('assets/js/jquery.mousewheel.min.js')}}"></script>
    <script src="{{URL:: asset('assets/js/jquery.mCustomScrollbar.min.js')}}"></script>
    <script src="{{URL:: asset('assets/js/select2.min.js')}}"></script>
    <script src="{{URL:: asset('assets/js/admin.js')}}"></script>
    <script src="{{URL::asset('assets/js/summernote.min.js')}}"></script>



</body>

<!-- Mirrored from dmitryvolkov.me/demo/hotflix2.1/admin/add-item.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 10 Aug 2021 08:27:41 GMT -->

</html>
