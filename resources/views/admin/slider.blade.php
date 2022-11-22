<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{URL::asset('assets/css/demo.css')}}">
    <title>Document</title>
</head>
<body>
<h1>Our amazing people</h1>
<div class="container">
  <div class="faders">
    <div class="left"></div>
    <div class="right"></div>
  </div>

  <div class="items">
    <?php $data = \App\Models\product::get() ?>
                    @foreach($data as $ans)
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="{{url('item_img')}}/{{$ans->tblproductimage}}" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div>
    @endforeach
    <!-- <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div> -->

    <!-- <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div> -->
    <!-- <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div> -->
    <!-- <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div> -->
    <!-- <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div> -->
    <!-- <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div> -->
  </div>
</div>
</body>
</html>
