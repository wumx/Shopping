$(function(){
//侧边栏心加载
	$.ajax({
		url:'json/bl.json',
		type:"get",
		success:function(res){
			$('.left-ul-show').html(res[0].message);
			$('.gb-icon').click(function(){
				$('.left-ul-show').css('display','none');
			})
		}
	});
});
