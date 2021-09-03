import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from 'src/actor/actor.entity';
import { Director } from 'src/director/director.entity';
import { Movie } from 'src/movie/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'movies',
      entities: [Movie, Director, Actor],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
