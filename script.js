	$("#docList").on('click','.uploadBtn',function(){
		$("#uplodfile").click();
	});

  $('#addBtn').on('click', function(){
		$list = $('#docList');
		var $row = $('<div class="row">');
		$row.append('<div class="col-sm-2 text-right"> Document Name </div>')
		.append('<div class="col-sm-2"> <input type="text" class="form-control"> </div>')
		.append('<div class="col-sm-1"> <button class="btn btn-secondary btn-md uploadBtn" type="button"><i class="glyphicon glyphicon-upload"></i> Upload</button> </div>');
		$row.appendTo($list);
  });

	$('#removeBtn').on('click', function(){
		if($('.row').length > 3)
			$('.row:last').remove();
  });
