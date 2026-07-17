import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Course {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Course_name: string;

  @Column()
  credit : number;

  @Column()
  department : string;
}