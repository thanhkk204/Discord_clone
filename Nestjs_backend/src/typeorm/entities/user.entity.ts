import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 500})
    userName: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column()
    createdAt: Date

    @Column({nullable: true})
    authStrategy: string
}
