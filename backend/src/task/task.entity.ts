import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column({ nullable: true})
  reminder: string;

  @Column()
  status: string;

  @Column()
  lastModified: string;
  
}