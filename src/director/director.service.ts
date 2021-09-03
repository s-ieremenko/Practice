import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Director } from './director.entity';
import { CreateDirectorDto } from './dto/create-director.dto';

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director)
    private readonly directorRepository: Repository<Director>,
  ) {}

  async getDirectors(): Promise<Director[]> {
    const directors: Director[] = await this.directorRepository.find({
      relations: ['movies'],
    });
    return directors;
  }

  async createDirector(createDirectorDto: CreateDirectorDto): Promise<void> {
    const directorExist = await this.directorRepository.findOne({
      where: {
        phone: createDirectorDto.phone,
      },
    });
    if (directorExist) {
      throw new Error('Director already exists');
    }
    const director: Director = this.directorRepository.create({
      name: createDirectorDto.name,
      phone: createDirectorDto.phone,
    });
    this.directorRepository.save(director);
  }
}
