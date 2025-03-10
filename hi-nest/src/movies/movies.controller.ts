import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: number) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Get('/:id')
  getById(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    console.log(typeof movieId);
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(
    @Param('id') movieId: number,
    @Body() updatedData: UpdateMovieDto,
  ): Movie {
    return this.moviesService.update(movieId, updatedData);
  }
}
