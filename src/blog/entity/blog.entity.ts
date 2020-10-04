import {
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from 'typeorm';
  
  @Entity()
  export class Category {
    @PrimaryGeneratedColumn()
    c_id: number;
  
    @Column()
    c_subject: string;
  
    @Column()
    hide_flag: number;
  }

  @Entity()
  export class SubCategory {
    @PrimaryGeneratedColumn()
    sc_id: number;
  
    @Column()
    sc_subject: string;
  
    @Column()
    p_id: number;

    @Column()
    hide_flag: number;
  }

  @Entity()
  export class Page {
    @PrimaryGeneratedColumn()
    p_id: number;
  
    @Column()
    page_url: string;

    @Column()
    page_body: string;
  
    @Column()
    sc_id: number;

    @Column()
    hide_flag: number;
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

  