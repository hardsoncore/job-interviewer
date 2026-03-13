<h3>1. any — «Отключение типизации» (Вседозволенность)</h3>
<p>
  <code>any</code> говорит компилятору: «Поверь мне, я знаю, что делаю, не проверяй эту переменную». <b>Это побег из строгой системы типов обратно в дикий мир чистого JavaScript.</b>
</p>

<p>
  <span class="accent">Поведение:</span> Любое значение может быть присвоено переменной с типом <code>any</code>, и сама переменная <code>any</code> может быть присвоена куда угодно.
</p>

<p>
  <span class="accent">Доступ к свойствам:</span> Компилятор позволяет вызывать любые методы и обращаться к любым свойствам объекта, даже если их не существует. Ошибки всплывут только в рантайме (во время выполнения).
</p>

<p>
  <span class="accent">Когда использовать:</span> <b>Практически никогда в новом коде.</b> Это допустимо лишь на этапе добавления новой функциональности или фикса багов - пока решение еще не до конца готово и ДО пуша кода в удаленный репозиторий. Либо же во время постепенной миграции большого легаси-проекта на TypeScript.
</p>

<code class="code">
  let data: any = "hello";
  data = 42; // Ок
  data.fetchItems(); // Ошибки компиляции нет, но код упадет в браузере
</code>

<h3>2. unknown — «Безопасный any» (Неизвестность)</h3>

<p>
  Тип <code>unknown</code> был введен как типобезопасная альтернатива <code>any</code>. Он говорит: «Здесь может быть что угодно, но пока ты точно не докажешь, что это за тип, я не дам тебе с ним работать».
</p>

<p>
  <span class="accent">Поведение:</span> Как и в <code>any</code>, в <code>unknown</code> можно положить абсолютно всё (это так называемый Top Type). Но значение типа <code>unknown</code> нельзя напрямую присвоить другим типам (кроме <code>any</code> и самого <code>unknown</code>).
</p>

<p>
  <span class="accent">Доступ к свойствам:</span> Запрещен, пока тип не будет сужен (Type Narrowing) с помощью операторов <code>typeof</code>, <code>instanceof</code> или пользовательских функций проверок (Type Guards).
</p>

<p>
  <span class="accent">Когда использовать:</span> При получении любых данных из внешнего мира. Идеально подходит для ответов от API, результатов <code>JSON.parse()</code>, чтения неизвестных структур из <code>localStorage</code> или работы с библиотеками без типизации.
</p>

<code class="code">
  let input: unknown = "hello";

  // Ошибка компиляции: Type 'unknown' is not assignable to type 'string'
  // let str: string = input;

  if (typeof input === "string") {
    let str: string = input; // Теперь это безопасно
    console.log(str.toUpperCase()); // HELLO
  }
</code>

<p class="info info--orange">
  Важно: <code>unknown</code> — это не просто более строгий <code>any</code>, а фундаментально другой тип. Он обеспечивает безопасность типов, заставляя вас явно проверять и сужать тип перед использованием, в то время как <code>any</code> полностью отключает эту проверку.
</p>

<h3>3. never — «Невозможное состояние» (Пустота)</h3>

<p>
  Тип <code>never</code> представляет тип, который никогда не может иметь значение. Он используется для обозначения функций, которые никогда не возвращают (например, выбрасывают исключение или бесконечно выполняются), или для переменных, которые не могут быть инициализированы.
</p>

<p>
  <span class="accent">Поведение:</span> Переменной типа <code>never</code> нельзя присвоить ничего (даже <code>any</code>).
</p>

<p>
  <span class="accent">Где встречается автоматически:</span> В функциях, которые всегда бросают ошибку (<code>throw new Error()</code>), или функциях с бесконечным циклом (<code>while(true)</code>), которые никогда не завершаются.
</p>

<p>
  <span class="accent">Когда использовать:</span> Самое мощное применение never — это создание исчерпывающих проверок (Exhaustiveness checking) в конструкциях switch или <code>if/else</code>. Это гарантирует, что при расширении типов в будущем ты не забудешь обработать новые варианты.
</p>

<code class="code">
  type AppState = 'loading' | 'success' | 'error';

  function handleState(state: AppState) {
    switch (state) {
      case 'loading': return console.log('Загрузка...');
      case 'success': return console.log('Готово!');
      case 'error': return console.log('Ошибка!');
      default:
        // Если мы добавим новый статус в AppState (например, 'empty'),
        // но забудем добавить case для него, TypeScript выдаст ошибку на этой строке,
        // так как тип 'empty' не сможет присвоиться в never.
        const exhaustiveCheck: never = state;
        return exhaustiveCheck;
    }
  }
</code>
<p class="info info--orange">
  Важно: <code>never</code> — это противоположность <code>unknown</code> (bottom type). Если <code>unknown</code> может быть любым типом, то <code>never</code> не может быть ни одним типом. Это тип, который не имеет ни одного возможного значения.
</p>
