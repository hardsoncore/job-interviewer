<h3>Навіщо потрібен <code>Subject.prototype.asObservable()</code></h3>

<p>
  <code>Subject.prototype.asObservable()</code> використовується для інкапсуляції та запобігання &quot;витоку абстракції&quot;.
  Він дозволяє приховати методи <code>Subject</code>, які можуть змінювати потік даних, і надає лише інтерфейс для підписки.
  <br>
  Метод <code>.asObservable()</code> перетворює <code>Subject</code> на звичайний <code>Observable</code> (read-only потік),
  приховуючи методи <code>next()</code>, <code>error()</code> та <code>complete()</code>.
  Це гарантує, що зовнішній код зможе лише підписуватися на дані, але не зможе їх змінювати.
</p>

<h4>Ідеальний патерн використання</h4>
<p>
  Загалом, це стандартна практика — інкапсулювати логіку керування потоками даних усередині сервісів.
  Ми створюємо приватний <code>Subject</code> для керування даними зсередини, і віддаємо назовні публічний <code>Observable</code>:
</p>

<code class="code">
  class DataService {
    // 1. Приватне джерело істини (Subject або BehaviorSubject)
    private dataSubject = new Subject&lt;string&gt;();

    // 2. Публічний read-only потік
    public data$ = this.dataSubject.asObservable();

    // 3. Мутація даних відбувається лише через методи сервіса
    public fetchNewData(data: string) {
      // Якась логіка...
      this.dataSubject.next(data);
    }
  }
</code>

<p>Тепер, коли хтось отримає доступ до <code>data$</code>, він не зможе зламати потік:</p>

<code class="code">
  const service = new DataService();
  service.data$.next('LOL hax!'); // Помилка: Property 'next' does not exist
</code>

<h4>Чого варто уникати?</h4>
<p>
  Іноді розробники намагаються використовувати <code>Subject</code> та <code>.asObservable()</code> усередині звичайних функцій повернення даних:
</p>

<p class="info info--orange">
  АНТИПАТЕРН: Не використовуйте <code>Subject</code> та <code>.asObservable()</code> усередині функцій, які повертають потоки даних. Це порушує архітектуру та семантику RxJS.
</p>

<code class="code">
  // АНТИПАТЕРН
  const getData = () =&gt; {
    const subject = new Subject();
    const source = new SomeWeirdDataSource();
    source.onMessage = (data) =&gt; subject.next(data);
    return subject.asObservable();
  };
</code>

<p>Цей підхід має серйозні архітектурні недоліки:</p>
<ul>
  <li><strong>Відсутність лінивості:</strong> <code>getData()</code> не лінивий. Джерело <code>SomeWeirdDataSource</code> створюється і починає роботу негайно, навіть якщо на <code>Observable</code>, що повертається, ще ніхто не підписався.</li>
  <li><strong>Витоки пам'яті:</strong> Кожен виклик <code>getData()</code> створює новий <code>Subject</code> та нове джерело даних, що швидко призведе до проблем із продуктивністю.</li>
  <li><strong>Порушення семантики RxJS:</strong> Якщо вам потрібно обгорнути зовнішнє джерело даних у потік усередині функції, для цього існує конструктор <code>new Observable(subscriber =&gt; { ... })</code>. <code>Subject</code> натомість призначений для мультикасту (маршрутизації одного потоку багатьом підписникам).</li>
</ul>

<h3>Висновок</h3>
<p>
  Тримайте <code>Subject</code> приватним на рівні класу/компонента, а назовні виставляйте лише результат виконання <code>.asObservable()</code>.
  Це забезпечує чисту архітектуру, запобігає витокам абстракції та гарантує, що потоки даних не будуть змінені ззовні.
</p>
