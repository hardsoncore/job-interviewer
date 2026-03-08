
<p>
  Путаница между <code>Observable</code> и <code>Subject</code> — это своего рода обряд посвящения в реактивное программирование.
  На первый згляд они действительно кажутся похожими, так как оба позволяют подписываться на поток данных (<code>subscribe()</code>).
</p>

<p>
  Но архитектурно они решают совершенно разные задачи. Давай разберем это как инженеры.
</p>
<p>
  Главное отличие: «Холодные» против «Горячих»
  Вся суть сводится к двум концепциям: ленивость (Unicast) и вещание (Multicast).
</p>

<h3>1. new Observable — Ленивый эгоист (Холодный / Unicast)</h3>
<p>
  Когда ты создаешь <code>new Observable</code>, ты описываешь рецепт того, как получить данные. Этот код не выполнится до тех пор,
  пока кто-то не вызовет <code>subscribe()</code>.
</p>
<p>
  Самое важное: каждый новый подписчик запускает выполнение кода с самого начала, создавая независимый поток.
</p>

<p>
  Аналогия: Это как просмотр фильма на Netflix. Ты нажимаешь Play, и фильм начинается для тебя с первой секунды.
  Твой друг нажмет Play у себя дома — и для него фильм тоже начнется с первой секунды. Вы не смотрите один и тот же стрим.
</p>
<p>
  Реальный пример: HTTP-запросы (в том же HttpClient в Angular). Если ты подпишешься на один и тот же Observable с
  HTTP-запросом три раза — в сеть улетят три одинаковых независимых запроса.
</p>

 <code class="code">
  import { Observable } from 'rxjs';

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  console.log('just before subscribe');
  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });

  console.log('just after subscribe');
</code>

<p>
  Выполнение кода, описанного выше, выведет в консоли следующее:
</p>

<code class="code">
  just before subscribe
  got value 1
  got value 2
  got value 3
  just after subscribe
  got value 4
  done
</code>

<h3>2. new Subject — Активный рупор (Горячий / Multicast)</h3>
<p>
  <span class="accent">Subject</span> — это одновременно и Observable (на него можно подписаться), и Observer
  (у него есть методы <code>.next()</code>, <code>.error()</code>, <code>.complete()</code>).
</p>
<p>
  Он ничего не вычисляет сам, он просто берет значение, которое ты в него передал через <code>.next()</code>, и рассылает
  его всем текущим подписчикам одновременно.
</p>

<p>
  Аналогия: Это как прямой эфир на YouTube. Стрим идет независимо от того, смотрит его кто-то или нет.
  Если ты подключишься к стриму на 15-й минуте, ты не увидишь то, что было в начале. Ты и все остальные зрители
  видите один и тот же момент времени.
</p>

<p>
  Реальный пример: Клик по кнопке, шина событий (Event Bus), или глобальное состояние авторизации пользователя,
  на которое подписаны хедер, сайдбар и роутер.
</p>

  <code class="code">
  import { Subject } from 'rxjs';

  const subject = new Subject();

  subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
  });
  subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
  });

  subject.next(1);
  subject.next(2);
  subject.next(3);
</code>

<p>
  Выполнение кода, описанного выше, выведет в консоли следующее:
</p>

<code class="code">
  observerA: 1
  observerB: 1
  observerA: 2
  observerB: 2
  observerA: 3
  observerB: 3
</code>

<h3>
  Подытожим.
</h3>

<p>
  Используя <code>Subject</code>, мы можем не только получать изменения, подписавшись на них,
  но и транслировать их через <code>next()</code>.

  Если же говорить о <code>Observable</code>, то тут всё проще - они позволяют транслировать события только в момент инициализации.
  Таким образом, в коде мы можем использовать их ТОЛЬКО для получения изменений, используя метод <code>subscribe()</code>.
</p>
    