import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn
  } from 'typeorm';
  
  @Entity()
  export class Category {
    @PrimaryGeneratedColumn()
    c_id: number;
  
    @Column()
    c_subject: string;
  
    @Column()
    hide_flag: number;

    @OneToMany(type => SubCategory, subcategory => subcategory.c_id)
    subcategories: SubCategory[];
  }

  @Entity()
  export class SubCategory {  
    @PrimaryGeneratedColumn()
    sc_id: number;

    @Column()
    sc_subject: string;
  
    @Column()
    hide_flag: number;
    
    @ManyToOne(type => Category, category => category.subcategories)
    @JoinColumn()
    c_id: Category;

    @OneToMany(type => Page, page => page.sc_id)
    pages: Page[];
  }

  @Entity()
  export class Page {
    @PrimaryGeneratedColumn()
    p_id: number;

    @Column()
    create_date: Date;

    @Column()
    page_subject: string;

    @Column()
    page_body: string;
  
    @Column()
    hide_flag: number;

    @ManyToOne(type => SubCategory, sub_category => sub_category.pages)
    @JoinColumn()
    sc_id: SubCategory;
  }

  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    u_id: number;
  
    @Column()
    name: string;
  
    @Column()
    password: string;
  }

  