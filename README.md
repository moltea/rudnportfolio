# Персональное Портфолио Разработчика

Современное веб-приложение визитной карточки, созданное на Next.js (App Router), TypeScript, SCSS и Ant Design, с использованием Three.js для 3D WOW-эффектов. 

## Технологии
- **Фреймворк**: Next.js 15
- **Язык**: TypeScript
- **Стилизация**: SCSS, Ant Design (с кастомной темной темой)
- **3D Графика**: Three.js, React Three Fiber, React Three Drei
- **Анимации**: Framer Motion
- **Деплой**: GitHub Pages (Static Export / SSG)

## Развертывание
Автоматизировано через GitHub Actions:
При push в ветку `main` проект автоматически собирается в статическое приложение (папка `out`) и публикуется на GitHub Pages благодаря настроенному workflow.

В файле `next.config.ts` включен режим `output: 'export'` и отключена оптимизация изображений `unoptimized: true`, необходимая для работы SSG.

## Локальный запуск
1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер разработки:
```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000)
