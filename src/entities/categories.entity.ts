import {
  Entity,
  Column,
  PrimaryColumn,
  TreeChildren,
  TreeParent,
  JoinColumn,
} from 'typeorm';

@Entity('categories')
export class CategoriesEntity {
  @PrimaryColumn({ unique: true })
  id: number;

  @Column()
  name: string;

  @TreeChildren()
  children?: CategoriesEntity[];

  @TreeParent()
  @JoinColumn({ name: 'parent_id' })
  parent?: CategoriesEntity;
}
