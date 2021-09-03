import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorController } from './actor.controller';
import { Actor } from './actor.entity';
import { ActorService } from './actor.service';

@Module({
  providers: [ActorService],
  imports: [TypeOrmModule.forFeature([Actor])],
  controllers: [ActorController],
})
export class ActorModule {}
