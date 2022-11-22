@if(isset($results))
    <table class="table">
        <thead>
            <th>Price</th>
        </thead>
        <tbody>
            @foreach ($results as $result)
                <tr>
                    <td>{{ $result->rs }}</td>
                </tr>
            @endforeach
        </tbody>
     </table>
@endif

<form id="searchForm" method="get" action="/search">

    <div class="col-md-6 mb-6">
        <label>Price</label>
        <input type="number" id="min_price" name="min_price" class="form-control" placeholder="Min Price">
        <input type="number" id="max_price" name="max_price" class="form-control" placeholder="Max Price">
    </div>
    <button class="btn btn-primary btn-lg btn-block" name="search">Search</button>

</form>
