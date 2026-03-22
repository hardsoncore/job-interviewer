export const questions = [
  {
    id: 1,
    name: 'Як браузер парсить сторінку?',
    answer: 'assets/content/ukr/answers/1-Jak-brauzer-parsit-storinku.md',
    tags: [
      'markup',
      'CSS',
      'browser'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Критичний шлях рендерингу',
        isChecked: false
      },
      {
        name: 'Як браузер будує DOM, CSSOM та Render Tree',
        isChecked: false
      },
      {
        name: 'Як браузер виконує JavaScript і як це впливає на рендеринг',
        isChecked: false
      },
      {
        name: 'Що таке Layout / Reflow',
        isChecked: false
      },
      {
        name: 'Що таке Repaint',
        isChecked: false
      },
      {
        name: 'Composite (композитинг)',
        isChecked: false
      },
      {
        name: 'Події DOMContentLoaded та Load - у чому різниця?',
        isChecked: false
      }
    ]
  },
  {
    id: 2,
    name: 'Як оптимізувати рендеринг сторінки',
    answer: 'assets/content/ukr/answers/2-Jak-optimizuvaty-rendering-storinky.md',
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
        name: 'Оптимізація DOM (HTML)',
        isChecked: false
      },
      {
        name: 'Оптимізація CSSOM (CSS)',
        isChecked: false
      },
      {
        name: 'Оптимізація JavaScript',
        isChecked: false
      },
      {
        name: 'Оптимізація медіа та шрифтів (Ресурси)',
        isChecked: false
      },
      {
        name: 'Мережеві оптимізації та доставка контенту',
        isChecked: false
      },
      {
        name: 'Профілювання та метрики',
        isChecked: false
      }
    ]
  },
  {
    id: 3,
    name: 'Що таке <DOCTYPE>. Навіщо він потрібен?',
    answer: 'assets/content/ukr/answers/3-Sho-take-DOCTYPE-Navishcho-vin-potriben.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Що таке цей тег DOCTYPE',
        isChecked: false
      },
      {
        name: 'Навіщо потрібен DOCTYPE',
        isChecked: false
      },
      {
        name: 'Розповісти про те, що є різні види DOCTYPE',
        isChecked: false
      },
      {
        name: 'Чи можна взагалі обійтися без DOCTYPE?',
        isChecked: false
      },
      {
        name: 'Зараз практично завжди варто використовувати DOCTYPE HTML5',
        isChecked: false
      }
    ]
  },
  {
    id: 4,
    name: 'Теги HTML5. Семантика. Доступність.',
    answer: 'assets/content/ukr/answers/4-Tegi-HTML5-Semantika-Dostupnost.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Що таке семантична верстка і навіщо вона потрібна',
        isChecked: false
      },
      {
        name: 'Основні семантичні теги HTML',
        isChecked: false
      },
      {
        name: 'Як розмітити сторінку з точки зору семантики',
        isChecked: false
      }
    ]
  },
  {
    id: 5,
    name: 'Які є способи підключити CSS на сторінку?',
    answer: 'assets/content/ukr/answers/5-Jaki-ye-sposoby-pidklyuchyty-CSS-na-storinku.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Підключення CSS через зовнішній файл стилів тегом link',
        isChecked: false
      },
      {
        name: 'Додавання CSS за допомогою тега style',
        isChecked: false
      },
      {
        name: 'Імпорт CSS через команду @import',
        isChecked: false
      },
      {
        name: 'Inline-стилі CSS',
        isChecked: false
      },
      {
        name: 'Стилі CSS через JavaScript',
        isChecked: false
      }
    ]
  },
  {
    id: 6,
    name: 'Пріоритет стилів. Каскадність.',
    answer: 'assets/content/ukr/answers/6-Prioritet-stiliv-Kaskadnist.md',
    tags: [
      'css'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Специфічність селекторів',
        isChecked: false
      },
      {
        name: 'Порядок оголошення',
        isChecked: false
      },
      {
        name: '!important',
        isChecked: false
      },
      {
        name: 'Джерело стилів',
        isChecked: false
      }
    ]
  },
  {
    id: 7,
    name: '“Вага” селекторів CSS',
    answer: 'assets/content/ukr/answers/7-“Vaga”-selektoriv-CSS.md',
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
        name: 'Inline-стилі',
        isChecked: false
      },
      {
        name: 'ID',
        isChecked: false
      },
      {
        name: 'Класи, Атрибути, Псевдокласи',
        isChecked: false
      },
      {
        name: 'Теги, Псевдоелементи',
        isChecked: false
      },
      {
        name: 'Нульова вага',
        isChecked: false
      }
    ]
  },
  {
    id: 8,
    name: 'Висока специфічність селектора, чи є у неї якісь недоліки? + !important',
    answer: 'assets/content/ukr/answers/8-Vysoka-spetsifichnist-selektora-chi-ye-u-ne-ya-kaki-nedoliky.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Недоліки високої специфічності',
        isChecked: false
      },
      {
        name: '!important - коли варто використовувати і які проблеми може викликати',
        isChecked: false
      },
      {
        name: 'Best practices для управління специфічністю і пріоритетом стилів',
        isChecked: false
      }
    ]
  },
  {
    id: 9,
    name: 'Селектори: > + ~',
    answer: 'assets/content/ukr/answers/9-Selektory-+-~.md',
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
    name: 'Псевдокласи елементів',
    answer: 'assets/content/ukr/answers/10-Psevdoklasy-elementiv.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Псевдокласи стану (Інтерактив)',

        isChecked: false
      },
      {
        name: 'Структурні псевдокласи',
        isChecked: false
      },
      {
        name: 'Просунуті селектори (Modern CSS)',
        isChecked: false
      }
    ]
  },
  {
    id: 11,
    name: 'Псевдокласи форм',
    answer: 'assets/content/ukr/answers/11-Psevdoklasy-form.md',
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
    name: 'Псевдоелементи',
    answer: 'assets/content/ukr/answers/12-Psevdoelementy.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Що таке псевдоелементи?',
        isChecked: false
      },
      {
        name: 'Генерований контент (::before і ::after)',
        isChecked: false
      },
      {
        name: 'Текстові (::first-letter і ::first-line)',
        isChecked: false
      },
      {
        name: 'Інтерфейсні (::placeholder, ::selection, ::marker)',
        isChecked: false
      },
      {
        name: 'Просунуті (::backdrop, ::file-selector-button)',
        isChecked: false
      }
    ]
  },
  {
    id: 13,
    name: 'Позиціонування елементів (absolute, fixed, relative etc.)',
    answer: 'assets/content/ukr/answers/13-Pozitsionuvannya-elementiv-absolute-fixed-relative.md',
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
    name: 'Типи елементів (рядкові, блочні і т.д.). Їх відмінності',
    answer: 'assets/content/ukr/answers/14-Typy-elementiv-riadkovi-blochnyi-i-td-Ih-vidminnosti.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Блочні елементи',
        isChecked: false
      },
      {
        name: 'Рядкові елементи',
        isChecked: false
      },
    ]
  },
  {
    id: 15,
    name: 'Центрування (горизонтальне, вертикальне)',
    answer: 'assets/content/ukr/answers/15-Tsentruvannya-gorizontalne-vertikalne.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Горизонтальне центрування',
        isChecked: false
      },
      {
        name: 'Вертикальне центрування',
        isChecked: false
      }
    ]
  },
  {
    id: 16,
    name: 'Бокcова модель (Box Model) і box-sizing',
    answer: 'assets/content/ukr/answers/16-Boksova-modelBox-Model-i-box-sizing.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Бокcова модель (Box Model)',
        isChecked: false
      },
      {
        name: 'box-sizing: content-box і box-sizing: border-box',
        isChecked: false
      }
    ]
  },
  {
    id: 17,
    name: 'Flexbox VS Grid',
    answer: 'assets/content/ukr/answers/17-Flexbox-VS-Grid.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Що таке Flexbox',
        isChecked: false
      },
      {
        name: 'Що таке Grid',
        isChecked: false
      },
      {
        name: 'Основні відмінності між Flexbox і Grid',
        isChecked: false
      },
    ]
  },
  {
    id: 18,
    name: 'CSS анімації',
    answer: 'assets/content/ukr/answers/18-CSS-animatsii.md',
    tags: [
      'markup',
      'CSS',
      'animations'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Що таке CSS анімації?',
        isChecked: false
      },
      {
        name: 'Основні властивості для створення анімацій',
        isChecked: false
      },
      {
        name: 'Переваги та недоліки CSS анімацій',
        isChecked: false
      }
    ]
  },
  {
    id: 19,
    name: 'Сброс стилів і \"нормалізація\" (Reset VS Normilize). Їх відмінності.',
    answer: 'assets/content/ukr/answers/19-Sbros-stiliv-i-normalizatsiya-Reset-VS-Normilize-Ih-vidminnosti.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Сброс стилів (Reset) - що це?',
        isChecked: false
      },
      {
        name: 'Нормалізація (Normalize) - що це?',
        isChecked: false
      },
      {
        name: 'Основні відмінності між сбросом стилів і нормалізацією',
        isChecked: false
      }
    ]
  },
  {
    id: 20,
    name: 'Одиниці вимірювання (em, rem, %, px, vh, vw)',
    answer: 'assets/content/ukr/answers/20-Odinitsi-vimiryuvannya-em-rem-px-vh-vw.md',
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
    name: 'Порядок підключення ресурсів. Скрипти в head, скрипти в кінці body. У чому різниця.',
    answer: 'assets/content/ukr/answers/21-Poryadok-pidklyuchennya-resursiv-Skripty-v-head-skripty-v-kontsi-body-U-chomu-riznitsya.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Порядок підключення ресурсів (скрипти в head, скрипти в кінці body)',
        isChecked: false
      }
    ]
  },
  {
    id: 22,
    name: 'Способи підключення JS на сторінку',
    answer: 'assets/content/ukr/answers/22-Sposoby-pidklyuchennya-JS-na-storinku.md',
    tags: [
      'HTML',
      'markup',
      'JavaScript'
    ],
    category: 'Markup',
    structure: [
      {
        name: '3 способи підключення JS на сторінку',
        isChecked: false
      }
    ]
  },
  {
    id: 23,
    name: 'Атрибути defer і async у тега script',
    answer: 'assets/content/ukr/answers/23-Atributy-defer-i-async-u-tega-script.md',
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
        name: 'Без атрибутів',
        isChecked: false
      }
    ]
  },
  {
    id: 24,
    name: 'SVG. Анімації svg',
    answer: 'assets/content/ukr/answers/24-SVG-Animatsii-svg.md',
    tags: [
      'SVG',
      'markup',
      'animations'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Що таке SVG?',
        isChecked: false
      },
      {
        name: 'Ключові особливості SVG',
        isChecked: false
      }
    ]
  },
  {
    id: 25,
    name: 'Canvas. Що це і навіщо потрібен?',
    answer: 'assets/content/ukr/answers/25-Canvas-Chto-eto-i-zachem-nuzhen.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Canvas - що це?',
        isChecked: false
      },
      {
        name: 'Навіщо потрібен Canvas?',
        isChecked: false
      },
      {
        name: 'Основні сфери застосування',
        isChecked: false
      },
      {
        name: 'Переваги Canvas',
        isChecked: false
      }
    ]
  },
  {
    id: 26,
    name: 'Custom properties',
    answer: 'assets/content/ukr/answers/26-Custom-properties.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Custom properties - що це?',
        isChecked: false
      },
      {
        name: 'Підтримка в браузерах і коли з\'явилися',
        isChecked: false
      },
      {
        name: 'Головні відмінності від змінних SASS/LESS',
        isChecked: false
      }
    ]
  },
  {
    id: 27,
    name: 'Pixel-perfect',
    answer: 'assets/content/ukr/answers/27-Pixel-perfect.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Pixel-perfect - що це?',
        isChecked: false
      }
    ]
  },
  {
    id: 28,
    name: 'Пре- и пост- процесори CSS. Досвід роботи з ними',
    answer: 'assets/content/ukr/answers/28-Pre--i-post--protsesory-CSS--dosvid-roboty-z-nymy.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Пре- и пост- процесори CSS - що це?',
        isChecked: false
      },
      {
        name: 'Актуальність у 2025-2026 роках',
        isChecked: false
      }
    ]
  },
  {
    id: 29,
    name: 'Методологія БЕМ. Основні позиції, які проблеми вирішує?',
    answer: 'assets/content/ukr/answers/29-Metodologiya-BEM-Osnovni-pozitsii-yaki-problemy-virishuye.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Методологія БЕМ - що це?',
        isChecked: false
      },
      {
        name: 'Основні позиції методології БЕМ',
        isChecked: false
      },
      {
        name: 'Які проблеми вирішує БЕМ',
        isChecked: false
      }
    ]
  },
  {
    id: 30,
    name: 'HTML-шаблонизатори/препроцесори (handlebars, mustache, pug etc)',
    answer: 'assets/content/ukr/answers/30-HTML-shablonizatorypreprotsesory-handlebars-mustache-pug-etc.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'HTML-шаблонизатори/препроцесори - що це?',
        isChecked: false
      },
      {
        name: 'Приклади популярних інструментів',
        isChecked: false
      },
      {
        name: 'У чому різниця між шаблонізатором і препроцесором?',
        isChecked: false
      },
      {
        name: 'Актуальні вони сьогодні?',
        isChecked: false
      }
    ]
  },
  {
    id: 31,
    name: 'CORS. Що це таке і з чим його їдять?',
    answer: 'assets/content/ukr/answers/31-CORS-Sho-ce-take-i-z-chym-yoho-iediat.md',
    tags: [
      'browser',
      'security'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'CORS - що це?',
        isChecked: false
      }
    ]
  },
  {
    id: 32,
    name: 'Типи даних в JavaScript. typeof і його особливості',
    answer: 'assets/content/ukr/answers/32-Typy-danyh-zadachi-stroka-+-chislo.md',
    tags: [
      'JavaScript',
      'Data types'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '7 примітивних типів даних',
        isChecked: false
      },
      {
        name: '1 непримітивний тип даних',
        isChecked: false
      },
      {
        name: 'typeof і його особливості',
        isChecked: false
      }
    ]
  },
  {
    id: 33,
    name: 'Преобразування (приведення) типів в JavaScript',
    answer: 'assets/content/ukr/answers/33-Preobrazuvannya-privedennya-tipiv-v-JavaScript.md',
    tags: [
      'JavaScript',
      'Data types'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Три основних типи перетворення',
        isChecked: false
      }
    ]
  },
  {
    id: 34,
    name: 'Let, const і var. Різниці + Hoisting ',
    answer: 'assets/content/ukr/answers/34-Let-const-i-var-Riznytsi-+-Hoisting-.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    structure: [
      {
        name: 'Let, const і var - різниці',
        isChecked: false
      },
      {
        name: 'Hoisting (вспливання або підняття)',
        isChecked: false
      }
    ]
  },
  {
    id: 35,
    name: 'Функції: function declaration, function expression',
    answer: 'assets/content/ukr/answers/35-Funktsii-function-declaration-function-expression.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Function Declaration',
        isChecked: false
      },
      {
        name: 'Function Expression',
        isChecked: false
      },
    ]
  },
  {
    id: 36,
    name: 'Структури даних (масив, об\'єкт, set, map)',
    answer: 'assets/content/ukr/answers/36-Struktury-danyh-masyv-obekt-set-map.md',
    tags: [
      'JavaScript',
      'Data types',
      'Structures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Масив (Array)',
        isChecked: false
      },
      {
        name: 'Об\'єкт (Object)',
        isChecked: false
      },
      {
        name: 'Map (Карта)',
        isChecked: false
      },
      {
        name: 'Set (Множина)',
        isChecked: false
      },
      {
        name: 'WeakMap і WeakSet',
        isChecked: false
      }
    ]
  },
  {
    id: 37,
    name: 'Основні методи масивів, які ви використовуєте',
    answer: 'assets/content/ukr/answers/37-Osnovni-metody-masyviv-yaki-vy-vykorystovujete.md',
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
        name: 'pop/push і shift/unshift, їх різниці',
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
        name: 'indexOf/lastIndexOf і includes, їх різниці',
        isChecked: false
      },
      {
        name: 'find і findIndex, їх різниці',
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
        name: 'split і join',
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
    name: 'Ітератори та генератори',
    answer: 'assets/content/ukr/answers/38-Iteratory-ta-generatory.md',
    tags: [
      'JavaScript',
      'Iterable',
      'JS mechanics',
      'Generators'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Ітератори: Механіка під капотом',
        isChecked: false
      },
      {
        name: 'Генератори',
        isChecked: false
      },
      {
        name: 'Навіщо це потрібно на практиці?',
        isChecked: false
      }
    ]
  },
  {
    id: 39,
    name: 'Область видимості (Scope, Lexical Environment)',
    answer: 'assets/content/ukr/answers/39-Oblast-vydymosti-Scope-Lexical-Environment.md',
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
        name: 'Види областей видимості: глобальна, функціональна, блочна',
        isChecked: false
      },
      {
        name: 'Життєвий цикл змінної',
        isChecked: false
      }
    ]
  },
  {
    id: 40,
    name: 'Замикання (Closure)',
    answer: 'assets/content/ukr/answers/40-Closure.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Замикання - що це і для чого потрібно',
        isChecked: false
      },
      {
        name: '[[Environment]]',
        isChecked: false
      },
      {
        name: 'Використання замикань для створення приватних змінних',
        isChecked: false
      }
    ]
  },
  {
    id: 41,
    name: 'Збірка сміття (Garbage Collector). Що це таке і для чого потрібно?',
    answer: 'assets/content/ukr/answers/41-Zbirka-smittya-Garbage-Collector-Sho-tse-take-i-dlya-chogo-potribno.md',
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
    name: 'Рекурсія. Що це таке і для чого потрібно?',
    answer: 'assets/content/ukr/answers/42-Rekursiya-Sho-tse-take-i-dlya-chogo-potribno.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Рекурсія - що це і для чого потрібно',
        isChecked: false
      },
      {
        name: 'Плюси і мінуси рекурсії',
        isChecked: false
      }
    ]
  },
  {
    id: 43,
    name: 'Ключове слово this. Контекст',
    answer: 'assets/content/ukr/answers/43-Klyuchove-slovo-this-Kontekst.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'context'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Глобальний контекст і звичайний виклик функції',
        isChecked: false
      },
      {
        name: 'Виклик як метод об\'єкта',
        isChecked: false
      },
      {
        name: 'Стрілочні функції (Arrow Functions)',
        isChecked: false
      }
    ]
  },
  {
    id: 44,
    name: 'Прив\'язка контекста (явна, неявна). Bind, call, apply і їх різниці',
    answer: 'assets/content/ukr/answers/44-Privyazka-konteksta-yavna-neyavna-Bind-call-apply-i-ih-riznitsi.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'context'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Неявна прив\'язка (Implicit Binding)',
        isChecked: false
      },
      {
        name: 'Явна прив\'язка (Explicit Binding)',
        isChecked: false
      },
      {
        name: 'Методи call, apply і bind і їх різниця',
        isChecked: false
      }
    ]
  },
  {
    id: 45,
    name: 'Каррування (Currying)',
    answer: 'assets/content/ukr/answers/45-Karruvannya-Currying.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions',
      'closures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Каррування - що це і для чого потрібно',
        isChecked: false
      },
      {
        name: 'Реалізація каррування',
        isChecked: false
      },
      {
        name: 'Навіщо це потрібно на практиці?',
        isChecked: false
      }
    ]
  },
  {
    id: 46,
    name: 'Часткове застосування (Partial Application)',
    answer: 'assets/content/ukr/answers/46-Chastkove-zastosuvannya-Partial-Application.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions',
      'closures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Часткове застосування (основано на карруванні)',
        isChecked: false
      },
      {
        name: 'Реалізація часткового застосування',
        isChecked: false
      }
    ]
  },
  {
    id: 47,
    name: 'Псевдомасив arguments (чому він псевдомасив?)',
    answer: 'assets/content/ukr/answers/47-Psevdomasiv-arguments-chomu-vin-psevdomasiv.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Псевдомасив arguments',
        isChecked: false
      },
      {
        name: 'Чому він псевдомасив?',
        isChecked: false
      },
      {
        name: 'Arguments VS Arrow Functions',
        isChecked: false
      },
      {
        name: 'Сучасні альтернативи',
        isChecked: false
      }
    ]
  },
  {
    id: 48,
    name: 'Директива "use strict"',
    answer: 'assets/content/ukr/answers/48-Direktiva-use-strict.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Директива "use strict" - що це і для чого потрібно',
        isChecked: false
      },
      {
        name: 'Головні зміни при включенні строгого режиму',
        isChecked: false
      },
      {
        name: 'Як включити строгий режим?',
        isChecked: false
      }
    ]
  },
  {
    id: 49,
    name: 'Перетворення об\'єктів: toString і valueOf',
    answer: 'assets/content/ukr/answers/49-Peretvorennya-obektiv-toString-i-valueOf.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Перетворення об\'єктів: toString і valueOf',
        isChecked: false
      },
      {
        name: 'Як движок вирішує, який метод викликати першим',
        isChecked: false
      }
    ]
  },
  {
    id: 50,
    name: 'Цикл подій (Event loop), microtasks, event queue',
    answer: 'assets/content/ukr/answers/50-Tsikl-podiy-Event-loop-microtasks-event-queue.md',
    tags: [
      'JavaScript',
      'Browser mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Навіщо потрібен Event Loop',
        isChecked: false
      },
      {
        name: 'Основні сутності: Call Stack, Heap, Web APIs, Microtasks і Macrotasks',
        isChecked: false
      }
    ]
  },
  {
    id: 51,
    name: 'Наслідування в JavaScript',
    answer: 'assets/content/ukr/answers/51-Nasliduvannya-v-JavaScript.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Наслідування в JavaScript',
        isChecked: false
      },
      {
        name: 'Прототипне наслідування та ланцюжок прототипів',
        isChecked: false
      }
    ]
  },
  {
    id: 52,
    name: 'Посилання __proto__. Що це і з чим його їдять?',
    answer: 'assets/content/ukr/answers/52-Ssylka-__proto__-shcho-tse-i-z-chym-yoho-yidyat.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '__proto__ - що це?',
        isChecked: false
      }
    ]
  },
  {
    id: 53,
    name: 'Властивість F.prototype і створення об\'єктів через new',
    answer: 'assets/content/ukr/answers/53-Vlastyvist-Fprototype-i-stvorennya-obektiv-cherez-new.md',
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
    name: 'Promises. Навіщо потрібні? Яку проблему вирішували?',
    answer: 'assets/content/ukr/answers/54-Promises-Navishcho-potribni-Yaku-problemu-vyrishuvaly.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Що таке Promise, в якій версії ES з\'явився',
        isChecked: false
      },
      {
        name: 'Яку проблему вирішували проміси',
        isChecked: false
      },
      {
        name: 'Незмінність результату після завершення проміса',
        isChecked: false
      },
      {
        name: 'then, catch, finally',
        isChecked: false
      },
      {
        name: 'Еволюція промісів та async/await',
        isChecked: false
      }
    ]
  },
  {
    id: 55,
    name: 'Promise chaining. Можна ли викликати promise.then().finally().then() або promise.catch().then()? Що отримаємо?',
    answer: 'assets/content/ukr/answers/55-Promise-chaining.md',
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
        name: 'Можна продовжити ланцюжок викликів після помилки',
        isChecked: false
      },
      {
        name: 'Можна будувати такі ланцюжки і з finally',
        isChecked: false
      }
    ]
  },
  {
    id: 56,
    name: 'Try - Catch. Що це і для чого потрібно?',
    answer: 'assets/content/ukr/answers/56-Try---Catch-shcho-tse-i-dlya-chogo-potribno.md',
    tags: [
      'JavaScript'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Try - Catch - для чого потрібно?',
        isChecked: false
      }
    ]
  },
  {
    id: 57,
    name: 'Що нового з\'явилося в мові в ES6?',
    answer: 'assets/content/ukr/answers/57-Scho-novoho-z-yavylosya-v-movi-v-ES6.md',
    tags: [
      'JavaScript',
      'ES6'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '11 основних нововведень в ES6',
        isChecked: false
      }
    ]
  },
  {
    id: 58,
    name: 'Що нового з\'явилося в мові ПІСЛЯ ES6?',
    answer: 'assets/content/ukr/answers/58-Scho-novoho-z-yavylosya-v-movi-PISLYA-ES6.md',
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
    name: 'Async await. Яку проблему вирішують?',
    answer: 'assets/content/ukr/answers/59-Async-await-Yaku-problemu-vyrishuyut.md',
    tags: [
      'JavaScript',
      'ES6',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Еволюція асинхронного JS в ES8',
        isChecked: false
      },
      {
        name: 'Навіщо потрібен async/await? Яку проблему вирішує?',
        isChecked: false
      },
      {
        name: 'try...catch...finally',
        isChecked: false
      },
      {
        name: 'node.js і підтримка async/await',
        isChecked: false
      }
    ]
  },
  {
    id: 60,
    name: 'Методи управління групою промісів',
    answer: 'assets/content/ukr/answers/60-Metody-upravlinnya-gruppoju-promisiv.md',
    tags: [
      'JavaScript',
      'ES6',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Яку проблему вирішують',
        isChecked: false
      },
      {
        name: 'Promise.all() — «Все або нічого»',
        isChecked: false
      },
      {
        name: 'Promise.allSettled() — «Дочекатися всіх, незважаючи ні на що»',
        isChecked: false
      },
      {
        name: 'Promise.race() — «Хто швидше»',
        isChecked: false
      },
      {
        name: 'Promise.any() — «Хоч хтось успішний»',
        isChecked: false
      }
    ]
  },
  {
    id: 61,
    name: 'DOM - що це і навіщо? DOM події. Спливання, занурення. Делегування',
    answer: 'assets/content/ukr/answers/61-DOM---shcho-tse-i-navishcho-DOM-podiyi-Splivannya-zanurennya-Deleguvannya.md',
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
    name: 'LocalStorage VS SessionStorage. Різниця, принцип роботи',
    answer: 'assets/content/ukr/answers/62-LocalStorage-VS-SessionStorage-Riznitsya-printsip-roboty.md',
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
    answer: 'assets/content/ukr/answers/63-Code-style-Linters-Prettier.md',
    tags: [
      'programming',
      'codestyle',
      'best-practice'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Навіщо потрібні інструменти для підтримки code style?',
        isChecked: false
      },
      {
        name: 'Prettier',
        isChecked: false
      },
      {
        name: 'ESLint, TSLint і CodeLint',
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
    name: 'Мутабильність/іммутабельність (при роботі з масивами etc)',
    answer: 'assets/content/ukr/answers/64-Mutabilnist-immutabilnist-pri-roboti-z-masivami-etc.md',
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
    name: 'Реактивне програмування. RxJs і основні методи',
    answer: 'assets/content/ukr/answers/65-Reaktyvne-programuvannya-RxJs-i-osnovni-metody.md',
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
    name: 'Що таке об\'єкт Observable в RxJs?',
    answer: 'assets/content/ukr/answers/66-Shcho-take-obekt-Observable-v-RxJs.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Observable - що це?',
        isChecked: false
      }
    ]
  },
  {
    id: 67,
    name: 'Що таке Subject? Які бувають види?',
    answer: 'assets/content/ukr/answers/67-Shcho-take-Subject-Yaki-buvayut-vidy.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Subject - що це?',
        isChecked: false
      }
    ]
  },
  {
    id: 68,
    name: 'Observables VS Subject - різниця',
    answer: 'assets/content/ukr/answers/68-Observables-VS-Subject---riznitsya.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Специфіка Subject',
        isChecked: false
      },
      {
        name: 'Відмінності поведінки та види Subject',
        isChecked: false
      },
      {
        name: 'Специфіка Observable',
        isChecked: false
      },
      {
        name: 'Observable - тільки для отримання даних, Subject - ще й для розповсюдження',
        isChecked: false
      }
    ]
  },
  {
    id: 69,
    name: 'Zone.js. Що це і для чого потрібно?',
    answer: 'assets/content/ukr/answers/69-Zonejs-Shcho-tse-i-dlya-chogo-potribno.md',
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
    name: 'Які Utility Types (Утиліти типів) ти використовуєш на практиці?',
    answer: 'assets/content/ukr/answers/70-Yaki-Utility-Types-Utility-tipiv-ty-vykorystovuesh-na-praktytsi.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Partial&lt;Type> (Частковий)',
        isChecked: false
      },
      {
        name: 'Required&lt;Type> (Обов\'язковий)',
        isChecked: false
      },
      {
        name: 'Pick&lt;Type, Keys> (Вибрати)',
        isChecked: false
      },
      {
        name: 'Omit&lt;Type, Keys> (Виключити)',
        isChecked: false
      },
      {
        name: 'Record&lt;Keys, Type> (Запис / Словник)',
        isChecked: false
      }
    ]
  },
  {
    id: 71,
    name: 'Що таке Type Guards і Type Assertions?',
    answer: 'assets/content/ukr/answers/71-Shcho-take-Type-Guards-i-Type-Assertions.md',
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
    name: 'Що таке Enums? Їх застосування',
    answer: 'assets/content/ukr/answers/72-Shcho-take-Enums-Ih-zastosuvannya.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Enums (Перерахування)',
        isChecked: false
      },
      {
        name: 'Плюси Enums',
        isChecked: false
      },
      {
        name: 'Numeric Enums (Числові перерахування)',
        isChecked: false
      },
      {
        name: 'String Enums (Строкові перерахування)',
        isChecked: false
      },
      {
        name: 'Heterogeneous Enums (Гетерогенні перерахування)',
        isChecked: false
      },
      {
        name: 'Const Enums (Константні перерахування)',
        isChecked: false
      },
      {
        name: 'Під капотом: як JavaScript обробляє Enums',
        isChecked: false
      }
    ]
  },
  {
    id: 73,
    name: 'Class, Interface, Type. Різниця та застосування',
    answer: 'assets/content/ukr/answers/73-Class-Interface-Type-Riznitsya-ta-zastosuvannya.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Class (Реалізація)',
        isChecked: false
      },
      {
        name: 'Interface (Контракт)',
        isChecked: false
      },
      {
        name: 'Type (Псевдонім)',
        isChecked: false
      }
    ]
  },
  {
    id: 74,
    name: 'Що таке Generics? Їх застосування',
    answer: 'assets/content/ukr/answers/74-Shcho-take-Generics-Ih-zastosuvannya.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Generics (Узагальнення) - яку проблему вирішують?',
        isChecked: false
      },
      {
        name: 'Синтаксис Generics',
        isChecked: false
      },
      {
        name: 'Застосування Generics у функціях, інтерфейсах та класах',
        isChecked: false
      },
      {
        name: 'Обмеження (Constraints) у Generics',
        isChecked: false
      },
      {
        name: 'Утиліти типів на основі Generics',
        isChecked: false
      },
      {
        name: 'Множинні параметри типів',
        isChecked: false
      },
      {
        name: 'Як Generics працюють під капотом у JavaScript',
        isChecked: false
      }
    ]
  },
  {
    id: 75,
    name: 'Різниця між any, unknown і never',
    answer: 'assets/content/ukr/answers/75-Riznitsya-mizh-any-unknown-i-never.md',
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
    name: 'Коли використовувати .asObservable() в RxJs?',
    answer: 'assets/content/ukr/answers/76-Koly-vykorystovuvaty-asObservable-v-RxJs.md',
    tags: [
      'TypeScript',
      'Angular',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'asObservable() - що це і для чого потрібно?',
        isChecked: false
      },
      {
        name: 'Правильний спосіб використання asObservable()',
        isChecked: false
      },
      {
        name: 'Антипаттерн використання asObservable()',
        isChecked: false
      }
    ]
  },
  {
    id: 77,
    name: 'Основні принципи ООП',
    answer: 'assets/content/ukr/answers/77-Osnovni-printsypy-OOP.md',
    tags: [
      'programming',
      'ООП'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Abstraction (Абстракція)',
        isChecked: false
      },
      {
        name: 'Encapsulation (Інкапсуляція)',
        isChecked: false
      },
      {
        name: 'Inheritance (Успадкування)',
        isChecked: false
      },
      {
        name: 'Polymorphism (Поліморфізм)',
        isChecked: false
      }
    ]
  },
  {
    id: 78,
    name: 'Паттерни проектування',
    answer: 'assets/content/ukr/answers/78-Patterny-proektirovannya.md',
    tags: [
      'Patterns',
      'best-practice'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Паттерни проектування - що це і для чого потрібні?',
        isChecked: false
      }
    ]
  },
  {
    id: 79,
    name: 'Декоратори функцій. Що це таке і для чого?',
    answer: 'assets/content/ukr/answers/79-Dekoratory-funktsij-Shcho-tse-take-i-dlya-chego.md',
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
    name: 'Принципи SOLID. Що це таке і навіщо?',
    answer: 'assets/content/ukr/answers/80-Printsypy-SOLID-Shcho-tse-take-i-navishcho.md',
    tags: [
      'programming',
      'best-practice',
      'ООП'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Принципи SOLID - це',
        isChecked: false
      },
      {
        name: 'Single Responsibility Principle (Принцип єдиної відповідальності)',
        isChecked: false
      },
      {
        name: 'Open-Closed Principle (Принцип відкритості/закритості)',
        isChecked: false
      },
      {
        name: 'Liskov Substitution Principle (Принцип підстановки Барбари Лісков)',
        isChecked: false
      },
      {
        name: 'Interface Segregation Principle (Принцип розділення інтерфейсу)',
        isChecked: false
      },
      {
        name: 'Dependency Inversion Principle (Принцип інверсії залежностей)',
        isChecked: false
      }
    ]
  },
  {
    id: 81,
    name: 'Протокол HTTP. Що це таке і з чим його їдять?',
    answer: 'assets/content/ukr/answers/81-Protokol-HTTP-Shcho-tse-take-i-z-chym-yoho-idyat.md',
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
    name: 'Спеціальні селектори Angular. Псевдокласи :host, :host-context і псевдоелемент ::ng-deep',
    answer: 'assets/content/ukr/answers/82-Spetsialni-selektory-Angular-Psevdoklasy-host-host-context-i-psevdoelement-ng-deep.md',
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
    name: 'SQL. Основні команди',
    answer: 'assets/content/ukr/answers/83-SQL-Osnovni-komandy.md',
    tags: [
      'СУБД (системи управління базами даних)',
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
        name: 'JOIN і його варіанти',
        isChecked: false
      }
    ]
  },
  {
    id: 84,
    name: 'Формат JSON, метод toJSON',
    answer: 'assets/content/ukr/answers/84-Format-JSON-metod-toJSON.md',
    tags: [
      'JSON',
      'Data Structures'
    ],
    category: 'Databases',
    structure: [
      {
        name: 'JSON - що це і для чого потрібно',
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
    name: 'Аутентифікація і авторизація. У чому різниця?',
    answer: 'assets/content/ukr/answers/85-Autentifikatsiya-i-avtorizatsiya-V-chem-raznitsa.md',
    tags: [
      'security',
      'authentication',
      'authorization'
    ],
    category: 'General',
    structure: [
      {
        name: 'Аутентифікація',
        isChecked: false
      },
      {
        name: 'Авторизація',
        isChecked: false
      }
    ]
  },
  {
    id: 86,
    name: 'Безпека додатків (AppSec)',
    answer: 'assets/content/ukr/answers/86-Bezpeka-dodatkiv-AppSec.md',
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
    name: 'Дерева, графи, перевернуті дерева',
    answer: 'assets/content/ukr/answers/87-Dereva-grafy-perevernutі-dereva.md',
    tags: [
      'data structures',
      'trees',
      'graphs'
    ],
    category: 'General',
    structure: [
      {
        name: 'Дерева',
        isChecked: false
      },
      {
        name: 'Перевернуті дерева',
        isChecked: false
      },
      {
        name: 'Бінарні дерева',
        isChecked: false
      },
      {
        name: 'Графи',
        isChecked: false
      }
    ]
  },
  {
    id: 88,
    name: 'Чому робота з DOM вважається дуже ресурсоємною?',
    answer: 'assets/content/ukr/answers/88-Chomu-robota-z-DOM-vvazhayetsya-duzhe-resursojemnoyu.md',
    tags: [
      'DOM',
      'performance',
      'web development'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'DOM — це Web API, а не частина JavaScript',
        isChecked: false
      },
      {
        name: 'DOM — це складна ієрархічна структура даних',
        isChecked: false
      },
      {
        name: 'Reflow і Repaint',
        isChecked: false
      }
    ]
  },
  {
    id: 89,
    name: 'Shadow DOM. Інкапсуляція стилів',
    answer: 'assets/content/ukr/answers/89-Shadow-DOM-Inkapsulyatsiya-stiliv.md',
    tags: [
      'web development',
      'shadow DOM'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Shadow DOM - що це таке',
        isChecked: false
      },
      {
        name: 'Проблема, яку вирішує Shadow DOM',
        isChecked: false
      },
      {
        name: 'Ключові особливості Shadow DOM',
        isChecked: false
      }
    ]
  },
  {
    id: 90,
    name: 'Virtual DOM. Оптимізація на рівні фреймворка',
    answer: 'assets/content/ukr/answers/90-Virtual-DOM-Optimizatsiya-na-rivni-frejmvorka.md',
    tags: [
      'web development',
      'virtual DOM',
      'Vue',
      'React'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Virtual DOM - що це таке',
        isChecked: false
      },
      {
        name: 'Проблема, яку вирішує Virtual DOM',
        isChecked: false
      },
      {
        name: 'Як працює Virtual DOM',
        isChecked: false
      }
    ]
  },
  {
    id: 91,
    name: 'RxJS і асинхронність',
    answer: 'assets/content/ukr/answers/91-RxJS-i-asinhronnist.md',
    tags: [
      'rxjs',
      'asynchronous',
      'reactive programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Основи RxJS',
        isChecked: false
      },
      {
        name: 'Ключові будівельні блоки RxJS',
        isChecked: false
      },
      {
        name: 'Оператори RxJS',
        isChecked: false
      },
      {
        name: 'Управління пам\'яттю в RxJS',
        isChecked: false
      }
    ]
  },
  {
    id: 92,
    name: 'State management в Angular. NgRx',
    answer: 'assets/content/ukr/answers/92-State-management-v-Angular-NgRx.md',
    tags: [
      'angular',
      'state management',
      'reactive programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'State management в Angular. NgRx, що це таке',
        isChecked: false
      },
      {
        name: 'Store, Actions, Reducers, Selectors',
        isChecked: false
      },
      {
        name: 'Effects (Побічні ефекти та асинхронність)',
        isChecked: false
      }
    ]
  },
  {
    id: 93,
    name: 'Signals in Angular. В чому фундаментальна різниця між Signals і RxJS, і чому команда Angular вирішила впровадити цей паттерн?',
    answer: 'assets/content/ukr/answers/93-Signals-in-Angular-V-chomu-fundamentalna-riznitsya-mizhdu-Signals-i-RxJS-i-chomu-komanda-Angular-virishila-vprovaditi-tsey-pattern.md',
    tags: [
      'Angular',
      'Signals',
      'Reactive Programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Signals в Angular, що це таке',
        isChecked: false
      },
      {
        name: 'Фундаментальна різниця між Signals і RxJS',
        isChecked: false
      }
    ]
  },
  {
    id: 94,
    name: 'Як працюють computed і effect?',
    answer: 'assets/content/ukr/answers/94-Yak-pratsyuyut-computed-i-effect.md',
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
        name: 'Коли використовувати Effect, а коли це антипатерн',
        isChecked: false
      }
    ]
  },
  {
    id: 95,
    name: 'Signal-based API: input(), output() і model()',
    answer: 'assets/content/ukr/answers/95-Signal-based-API-input-output-i-model.md',
    tags: [
      'Angular',
      'Signals',
      'Reactive Programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'input(), output() і model() - що це',
        isChecked: false
      }
    ]
  },
  {
    id: 96,
    name: 'Standalone Components: Чому відмовилися від NgModules?',
    answer: 'assets/content/ukr/answers/96-Standalone-Components-Chomu-vidmovylysya-vid-NgModules.md',
    tags: [
      'Angular',
      'Standalone',
      'Architecture'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Концепція Standalone',
        isChecked: false
      },
      {
        name: 'Чому відмовилися від NgModules',
        isChecked: false
      }
    ]
  },
  {
    id: 97,
    name: 'Функція inject() проти Constructor DI',
    answer: 'assets/content/ukr/answers/97-Funktsiya-inject-protiv-Constructor-DI.md',
    tags: [
      'Angular',
      'Standalone',
      'Architecture',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Функція inject()',
        isChecked: false
      },
      {
        name: 'Переваги inject() порівняно з Constructor DI',
        isChecked: false
      },
      {
        name: 'Де МОЖНА використовувати inject()',
        isChecked: false
      },
      {
        name: 'Де НЕ МОЖНА використовувати inject()',
        isChecked: false
      }
    ]
  },
  {
    id: 98,
    name: 'Новий Control Flow (@if, @for) проти Structural Directives (*ngIf, *ngFor)',
    answer: 'assets/content/ukr/answers/98-Novyj-Control-Flow-if-for-protiv-Structural-Directives-ngIf-ngFor.md',
    tags: [
      'Angular',
      'Syntax'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Новий Control Flow',
        isChecked: false
      },
      {
        name: 'Переваги нового Control Flow',
        isChecked: false
      }
    ]
  },
  {
    id: 99,
    name: 'Стратегії Change Detection (Default vs OnPush vs Zoneless)',
    answer: 'assets/content/ukr/answers/99-Strategii-Change-Detection-Default-vs-OnPush-vs-Zoneless.md',
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
    name: 'Deferrable Views (@defer): Як працює цей механізм? Які вбудовані тригери (on viewport, on interaction, on idle) існують для лінивої завантаження шматків шаблону?',
    answer: 'assets/content/ukr/answers/100-Deferrable-Views-defer.md',
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
    name: 'Functional Guards - що це і чому класові Guards були оголошені deprecated?',
    answer: 'assets/content/ukr/answers/101-Functional-Guards---scho-tse-i-chomu-klasovi-Guards-buly-ogolosheni-deprecated.md',
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
    name: 'Functional Interceptors: Як налаштувати перехоплювачі HTTP-запитів (Interceptors) у Standalone-додатку без використання модулів і HTTP_INTERCEPTORS?',
    answer: 'assets/content/ukr/answers/102-Functional-Interceptors-Yak-nalashtuvaty-perekhoplyuvachi-HTTP-zapytiv-Interceptors-u-Standalone-dodatku-bez-vykorystannya-moduliv-i-HTTP_INTERCEPTORS.md',
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
    name: 'Lifecycle Angular (Життєвий цикл компонента). Сучасний підхід',
    answer: 'assets/content/ukr/answers/103-Lifecycle-Angular-Zhyttievyj-tsikl-komponenta-Suchasnyj-pidhid.md',
    tags: [
      'Angular',
      'Lifecycle',
      'Hooks'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Lifecycle Hooks (Класичні)',
        isChecked: false
      },
      {
        name: 'Сучасний підхід',
        isChecked: false
      }
    ]
  },
  {
    id: 104,
    name: 'Object.defineProperty - що це і для чого потрібно? (+ застосування в Angular.js і Vue 2)',
    answer: 'assets/content/ukr/answers/104-Object-defineProperty-scho-tse-i-dlya-chogo-potribno.md',
    tags: [
      'JavaScript',
      'Angular.js',
      'Vue 2'
    ],
    ategory: 'JavaScript',
    structure: [
      {
        name: 'Object.defineProperty - що це і для чого потрібно?',
        isChecked: false
      },
      {
        name: 'Загальні дескриптори властивостей: configurable, enumerable',
        isChecked: false
      },
      {
        name: 'Дескриптори даних: writable, value',
        isChecked: false
      },
      {
        name: 'Дескриптори доступу: get, set',
        isChecked: false
      },
      {
        name: 'Використання в Vue та інших фреймворках - (тільки Vue 2, у Vue 3 вже Proxy)',
        isChecked: false
      }
    ]
  },
  {
    id: 105,
    name: 'Суть реактивності в Angular.js, Angular 2+, Vue 2 і Vue 3. В чому фундаментальна різниця між підходами до реактивності?',
    answer: 'assets/content/ukr/answers/105-Sut-reaktivnosti-v-Angular-Vue.md',
    tags: [
      'Angular',
      'Vue',
      'Reactivity'
    ],
    category: '',
    structure: [
      {
        name: 'Реактивність в Vue 2',
        isChecked: false
      },
      {
        name: 'Реактивність в Vue 3',
        isChecked: false
      },
      {
        name: 'Реактивність в Angular.js',
        isChecked: false
      },
      {
        name: 'Реактивність в Angular 2+',
        isChecked: false
      }
    ]
  },
  {
    id: 106,
    name: 'Abstract Classes (Абстрактні класи) в TypeScript. Коли використовувати абстрактні класи замість інтерфейсів?',
    answer: 'assets/content/ukr/answers/106-Abstract-Classes-v-TypeScript.md',
    tags: [
      'TypeScript',
      'OOP',
      'Abstract Classes'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Abstract Classes (Абстрактні класи)',
        isChecked: false
      },
      {
        name: 'Коли використовувати абстрактні класи замість інтерфейсів',
        isChecked: false
      },
      {
        name: 'Чи можна використовувати абстрактні класи для реалізації множинного наслідування?',
        isChecked: false
      },
      {
        name: 'Чи можна комбінувати абстрактні класи та інтерфейси?',
        isChecked: false
      }
    ]
  },
  {
    id: 107,
    name: 'Protected vs Private vs Public в TypeScript. Коли використовувати кожен з цих модифікаторів доступу?',
    answer: 'assets/content/ukr/answers/107-Protected-vs-Private-vs-Public-v-TypeScript.md',
    tags: [
      'TypeScript',
      'OOP',
      'Access Modifiers'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Protected (Модифікатор доступу)',
        isChecked: false
      },
      {
        name: 'Private (Модифікатор доступу)',
        isChecked: false
      },
      {
        name: 'Public (Модифікатор доступу)',
        isChecked: false
      },
      {
        name: 'Коли використовувати кожен з цих модифікаторів доступу',
        isChecked: false
      }
    ]
  }
];
