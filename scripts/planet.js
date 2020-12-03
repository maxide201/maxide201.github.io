function openWindow(url, isNew = 1)
{
	if(isNew)
		window.open(url,"_blank");
	else
		window.open(url,"_self");
}