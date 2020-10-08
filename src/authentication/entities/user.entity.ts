import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from './roles.entity';

@Entity('users') // sql table === coffee by default or you can pass table name in entity
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string

  @Column()
  email: string;

  @Column()
  password: string

  @Column({ default: 0 })
  isActive: number

  @OneToOne(type => Roles, roles => roles)
  @JoinColumn()
  roles: Roles;
}