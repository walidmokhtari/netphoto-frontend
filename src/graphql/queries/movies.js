import gql from "graphql-tag";

export const getMovies = gql`
    query {
        getMovies{
            id,
            title,
            description,
            video,
            publicationDate
        }
    }
`