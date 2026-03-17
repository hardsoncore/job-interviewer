<h3>ECMAScript 2015 (ES6)</h3>

<p>
  Почему все говорят до сих пор о ES6 (ECMAScript 2015)?
  <br>
  Это обновление стало самым масштабным в истории языка (so far), превратив JS из «языка для сценариев» в серьезный инструмент для разработки крупных приложений.
</p>

<p>
  Так что же нового появилось в языке с выходом ES6?
</p>

<h3>1. Переменные: let и const</h3>
<p>Вместо переменных глобальной/функциональной области видимости(<code>var</code>) пришли переменные с блочной областью видимости (<code>let</code> и <code>const</code>).</p>

<p>Также появилось понятие <span class="accent">Temporal Dead Zone</span> - это период в JavaScript между началом области видимости (блока) и моментом инициализации переменной, объявленной через <code>let</code> или <code>const</code>. В этой зоне переменная уже существует, но недоступна, и любая попытка обратиться к ней до строки с объявлением вызывает ошибку <code>ReferenceError</code>.</p>

<h3>2. Стрелочные функции (Arrow Functions)</h3>
<p>Короче синтаксис и другое поведение <code>this</code>:</p>

<code class="code">
  const add = (a, b) => a + b;
</code>

<h4>Ключевые отличия стрелочных функций от обычных:</h4>
<ul>
  <li>Стрелочные функции не имеют собственного контекста <code>this</code>. Они наследуют его из окружающего лексического контекста.</li>
  <li>Стрелочные функции не имеют собственного объекта <code>arguments</code>.</li>
  <li>Стрелочные функции не имеют доступа к объекту <code>super</code> и не могут использоваться в качестве конструкторов с ключевым словом <code>new</code>.</li>
</ul>

<h3>3. Шаблонные строки (Template Literals)</h3>
<p>Использование обратных кавычек <code>`</code> для интерполяции:</p>

<code class="code">
  const name = 'Diuna';
  console.log(`Привет, ${name}!`); // Многострочность поддерживается из коробки
</code>

<h3>4. Деструктуризация (Destructuring)</h3>
<p>Удобное извлечение данных из массивов и объектов:</p>

<code class="code">
  // Объект
  const { name, age } = user;
  // Массив
  const [first, second] = colors;
</code>

<h3>5. Spread и Rest операторы (...)</h3>
<p><span class="accent">Spread</span> (расширение): «распаковывает» массив или объект (копирование, слияние).</p>
<p><span class="accent">Rest</span> (остаток): собирает оставшиеся аргументы функции в массив.</p>

<code class="code">
  const combinedArr = [...arr1, ...arr2]; // Spread
  function sum(...args) { return args.reduce((a, b) => a + b); } // Rest
</code>

<h3>6. Параметры по умолчанию</h3>
<p>Теперь можно задавать значения прямо в объявлении функции:</p>

<code class="code">
  function greet(name = 'Guest') { ... }
</code>

<h3>7. Классы (Classes)</h3>
<p>Синтаксический сахар над прототипным наследованием. Появились ключевые слова <code>class</code>, <code>constructor</code>, <code>static</code>, <code>extends</code>, <code>super</code>.</p>

<code class="code">
  class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(`${this.name} издает звук`); }
  }
</code>

<h3>8. Модули (Import / Export)</h3>
<p>Официальная поддержка модульности на уровне языка:</p>

<code class="code">
  export const pi = 3.14;
  import { pi } from './math.js';
</code>

<h3>9. Промисы (Promises)</h3>
<p>Встроенный механизм для работы с асинхронным кодом, избавляющий от «callback hell».</p>

<p>Состояния: <code>pending</code>, <code>fulfilled</code>, <code>rejected</code>.</p>

<h3>10. Улучшения объектов</h3>
<p>Сокращенная запись свойств: <code>{ name: name } → { name }</code>.</p>

<p>Вычисляемые имена свойств: <code>[propName]: value</code>.</p>

<h3>11. Новые типы данных и коллекции</h3>
<p><code>Map</code>: коллекция пар ключ-значение (ключом может быть объект).</p>
<p><code>Set</code>: коллекция уникальных значений.</p>
<p><code>Symbol</code>: новый примитив для создания уникальных идентификаторов.</p>
