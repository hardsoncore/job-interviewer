<p>
  <span class="accent">Операторы трансформации</span> позволяют изменять значения, проходящие через поток, создавая новые потоки с преобразованными данными.
</p>

<h3>map</h3>
<p>
  Оператор <code>map</code> позволяет применять функцию к каждому значению, проходящему через поток, и возвращать новое значение, создавая тем самым новый поток с преобразованными данными.
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
  Оператор <code>mapTo</code> позволяет заменить каждое значение, проходящее через поток, на фиксированное значение, создавая новый поток, который эмитирует это фиксированное значение для каждого входящего значения.
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
  Оператор <code>pluck</code> позволяет извлекать определенное свойство из объектов, проходящих через поток, создавая новый поток, который эмитирует значения этого свойства.
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
  Оператор <code>scan</code> позволяет накапливать значения, проходящие через поток, используя функцию аккумулятора, которая принимает текущее накопленное значение и новое входящее значение, и возвращает новое накопленное значение. Это создает новый поток, который эмитирует накопленные значения.
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
