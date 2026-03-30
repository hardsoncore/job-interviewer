<h3>of</h3>
<p>Оператор <code>of</code> використовується для створення Observable з набору значень. Він приймає будь-яку кількість аргументів і повертає Observable, який емітує ці значення по одному, а потім завершує потік.</p>

<code class="code">
  import { of } from 'rxjs';
  of(1, 2, 3).subscribe(value => console.log(value));
  // → 1, 2, 3, complete
</code>

<h3>from</h3>
<p>Оператор <code>from</code> використовується для створення Observable з різних типів даних (масивів, промісів, ітераторів тощо). Він перетворює ці дані на потік, емітуючи кожне значення окремо.</p>

<code class="code">
  import { from } from 'rxjs';
  from([10, 20, 30]).subscribe(value => console.log(value));
  // → 10, 20, 30, complete
</code>

<h3>interval</h3>
<p>Оператор <code>interval</code> створює Observable, який емітує послідовність чисел із певним інтервалом часу. Він приймає один аргумент — інтервал у мілісекундах — і починає емітувати числа, починаючи з 0, із заданим інтервалом.</p>

<code class="code">
  import { interval } from 'rxjs';
  interval(1000).subscribe(value => console.log(value));
  // → 0, 1, 2, 3, ... (щосекунди)
</code>

<h3>timer</h3>
<p>Оператор <code>timer</code> створює Observable, який емітує перше значення після певної затримки, а потім продовжує емітувати послідовність чисел із заданим інтервалом. Він приймає два аргументи: перший — затримка перед першим емітуванням, другий — інтервал між подальшими емітуваннями.</p>

<code class="code">
  import { timer } from 'rxjs';
  timer(2000, 1000).subscribe(value => console.log(value));
  // → (через 2 секунди) 0, (через 3 секунди) 1, (через 4 секунди) 2, ...
</code>
