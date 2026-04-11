
<h3>Что такое Subject</h3>

<p>
  <span class="accent">Subject</span> - это разновидность объектов <code>Observable</code> в RxJS.
  <code>Subject</code> одновременно является и зрителем и зрелищем - соответственно, имеет методы как зрелища, так и зрителя.
  <br>
  Особенность <code>Subject</code> в том, что он может отправлять данные одновременно множеству "потребителей",
  которые могут регистрироваться уже в процессе исполнения <code>Subject</code>,
  в то время как исполнение стандартного <code>Observable</code> осуществляется уникально для каждого его вызова.
</p>

<p>
  Объекты RxJS <code>Subject</code> реализуют принцип работы событий, поддерживая возможность регистрировать неограниченное
  количество обработчиков отправляемых ими данных.
</p>

<p>
  Рассмотрим пример:
</p>

<code class="code">
  const sbj = new Subject&lt;number>();

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));
  sbj.next(3);
  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));
  sbj.next(9);

  /*
  Результат  в консоли:

  1st: 3
  1st: 9
  2nd: 9
  */
</code>

<p>
  Создание нового объекта <code>Subject</code> происходит с помощью <code>new Subject()</code>, принимающего подобно обычному <code>Observable</code> три функции: <code>next()</code>, <code>error()</code> и <code>complete()</code>.
  <br>
  Далее регистрируются обработчики вызовом метода
  <code>subscribe()</code>
</p>

<p>
  Но здесь обработчики исполняются не сразу в момент вызова <code>subscribe()</code>,
  а после обращения к методам <code>next()</code>, <code>error()</code> или
  <code>complete()</code> самого объекта.
</p>

<p>
  Причем регистрация новых "потребителей" может происходить в любой момент времени. Но получать данные они
  будут уже начиная со следующей рассылки.
</p>

<p class="info info--blue">
  Объекты RxJS Subject по умолчанию являются бесконечно исполняемыми, так как заранее неизвестно,
  когда будет вызов complete() и будет ли он вызван вообще. Поэтому не стоит забывать про unsubscribe().
</p>

<h3>В RxJS имеется несколько разновидностей Subject</h3>
<ul>
  <li><a href="https://rxjs.dev/api/index/class/BehaviorSubject"><code>BehaviorSubject</code></a>,</li>
  <li><a href="https://rxjs.dev/api/index/class/ReplaySubject"><code>ReplaySubject</code></a>,</li>
  <li><a href="https://rxjs.dev/api/index/class/AsyncSubject"><code>AsyncSubject</code></a>.</li>
</ul>

<h3>BehaviorSubject</h3>

<p>
  <code>BehaviorSubject</code> хранит в себе последнее отправленное им значение.
  Так, каждому новому обработчику в момент регистрации (вызов <code>subscribe()</code>) будет отправлено это значение.
</p>

<p>
  Начальное значение задается в момент создания RxJS <code>BehaviorSubject</code>.
</p>

<code class="code">
  const sbj = new BehaviorSubject&lt;number&gt;(5);

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));
  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));
  sbj.next(7);

  /*
  Результат  в консоли:

  1st: 5
  2nd: 5
  1st: 7
  2nd: 7
  */
</code>

<h3>ReplaySubject</h3>

<p>
  В отличие от <code>BehaviorSubject</code> объекты <code>ReplaySubject</code>
  способны хранить заданное количество последних значений, которое задается при создании объекта.
</p>

<code class="code">
  const sbj = new ReplaySubject(2);
  /*
    Внимание! Цифра 2 в скобках - количество последних обновлений, которые получит новый подписчик.
    Если его убрать, то будут продублированы все, а так - только 2 последних
  */

  sbj.next(5);

  sbj.subscribe((vl) => console.log(`1st: ${ vl }`));

  sbj.next(6);
  sbj.next(7);

  sbj.subscribe((vl) => console.log(`2nd: ${ vl }`));

  /*
  Результат  в консоли:

  1st: 5
  1st: 6
  1st: 7
  2nd: 6
  2nd: 7
  */
</code>

<p>
  Все новые "потребители" сразу же получают по очереди все
  <code>n</code> (в данном случае - 2) указанных значений RxJS <code>ReplaySubject</code>.
</p>

<h3>AsyncSubject</h3>

<p>
  В случае с <code>AsyncSubject</code> "потребителям" передается только последнее значение объекта и
  только, когда он завершит свое выполнение (вызов <code>complete()</code>).
</p>

<code class="code">
  const sbj = new AsyncSubject();

  sbj.subscribe((vl) => console.log(`Async: ${ vl }`));

  sbj.next(7);
  sbj.next(8);
  sbj.next(9);

  setTimeout(() => sbj.complete(), 3000);

  /*
  Результат  в консоли (по истечении 3 сек):

  Async: 9
  */
</code>
