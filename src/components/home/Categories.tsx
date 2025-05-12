
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type CategoryProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
};

const CategoryCard = ({ title, description, image, link, color }: CategoryProps) => {
  return (
    <div className={`product-card group overflow-hidden ${color} p-6 md:p-8`}>
      <div className="flex flex-col h-full">
        <div className="flex-1 mb-6">
          <h3 className="text-2xl font-playfair font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 items-end">
          <Link
            to={link}
            className="inline-flex items-center text-primary font-medium group-hover:underline"
          >
            Смотреть все
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="relative h-32 w-full overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  const categories = [
    {
      title: 'Ароматы для дома',
      description: 'Свечи, диффузоры и спреи для создания уютной атмосферы',
      image: 'https://images.unsplash.com/photo-1603812848752-73a11a22d887?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=home',
      color: 'bg-soft-purple/30',
    },
    {
      title: 'Натуральная косметика',
      description: 'Средства по уходу за кожей, созданные из натуральных ингредиентов',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=cosmetics',
      color: 'bg-soft-peach/30',
    },
    {
      title: 'Подарочные наборы',
      description: 'Идеальные комбинации наших лучших продуктов для подарка',
      image: 'https://images.unsplash.com/photo-1549489535-11f1be81d423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=sets',
      color: 'bg-soft-green/30',
    },
    {
      title: 'Новинки',
      description: 'Откройте для себя наши последние ароматические творения',
      image: 'https://images.unsplash.com/photo-1586179253019-ac8969b4a698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/products?category=new',
      color: 'bg-soft-yellow/30',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Наши категории</h2>
          <p className="text-gray-600 text-lg">
            Исследуйте наши коллекции ароматов для дома и натуральной косметики, созданные с любовью к природе и вниманием к деталям
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
