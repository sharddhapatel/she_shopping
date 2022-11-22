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

					<form action="{{url('inserttimer')}}"  method="post" enctype="multipart/form-data">
                        {{csrf_field()}}
						<div class="row row--form">

							<div class="col-12  form__content">
								<div class="row row--form">
                                    <div class="col-12">
                                        <div class="text"><label>Days</label>
                                        </div>
                                        <input type="text" name="day" class="form__input" placeholder="day">
                                    </div>
                                    <div class="col-12">
                                        <div class="text"><label>Hours</label>
                                        </div>
                                        <input type="text" name="hour" class="form__input" placeholder="hour">
                                    </div>
                                    <div class="col-12">
                                        <div class="text"><label>Minutes</label>
                                        </div>
                                        <input type="text" name="min" class="form__input" placeholder="min..">
                                    </div>
                                    <div class="col-12">
                                        <div class="text"><label>Second</label>
                                        </div>
                                        <input type="text" name="second" class="form__input" placeholder="sec....">
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
