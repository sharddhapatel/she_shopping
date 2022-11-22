@extends('client.header-footer')
@section('contant')

<main id="main">
    <section id="specials" class="specials">
        <div class="container" data-aos="fade-up">
            <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                    <br><br><br><br><br><br>
                    <table id="cart" class="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php $user_id = Session::get('user_id'); ?>
                            @php $total = 0 @endphp

                            @if(session('cart'.$user_id))
                            @foreach(session('cart'.$user_id) as $id => $d)
                            @php $total += $d['tblproductprice'] * $d['quantity']; @endphp
                            <tr data-id="{{ $id }}">
                                <td data-th="Product">
                                    <div class="row">
                                        <div class="col-sm-3 hidden-xs">
                                            <img src="{{url('item_img')}}/{{$d['tblproductimage']}}" width="80" height="80" class="img-responsive" />
                                        </div>
                                        <div class="col-sm-12">
                                            <h4 class="nomargin">{{ $d['tblproductitle'] }}</h4>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price" style="display: flex"> <i class="fa fa-rupee" style="font-size:20px"></i>{{ $d['tblproductprice'] }}</td>
                                <td data-th="Quantity">
                                    <input type="number" value="{{ $d['quantity'] }}" id="quantity" data-id="{{$id}}" name="quantity" class="form-control quantity update-cart" min="1" />
                                </td>
                                <td data-th="Subtotal" id="" subtotalclass="text-center" data-id={{$id}}>{{ $d['tblproductprice'] * $d['quantity'] }}</td>

                                <td class="actions" data-th="">
                                    <button class="btn btn-danger btn-sm removecart"  data-id={{ $id }}><i class="fa fa-trash-o">Remove</i></button>
                                </td>
                            </tr>
                            @endforeach
                            @endif
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colspan="5" class="text-right">
                                    <h3><strong>Total <i class="fa fa-rupee" style="font-size:30px"></i>{{ $total }}</strong></h3>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5" class="text-right">
                                    <a href="{{ url('product') }}" class="btn btn-warning"> Continue Shopping</a>
                                    <a href="{{ url('strip') }}" class="btn btn-primary">Payment</a>
                                    <button class="btn btn-success">Checkout</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </section>
</main>

@endsection

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

<script type="text/javascript">
    $(document).on("click", ".update-cart", function(e) {
        e.preventDefault();
        var ele = $(this);

        // alert(ele.attr("data-id"));
        $.ajax({
            // headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}'},
            url: "{{ url('update-cart')}}",
            type: 'get',
            data: {
                id: ele.attr("data-id"),
                quantity: ele.val()
            },
            success: function(response) {
                window.location.reload();
            }
        });
    });

    $(document).on("click", ".removecart", function(e) {
        e.preventDefault();

        var ele = $(this);
        if (confirm("Are you sure want to remove?")) {
            $.ajax({
                url: "{{  url('removecart') }}",
                method: "delete",
                data: {
                    _token: '{{ csrf_token() }}',
                    id: ele.parents("tr").attr("data-id")
                },
                success: function(response) {

                    window.location.reload();
                }
            });
        }
    });
</script>
