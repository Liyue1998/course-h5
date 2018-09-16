function PlayM1(){
	pause2();
	var myAudio=document.getElementById('mu1');
	myAudio.load();
	myAudio.play();
}
function PlayM2(){
	pause1();
	var myAudio=document.getElementById('mu2');
	myAudio.load();
	myAudio.play();
}
function pause1(){
	var mypause=document.getElementById('mu1');
	mypause.pause();		
}
function pause2(){
	var mypause=document.getElementById('mu2');
	mypause.pause();		
}


