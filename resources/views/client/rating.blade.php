<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div align="center" style="background-color: #000; padding: 550px;">
        <img class="fa fa-star" src="client/assests/img/rate.png" data-index="1"></img>
        <img class="fa fa-star" src="client/assests/img/rate.png" data-index="2"></img>
        <img class="fa fa-star" src="client/assests/img/rate.png" data-index="3"></img>
        <img class="fa fa-star" src="client/assests/img/rate.png" data-index="4"></img>
        <img class="fa fa-star" src="client/assests/img/rate.png" data-index="5"></img>

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
            $('.fa-star').css('color','white');
        }
    </script>
</body>
<!-- <script>
$('.rating input').change(function () {
  var $radio = $(this);
  $('.rating .selected').removeClass('selected');
  $radio.closest('label').addClass('selected');
});
</script> -->

</html>






