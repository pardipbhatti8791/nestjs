import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity('coffees') // sql table === coffee by default or you can pass table name in entity
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany(type => Flavor, (flavor) => flavor.coffees, {
    cascade: true
  })
  flavors: Flavor[];
}