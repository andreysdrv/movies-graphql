import { createSchema } from 'graphql-yoga'
import { getMovieDetails, getMovies, getMovieSuggestions } from './db'

export const schema = createSchema({
	typeDefs: /* GraphQL */ `
		type Movie {
			id: Int!
			title: String!
			rating: Float
			description_full: String
			language: String
			medium_cover_image: String
			genres: [String]
		}
		type Query {
			movies(limit: Int, rating: Float): [Movie]!
			movie(id: Int!, withImage: Boolean, withCast: Boolean): Movie!
			suggestions(id: Int!): [Movie]!
		}
	`,
	resolvers: {
		Query: {
			movies: (_, { limit, rating }) => getMovies(limit, rating),
			movie: (_, { id, withImage, withCast }) =>
				getMovieDetails(id, withImage, withCast),
			suggestions: (_, { id }) => getMovieSuggestions(id),
		},
	},
})
