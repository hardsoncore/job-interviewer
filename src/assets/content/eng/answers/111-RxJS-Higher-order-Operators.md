<p>
All four operators do the same thing: they take each value from the source (outer) Observable and map it to an inner Observable. The difference lies in their strategy for managing concurrently active inner streams.
</p>

<h3>mergeMap</h3>
<p>
<strong>mergeMap</strong> (or flatMap) subscribes to every inner Observable and flattens their results into a single stream. This means that all inner Observables execute in parallel, and their results are merged into one stream.
</p>

<p>
<strong>When to use:</strong> independent operations where order does not matter — downloading files, saving unrelated records, websocket frames.
</p>
<p>
<strong>Potential issues:</strong> with a high-frequency outer stream, you can create an infinite number of open HTTP requests. Use <code>mergeMap(fn, concurrency)</code> to limit parallelism.
</p>

<code class="code">
  import { fromEvent, interval } from 'rxjs';
  import { mergeMap, take } from 'rxjs/operators';

  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
  mergeMap((ev) => interval(1000).pipe(take(3)))
  );
  // On every click, a new interval starts, which
  // generates a sequence of numbers (0, 1, 2, etc.) every second.
  // All of them run in parallel.

  result.subscribe(x => console.log(x));
  // Output: for every click, it will output 0, 1, 2 at 1-second intervals,
  // and these streams will be merged together.
</code>

<h3>concatMap</h3>
<p>
<strong>concatMap</strong> subscribes to every inner Observable but executes them sequentially. It waits for the current inner Observable to complete before subscribing to the next one. This guarantees the order of execution but can be slower if the inner Observables take a long time to complete.
</p>

<p>
<strong>When to use:</strong> animations (the next one starts after the current one finishes), sequential operations with dependencies, data migration, replaying actions.
</p>
<p>
<strong>Potential issues:</strong> if the inner Observable never completes (the <code>complete</code> notification is never emitted), the queue is blocked forever.
</p>

<code class="code">
  import { fromEvent, interval } from 'rxjs';
  import { concatMap, take } from 'rxjs/operators';

  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
  concatMap((ev) => interval(1000).pipe(take(3)))
  );
  // On every click, a new interval starts, which
  // generates a sequence of numbers (0, 1, 2, etc.) every second.

  // But unlike mergeMap, these streams execute sequentially:
  // the next one only starts after the previous one completes.

  result.subscribe(x => console.log(x));
  // Output: for every click, it will output 0, 1, 2 at 1-second intervals,
  // but the next set of numbers will only start after the previous set completes.
</code>

<h3>switchMap</h3>
<p>
<strong>switchMap</strong> subscribes to every inner Observable but cancels the previous one if a new Observable arrives before the previous one completes. This is useful for scenarios where only the latest result matters, such as search queries.
</p>

<p>
<strong>When to use:</strong> search-as-you-type queries, autocomplete, route navigation — any scenario where the old result loses its relevance. This is exactly why it is the default operator in most Angular HttpClient patterns.
</p>
<p>
<strong>Potential issues:</strong> do not use with mutating operations (POST, DELETE). If a server request is canceled in RxJS, the browser's network request has still been sent — cancellation only happens at the level of the response subscription.
</p>

<code class="code">
  import { fromEvent, interval } from 'rxjs';
  import { switchMap, take } from 'rxjs/operators';

  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
  switchMap((ev) => interval(1000).pipe(take(3)))
  );
  // On every click, a new interval starts, which
  // generates a sequence of numbers (0, 1, 2, etc.) every second.

  // But if a click happens before the current interval completes,
  // the previous stream is canceled and a new one starts.

  result.subscribe(x => console.log(x));
  // Output: for every click, it will output 0, 1, 2 at 1-second intervals,
  // but if you click again before the current stream completes,
  // it will be canceled and a new one will begin.
</code>

<h3>exhaustMap</h3>
<p>
<strong>exhaustMap</strong> subscribes to the first inner Observable and ignores all subsequent ones until the current one completes. This is useful for preventing multiple inner Observables from executing simultaneously, for example, when handling clicks.


As long as the current inner Observable is active, all new values from the outer Observable are simply ignored.
</p>

<p>
<strong>When to use:</strong> submit buttons (double-submit protection), login, payments — when a repeated click before the completion of the first one should be ignored.
</p>
<p>
<strong>Potential issues:</strong> because clicks are dropped, the user might not get feedback. It is better to combine this with disabling the UI while the request is pending.
</p>

<code class="code">
  import { fromEvent, interval } from 'rxjs';
  import { exhaustMap, take } from 'rxjs/operators';

  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
  exhaustMap((ev) => interval(1000).pipe(take(3)))
  );
  // On every click, a new interval starts, which
  // generates a sequence of numbers (0, 1, 2, etc.) every second.

  // But if a click happens before the current interval completes,
  // the new stream will be ignored.

  result.subscribe(x => console.log(x));
  // Output: for every click, it will output 0, 1, 2 at 1-second intervals,
  // but repeated clicks before the current stream completes will be ignored.
</code>
