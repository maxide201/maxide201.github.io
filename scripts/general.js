function go(href)
{
	document.location.replace("#"+href);
	
}

function openWindow(url, isNew = 1)
{
	if(isNew)
		window.open(url,"_blank");
	else
	window.open(url,"_self");
}

window.onscroll = function() {
 	var scrolled = window.pageYOffset || document.documentElement.scrollTop;

	if (scrolled > 100)
		upbutton.style.display = 'block';
	else 
		upbutton.style.display = 'none';


	if(scrolled > document.body.offsetHeight-window.innerHeight-100)
		upbutton.style.bottom = footer.getBoundingClientRect().height - 30 + scrolled - (document.body.offsetHeight-window.innerHeight - 100);	
	else
		upbutton.style.bottom = footer.getBoundingClientRect().height - 30;
}