<h3>Why use <code>Subject.prototype.asObservable()</code>?</h3>

<p>
  <code>Subject.prototype.asObservable()</code> is used for encapsulation and to prevent "leaky abstractions".
  It allows you to hide the <code>Subject</code> methods that can mutate the data stream, exposing only the interface for subscription.
  <br>
  The <code>.asObservable()</code> method transforms a <code>Subject</code> into a standard <code>Observable</code> (a read-only stream) by
  hiding the <code>next()</code>, <code>error()</code>, and <code>complete()</code> methods.
  This ensures that external code can only subscribe to the data, but cannot mutate it.
</p>



<h4>The Ideal Usage Pattern</h4>
<p>
  In general, it is standard practice to encapsulate the logic for managing data streams within services.
  We create a private <code>Subject</code> to manage the data internally, and expose a public <code>Observable</code> to the outside:
</p>

<code class="code">
  class DataService {
    // 1. Private source of truth (Subject or BehaviorSubject)
    private dataSubject = new Subject&lt;string&gt;();

    // 2. Public read-only stream
    public data$ = this.dataSubject.asObservable();

    // 3. Data mutation occurs only through service methods
    public fetchNewData(data: string) {
      // Some logic...
      this.dataSubject.next(data);
    }
  }
</code>

<p>Now, when someone accesses <code>data$</code>, they won't be able to break the stream:</p>

<code class="code">
  const service = new DataService();
  service.data$.next('LOL hax!'); // Error: Property 'next' does not exist
</code>

<h4>What to Avoid</h4>
<p>
  Sometimes developers try to use a <code>Subject</code> and <code>.asObservable()</code> inside standard data-returning functions:
</p>

<p class="info info--orange">
  ANTI-PATTERN: Do not use a <code>Subject</code> and <code>.asObservable()</code> inside functions that return data streams. This violates RxJS architecture and semantics.
</p>

<code class="code">
  // ANTI-PATTERN
  const getData = () =&gt; {
    const subject = new Subject();
    const source = new SomeWeirdDataSource();
    source.onMessage = (data) =&gt; subject.next(data);
    return subject.asObservable();
  };
</code>

<p>This approach has serious architectural flaws:</p>
<ul>
  <li><strong>Lack of laziness:</strong> <code>getData()</code> is not lazy. The <code>SomeWeirdDataSource</code> is created and starts working immediately, even if no one has subscribed to the returned <code>Observable</code> yet.</li>
  <li><strong>Memory leaks:</strong> Every call to <code>getData()</code> creates a new <code>Subject</code> and a new data source, which will quickly lead to performance issues.</li>
  <li><strong>Violation of RxJS semantics:</strong> If you need to wrap an external data source into a stream inside a function, the <code>new Observable(subscriber =&gt; { ... })</code> constructor exists for this exact purpose. A <code>Subject</code>, on the other hand, is designed for multicasting (routing a single stream to multiple subscribers).</li>
</ul>

<h3>Conclusion</h3>
<p>
  Keep the <code>Subject</code> private at the class/component level, and expose only the result of <code>.asObservable()</code> to the outside.
  This ensures a clean architecture, prevents leaky abstractions, and guarantees that data streams will not be mutated from the outside.
</p>
