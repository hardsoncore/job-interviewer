<p>
  <span class="accent">Операторы фильтрации</span> стоят на страже и решают, какие из этих значений дойдут до subscribe.
  Они отбрасывают ненужные значения и пропускают только те, которые соответствуют определенным условиям.
</p>

<h3>filter</h3>
<p>
  Оператор <code>filter</code> позволяет пропускать только те значения, которые удовлетворяют определенному условию.
  Например, если у вас есть поток чисел, и вы хотите пропустить только четные числа, вы можете использовать <code>filter</code> следующим образом:
</p>

<code class="code">
  import { of } from 'rxjs';
  import { filter } from 'rxjs/operators';

  of(1, 2, 3, 4, 5).pipe(
    filter(value => value % 2 === 0)
  ).subscribe(value => console.log(value));
  // → 2, 4, complete
</code>

<h3>take</h3>
<p>
  Оператор <code>take</code> позволяет пропустить только первые N значений из потока.
  Например, если вы хотите пропустить только первые 3 значения, вы можете использовать <code>take</code> следующим образом:
</p>
<code class="code">
  import { of } from 'rxjs';
  import { take } from 'rxjs/operators';

  of(1, 2, 3, 4, 5).pipe(
    take(3)
  ).subscribe(value => console.log(value));
  // → 1, 2, 3, complete
</code>

<h3>takeUntil</h3>
<p>
  Оператор <code>takeUntil</code> позволяет пропустить значения из потока до тех пор, пока другой поток не выдаст значение.
  <br>
  Это полезно, когда вы хотите пропустить значения до определенного события или условия.
  <br>
  Например, если у вас есть поток чисел, и вы хотите пропустить значения до тех пор, пока другой поток не выдаст значение,
  вы можете использовать <code>takeUntil</code> следующим образом:
</p>
<code class="code">
  import { of, Subject } from 'rxjs';
  import { takeUntil } from 'rxjs/operators';

  const stop$ = new Subject();

  of(1, 2, 3, 4, 5).pipe(
    takeUntil(stop$)
  ).subscribe(value => console.log(value));

  // В какой-то момент в будущем
  stop$.next();
  // → 1, 2, 3, (stop$ emits) complete
</code>

<h3>skip</h3>
<p>
  Оператор <code>skip</code> позволяет пропустить первые N значений из потока и пропустить их, пропуская только последующие значения.
  <br>
  Например, если вы хотите пропустить первые 2 значения, вы можете использовать <code>skip</code> следующим образом:
</p>
<code class="code">
  import { of } from 'rxjs';
  import { skip } from 'rxjs/operators';

  of(1, 2, 3, 4, 5).pipe(
    skip(2)
  ).subscribe(value => console.log(value));
  // → 3, 4, 5, complete
</code>

<h3>distinctUntilChanged</h3>
<p>
  Оператор <code>distinctUntilChanged</code> пропускает только те значения, которые отличаются от предыдущего значения.
  Это полезно для устранения повторяющихся значений в потоке.
  <br>
  Например, если у вас есть поток чисел, и вы хотите пропустить повторяющиеся значения, вы можете использовать <code>distinctUntilChanged</code> следующим образом:
</p>
<code class="code">
  import { of } from 'rxjs';
  import { distinctUntilChanged } from 'rxjs/operators';

  of(1, 1, 2, 2, 3, 3).pipe(
    distinctUntilChanged()
  ).subscribe(value => console.log(value));
  // → 1, 2, 3, complete
</code>
