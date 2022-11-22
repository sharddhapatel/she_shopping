<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from dmitryvolkov.me/demo/hotflix2.1/admin/edit-user.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 10 Aug 2021 08:27:41 GMT -->

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS -->
    <link rel="stylesheet" href="{{URL::asset('assets/css/bootstrap-reboot.min.css')}}">
    <link rel="stylesheet" href="{{URL::asset('assets/css/bootstrap-grid.min.css')}}">
    <link rel="stylesheet" href="{{URL::asset('assets/css/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{URL::asset('assets/css/jquery.mCustomScrollbar.min.css')}}">
    <link rel="stylesheet" href="{{URL::asset('assets/css/select2.min.css')}}">
    <link rel="stylesheet" href="{{URL::asset('assets/css/ionicons.min.css')}}">
    <link rel="stylesheet" href="{{URL::asset('assets/css/admin.css')}}">

    <!-- Favicons -->
    <link rel="icon" type="image/png" href="{{URL:: asset('assets/icon/she.png')}}" sizes="32x32">
    <link rel="apple-touch-icon" href="{{URL:: asset('assets/icon/she.png')}}">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Dmitry Volkov">
    <title>SheShopping</title>

</head>

<body>
    <!-- main content -->
    <main class="main">
        <div class="container-fluid">
            <div class="row">
                <!-- main title -->
                <div class="col-12">
                    <div class="main__title">
                        <h2>Registration Form</h2>
                    </div>
                </div>
                <!-- end main title -->

                <!-- profile -->

                <!-- end profile -->

                <!-- content tabs -->
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                        <div class="col-12">
                            <div class="row">
                                <!-- details form -->
                                <div class="col-12 col-lg-12">
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
                                    <form action="{{url('insertrej')}}" method="post" enctype="multipart/form-data" class="form form--profile">
                                        {{csrf_field()}}
                                        <div class="row row--form">
                                            <div class="col-12">
                                                <h4 class="form__title">Register details</h4>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-12 ">
                                                <div class="form__group">
                                                    <label class="form__label" for="username">Username</label>
                                                    <input id="username" type="text" name="name" class="form__input" placeholder="User name">
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-12 ">
                                                <div class="form__group">
                                                    <label class="form__label" for="email">Email</label>
                                                    <input id="email" type="email" name="email" class="form__input" placeholder="email">
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-12 ">
                                                <div class="form__group">
                                                    <label class="form__label" for="firstname">password</label>
                                                    <input id="firstname" type="password" name="password" class="form__input" placeholder="password">
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-12 ">
                                                <div class="form__group">
                                                    <label class="form__label" for="lastname">Mobile No.</label>
                                                    <input id="lastname" type="text" name="mobileno" class="form__input" placeholder="mobileno">
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-12 ">
                                                <div class="form__group">
                                                    <label class="form__label" for="subscription">State</label>
                                                    <select class="form__input js-example-basic-single" id="state" name="state">
                                                        <option selected="">State....</option>
                                                        @foreach ($stats as $key => $value)
                                                        <option value="{{$value->id}}"> {{$value->name}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-12 ">
                                                <div class="form__group">
                                                    <label class="form__label" for="subscription">City</label>
                                                    <select class="form__input js-example-basic-single" id="city" name="city">
                                                        <option selected="">City....</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-12">

                                                <button type="submit" class="form__btn">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- end details form -->

                            </div>
                        </div>
                    </div>


                </div>
                <!-- end content tabs -->
            </div>
        </div>
    </main>
    <!-- end main content -->

    <!-- modal view -->

    <!-- end modal delete -->

    <!-- JS -->
    <script src="{{URL::asset('assets/js/jquery-3.5.1.min.js')}}"></script>
    <script src="{{URL::asset('assets/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{URL::asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
    <script src="{{URL::asset('assets/js/jquery.mousewheel.min.js')}}"></script>
    <script src="{{URL::asset('assets/js/jquery.mCustomScrollbar.min.js')}}"></script>
    <script src="{{URL::asset('assets/js/select2.min.js')}}"></script>
    <script src="{{URL::asset('assets/js/admin.js')}}"></script>

    <script>
        $('#state').change(function() {
            var sid = $(this).val();

            if (sid) {
                $.ajax({
                    type: "get",
                    url: "{{url('/getcities')}}/" + sid,
                    success: function(res) {
                        if (res) {
                            $("#city").empty();
                            $("#city").append('<option>Select City</option>');
                            $.each(res, function(key, value) {
                                $("#city").append('<option value="' + key + '">' + value + '</option>');
                            });
                        }
                    }
                });
            } else {
                alert('hello');
            }
        });
    </script>
</body>

</html>
