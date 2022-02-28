import gql from "graphql-tag";

export const Categories = gql`
    mutation createCategorie($title: String!){
        createCategorie(title: $title) {
            id,
            title
        }
    },

`

export const Movies = gql`
    mutation createMovie($title: String!, $description: String!,$image:String!,$type:String!,$video:String!,$publicationDate:String!,$categories:[ID]){
          createMovie(title: $title, description:$description,image:$image,type:$type,video:$video,publicationDate:$publicationDate,categories:$categories)
            {
              id
            }
        },
`