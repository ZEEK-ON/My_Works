var imgsPath = [
	"header_img.jpg",
	"family.jpg"
];
var maxImgCnt = imgsPath.length;

var currentImgIdx = 0;

document.getElementById("atama").onclick = function(){
	if(currentImgIdx<maxImgCnt-1){
		var nextImgIdx = currentImgIdx + 1;
	}
	else{
		var nextImgIdx = 0;
	}
	
	document.getElementById("atama").src = "img/" + imgsPath[ nextImgIdx ];
	currentImgIdx = nextImgIdx;
}