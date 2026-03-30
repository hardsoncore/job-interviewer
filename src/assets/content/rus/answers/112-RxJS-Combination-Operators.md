<p>
  Все операторы решают одну задачу — объединить несколько Observable — но ведут себя принципиально по-разному. Главные оси сравнения: когда начинать, когда завершиться, и как формировать эмит.
</p>

<h3>CombineLatest</h3>
<p>
  <strong>CombineLatest</strong> ждет, пока каждый поток (Observable) выдаст хотя бы одно значение. Затем, при любом новом значении из любого потока, выдает массив актуальных последних значений от всех потоков. Эмит — массив последних значений от каждого Observable.
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
  <strong>WithLatestFrom</strong> Похож на <code>combineLatest</code>, но здесь есть явный "лидер". Выдает значения только тогда, когда эмиттит главный (source) поток. Остальные потоки просто "подмешивают" свои последние актуальные состояния.
  <br>
  Эмит — массив последних значений от всех "подмешивающих" Observable, но только в момент эмита главного потока.
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
  <strong>Zip</strong> собирает значения из потоков по их "порядковому номеру". Ждет первое значение от всех — отдает массив. Ждет второе значение от всех — отдает массив. Если один поток выдал 10 значений, а другой только 2, zip выдаст только 2 массива, а остальные значения первого потока будут висеть в памяти и ждать пару.
  <br>
  Эмит — массив значений от каждого Observable, сгруппированных по порядковому номеру.
</p>

<code class="code">
  import { zip, of } from 'rxjs';

  const obs1 = of(1, 2, 3);
  const obs2 = of('A', 'B');

  zip(obs1, obs2).subscribe(result => console.log(result));
  // → [1, "A"]
  // → [2, "B"]
  // (3 из obs1 висит в памяти, ждет пару)
</code>

<h3>ForkJoin</h3>
<p>
  <strong>ForkJoin</strong> ждет, ппока все переданные потоки (Observable) завершатся (complete), и только после этого отдает массив их последних значений. Если хотя бы один из Observable не завершится, ForkJoin не эмитит ничего. Если один поток упадет с ошибкой — упадет весь forkJoin.
</p>

<code class="code">
  import { forkJoin, of } from 'rxjs';

  const obs1 = of(1, 2, 3);
  const obs2 = of('A', 'B', 'C');

  forkJoin([obs1, obs2]).subscribe(result => console.log(result));
  // → [3, "C"] (только после завершения обоих Observable)
</code>

<h3>merge</h3>
<p>
  <strong>merge</strong> подписывается на все потоки (Observable) одновременно. Как только любой из них выдает значение - оно сразу летит в итоговый поток. Никаких массивов, просто плоский поток данных от всех источников.
  <br>
  Эмит — значения от каждого Observable, как только они появляются, без ожидания других Observable.
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
  <strong>concat</strong> эмитит значения от Observable последовательно, ожидая завершения предыдущего Observable, прежде чем начать эмитить значения от следующего. Эмит — значения от каждого Observable, но только после завершения предыдущего Observable.
</p>

<code class="code">
  import { concat, of } from 'rxjs';

  const obs1 = of(1, 2, 3);
  const obs2 = of('A', 'B', 'C');

  concat(obs1, obs2).subscribe(result => console.log(result));
  // → 1
  // → 2
  // → 3
  // (obs1 завершился, теперь начинается obs2)
  // → "A"
  // → "B"
  // → "C"
</code>
