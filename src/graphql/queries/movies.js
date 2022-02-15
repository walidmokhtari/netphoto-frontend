import gql from "graphql-tag";

export const getMovies = gql`
    query {
        getMovies{
            id,
            title,
            description,
            image,
            video,
            publicationDate
        }
    }
`