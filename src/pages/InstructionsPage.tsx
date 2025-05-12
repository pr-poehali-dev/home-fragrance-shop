
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const InstructionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Инструкции по использованию</h1>
            <p className="text-gray-600">
              Научитесь максимально эффективно использовать наши премиальные ароматы для дома и белья с помощью простых инструкций
            </p>
          </div>
          
          <Tabs defaultValue="essences" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-secondary/50">
                <TabsTrigger value="essences">Эссенции для белья</TabsTrigger>
                <TabsTrigger value="diffusers">Диффузоры</TabsTrigger>
                <TabsTrigger value="soap">Натуральное мыло</TabsTrigger>
                <TabsTrigger value="care">Уход и хранение</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Эссенции для белья */}
            <TabsContent value="essences" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-6">Итальянские эссенции для белья</h2>
                  <p className="text-gray-600 mb-6">
                    Наши концентрированные парфюмированные эссенции для белья привезены из Италии. Они созданы из высококачественных 
                    ингредиентов и позволяют придать вашему белью изысканный аромат, который сохраняется долгое время.
                  </p>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Способы применения</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Добавление при стирке</AccordionTrigger>
                            <AccordionContent>
                              <ol className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">1</span>
                                  </span>
                                  <span>Добавьте 1-2 колпачка (5-10 мл) эссенции в отделение для кондиционера в стиральной машине.</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">2</span>
                                  </span>
                                  <span>Запустите обычный цикл стирки. Эссенция добавится во время последнего полоскания.</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">3</span>
                                  </span>
                                  <span>Для более интенсивного аромата можно увеличить дозировку до 15 мл, но не превышайте рекомендованное количество.</span>
                                </li>
                              </ol>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="item-2">
                            <AccordionTrigger>Ручное полоскание</AccordionTrigger>
                            <AccordionContent>
                              <ol className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">1</span>
                                  </span>
                                  <span>Наполните таз или ванну чистой водой (примерно 5 литров).</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">2</span>
                                  </span>
                                  <span>Добавьте 1-2 колпачка (5-10 мл) эссенции и перемешайте.</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">3</span>
                                  </span>
                                  <span>Поместите чистое влажное белье в раствор, слегка перемешайте и оставьте на 5-10 минут.</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">4</span>
                                  </span>
                                  <span>Отожмите белье (не выполаскивайте) и развесьте для сушки.</span>
                                </li>
                              </ol>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="item-3">
                            <AccordionTrigger>Использование в шкафу</AccordionTrigger>
                            <AccordionContent>
                              <ol className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">1</span>
                                  </span>
                                  <span>Смочите небольшой кусочек ткани из натуральных материалов в эссенции (5-10 капель).</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">2</span>
                                  </span>
                                  <span>Поместите ткань в шкаф с одеждой или бельем.</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-xs font-medium text-primary">3</span>
                                  </span>
                                  <span>Обновляйте каждые 2-3 недели для поддержания аромата.</span>
                                </li>
                              </ol>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Рекомендации</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Храните эссенцию в прохладном, темном месте, вдали от прямых солнечных лучей.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Концентрат можно разбавлять водой для более легкого аромата.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Особенно рекомендуется для пост. белья, полотенец и одежды из натуральных тканей.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">Не наносите концентрированную эссенцию непосредственно на ткань без разбавления.</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="sticky top-28">
                    <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                        alt="Эссенции для белья"
                        className="w-full h-auto"
                      />
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <h3 className="text-xl font-playfair font-medium mb-4">Важная информация</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <span className="text-xs font-bold text-primary">!</span>
                          </span>
                          <span className="text-gray-600 text-sm">Эссенции очень концентрированные, достаточно небольшого количества для достижения эффекта.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <span className="text-xs font-bold text-primary">!</span>
                          </span>
                          <span className="text-gray-600 text-sm">Избегайте контакта с глазами. В случае попадания, промойте большим количеством воды.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <span className="text-xs font-bold text-primary">!</span>
                          </span>
                          <span className="text-gray-600 text-sm">Беречь от детей. Хранить в недоступном месте.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <span className="text-xs font-bold text-primary">!</span>
                          </span>
                          <span className="text-gray-600 text-sm">Срок годности: 24 месяца с даты производства при правильном хранении.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Диффузоры */}
            <TabsContent value="diffusers" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-6">Испанские ароматические диффузоры</h2>
                  <p className="text-gray-600 mb-6">
                    Наши стильные диффузоры привезены из Испании и созданы для наполнения вашего дома изысканными ароматами.
                    Они не только обеспечивают стойкий аромат, но и служат элегантным элементом декора.
                  </p>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Инструкция по использованию</h3>
                        <ol className="space-y-4 text-gray-600">
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">1</span>
                            </span>
                            <span>Аккуратно откройте флакон диффузора и вставьте деревянные палочки, включенные в комплект.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">2</span>
                            </span>
                            <span>Для более интенсивного аромата используйте все палочки. Для менее интенсивного - уменьшите их количество.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">3</span>
                            </span>
                            <span>Палочки будут впитывать аромат и распространять его по комнате.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">4</span>
                            </span>
                            <span>Для усиления аромата переверните палочки 1-2 раза в неделю, чтобы смоченный ароматом конец оказался сверху.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">5</span>
                            </span>
                            <span>Размещайте диффузор в местах с умеренной циркуляцией воздуха для оптимального распространения аромата.</span>
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Рекомендации по размещению</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="room-1">
                            <AccordionTrigger>Гостиная</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600 mb-2">
                                Идеально для центральных зон, таких как журнальные столики или полки. 
                                Рекомендуемые ароматы: "Средиземноморский бриз", "Гранатовое дерево".
                              </p>
                              <p className="text-gray-600">
                                Избегайте размещения рядом с телевизором или другой электроникой из-за возможного попадания масла.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="room-2">
                            <AccordionTrigger>Спальня</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600 mb-2">
                                Размещайте на прикроватных тумбочках или комоде. 
                                Рекомендуемые ароматы: "Лавандовый сон", "Ванильный шелк".
                              </p>
                              <p className="text-gray-600">
                                Для деликатного аромата используйте меньшее количество палочек и размещайте 
                                диффузор дальше от кровати.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="room-3">
                            <AccordionTrigger>Ванная комната</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600 mb-2">
                                Разместите на полке или подоконнике, вдали от воды.
                                Рекомендуемые ароматы: "Морской бриз", "Цитрусовая свежесть".
                              </p>
                              <p className="text-gray-600">
                                Влажность ванной комнаты может усилить аромат, используйте меньшее количество палочек.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="room-4">
                            <AccordionTrigger>Прихожая</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600 mb-2">
                                Идеально для создания первого впечатления. Разместите на консоли или полке.
                                Рекомендуемые ароматы: "Цветущий сад", "Итальянские травы".
                              </p>
                              <p className="text-gray-600">
                                В прихожей с хорошей циркуляцией воздуха аромат может распространяться 
                                интенсивнее, регулируйте количество палочек.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="sticky top-28">
                    <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                        alt="Ароматические диффузоры"
                        className="w-full h-auto"
                      />
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <h3 className="text-xl font-playfair font-medium mb-4">Уход за диффузором</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Размещайте на устойчивой поверхности, вдали от края мебели.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Держите вдали от прямых солнечных лучей и источников тепла.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Избегайте размещения рядом с пламенем свечей и открытым огнем.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Если диффузорное масло попало на мебель, немедленно протрите поверхность мягкой тканью.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Средний срок службы диффузора - 2-3 месяца, в зависимости от условий.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Когда аромат начнет ослабевать, можно приобрести дополнительную заправку для диффузора.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Натуральное мыло */}
            <TabsContent value="soap" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-6">Французское натуральное мыло</h2>
                  <p className="text-gray-600 mb-6">
                    Наше натуральное мыло ручной работы привезено из Франции и изготовлено по традиционным рецептам с использованием 
                    органических ингредиентов. Каждый кусочек уникален и создан с заботой о вашей коже.
                  </p>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Правильное использование</h3>
                        <ol className="space-y-4 text-gray-600">
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">1</span>
                            </span>
                            <span>Намочите руки или тело теплой водой.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">2</span>
                            </span>
                            <span>Аккуратно помассируйте мыло между ладонями для образования пены.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">3</span>
                            </span>
                            <span>Нанесите пену на кожу круговыми движениями.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">4</span>
                            </span>
                            <span>Тщательно смойте теплой водой.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-medium text-primary">5</span>
                            </span>
                            <span>После использования разместите мыло на сухой мыльнице, чтобы оно могло просохнуть между применениями.</span>
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Особенности разных видов мыла</h3>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="soap-1">
                            <AccordionTrigger>Лавандовые поля Прованса</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600 mb-2">
                                Богатое маслом лаванды и оливковым маслом, это мыло идеально подходит для чувствительной кожи.
                                Лаванда обладает успокаивающими свойствами и способствует расслаблению.
                              </p>
                              <p className="text-gray-600">
                                Рекомендуется использовать перед сном для успокаивающего эффекта.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="soap-2">
                            <AccordionTrigger>Розовый сад</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600 mb-2">
                                Обогащено розовым маслом и маслом ши, которые увлажняют и тонизируют кожу.
                                Розовое масло известно своими антивозрастными свойствами.
                              </p>
                              <p className="text-gray-600">
                                Идеально подходит для сухой и зрелой кожи, особенно в холодное время года.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="soap-3">
                            <AccordionTrigger>Миндаль и мед</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600 mb-2">
                                Содержит измельченный миндаль, который обеспечивает мягкое отшелушивание, и мед, 
                                который увлажняет и питает кожу.
                              </p>
                              <p className="text-gray-600">
                                Отлично подходит для еженедельного глубокого очищения кожи. 
                                Не рекомендуется для слишком частого использования из-за отшелушивающего эффекта.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="soap-4">
                            <AccordionTrigger>Морские водоросли</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600 mb-2">
                                Обогащено экстрактами морских водорослей и морской солью, которые детоксифицируют 
                                и минерализируют кожу.
                              </p>
                              <p className="text-gray-600">
                                Особенно эффективно для жирной кожи и проблемных участков тела.
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="sticky top-28">
                    <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                        alt="Натуральное мыло"
                        className="w-full h-auto"
                      />
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <h3 className="text-xl font-playfair font-medium mb-4">Советы по хранению</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Храните мыло в сухом, хорошо проветриваемом месте между использованиями.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Используйте мыльницу с дренажными отверстиями, чтобы мыло могло высохнуть.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Натуральное мыло лучше сохраняет свои свойства и аромат, если оно не находится в постоянном контакте с водой.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Для продления срока службы можно разрезать большой кусок на несколько частей и использовать по мере необходимости.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Используйте в течение 12 месяцев после вскрытия упаковки для сохранения всех полезных свойств.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Уход и хранение */}
            <TabsContent value="care" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-6">Общие рекомендации по уходу и хранению</h2>
                  <p className="text-gray-600 mb-6">
                    Для сохранения всех полезных свойств и аромата наших продуктов важно правильно ухаживать за ними и 
                    хранить их в соответствующих условиях. Следуйте нашим рекомендациям, чтобы продукты служили вам как можно дольше.
                  </p>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Оптимальные условия хранения</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Температура:</span>
                              <span> Храните продукцию при температуре 15-25°C. Избегайте резких перепадов температуры.</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Освещение:</span>
                              <span> Держите продукты вдали от прямых солнечных лучей, которые могут ухудшить качество аромата и сократить срок службы.</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Влажность:</span>
                              <span> Оптимальная влажность для хранения — 40-60%. Избегайте хранения в очень влажных помещениях, таких как ванная комната.</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Упаковка:</span>
                              <span> По возможности храните продукты в оригинальной упаковке, которая защищает их от внешних воздействий.</span>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Сроки годности</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2 font-medium">Продукт</th>
                                <th className="text-left py-2 font-medium">Закрытая упаковка</th>
                                <th className="text-left py-2 font-medium">После открытия</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-600">
                              <tr className="border-b">
                                <td className="py-2">Эссенции для белья</td>
                                <td className="py-2">36 месяцев</td>
                                <td className="py-2">24 месяца</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">Диффузоры</td>
                                <td className="py-2">36 месяцев</td>
                                <td className="py-2">3-4 месяца</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">Натуральное мыло</td>
                                <td className="py-2">24 месяца</td>
                                <td className="py-2">12 месяцев</td>
                              </tr>
                              <tr>
                                <td className="py-2">Подарочные наборы</td>
                                <td className="py-2">24 месяца</td>
                                <td className="py-2">Зависит от состава</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-playfair font-medium mb-4">Меры предосторожности</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <span className="text-xs font-bold text-primary">!</span>
                            </span>
                            <span>Храните все ароматические продукты в недоступном для детей и домашних животных месте.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <span className="text-xs font-bold text-primary">!</span>
                            </span>
                            <span>Избегайте контакта концентрированных эссенций с кожей и глазами. В случае контакта промойте большим количеством воды.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <span className="text-xs font-bold text-primary">!</span>
                            </span>
                            <span>Не используйте эссенции для белья внутрь или на кожу без соответствующего разбавления согласно инструкции.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <span className="text-xs font-bold text-primary">!</span>
                            </span>
                            <span>При появлении аллергических реакций немедленно прекратите использование продукта и проконсультируйтесь с врачом.</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="sticky top-28">
                    <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                        alt="Уход за продукцией"
                        className="w-full h-auto"
                      />
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                      <h3 className="text-xl font-playfair font-medium mb-4">Устранение проблем</h3>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="problem-1">
                          <AccordionTrigger>Диффузор слабо распространяет аромат</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-gray-600">
                              <li>Переверните палочки, чтобы смоченная часть оказалась сверху.</li>
                              <li>Убедитесь, что диффузор размещен в месте с хорошей циркуляцией воздуха.</li>
                              <li>Проверьте, не слишком ли мало палочек в диффузоре, добавьте при необходимости.</li>
                              <li>При длительном использовании диффузора аромат может притупиться. Попробуйте временно переместить его в другую комнату, а затем вернуть.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="problem-2">
                          <AccordionTrigger>Эссенция для белья не оставляет запаха</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-gray-600">
                              <li>Убедитесь, что вы добавляете эссенцию в последнее полоскание, а не вместе с моющим средством.</li>
                              <li>Проверьте дозировку – возможно, вы используете слишком мало продукта.</li>
                              <li>Некоторые синтетические ткани хуже удерживают аромат. Наши эссенции наиболее эффективны для натуральных тканей.</li>
                              <li>Срок хранения мог истечь. Проверьте дату производства на упаковке.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="problem-3">
                          <AccordionTrigger>Натуральное мыло быстро расходуется</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-gray-600">
                              <li>Убедитесь, что мыло полностью высыхает между использованиями.</li>
                              <li>Используйте мыльницу с хорошим дренажем, чтобы мыло не находилось в воде.</li>
                              <li>Избегайте прямого контакта мыла с проточной водой – сначала взбейте пену в руках.</li>
                              <li>Натуральное мыло без консервантов может расходоваться быстрее, чем обычное промышленное мыло – это нормально и говорит о его натуральном составе.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="problem-4">
                          <AccordionTrigger>Аромат изменился со временем</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-gray-600">
                              <li>Некоторое изменение аромата со временем естественно для натуральных продуктов.</li>
                              <li>Проверьте условия хранения – воздействие света, тепла или влаги могло повлиять на аромат.</li>
                              <li>Если аромат стал значительно отличаться от первоначального или появился неприятный запах, продукт мог испортиться, и его следует заменить.</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstructionsPage;
