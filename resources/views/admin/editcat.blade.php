@extends('admin.header-footer')
@section('contant')

    <!-- main content -->
    <main class="main">
        <div class="container-fluid">
            <div class="row">
                <!-- main title -->
                <div class="col-12">
                    <div class="main__title">
                        <h2>Add new item</h2>
                        <div class="btn_show">
                        <button type="submit" class="form__btn"><a href="{{url('showcatagory')}}">Show</a></button>
                    </div>
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
                    <form action="/editcat/{{$data->id}}" method="post" enctype="multipart/form-data">
                        {{csrf_field()}}
                        <div class="row row--form">

                            <div class="col-12  form__content">
                                <div class="row row--form">
                                    <div class="col-12">
                                        <label>Name</label>
                                        <input type="hidden" name="id" id="id" value="{{$data->id}}">
                                        <input type="text" name="name" value="{{$data->tblname}}" class="form__input" placeholder="name">
                                    </div>


                                    <div class="col-12">
                                                <div class="form__gallery">
                                                    <label id="gallery1" for="form__gallery-upload">ProductImage</label>
                                                    <input data-name="#gallery1" id="form__gallery-upload" name="image" class="form__gallery-upload" type="file" accept=".png, .jpg, .jpeg" value="{{$data->tblimg}}">

                                                </div>
                                            </div>
                                    <img  src="{{ url('item_img') }}/{{ $data->tblimg }}" alt="" height="100" width="100" />
                                    <!-- <div class="form-group row">
                                        <label>images</lable><br>
                                            <input type="hidden" name="oldimg" id="oldimg" value="{{ $data->tblimg }}" >
                                    </div>
                                    <img id="blah" src="{{ url('item_img') }}/{{ $data->tblimg }}" alt="" height="100" width="100" />
                                    <br>
                                    <input class="file" data-preview-file-type="text" type='file' id="imgInp" name="img" value="{{$data->tblimg}}" /> -->

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

    @endsection
