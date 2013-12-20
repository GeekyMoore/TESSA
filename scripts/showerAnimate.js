#pragma strict

var isEnabled = false;

var top = 0.6841307;
var bottom = -2.08909;

function Start () {
	isEnabled = false;
}

function Update () {
	if (isEnabled) {
		animate();
	}
}

function animate() {
	var height = transform.position.y;
	
	transform.position.y = Mathf.Sin(Time.time * 2) * 1.25 - 0.8;
}