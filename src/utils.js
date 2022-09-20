export const getMoviesByName = async (search, apiKey) => {
	const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);
	const data = await response.json();
	console.log(data);
}

export const getMovieDetailsByID = async (id, apiKey) => {
	const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
	const data = await response.json();
	console.log(data);
}