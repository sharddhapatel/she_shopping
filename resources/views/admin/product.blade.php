@extends('admin.header-footer')
@section('contant')
<!-- main content -->
<main class="main">
    <div class="container-fluid">
        <div class="row">
            <!-- main title -->
            <div class="col-12">
                <div class="main__title">
                    <h2>Add new item</h2><br>

                </div>
                <div class="btn_show">
                    <button type="submit" class="form__btn"><a href="{{url('showproduct')}}">Show</a></button>
                </div>

            </div>

            <!-- end main title -->

            <!-- form -->
            <div class="col-12">
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

                <form action="{{url('insertpro')}}" method="post" enctype="multipart/form-data">

                    {{csrf_field()}}
                    <div class="row row--form">
                        <div class="col-12  form__content">
                            <div class="row row--form">
                                <div class="col-12">
                                    <div class="text"><label>Product  Category</label>
                                    </div>
                                    <select class="form__input" name="name" select id="name">
                                        <option selected disabled>select catagory..</option>
                                        @foreach($data as $catagory)
                                        <option value="{{$catagory->id}}">{{$catagory->tblname}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-12">
                                    <div class="text"><label>Product Tittle</label>
                                    </div>
                                    <input type="text" name="producttittle" class="form__input" placeholder="tittle">
                                </div>
                                <div class="col-12">
                                    <div class="text"><label>Product Price</label>
                                    </div>
                                    <input type="text" name="productprice" class="form__input" placeholder="price">
                                </div>
                                <div class="col-12">
                                    <div class="text"><label>Product Code</label>
                                    </div>
                                    <input type="text" name="productcode" class="form__input" placeholder="code">
                                </div>
                                <div class="col-12">
                                    <div class="text"><label>Product Color</label>
                                    </div>
                                    <!-- <input type="color"  value="#ff0000" name="productcolor"  placeholder="color"> -->
                                    <input type="text" name="productcolor"  class="form__input"   placeholder="color">
                                </div>


                                <div class="col-12">
                                    <div class="form__group">
                                        <label class="form__label" for="username">Product  Discription</label>
                                        <!-- <input id="username" type="textarea" name="discripation" class="form__input" placeholder="enter Product Discription"> -->

                                        <textarea id="summernote" class="summernote" name="discripation"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form__gallery">
                                        <label id="gallery1" for="form__gallery-upload">Product  Image</label>
                                        <input data-name="#gallery1" id="form__gallery-upload" name="image" class="form__gallery-upload" type="file" accept=".png, .jpg, .jpeg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="col-12">
                                <button type="submit" class="form__btn">Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
            </form>
        </div>
        <!-- end form -->
    </div>
    </div>
</main>
<!-- end main content -->
<script>
    $(document).ready(function() {
        $('#summernote').summernote();
    });
</script>
<script type="text/javascript">

  $('.colorpicker').colorpicker();

</script>
@endsection
