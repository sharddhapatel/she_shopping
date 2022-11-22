<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider</title>
</head>

<body>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700&subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" href="{{URL::asset('assets/css/demo.css')}}">

    <!-- Item slider-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">


                <div class="carousel carousel-showmanymoveone slide" id="itemslider">
                    <?php $data = \App\Models\product::get() ?>
                    @foreach($data as $ans)
                    <div class="carousel-inner">

                        <div class="item active">
                            <div class="col-lg-12 col-xs-12 col-sm-6 col-md-2">
                                <a href="#"><img src="{{url('item_img')}}/{{$ans->tblproductimage}}" class="img-responsive center-block" style="display: flex; width: 100px;"></a>
                                <!-- <a href="#"><img src="{{URL:: asset('assets/img/section/choli.jpg')}}" class="img-responsive center-block"></a> -->
                            </div>
                        </div>

                        <!--
                            <div class="item">
                                <div class="col-lg-12 col-xs-12 col-sm-6 col-md-2">
                                <a href="#"><img src="{{URL:: asset('assets/img/section/ha.jpg')}}" class="img-responsive center-block"></a>
                                </div>
                            </div> -->
                    </div>
                    @endforeach
                    <div id="slider-control">
                        <a class="left carousel-control" href="#itemslider" data-slide="prev"><img src="https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_402-512.png" alt="Left" class="img-responsive"></a>
                        <a class="right carousel-control" href="#itemslider" data-slide="next"><img src="http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png" alt="Right" class="img-responsive"></a>
                    </div>
                </div>
            </div>

        </div>
    </div>



    <script>
        $(document).ready(function() {
            $('#itemslider').carousel({
                interval: 3000
            });
            $('.carousel-showmanymoveone .item').each(function() {
                var itemToClone = $(this);

                for (var i = 1; i < 1; i++) {
                    itemToClone = itemToClone.next();
                    if (!itemToClone.length) {
                        itemToClone = $(this).siblings(':first');
                    }
                    itemToClone.children(':first-child').clone()
                        .addClass("cloneditem-" + (i))
                        .appendTo($(this));
                }
            });
        });
    </script>
</body>

</html>
