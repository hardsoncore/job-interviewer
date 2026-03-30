<p>
  <span class="accent">Оператори фільтрації</span> стоять на сторожі та вирішують, які з цих значень дійдуть до subscribe.
  Вони відкидають непотрібні значення і пропускають лише ті, що відповідають певним умовам.
</p>

<h3>filter</h3>
<p>
  Оператор <code>filter</code> дозволяє пропускати лише ті значення, які задовольняють певну умову.
  Наприклад, якщо у вас є потік чисел, і ви хочете пропустити далі лише парні числа, ви можете використати <code>filter</code> наступним чином:
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
  Оператор <code>take</code> дозволяє отримати лише перші N значень із потоку.
  Наприклад, якщо ви хочете взяти лише перші 3 значення, ви можете використати <code>take</code> таким чином:
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
  Оператор <code>takeUntil</code> дозволяє пропускати значення з потоку доти, доки інший потік не видасть значення.
  <br>
  Це корисно, коли ви хочете отримувати значення до настання певної події або умови.
  <br>
  Наприклад, якщо у вас є потік чисел, і ви хочете пропускати їх доти, доки інший потік не спрацює,
  ви можете використати <code>takeUntil</code> наступним чином:
</p>
<code class="code">
  import { of, Subject } from 'rxjs';
  import { takeUntil } from 'rxjs/operators';

  const stop$ = new Subject();

  of(1, 2, 3, 4, 5).pipe(
    takeUntil(stop$)
  ).subscribe(value => console.log(value));

  // У якийсь момент у майбутньому
  stop$.next();
  // → 1, 2, 3, (stop$ emits) complete
</code>

<h3>skip</h3>
<p>
  Оператор <code>skip</code> дозволяє проігнорувати перші N значень із потоку, пропускаючи далі лише наступні значення.
  <br>
  Наприклад, якщо ви хочете пропустити перші 2 значення, ви можете використати <code>skip</code> таким чином:
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
  Оператор <code>distinctUntilChanged</code> пропускає лише ті значення, які відрізняються від попереднього значення.
  Це корисно для усунення повторюваних підряд значень у потоці.
  <br>
  Наприклад, якщо у вас є потік чисел, і ви хочете відфільтрувати дублікати, ви можете використати <code>distinctUntilChanged</code> наступним чином:
</p>
<code class="code">
  import { of } from 'rxjs';
  import { distinctUntilChanged } from 'rxjs/operators';

  of(1, 1, 2, 2, 3, 3).pipe(
    distinctUntilChanged()
  ).subscribe(value => console.log(value));
  // → 1, 2, 3, complete
</code>
