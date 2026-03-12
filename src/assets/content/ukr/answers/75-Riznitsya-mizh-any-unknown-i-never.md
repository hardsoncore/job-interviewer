<h3>1. any — «Відключення типізації» (Вседозволеність)</h3>
<p>
  <code>any</code> каже компілятору: «Повір мені, я знаю, що роблю, не перевіряй цю змінну». <b>Це втеча з суворої системи типів назад у дикий світ чистого JavaScript.</b>
</p>

<p>
  <span class="accent">Поведінка:</span> Будь-яке значення може бути присвоєно змінній з типом <code>any</code>, і сама змінна <code>any</code> може бути присвоєна куди завгодно.
</p>

<p>
  <span class="accent">Доступ до властивостей:</span> Компілятор дозволяє викликати будь-які методи та звертатися до будь-яких властивостей об'єкта, навіть якщо їх не існує. Помилки спливуть лише в рантаймі (під час виконання).
</p>

<p>
  <span class="accent">Коли використовувати:</span> <b>Практично ніколи в новому коді.</b> Це припустимо лише під час поступової міграції великого легасі-проєкту на TypeScript або для дуже швидких і тимчасових хаків під час налагодження.
</p>

<code class="code">
  let data: any = "hello";
  data = 42; // Ок
  data.fetchItems(); // Помилки компіляції немає, але код впаде в браузері
</code>

<h3>2. unknown — «Безпечний any» (Невідомість)</h3>

<p>
  Тип <code>unknown</code> був введений як типобезпечна альтернатива <code>any</code>. Він каже: «Тут може бути будь-що, але поки ти точно не доведеш, що це за тип, я не дам тобі з ним працювати».
</p>

<p>
  <span class="accent">Поведінка:</span> Як і в <code>any</code>, в <code>unknown</code> можна покласти абсолютно все (це так званий Top Type). Але значення типу <code>unknown</code> не можна безпосередньо присвоїти іншим типам (крім <code>any</code> і самого <code>unknown</code>).
</p>

<p>
  <span class="accent">Доступ до властивостей:</span> Заборонений, поки тип не буде звужений (Type Narrowing) за допомогою операторів <code>typeof</code>, <code>instanceof</code> або функцій перевірки користувача (Type Guards).
</p>

<p>
  <span class="accent">Коли використовувати:</span> При отриманні будь-яких даних із зовнішнього світу. Ідеально підходить для відповідей від API, результатів <code>JSON.parse()</code>, читання невідомих структур з <code>localStorage</code> або роботи з бібліотеками без типізації.
</p>

<code class="code">
  let input: unknown = "hello";

  // Помилка компіляції: Type 'unknown' is not assignable to type 'string'
  // let str: string = input;

  if (typeof input === "string") {
    let str: string = input; // Тепер це безпечно
    console.log(str.toUpperCase()); // HELLO
  }
</code>

<p class="info info--orange">
  Важливо: <code>unknown</code> — це не просто суворіший <code>any</code>, а фундаментально інший тип. Він забезпечує безпеку типів, змушуючи вас явно перевіряти та звужувати тип перед використанням, тоді як <code>any</code> повністю відключає цю перевірку.
</p>

<h3>3. never — «Неможливий стан» (Порожнеча)</h3>

<p>
  Тип <code>never</code> представляє тип, який ніколи не може мати значення. Він використовується для позначення функцій, які ніколи не повертають результат (наприклад, викидають виняток або нескінченно виконуються), або для змінних, які не можуть бути ініціалізовані.
</p>

<p>
  <span class="accent">Поведінка:</span> Змінній типу never не можна присвоїти нічого (навіть any).
</p>

<p>
  <span class="accent">Де зустрічається автоматично:</span> У функціях, які завжди кидають помилку (<code>throw new Error()</code>), або функціях з нескінченним циклом (<code>while(true)</code>), які ніколи не завершуються.
</p>

<p>
  <span class="accent">Коли використовувати:</span> Найпотужніше застосування never — це створення вичерпних перевірок (Exhaustiveness checking) у конструкціях switch або <code>if/else</code>. Це гарантує, що при розширенні типів у майбутньому ти не забудеш обробити нові варіанти.
</p>

<code class="code">
  type AppState = 'loading' | 'success' | 'error';

  function handleState(state: AppState) {
    switch (state) {
      case 'loading': return console.log('Завантаження...');
      case 'success': return console.log('Готово!');
      case 'error': return console.log('Помилка!');
      default:
        // Якщо ми додамо новий статус в AppState (наприклад, 'empty'),
        // але забудемо додати case для нього, TypeScript видасть помилку на цьому рядку,
        // оскільки тип 'empty' не зможе присвоїтися в never.
        const exhaustiveCheck: never = state;
        return exhaustiveCheck;
    }
  }
</code>
<p class="info info--orange">
  Важливо: <code>never</code> — це протилежність <code>unknown</code> (bottom type). Якщо <code>unknown</code> може бути будь-яким типом, то <code>never</code> не може бути жодним типом. Це тип, який не має жодного можливого значення.
</p>
