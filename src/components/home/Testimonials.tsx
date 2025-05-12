import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  content: string;
  product: string;
  date: string;
  category: "essences" | "diffusers" | "soap" | "sets";
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Анна Смирнова",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    content:
      'Эссенция "Цветущий сад" превратила стирку в настоящее удовольствие! Белье пахнет изумительно, аромат держится несколько дней. Теперь это незаменимая вещь в моем доме.',
    product: 'Парфюмированная эссенция "Цветущий сад"',
    date: "15 апреля 2025",
    category: "essences",
  },
  {
    id: "2",
    name: "Михаил Козлов",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 5,
    content:
      'Подарил жене набор "Домашний спа-ритуал" на годовщину. Она в восторге! Особенно понравилась эссенция для белья и диффузор. Качество на высоте, упаковка очень стильная.',
    product: 'Набор "Домашний спа-ритуал"',
    date: "2 мая 2025",
    category: "sets",
  },
  {
    id: "3",
    name: "Елена Петрова",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
    content:
      'Мыло "Лавандовые поля Прованса" - потрясающий продукт! Нежно очищает кожу, не сушит, а аромат действительно как в настоящих лавандовых полях. Единственный минус - хочется, чтобы кусочек был побольше.',
    product: 'Натуральное мыло "Лавандовые поля Прованса"',
    date: "28 марта 2025",
    category: "soap",
  },
  {
    id: "4",
    name: "Дмитрий Иванов",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    content:
      'Диффузор "Средиземноморский бриз" полностью оправдывает своё название. Запах морской и свежий, но при этом не резкий. Гости всегда спрашивают, чем так вкусно пахнет в квартире.',
    product: 'Диффузор "Средиземноморский бриз"',
    date: "12 апреля 2025",
    category: "diffusers",
  },
  {
    id: "5",
    name: "Ольга Никитина",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    content:
      'Эссенция "Сицилийский лимон" - это находка! Добавляю в последнее полоскание при стирке, и вся одежда и постельное белье приобретают тонкий, освежающий аромат цитрусовых. Расход очень экономичный.',
    product: 'Эссенция для белья "Сицилийский лимон"',
    date: "5 апреля 2025",
    category: "essences",
  },
  {
    id: "6",
    name: "Сергей Морозов",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 4,
    content:
      'Диффузор "Гранатовое дерево" создает очень приятную атмосферу в гостиной. Аромат насыщенный, но не навязчивый. Стильный дизайн флакона отлично вписывается в интерьер. Хотелось бы, чтобы аромат держался чуть дольше.',
    product: 'Диффузор "Гранатовое дерево"',
    date: "20 апреля 2025",
    category: "diffusers",
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
              className={`h-4 w-4 ${i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">{testimonial.content}</p>

      <div className="pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">Продукт:</p>
        <p className="text-sm font-medium text-primary">
          {testimonial.product}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [category, setCategory] = useState<
    "all" | "essences" | "diffusers" | "soap" | "sets"
  >("all");

  const filteredTestimonials =
    category === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === category);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-gray-600 text-lg">
            Прочитайте отзывы клиентов, которые уже оценили качество наших
            европейских ароматов для дома и белья
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={(value) => setCategory(value as any)}
        >
          <div className="flex justify-center mb-10">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="all">Все отзывы</TabsTrigger>
              <TabsTrigger value="essences">Эссенции</TabsTrigger>
              <TabsTrigger value="diffusers">Диффузоры</TabsTrigger>
              <TabsTrigger value="soap">Мыло</TabsTrigger>
              <TabsTrigger value="sets">Наборы</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="essences" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diffusers" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soap" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sets" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
