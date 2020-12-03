function createContent()
{
	for(var i = 0; i < moons_info.length; i++)
	{
		Planet = document.createElement("div");
		Planet.classList.add("planet");
		Planet.id = i;

		planetIcon = document.createElement("img");
		planetIcon.classList.add("planet_icon");
		planetIcon.src = moons_info[i].img;

		title = document.createElement("h2");
		title.innerText = moons_info[i].name;

		Planet.append(planetIcon);
		Planet.append(title);
		Planet.insertAdjacentHTML("beforeend", "<hr color = 'white'><br>");

		for(var j = 0; j < moons_info[i].moons.length; j++)
		{
			Moon = document.createElement("div");
			Moon.classList.add("moon");
			TitleImg = document.createElement("div");
			TitleImg.classList.add("title_img");
			title = document.createElement("h3");
			title.innerText = moons_info[i].moons[j].name;
			TitleImg.append(title);
			TitleImg.insertAdjacentHTML("beforeend", "<hr color = 'white' width='50%' align='left' style='margin-bottom:10%'>");
			Img = document.createElement("img");
			Img.classList.add("moon_image");
			Img.src = "images/" + moons_info[i].moons[j].name + ".png";
			TitleImg.append(Img);
			Moon.append(TitleImg);
			Moon_info = document.createElement("div");
			Moon_info.classList.add("moon_info");
			Moon_info.innerText =  moons_info[i].moons[j].description;
			Moon.append(Moon_info);
			Planet.append(Moon);
		}
		Planet.insertAdjacentHTML("beforeend", "<hr color = 'white'>");
		document.getElementById("content_block").append(Planet);
	}
}

createContent();
