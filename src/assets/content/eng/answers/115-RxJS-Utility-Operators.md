<p>
  <span class="accent">Utility operators</span> help manage data streams by performing various auxiliary operations.
  They do not modify the values themselves, but provide additional capabilities for working with streams.
</p>

<h3>tap</h3>
<p>
  The <code>tap</code> operator allows you to perform side effects for each value passing through the stream, without modifying the values themselves.
  <br>
  This is useful for logging, tracking, or performing other actions without affecting the stream.
</p>
<code class="code">
  import { of } from 'rxjs';
  import { tap } from 'rxjs/operators';

  of(1, 2, 3, 4, 5).pipe(
    tap(value => console.log('Current value:', value))
  ).subscribe();
  // → Current value: 1
  // → Current value: 2
  // → Current value: 3
  // → Current value: 4
  // → Current value: 5
</code>

<h3>finalize</h3>
<p>
  The <code>finalize</code> operator allows you to perform side effects when a stream completes, regardless of whether it was successful or resulted in an error.
  <br>
  This is useful for cleaning up resources, logging the completion, or performing other actions when the stream ends.
</p>

<code class="code">
  import { of } from 'rxjs';
  import { finalize } from 'rxjs/operators';

  of(1, 2, 3).pipe(
    finalize(() => console.log('Stream completed'))
  ).subscribe();
  // → 1
  // → 2
  // → 3
  // → Stream completed
</code>

<h3>delay</h3>
<p>
  The <code>delay</code> operator allows you to postpone the emission of values for a specific amount of time.
  <br>
  This is useful for creating artificial delays, managing emission timing, or synchronizing with other streams.
</p>
<code class="code">
  import { of } from 'rxjs';
  import { delay } from 'rxjs/operators';

  of('Hello').pipe(
    delay(2000) // Delay of 2 seconds
  ).subscribe(value => console.log(value));
  // → (after 2 seconds) Hello
</code>

<h3>timeout</h3>
<p>
  The <code>timeout</code> operator allows you to set a maximum waiting time for a value to be emitted. If no value is emitted within this time, the stream will complete with an error.
  <br>
  This is useful for handling situations where a response is expected within a certain timeframe (for example, when dealing with network requests) and for preventing the application from hanging.
</p>
<code class="code">
  import { of } from 'rxjs';
  import { timeout } from 'rxjs/operators';

  of('Response').pipe(
    timeout(1000) // Setting a timeout of 1 second
  ).subscribe(
    value => console.log(value),
    error => console.log('Error:', error)
  );
  // → Response (if emitted within 1 second)
  // → Error: TimeoutError (if not emitted within 1 second)
</code>

<h3>retry</h3>
<p>
  The <code>retry</code> operator allows you to resubscribe to the stream a specified number of times if an error occurs.
  <br>
  This is useful for handling transient errors, such as failing network requests, and ensuring the stability of the application.
</p>
<code class="code">
  import { of, throwError } from 'rxjs';
  import { retry, mergeMap } from 'rxjs/operators';

  of('Request').pipe(
    mergeMap(value => Math.random() < 0.5 ? throwError('Error') : of(value)),
    retry(3) // Retry up to 3 times on error
  ).subscribe(
    value => console.log('Success:', value),
    error => console.log('Error after 3 attempts:', error)
  );
</code>
