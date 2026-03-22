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
    name: 'Сброс стилей и \"нормализация\" (Reset VS Normilize). Их различия.',
    answer: 'assets/content/rus/answers/19-Sbros-stilej-i-normalizatsiya-Reset-VS-Normilize-Ih-razlichiya.md',
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
    name: 'Let, const и var. Различия + Hoisting ',
    answer: 'assets/content/rus/answers/34-Let-const-i-var-Razlichiya-+-Hoisting-.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    structure: [
      {
        name: 'Let, const и var - различия',
        isChecked: false
      },
      {
        name: 'Hoisting (всплытие или поднятие)',
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
      'markup',
      'browser mechanics',
      'browser'
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
        name: 'Теги HTML',
        isChecked: false
      }
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
        name: 'Теги HTML',
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
    name: 'Безопасность приложений (AppSec)',
    answer: 'assets/content/rus/answers/86-Bezopasnost-prilozhenij-AppSec.md',
    tags: [
      'security',
      'AppSec',
      'OWASP'
    ],
    category: 'General',
    structure: [
      {
        name: 'XSS',
        isChecked: false
      },
      {
        name: 'CSRF',
        isChecked: false
      },
      {
        name: 'SQL Injection',
        isChecked: false
      }
    ]
  },
  {
    id: 87,
    name: 'Деревья, графы, перевернутые деревья',
    answer: 'assets/content/rus/answers/87-Derevya-grafy-perevernutye-derevya.md',
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
    id: 88,
    name: 'Почему работа с DOM считается очень ресурсоемкой?',
    answer: 'assets/content/rus/answers/88-Pochemu-rabota-s-DOM-schitaetsya-ochen-resursoemkoj.md',
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
        name: 'Основы RxJS',
        isChecked: false
      },
      {
        name: 'Ключевые строительные блоки RxJS',
        isChecked: false
      },
      {
        name: 'Операторы RxJS',
        isChecked: false
      },
      {
        name: 'Управление памятью в RxJS',
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
  }
];
