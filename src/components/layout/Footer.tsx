import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-6">ETU</h2>
            <p className="text-gray-300 mb-6">
              Изысканные ароматы для вашего дома и белья. Мы импортируем только
              лучшие парфюмированные эссенции из Италии, натуральное мыло из
              Франции и элегантные диффузоры из Испании.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-medium mb-6">
              Навигация
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Товары
                </Link>
              </li>
              <li>
                <Link
                  to="/instructions"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Инструкции
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-medium mb-6">
              Категории
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products?category=essences"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Эссенции для белья
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=diffusers"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Диффузоры
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=soap"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Натуральное мыло
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=sets"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Подарочные наборы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-medium mb-6">
              Подписка на рассылку
            </h3>
            <p className="text-gray-300 mb-4">
              Подпишитесь, чтобы получать новости о новинках и специальных
              предложениях.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4 mr-2" />
                <span>Отправить</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AromaHaven. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/terms"
                className="text-gray-400 text-sm hover:text-primary transition-colors"
              >
                Условия использования
              </Link>
              <Link
                to="/privacy"
                className="text-gray-400 text-sm hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
