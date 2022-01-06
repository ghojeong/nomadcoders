import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Seo from "../components/Seo";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home({ results: movies }: { results: Movie[] }) {
  const router = useRouter();
  const onClick = ({ id, original_title }: Movie) => {
    router.push(`/movies/${original_title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div className="movie" key={movie.id} onClick={() => onClick(movie)}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.poster_path}
            width="100%"
            height="100%"
          />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor: pointer;
        }
        .movie:hover {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const props = await (await fetch("http://localhost:3000/api/movies")).json();
  return { props };
}
