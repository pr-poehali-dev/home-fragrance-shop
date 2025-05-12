
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  content: string;
  product: string;
  date: string;
  category: 'home' | 'cosmetics' | 'sets';
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Анна Смирнова',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    content: 'Диффузор "Лавандовые поля" создает невероятную атмосферу в моей спальне. Помогает расслабиться после долгого рабочего дня. Аромат нежный, но стойкий, не приторный. Очень довольна покупкой!',
    product: 'Ароматический диффузор "Лавандовые поля"',
    date: '15 апреля 2025',
    category: 'home',
  },
  {
    id: '2',
    name: 'Михаил Козлов',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    rating: 5,
    content: 'Купил подарочный набор "Утренняя свежесть" для жены на годовщину. Она в восторге! Качество продукции на высоте, упаковка очень красивая. Теперь и я пользуюсь кремом для рук оттуда, хотя не планировал :)',
    product: 'Подарочный набор "Утренняя свежесть"',
    date: '2 мая 2025',
    category: 'sets',
  },
  {
    id: '3',
    name: 'Елена Петрова',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 4,
    content: 'Крем для лица с маслом розы стал моим спасением этой зимой. Кожа перестала шелушиться, появилось здоровое сияние. Приятный тонкий аромат, быстро впитывается. Единственный минус - хотелось бы, чтобы баночка была побольше.',
    product: 'Увлажняющий крем для лица с маслом розы',
    date: '28 марта 2025',
    category: 'cosmetics',
  },
  {
    id: '4',
    name: 'Дмитрий Иванов',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5,
    content: 'Свеча "Ванильный уют" полностью оправдывает своё название. Горит ровно, запах распространяется по всей комнате. Создает действительно уютную атмосферу зимними вечерами. Буду заказывать ещё.',
    product: 'Ароматическая свеча "Ванильный уют"',
    date: '12 апреля 2025',
    category: 'home',
  },
  {
    id: '5',
    name: 'Ольга Никитина',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 5,
    content: 'Масло для тела просто невероятное! Кожа после него как бархат, и запах держится весь день. Использую после душа на влажную кожу. Расход экономный, хватает надолго.',
    product: 'Масло для тела с эфирными маслами',
    date: '5 апреля 2025',
    category: 'cosmetics',
  },
  {
    id: '6',
    name: 'Сергей Морозов',
    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    rating: 4,
    content: 'Набор "Спокойный сон" помог наладить режим и справиться с бессонницей. Особенно нравится спрей для подушки, использую каждый вечер. Свеча тоже хороша, но хотелось бы, чтобы аромат был чуть более интенсивным.',
    product: 'Набор для релаксации "Спокойный сон"',
    date: '20 апреля 2025',
    category: 'sets',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{testimonial.content}</p>
      
      <div className="pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">Продукт:</p>
        <p className="text-sm font-medium text-primary">{testimonial.product}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [category, setCategory] = useState<'all' | 'home' | 'cosmetics' | 'sets'>('all');
  
  const filteredTestimonials = category === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === category);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-gray-600 text-lg">
            Прочитайте отзывы клиентов, которые уже оценили качество наших ароматов для дома и натуральной косметики
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setCategory(value as any)}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="all">Все отзывы</TabsTrigger>
              <TabsTrigger value="home">Ароматы для дома</TabsTrigger>
              <TabsTrigger value="cosmetics">Косметика</TabsTrigger>
              <TabsTrigger value="sets">Наборы</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="home" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cosmetics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sets" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
