<h3>Що таке Subject</h3>

<p>
  <span class="accent">Subject</span> - це різновид об'єктів <code>Observable</code> в RxJS.
  <code>Subject</code> одночасно є і глядачем, і видовищем — відповідно, має методи як видовища, так і глядача.
  <br>
  Особливість <code>Subject</code> полягає в тому, що він може відправляти дані одночасно багатьом "споживачам",
  які можуть реєструватися вже в процесі виконання <code>Subject</code>,
  тоді як виконання стандартного <code>Observable</code> здійснюється унікально для кожного його виклику.
</p>

<p>
  Об'єкти RxJS <code>Subject</code> реалізують принцип роботи подій, підтримуючи можливість реєструвати необмежену
  кількість обробників даних, які вони відправляють.
</p>

<p>
  Розглянемо приклад:
</p>

<code class="code">
  const sbj = new Subject&lt;number>();

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));
  sbj.next(3);
  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));
  sbj.next(9);

  /*
  Результат у консолі:

  1st: 3
  1st: 9
  2nd: 9
  */
</code>

<p>
  Створення нового об'єкта <code>Subject</code> відбувається за допомогою <code>new Subject()</code>, який приймає, подібно до звичайного <code>Observable</code>, три функції: <code>next()</code>, <code>error()</code> та <code>complete()</code>.
  <br>
  Далі реєструються обробники викликом методу
  <code>subscribe()</code>
</p>

<p>
  Але тут обробники виконуються не відразу в момент виклику <code>subscribe()</code>,
  а після звернення до методів <code>next()</code>, <code>error()</code> або
  <code>complete()</code> самого об'єкта.
</p>

<p>
  До того ж реєстрація нових "споживачів" може відбуватися в будь-який момент часу. Але отримувати дані вони
  будуть вже починаючи з наступної розсилки.
</p>

<p class="info info--blue">
  Об'єкти RxJS Subject за замовчуванням виконуються нескінченно, оскільки заздалегідь невідомо,
  коли буде виклик complete() і чи буде він викликаний взагалі. Тому не варто забувати про unsubscribe().
</p>

<h3>У RxJS є кілька різновидів Subject</h3>
<ul>
  <li><a href="https://rxjs.dev/api/index/class/BehaviorSubject"><code>BehaviorSubject</code></a>,</li>
  <li><a href="https://rxjs.dev/api/index/class/ReplaySubject"><code>ReplaySubject</code></a>,</li>
  <li><a href="https://rxjs.dev/api/index/class/AsyncSubject"><code>AsyncSubject</code></a>.</li>
</ul>

<h3>BehaviorSubject</h3>

<p>
  <code>BehaviorSubject</code> зберігає в собі останнє відправлене ним значення.
  Так, кожному новому обробнику в момент реєстрації (виклик <code>subscribe()</code>) буде відправлено це значення.
</p>

<p>
  Початкове значення задається в момент створення RxJS <code>BehaviorSubject</code>.
</p>

<code class="code">
  const sbj = new BehaviorSubject&lt;number&gt;(5);

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));
  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));
  sbj.next(7);

  /*
  Результат у консолі:

  1st: 5
  2nd: 5
  1st: 7
  2nd: 7
  */
</code>

<h3>ReplaySubject</h3>

<p>
  На відміну від <code>BehaviorSubject</code>, об'єкти <code>ReplaySubject</code>
  здатні зберігати задану кількість останніх значень, яка вказується при створенні об'єкта.
</p>

<code class="code">
  const sbj = new ReplaySubject(2);
  /*
    Увага! Цифра 2 в дужках - кількість останніх оновлень, які отримає новий підписник.
    Якщо її прибрати, то будуть продубльовані всі, а так - лише 2 останні
  */

  sbj.next(5);

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));

  sbj.next(6);
  sbj.next(7);

  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));

  /*
  Результат у консолі:

  1st: 5
  1st: 6
  1st: 7
  2nd: 6
  2nd: 7
  */
</code>

<p>
  Всі нові "споживачі" відразу ж отримують по черзі всі
  <code>n</code> (у даному випадку - 2) зазначених значень RxJS <code>ReplaySubject</code>.
</p>

<h3>AsyncSubject</h3>

<p>
  У випадку з <code>AsyncSubject</code> "споживачам" передається лише останнє значення об'єкта і
  тільки тоді, коли він завершить своє виконання (виклик <code>complete()</code>).
</p>

<code class="code">
  const sbj = new AsyncSubject();

  sbj.subscribe((vl) => console.log(`Async: ${ vl }`));

  sbj.next(7);
  sbj.next(8);
  sbj.next(9);

  setTimeout(() => sbj.complete(), 3000);

  /*
  Результат у консолі (після 3 сек):

  Async: 9
  */
</code>
