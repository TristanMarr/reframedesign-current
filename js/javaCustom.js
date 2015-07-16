var pages = document.getElementById("Pages");
var custom = document.getElementById("custom");
var template = document.getElementById("template");
var adds = document.getElementById("adds");
var pageseo = document.getElementById("pageseo");
var backlink = document.getElementById("backlink");
var article = document.getElementById("article");
var social = document.getElementById("social");
var backlink2 = document.getElementById("backlink2");
var livechat = document.getElementById("livechat");
var analytics = document.getElementById("analytics");
var banner = document.getElementById("banner");


var Price = document.getElementById("Price");

pages.addEventListener("input", function one(){
	return pages.value;
});

adds.addEventListener("click", function two(){
	return 300;
	
});

pageseo.addEventListener("click", function(){
	alert("hi");
});

backlink.addEventListener("click", function(){
	alert("hi");
});

article.addEventListener("click", function(){
	alert("hi");
});

social.addEventListener("click", function(){
	alert("hi");
});

backlink2.addEventListener("click", function(){
	alert("hi");
});

livechat.addEventListener("click", function(){
	alert("hi");
});

analytics.addEventListener("click", function(){
	alert("hi");
});

banner.addEventListener("click", function(){
	alert("hi");
});

var sum = one() + two();
price.innerHTML = sum



//main page stuff
function div_show() {
document.getElementById('show').style.display = "block";
}

function div_hide(){
	document.getElementById('show').style.display = "none";
}
