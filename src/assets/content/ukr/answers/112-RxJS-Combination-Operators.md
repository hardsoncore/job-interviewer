<p>
  Всі оператори вирішують одне завдання — об'єднати кілька Observable — але поводяться принципово по-різному. Головні осі порівняння: коли починати, коли завершуватися і як формувати еміт.
</p>

<h3>CombineLatest</h3>
<p>
  <strong>CombineLatest</strong> чекає, поки кожен потік (Observable) видасть хоча б одне значення. Потім, при будь-якому новому значенні з будь-якого потоку, видає масив актуальних останніх значень від усіх потоків. Еміт — масив останніх значень від кожного Observable.
</p>

<code class="code">
  import { combineLatest, of } from 'rxjs';

  const obs1 = of(1, 2, 3);
  const obs2 = of('A', 'B', 'C');

  combineLatest([obs1, obs2]).subscribe(result => console.log(result));
  // → [1, "A"]
  // → [2, "B"]
  // → [3, "C"]
</code>

<h3>WithLatestFrom</h3>
<p>
  <strong>WithLatestFrom</strong> схожий на <code>combineLatest</code>, але тут є явний "лідер". Видає значення тільки тоді, коли емітить головний (source) потік. Інші потоки просто "підмішують" свої останні актуальні стани.
  <br>
  Еміт — масив останніх значень від усіх "підмішуючих" Observable, але тільки в момент еміту головного потоку.
</p>

<code class="code">
  import { withLatestFrom, of } from 'rxjs';

  const source = of(1, 2, 3);
  const other = of('A', 'B', 'C');

  source.pipe(
    withLatestFrom(other)
  ).subscribe(result => console.log(result));
  // → [1, "C"]
  // → [2, "C"]
  // → [3, "C"]
</code>

<h3>Zip</h3>
<p>
  <strong>Zip</strong> збирає значення з потоків за їхнім "порядковим номером". Чекає на перше значення від усіх — віддає масив. Чекає на друге значення від усіх — віддає масив. Якщо один потік видав 10 значень, а інший тільки 2, zip видасть тільки 2 масиви, а решта значень першого потоку будуть висіти в пам'яті й чекати на пару.
  <br>
  Еміт — масив значень від кожного Observable, згрупованих за порядковим номером.
</p>

<code class="code">
  import { zip, of } from 'rxjs';

  const obs1 = of(1, 2, 3);
  const obs2 = of('A', 'B');

  zip(obs1, obs2).subscribe(result => console.log(result));
  // → [1, "A"]
  // → [2, "B"]
  // (3 з obs1 висить в пам'яті, чекає пару)
</code>

<h3>ForkJoin</h3>
<p>
  <strong>ForkJoin</strong> чекає, поки всі передані потоки (Observable) завершаться (complete), і тільки після цього віддає масив їхніх останніх значень. Якщо хоча б один з Observable не завершиться, ForkJoin не земітить нічого. Якщо один потік впаде з помилкою — впаде весь forkJoin.
</p>

<code class="code">
  import { forkJoin, of } from 'rxjs';

  const obs1 = of(1, 2, 3);
  const obs2 = of('A', 'B', 'C');

  forkJoin([obs1, obs2]).subscribe(result => console.log(result));
  // → [3, "C"] (тільки після завершення обох Observable)
</code>

<h3>merge</h3>
<p>
  <strong>merge</strong> підписується на всі потоки (Observable) одночасно. Як тільки будь-який із них видає значення — воно відразу летить у підсумковий потік. Ніяких масивів, просто плоский потік даних від усіх джерел.
  <br>
  Еміт — значення від кожного Observable, як тільки вони з'являються, без очікування на інші Observable.
</p>

<code class="code">
  import { merge, of } from 'rxjs';

  const obs1 = of(1, 2, 3);
  const obs2 = of('A', 'B', 'C');

  merge(obs1, obs2).subscribe(result => console.log(result));
  // → 1
  // → "A"
  // → 2
  // → "B"
  // → 3
  // → "C"
</code>

<h3>concat</h3>
<p>
  <strong>concat</strong> емітить значення від Observable послідовно, очікуючи завершення попереднього Observable, перш ніж почати емітити значення від наступного. Еміт — значення від кожного Observable, але тільки після завершення попереднього Observable.
</p>

<code class="code">
  import { concat, of } from 'rxjs';

  const obs1 = of(1, 2, 3);
  const obs2 = of('A', 'B', 'C');

  concat(obs1, obs2).subscribe(result => console.log(result));
  // → 1
  // → 2
  // → 3
  // (obs1 завершився, тепер починається obs2)
  // → "A"
  // → "B"
  // → "C"
</code>
