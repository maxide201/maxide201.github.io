function createContent()
{
	for(var i = 0; i < news_info.length; i++)
	{
		News = document.createElement("div");
		News.classList.add("news");

		title = document.createElement("h2");
		title.innerText = news_info[i].title;

		date = document.createElement("h3");
		date.innerText = news_info[i].date;
		
		Img = document.createElement("img");
		Img.classList.add("image");
		Img.src = news_info[i].img;
		
		text = document.createElement("p");
		text.innerText = news_info[i].text;

		News.append(title);
		News.insertAdjacentHTML("beforeend", "<hr color = '#f0f0f0' width='20%' align='left'>");
		News.append(date);
		News.insertAdjacentHTML("beforeend", "<br>");
		News.append(Img);
		News.append(text);

		document.getElementById("content_block").append(News);
	}
}

createContent();