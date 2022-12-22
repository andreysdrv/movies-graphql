import axios from 'axios'
import {
	LIST_MOVIES_URL,
	MOVIE_DETAILS_URL,
	MOVIE_SUGGESTIONS_URL,
} from '../utils'

export const getMovies = async (limit, rating) => {
	const {
		data: {
			data: { movies },
		},
	} = await axios(LIST_MOVIES_URL, {
		headers: {
			'User-Agent': 'axios 1.1.3',
		},
		params: {
			limit,
			minimum_rating: rating,
		},
	})

	return movies
}

export const getMovieDetails = async (
	id,
	withImage = false,
	withCast = false
) => {
	const {
		data: {
			data: { movie },
		},
	} = await axios(MOVIE_DETAILS_URL, {
		headers: {
			'User-Agent': 'axios 1.1.3',
		},
		params: {
			movie_id: id,
			with_images: withImage,
			with_cast: withCast,
		},
	})

	return movie
}

export const getMovieSuggestions = async id => {
	const {
		data: {
			data: { movies },
		},
	} = await axios(MOVIE_SUGGESTIONS_URL, {
		headers: {
			'User-Agent': 'axios 1.1.3',
		},
		params: {
			movie_id: id,
		},
	})

	return movies
}
