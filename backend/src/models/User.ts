import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
  })
  id: number;

  @Column({
    type: "int",
    name: "appRole",
  })
  appRole: number;

  @Column({
    type: "varchar",
    name: "firstName",
    nullable: false,
  })
  firstName: string;

  @Column({
    type: "varchar",
    name: "lastName",
    nullable: false,
  })
  lastName: string;

  @Column({
    type: "varchar",
    name: "email",
    nullable: false,
  })
  email: string;

  @Column({
    type: "varchar",
    name: "password",
    nullable: false,
  })
  password: string;

  @Column({
    type: "varchar",
    name: "refreshToken",
    nullable: true,
    default: null,
  })
  refreshToken: string;
}
