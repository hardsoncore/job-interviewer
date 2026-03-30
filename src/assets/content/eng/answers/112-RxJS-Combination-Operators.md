<p>
  All operators solve the same problem — combining multiple Observables — but they behave in fundamentally different ways. The main axes of comparison are: when to start, when to complete, and how to form the emission.
</p>

<h3>combineLatest</h3>
<p>
  <strong>combineLatest</strong> waits until each stream (Observable) emits at least one value. Then, upon any new value from any stream, it emits an array of the latest current values from all streams.
  <br>
  Emission — an array of the latest values from each Observable.
</p>

<h3>withLatestFrom</h3>
<p>
  <strong>withLatestFrom</strong> is similar to combineLatest, but here there is a clear "leader". It emits values only when the main (source) stream emits. The other streams simply "mix in" their latest current states.
  <br>
  Emission — an array of the latest values from all "mixing" Observables, but only at the moment the main stream emits.
</p>

<h3>zip</h3>
<p>
  <strong>zip</strong> gathers values from streams by their "index number". It waits for the first value from all of them — emits an array. Waits for the second value from all of them — emits an array. If one stream emitted 10 values, and another only 2, zip will emit only 2 arrays, and the remaining values of the first stream will hang in memory waiting for a pair.
  <br>
  Emission — an array of values from each Observable, grouped by their index number.
</p>

<h3>forkJoin</h3>
<p>
  <strong>forkJoin</strong> waits until all provided streams (Observables) complete, and only after that does it emit an array of their latest values. If at least one Observable does not complete, forkJoin emits nothing. If one stream fails with an error — the entire forkJoin fails.
</p>

<h3>merge</h3>
<p>
  <strong>merge</strong> subscribes to all streams (Observables) simultaneously. As soon as any of them emits a value, it immediately goes into the resulting stream. No arrays, just a flat stream of data from all sources.
  <br>
  Emission — values from each Observable as soon as they appear, without waiting for other Observables.
</p>

<h3>concat</h3>
<p>
  <strong>concat</strong> emits values from Observables sequentially, waiting for the previous Observable to complete before starting to emit values from the next one.
  <br>
  Emission — values from each Observable, but only after the completion of the previous Observable.
</p>
