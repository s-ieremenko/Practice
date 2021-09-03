import { Body, Get, Res } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Director } from './director.entity';
import { DirectorService } from './director.service';
import { Response } from 'express';
import { Post } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';

@Controller('director')
export class DirectorController {
  constructor(private directorService: DirectorService) {}

  @Get()
  async read(@Res() res: Response): Promise<void> {
    try {
      const directors: Director[] = await this.directorService.getDirectors();
      res.status(HttpStatus.OK).send(directors);
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(error.message);
    }
  }

  @Post('post')
  async create(
    @Res() res: Response,
    @Body() createDirectorDto: CreateDirectorDto,
  ): Promise<Response> {
    if (!createDirectorDto.name || !createDirectorDto.phone) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .send('All the fields must be filled');
    }
    try {
      await this.directorService.createDirector(createDirectorDto);
      res.status(HttpStatus.CREATED).send('Director created');
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send(error.message);
    }
  }
}
