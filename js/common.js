// ギガグラ計算部分
function giga_calc() {
	// alert("hoge");
	var monster1 = document.form1.enamy_hp.value *
	 (1 - document.form1.Gigagura_calc01.value);
	alert(monster1);
}
$(function(){
	$("#btn01").onClick({
		giga_calc();
	});

});

// $functionの場合jQueryでfunctionのみの場合jsが動く
