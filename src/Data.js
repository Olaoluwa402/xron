import img1 from '../src/img/productImg/product-1.png'
import img2 from '../src/img/productImg/product-2.png'
import img3 from '../src/img/productImg/product-3.png'
import img4 from '../src/img/productImg/product-4.png'
import img5 from '../src/img/productImg/product-5.png'
import img6 from '../src/img/productImg/product-6.png'
import img7 from '../src/img/productImg/product-7.png'
import img8 from '../src/img/productImg/product-8.png'
const Products = [
    {
        id:1,
        title:'Phone One',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
        price:'$250.00',
        img:img1,
        inCart:true,
        count:0,
    },
    {
        id:2,
        title:'Phone Two',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
        price:'$200.00',
        img:img2,
        inCart:false,
        count:0,
    },
    {
        id:3,
        title:'Phone Three',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
        price:'$300.00',
        img:img3,
        inCart:false,
        count:0,
    },
    {
        id:4,
        title:'Phone Four',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
        price:'$400.00',
        img:img4,
        inCart:false,
        count:0,
    },
    {
        id:5,
        title:'Phone Five',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
        price:'$450.00',
        img:img5,
        inCart:false,
        count:0,
    },
    {
        id:6,
        title:'Phone Six',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
        price:'$600.00',
        img:img6,
        inCart:true,
        count:0,
    },
    {
        id:7,
        title:'Phone Seven',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
        price:'$650.00',
        img:img7,
        inCart:false,
        count:0,
    },
    {
        id:8,
        title:'Phone Eight',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
        price:'$700.00',
        img:img8,
        inCart:false,
        count:0,
    },
]

const ProductDetail = {
    id:1,
    title:'Phone One',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquam. Deleniti dolores laborum dolorem voluptates animi esse sequi molestiae nobis.',
    price:'$250.00',
    img:'../public/img/product-1.png',
    inCart:false,
    count:0,
}

export {Products, ProductDetail}