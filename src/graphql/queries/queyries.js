import gql from "graphql-tag";

export const getQueyries = gql`
    query {
        getMovies{
            id,
            title,
            description,
            image,
            video,
            publicationDate
        },
        getCategories{
            id,
            title
        }
    }
`