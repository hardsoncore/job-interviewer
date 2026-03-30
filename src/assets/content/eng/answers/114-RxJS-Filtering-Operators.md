<p>
  <span class="accent">Filtering operators</span> stand guard and decide which of these values will reach the subscribe.
  They discard unnecessary values and pass through only those that meet specific conditions.
</p>

<h3>filter</h3>
<p>
  The <code>filter</code> operator allows you to emit only those values that satisfy a specific condition.
  For example, if you have a stream of numbers and you want to pass only even numbers, you can use <code>filter</code> as follows:
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
  The <code>take</code> operator allows you to take only the first N values from a stream.
  For example, if you want to take only the first 3 values, you can use <code>take</code> as follows:
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
  The <code>takeUntil</code> operator allows you to emit values from a stream until another stream emits a value.
  <br>
  This is useful when you want to keep receiving values up until a specific event or condition occurs.
  <br>
  For example, if you have a stream of numbers and you want to emit values until another stream emits, you can use <code>takeUntil</code> as follows:
</p>
<code class="code">
  import { of, Subject } from 'rxjs';
  import { takeUntil } from 'rxjs/operators';

  const stop$ = new Subject();

  of(1, 2, 3, 4, 5).pipe(
    takeUntil(stop$)
  ).subscribe(value => console.log(value));

  // At some point in the future
  stop$.next();
  // → 1, 2, 3, (stop$ emits) complete
</code>

<h3>skip</h3>
<p>
  The <code>skip</code> operator allows you to skip the first N values from a stream, emitting only the subsequent values.
  <br>
  For example, if you want to skip the first 2 values, you can use <code>skip</code> as follows:
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
  The <code>distinctUntilChanged</code> operator emits only those values that differ from the previous value.
  This is useful for eliminating consecutive duplicate values in a stream.
  <br>
  For example, if you have a stream of numbers and you want to filter out the consecutive duplicates, you can use <code>distinctUntilChanged</code> as follows:
</p>
<code class="code">
  import { of } from 'rxjs';
  import { distinctUntilChanged } from 'rxjs/operators';

  of(1, 1, 2, 2, 3, 3).pipe(
    distinctUntilChanged()
  ).subscribe(value => console.log(value));
  // → 1, 2, 3, complete
</code>
