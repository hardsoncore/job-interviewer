import { Question } from 'src/app/models/question.model';

export const questions = [
  {
    id: 1,
    name: 'Как браузер парсит страницу?',
    answer: 'assets/content/rus/answers/1-Kak-brauzer-parsit-stranitsu.md',
    tags: [
      'markup',
      'CSS',
      'browser'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Критический путь рендеринга',
        isChecked: false
      },
      {
        name: 'Как браузер строит DOM, CSSOM и Render Tree',
        isChecked: false
      },
      {
        name: 'Как браузер выполняет JavaScript и как это влияет на рендеринг',
        isChecked: false
      },
      {
        name: 'Что такое Layout / Reflow',
        isChecked: false
      },
      {
        name: 'Что такое Repaint',
        isChecked: false
      },
      {
        name: 'Composite (композитинг)',
        isChecked: false
      },
      {
        name: 'Ивенты DOMContentLoaded и Load - в чем разница?',
        isChecked: false
      }
    ]
  },
  {
    id: 2,
    name: 'Как оптимизировать рендеринг страницы',
    answer: 'assets/content/rus/answers/2-Kak-optimizirovat-rendering-stranitsy.md',
    tags: [
      'markup',
      'CSS',
      'browser'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Critical Rendering Path (CRP)',
        isChecked: false
      },
      {
        name: 'Оптимизация DOM (HTML)',
        isChecked: false
      },
      {
        name: 'Оптимизация CSSOM (CSS)',
        isChecked: false
      },
      {
        name: 'Оптимизация JavaScript',
        isChecked: false
      },
      {
        name: 'Оптимизация медиа и шрифтов (Ресурсы)',
        isChecked: false
      },
      {
        name: 'Сетевые оптимизации и доставка контента',
        isChecked: false
      },
      {
        name: 'Профилирование и метрики',
        isChecked: false
      }
    ]
  },
  {
    id: 3,
    name: 'Что такое <DOCTYPE>. Зачем он нужен?',
    answer: 'assets/content/rus/answers/3-Chto-takoe-DOCTYPE-Zachem-on-nuzhen.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Что такое этот тег DOCTYPE',
        isChecked: false
      },
      {
        name: 'Зачем нужен DOCTYPE',
        isChecked: false
      },
      {
        name: 'Рассказать, про то что есть разные виды DOCTYPE',
        isChecked: false
      },
      {
        name: 'Можно ли вообще обойтись без DOCTYPE?',
        isChecked: false
      },
      {
        name: 'Сейчас практически всегда стоит юзать DOCTYPE HTML5',
        isChecked: false
      }
    ]
  },
  {
    id: 4,
    name: 'Теги HTML5. Семантика. Доступность.',
    answer: 'assets/content/rus/answers/4-Tegi-HTML5-Semantika-Dostupnost.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Что такое семантическая вёрстка и зачем она нужна',
        isChecked: false
      },
      {
        name: 'Основные семантические теги HTML',
        isChecked: false
      },
      {
        name: 'Как разметить страницу с точки зрения семантики',
        isChecked: false
      }
    ]
  },
  {
    id: 5,
    name: 'Какие есть способы подключить CSS на страницу?',
    answer: 'assets/content/rus/answers/5-Kakie-est-sposoby-podklyuchit-CSS-na-stranitsu.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Подключение CSS через внешний файл стилей тегом link',
        isChecked: false
      },
      {
        name: 'Добавление CSS с помощью тега style',
        isChecked: false
      },
      {
        name: 'Импорт CSS через команду @import',
        isChecked: false
      },
      {
        name: 'Inline-стили CSS',
        isChecked: false
      },
      {
        name: 'Стили CSS через JavaScript',
        isChecked: false
      }
    ]
  },
  {
    id: 6,
    name: 'Приоритет стилей. Каскадность.',
    answer: 'assets/content/rus/answers/6-Prioritet-stilej-Kaskadnost.md',
    tags: [
      'css'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Специфичность селекторов',
        isChecked: false
      },
      {
        name: 'Порядок объявления',
        isChecked: false
      },
      {
        name: '!important',
        isChecked: false
      },
      {
        name: 'Источник стилей',
        isChecked: false
      }
    ]
  },
  {
    id: 7,
    name: '“Вес” селекторов CSS',
    answer: 'assets/content/rus/answers/7-“Ves”-selektorov-CSS.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: '!important',
        isChecked: false
      },
      {
        name: 'Inline-стили',
        isChecked: false
      },
      {
        name: 'ID',
        isChecked: false
      },
      {
        name: 'Классы, Атрибуты, Псевдоклассы',
        isChecked: false
      },
      {
        name: 'Теги, Псевдоэлементы',
        isChecked: false
      },
      {
        name: 'Нулевой вес',
        isChecked: false
      }
    ]
  },
  {
    id: 8,
    name: 'Высокая специфичность селектора, есть ли у нее какие-то недостатки? + !important',
    answer: 'assets/content/rus/answers/8-Vysokaya-spetsifichnost-selektora-est-li-u-nee-kakie-to-nedostatki.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Недостатки высокой специфичности',
        isChecked: false
      },
      {
        name: '!important - когда стоит использовать и какие проблемы может вызвать',
        isChecked: false
      },
      {
        name: 'Best practices для управления специфичностью и приоритетом стилей',
        isChecked: false
      }
    ]
  },
  {
    id: 9,
    name: 'Селекторы: > + ~',
    answer: 'assets/content/rus/answers/9-Selektory-+-~.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: '>',
        isChecked: false
      },
      {
        name: '+',
        isChecked: false
      },
      {
        name: '~',
        isChecked: false
      }
    ]
  },
  {
    id: 10,
    name: 'Псевдоклассы элементов',
    answer: 'assets/content/rus/answers/10-Psevdoklassy-elementov.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Псевдоклассы состояния (Интерактив)',
        isChecked: false
      },
      {
        name: 'Структурные псевдоклассы',
        isChecked: false
      },
      {
        name: 'Продвинутые селекторы (Modern CSS)',
        isChecked: false
      }
    ]
  },
  {
    id: 11,
    name: 'Псевдоклассы форм',
    answer: 'assets/content/rus/answers/11-Psevdoklassy-form.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: ':disabled',
        isChecked: false
      },
      {
        name: ':required',
        isChecked: false
      },
      {
        name: ':invalid',
        isChecked: false
      },
      {
        name: ':valid',
        isChecked: false
      },
      {
        name: ':checked',
        isChecked: false
      },
      {
        name: ':placeholder-shown',
        isChecked: false
      },
    ]
  },
  {
    id: 12,
    name: 'Псевдоэлементы',
    answer: 'assets/content/rus/answers/12-Psevdoelementy.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Что такое псевдоэлементы?',
        isChecked: false
      },
      {
        name: 'Генерируемый контент (::before и ::after)',
        isChecked: false
      },
      {
        name: 'Текстовые (::first-letter и ::first-line)',
        isChecked: false
      },
      {
        name: 'Интерфейсные (::placeholder, ::selection, ::marker)',
        isChecked: false
      },
      {
        name: 'Продвинутые (::backdrop, ::file-selector-button)',
        isChecked: false
      }
    ]
  },
  {
    id: 13,
    name: 'Позиционирование элементов (absolute, fixed, relative etc.)',
    answer: 'assets/content/rus/answers/13-Pozitsionirovanie-elementov-absolute-fixed-relative.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'static',
        isChecked: false
      },
      {
        name: 'relative',
        isChecked: false
      },
      {
        name: 'absolute',
        isChecked: false
      },
      {
        name: 'fixed',
        isChecked: false
      },
      {
        name: 'sticky',
        isChecked: false
      }
    ]
  },
  {
    id: 14,
    name: 'Типы элементов (строчные, блочные и т.д.). Их различия',
    answer: 'assets/content/rus/answers/14-Tipy-elementov-strochnye-blochnye-i-td-Ih-razlichiya.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Блочные элементы',
        isChecked: false
      },
      {
        name: 'Строчные элементы',
        isChecked: false
      },
    ]
  },
  {
    id: 15,
    name: 'Центрирование (горизонтальное, вертикальное)',
    answer: 'assets/content/rus/answers/15-Tsentrirovanie-gorizontalnoe-vertikalnoe.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Горизонтальное центрирование',
        isChecked: false
      },
      {
        name: 'Вертикальное центрирование',
        isChecked: false
      }
    ]
  },
  {
    id: 16,
    name: 'Боксовая модель(Box Model) и box-sizing',
    answer: 'assets/content/rus/answers/16-Boksovaya-modelBox-Model-i-box-sizing.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Боксовая модель (Box Model)',
        isChecked: false
      },
      {
        name: 'box-sizing: content-box и box-sizing: border-box',
        isChecked: false
      }
    ]
  },
  {
    id: 17,
    name: 'Flexbox VS Grid',
    answer: 'assets/content/rus/answers/17-Flexbox-VS-Grid.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Что такое Flexbox',
        isChecked: false
      },
      {
        name: 'Что такое Grid',
        isChecked: false
      },
      {
        name: 'Основные отличия между Flexbox и Grid',
        isChecked: false
      },
    ]
  },
  {
    id: 18,
    name: 'CSS анимации',
    answer: 'assets/content/rus/answers/18-CSS-animatsii.md',
    tags: [
      'markup',
      'CSS',
      'animations'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Что такое CSS анимации?',
        isChecked: false
      },
      {
        name: 'Основные свойства для создания анимаций',
        isChecked: false
      },
      {
        name: 'Преимущества и недостатки CSS анимаций',
        isChecked: false
      }
    ]
  },
  {
    id: 19,
    name: 'Сброс стилей и \"нормализация\" (Reset VS Normalize). Их различия.',
    answer: 'assets/content/rus/answers/19-Sbros-stilej-i-normalizatsiya-Reset-VS-Normalize-Ih-razlichiya.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Сброс стилей (Reset) - что это?',
        isChecked: false
      },
      {
        name: 'Нормализация (Normalize) - что это?',
        isChecked: false
      },
      {
        name: 'Основные отличия между сбросом стилей и нормализацией',
        isChecked: false
      }
    ]
  },
  {
    id: 20,
    name: 'Единицы измерения (em, rem, %, px, vh, vw)',
    answer: 'assets/content/rus/answers/20-Edinitsy-izmereniya-em-rem-px-vh-vw.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false
      }
    ]
  },
  {
    id: 21,
    name: 'Порядок подключения ресурсов. Скрипты в head, скрипты в конце body. В чем разница.',
    answer: 'assets/content/rus/answers/21-Poryadok-podklyucheniya-resursov-Skripty-v-head-skripty-v-kontse-body-V-chem-raznitsa.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Порядок подключения ресурсов (скрипты в head, скрипты в конце body)',
        isChecked: false
      }
    ]
  },
  {
    id: 22,
    name: 'Способы подключить JS на страницу',
    answer: 'assets/content/rus/answers/22-Sposoby-podklyuchit-JS-na-stranitsu.md',
    tags: [
      'HTML',
      'markup',
      'JavaScript'
    ],
    category: 'Markup',
    structure: [
      {
        name: '3 способа подключения JS на страницу',
        isChecked: false
      }
    ]
  },
  {
    id: 23,
    name: 'Атрибуты defer и async у тега script',
    answer: 'assets/content/rus/answers/23-Atributy-defer-i-async-u-tega-script.md',
    tags: [
      'HTML',
      'markup',
      'JavaScript'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Async',
        isChecked: false
      },
      {
        name: 'Defer',
        isChecked: false
      },
      {
        name: 'Без атрибутов',
        isChecked: false
      }
    ]
  },
  {
    id: 24,
    name: 'SVG. Анимации svg',
    answer: 'assets/content/rus/answers/24-SVG-Animatsii-svg.md',
    tags: [
      'SVG',
      'markup',
      'animations'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Что такое SVG?',
        isChecked: false
      },
      {
        name: 'Ключевые особенности SVG',
        isChecked: false
      }
    ]
  },
  {
    id: 25,
    name: 'Canvas. Что это и зачем нужен?',
    answer: 'assets/content/rus/answers/25-Canvas-Chto-eto-i-zachem-nuzhen.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Canvas - что это?',
        isChecked: false
      },
      {
        name: 'Зачем нужен Canvas?',
        isChecked: false
      },
      {
        name: 'Основные сферы применения',
        isChecked: false
      },
      {
        name: 'Преимущества Canvas',
        isChecked: false
      }
    ]
  },
  {
    id: 26,
    name: 'Custom properties',
    answer: 'assets/content/rus/answers/26-Custom-properties.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Custom properties - что это?',
        isChecked: false
      },
      {
        name: 'Поддержка в браузерах и когда появились',
        isChecked: false
      },
      {
        name: 'Главные отличия от переменных SASS/LESS',
        isChecked: false
      }
    ]
  },
  {
    id: 27,
    name: 'Pixel-perfect',
    answer: 'assets/content/rus/answers/27-Pixel-perfect.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Pixel-perfect - что это?',
        isChecked: false
      }
    ]
  },
  {
    id: 28,
    name: 'Пре- и пост- процессоры CSS. Опыт работы с ними',
    answer: 'assets/content/rus/answers/28-Pre--i-post--protsessory-CSS-Opyt-raboty-s-nimi.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Пре- и пост- процессоры CSS - что это?',
        isChecked: false
      },
      {
        name: 'Актуальность в 2025-2026 годах',
        isChecked: false
      }
    ]
  },
  {
    id: 29,
    name: 'Методология БЭМ. Основные позиции, какие проблемы решает?',
    answer: 'assets/content/rus/answers/29-Metodologiya-BEM-Osnovnye-pozitsii-kakie-problemy-reshaet.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Методология БЭМ - что это?',
        isChecked: false
      },
      {
        name: 'Основные позиции методологии БЭМ',
        isChecked: false
      },
      {
        name: 'Какие проблемы решает БЭМ',
        isChecked: false
      }
    ]
  },
  {
    id: 30,
    name: 'HTML-шаблонизаторы/препроцессоры (handlebars, mustache, pug etc)',
    answer: 'assets/content/rus/answers/30-HTML-shablonizatorypreprotsessory-handlebars-mustache-pug-etc.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'HTML-шаблонизаторы/препроцессоры - что это?',
        isChecked: false
      },
      {
        name: 'Примеры популярных инструментов',
        isChecked: false
      },
      {
        name: 'В чем разница между шаблонизатором и препроцессором?',
        isChecked: false
      },
      {
        name: 'Актуальны ли они сегодня?',
        isChecked: false
      }
    ]
  },
  {
    id: 31,
    name: 'CORS. Что это такое и с чем его едят?',
    answer: 'assets/content/rus/answers/31-CORS-Chto-eto-takoe-i-s-chem-ego-edyat.md',
    tags: [
      'browser',
      'security'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'CORS - что это?',
        isChecked: false
      }
    ]
  },
  {
    id: 32,
    name: 'Типы данных в JavaScript. typeof и его особенности',
    answer: 'assets/content/rus/answers/32-Tipy-dannyh-zadachi-stroka-+-chislo.md',
    tags: [
      'JavaScript',
      'Data types'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '7 примитивных типов данных',
        isChecked: false
      },
      {
        name: '1 непримитивный тип данных',
        isChecked: false
      },
      {
        name: 'typeof и его особенности',
        isChecked: false
      }
    ]
  },
  {
    id: 33,
    name: 'Преобразование (приведение) типов в JavaScript',
    answer: 'assets/content/rus/answers/33-Preobrazovanie-privedenie-tipov-v-JavaScript.md',
    tags: [
      'JavaScript',
      'Data types'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Три основных типа преобразования',
        isChecked: false
      }
    ]
  },
  {
    id: 34,
    name: 'Let, const и var. Различия + Hoisting',
    answer: 'assets/content/rus/answers/34-Let-const-i-var-Razlichiya-+-Hoisting-.md',
    tags: [
      'JavaScript',
      'variables',
      'let', 'const', 'var',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Let, const и var - различия',
        isChecked: false
      },
      {
        name: 'Hoisting (всплытие или поднятие)',
        isChecked: false
      },
      {
        name: 'Как Hoisting работает с var, let и const',
        isChecked: false
      },
      {
        name: 'Temporal Dead Zone (TDZ) для let и const',
        isChecked: false
      }
    ]
  },
  {
    id: 35,
    name: 'Функции: function declaration, function expression',
    answer: 'assets/content/rus/answers/35-Funktsii-function-declaration-function-expression.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false
      }
    ]
  },
  {
    id: 36,
    name: 'Структуры данных (массив, объект, set, map)',
    answer: 'assets/content/rus/answers/36-Struktury-dannyh-massiv-obekt-set-map.md',
    tags: [
      'JavaScript',
      'Data types',
      'Structures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Массив (Array)',
        isChecked: false
      },
      {
        name: 'Объект (Object)',
        isChecked: false
      },
      {
        name: 'Map (Карта)',
        isChecked: false
      },
      {
        name: 'Set (Множество)',
        isChecked: false
      },
      {
        name: 'WeakMap и WeakSet',
        isChecked: false
      }
    ]
  },
  {
    id: 37,
    name: 'Основные методы массивов, которые вы используете',
    answer: 'assets/content/rus/answers/37-Osnovnye-metody-massivov-kotorye-vy-ispolzuete.md',
    tags: [
      'JavaScript',
      'Data types',
      'Structures',
      'Iterable',
      'Array'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'pop/push и shift/unshift, их различия',
        isChecked: false
      },
      {
        name: 'splice',
        isChecked: false
      },
      {
        name: 'slice',
        isChecked: false
      },
      {
        name: 'concat',
        isChecked: false
      },
      {
        name: 'forEach',
        isChecked: false
      },
      {
        name: 'indexOf/lastIndexOf и includes, их различия',
        isChecked: false
      },
      {
        name: 'find и findIndex, их различия',
        isChecked: false
      },
      {
        name: 'filter',
        isChecked: false
      },
      {
        name: 'map',
        isChecked: false
      },
      {
        name: 'sort(fn)',
        isChecked: false
      },
      {
        name: 'reverse',
        isChecked: false
      },
      {
        name: 'split и join',
        isChecked: false
      },
      {
        name: 'reduce',
        isChecked: false
      },
      {
        name: 'Array.isArray',
        isChecked: false
      },
      {
        name: '«thisArg»',
        isChecked: false
      }
    ]
  },
  {
    id: 38,
    name: 'Итераторы и генераторы',
    answer: 'assets/content/rus/answers/38-Iteratory-i-generatory.md',
    tags: [
      'JavaScript',
      'Iterable',
      'JS mechanics',
      'Generators'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Итераторы: Механика под капотом',
        isChecked: false
      },
      {
        name: 'Генераторы',
        isChecked: false
      },
      {
        name: 'Зачем это нужно на практике?',
        isChecked: false
      }
    ]
  },
  {
    id: 39,
    name: 'Область видимости (Scope, Lexical Environment)',
    answer: 'assets/content/rus/answers/39-Oblast-vidimosti-Scope-Lexical-Environment.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Lexical Environment',
        isChecked: false
      },
      {
        name: 'Виды областей видимости: глобальная, функциональная, блочная',
        isChecked: false
      },
      {
        name: 'Жизненный цикл переменной',
        isChecked: false
      }
    ]
  },
  {
    id: 40,
    name: 'Замыкание (Closure)',
    answer: 'assets/content/rus/answers/40-Zamykanie-Closure.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Замыкание - что это и для чего нужно',
        isChecked: false
      },
      {
        name: '[[Environment]]',
        isChecked: false
      },
      {
        name: 'Использование замыканий для создания приватных переменных',
        isChecked: false
      }
    ]
  },
  {
    id: 41,
    name: 'Сборщик мусора (Garbage Collector). Что это такое и для чего нужно?',
    answer: 'assets/content/rus/answers/41-Sborshchik-musora-Garbage-Collector-Chto-eto-takoe-i-dlya-chego-nuzhno.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Garbage Collector',
        isChecked: false
      }
    ]
  },
  {
    id: 42,
    name: 'Рекурсия. Что это такое и для чего нужно?',
    answer: 'assets/content/rus/answers/42-Rekursiya-Chto-eto-takoe-i-dlya-chego-nuzhno.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Рекурсия - что это и для чего нужно',
        isChecked: false
      },
      {
        name: 'Плюсы и минусы рекурсии',
        isChecked: false
      }
    ]
  },
  {
    id: 43,
    name: 'Ключевое слово this. Контекст',
    answer: 'assets/content/rus/answers/43-Klyuchevoe-slovo-this-Kontekst.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'context'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Глобальный контекст и обычный вызов функции',
        isChecked: false
      },
      {
        name: 'Вызов в качестве метода объекта',
        isChecked: false
      },
      {
        name: 'Стрелочные функции (Arrow Functions)',
        isChecked: false
      }
    ]
  },
  {
    id: 44,
    name: 'Привязка контекста (явная, неявная). Bind, call, apply и их различия',
    answer: 'assets/content/rus/answers/44-Privyazka-konteksta-yavnaya-neyavnaya-Bind-call-apply-i-ih-razlichiya.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'context'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Неявная привязка (Implicit Binding)',
        isChecked: false
      },
      {
        name: 'Явная привязка (Explicit Binding)',
        isChecked: false
      },
      {
        name: 'Методы call, apply и bind и их различия',
        isChecked: false
      }
    ]
  },
  {
    id: 45,
    name: 'Каррирование (Currying)',
    answer: 'assets/content/rus/answers/45-Karrirovanie-Currying.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions',
      'closures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Каррирование - что это и для чего нужно',
        isChecked: false
      },
      {
        name: 'Реализация каррирования',
        isChecked: false
      },
      {
        name: 'Зачем это нужно на практике?',
        isChecked: false
      }
    ]
  },
  {
    id: 46,
    name: 'Частичное применение (Partial Application)',
    answer: 'assets/content/rus/answers/46-Chastichnoe-primenenie-Partial-Application.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions',
      'closures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Частичное применение (основано на каррировании)',
        isChecked: false
      },
      {
        name: 'Реализация частичного применения',
        isChecked: false
      }
    ]
  },
  {
    id: 47,
    name: 'Псевдомассив arguments (почему он псевдомассив?)',
    answer: 'assets/content/rus/answers/47-Psevdomassiv-arguments-pochemu-on-psevdomassiv.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Псевдомассив arguments',
        isChecked: false
      },
      {
        name: 'Почему он псевдомассив?',
        isChecked: false
      },
      {
        name: 'Arguments VS Arrow Functions',
        isChecked: false
      },
      {
        name: 'Современные альтернативы',
        isChecked: false
      }
    ]
  },
  {
    id: 48,
    name: 'Директива "use strict"',
    answer: 'assets/content/rus/answers/48-Direktiva-use-strict.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Директива "use strict" - что это и для чего нужно',
        isChecked: false
      },
      {
        name: 'Главные изменения при включении строгого режима',
        isChecked: false
      },
      {
        name: 'Как включить строгий режим?',
        isChecked: false
      }
    ]
  },
  {
    id: 49,
    name: 'Преобразование объектов: toString и valueOf',
    answer: 'assets/content/rus/answers/49-Preobrazovanie-obektov-toString-i-valueOf.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Преобразование объектов: toString и valueOf',
        isChecked: false
      },
      {
        name: 'Как движок решает, какой метод вызвать первым',
        isChecked: false
      }
    ]
  },
  {
    id: 50,
    name: 'Цикл событий (Event loop), microtasks, event queue',
    answer: 'assets/content/rus/answers/50-Tsikl-sobytij-Event-loop-microtasks-event-queue.md',
    tags: [
      'JavaScript',
      'Browser mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Зачем нужен Event Loop',
        isChecked: false
      },
      {
        name: 'Основные сущности: Call Stack, Heap, Web APIs, Microtasks и Macrotasks',
        isChecked: false
      }
    ]
  },
  {
    id: 51,
    name: 'Наследование в JavaScript',
    answer: 'assets/content/rus/answers/51-Nasledovanie-v-JavaScript.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Наследование в JavaScript',
        isChecked: false
      },
      {
        name: 'Прототипное наследование и цепочка прототипов',
        isChecked: false
      }
    ]
  },
  {
    id: 52,
    name: 'Ссылка __proto__. Что это и с чем его едят?',
    answer: 'assets/content/rus/answers/52-Ssylka-__proto__-Chto-eto-i-s-chem-ego-edyat.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '__proto__ - что это?',
        isChecked: false
      }
    ]
  },
  {
    id: 53,
    name: 'Свойство F.prototype и создание объектов через new',
    answer: 'assets/content/rus/answers/53-Svojstvo-Fprototype-i-sozdanie-obektov-cherez-new.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'F.prototype',
        isChecked: false
      }
    ]
  },
  {
    id: 54,
    name: 'Promises. Зачем нужны? Какую проблему решали?',
    answer: 'assets/content/rus/answers/54-Promises-Zachem-nuzhny-Kakuyu-problemu-reshali.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Что такое Promise, в какой версии ES появился',
        isChecked: false
      },
      {
        name: 'Какую проблему решали промисы',
        isChecked: false
      },
      {
        name: 'Неизменность результата после завершения промиса',
        isChecked: false
      },
      {
        name: 'then, catch, finally',
        isChecked: false
      },
      {
        name: 'Эволюция промисов и async/await',
        isChecked: false
      }
    ]
  },
  {
    id: 55,
    name: 'Promise chaining. Можно ли вызывать promise.then().finally().then() или promise.catch().then()? Что получим?',
    answer: 'assets/content/rus/answers/55-Promise-chaining-Mozhno-li-vyzyvat-promisethenfinallythen-ili-promisecatchthen-Chto-poluchim.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Promise chaining',
        isChecked: false
      },
      {
        name: 'Можно продолжить цепочку вызовов после ошибки',
        isChecked: false
      },
      {
        name: 'Можно строить такие цепочки и с finally',
        isChecked: false
      }
    ]
  },
  {
    id: 56,
    name: 'Try - Catch. Что это и для чего нужно?',
    answer: 'assets/content/rus/answers/56-Try---Catch-Chto-eto-i-dlya-chego-nuzhno.md',
    tags: [
      'JavaScript'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Try - Catch - для чего нужно?',
        isChecked: false
      }
    ]
  },
  {
    id: 57,
    name: 'Что нового появилось в языке в ES6?',
    answer: 'assets/content/rus/answers/57-Chto-novogo-poyavilos-v-yazyke-v-ES6.md',
    tags: [
      'JavaScript',
      'ES6'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '11 основных нововведений в ES6',
        isChecked: false
      }
    ]
  },
  {
    id: 58,
    name: 'Что нового появилось в языке ПОСЛЕ ES6?',
    answer: 'assets/content/rus/answers/58-Chto-novogo-poyavilos-v-yazyke-POSLE-ES6.md',
    tags: [
      'JavaScript',
      'ES6',
      'ES7'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false
      }
    ]
  },
  {
    id: 59,
    name: 'Async await. Какую проблему решают?',
    answer: 'assets/content/rus/answers/59-Async-await-Kakuyu-problemu-reshayut.md',
    tags: [
      'JavaScript',
      'ES6',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Эволюция асинхронного JS в ES8',
        isChecked: false
      },
      {
        name: 'Зачем нужен async/await? Какую проблему решает?',
        isChecked: false
      },
      {
        name: 'try...catch...finally',
        isChecked: false
      },
      {
        name: 'node.js и поддержка async/await',
        isChecked: false
      }
    ]
  },
  {
    id: 60,
    name: 'Методы управления группой промисов',
    answer: 'assets/content/rus/answers/60-Metody-upravleniya-gruppoj-promisov.md',
    tags: [
      'JavaScript',
      'ES6',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Какую проблему решают',
        isChecked: false
      },
      {
        name: 'Promise.all() — «Все или ничего»',
        isChecked: false
      },
      {
        name: 'Promise.allSettled() — «Дождаться всех, несмотря ни на что»',
        isChecked: false
      },
      {
        name: 'Promise.race() — «Кто быстрее»',
        isChecked: false
      },
      {
        name: 'Promise.any() — «Хоть кто-нибудь успешный»',
        isChecked: false
      }
    ]
  },
  {
    id: 61,
    name: 'DOM - что это и зачем? DOM события. Всплытие, погружение. Делегирование',
    answer: 'assets/content/rus/answers/61-DOM---chto-eto-i-zachem-DOM-sobytiya-Vsplytie-pogruzhenie-Delegirovanie.md',
    tags: [
      'markup',
      'browser mechanics',
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false
      }
    ]
  },
  {
    id: 62,
    name: 'LocalStorage VS SessionStorage. Различия, принцип работы',
    answer: 'assets/content/rus/answers/62-LocalStorage-VS-SessionStorage-Razlichiya-printsip-raboty.md',
    tags: [
      'browser',
      'LocalStorage',
      'SessionStorage'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'LocalStorage',
        isChecked: false
      },
      {
        name: 'SessionStorage',
        isChecked: false
      },
    ]
  },
  {
    id: 63,
    name: 'Code style: linters, prettier etc.',
    answer: 'assets/content/rus/answers/63-Code-style-Linters-Prittier.md',
    tags: [
      'programming',
      'codestyle',
      'best-practice'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Зачем нужен code style и инструменты для его поддержания',
        isChecked: false
      },
      {
        name: 'Prettier',
        isChecked: false
      },
      {
        name: 'ESLint, TSLint и CodeLint',
        isChecked: false
      },
      {
        name: '.editorconfig',
        isChecked: false
      }
    ]
  },
  {
    id: 64,
    name: 'Мутабильность/иммутабильность (при работе с массивами etc)',
    answer: 'assets/content/rus/answers/64-Mutabilnostimmutabilnost-pri-rabot-s-massivami-etc.md',
    tags: [
      'programming',
      'immutable'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false
      }
    ]
  },
  {
    id: 65,
    name: 'Реактивное программирование. RxJs и основные методы',
    answer: 'assets/content/rus/answers/65-Reaktivnoe-programmirovanie-RxJs-i-osnovnye-metody.md',
    tags: [
      'TypeScript',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Реактивное программирование - что это?',
        isChecked: false
      },
      {
        name: 'RxJs - для чего нужен?',
        isChecked: false
      },
    ]
  },
  {
    id: 66,
    name: 'Что такое объект Observable в RxJs?',
    answer: 'assets/content/rus/answers/66-Chto-takoe-obekt-Observable-v-RxJs.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Observable - что это?',
        isChecked: false
      }
    ]
  },
  {
    id: 67,
    name: 'Что такое Subject? Какие бывают виды?',
    answer: 'assets/content/rus/answers/67-Chto-takoe-Subject-Kakie-byvayut-vidy.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Subject - что это?',
        isChecked: false
      }
    ]
  },
  {
    id: 68,
    name: 'Observables VS Subject - различия',
    answer: 'assets/content/rus/answers/68-Observables-VS-Subject---razlichiya.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Специфика Subject',
        isChecked: false
      },
      {
        name: 'Различия поведения и виды Subject',
        isChecked: false
      },
      {
        name: 'Специфика Observable',
        isChecked: false
      },
      {
        name: 'Observable - только на получение данных, Subject - ещё и для распространения',
        isChecked: false
      }
    ]
  },
  {
    id: 69,
    name: 'Zone.js. Что это и для чего нужно?',
    answer: 'assets/content/rus/answers/69-Zonejs-Chto-eto-i-dlya-chego-nuzhno.md',
    tags: [
      'Angular',
      'Change Detection',
      'Async'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Zone.js - что это?',
        isChecked: false
      },
      {
        name: 'Как работает Zone.js под капотом',
        isChecked: false
      }
    ]
  },
  {
    id: 70,
    name: 'Какие Utility Types (Утилиты типов) ты используешь на практике?',
    answer: 'assets/content/rus/answers/70-Kakie-Utility-Types-Utility-tipov-ty-ispolzuesh-na-praktike.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Partial&lt;Type> (Частичный)',
        isChecked: false
      },
      {
        name: 'Required&lt;Type> (Обязательный)',
        isChecked: false
      },
      {
        name: 'Pick&lt;Type, Keys> (Выбрать)',
        isChecked: false
      },
      {
        name: 'Omit&lt;Type, Keys> (Исключить)',
        isChecked: false
      },
      {
        name: 'Record&lt;Keys, Type> (Запись / Словарь)',
        isChecked: false
      }
    ]
  },
  {
    id: 71,
    name: 'Что такое Type Guards и Type Assertions?',
    answer: 'assets/content/rus/answers/71-Chto-takoe-Type-Guards-i-Type-Assertions.md',
    tags: [
      'TypeScript',
      'TS mechanics',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Type Guards - typeof, in, instanceof, Custom Type Guards',
        isChecked: false
      },
      {
        name: 'Type Assertions - as, <Type>, !, as const',
        isChecked: false
      }
    ]
  },
  {
    id: 72,
    name: 'Что такое Enums? Их применение',
    answer: 'assets/content/rus/answers/72-Chto-takoe-Enums-Ih-primenenie.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Enums (Перечисления)',
        isChecked: false
      },
      {
        name: 'Плюсы Enums',
        isChecked: false
      },
      {
        name: 'Numeric Enums (Числовые перечисления)',
        isChecked: false
      },
      {
        name: 'String Enums (Строковые перечисления)',
        isChecked: false
      },
      {
        name: 'Heterogeneous Enums (Гетерогенные перечисления)',
        isChecked: false
      },
      {
        name: 'Const Enums (Константные перечисления)',
        isChecked: false
      },
      {
        name: 'Под капотом: как JavaScript обрабатывает Enums',
        isChecked: false
      }
    ]
  },
  {
    id: 73,
    name: 'Class, Interface, Type. Различия и применение',
    answer: 'assets/content/rus/answers/73-Class-Interface-Type-Razlichiya-i-primenenie.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Class (Реализация)',
        isChecked: false
      },
      {
        name: 'Interface (Контракт)',
        isChecked: false
      },
      {
        name: 'Type (Псевдоним)',
        isChecked: false
      }
    ]
  },
  {
    id: 74,
    name: 'Что такое Generics? Их применение',
    answer: 'assets/content/rus/answers/74-Chto-takoe-Generics-Ih-primenenie.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Generics (Обобщения) - какую проблему решают?',
        isChecked: false
      },
      {
        name: 'Синтаксис Generics',
        isChecked: false
      },
      {
        name: 'Применение Generics в функциях, интерфейсах и классах',
        isChecked: false
      },
      {
        name: 'Ограничения (Constraints) в Generics',
        isChecked: false
      },
      {
        name: 'Утилиты типов на основе Generics',
        isChecked: false
      },
      {
        name: 'Множественные параметры типов',
        isChecked: false
      },
      {
        name: 'Как Generics работают под капотом в JavaScript',
        isChecked: false
      }
    ]
  },
  {
    id: 75,
    name: 'Разница между any, unknown и never',
    answer: 'assets/content/rus/answers/75-Raznitsa-mezhdu-any-unknown-i-never.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'any',
        isChecked: false
      },
      {
        name: 'unknown',
        isChecked: false
      },
      {
        name: 'never',
        isChecked: false
      }
    ]
  },
  {
    id: 76,
    name: 'Когда использовать .asObservable() в RxJs?',
    answer: 'assets/content/rus/answers/76-Kogda-ispolzovat-asObservable-v-RxJs.md',
    tags: [
      'TypeScript',
      'Angular',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'asObservable() - что это и для чего нужно?',
        isChecked: false
      },
      {
        name: 'Правильный способ использования asObservable()',
        isChecked: false
      },
      {
        name: 'Антипаттерн использования asObservable()',
        isChecked: false
      }
    ]
  },
  {
    id: 77,
    name: 'Основные принципы ООП',
    answer: 'assets/content/rus/answers/77-Osnovnye-printsipy-OOP.md',
    tags: [
      'programming',
      'ООП'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Abstraction (Абстракция)',
        isChecked: false
      },
      {
        name: 'Encapsulation (Инкапсуляция)',
        isChecked: false
      },
      {
        name: 'Inheritance (Наследование)',
        isChecked: false
      },
      {
        name: 'Polymorphism (Полиморфизм)',
        isChecked: false
      }
    ]
  },
  {
    id: 78,
    name: 'Паттерны проектирования',
    answer: 'assets/content/rus/answers/78-Patterny-proektirovaniya.md',
    tags: [
      'Patterns',
      'best-practice'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Паттерны проектирования - что это и для чего нужны?',
        isChecked: false
      }
    ]
  },
  {
    id: 79,
    name: 'Декораторы функций. Что это такое и для чего?',
    answer: 'assets/content/rus/answers/79-Dekoratory-funktsij-Chto-eto-takoe-i-dlya-chego.md',
    tags: [
      'JavaScript',
      'Patterns',
      'best-practice'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Декоратор',
        isChecked: false
      }
    ]
  },
  {
    id: 80,
    name: 'Принципы SOLID. Что это такое и зачем?',
    answer: 'assets/content/rus/answers/80-Printsipy-SOLID-Chto-eto-takoe-i-zachem.md',
    tags: [
      'programming',
      'best-practice',
      'ООП'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Принципы SOLID - это',
        isChecked: false
      },
      {
        name: 'Single Responsibility Principle (Принцип единой ответственности)',
        isChecked: false
      },
      {
        name: 'Open-Closed Principle (Принцип открытости/закрытости)',
        isChecked: false
      },
      {
        name: 'Liskov Substitution Principle (Принцип подстановки Барбары Лисков)',
        isChecked: false
      },
      {
        name: 'Interface Segregation Principle (Принцип разделения интерфейса)',
        isChecked: false
      },
      {
        name: 'Dependency Inversion Principle (Принцип инверсии зависимостей)',
        isChecked: false
      }
    ]
  },
  {
    id: 81,
    name: 'Протокол HTTP. Что это такое и с чем его едят?',
    answer: 'assets/content/rus/answers/81-Protokol-HTTP-Chto-eto-takoe-i-s-chem-ego-edyat.md',
    tags: [
      'protocol',
      'internet'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false
      }
    ]
  },
  {
    id: 82,
    name: 'Специальные селекторы Angular. Псевдоклассы :host, :host-context и псевдоэлемент ::ng-deep',
    answer: 'assets/content/rus/answers/82-Spetsialnye-selektory-Angular-Psevdoklassy-host-host-context-i-psevdoelement-ng-deep.md',
    tags: [
      'Angular',
      'html',
      'markup'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false
      }
    ]
  },
  {
    id: 83,
    name: 'SQL. Основные команды',
    answer: 'assets/content/rus/answers/83-SQL-Osnovnye-komandy.md',
    tags: [
      'СУБД (системы управления базами данных)',
      'databases',
      'SQL'
    ],
    category: 'Databases',
    structure: [
      {
        name: 'SELECT, FROM',
        isChecked: false
      },
      {
        name: 'SELECT DISTINCT',
        isChecked: false
      },
      {
        name: 'WHERE',
        isChecked: false
      },
      {
        name: 'GROUP BY',
        isChecked: false
      },
      {
        name: 'HAVING',
        isChecked: false
      },
      {
        name: 'ORDER BY',
        isChecked: false
      },
      {
        name: 'JOIN и его варианты',
        isChecked: false
      }
    ]
  },
  {
    id: 84,
    name: 'Формат JSON, метод toJSON',
    answer: 'assets/content/rus/answers/84-Format-JSON-metod-toJSON.md',
    tags: [
      'JSON',
      'Data Structures'
    ],
    category: 'Databases',
    structure: [
      {
        name: 'JSON - что это и для чего нужно',
        isChecked: false
      },
      {
        name: 'Метод toJSON',
        isChecked: false
      }
    ]
  },
  {
    id: 85,
    name: 'Аутентификация и авторизация. В чем разница?',
    answer: 'assets/content/rus/answers/85-Autentifikatsiya-i-avtorizatsiya-V-chem-raznitsa.md',
    tags: [
      'security',
      'authentication',
      'authorization'
    ],
    category: 'General',
    structure: [
      {
        name: 'Аутентификация',
        isChecked: false
      },
      {
        name: 'Авторизация',
        isChecked: false
      }
    ]
  },
  {
    id: 86,
    name: 'Основные методы сортировки. В чем их различия и какой лучше использовать в разных случаях?',
    answer: 'assets/content/rus/answers/86-Metody-sortirovki.md',
    tags: [
      'algorithm',
      'sorting',
      'Big O'
    ],
    category: 'Algorithms',
    structure: [
      {
        name: 'Пузырьковая сортировка (Bubble Sort)',
        isChecked: false
      },
      {
        name: 'Сортировка вставками (Insertion Sort)',
        isChecked: false
      },
      {
        name: 'Сортировка выбором (Selection Sort)',
        isChecked: false
      },
      {
        name: 'Сортировка слиянием (Merge Sort)',
        isChecked: false
      },
      {
        name: 'Быстрая сортировка (Quick Sort)',
        isChecked: false
      }
    ]
  },
  {
    id: 87,
    name: 'Метод оценки сложности алгоритма. O(1), O(n), O(log n) и т.д. Что это и зачем нужно',
    answer: 'assets/content/rus/answers/87-Metod-otsenki-slozhnosti-algoritma.md',
    tags: [
      'algorithm',
      'complexity',
      'Big O'
    ],
    category: 'Algorithms',
    structure: [
      {
        name: 'O(1)',
        isChecked: false
      },
      {
        name: 'O(n)',
        isChecked: false
      },
      {
        name: 'O(log n)',
        isChecked: false
      }
    ]
  },
  {
    id: 88,
    name: 'Деревья, графы, перевернутые деревья',
    answer: 'assets/content/rus/answers/88-Derevya-grafy-perevernutye-derevya.md',
    tags: [
      'data structures',
      'trees',
      'graphs'
    ],
    category: 'General',
    structure: [
      {
        name: 'Деревья',
        isChecked: false
      },
      {
        name: 'Перевернутые деревья',
        isChecked: false
      },
      {
        name: 'Бинарные деревья',
        isChecked: false
      },
      {
        name: 'Графы',
        isChecked: false
      }
    ]
  },
  {
    id: 89,
    name: 'Shadow DOM. Инкапсуляция стилей',
    answer: 'assets/content/rus/answers/89-Shadow-DOM-Inkapsulyatsiya-stilej.md',
    tags: [
      'web development',
      'shadow DOM'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Shadow DOM - что это такое',
        isChecked: false
      },
      {
        name: 'Проблема, которую решает Shadow DOM',
        isChecked: false
      },
      {
        name: 'Ключевые особенности Shadow DOM',
        isChecked: false
      }
    ]
  },
  {
    id: 90,
    name: 'Virtual DOM. Оптимизация на уровне фреймворка',
    answer: 'assets/content/rus/answers/90-Virtual-DOM-Optimizatsiya-na-urovne-frejmvorka.md',
    tags: [
      'web development',
      'virtual DOM',
      'Vue',
      'React'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Virtual DOM - что это такое',
        isChecked: false
      },
      {
        name: 'Проблема, которую решает Virtual DOM',
        isChecked: false
      },
      {
        name: 'Как работает Virtual DOM',
        isChecked: false
      }
    ]
  },
  {
    id: 91,
    name: 'RxJS и асинхронность',
    answer: 'assets/content/rus/answers/91-RxJS-i-asinhronnost.md',
    tags: [
      'rxjs',
      'asynchronous',
      'reactive programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Что такое RxJS',
        isChecked: false
      },
      {
        name: 'Для чего нужен RxJS?',
        isChecked: false
      },
      {
        name: 'Базовые сущности RxJS: Observable, Observer, Subscription, Subject',
        isChecked: false
      },
      {
        name: 'Популярные операторы',
        isChecked: false
      }
    ]
  },
  {
    id: 92,
    name: 'State management в Angular. NgRx',
    answer: 'assets/content/rus/answers/92-State-management-v-Angular-NgRx.md',
    tags: [
      'angular',
      'state management',
      'reactive programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'State management в Angular. NgRx, что это такое',
        isChecked: false
      },
      {
        name: 'Store, Actions, Reducers, Selectors',
        isChecked: false
      },
      {
        name: 'Effects (Побочные эффекты и асинхронность)',
        isChecked: false
      }
    ]
  },
  {
    id: 93,
    name: 'Signals in Angular. В чем фундаментальная разница между Signals и RxJS, и почему команда Angular решила внедрить этот паттерн?',
    answer: 'assets/content/rus/answers/93-Signals-in-Angular-V-chem-fundamentalnaya-raznitsa-mezhdu-Signals-i-RxJS-i-pochemu-komanda-Angular-reshila-vnedrit-etot-pattern.md',
    tags: [
      'Angular',
      'Signals',
      'Reactive Programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Signals в Angular, что это такое',
        isChecked: false
      },
      {
        name: 'Фундаментальная разница между Signals и RxJS',
        isChecked: false
      }
    ]
  },
  {
    id: 94,
    name: 'Как работают computed и effect?',
    answer: 'assets/content/rus/answers/94-Kak-rabotayut-computed-i-effect.md',
    tags: [
      'Angular',
      'Signals',
      'Reactive Programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Computed',
        isChecked: false
      },
      {
        name: 'Effect',
        isChecked: false
      },
      {
        name: 'Когда использовать Effect, а когда это антипаттерн',
        isChecked: false
      }
    ]
  },
  {
    id: 95,
    name: 'Signal-based API: input(), output() и model()',
    answer: 'assets/content/rus/answers/95-Signal-based-API-input-output-i-model.md',
    tags: [
      'Angular',
      'Signals',
      'Reactive Programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'input(), output() и model() - что это',
        isChecked: false
      }
    ]
  },
  {
    id: 96,
    name: 'Standalone Components: Почему отказались от NgModules?',
    answer: 'assets/content/rus/answers/96-Standalone-Components-Pochemu-otkazalis-ot-NgModules.md',
    tags: [
      'Angular',
      'Standalone',
      'Architecture'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Концепция Standalone',
        isChecked: false
      },
      {
        name: 'Почему отказались от NgModules',
        isChecked: false
      }
    ]
  },
  {
    id: 97,
    name: 'Функция inject() против Constructor DI',
    answer: 'assets/content/rus/answers/97-Funktsiya-inject-protiv-Constructor-DI.md',
    tags: [
      'Angular',
      'Standalone',
      'Architecture',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Функция inject()',
        isChecked: false
      },
      {
        name: 'Преимущества inject() по сравнению с Constructor DI',
        isChecked: false
      },
      {
        name: 'Где МОЖНО использовать inject()',
        isChecked: false
      },
      {
        name: 'Где НЕЛЬЗЯ использовать inject()',
        isChecked: false
      }
    ]
  },
  {
    id: 98,
    name: 'Новый Control Flow (@if, @for) против Structural Directives (*ngIf, *ngFor)',
    answer: 'assets/content/rus/answers/98-Novyj-Control-Flow-if-for-protiv-Structural-Directives-ngIf-ngFor.md',
    tags: [
      'Angular',
      'Syntax'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Новый Control Flow',
        isChecked: false
      },
      {
        name: 'Преимущества нового Control Flow',
        isChecked: false
      }
    ]
  },
  {
    id: 99,
    name: 'Стратегии Change Detection (Default vs OnPush vs Zoneless)',
    answer: 'assets/content/rus/answers/99-Strategii-Change-Detection-Default-vs-OnPush-vs-Zoneless.md',
    tags: [
      'Angular',
      'Change Detection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'ChangeDetectionStrategy.Default',
        isChecked: false
      },
      {
        name: 'ChangeDetectionStrategy.OnPush',
        isChecked: false
      },
      {
        name: 'Zoneless (Современный Angular / Signals)',
        isChecked: false
      }
    ]
  },
  {
    id: 100,
    name: 'Deferrable Views (@defer): Как работает этот механизм? Какие встроенные триггеры (on viewport, on interaction, on idle) существуют для ленивой загрузки кусков шаблона?',
    answer: 'assets/content/rus/answers/100-Deferrable-Views-defer-Kak-rabotaet-etot-mehanizm-Kakie-vstroennye-triggery-on-viewport-on-interaction-on-idle-sushchestvuyut-dlya-lenivoj-zagruzki-kuskov-shablona.md',
    tags: [
      'Angular',
      'Performance'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Deferrable Views',
        isChecked: false
      }
    ]
  },
  {
    id: 101,
    name: 'Functional Guards - что это и почему классовые Guards были объявлены deprecated?',
    answer: 'assets/content/rus/answers/101-Functional-Guards---chto-eto-i-pochemu-klassovye-Guards-byli-obyavleny-deprecated.md',
    tags: [
      'angular',
      'routing',
      'guards'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Functional Guards',
        isChecked: false
      }
    ]
  },
  {
    id: 102,
    name: 'Functional Interceptors: Как настроить перехватчики HTTP-запросов (Interceptors) в Standalone-приложении без использования модулей и HTTP_INTERCEPTORS?',
    answer: 'assets/content/rus/answers/102-Functional-Interceptors-Kak-nastroit-perehvatchiki-HTTP-zaprosov-Interceptors-v-Standalone-prilozhenii-bez-ispolzovaniya-modulej-i-HTTP_INTERCEPTORS.md',
    tags: [
      'angular',
      'routing',
      'interceptors'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Functional Interceptors',
        isChecked: false
      }
    ]
  },
  {
    id: 103,
    name: 'Lifecycle Angular (Жизненный цикл компонента). Современный подход',
    answer: 'assets/content/rus/answers/103-Lifecycle-Angular-Zhiznennyj-tsikl-komponenta-Sovremennyj-podhod.md',
    tags: [
      'Angular',
      'Lifecycle',
      'Hooks'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Lifecycle Hooks (Классические)',
        isChecked: false
      },
      {
        name: 'Современный подход',
        isChecked: false
      }
    ]
  },
  {
    id: 104,
    name: 'Object.defineProperty - что это и для чего нужно? (+ применение в Angular.js и Vue 2)',
    answer: 'assets/content/rus/answers/104-Object-defineProperty-chto-eto-i-dlya-chego-nuzhno.md',
    tags: [
      'JavaScript',
      'Angular.js',
      'Vue 2'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Object.defineProperty - что это и для чего нужно?',
        isChecked: false
      },
      {
        name: 'Общие дескрипторы свойств: configurable, enumerable',
        isChecked: false
      },
      {
        name: 'Дескрипторы данных: writable, value',
        isChecked: false
      },
      {
        name: 'Дескрипторы доступа: get, set',
        isChecked: false
      },
      {
        name: 'Применения в Vue и других фреймворках - (только Vue 2, в Vue 3 уже Proxy)',
        isChecked: false
      }
    ]
  },
  {
    id: 105,
    name: 'Суть реактивности в Angular.js, Angular 2+, Vue 2 и Vue 3. В чем фундаментальная разница между подходами к реактивности?',
    answer: 'assets/content/rus/answers/105-Sut-reaktivnosti-v-Angular-Vue.md',
    tags: [
      'Angular',
      'Vue',
      'Reactivity'
    ],
    category: '',
    structure: [
      {
        name: 'Реактивность в Vue 2',
        isChecked: false
      },
      {
        name: 'Реактивность в Vue 3',
        isChecked: false
      },
      {
        name: 'Реактивность в Angular.js',
        isChecked: false
      },
      {
        name: 'Реактивность в Angular 2+',
        isChecked: false
      }
    ]
  },
  {
    id: 106,
    name: 'Abstract Classes (Абстрактные классы) в TypeScript. Когда использовать абстрактные классы вместо интерфейсов?',
    answer: 'assets/content/rus/answers/106-Abstract-Classes-v-TypeScript.md',
    tags: [
      'TypeScript',
      'OOP',
      'Abstract Classes'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Abstract Classes (Абстрактные классы)',
        isChecked: false
      },
      {
        name: 'Когда использовать абстрактные классы вместо интерфейсов',
        isChecked: false
      },
      {
        name: 'Можно ли использовать абстрактные классы для реализации множественного наследования?',
        isChecked: false
      },
      {
        name: 'Можно ли комбинировать абстрактные классы и интерфейсы?',
        isChecked: false
      }
    ]
  },
  {
    id: 107,
    name: 'Protected vs Private vs Public в TypeScript. Когда использовать каждый из этих модификаторов доступа?',
    answer: 'assets/content/rus/answers/107-Protected-vs-Private-vs-Public-v-TypeScript.md',
    tags: [
      'TypeScript',
      'OOP',
      'Access Modifiers'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Protected (Модификатор доступа)',
        isChecked: false
      },
      {
        name: 'Private (Модификатор доступа)',
        isChecked: false
      },
      {
        name: 'Public (Модификатор доступа)',
        isChecked: false
      },
      {
        name: 'Когда использовать каждый из этих модификаторов доступа',
        isChecked: false
      }
    ]
  },
  {
    id: 108,
    name: 'Console API. Какие методы консоли ты используешь в своей работе и для чего?',
    answer: 'assets/content/rus/answers/108-Console-API.md',
    tags: [
      'JavaScript',
      'Debugging',
      'Console'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Console API (API консоли)',
        isChecked: false
      },
    ]
  },
  {
    id: 109,
    name: 'Чистая функция (Pure Function) и её преимущества. Примеры чистых и нечистых функций в JavaScript',
    answer: 'assets/content/rus/answers/109-Pure-Function.md',
    tags: [
      'JavaScript',
      'Functional Programming',
      'Pure Functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Pure Functions (Чистые функции) - что это и в чем их преимущества',
        isChecked: false
      },
    ]
  },
  {
    id: 110,
    name: 'Функция высшего порядка (Higher-Order Function) в JavaScript. Примеры и применение',
    answer: 'assets/content/rus/answers/110-Higher-Order-Function.md',
    tags: [
      'JavaScript',
      'Functional Programming',
      'Higher-Order Functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Higher-Order Functions (Функции высшего порядка) - что это и в чем их преимущества',
        isChecked: false
      },
    ]
  },
  {
    id: 111,
    name: 'В чем разница между Higher-order операторами в RxJS: mergeMap, switchMap, concatMap и exhaustMap?',
    answer: 'assets/content/rus/answers/111-RxJS-Higher-order-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'mergeMap',
        isChecked: false
      },
      {
        name: 'switchMap',
        isChecked: false
      },
      {
        name: 'concatMap',
        isChecked: false
      },
      {
        name: 'exhaustMap',
        isChecked: false
      }
    ]
  },
  {
    id: 112,
    name: 'В чем разница между комбинирующими операторами RxJS: combineLatest, forkJoin, withLatestFrom, concat, merge, zip и race?',
    answer: 'assets/content/rus/answers/112-RxJS-Combination-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'combineLatest',
        isChecked: false
      },
      {
        name: 'forkJoin',
        isChecked: false
      },
      {
        name: 'withLatestFrom',
        isChecked: false
      },
      {
        name: 'concat',
        isChecked: false
      },
      {
        name: 'merge',
        isChecked: false
      },
      {
        name: 'zip',
        isChecked: false
      },
      {
        name: 'race',
        isChecked: false
      }
    ]
  },
  {
    id: 113,
    name: 'В чем разница между операторами создания RxJS: of, from, fromEvent, interval и timer?',
    answer: 'assets/content/rus/answers/113-RxJS-Creation-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'of',
        isChecked: false
      },
      {
        name: 'from',
        isChecked: false
      },
      {
        name: 'fromEvent',
        isChecked: false
      },
      {
        name: 'interval',
        isChecked: false
      },
      {
        name: 'timer',
        isChecked: false
      }
    ]
  },
  {
    id: 114,
    name: 'В чем разница между операторами фильтрации RxJS: filter, take, takeUntil, skip и distinctUntilChanged?',
    answer: 'assets/content/rus/answers/114-RxJS-Filtering-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'filter',
        isChecked: false
      },
      {
        name: 'take',
        isChecked: false
      },
      {
        name: 'takeUntil',
        isChecked: false
      },
      {
        name: 'skip',
        isChecked: false
      },
      {
        name: 'distinctUntilChanged',
        isChecked: false
      }
    ]
  },
  {
    id: 115,
    name: 'В чем разница между операторами утилитами RxJS: tap, finalize, delay, timeout и retry?',
    answer: 'assets/content/rus/answers/115-RxJS-Utility-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'tap',
        isChecked: false

      },
      {
        name: 'finalize',
        isChecked: false
      },
      {
        name: 'delay',
        isChecked: false
      },
      {
        name: 'timeout',
        isChecked: false
      },
      {
        name: 'retry',
        isChecked: false
      }
    ]
  },
  {
    id: 116,
    name: 'В чем разница между операторами трансформации RxJS: map, mapTo, pluck и scan?',
    answer: 'assets/content/rus/answers/116-RxJS-Transformation-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'map',
        isChecked: false
      },
      {
        name: 'mapTo',
        isChecked: false
      },
      {
        name: 'pluck',
        isChecked: false
      },
      {
        name: 'scan',
        isChecked: false
      }
    ]
  },
  {
    id: 117,
    name: 'Element Injector (или NodeInjector) в Angular. Что это такое и для чего нужно? Приоритет токенов на одном элементе',
    answer: 'assets/content/rus/answers/117-Element-Injector-v-Angular-Chto-eto-takoe-i-dlya-chego-nuzhno.md',
    tags: [
      'Angular',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Element Injector (или NodeInjector) - что это такое',
        isChecked: false
      },
      {
        name: 'Как работает Element Injector в Angular',
        isChecked: false
      },
      {
        name: 'Зачем нужен Element Injector и какие проблемы он решает',
        isChecked: false
      }
    ]
  },
  {
    id: 118,
    name: 'Иерархия DI и паттерн Shadowing (Затенение провайдеров)',
    answer: 'assets/content/rus/answers/118-DI-Hierarchy-and-Shadowing-Pattern.md',
    tags: [
      'Angular',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Иерархия DI в Angular',
        isChecked: false
      },
      {
        name: 'Паттерн Shadowing (Затенение провайдеров)',
        isChecked: false
      }
    ]
  },
  {
    id: 119,
    name: 'Провайдеры в Angular. Типы провайдеров и их применение',
    answer: 'assets/content/rus/answers/119-Providers-in-Angular-Types-of-Providers-and-Their-Usage.md',
    tags: [
      'Angular',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Провайдеры в Angular - что это такое',
        isChecked: false
      },
      {
        name: 'Типы провайдеров в Angular (Class Provider, Factory Provider, Value Provider, Existing Provider)',
        isChecked: false
      },
      {
        name: 'Когда использовать каждый тип провайдера',
        isChecked: false
      }
    ]
  },
  {
    id: 120,
    name: 'Сервисы в Angular. Что это такое и для чего нужны? Жизненный цикл сервисов',
    answer: 'assets/content/rus/answers/120-Services-in-Angular-What-are-they-and-what-are-they-for.md',
    tags: [
      'Angular',
      'Services',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Сервисы в Angular - что это такое',
        isChecked: false
      },
      {
        name: 'Для чего нужны сервисы в Angular',
        isChecked: false
      },
      {
        name: 'Жизненный цикл сервисов в Angular',
        isChecked: false
      }
    ]
  },
  {
    id: 121,
    name: 'Паттерн Singleton (Одиночка) в Angular. Являются ли сервисы в Angular синглтонами по умолчанию?',
    answer: 'assets/content/rus/answers/121-Singleton-Pattern-in-Angular-Are-Angular-Services-Singletons-by-Default.md',
    tags: [
      'Angular',
      'Singleton',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Паттерн Singleton (Одиночка) - что это такое',
        isChecked: false
      },
      {
        name: 'Являются ли сервисы в Angular синглтонами по умолчанию?',
        isChecked: false
      }
    ]
  },
  {
    id: 122,
    name: 'Виды директив: Structural vs Attribute. В чем разница между структурными и атрибутными директивами в Angular? Приведи примеры.',
    answer: 'assets/content/rus/answers/122-Directives-in-Angular-Structural-vs-Attribute.md',
    tags: [
      'Angular',
      'Directives'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Структурные директивы в Angular',
        isChecked: false
      },
      {
        name: 'Атрибутные директивы в Angular',
        isChecked: false
      }
    ]
  },
  {
    id: 123,
    name: 'Pipes: Pure vs Impure. Что такое чистые и нечистые пайпы? Почему использование функций в шаблоне(например {{ getLabel(item) }}) — это плохая практика, и как пайпы помогают это решить?',
    answer: 'assets/content/rus/answers/123-Pipes-Pure-vs-Impure.md',
    tags: [
      'Angular',
      'Pipes'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Чистые пайпы в Angular',
        isChecked: false
      },
      {
        name: 'Нечистые пайпы в Angular',
        isChecked: false
      },
    ]
  },
  {
    id: 124,
    name: 'ViewChild / ContentChild. В чем разница между @ViewChild и @ContentChild? Когда какой декоратор применять?',
    answer: 'assets/content/rus/answers/124-ViewChild-ContentChild.md',
    tags: [
      'Angular',
      'ViewChild',
      'ContentChild'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'ViewChild в Angular',
        isChecked: false
      },
      {
        name: 'ContentChild в Angular',
        isChecked: false
      },
      {
        name: 'Когда использовать @ViewChild, а когда @ContentChild',
        isChecked: false
      }
    ]
  },
  {
    id: 125,
    name: 'Proxy и Reflect. В чем разница между ними? Как они работают и почему современные фреймворки (Vue 3, MobX) перешли на них?',
    answer: 'assets/content/rus/answers/125-Proxy-Reflect.md',
    tags: [
      'JavaScript',
      'Proxy',
      'Reflect'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Proxy в JavaScript',
        isChecked: false
      },
      {
        name: 'Reflect в JavaScript',
        isChecked: false
      },
      {
        name: 'Когда использовать Proxy, а когда Reflect',
        isChecked: false
      },
      {
        name: 'Использование в современных фреймворках',
        isChecked: false
      }
    ]
  },
  {
    id: 126,
    name: 'Утечки памяти (Memory Leaks). Какие бывают частые причины утечек памяти в JS и как их избежать?',
    answer: 'assets/content/rus/answers/126-Memory-Leaks.md',
    tags: [
      'JavaScript',
      'Memory Leaks'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Что такое утечки памяти в контексте веб-приложений и почему это важно',
        isChecked: false
      },
      {
        name: 'Частые причины утечек памяти в JavaScript',
        isChecked: false
      },
      {
        name: 'Как избежать утечек памяти в JavaScript',
        isChecked: false
      },
      {
        name: 'Инструменты для обнаружения и устранения утечек памяти',
        isChecked: false
      }
    ]
  },
  {
    id: 127,
    name: 'Web Workers / Service Workers. JS однопоточный, но как тогда выполнять тяжелые вычисления не блокируя UI?',
    answer: 'assets/content/rus/answers/127-Web-Workers-Service-Workers.md',
    tags: [
      'JavaScript',
      'Web Workers',
      'Service Workers'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Что такое Web Workers и Service Workers в контексте веб-приложений',
        isChecked: false
      },
      {
        name: 'Когда использовать Web Workers, а когда Service Workers',
        isChecked: false
      },
      {
        name: 'Примеры использования Web Workers и Service Workers',
        isChecked: false
      },
      {
        name: 'Инструменты для работы с Web Workers и Service Workers',
        isChecked: false
      }
    ]
  },
  {
    id: 128,
    name: 'В чем ключевые отличия Composition API от Options API, и какие фундаментальные проблемы он решает?',
    answer: 'assets/content/rus/answers/128-Composition-API-Options-API.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Composition API',
      'Options API'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое Composition API и Options API в Vue.js',
        isChecked: false
      },
      {
        name: 'Ключевые отличия Composition API от Options API',
        isChecked: false
      },
      {
        name: 'Какие фундаментальные проблемы решает Composition API',
        isChecked: false
      }
    ]
  },
  {
    id: 129,
    name: 'Что такое setup()? Синтаксический сахар <script setup>+ Макросы: defineProps и defineEmits',
    answer: 'assets/content/rus/answers/129-Script-Setup.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Script Setup'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое setup() и для чего он нужен в Vue.js',
        isChecked: false
      },
      {
        name: 'Что такое <script setup> в Vue.js',
        isChecked: false
      },
      {
        name: 'Ключевые отличия <script setup> от стандартной функции setup()',
        isChecked: false
      },
      {
        name: 'Какие преимущества дает использование <script setup>',
        isChecked: false
      }
    ]
  },
  {
    id: 130,
    name: 'Два брата реактивности: ref vs reactive',
    answer: 'assets/content/rus/answers/130-Ref-vs-Reactive.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое ref и reactive в Vue.js',
        isChecked: false
      },
      {
        name: 'Ключевые отличия ref от reactive',
        isChecked: false
      }
    ]
  },
  {
    id: 131,
    name: 'toValue vs toRaw. В чем разница между этими функциями и когда какую использовать?',
    answer: 'assets/content/rus/answers/131-ToValue-vs-ToRaw.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое toValue и toRaw в Vue.js',
        isChecked: false
      },
      {
        name: 'Ключевые отличия toValue от toRaw',
        isChecked: false
      }
    ]
  },
  {
    id: 132,
    name: 'Автоматическая слежка: watch vs watchEffect',
    answer: 'assets/content/rus/answers/132-Watch-vs-WatchEffect.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое watch и watchEffect в Vue.js',
        isChecked: false
      },
      {
        name: 'Ключевые отличия watch от watchEffect',
        isChecked: false
      }
    ]
  },
  {
    id: 133,
    name: 'Вычисляемые свойства: computed',
    answer: 'assets/content/rus/answers/133-Computed.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое computed в Vue.js',
        isChecked: false
      },
      {
        name: 'Когда использовать computed, а когда это антипаттерн',
        isChecked: false
      }
    ]
  },
  {
    id: 134,
    name: 'Избавление от "Prop Drilling": provide / inject',
    answer: 'assets/content/rus/answers/134-Provide-Inject.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое provide / inject в Vue.js',
        isChecked: false
      },
      {
        name: 'Когда использовать provide / inject, а когда это антипаттерн',
        isChecked: false
      }
    ]
  },
  {
    id: 135,
    name: 'Slots: Разница между обычными слотами, слотами с именами и динамическими слотами',
    answer: 'assets/content/rus/answers/135-Slots.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Slots'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое слоты в Vue.js',
        isChecked: false
      },
      {
        name: 'Разница между обычными слотами, слотами с именами и динамическими слотами',
        isChecked: false
      }
    ]
  },
  {
    id: 136,
    name: 'Teleport: Что такое Teleport в Vue.js и для чего он нужен? В чем преимущества использования Teleport?',
    answer: 'assets/content/rus/answers/136-Teleport.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Teleport'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое Teleport в Vue.js',
        isChecked: false
      },
      {
        name: 'Когда использовать Teleport, а когда это антипаттерн',
        isChecked: false
      }
    ]
  },
  {
    id: 137,
    name: 'Как изменилась система реактивности во Vue 3? В чем разница под капотом?',
    answer: 'assets/content/rus/answers/137-Reactivity.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Как работает реактивность в Vue 3',
        isChecked: false
      },
      {
        name: 'В чем разница под капотом между реактивностью в Vue 2 и Vue 3',
        isChecked: false
      },
      {
        name: 'За счет чего рендеринг во Vue 3 стал значительно быстрее? Оптимизации компилятора (Patch Flags, Static Hoisting)',
        isChecked: false
      }
    ]
  },
  {
    id: 138,
    name: 'Что такое Фрагменты (Fragments) во Vue 3, и как они влияют на структуру шаблонов?',
    answer: 'assets/content/rus/answers/138-Fragments.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Fragments'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое Фрагменты (Fragments) во Vue 3',
        isChecked: false
      },
      {
        name: 'Как Фрагменты влияют на структуру шаблонов',
        isChecked: false
      }
    ]
  },
  {
    id: 139,
    name: 'Custom Directives. Как изменилось создание кастомных директив?',
    answer: 'assets/content/rus/answers/139-CustomDirectives.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Custom Directives'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое кастомные директивы (Custom Directives) во Vue 3',
        isChecked: false
      },
      {
        name: 'Как кастомные директивы влияют на структуру шаблонов',
        isChecked: false
      }
    ]
  },
  {
    id: 140,
    name: 'Pinia. Почему экосистема перешла на Pinia? В чем преимущества по сравнению с Vuex и другими?',
    answer: 'assets/content/rus/answers/140-Pinia.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Pinia'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Почему экосистема перешла на Pinia',
        isChecked: false
      },
      {
        name: 'В чем преимущества Pinia по сравнению с Vuex и другими',
        isChecked: false
      }
    ]
  },
  {
    id: 141,
    name: 'Хуки жизненного цикла в Vue 3',
    answer: 'assets/content/rus/answers/141-LifecycleHooks.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Lifecycle Hooks'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Как изменились хуки жизненного цикла в Vue 3',
        isChecked: false
      },
      {
        name: 'Куда пропали created и beforeCreate',
        isChecked: false
      }
    ]
  },
  {
    id: 142,
    name: 'Что такое Composable? Для чего они нужны?',
    answer: 'assets/content/rus/answers/142-Composable.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Composable'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое Composable в Vue.js',
        isChecked: false
      },
      {
        name: 'Отличие Composable от обычных методов из сервиса',
        isChecked: false
      },
      {
        name: 'Какие преимущества дает использование Composable',
        isChecked: false
      },
      {
        name: 'Ключевые отличия Composable от mixins и HOCs',
        isChecked: false
      },
    ]
  },
  {
    id: 143,
    name: 'Встроенный компонент <Suspense>. Как работает и какие проблемы он решает?',
    answer: 'assets/content/rus/answers/143-Suspense.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Suspense'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Как работает встроенный компонент <Suspense>',
        isChecked: false
      },
      {
        name: 'Какие проблемы решает <Suspense>',
        isChecked: false
      }
    ]
  },
  {
    id: 144,
    name: 'Когда и зачем следует использовать shallowRef и shallowReactive вместо обычных?',
    answer: 'assets/content/rus/answers/144-ShallowRef.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'ShallowRef'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Когда и зачем следует использовать shallowRef и shallowReactive',
        isChecked: false
      },
      {
        name: 'В чем преимущества использования shallowRef и shallowReactive',
        isChecked: false
      }
    ]
  },
  {
    id: 145,
    name: 'Что такое defineModel и как он упрощает двустороннюю привязку данных?',
    answer: 'assets/content/rus/answers/145-DefineModel.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'DefineModel'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое defineModel и как он упрощает двустороннюю привязку данных',
        isChecked: false
      },
      {
        name: 'В чем преимущества использования defineModel',
        isChecked: false
      }
    ]
  },
  {
    id: 146,
    name: 'В чем разница между toRef и toRefs, и в каких случаях их применяют?',
    answer: 'assets/content/rus/answers/146-ToRefToRefs.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'ToRef',
      'ToRefs'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое toRef и toRefs',
        isChecked: false
      },
      {
        name: 'В чем преимущества использования toRef и toRefs',
        isChecked: false
      }
    ]
  },
  {
    id: 147,
    name: 'Что такое Vue Router? Какие важные функции предоставляем маршрутизатор? Какие хуки навигации есть у vue-router?',
    answer: 'assets/content/rus/answers/147-VueRouter.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Vue Router'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Что такое Vue Router',
        isChecked: false
      }
    ]
  },
  {
    id: 147,
    name: 'Как данные передаются между компонентами во Vue?',
    answer: 'assets/content/rus/answers/147-DataTransfer.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Data Transfer'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Как данные передаются между компонентами во Vue',
        isChecked: false
      }
    ]
  },
  {
    id: 148,
    name: 'HTTP/HTTPS: методы, заголовки, кеширование и безопасность',
    answer: 'assets/content/rus/answers/148-HTTPHTTPS.md',
    tags: [
      'Web Security',
      'HTTP',
      'HTTPS',
      'cross-site',
      'Same-Origin Policy'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'HTTP/HTTPS: методы, заголовки, кеширование и безопасность',
        isChecked: false
      }
    ]
  },
  {
    id: 149,
    name: 'Same-Origin Policy и CORS. Как браузеры обеспечивают безопасность при обмене данными между разными источниками?',
    answer: 'assets/content/rus/answers/149-SameOriginPolicyCORS.md',
    tags: [
      'Web Security',
      'CORS',
      'cross-site',
      'Same-Origin Policy'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Same-Origin Policy и CORS',
        isChecked: false
      }
    ]
  },
  {
    id: 150,
    name: 'Cookies. Что такое cookies и для чего они нужны?',
    answer: 'assets/content/rus/answers/150-CookiesSecurity.md',
    tags: [
      'Web Security',
      'cookies',
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Что такое cookies и для чего они нужны?',
        isChecked: false
      },
      {
        name: 'Какие атрибуты cookies помогают обеспечить безопасность (Secure, HttpOnly, SameSite)',
        isChecked: false
      }
    ]
  },
  {
    id: 151,
    name: 'Как браузеры обеспечивают безопасность cookies при обмене данными между разными источниками?',
    answer: 'assets/content/rus/answers/151-CookiesSecurity.md',
    tags: [
      'Web Security',
      'cookies',
      'cross-site',
      'Same-Origin Policy'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Как браузеры обеспечивают безопасность cookies при обмене данными между разными источниками?',
        isChecked: false
      },
      {
        name: 'Какие атрибуты cookies помогают обеспечить безопасность (Secure, HttpOnly, SameSite)',
        isChecked: false
      }
    ]
  },
  {
    id: 152,
    name: 'XSS (Cross-Site Scripting). Что такое XSS-атаки и как защититься от них?',
    answer: 'assets/content/rus/answers/152-XSS.md',
    tags: [
      'Web Security',
      'XSS',
      'cross-site'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Что такое XSS-атаки и как они работают',
        isChecked: false
      },
      {
        name: 'Как защититься от XSS-атак',
        isChecked: false
      }
    ]
  },
  {
    id: 153,
    name: 'CSRF (Cross-Site Request Forgery). Что такое CSRF-атаки и как защититься от них?',
    answer: 'assets/content/rus/answers/153-CSRF.md',
    tags: [
      'Web Security',
      'CSRF',
      'cross-site'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Что такое CSRF-атаки и как они работают',
        isChecked: false
      },
      {
        name: 'Как защититься от CSRF-атак',
        isChecked: false
      }
    ]
  },
  {
    id: 154,
    name: 'SQL Injection. Что такое SQL-инъекции и как защититься от них?',
    answer: 'assets/content/rus/answers/154-SQL-Injection.md',
    tags: [
      'Web Security',
      'SQL Injection'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Что такое SQL-инъекции и как защититься от них?',
        isChecked: false
      }
    ]
  },
  {
    id: 155,
    name: 'SSL/TLS. Что такое SSL/TLS и как они обеспечивают безопасность данных при передаче по сети?',
    answer: 'assets/content/rus/answers/155-SSLTLS.md',
    tags: [
      'Web Security',
      'SSL',
      'TLS'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Что такое SSL/TLS и как они обеспечивают безопасность данных при передаче по сети?',
        isChecked: false
      }
    ]
  },
  {
    id: 156,
    name: 'OAuth 2.0. Что такое OAuth 2.0 и как он обеспечивает безопасную авторизацию в веб-приложениях?',
    answer: 'assets/content/rus/answers/156-OAuth2.md',
    tags: [
      'Web Security',
      'OAuth 2.0',
      'authorization'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Что такое OAuth 2.0',
        isChecked: false
      }
    ]
  },
  {
    id: 157,
    name: 'JWT (JSON Web Tokens). Что такое JWT и как он используется для аутентификации и передачи информации между клиентом и сервером?',
    answer: 'assets/content/rus/answers/157-JWT.md',
    tags: [
      'Web Security',
      'JWT',
      'authentication'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Что такое JWT и как он используется для аутентификации и передачи информации между клиентом и сервером?',
        isChecked: false
      }
    ]
  },
  {
    id: 158,
    name: 'Почему работа с DOM считается очень ресурсоемкой?',
    answer: 'assets/content/rus/answers/158-Pochemu-rabota-s-DOM-schitaetsya-ochen-resursoemkoj.md',
    tags: [
      'DOM',
      'performance',
      'web development'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'DOM — это Web API, а не часть JavaScript',
        isChecked: false
      },
      {
        name: 'DOM — это сложная иерархическая структура данных',
        isChecked: false
      },
      {
        name: 'Reflow и Repaint',
        isChecked: false
      }
    ]
  },
  {
    id: 159,
    name: 'Ecmascript language types VS Ecmascript specification types',
    answer: 'assets/content/rus/answers/159-EcmascriptTypes.md',
    tags: [
      'JavaScript',
      'Ecmascript',
      'types'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Что такое типы языка Ecmascript?',
        isChecked: false
      },
      {
        name: 'Что такое типы спецификации Ecmascript?',
        isChecked: false
      },
      {
        name: 'В чем разница между типами языка и типами спецификации Ecmascript?',
        isChecked: false
      }
    ]
  }
] as Question[];
