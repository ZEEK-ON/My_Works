document.getElementById("room1").onclick = function(){
	document.getElementById("intro_preview").src = "img/karaoke_l.png";
	var txt = "<p>普段は皆様から出向いているカラオケボックスが、<br>カラオケボックスの方から来ちゃいます。<br>歌って、騒いで老化なんて吹き飛ばしましょう。</p>";
	document.getElementById("intro_text").innerHTML = txt;
}
document.getElementById("room2").onclick = function(){
	document.getElementById("intro_preview").src = "img/ryokan_l.png";
	var txt = "<p>落ち着いて歌っていただくために和室を用意しました。<br>染み込むの早いから飲み物こぼさないでください。</p>";
	document.getElementById("intro_text").innerHTML = txt;
}
document.getElementById("room3").onclick = function(){
	document.getElementById("intro_preview").src = "img/coin_l.png";
	var txt = "<p>目指せ一攫千金<br>地下送りにはいたしません。</p>";
	document.getElementById("intro_text").innerHTML = txt;
}
document.getElementById("room4").onclick = function(){
	document.getElementById("intro_preview").src = "img/massaji_l.jpg";
	var txt = "<p>１００連勤を達成した整体師を乗せて現地へ向かいます<br>ゆっくりと整体をお楽しみください。</p>";
	document.getElementById("intro_text").innerHTML = txt;
}
/*
var introBtn =  document.getElementsByClassName("intro");

for(var i=0; i<introBtn.length;i++){
	introBtn[i].children[1].onclick = function(){
		changeImg(this.children[0].src);
	}3
}

function changeImg(url){
	//console.log(url);
	var imgPass = url.split(".");
	imgURL = imgPass[0] + "_l." + imgPass[1];
	//console.log(imgURL);
	document.getElementById("intro_preview").src = imgURL;
};
*/