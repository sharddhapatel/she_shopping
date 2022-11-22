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
                        <button type="submit" class="form__btn"><a href="additem">Add</a></button>
                    </div>
                    <div class="main__title-wrap">
                        <!-- filter sort -->
                    </div>
                    <!-- end filter sort -->
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
                    <form action="{{url('search_date')}}" name="search" method="get">
                        <div class="search_multiple">
                            <select class="form__input" id="search" name="datesearch" onchange="form.submit();">
                                <option selected disabled>Search..</option>
                                <option value="today">Today</option>
                                <option value="yesterday">Yesterday</option>
                                <option value="last7days">Last 7 Days</option>
                                <option value="last15days">Last 15 Days</option>
                                <option value="lastmonth">Lastmonth</option>
                                <option value="lastyear">Lastyear</option>
                                <option value="thismonth">ThisMonth</option>
                            </select>
                            <select class="form__input" name="user" id="search" onchange="form.submit();">
                                <option selected disabled>selectcatagory..</option>
                                @foreach($data as $ans)
                                <option value="{{$ans->tblname}}">{{$ans->tblname}}</option>
                                @endforeach
                            </select>
                            <!-- <input class="form__input" type="text" name="" placeholder="search..."> -->
                            <!-- <button type="submit" class="btn btn-primary">Search</button> -->
                            <input type="submit" class="form__btn" value="Filter" name="search">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- end main title -->
        <!-- users -->
        <div class="col-12">
            <div class="main__table-wrap">
                <table class="main__table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CATEGORY</th>
                            <th>IMG</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    <tbody>
                        @foreach ($data as $ans)
                        <tr>
                            <td>{{$ans->id}}</td>
                            <td>{{$ans->tblname}}</td>
                            <td><img src="{{url('item_img')}}/{{$ans->tblimg}}" hight="50" width="100"></td>
                            <td>{{$ans->date}}</td>
                            <td><a href="editcatagory/{{$ans->id}}">Edit</a></td>
                            <td><a href="deletecatagory/{{$ans->id}}">Delete</a></td>
                        </tr>
                        @endforeach
                    </tbody>
                    </thead>
                </table>
            </div>
        </div>
        <!-- end users -->

        <!-- <script type="text/javascript">
            var route = "{{url('search_date')}}";
            $('#search').typeahead({
                source: function(query, process) {
                    return $.get(route, {
                        query: query
                    }, function(data) {
                        return process(data);
                    });
                }
            });
        </script> -->
    </div>
</main>
<script type="text/javascript">
    $(document).ready(function() {
        $('search').selectpicker();
    });
</script>
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
