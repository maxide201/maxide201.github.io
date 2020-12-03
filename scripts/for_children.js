function getCoords(elem) 
{
	var box = elem.getBoundingClientRect();
	return {
	top: box.top + pageYOffset,
	left: box.left + pageXOffset
	};
}

function resetAnimationText()
{
	document.getElementById("ufo").classList.remove("animationUfo");
	void document.getElementById("ufo").offsetWidth;
	document.getElementById("ufo").classList.add("animationUfo");
	document.getElementById("text").innerText = planets_info[curIdPlanet];
}

var curIdPlanet = 0;
function go(isRight)
{
	var offset = 100 + 15000/document.documentElement.clientWidth;
	if(isRight && curIdPlanet!=8)
	{
		curIdPlanet++;
		resetAnimationText();
	}
	if(!isRight && curIdPlanet!=0)
	{
		curIdPlanet--;
		resetAnimationText();
	}

	document.getElementById('planets').style.transform = "translate(-"+(offset*curIdPlanet)+"%, 0px)";
	if(curIdPlanet == 0)
		document.getElementById('arrow-b').style.opacity = 0;
	if(curIdPlanet == 1)
		document.getElementById('arrow-b').style.opacity = 100;
	if(curIdPlanet == 7)
		document.getElementById('arrow-h').style.opacity = 100;
	if(curIdPlanet == 8)
		document.getElementById('arrow-h').style.opacity = 0;	
}

function openWindow(url, isNew = 1)
{
	if(isNew)
		window.open(url,"_blank");
	else
			window.open(url,"_self");
}
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);

function preventMotion(event)
{
    window.scrollTo(0, window.pageYOffset || document.documentElement.scrollTop);
    event.preventDefault();
	event.stopPropagation();
}