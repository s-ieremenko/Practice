import { Movie } from 'src/movie/movie.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phone: string;

  @OneToMany(() => Movie, (movie) => movie.director)
  movies: Movie[];
}
