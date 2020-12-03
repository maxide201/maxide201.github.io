var locString = document.location.search;
var searchParams = new URLSearchParams(locString);
var idPlanet = searchParams.get("id");


function createContent() {
	for (var i = 0; i < planets_info.length; i++) {
		if (idPlanet == planets_info[i].id) {
			name_of_planet.append(planets_info[i].name_of_planet);
			image.src = planets_info[i].src;
			for(var j = 0; j < planets_info[i].texts.length; j++)
			{
				var p = document.createElement('p');
				p.innerText = planets_info[i].texts[j];
				planet_txt.append(p);
			}
		}
	}
}

createContent();