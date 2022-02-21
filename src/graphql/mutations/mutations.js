import gql from "graphql-tag";

export const getMutations = gql`
    mutation createCategorie($title: String!){
        createCategorie(title: $title) {
            id,
            title
        }
    }
`