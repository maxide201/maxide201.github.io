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

var isHidden = true;
function changeInfoSizeAndOpen()
{
	InfoFontSize = 20;
	n = InfoFontSize-5;
	if(document.documentElement.clientWidth <= 992)
	{
		InfoFontSize = 35;
		n = InfoFontSize-10;
	}
	SolarSystemDecription.style.height = (2500*InfoFontSize*n)/document.documentElement.clientWidth;
	SolarSystemDecription.style.fontSize = InfoFontSize;
}

function infoClicked()
{
	if(isHidden) 
    {
    	changeInfoSizeAndOpen();
        isHidden = false;
    }
    else 
    {
        SolarSystemDecription.style.height = 0;
        SolarSystemDecription.style.fontSize = 0;
        isHidden = true;
    }
}

window.addEventListener('resize', event => {
	if(!isHidden)
	{
		changeInfoSizeAndOpen();
	}
}, false);


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