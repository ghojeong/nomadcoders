import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(movieId: number): Movie {
    const movie: Movie | undefined = this.movies.find(
      (movie) => movie.id === +movieId,
    );
    if (!movie) {
      throw new NotFoundException(`Movie  with ID ${movieId} not found.`);
    }
    return movie;
  }

  deleteOne(movieId: number) {
    this.getOne(movieId);
    this.movies = this.movies.filter((movie) => movie.id !== +movieId);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(movieId: number, updatedData: any): Movie {
    const updatedMovie: Movie = {
      ...this.getOne(movieId),
      ...updatedData,
    } as Movie;
    this.deleteOne(movieId);
    this.movies.push(updatedMovie);
    return updatedMovie;
  }
}
