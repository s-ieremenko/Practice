import { Body, Delete, Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';
import { Post } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async getAll(): Promise<Movie[]> {
    return this.movieService.getMovies();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Movie> {
    return this.movieService.getOneMovie(id);
  }
  @Get('one')
  async getOneByName(@Query('name') name: string): Promise<Movie> {
    return this.movieService.getOneMovieByName(name);
  }

  @Post('post')
  async create(@Body('name') name: string): Promise<void> {
    await this.movieService.createMovie(name);
  }

  @Delete('delete')
  async delete(@Body() name: string): Promise<void> {
    await this.movieService.deleteMovie(name);
  }
}
