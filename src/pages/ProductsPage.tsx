
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Product } from '@/components/home/FeaturedProducts';
import { Search, Filter, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const products: Product[] = [
  {
    id: 1,
    name: 'Парфюмированная эссенция "Цветущий сад"',
    price: 2490,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Эссенции',
    origin: 'Италия',
    isBestseller: true,
  },
  {
    id: 2,
    name: 'Натуральное мыло "Лавандовые поля Прованса"',
    price: 790,
    oldPrice: 990,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Мыло',
    origin: 'Франция',
  },
  {
    id: 3,
    name: 'Диффузор "Средиземноморский бриз"',
    price: 1890,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Диффузоры',
    origin: 'Испания',
    isNew: true,
  },
  {
    id: 4,
    name: 'Подарочный набор "Утренняя свежесть"',
    price: 3990,
    oldPrice: 4590,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1556229174-5e42a09e45af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Наборы',
    origin: 'Коллекция',
  },
  {
    id: 5,
    name: 'Эссенция для белья "Сицилийский лимон"',
    price: 1990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1562163392-a4bab34a7bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Эссенции',
    origin: 'Италия',
  },
  {
    id: 6,
    name: 'Мыло ручной работы "Розовый сад"',
    price: 690,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1607006483515-45a1567f5caa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Мыло',
    origin: 'Франция',
    isNew: true,
  },
  {
    id: 7,
    name: 'Диффузор "Гранатовое дерево"',
    price: 2290,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1592968900782-5a46ae09b432?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Диффузоры',
    origin: 'Испания',
  },
  {
    id: 8,
    name: 'Набор "Домашний спа-ритуал"',
    price: 4990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1620733723572-11c53f73a416?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Наборы',
    origin: 'Коллекция',
    isBestseller: true,
  },
  {
    id: 9,
    name: 'Эссенция для белья "Альпийская свежесть"',
    price: 2190,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1595344386359-3524439b8497?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Эссенции',
    origin: 'Италия',
  },
  {
    id: 10,
    name: 'Натуральное мыло "Миндаль и мед"',
    price: 890,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1614806687007-2215a9db3b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Мыло',
    origin: 'Франция',
  },
  {
    id: 11,
    name: 'Диффузор "Апельсиновая роща"',
    price: 2190,
    oldPrice: 2490,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1602928309809-186c5812428a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Диффузоры',
    origin: 'Испания',
  },
  {
    id: 12,
    name: 'Набор "Итальянские каникулы"',
    price: 5490,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1563804447127-fbaaf2962d53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Наборы',
    origin: 'Коллекция',
    isNew: true,
  },
];

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
        <div className="mb-1 flex justify-between">
          <Link to={`/products/${product.id}`} className="text-xs text-gray-500 hover:text-primary transition-colors">
            {product.category}
          </Link>
          <span className="text-xs text-primary">{product.origin}</span>
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

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 6000]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedOrigin, setSelectedOrigin] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  const handleOriginChange = (origin: string) => {
    if (selectedOrigin.includes(origin)) {
      setSelectedOrigin(selectedOrigin.filter(o => o !== origin));
    } else {
      setSelectedOrigin([...selectedOrigin, origin]);
    }
  };
  
  const filteredProducts = products.filter(product => {
    // Search filter
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory && 
        !product.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
      return false;
    }
    
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    // Origin filter
    if (selectedOrigin.length > 0 && !selectedOrigin.includes(product.origin)) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      default:
        return b.isBestseller ? 1 : a.isBestseller ? -1 : 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col mb-8">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Наши товары</h1>
            <p className="text-gray-600 max-w-3xl">
              Откройте для себя коллекцию изысканных европейских ароматов, созданных из лучших ингредиентов 
              и доставленных прямо из Италии, Франции и Испании.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile filter button */}
            <div className="md:hidden flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Фильтры
                </Button>
                {selectedCategory && (
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    {selectedCategory}
                    <button 
                      className="ml-2" 
                      onClick={() => setSelectedCategory(null)}
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center w-full md:w-auto">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Сортировать" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Популярные</SelectItem>
                    <SelectItem value="price-asc">Цена (по возрастанию)</SelectItem>
                    <SelectItem value="price-desc">Цена (по убыванию)</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="newest">Новинки</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Sidebar with filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-64 flex-shrink-0`}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="font-playfair font-medium mb-4">Поиск</h3>
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Поиск товаров..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-playfair font-medium mb-4">Категории</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Checkbox 
                        id="category-all" 
                        checked={selectedCategory === null}
                        onCheckedChange={() => setSelectedCategory(null)}
                      />
                      <label htmlFor="category-all" className="ml-2 text-sm cursor-pointer">
                        Все категории
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="category-essences" 
                        checked={selectedCategory === 'essences'}
                        onCheckedChange={() => setSelectedCategory(selectedCategory === 'essences' ? null : 'essences')}
                      />
                      <label htmlFor="category-essences" className="ml-2 text-sm cursor-pointer">
                        Эссенции для белья
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="category-diffusers" 
                        checked={selectedCategory === 'diffusers'}
                        onCheckedChange={() => setSelectedCategory(selectedCategory === 'diffusers' ? null : 'diffusers')}
                      />
                      <label htmlFor="category-diffusers" className="ml-2 text-sm cursor-pointer">
                        Диффузоры
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="category-soap" 
                        checked={selectedCategory === 'soap'}
                        onCheckedChange={() => setSelectedCategory(selectedCategory === 'soap' ? null : 'soap')}
                      />
                      <label htmlFor="category-soap" className="ml-2 text-sm cursor-pointer">
                        Натуральное мыло
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="category-sets" 
                        checked={selectedCategory === 'sets'}
                        onCheckedChange={() => setSelectedCategory(selectedCategory === 'sets' ? null : 'sets')}
                      />
                      <label htmlFor="category-sets" className="ml-2 text-sm cursor-pointer">
                        Подарочные наборы
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-playfair font-medium mb-4">Цена</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 6000]}
                      max={6000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-6"
                    />
                    <div className="flex justify-between">
                      <span className="text-sm">{priceRange[0]} ₽</span>
                      <span className="text-sm">{priceRange[1]} ₽</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-playfair font-medium mb-4">Происхождение</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Checkbox 
                        id="origin-italy" 
                        checked={selectedOrigin.includes('Италия')}
                        onCheckedChange={() => handleOriginChange('Италия')}
                      />
                      <label htmlFor="origin-italy" className="ml-2 text-sm cursor-pointer">
                        Италия
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="origin-france" 
                        checked={selectedOrigin.includes('Франция')}
                        onCheckedChange={() => handleOriginChange('Франция')}
                      />
                      <label htmlFor="origin-france" className="ml-2 text-sm cursor-pointer">
                        Франция
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="origin-spain" 
                        checked={selectedOrigin.includes('Испания')}
                        onCheckedChange={() => handleOriginChange('Испания')}
                      />
                      <label htmlFor="origin-spain" className="ml-2 text-sm cursor-pointer">
                        Испания
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="origin-collection" 
                        checked={selectedOrigin.includes('Коллекция')}
                        onCheckedChange={() => handleOriginChange('Коллекция')}
                      />
                      <label htmlFor="origin-collection" className="ml-2 text-sm cursor-pointer">
                        Коллекция
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                    setPriceRange([0, 6000]);
                    setSelectedOrigin([]);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
            
            {/* Product grid */}
            <div className="flex-1">
              {/* Desktop sort selector */}
              <div className="hidden md:flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  {selectedCategory && (
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                      {selectedCategory}
                      <button 
                        className="ml-2" 
                        onClick={() => setSelectedCategory(null)}
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {selectedOrigin.map(origin => (
                    <Badge 
                      key={origin}
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                    >
                      {origin}
                      <button 
                        className="ml-2" 
                        onClick={() => handleOriginChange(origin)}
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
                
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Сортировать" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Популярные</SelectItem>
                    <SelectItem value="price-asc">Цена (по возрастанию)</SelectItem>
                    <SelectItem value="price-desc">Цена (по убыванию)</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="newest">Новинки</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {sortedProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 mb-4">Показано {sortedProducts.length} из {products.length} товаров</p>
                    <Button variant="outline">Загрузить ещё</Button>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <h3 className="text-lg font-playfair font-medium mb-2">Товары не найдены</h3>
                  <p className="text-gray-500 mb-6">Попробуйте изменить параметры фильтрации</p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory(null);
                      setPriceRange([0, 6000]);
                      setSelectedOrigin([]);
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
