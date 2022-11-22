@extends('admin.header-footer')
@section('contant')
<!-- main content -->

<main class="main">
    <div class="container-fluid">
        <div class="row">
            <!-- main title -->
            <div class="col-12">
                <div class="main__title">
                    <h2>Catalog</h2>
                    <div class="btn_show">
                        <button type="submit" class="form__btn"><a href="{{url('aproduct')}}">ADD</a></button>
                    </div>

                    <div class="main__title-wrap">

                        <!-- search -->
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

                          
                    </div>
                </div>
                <!-- end main title -->
                <br><br><br>
                <!-- users -->
                <div class="col-12">
                    <div class="main__table-wrap">
   
                        <table class="main__table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>CATEGORYID</th>
                                    <th>Productitle</th>
                                    <th>Productprice</th>
                                    <th>Productcode</th>
                                    <th>Productimage</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>Image</th>
                                    <th>View</th>
                                </tr>
                            <tbody>
                                @foreach ($data as $ans)
                                <tr>
                                    <td>{{$ans->id}}</td>
                                    <td>{{$ans->tblname}}</td>
                                    <td>{{$ans->tblproductitle}}</td>
                                    <td>{{$ans->tblproductprice}}</td>
                                    <td>{{$ans->tblproductcode}}</td>

                                    <td>
                                        <img data-toggle="modal" data-target="#myModal{!! $ans->id !!}" src="{{url('item_img')}}/{{$ans->tblproductimage}}" hight="50" width="100">
                                    <div class="modal fade" id="myModal{!! $ans->id !!}" tabindex="-1" role="dialog" aria-labelledby="largeModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h3 class="modal-title" id="myModal">View User Detail</h3>
                                                    <button type="button" class="close1" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <p><b><i>Title:</i></b> {{$ans->tblproductitle}}</p><br>
                                                    <p><b><i>Price:</i></b> {{$ans->tblproductprice}}</p><br>
                                                    <p><b><i>Productcode:</i></b> {{$ans->tblproductcode}}</p><br>
                                                    <p><b><i>Discripation:</i></b> {{$ans->discripation}}</p><br>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="close" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td><a href="editproduct/{{$ans->id}}">Edit</a></td>
                                    <td><a href="deleteprodut/{{$ans->id}}">Delete</a></td>
                                    <td><a href="proimg/{{$ans->id}}">Add Image</a></td>
                                    <td><a href="viewimage/{{$ans->id}}">view Image</a></td>

                                    @endforeach

                            </tbody>
                            </thead>
                        </table>

                    </div>
                </div>

            </div>
        </div>
        <!-- end users -->

    </div>
    </div>
</main>
<!-- end main content -->

<!-- modal status -->
<div id="modal-status" class="zoom-anim-dialog mfp-hide modal">
    <h6 class="modal__title">Status change</h6>

    <p class="modal__text">Are you sure about immediately change status?</p>

    <div class="modal__btns">
        <button class="modal__btn modal__btn--apply" type="button">Apply</button>
        <button class="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
    </div>
</div>
<!-- end modal status -->

<!-- modal delete -->
<div id="modal-delete" class="zoom-anim-dialog mfp-hide modal">
    <h6 class="modal__title">Item delete</h6>

    <p class="modal__text">Are you sure to permanently delete this item?</p>

    <div class="modal__btns">
        <button class="modal__btn modal__btn--apply" type="button">Delete</button>
        <button class="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
    </div>
</div>
<!-- end modal delete -->

@endsection
