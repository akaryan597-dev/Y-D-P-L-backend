const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const Review = require('../models/Review');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected for seeding'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const products = [
  {
    name: 'Buffalo Milk',
    price: 82,
    unit: 'litre',
    imageUrl: 'https://i.imgur.com/2buffmilk.jpg',
    category: 'Milk',
    description: 'Fresh, rich, and creamy. Perfect for daily consumption.',
  },
  {
    name: 'Cow Milk',
    price: 77,
    unit: 'litre',
    imageUrl: 'https://i.imgur.com/1cowmilk.jpg',
    category: 'Milk',
    description: 'Pure and healthy cow milk, delivered fresh.',
  },
  {
    name: 'Curd (Dahi)',
    price: 130,
    unit: 'kg',
    imageUrl: 'https://i.imgur.com/curd.jpg',
    category: 'Curd',
    description: 'Homemade style dahi, thick and delicious.',
  },
  {
    name: 'Butter Milk (Chaach)',
    price: 40,
    unit: 'litre',
    imageUrl: 'https://i.imgur.com/chaach.jpg',
    category: 'Beverage',
    description: 'Refreshing and digestive chaach, a perfect summer drink.',
  },
  {
    name: 'Buffalo Ghee',
    price: 1300,
    unit: 'kg',
    imageUrl: 'https://i.imgur.com/buffghee.jpg',
    category: 'Ghee',
    description: 'Pure buffalo ghee, rich in aroma and nutrients.',
  },
  {
    name: 'Cow Ghee',
    price: 1600,
    unit: 'kg',
    imageUrl: 'https://i.imgur.com/cowghee.jpg',
    category: 'Ghee',
    description: 'Traditional cow ghee, packed with health benefits.',
  },
  {
    name: 'Paneer',
    price: 440,
    unit: 'kg',
    imageUrl: 'https://i.imgur.com/4paneer.jpg',
    category: 'Paneer',
    description: 'Soft and fresh paneer, ideal for all your culinary needs.',
  },
  {
    name: 'Butter (Desi Makhan)',
    price: 1000,
    unit: 'kg',
    imageUrl: 'https://i.imgur.com/desimakhan.jpg',
    category: 'Butter',
    description: 'Authentic homemade desi makhan, churned to perfection.',
  },
  {
    name: 'Farm Mustard Oil',
    price: 220,
    unit: 'litre',
    imageUrl: 'https://i.imgur.com/mustardoil.jpg',
    category: 'Oil',
    description: 'Pure and unadulterated mustard oil, straight from the farm.',
  },
  {
    name: 'Mawa',
    price: 450,
    unit: 'kg',
    imageUrl: 'https://i.imgur.com/mawa.jpg',
    category: 'Mawa',
    description: 'Rich and flavourful mawa, essential for Indian sweets.',
  },
  {
    name: 'Lassi',
    price: 80,
    unit: 'glass',
    imageUrl: 'https://i.imgur.com/lassi.jpg',
    category: 'Beverage',
    description: 'Creamy and sweet lassi, a delightful traditional drink.',
  },
];

const reviews = [
  { customerName: 'Ravi Sharma', rating: 5, text: 'Best milk quality I’ve ever had!' },
  { customerName: 'Neha Verma', rating: 5, text: 'Paneer was fresh and soft. Loved it!' },
  { customerName: 'Amit Singh', rating: 5, text: 'Ghee smells amazing and tastes pure.' },
  { customerName: 'Priya Chauhan', rating: 5, text: 'Chaach is super refreshing. Perfect for summer!' },
  { customerName: 'Vikram Mehta', rating: 5, text: 'Cow milk tastes clean and natural. Highly recommended.' },
  { customerName: 'Anjali Sinha', rating: 5, text: 'Lassi is creamy and delicious. My kids love it!' },
  { customerName: 'Deepak Yadav', rating: 5, text: 'Buffalo ghee is rich and aromatic. Worth every rupee.' },
  { customerName: 'Meena Kumari', rating: 5, text: 'Desi makhan reminded me of my childhood. Authentic taste!' },
  { customerName: 'Karan Patel', rating: 5, text: 'Mustard oil smells fresh and cooks beautifully.' },
  { customerName: 'Sonal Gupta', rating: 5, text: 'Mawa is perfect for sweets. Rich and flavorful.' },
  { customerName: 'Rahul Joshi', rating: 5, text: 'Buffalo milk is thick and creamy. Great for tea.' },
  { customerName: 'Sneha Rathi', rating: 5, text: 'Cow ghee is pure and golden. Loved the packaging too.' },
  { customerName: 'Mohit Bansal', rating: 5, text: 'Paneer is soft and fresh. Great for cooking.' },
  { customerName: 'Tanya Kapoor', rating: 5, text: 'Curd is thick and homemade style. Just how I like it.' },
  { customerName: 'Rohit Thakur', rating: 5, text: 'Butter milk is light and tasty. Great digestive.' },
  { customerName: 'Divya Mishra', rating: 5, text: 'Farm mustard oil is pure and strong. Great for pickles.' },
  { customerName: 'Nikhil Saxena', rating: 5, text: 'Lassi is sweet and satisfying. Perfect after lunch.' },
  { customerName: 'Pooja Rawat', rating: 5, text: 'Cow milk is fresh and clean. My family loves it.' },
  { customerName: 'Arjun Malhotra', rating: 5, text: 'Buffalo ghee is top quality. Great for cooking and puja.' },
  { customerName: 'Isha Jain', rating: 5, text: 'Paneer is soft and melts perfectly. Great texture.' },
];

const seedData = async () => {
  try {
    await Product.deleteMany();
    await Review.deleteMany();
    await Product.insertMany(products);
    await Review.insertMany(reviews);
    console.log('✅ Seed data inserted successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
};

seedData();
