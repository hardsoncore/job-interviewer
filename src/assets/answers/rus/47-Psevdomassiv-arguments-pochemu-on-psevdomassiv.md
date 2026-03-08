
<h3>Псевдомассив arguments</h3>

<p>
  Внутри любой обычной функции (объявленной через <code>function</code>) автоматически доступен специальный
  объект <code>arguments</code>.
  </br>
  Он содержит все аргументы, которые были переданы в функцию при её вызове, независимо от того, сколько
  параметров было указано при её объявлении.
</p>

<code class="code">
  function showArgs() {
    console.log(arguments[0]); // 'Hello'
    console.log(arguments[1]); // 42
    console.log(arguments.length); // 2
  }

  showArgs('Hello', 42);
</code>

<h3>Почему он называется «псевдомассивом» (Array-like)?</h3>

<p>
  Главная причина кроется в его прототипе. arguments выглядит и ведет себя как массив, но им не является.
</p>


<p><b>Что делает его похожим на массив:</b></p>
<ul>
  <li>У него есть свойство length, а его элементы проиндексированы начиная с нуля (arguments[0], arguments[1]).</li>
  <li>Их можно перебирать в цикле for.</li>
</ul>

<p><b>Что делает его "псевдо":</b></p>
<ul>
  <li>У него нет встроенных методов массива.</li>
  <li>Его прототипом является базовый Object, а не Array.prototype.</li>
  <li>Поэтому ты не можешь вызвать на нем .map(), .filter(), .reduce() или .forEach().</li>
</ul>

<h3>Arguments VS Arrow Functions</h3>

<p class="info info--orange">
  Стрелочные функции не имеют своего объекта <code>arguments</code>
</p>

<p>
  Если ты обратишься к <code>arguments</code> внутри стрелочной функции,
  она попытается найти его во внешней области видимости (так же, как она ищет <code>this</code>).
</p>

<code class="code">
  function wrapper() {
    const arrow = () => console.log(arguments[0]);
    arrow(); // Выведет 'Test', взяв arguments из wrapper
  }
  wrapper('Test');
</code>

<h3>Современные альтернативы</h3>

<p>
  В современном JavaScript объект <code>arguments</code> используется крайне редко.
  Ему на смену пришел <code>rest-оператор (...)</code>, который собирает все переданные аргументы сразу в настоящий массив.
</p>

<code class="code">
  // ...args — это полноценный массив прямо из коробки
  function modernArgs(...args) {
    return args.filter(x => x > 10);
  }
  modernArgs(5, 15, 20); // [15, 20]
</code>
    