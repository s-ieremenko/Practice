import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorController } from './director.controller';
import { Director } from './director.entity';
import { DirectorService } from './director.service';

@Module({
  providers: [DirectorService],
  imports: [TypeOrmModule.forFeature([Director])],
  controllers: [DirectorController],
})
export class DirectorModule {}
