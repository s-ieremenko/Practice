import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async getMovies(): Promise<Movie[]> {
    const movies: Movie[] = await this.movieRepository.find();
    if (!movies.length) {
      throw new NotFoundException('No movies are available');
    }
    return movies;
  }

  async getOneMovie(id: string): Promise<Movie> {
    const movie: Movie = await this.movieRepository.findOne(id);
    if (!movie) {
      throw new NotFoundException('No movie with that Id');
    }
    return movie;
  }

  async getOneMovieByName(name: string): Promise<Movie> {
    const movie: Movie = await this.movieRepository.findOne({
      where: { name },
    });
    return movie;
  }

  async createMovie(name: string): Promise<void> {
    const movieExist: Movie = await this.movieRepository.findOne({
      where: { name },
    });

    if (movieExist) {
      throw new BadRequestException('Such a movie is already written');
    }
    const movie: Movie = this.movieRepository.create({ name });
    await this.movieRepository.save(movie);
  }

  async deleteMovie(name: string): Promise<void> {
    const movie = await this.movieRepository.findOne(name);
    if (!movie) {
      throw new NotFoundException('No movies with this name');
    }
    await this.movieRepository.remove(movie);
  }
}
