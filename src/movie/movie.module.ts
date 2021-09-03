import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from './movie.controller';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Module({
  providers: [MovieService],
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MovieController],
})
export class MovieModule {}
