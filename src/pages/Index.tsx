import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={32} className="text-orange-500" />
              <span className="text-2xl font-bold text-gray-800">
                ГрузоПеревозки
              </span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                Услуги
              </a>
              <a
                href="#advantages"
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                Преимущества
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                Цены
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="from-blue-50 to-orange-50 py-20 bg-[#b7ccd3]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-orange-100 text-orange-800 text-sm px-4 py-2">
                🚚 Надежные грузоперевозки
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Грузоперевозки по
              <span className="text-orange-500"> всей России</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Надежные грузоперевозки с опытными грузчиками по г.Мариуполь,
              Донецкой области и в ближайших районах! И теперь Вся РОССИЯ!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                Заказать перевозку +79497178328
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Грузоперевозки различного объема и сложности
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sofa" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-xl">Перевозка мебели</CardTitle>
                <CardDescription>
                  Бережная доставка мебели и бытовой техники
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Упаковка и защита мебели</li>
                  <li>• Подъем на любой этаж</li>
                  <li>• Сборка и разборка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trash2" size={32} className="text-blue-500" />
                </div>
                <CardTitle className="text-xl">Вывоз мусора</CardTitle>
                <CardDescription>Строительный и бытовой мусор</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Строительный мусор</li>
                  <li>• Бытовые отходы</li>
                  <li>• Утилизация техники</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-green-500" />
                </div>
                <CardTitle className="text-xl">Перевозка техники</CardTitle>
                <CardDescription>
                  Малогабаритный транспорт и техника
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Мотоциклы и скутеры</li>
                  <li>• Садовая техника</li>
                  <li>• Промышленное оборудование</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-600">
              Профессиональный подход и надежность
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Опытная команда
              </h3>
              <p className="text-gray-600">
                Профессиональные водители и опытные грузчики со стажем работы
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Надежный транспорт
              </h3>
              <p className="text-gray-600">
                Много различных грузовых машин для любых задач
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Индивидуальный подход
              </h3>
              <p className="text-gray-600">
                Учитываем особенности каждого заказа и пожелания клиента
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Цены на услуги
            </h2>
            <p className="text-xl text-gray-600">
              Конкурентные цены - самые низкие по ДНР
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-orange-500 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">
                  Базовый
                </CardTitle>
                <CardDescription>Для небольших грузов</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-orange-500">
                    от 500₽
                  </span>
                  <span className="text-gray-600">/час</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Грузоподъемность до 1.5 т</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>1 грузчик включен</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>По городу</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">
                  Популярный
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">
                  Стандарт
                </CardTitle>
                <CardDescription>Для средних грузов</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-orange-500">
                    от 800₽
                  </span>
                  <span className="text-gray-600">/час</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Грузоподъемность до 3 т</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>2 грузчика включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Межгород</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">
                  Премиум
                </CardTitle>
                <CardDescription>Для крупных грузов</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-blue-500">
                    от 1200₽
                  </span>
                  <span className="text-gray-600">/час</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Грузоподъемность до 5 т</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>3 грузчика включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>Вся Россия</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Свяжитесь с нами
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Телефон</p>
                    <p className="text-gray-600">+7 (949) 717-83-28</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Адрес</p>
                    <p className="text-gray-600">
                      г. Мариуполь, Донецкая область
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Режим работы</p>
                    <p className="text-gray-600">Круглосуточно, без выходных</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Оставьте заявку
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (XXX) XXX-XX-XX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Описание груза
                  </label>
                  <Textarea
                    placeholder="Опишите что нужно перевезти"
                    className="h-24"
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={32} className="text-orange-500" />
                <span className="text-2xl font-bold">ГрузоПеревозки</span>
              </div>
              <p className="text-gray-400">
                Надежные грузоперевозки по всей России с профессиональной
                командой
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Перевозка мебели</li>
                <li>Вывоз строймусора</li>
                <li>Перевозка техники</li>
                <li>Доставка дров</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (949) 717-83-28</li>
                <li>г. Мариуполь</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ГрузоПеревозки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
