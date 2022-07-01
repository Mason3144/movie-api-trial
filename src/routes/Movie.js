import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: ID!) {
    movie(id: $movieId) {
      id
      title
      medium_cover_image
      genres
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  if (loading) {
    return <h1>Fetching movie...</h1>;
  }
  return (
    <div>
      <h1>{data.movie.title}</h1>
      <div>
        <img src={data.movie.medium_cover_image}></img>
      </div>
      <span>Genres: {data.movie.genres}</span>
    </div>
  );
}
