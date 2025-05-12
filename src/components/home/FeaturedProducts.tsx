
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card group h-full">
      <div className="relative overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        
        {(product.isNew || product.isBestseller) && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
            product.isNew ? 'bg-primary text-white' : 'bg-amber-500 text-white'
          }`}>
            {product.isNew ? 'Новинка' : 'Хит продаж'}
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full">
            <Heart className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 flex justify-center p-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button className="w-full bg-dark/80 backdrop-blur-sm hover:bg-dark text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Добавить в корзину
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-1">
          <Link to={`/products/${product.id}`} className="text-xs text-gray-500 hover:text-primary transition-colors">
            {product.category}
          </Link>
        </div>
        
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-playfair font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span className="text-sm">{product.rating.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center">
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                {product.oldPrice.toLocaleString('ru-RU')} ₽
              </span>
            )}
            <span className="font-medium">
              {product.price.toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Ароматический диффузор "Лавандовые поля"',
      price: 2490,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1602928309809-186c5812428a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Ароматы для дома',
      isBestseller: true,
    },
    {
      id: 2,
      name: 'Увлажняющий крем для лица с маслом розы',
      price: 1790,
      oldPrice: 2190,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Косметика',
    },
    {
      id: 3,
      name: 'Ароматическая свеча "Ванильный уют"',
      price: 1890,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Ароматы для дома',
      isNew: true,
    },
    {
      id: 4,
      name: 'Подарочный набор "Утренняя свежесть"',
      price: 3990,
      oldPrice: 4590,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1608571423539-e951a99b9b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Подарочные наборы',
    },
    {
      id: 5,
      name: 'Спрей для дома "Цитрусовый сад"',
      price: 990,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Ароматы для дома',
    },
    {
      id: 6,
      name: 'Масло для тела с эфирными маслами',
      price: 1490,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Косметика',
      isNew: true,
    },
    {
      id: 7,
      name: 'Ароматические палочки "Восточные специи"',
      price: 1290,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Ароматы для дома',
    },
    {
      id: 8,
      name: 'Набор для релаксации "Спокойный сон"',
      price: 2990,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Подарочные наборы',
      isBestseller: true,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="max-w-xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Популярные товары</h2>
            <p className="text-gray-600">
              Откройте для себя наши бестселлеры и новинки, выбранные с любовью для создания неповторимой атмосферы.
            </p>
          </div>
          
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Link to="/products">
              Смотреть все товары
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
