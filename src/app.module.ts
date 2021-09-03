import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DirectorModule } from './director/director.module';
import { ActorModule } from './actor/actor.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [DatabaseModule, DirectorModule, ActorModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
