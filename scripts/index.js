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
