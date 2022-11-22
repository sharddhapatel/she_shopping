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
                        <button type="submit" class="form__btn"><a href="{{url('addtimer')}}">ADD</a></button>
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
                                    <th>Days</th>
                                    <th>Hours</th>
                                    <th>Minutes</th>
                                    <th>Second</th>
                                    
                                    <th>Edit</th>
                                    <th>Delete</th>
                                 
                                </tr>
                                <?php $data= App\Models\timer::get(); ?>
                            <tbody>
                                
                                @foreach ($data as $ans)
                                <tr>
                                    <td>{{$ans->id}}</td>
                                    <td>{{$ans->day}}</td>
                                    <td>{{$ans->hour}}</td>
                                    <td>{{$ans->minute}}</td>
                                    <td>{{$ans->second}}</td>

                                    
                                    <td><a href="editproduct/{{$ans->id}}">Edit</a></td>
                                    <td><a href="deleteprodut/{{$ans->id}}">Delete</a></td>
                                   

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
