var myname = '보라해바라기';
var i = 0;
		
function btnClick(){
	if(i < myname.length) {
        colorChange();
		show.innerHTML+=myname[i];
		i++;
	}
}

function colorChange() {
    var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    document.getElementById("show").style.color = colorCode;
}