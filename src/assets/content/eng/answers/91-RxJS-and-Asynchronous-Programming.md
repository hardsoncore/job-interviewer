<h3>What is RxJS?</h3>
<p><span class="accent">RxJS (Reactive Extensions for JavaScript)</span> is a library for reactive programming. It uses the <strong>Observable</strong> pattern to make working with asynchronous code and events more predictable and convenient.</p>

<p>Instead of thinking about data as static values or using classic Promises, which return exactly one result, RxJS suggests thinking about data as streams that unfold over time.</p>

<h3>What is RxJS used for?</h3>
<p>
  In frontend development, we constantly deal with asynchrony: user clicks, HTTP requests, timers, WebSockets.
  <br>
  RxJS solves several critical problems:
</p>

<h5>1. Handling multiple values</h5>
<p>A <code>Promise</code> returns data once and completes. An <code>Observable</code> can return data continuously (for example, mouse coordinates during movement or a stream of chat messages).</p>

<h5>2. Request Cancellation</h5>
<p>A Promise cannot be canceled "out of the box". In RxJS, a subscription to a stream can be easily canceled (unsubscribed), which will automatically abort, for example, a pending HTTP request (this can be done using the <code>takeUntil</code> operator or <code>unsubscribe()</code>). This is critical for performance.</p>

<h5>3. Complex data manipulation</h5>
<p>RxJS provides a huge set of ready-made tools (operators) for filtering, merging, delaying, and transforming streams before they reach the final consumer.</p>

<h5>4. State Management</h5>
<p>Using entities like <strong>BehaviorSubject</strong>, it is very convenient to store and reactively update application state.</p>

<h3>Core Entities</h3>
<p>RxJS is built around a few core entities and dozens of operator functions. Here are the most important ones:</p>

<p> - <strong>Observable</strong>: The data stream itself. It does nothing until it is subscribed to.</p>

<p> - <strong>Observer</strong>: An object with <code>next</code>, <code>error</code>, and <code>complete</code> methods that listens to the Observable.</p>

<p> - <strong>Subscription</strong>: The result of executing <code>observable.subscribe()</code>. Used for unsubscribing and preventing memory leaks.</p>

<p> - <strong>Subject</strong>: A special type of Observable that allows sending values to multiple subscribers simultaneously (multicasting).</p>

<h3>Popular Operators</h3>
<p><strong>Operators</strong> are pure functions that allow you to manipulate a stream. They are chained together using the <code>pipe()</code> method.</p>

<h5>1. Stream Creation:</h5>

<p><code>of(1, 2, 3)</code> — creates a stream from the provided arguments.</p>

<p><code>from([1, 2, 3])</code> — converts an array, promise, or iterable object into a stream.</p>

<p><code>interval(1000)</code> — generates values every second.</p>

<h5>2. Transformation and Filtering:</h5>

<p><code>map(x => x * 2)</code> — transforms each value of the stream (works like standard Array.map).</p>

<p><code>filter(x => x > 10)</code> — lets through only those values that meet the condition.</p>

<p><code>tap(x => console.log(x))</code> — allows performing side effects (e.g., logging) without changing the stream data itself.</p>

<h5>3. Higher-Order Operators (Flattening):</h5>

<p><code>switchMap</code> — cancels the previous inner stream and switches to the new one. Ideal for HTTP requests (e.g., in autocomplete search, to cancel the old request if the user types a new letter).</p>

<p><code>mergeMap</code> — executes all inner streams concurrently, without preserving the order.</p>

<p><code>concatMap</code> — queues inner streams and executes them strictly one after another.</p>

<h5>4. Lifecycle Management:</h5>

<p><code>take(5)</code> — takes only the first 5 values and automatically completes the stream.</p>

<p><code>takeUntil(notifier$)</code> — listens to the stream until another stream (notifier$) emits. Indispensable for automatic unsubscription when an Angular component is destroyed.</p>
