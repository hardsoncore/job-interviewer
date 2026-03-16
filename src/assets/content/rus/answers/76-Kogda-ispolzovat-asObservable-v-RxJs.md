<h3>Зачем нужен <code>Subject.prototype.asObservable()</code></h3>

<p>
  <code>Subject.prototype.asObservable()</code> используется для инкапсуляции и предотвращения &quot;утечки абстракции&quot;.
  Он позволяет скрыть методы <code>Subject</code>, которые могут изменять поток данных, и предоставляет только интерфейс для подписки.
  <br>
  Метод <code>.asObservable()</code> превращает <code>Subject</code> в обычный <code>Observable</code> (read-only поток),
  скрывая методы <code>next()</code>, <code>error()</code> и <code>complete()</code>.
  Это гарантирует, что внешний код сможет только подписываться на данные, но не сможет их изменять.
</p>

<h4>Идеальный паттерн использования</h4>
<p>
  В целом, это стандартная практика — инкапсулировать логику по управлению потоками данных внутри сервисов.
  Мы создаем приватный <code>Subject</code> для управления данными изнутри, и отдаем наружу публичный <code>Observable</code>:
</p>

<code class="code">
  class DataService {
    // 1. Приватный источник истины (Subject или BehaviorSubject)
    private dataSubject = new Subject&lt;string&gt;();

    // 2. Публичный read-only поток
    public data$ = this.dataSubject.asObservable();

    // 3. Мутация данных происходит только через методы сервиса
    public fetchNewData(data: string) {
      // Какая-то логика...
      this.dataSubject.next(data);
    }
  }
</code>

<p>Теперь, когда кто-то получит доступ к <code>data$</code>, он не сможет сломать поток:</p>

<code class="code">
  const service = new DataService();
  service.data$.next('LOL hax!'); // Ошибка: Property 'next' does not exist
</code>

<h4>Чего стоит избегать? </h4>
<p>
  Иногда разработчики пытаются использовать <code>Subject</code> и <code>.asObservable()</code> внутри обычных функций возврата данных:
</p>

<p class="info info--orange">
  АНТИПАТТЕРН: Не используйте <code>Subject</code> и <code>.asObservable()</code> внутри функций, которые возвращают потоки данных. Это нарушает архитектуру и семантику RxJS.
</p>

<code class="code">
  // АНТИПАТТЕРН
  const getData = () =&gt; {
    const subject = new Subject();
    const source = new SomeWeirdDataSource();
    source.onMessage = (data) =&gt; subject.next(data);
    return subject.asObservable();
  };
</code>

<p>У этого подхода есть серьезные архитектурные изъяны:</p>
<ul>
  <li><strong>Отсутствие ленивости:</strong> <code>getData()</code> не ленив. Источник <code>SomeWeirdDataSource</code> создается и начинает работу немедленно, даже если на возвращаемый <code>Observable</code> еще никто не подписался.</li>
  <li><strong>Утечки памяти:</strong> Каждый вызов <code>getData()</code> создает новый <code>Subject</code> и новый источник данных, что быстро приведет к проблемам с производительностью.</li>
  <li><strong>Нарушение семантики RxJS:</strong> Если вам нужно обернуть внешний источник данных в поток внутри функции, для этого существует конструктор <code>new Observable(subscriber =&gt; { ... })</code>. <code>Subject</code> же предназначен для мультикаста (маршрутизации одного потока множеству подписчиков).</li>
</ul>

<h3>Вывод</h3>
<p>
  Держите <code>Subject</code> приватным на уровне класса/компонента, а наружу выставляйте только результат выполнения <code>.asObservable()</code>.
  Это обеспечивает чистую архитектуру, предотвращает утечки абстракции и гарантирует, что потоки данных не будут изменены извне.
</p>
