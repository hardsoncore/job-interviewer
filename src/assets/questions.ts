import { Question } from 'src/app/models/question.model';

export const questions: Question[] = [
  {
    id: 1,
    name: 'Как браузер парсит страницу?',
    answer: ``,
    tags: ['markup', 'browser'],
    structure: [
      {
        name: 'Парсинг HTML',
        isChecked: false,
      },
        {
        name: 'Построение DOM',
        isChecked: false,
      }
    ],
  },
  {
    id: 2,
    name: 'Что такое <DOCTYPE>. Зачем он нужен?',
    answer: ``,
    tags: ['HTML', 'markup'],
    structure: [
      {
        name: 'Определяет версию HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 3,
    name: 'Теги HTML5. Семантика. Доступность.',
    answer: ``,
    tags: ['HTML', 'markup'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 4,
    name: 'Какие есть способы подключить CSS на страницу?',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 5,
    name: 'Приоритет стилей. Каскадность.',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 6,
    name: '“Вес” селекторов CSS',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 7,
    name: 'Высокая специфичность селектора, есть ли у нее какие-то недостатки?',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 8,
    name: '!important',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 9,
    name: 'Селекторы: > + ~',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 10,
    name: 'Псевдоклассы элементов',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 11,
    name: 'Псевдоклассы форм',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 12,
    name: 'Псевдоэлементы',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 13,
    name: 'Позиционирование элементов (absolute, fixed, relative)',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 14,
    name: 'Типы элементов (строчные, блочные и т.д.). Их различия',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 15,
    name: 'Центрирование (горизонтальное, вертикальное)',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 16,
    name: 'Боксовая модель (box-sizing)',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 17,
    name: 'Flexbox VS Grid',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Что такое Flexbox',
        isChecked: false,
      }
    ],
  },
  {
    id: 18,
    name: 'CSS анимации',
    answer: ``,
    tags: ['markup', 'CSS', 'animations'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 19,
    name: 'Сброс стилей и "нормализация" (Reset VS Normilize). Их различия.',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 20,
    name: 'Единицы измерения (em, rem, %, px, vh, vw)',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 21,
    name: 'Порядок подключения ресурсов. Скрипты в head, скрипты в конце body. В чем разница.',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 22,
    name: 'Способы подключить JS на страницу',
    answer: ``,
    tags: ['HTML', 'markup', 'JavaScript'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 23,
    name: 'Атрибуты defer и async у тега script',
    answer: ``,
    tags: ['HTML', 'markup', 'JavaScript'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 24,
    name: 'SVG. Анимации svg',
    answer: ``,
    tags: ['SVG', 'markup', 'animations'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 25,
    name: 'Canvas. Что это и зачем нужен?',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 26,
    name: 'Custom properties',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 27,
    name: 'Pixel-perfect',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 28,
    name: 'Пре- и пост- процессоры CSS. Опыт работы с ними',
    answer: ``,
    tags: ['markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 29,
    name: 'Методология БЭМ. Основные позиции, какие проблемы решает?',
    answer: ``,
    tags: ['HTML', 'markup', 'CSS'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 30,
    name: 'HTML-шаблонизаторы/препроцессоры (handlebars, mustache, pug etc)',
    answer: ``,
    tags: ['HTML', 'markup'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 31,
    name: 'Типы данных (задачи: строка + число)',
    answer: ``,
    tags: ['JavaScript', 'Data types'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 32,
    name: 'Приведение типов в JavaScript',
    answer: ``,
    tags: ['JavaScript', 'Data types'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 33,
    name: 'Структуры данных (массив, объект, set, map)',
    answer: ``,
    tags: ['JavaScript', 'Data types', 'Structures'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 34,
    name: 'Основные методы массивов, которые вы используете',
    answer: ``,
    tags: ['JavaScript', 'Data types', 'Structures', 'Iterable'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 35,
    name: 'Итераторы',
    answer: ``,
    tags: ['JavaScript', 'Iterable'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 36,
    name: 'Область видимости (Scope)',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 37,
    name: 'Замыкание (Closure)',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 38,
    name: '“Поднятие” переменных и объявлений функций.',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 39,
    name: 'Функции: function declaration, function expression',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics', 'functions'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 40,
    name: 'Let, const и var. Различия',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 41,
    name: 'Рекурсия. Что это такое и для чего нужно?',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 42,
    name: 'Декораторы функций. Что это такое и для чего?',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 43,
    name: 'Ключевое слово this. Контекст',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics', 'context'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 44,
    name: 'Привязка контекста (явная, неявная). Bind, call, apply и их различия',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics', 'context'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 45,
    name: 'Каррирование',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 46,
    name: 'Частичное применение',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 47,
    name: 'Псевдомассив arguments (почему он псевдомассив?)',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics', 'functions'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 48,
    name: '"use strict"; - что это и зачем нужно?',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 49,
    name: 'Преобразование объектов: toString и valueOf',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 50,
    name: 'Цикл событий (Event loop), microtasks, event queue',
    answer: ``,
    tags: ['JavaScript', 'Browser mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 51,
    name: 'Наследование',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 52,
    name: 'Ссылка __proto__. Что это и с чем его едят?',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 53,
    name: 'Свойство F.prototype и создание объектов через new',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 54,
    name: 'Promises. Зачем нужны? Какую проблему решали?',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics', 'Promise', 'Async'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 55,
    name: 'Promise chaining. Можно ли вызывать promise.then().finally().then() или promise.catch().then()? Что получим?',
    answer: ``,
    tags: ['JavaScript', 'JS mechanics', 'Promise', 'Async'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 56,
    name: 'Try - Catch. Что это и для чего нужно?',
    answer: ``,
    tags: ['JavaScript'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 57,
    name: 'Что нового появилось в языке в ES6?',
    answer: ``,
    tags: ['JavaScript', 'ES6'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 58,
    name: 'Что нового появилось в языке ПОСЛЕ ES6?',
    answer: ``,
    tags: ['JavaScript', 'ES6', 'ES7'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 59,
    name: 'Async await. Кто такие и какую проблему решают?',
    answer: ``,
    tags: ['JavaScript', 'ES6', 'Promise', 'Async'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 60,
    name: 'DOM. Что это и зачем нужно?',
    answer: ``,
    tags: ['HTML', 'markup', 'browser mechanics', 'browser'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 61,
    name: 'DOM события. Всплытие, погружение. Делегирование',
    answer: ``,
    tags: ['markup', 'browser mechanics', 'browser'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 62,
    name: 'LocalStorage VS SessionStorage. Различия, принцип работы',
    answer: ``,
    tags: ['markup', 'browser', 'LocalStorage', 'SessionStorage'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 63,
    name: 'Code style. Linters. Prittier',
    answer: ``,
    tags: ['programming', 'codestyle', 'best-practice'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 64,
    name: 'Мутабильность/иммутабильность (при работ с массивами etc)',
    answer: ``,
    tags: ['programming', 'immutable'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 65,
    name: 'Реактивное программирование. RxJs и основные методы',
    answer: `
      <h3>Реактивное программирование — программирование с асинхронными потоками данных.</h3>

      <p>
        Впрочем, ничего нового. Event bus’ы или обычные события клика — это тоже асинхронные потоки данных,
        которые вы можете прослушивать, чтобы реагировать какими-либо действиями.
        <br>
        <span class="accent">Реактивность</span> — это та же самая идея,
        возведенная в абсолют. Вы можете создавать потоки данных не только из событий наведения или кликания мышью.
        Потоком может быть что угодно: переменные, пользовательский ввод, свойства, кэш, структуры данных и т.п.
        <br>
        Например, представьте, что ваша лента новостей в Твиттере — поток событий. Вы можете слушать этот поток и
        реагировать на события соответственно.
      </p>

      <p>
        <span class="accent">Поток</span> — это последовательность событий, упорядоченная по времени. Он может выбрасывать три типа данных:
        значение (определенного типа), ошибку или сигнал завершения.
        <br>
        Мы перехватываем эти события асинхронно, указывая одну функцию, которая будет вызываться,
        когда выброшено значение, другую для ошибок и третью для обработки сигнала завершения.
      </p>

      <h3>Для чего нужно реактивное программирование</h3>

      <p>
        Реактивный подход повышает уровень абстракции вашего кода и вы можете сконцентрироваться на взаимосвязи событий,
        которые определяют бизнес-логику, вместо того, чтобы постоянно поддерживать код с большим количеством деталей реализации.
        Код в реактивном программировании, вероятно, будет короче.
      </p>

      <p>
        Преимущество более заметно в современных веб- и мобильных приложениях, которые работают с большим количеством
        разнообразных UI-событий. 10 лет назад всё взаимодействие с веб-страницей сводилось к отправке больших форм на
        сервер и выполнении простого рендеринга в клиентской части. Сейчас приложения более сложны: изменение одного поля может
        повлечь за собой автоматическое сохранение данных на сервере, информация о новом «лайке» должна отправиться
        другим подключенным пользователям и т.д.
      </p>

      <p>
        Реактивное программирование очень хорошо подходит для обработки большого количества разнообразных событий.
      </p>

      <h3>
        О библиотеке RxJs
      </h3>

      <p>
        <span class="accent">RxJS</span> представляет собой библиотеку, позволяющую управлять всеми асинхронными операциями и событиями в
        приложении в стиле реактивного программирования. Она построена на основе паттерна проектирования <code>Observer</code>
        и предусматривает целый ряд операторов для манипуляции асинхронными событиями и обработки передаваемых ими данных.
      </p>

      <h3>
        Ключевые понятия RxJS:
      </h3>

      <ul>
        <li><code>Observable</code>;</li>
        <li><code>Observer</code>;</li>
        <li><code>Subject</code>;</li>
        <li><code>Scheduler</code>;</li>
        <li><code>Subscription</code>;</li>
        <li><code>Operator</code>.</li>
      </ul>

      <p>
        RxJS оперирует объектами <code>Observable</code>, которые существуют в нескольких разновидностях
        (<code>Subject</code>, <code>Scheduler</code>) и реализуют принцип push-систем передачи данных от &quot;поставщика&quot;
        к &quot;потребителю&quot;.
      </p>

      <p>
        Помимо push-систем выделяют еще и pull-системы передачи данных.
      </p>

      <p>
        В pull-системах "потребитель" решает, когда получить данные от "поставщика".
        Любая JavaScript функция - яркий пример такой системы. Код вызова функции - "потребитель", сама функция - "поставщик".
      </p>

      <p>
        В случае с RxJS <code>Observable</code> именно отправитель решает, когда отправить данные получателю.
        К этому типу push-систем относятся и объекты <code>Promise</code>, которые предоставляют данные зарегистрированным
        callback-функциям и инициируют их вызов.
      </p>

      <p class="info info--blue">
        Преимущество объектов <code>Observable</code> в том, что они могут передавать данные множество раз в разные моменты
        времени множеству "потребителей".
      </p>

      <p>
        В контексте приложений Angular RxJS применяется для выполнения HTTP-запросов,
        отслеживания событий браузера или создания пользовательских и других событий.
      </p>

      <p>
        Пример создания простого Observable с использованием функции fromEvent:
      </p>

      <code class="code">
        import { fromEvent } from 'rxjs';

        fromEvent(document, 'mousemove').subscribe((ev) => {
          console.log('Mouse event: ', ev);
        });
      </code>

      <p>
        Здесь регистрируется обработчик, который при движении мыши в пределах всего документа в консоль будет
        выводить полную информации о событии.
      </p>
    `,
    tags: ['TypeScript', 'RxJs'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 66,
    name: 'Что такое объект Observable в RxJs?',
    answer: `
      <code><em>Observable</em></code> — это последовательность событий во времени.

      <p>
        В RxJS зритель подписывается на <code>Observable</code> (зрелище).
        Подписавшийся зритель реагирует на каждое событие, которое происходит во время зрелища.
      </p>
      <p>
        Объекты RxJS <code>Observable</code> создаются либо с использованием операторов создания
        (<code>of</code>, <code>from</code>, <code>fromEvent</code>), либо через <code>new Observable</code>.
      </p>
      <p>
        Пример с оператором <code>of()</code>:
      </p>
      <code class="code">
        of('Hello').subscribe((vl) => console.log(vl));
      </code>

      <p>
        Пример с <code>new Observable</code>:
      </p>
      <code class="code">
        const obs = new Observable((sub) => {
          sub.next(1);

          setTimeout(() => {
            sub.next(3);
            sub.complete();
          }, 500);
        });

        obs.subscribe((vl) => console.log(vl));
      </code>
      <p>
        Каждый <code>Observable</code> может отправлять своим "зрителям" уведомления вызовом одного из трех методов:
      </p>
      <ul>
        <li> <code>next()</code> - отправка данных, количество вызовов не ограничено;</li>
        <li>
          <code>error()</code> - генерация ошибки, параметром указываются данные любого формата
          (строка, объект, исключение) о причине ее возникновения;
        </li>
        <li>
          <code>complete()</code> - завершение исполнения <code>Observable</code>, не принимает
          никаких параметров и не передает никакого значения.
        </li>
      </ul>

      <p>
        Но исполнение RxJS <code>Observable</code> начнется только после вызова у него метода <code>subscribe()</code>,
        который принимает функцию с передаваемыми данными в качестве аргумента.
        Вторым и третьим необязательными параметрами методу <code>subscribe()</code> можно передать функции,
        которые будут вызваны в случае ошибки или (и) завершения <code>Observable</code>.
      </p>
      <code class="code">
        const obs = new Observable((sub) => {
          sub.next(1);

          setTimeout(() => {
            sub.error(3);
          }, 500);
        });

        obs.subscribe(
          (vl) => console.log(vl),
          (err) => console.log('Error: ', err),
          () => console.log('Completed')
        );
      </code>
      <p class="info info--blue">
        Вызов <code>error()</code> или <code>complete()</code> автоматически завершает исполнение <code>Observable</code>.
      </p>
      <p>
        Количество вызовов исполнения такого объекта не ограничено, а сам он даже не знает, сколько "зрителей" получают от него данные.
      </p>
      <p>
        Метод <code>subscribe()</code> возвращает объект типа <code>Subscription</code>, который хранит текущее исполнение
        конкретного RxJS <code>Observable</code> и имеет единственный метод <code>unsubscribe()</code>
        для отмены его исполнения.
      </p>
      <code class="code">
        const sub = obs.subscribe();
        sub.unsubscribe();
      </code>
      <p>
        Вызов <code>unsubscribe()</code> нужен только для бесконечно исполняемых
        <code>Observable</code>, иначе занимаемые ими ресурсы будут освобождены только с окончанием
        работы всего приложения. А значит в процессе работы программы может произойти утечка памяти
        или могут быть созданы ненужные дублирующиеся "зрители".
      </p>
      <p>
        Например, последнее может произойти, когда пользователь зашел на страницу, инициирующую исполнение
        RxJS <code>Observable</code>, затем перешел на другой URL и вернулся обратно.
      </p>
      <p>
        Бесконечно исполняемыми <code>Observable</code> считаются те из них, которые никогда не вызывают метод
        <code>complete()</code>, даже если у них предусмотрен сценарий, при котором произойдет обращение к
        <code>error()</code>, что также завершит исполнение.
      </p>
      <p class="info info--blue">
        В Angular приложении <code>unsubscribe()</code> обычно вызывается на
        стадии жизненного цикла <code>OnDestroy()</code> того компонента, в котором используется <code>Observable</code>.
      </p>
    `,
    tags: ['TypeScript', 'Observables', 'Async', 'RxJs'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 67,
    name: 'Что такое Subject? Какие бывают виды?',
    answer: `
      <h3>Что такое Subject</h3>

      <p>
        <span class="accent">Subject</span> - это разновидность объектов <code>Observable</code> в RxJS.
        <code>Subject</code> одновременно является и зрителем и зрелищем - соответственно, имеет методы как зрелища, так и зрителя.
        <br>
        Особенность <code>Subject</code> в том, что он может отправлять данные одновременно множеству "потребителей",
        которые могут регистрироваться уже в процессе исполнения <code>Subject</code>,
        в то время как исполнение стандартного <code>Observable</code> осуществляется уникально для каждого его вызова.
      </p>

      <p>
        Объекты RxJS Subject реализуют принцип работы событий, поддерживая возможность регистрировать неограниченное
        количество обработчиков отправляемых ими данных.
      </p>

      <p>
        Рассмотрим пример.
      </p>

      <code class="code">
        const sbj = new Subject<number>();

        sbj.subscribe((vl) => console.log('1st: $\{ vl }'));
        sbj.next(3);
        sbj.subscribe((vl) => console.log('2nd: $\{ vl }'));
        sbj.next(9);

        /*
        Результат  в консоли:

        1st: 3
        1st: 9
        2nd: 9
        */
      </code>

      <p>
        Создание происходит с помощью <code>new Subject()</code>. Далее регистрируются обработчики вызовом метода
        <code>subscribe()</code>, принимающего подобно обычному <code>Observable</code> три функции:
        <code>next()</code>, <code>error()</code> и <code>complete()</code>.
      </p>

      <p>
        Но здесь обработчики исполняются не сразу в момент вызова <code>subscribe()</code>,
        а после обращения к методам <code>next()</code>, <code>error()</code> или
        <code>complete()</code> самого объекта.
      </p>

      <p>
        Причем регистрация новых "потребителей" может происходить в любой момент времени. Но получать данные они
        будут уже начиная со следующей рассылки.
      </p>

      <p class="info info--blue">
        Объекты RxJS Subject по умолчанию являются бесконечно исполняемыми, так как заранее неизвестно,
        когда будет вызов complete() и будет ли он вызван вообще. Поэтому не стоит забывать про unsubscribe().
      </p>

      <h3>В RxJS имеется несколько разновидностей Subject</h3>
      <ul>
        <li><a href="https://rxjs.dev/api/index/class/BehaviorSubject"><code>BehaviorSubject</code></a>,</li>
        <li><a href="https://rxjs.dev/api/index/class/ReplaySubject"><code>ReplaySubject</code></a>,</li>
        <li><a href="https://rxjs.dev/api/index/class/AsyncSubject"><code>AsyncSubject</code></a>.</li>
      </ul>

      <h3>BehaviorSubject</h3>

      <p>
        <code>BehaviorSubject</code> хранит в себе последнее отправленное им значение.
        Так, каждому новому обработчику в момент регистрации (вызов <code>subscribe()</code>) будет отправлено это значение.
      </p>

      <p>
        Начальное значение задается в момент создания RxJS <code>BehaviorSubject</code>.
      </p>

      <code class="code">
        const sbj = new BehaviorSubject<number>(5);

        sbj.subscribe((vl) => console.log('1st: $\{ vl }'));
        sbj.subscribe((vl) => console.log('2nd: $\{ vl }'));
        sbj.next(7);

        /*
        Результат  в консоли:

        1st: 5
        2nd: 5
        1st: 7
        2nd: 7
        */
      </code>

      <h3>ReplaySubject</h3>

      <p>
        В отличие от <code>BehaviorSubject</code> объекты <code>ReplaySubject</code>
        способны хранить заданное количество последних значений, которое задается при создании объекта.
      </p>

      <code class="code">
        const sbj = new ReplaySubject(2);
        /*
          Внимание! Цифра 2 в скобках - количество последних обновлений, которые получит новый подписчик.
          Если его убрать, то будут продублированы все, а так - только 2 последних
        */

        sbj.next(5);

        sbj.subscribe((vl) => console.log('1st: $\{ vl }'));

        sbj.next(6);
        sbj.next(7);

        sbj.subscribe((vl) => console.log('2nd: $\{ vl }'));

        /*
        Результат  в консоли:

        1st: 5
        1st: 6
        1st: 7
        2nd: 6
        2nd: 7
        */
      </code>

      <p>
        Все новые "потребители" сразу же получают по очереди все
        <code>n</code> (в данном случае - 2) указанных значений RxJS <code>ReplaySubject</code>.
      </p>

      <h3>AsyncSubject</h3>

      <p>
        В случае с <code>AsyncSubject</code> "потребителям" передается только последнее значение объекта и
        только, когда он завершит свое выполнение (вызов <code>complete()</code>).
      </p>

      <code class="code">
        const sbj = new AsyncSubject();

        sbj.subscribe((vl) => console.log('Async: $\{ vl }'));

        sbj.next(7);
        sbj.next(8);
        sbj.next(9);

        setTimeout(() => sbj.complete(), 3000);

        /*
        Результат  в консоли (по истечении 3 сек):

        Async: 9
        */
      </code>
    `,
    tags: ['TypeScript', 'Observables', 'Async', 'RxJs'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 68,
    name: 'Observables VS Subject - различия',
    answer: `
      <p>
        <span class="accent">Subject</span> - это разновидность объектов <code>Observable</code> в RxJS.
        <code>Subject</code> одновременно является и зрителум и зрелищем - соответственно, имеет методы как зрелища, так и зрителя.
        <br>
        Особенность <code>Subject</code> состоит в том, что здесь обработчики исполняются не сразу в момент вызова
        <code>subscribe()</code>, а после обращения к методам <code>next()</code>, <code>error()</code> или
        <code>complete()</code> самого объекта.
      </p>

      <p>
        <code>Subject</code> имеет несколько типов, поведение которых отличается между собой.
        Соответственно, их использование зависит от конкретных целей.
      </p>

      <ul>
        <li>
          <a href="https://rxjs.dev/api/index/class/BehaviorSubject"><code>BehaviorSubject</code></a> -
          хранит в себе последнее отправленное им значение.
        </li>
        <li>
          <a href="https://rxjs.dev/api/index/class/ReplaySubject"><code>ReplaySubject</code></a> -
          способны хранить заданное количество последних значений, которое задается при создании объекта.
        </li>
        <li>
          <a href="https://rxjs.dev/api/index/class/AsyncSubject"><code>AsyncSubject</code></a> -
          возвращает только последнее значение объекта и только, когда он завершит свое выполнение (вызов complete()).
        </li>
      </ul>

      <p>
        <span class="accent">Observable</span> - это просто некоторый асинхронный поток данных.
        <br>
        Данный механизм позволяет создавать объекты, инициирующие асинхронные потоки (stream или observable)
        и объекты, которые за ними наблюдают (observer).
      </p>

      <code class="code">
        import { Observable } from 'rxjs';

        const observable = new Observable(subscriber => {
          subscriber.next(1);
          subscriber.next(2);
          subscriber.next(3);
          setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
          }, 1000);
        });

        console.log('just before subscribe');
        observable.subscribe({
          next(x) { console.log('got value ' + x); },
          error(err) { console.error('something wrong occurred: ' + err); },
          complete() { console.log('done'); }
        });

        console.log('just after subscribe');
      </code>

      <p>
        Выполнение кода, описанного выше, выведет в консоли следующее:
      </p>

      <code class="code">
        just before subscribe
        got value 1
        got value 2
        got value 3
        just after subscribe
        got value 4
        done
      </code>

      <h3>
        Подытожим.
      </h3>

      <p>
        Используя <code>Subject</code>, мы можем не только получать изменения, подписавшись на них,
        но и транслировать их через <code>next()</code>.

        Если же говорить о <code>Observable</code>, то тут всё проще - они позволяют транслировать события только в момент инициализации.
        Таким образом, в коде мы можем использовать их ТОЛЬКО для получения изменений, используя метод <code>subscribe()</code>.
      </p>
    `,
    tags: ['TypeScript', 'Observables', 'Async', 'RxJs'],
    structure: [
      {
        name: 'Специфика Subject',
        isChecked: false,
      },
      {
        name: 'Различия поведения и виды Subject',
        isChecked: false,
      },
      {
        name: 'Специфика Observable',
        isChecked: false,
      },
      {
        name: 'Observable - только на получение данных, Subject - ещё и для распространения',
        isChecked: false,
      }
    ],
  },
  {
    id: 69,
    name: 'Zone.js. Что это и для чего нужно?',
    answer: ``,
    tags: ['TypeScript', 'TS mechanics', 'Async'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 70,
    name: 'Механизм Change Detection',
    answer: ``,
    tags: ['TypeScript', 'TS mechanics'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 71,
    name: 'Lifecycle Angular (Жизненный цикл компонента)',
    answer: ``,
    tags: ['TypeScript', 'Angular'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 72,
    name: 'Что такое Enums? Их применение',
    answer: ``,
    tags: ['TypeScript', 'Angular'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 73,
    name: 'Class, Interface. Различия и применение',
    answer: ``,
    tags: ['TypeScript', 'Angular', 'ООП'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 74,
    name: 'Что такое Generics? Их применение',
    answer: ``,
    tags: ['TypeScript', 'Angular'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 75,
    name: 'Что такое never в TypeScript?',
    answer: ``,
    tags: ['TypeScript', 'Angular'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 76,
    name: 'Когда использовать .asObservable() в RxJs?',
    answer: `
      <p>
        Смысл использования <code>Subject.prototype.asObservable()</code> состоит в том, чтобы предотвратить
        утечку &quot;observer side&quot; из API (предотвратить утечку абстракции, когда вы не хотите,
        чтобы кто-либо мог вызвать метод <code>next()</code> у возвращаемого значения).
      </p>
      <code class="code">
        const myAPI = {
          getData: () =&gt; {
            const subject = new Subject();
            const source = new SomeWeirdDataSource();
            source.onMessage = (data) =&gt; subject.next({ type: &#39;message&#39;, data });
            source.onOtherMessage = (data) =&gt; subject.next({ type: &#39;othermessage&#39;, data });
            return subject.asObservable();
          }
        };
      </code>

      <p>Теперь, когда кто-то получит результат от <code>myAPI.getData()</code>&nbsp;, он не может вызвать метод next():</p>

      <code class="code">
        const result = myAPI.getData();
        result.next(&#39;LOL hax!&#39;); // throws an error because next doesn&#39;t exist
      </code>

      <p>
        В целом, это хорошая практика - инкапсулировать логику по управлению потоками данных внутри сервисов и не давать
        возможности менять эти данные извне без особой необходимости.
      </p>

      <p>
        Однако, в этом подходе также есть пара моментов, которые стоит учитывать. Во-первых,&nbsp;
        <code>getData()</code>&nbsp;
        не ленив, как большинство наблюдаемых, он немедленно создаст базовый источник данных&nbsp;
        <code>SomeWeirdDataSource</code>&nbsp;
        (и, предположительно, некоторые побочные эффекты).&nbsp;
        Во-вторых, на выходе&nbsp;<code>getData()</code> возвращает <code>return subject.asObservable();</code>,
        которое каждый раз будет новым наблюдаемым.;
      </p>

      <p>
        Таким образом, использовать этот подход следует с осторожностью.
        Также следует вынести часть с созданием&nbsp;<code>new Subject</code> за пределы этой функции,
        дабы не создавать новую сущность при каждом вызове (например, производить инициализацию
        <code>Subject</code> в корне компонента).
      </p>
    `,
    tags: ['TypeScript', 'Angular', 'RxJs'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 77,
    name: 'Основные принципы ООП',
    answer: ``,
    tags: ['programming', 'ООП'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 78,
    name: 'Знания в архитектуре - паттерны проектирования',
    answer: ``,
    tags: ['programming', 'best-practice'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 79,
    name: 'SOLID. Что это такое и зачем?',
    answer: ``,
    tags: ['programming', 'best-practice', 'ООП'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 80,
    name: 'Протокол HTTP. Что это такое и с чем его едят?',
    answer: ``,
    tags: ['protocol', 'internet'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 81,
    name: 'CORS. Что это такое и с чем его едят?',
    answer: ``,
    tags: ['internet'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
  {
    id: 82,
    name: 'Специальные селекторы. Псевдоклассы :host, :host-context и псевдоэлемент ::ng-deep',
    answer: `
      <p>
        Стили компонентов имеют несколько специальных селекторов из мира shadow DOM
        (описаны на странице <code>CSS Scoping Module Level 1</code> на сайте W3C).
        Давайте познакомимся с этими селекторами поближе.
      </p>

      <h3>:host</h3>
      <p>
        Каждый компонент связан с элементом в верстке, который носит его имя-селектор.
        Этот элемент называется хост-элементом, в него рендерится шаблон.
        Селектор псевдокласса <code>:host</code> может использоваться чтобы создавать стили
        для самого элемента хоста, а не элементов внутри него.
      </p>
      <p>
        Стили, описанные в <code>:host</code> будут нацелены на основной элемент компонента.
        Любое правило, примененное к этому селектору псевдокласса, повлияет на основной элемент и все
        его потомки.
      </p>
      <p>
        Селектор псевдокласса <code>:host</code> нацелен только на хост-элемент компонента.
        Любые стили в блоке <code>:host</code> дочернего компонента не повлияют на родительские компоненты.
      </p>
      <p>
        Используйте форму функции для условного применения стилей хоста, включив другой селектор в круглые скобки после <code>:host</code>.
      </p>
      <code class="code">
        :host {
          font-style: italic;
        }

        :host(.active) {
          font-weight: bold;
        }
      </code>
      <p>
        Селектор псевдокласса <code>:host</code> можно комбинировать с другими селекторами.
      </p>

      <h3>:host-context</h3>
      <p>
        Иногда полезно применять стили к элементам в шаблоне компонента
        на основе некоторого условия в элементе-предке основного элемента.
        Например, класс цветовой темы CSS может быть применен к элементу документа <code>< body ></code>,
        и вы хотите изменить внешний вид вашего компонента на основе этого.
      </p>
      <p>
        Селектор псевдокласса <code>:host-context()</code> работает так же, как
        функциональная форма <code>:host()</code>. Селектор <code>:host-context()</code> ищет класс CSS в
        любом предке хост-элемента компонента, вплоть до корня документа.
      </p>
      <code class="code">
        :host-context(.active) {
          font-style: italic;
        }
      </code>
      <p>
        Обратите внимание, что будут затронуты только основной элемент и его потомки, а не предок с назначенным активным классом.
      </p>

      <h3>(deprecated) /deep/, >>>, and ::ng-deep</h3>
      <p>
        Стили компонентов обычно применяются только к HTML в собственном шаблоне компонента.
      </p>
      <p>
        Применение псевдокласса <code>::ng-deep</code> к любому правилу CSS полностью отключает инкапсуляцию
        представления для этого правила. При этом стиль становится глобальным стилем.
        Чтобы применить указанный стиль к текущему компоненту и всем его потомкам,
        обязательно включите селектор <code>:host</code> перед <code>::ng-deep</code>.
        Если псевдокласса <code>::ng-deep</code> используется без селектора псевдокласса <code>:host</code>,
        стиль может просачиваться в другие компоненты.
      </p>
      <p>
        Следующий пример предназначен для всех элементов <code>< h3 ></code>, начиная с основного
        элемента и вниз по дереву его дочерних DOM-элементов.
      </p>
      <code class="code">
        :host ::ng-deep h3 {
          font-style: italic;
        }
      </code>
      <p>
        Псевдокласса <code>/deep/</code> также имеет псевдонимы <code>>>></code> и <code>::ng-deep</code>.
      </p>
      <p class="info info--orange">
        Селектор псевдокласса потомков <code>::ng-deep</code> устарел, и его поддержка прекращается в основных браузерах и инструментах.
        Таким образом, мы планируем отказаться от поддержки в Angular
        (для всех 3 псевдоклассов: <code>/deep/</code>, <code>>>></code> и <code>::ng-deep</code>).<br>
        До тех пор следует отдавать предпочтение <code>::ng-deep</code> для более широкой совместимости с инструментами.
      </p>
    `,
    tags: ['Angular', 'html', 'markup'],
    structure: [
      {
        name: 'Теги HTML',
        isChecked: false,
      }
    ],
  },
];
