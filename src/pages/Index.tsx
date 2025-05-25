import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 font-opensans">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-montserrat font-bold text-purple-800">
            А.О. Коновалова
          </h1>
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              О себе
            </a>
            <a
              href="#subjects"
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Предметы
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6">
              Коновалова <span className="text-purple-600">Александра</span>{" "}
              Олеговна
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Учитель технологий
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Помогаю школьникам открыть мир творчества через технологии,
              рукоделие и практические навыки. Вместе создаём удивительные
              проекты и развиваем креативное мышление.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              Посмотреть портфолио
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      {/* О преподавателе */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gray-900 mb-12">
            О преподавателе
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-48 h-48 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-6xl text-white">👩‍🏫</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-gray-900 mb-4">
                Превращаю идеи в реальность
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Более 10 лет преподаю технологии в школе, помогая ученикам
                развивать практические навыки и творческое мышление.
                Специализируюсь на современных методах обучения, которые делают
                уроки интересными и полезными.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Образование: Государственный социально-гуманитарный
                  университет, Технологический факультет
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Опыт: 10+ лет в образовании
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Специализация: Технологии, рукоделие, дизайн
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Предметы и курсы */}
      <section id="subjects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold text-center text-gray-900 mb-12">
            Мои предметы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧵</span>
                </div>
                <CardTitle className="font-montserrat">
                  Технология девочек
                </CardTitle>
                <CardDescription>
                  Кулинария, рукоделие, домоводство
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Изучаем основы кулинарии, швейного дела, вязания и других
                  традиционных женских ремёсел.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Основы кулинарии</li>
                  <li>• Швейное дело</li>
                  <li>• Рукоделие и творчество</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <CardTitle className="font-montserrat">
                  Творческие проекты
                </CardTitle>
                <CardDescription>Дизайн, декор, инновации</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Современные техники дизайна, создание уникальных проектов и
                  развитие творческого мышления.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Дизайн-проекты</li>
                  <li>• Инновационные техники</li>
                  <li>• Командная работа</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <CardTitle className="font-montserrat">
                  Творческие проекты
                </CardTitle>
                <CardDescription>Дизайн, декор, инновации</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Современные техники дизайна, создание уникальных проектов и
                  развитие творческого мышления.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Дизайн-проекты</li>
                  <li>• Инновационные техники</li>
                  <li>• Командная работа</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-montserrat font-bold mb-12">
            Мои достижения
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">учеников</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-lg">наград</div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-8">
            Связаться со мной
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Готова ответить на ваши вопросы и обсудить образовательные проекты
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="font-montserrat text-purple-700">
                  Рабочие контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="flex items-center text-gray-600">
                  <span className="mr-3">📧</span> konovalova@school.ru
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="mr-3">📱</span> +7 (999) 123-45-67
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="mr-3">🏫</span> МБОУ СОШ №15, кабинет
                  технологий
                </p>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <CardTitle className="font-montserrat text-orange-600">
                  График работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Понедельник-Пятница: 8:00-15:00</p>
                <p className="text-gray-600">Консультации: Среда 15:00-16:00</p>
                <p className="text-gray-600">
                  Дополнительные занятия по договорённости
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Коновалова Александра Олеговна. Учитель технологий с душой
            ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
