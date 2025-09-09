import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AppRole {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
  })
  id: number;

  @Column({
    type: "varchar",
    name: "name",
  })
  name: string;
}
