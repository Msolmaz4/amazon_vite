import { User } from "./models/userModel";
import { Product } from "./models/productModel";
import bcrypt from 'bcryptjs'

export const sampleProducts :Product [] = [
    {
        name:'Nikw=e Slim shirt',
        slug: 'ASlim-shirt',
        image:'../public/images/p1.jpg',
        category:'SHIRTS',
        brand:'NIKE',
        price:120,
        countInStock:10,
        description:'HIGH   quality shirt',
        rating:4.5,
        numReviews:10,
    },
    {
        name:'Adidas Slim shirt',
        slug: 'Nike-Slim-shirt',
        image:'../public/images/p2.jpg',
        category:'SHIRTS',
        brand:'NIKE',
        price:120,
        countInStock:10,
        description:'HIGH   quality shirt',
        rating:4.5,
        numReviews:10,
    }

]
export const sampleUsers: User[] = [
    {
      name: 'Joe',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]