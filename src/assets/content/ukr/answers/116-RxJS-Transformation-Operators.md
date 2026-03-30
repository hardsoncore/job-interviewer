<p>
  <span class="accent">Оператори трансформації</span> дозволяють змінювати значення, що проходять через потік, створюючи нові потоки з перетвореними даними.
</p>

<h3>map</h3>
<p>
  Оператор <code>map</code> дозволяє застосовувати функцію до кожного значення, що проходить через потік, і повертати нове значення, створюючи тим самим новий потік із перетвореними даними.
</p>
<code class="code">
  import { of } from 'rxjs';
  import { map } from 'rxjs/operators';

  of(1, 2, 3).pipe(
    map(value => value * 2)
  ).subscribe(result => console.log(result));
  // → 2
  // → 4
  // → 6
</code>

<h3>mapTo</h3>
<p>
  Оператор <code>mapTo</code> дозволяє замінити кожне значення, що проходить через потік, на фіксоване значення, створюючи новий потік, який емітує це фіксоване значення для кожного вхідного значення.
</p>
<code class="code">
  import { of } from 'rxjs';
  import { mapTo } from 'rxjs/operators';

  of(1, 2, 3).pipe(
    mapTo('Hello')
  ).subscribe(result => console.log(result));
  // → "Hello"
  // → "Hello"
  // → "Hello"
</code>

<h3>pluck</h3>
<p>
  Оператор <code>pluck</code> дозволяє витягувати певну властивість з об'єктів, що проходять через потік, створюючи новий потік, який емітує значення цієї властивості.
</p>
<code class="code">
  import { of } from 'rxjs';
  import { pluck } from 'rxjs/operators';

  of({ name: 'Alice' }, { name: 'Bob' }).pipe(
    pluck('name')
  ).subscribe(result => console.log(result));
  // → "Alice"
  // → "Bob"
</code>

<h3>scan</h3>
<p>
  Оператор <code>scan</code> дозволяє накопичувати значення, що проходять через потік, використовуючи функцію акумулятора, яка приймає поточне накопичене значення та нове вхідне значення, і повертає нове накопичене значення. Це створює новий потік, який емітує накопичені значення.
</p>
<code class="code">
  import { of } from 'rxjs';
  import { scan } from 'rxjs/operators';

  of(1, 2, 3).pipe(
    scan((acc, value) => acc + value, 0)
  ).subscribe(result => console.log(result));
  // → 1
  // → 3
  // → 6
</code>
