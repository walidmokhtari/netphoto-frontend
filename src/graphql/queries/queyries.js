import gql from "graphql-tag";

export const getQueyries = gql`
    query {
        getMovies{
            id,
            title,
            description,
            image,
            video,
            publicationDate,
            categories {id, title}
        },
        getCategories{
            id,
            title
        }
    }
    
`
