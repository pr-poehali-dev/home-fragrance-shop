
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type CategoryProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
  origin: string;
};

const CategoryCard = ({
  title,
  description,
  image,
  link,
  color,
  origin,
}: CategoryProps) => {
  return (
    <div className={`product-card group overflow-hidden ${color} p-6 md:p-8`}>
      <div className="flex flex-col h-full">
        <div className="flex-1 mb-6">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white/50 rounded-full mb-3">
            {origin}
          </span>
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
      title: "Эссенции для белья",
      description:
        "Парфюмированные концентраты для придания белью неповторимого аромата",
      image:
        "https://images.unsplash.com/photo-1542038335240-88bc6883f64d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=essences",
      color: "bg-soft-purple/30",
      origin: "Италия",
    },
    {
      title: "Диффузоры",
      description:
        "Элегантные ароматические диффузоры для создания атмосферы в доме",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=diffusers",
      color: "bg-soft-peach/30",
      origin: "Испания",
    },
    {
      title: "Натуральное мыло",
      description:
        "Ручной работы мыло из натуральных ингредиентов и эфирных масел",
      image:
        "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=soap",
      color: "bg-soft-green/30",
      origin: "Франция",
    },
    {
      title: "Подарочные наборы",
      description:
        "Изысканные композиции наших лучших продуктов для особых случаев",
      image:
        "https://images.unsplash.com/photo-1556229174-5e42a09e45af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=sets",
      color: "bg-soft-yellow/30",
      origin: "Коллекция",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Наши категории
          </h2>
          <p className="text-gray-600 text-lg">
            Мы тщательно отбираем лучшие ароматы из Европы, чтобы создать
            неповторимые коллекции для вашего дома и белья
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
