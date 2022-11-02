import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Gallery } from "./gallery.entity";

@Entity("announcement")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  km: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  img_cape: string;

  @Column({ default: false })
  is_sold: boolean;

  @Column({ default: false })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Gallery, (gallery) => gallery.announcement, { eager: true })
  gallery: Gallery[];
}
