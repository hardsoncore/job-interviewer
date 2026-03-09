
<h3>Зачем нам RxJS?</h3>
<p>
  В JavaScript есть несколько способов работы с асинхронностью: коллбеки, <code>Promise</code> и <code>async/await</code>.
  RxJS вводит концепцию реактивного программирования с помощью Observables (потоков данных).
</p>
<p>
  <strong>Главное отличие:</strong> <code>Promise</code> обрабатывает одно событие в будущем, а <code>Observable</code> — это непрерывный поток событий
  (от нуля до бесконечности) во времени.
</p>

<h3>Ключевые строительные блоки RxJS</h3>
<p>
  <strong><code>Observable</code> (Наблюдаемое):</strong> Сам источник данных или событий. Представь его как конвейерную ленту.
</p>
<p>
  <strong><code>Observer</code> (Наблюдатель):</strong> Объект с методами <code>next</code>, <code>error</code> и <code>complete</code>, который слушает Observable.
</p>
<p>
  <strong><code>Subscription</code> (Подписка):</strong> Объект, представляющий выполнение Observable. Главная задача — позволить отписаться (<code>unsubscribe</code>), чтобы избежать утечек памяти.
</p>
<p>
  <strong><code>Subject</code>:</strong> Особый тип Observable, который позволяет отправлять данные множеству подписчиков (multicasting). Работает и как генератор событий, и как слушатель.
</p>
<p>
  <strong><code>BehaviorSubject</code>:</strong> Хранит текущее (последнее) значение и сразу отдает его новым подписчикам. Требует начального значения.
</p>
<p>
  <strong><code>ReplaySubject</code>:</strong> Запоминает заданное количество последних значений и «проигрывает» их новым подписчикам.
</p>

<h3>Операторы RxJS</h3>
<p>
  <span class="accent">Операторы RxJS</span> — это чистые функции, которые позволяют манипулировать потоком данных до того, как они достигнут subscribe.
</p>
<p>
  Операторы RxJS позволяют легко комбинировать и трансформировать потоки данных.
</p>

<h3>Трансформация (Transformation)</h3>
<p>
  <strong><code>map</code>:</strong> Преобразует каждое значение в потоке (как Array.prototype.map).
</p>
<p>
  <strong>Операторы высшего порядка (Higher-Order Mapping):</strong> Это классика вопросов на собеседованиях.
  Они управляют "потоками внутри потоков" (например, HTTP-запрос внутри клика кнопки).
</p>
<p>
  <strong><code>switchMap</code>:</strong> Отменяет предыдущий внутренний поток, если пришел новый (идеально для поиска с
  автокомплитом).
</p>
<p>
  <strong><code>mergeMap</code> (или <code>flatMap</code>):</strong> Выполняет все внутренние потоки параллельно, не заботясь о порядке.
</p>
<p>
  <strong><code>concatMap</code>:</strong> Выполняет потоки строго по очереди, дожидаясь завершения предыдущего.
</p>
<p>
  <strong><code>exhaustMap</code>:</strong> Игнорирует новые события, пока не завершится текущий внутренний поток (отлично для кнопок сохранения).
</p>
<h3>Фильтрация (Filtering)</h3>
<p>
  <strong><code>filter</code>:</strong> Пропускает только те значения, которые удовлетворяют условию.
</p>
<p>
  <strong><code>debounceTime</code>:</strong> Ждет заданное время тишины перед пропуском значения (защита от спама кликами).
</p>
<p>
  <strong><code>distinctUntilChanged</code>:</strong> Пропускает значение, только если оно отличается от предыдущего.
</p>
<h3>Утилиты (Utility)</h3>
<p>
  <strong><code>tap</code>:</strong> Позволяет выполнить "побочное действие" (например, <code>console.log</code> или изменение стейта лоадера), не меняя сами данные в потоке.
</p>
<p>
  <strong><code>catchError</code>:</strong> Перехватывает ошибку в потоке и позволяет вернуть запасной Observable (чтобы поток не "умер").
</p>

<h3>Управление памятью (Best Practices)</h3>
<p>
  Частая ошибка — забытые подписки, которые приводят к утечкам памяти и дублированию выполнения кода.
</p>
<p>
  <strong>Используй AsyncPipe:</strong> В шаблонах всегда старайся использовать <code>*ngIf="data$ | async"</code>.
  Angular сам подпишется и сам отпишется при уничтожении компонента.
</p>
<p>
  <strong>Паттерн takeUntil:</strong> Создай <code>destroy$ = new Subject&lt;void&gt;()</code>, вызывай <code>next()</code> в <code>ngOnDestroy</code> и
  ставь <code>takeUntil(this.destroy$)</code> последним оператором в <code>pipe()</code>.
</p>

<p>
  <strong>Новый <code>takeUntilDestroyed</code> (Angular 16+):</strong> Современный способ, который автоматически привязывается к жизненному циклу компонента без написания <code>ngOnDestroy</code>.
</p>
    