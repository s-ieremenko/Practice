import { Actor } from 'src/actor/actor.entity';
import { Director } from 'src/director/director.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Director, (director) => director.movies)
  director: Director;

  @ManyToMany(() => Actor, (actor) => actor.movies)
  actors: Actor[];
}
