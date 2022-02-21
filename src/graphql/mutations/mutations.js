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

/*const [save, {loading2, error2, data2}] = useMutation(Movies, {
        variables: {
            title: movie.title,
            description: movie.description,
            image: movie.image,
            video: movie.video,
            type: movie.type,
            publicationDate: movie.publicationDate,
            categories: movie.categories      
        }
    });

    if (loading2) {
        return "loading...";
    }

    if (error2) {
        console.log(error);
        alert(error)
        return null;
    }
    */