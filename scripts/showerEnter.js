#pragma strict

var soundClip:AudioClip;
var isPlayed = false;

function OnTriggerEnter(o:Collider){ 
	if(isPlayed == true) {
		playSound(); } isPlayed = true; 
}
	
function OnTriggerExit(o:Collider){
	isPlayed = false; 
}

function playSound () {
	audio.PlayOneShot (soundClip);
		isPlayed = false;
}