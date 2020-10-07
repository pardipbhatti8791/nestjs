import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('roles') // sql table === coffee by default or you can pass table name in entity
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json', { nullable: false })
  roles: string[];
}