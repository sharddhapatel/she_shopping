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

					<form action="{{url('insertimg')}}"  method="post" enctype="multipart/form-data">
                        {{csrf_field()}}
						<div class="row row--form">

							<div class="col-12  form__content">
								<div class="row row--form">
									<div class="col-12">
										<input type="hidden" name="id" class="form__input" placeholder="name" value="{{$data->id}}">
									</div>


									<div class="col-12">
										<div class="form__gallery">

											<label id="gallery1" for="form__gallery-upload">Upload photos</label>

											<input data-name="#gallery1" id="form__gallery-upload" name="img[]" class="form__gallery-upload" type="file" accept=".png, .jpg, .jpeg" >
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

	@endsection
