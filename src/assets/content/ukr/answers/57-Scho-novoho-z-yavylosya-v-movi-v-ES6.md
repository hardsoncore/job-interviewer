<h3>ECMAScript 2015 (ES6)</h3>

<p>
  Чому всі досі говорять про ES6 (ECMAScript 2015)?
  <br>
  Це оновлення стало наймасштабнішим в історії мови (so far), перетворивши JS із «мови для сценаріїв» на серйозний інструмент для розробки великих застосунків.
</p>

<p>
  То що ж нового з'явилося в мові з виходом ES6?
</p>

<h3>1. Змінні: let та const</h3>
<p>Замість змінних глобальної/функціональної області видимості (<code>var</code>) прийшли змінні з блочною областю видимості (<code>let</code> та <code>const</code>).</p>

<p>Також з'явилося поняття <span class="accent">Temporal Dead Zone</span> (тимчасова мертва зона) — це період у JavaScript між початком області видимості (блоку) і моментом ініціалізації змінної, оголошеної через <code>let</code> або <code>const</code>. У цій зоні змінна вже існує, але недоступна, і будь-яка спроба звернутися до неї до рядка з оголошенням викликає помилку <code>ReferenceError</code>.</p>

<h3>2. Стрілкові функції (Arrow Functions)</h3>
<p>Коротший синтаксис та інша поведінка <code>this</code>:</p>

<code class="code">
  const add = (a, b) => a + b;
</code>

<h4>Ключові відмінності стрілкових функцій від звичайних:</h4>
<ul>
  <li>Стрілкові функції не мають власного контексту <code>this</code>. Вони успадковують його з навколишнього лексичного контексту.</li>
  <li>Стрілкові функції не мають власного об'єкта <code>arguments</code>.</li>
  <li>Стрілкові функції не мають доступу до об'єкта <code>super</code> і не можуть використовуватися як конструктори з ключовим словом <code>new</code>.</li>
</ul>

<h3>3. Шаблонні рядки (Template Literals)</h3>
<p>Використання зворотних лапок <code>`</code> для інтерполяції:</p>

<code class="code">
  const name = 'Diuna';
  console.log(`Привіт, ${name}!`); // Багаторядковість підтримується з коробки
</code>

<h3>4. Деструктуризація (Destructuring)</h3>
<p>Зручне вилучення даних з масивів та об'єктів:</p>

<code class="code">
  // Об'єкт
  const { name, age } = user;
  // Масив
  const [first, second] = colors;
</code>

<h3>5. Spread та Rest оператори (...)</h3>
<p><span class="accent">Spread</span> (розширення): «розпаковує» масив або об'єкт (копіювання, злиття).</p>
<p><span class="accent">Rest</span> (залишок): збирає решту аргументів функції в масив.</p>

<code class="code">
  const combinedArr = [...arr1, ...arr2]; // Spread
  function sum(...args) { return args.reduce((a, b) => a + b); } // Rest
</code>

<h3>6. Параметри за замовчуванням</h3>
<p>Тепер можна задавати значення прямо в оголошенні функції:</p>

<code class="code">
  function greet(name = 'Guest') { ... }
</code>

<h3>7. Класи (Classes)</h3>
<p>Синтаксичний цукор над прототипним успадкуванням. З'явилися ключові слова <code>class</code>, <code>constructor</code>, <code>static</code>, <code>extends</code>, <code>super</code>.</p>

<code class="code">
  class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(`${this.name} видає звук`); }
  }
</code>

<h3>8. Модулі (Import / Export)</h3>
<p>Офіційна підтримка модульності на рівні мови:</p>

<code class="code">
  export const pi = 3.14;
  import { pi } from './math.js';
</code>

<h3>9. Проміси (Promises)</h3>
<p>Вбудований механізм для роботи з асинхронним кодом, що рятує від «callback hell» (пекла колбеків).</p>

<p>Стани: <code>pending</code>, <code>fulfilled</code>, <code>rejected</code>.</p>

<h3>10. Покращення об'єктів</h3>
<p>Скорочений запис властивостей: <code>{ name: name } → { name }</code>.</p>

<p>Обчислювані імена властивостей: <code>[propName]: value</code>.</p>

<h3>11. Нові типи даних та колекції</h3>
<p><code>Map</code>: колекція пар ключ-значення (ключем може бути об'єкт).</p>
<p><code>Set</code>: колекція унікальних значень.</p>
<p><code>Symbol</code>: новий примітив для створення унікальних ідентифікаторів.</p>
