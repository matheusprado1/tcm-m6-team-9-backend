import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Announcement } from "./announcement.entity";

@Entity("gallery")
export class Gallery {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  img_url: string;

  @ManyToOne(() => Announcement, (announcement) => announcement.gallery, {
    onDelete: "CASCADE",
  })
  announcement: Announcement;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
