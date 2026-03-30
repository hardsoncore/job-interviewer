<h3>of</h3>
<p>The <code>of</code> operator is used to create an Observable from a set of values. It takes any number of arguments and returns an Observable that emits these values one by one, and then completes the stream.</p>

<code class="code">
  import { of } from 'rxjs';
  of(1, 2, 3).subscribe(value => console.log(value));
  // → 1, 2, 3, complete
</code>

<h3>from</h3>
<p>The <code>from</code> operator is used to create an Observable from various data types (arrays, promises, iterables, etc.). It converts this data into a stream, emitting each value individually.</p>

<code class="code">
  import { from } from 'rxjs';
  from([10, 20, 30]).subscribe(value => console.log(value));
  // → 10, 20, 30, complete
</code>

<h3>interval</h3>
<p>The <code>interval</code> operator creates an Observable that emits a sequence of numbers at a specified time interval. It takes one argument—the interval in milliseconds—and starts emitting numbers, beginning at 0, at the given interval.</p>

<code class="code">
  import { interval } from 'rxjs';
  interval(1000).subscribe(value => console.log(value));
  // → 0, 1, 2, 3, ... (every second)
</code>

<h3>timer</h3>
<p>The <code>timer</code> operator creates an Observable that emits its first value after a specific delay, and then continues to emit a sequence of numbers at a specified interval. It takes two arguments: the first is the delay before the first emission, and the second is the interval between subsequent emissions.</p>

<code class="code">
  import { timer } from 'rxjs';
  timer(2000, 1000).subscribe(value => console.log(value));
  // → (after 2 seconds) 0, (after 3 seconds) 1, (after 4 seconds) 2, ...
</code>
