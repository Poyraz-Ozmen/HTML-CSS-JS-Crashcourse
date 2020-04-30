// Write your JS in here
//alert("hello from app.js");
var pics = [
	"imgs/kitty_bed.jpg", // this is 0
	"imgs/kitty_basket.jpg", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_sink.jpg",
	"imgs/kitty_wall.jpg" // this is 5
]

var btn = document.querySelector("button"); // first button named button
var img = document.querySelector("img");
var counter=1;

btn.addEventListener("click",function(){
	//alert(img.src);
	img.src =pics[counter];
	counter = counter + 1;

	// in js it is tripple ===
	if (counter===6) {
		counter=0;
	}
});



/*
btn.addEventListener("click",function(){
	alert("clicked");
});
*/

