function deleteList(id) {
	$("#deleteForm").find("input[name='id']").val(id);
	$("#deleteForm").submit();
}

function chgData(id) {
	$.ajax({
		url: "/admin/banner/top",
		data: {id: id},
		success: function(res) {
			var $f = $("form[name;'bannerTopForm']");
			$(".wr-title").html('<span class="teat-primary"> - 배너 수정</span>');
			$f.find("input[name='title']").val(res.title);
			$f.find("input[name='link']").val(res.link);
			$f.find("textarea[name='desc']").val(res.desc);
			$f.find("select[name='position']").val(res.position);
		},
		error(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}