<h3>What is a Subject</h3>

<p>
  <span class="accent">Subject</span> is a special type of <code>Observable</code> in RxJS.
  A <code>Subject</code> acts as both an observer and an observable — so, it has the methods of both.
  <br>
  A special feature of <code>Subject</code> is that it can send data to multiple "consumers" at the same time.
  These consumers can subscribe while the <code>Subject</code> is already running,
  whereas a standard <code>Observable</code> executes uniquely for each subscription.
</p>

<p>
  RxJS <code>Subject</code> objects work like events. They allow you to register an unlimited
  number of handlers for the data they send.
</p>

<p>
  Let's look at an example:
</p>

<code class="code">
  const sbj = new Subject&lt;number>();

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));
  sbj.next(3);
  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));
  sbj.next(9);

  /*
  Result in the console:

  1st: 3
  1st: 9
  2nd: 9
  */
</code>

<p>
  You can create a new <code>Subject</code> object using <code>new Subject()</code>. Just like a regular <code>Observable</code>, it takes three functions: <code>next()</code>, <code>error()</code>, and <code>complete()</code>.
  <br>
  Then, you register handlers by calling the <code>subscribe()</code> method.
</p>

<p>
  But here, the handlers do not execute immediately when you call <code>subscribe()</code>.
  They execute after you call the <code>next()</code>, <code>error()</code>, or
  <code>complete()</code> methods of the object itself.
</p>

<p>
  Also, new "consumers" can register at any time. But they will start receiving data only
  from the next broadcast.
</p>

<p class="info info--blue">
  By default, RxJS Subject objects run infinitely, because we do not know in advance
  when <code>complete()</code> will be called, or if it will be called at all. Therefore, do not forget about <code>unsubscribe()</code>.
</p>

<h3>There are several types of Subject in RxJS</h3>
<ul>
  <li><a href="https://rxjs.dev/api/index/class/BehaviorSubject"><code>BehaviorSubject</code></a>,</li>
  <li><a href="https://rxjs.dev/api/index/class/ReplaySubject"><code>ReplaySubject</code></a>,</li>
  <li><a href="https://rxjs.dev/api/index/class/AsyncSubject"><code>AsyncSubject</code></a>.</li>
</ul>

<h3>BehaviorSubject</h3>

<p>
  <code>BehaviorSubject</code> stores the last value it sent.
  So, every new handler will receive this value at the moment of registration (when calling <code>subscribe()</code>).
</p>

<p>
  The initial value is set when you create the RxJS <code>BehaviorSubject</code>.
</p>

<code class="code">
  const sbj = new BehaviorSubject&lt;number&gt;(5);

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));
  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));
  sbj.next(7);

  /*
  Result in the console:

  1st: 5
  2nd: 5
  1st: 7
  2nd: 7
  */
</code>

<h3>ReplaySubject</h3>

<p>
  Unlike <code>BehaviorSubject</code>, <code>ReplaySubject</code> objects
  can store a specific number of past values. You set this number when you create the object.
</p>

<code class="code">
  const sbj = new ReplaySubject(2);
  /*
    Attention! The number 2 in brackets is the number of past updates that a new subscriber will get.
    If you remove it, all updates will be duplicated. But with it, only the last 2 are kept.
  */

  sbj.next(5);

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));

  sbj.next(6);
  sbj.next(7);

  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));

  /*
  Result in the console:

  1st: 5
  1st: 6
  1st: 7
  2nd: 6
  2nd: 7
  */
</code>

<p>
  All new "consumers" immediately receive all
  <code>n</code> (in this case, 2) saved values of the RxJS <code>ReplaySubject</code> one by one.
</p>

<h3>AsyncSubject</h3>

<p>
  In the case of <code>AsyncSubject</code>, "consumers" receive only the last value of the object, and
  only when it finishes its execution (when <code>complete()</code> is called).
</p>

<code class="code">
  const sbj = new AsyncSubject();

  sbj.subscribe((vl) => console.log(`Async: ${ vl }`));

  sbj.next(7);
  sbj.next(8);
  sbj.next(9);

  setTimeout(() => sbj.complete(), 3000);

  /*
  Result in the console (after 3 seconds):

  Async: 9
  */
</code>
