const mainList = document.getElementById("filmList");
const buttons = document.getElementsByName("search_films");
const newList = document.createElement("li");

const addMoviesToDom = function (movies) {
	mainList.querySelectorAll("*").forEach((item) => item.remove());
	const allMovies = movies.map((movie) => {
		const link = document.createElement("a");
		link.href = "https://www.imdb.com/title/" + movie.imdbID;
		const img = document.createElement("img");
		img.src = movie.Poster;
		newList.appendChild(link);
		link.appendChild(img);
		return newList;
	});

	allMovies.forEach((item) => {
		mainList.appendChild(item);
	});
};

const handleOnChangeEvent = function (event) {
	switch (event.target.value) {
		case "new_films":
			filterLatestMovies();
			break;
		case "avenger_films":
			filterMovies("Avengers");
			break;
		case "xmen_films":
			filterMovies("X-Men");
			break;
		case "batman_films":
			filterMovies("Batman");
			break;
		case "princess_films":
			filterMovies("Princess");
			break;
		default:
			addMoviesToDom(movies);
	}
};

const filterMovies = function (wordInMovieTitle) {
	const filteredMovies = movies.filter((movie) => {
		const title = movie.Title;
		if (title.includes(wordInMovieTitle)) {
			return movie;
		}
	});

	addMoviesToDom(filteredMovies);
};

const filterLatestMovies = function () {
	const latestMovies = movies.filter((movie) => {
		if (movie.Year >= "2014") {
			return movie;
		}
	});

	addMoviesToDom(latestMovies);
};

Array.from(buttons).forEach(function (button) {
	button.addEventListener("change", handleOnChangeEvent);
});

addMoviesToDom(movies);
