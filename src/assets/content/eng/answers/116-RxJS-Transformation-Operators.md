<p>
  <span class="accent">Transformation operators</span> allow you to modify the values passing through a stream, creating new streams with the transformed data.
</p>

<h3>map</h3>
<p>
  The <code>map</code> operator allows you to apply a function to each value passing through the stream and return a new value, thereby creating a new stream with the transformed data.
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
  The <code>mapTo</code> operator allows you to replace each value passing through the stream with a fixed value, creating a new stream that emits this fixed value for every incoming value.
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
  The <code>pluck</code> operator allows you to extract a specific property from objects passing through the stream, creating a new stream that emits the values of that property.
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
  The <code>scan</code> operator allows you to accumulate values passing through the stream using an accumulator function, which takes the current accumulated value and the new incoming value, and returns a new accumulated value. This creates a new stream that emits the accumulated values.
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
