
<h3>
  JSON.stringify
</h3>

<p>
  <span class="accent">JSON</span> (JavaScript Object Notation) – это общий формат для представления значений и объектов.
  Его описание задокументировано в стандарте RFC 4627 (ещё 2006 год). Первоначально он был создан для JavaScript,
  но многие другие языки также имеют библиотеки, которые могут работать с ним. Таким образом,
  JSON легко использовать для обмена данными, когда клиент использует JavaScript, а сервер написан на Ruby/PHP/Java
  или любом другом языке.
</p>

<p>JavaScript предоставляет методы:</p>
<ul>
  <li><code>JSON.stringify</code> - для преобразования объектов в JSON.</li>
  <li><code>JSON.parse</code> - для преобразования JSON обратно в объект.</li>
</ul>

<p class="info info--blue">
  Полученная из метода <code>JSON.stringify</code> строка называется JSON-форматированным или
  <span class="accent">сериализованным объектом</span>.
  Мы можем отправить его по сети или поместить в обычное хранилище данных.
  </br>
  Соответственно, из метода <code>JSON.parse</code> - <span class="accent">десериализованным объектом</span>.
</p>

<p>Обратите внимание, что объект в формате JSON имеет несколько важных отличий от объектного литерала:</p>
<ul>
  <li>
    Строки используют двойные кавычки. Никаких одинарных кавычек или обратных кавычек в JSON.
    Так <code>'John'</code> становится <code>"John"</code>.
  </li>
  <li>
    Имена свойств объекта также заключаются в двойные кавычки. Это обязательно.
    Так <code>age:30</code> становится <code>"age":30</code>.
  </li>
  <li>
    Не допускаются комментарии.
  </li>
</ul>

<p><code>JSON.stringify</code> может быть применён и к примитивам.</p>
<p>JSON поддерживает следующие типы данных:</p>

<ul>
  <li>Объекты <code>{ ... }</code></li>
  <li>Массивы <code>[ ... ]</code></li>
  <li>Примитивы:
  <ul>
    <li>строки,</li>
    <li>числа,</li>
    <li>логические значения <code>true/false</code>,</li>
    <li><code>null</code>.</li>
  </ul>
  </li>
</ul>

<code class="code">
  // число в JSON остаётся числом
  alert( JSON.stringify(1) ) // 1

  // строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
  alert( JSON.stringify('test') ) // "test"

  alert( JSON.stringify(true) ); // true

  alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]
</code>

<p>
  Самое замечательное, что вложенные объекты поддерживаются и конвертируются автоматически.
</p>

<p>
  JSON является независимой от языка спецификацией для данных, поэтому <code>JSON.stringify</code>
  пропускает некоторые специфические свойства объектов JavaScript.
</p>
<p>А именно:</p>

<ul>
  <li>Свойства-функции (методы).</li>
  <li>Символьные свойства.</li>
  <li>Свойства, содержащие <code>undefined</code>.</li>
</ul>

<code class="code">
  let user = {
    sayHi() { // будет пропущено
      alert("Hello");
    },
    [Symbol("id")]: 123, // также будет пропущено
    something: undefined // как и это - пропущено
  };

  alert( JSON.stringify(user) ); // {} (пустой объект)
</code>

<p class="info info--blue">
  Важное ограничение: не должно быть циклических ссылок.
</p>

<code class="code">
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };

  meetup.place = room;       // meetup ссылается на room
  room.occupiedBy = meetup; // room ссылается на meetup

  JSON.stringify(meetup); // Ошибка: Преобразование цикличной структуры в JSON
</code>

<p>
  Здесь преобразование завершается неудачно из-за циклической ссылки:
  room.occupiedBy ссылается на meetup, и meetup.place ссылается на room.
</p>

<h3>
  Исключаем и преобразуем: replacer
</h3>

<p>
  Полный синтаксис <code>JSON.stringify</code>:
</p>
<code class="code">
  let json = JSON.stringify(value[, replacer, space]);
</code>
<ul>
  <li><strong>value</strong> - значение для кодирования</li>
  <li>
    <strong>replacer</strong> - массив свойств <code>([key, key...])</code> для кодирования
    или функция соответствия <code>function(key, value)</code>
  </li>
  <li><strong>space</strong> - Дополнительное пространство (отступы), используемое для форматирования</li>
</ul>

<p>
  В большинстве случаев <code>JSON.stringify</code> используется только с первым аргументом.
  Но если нам нужно настроить процесс замены, например, отфильтровать циклические ссылки,
  то можно использовать второй аргумент <code>JSON.stringify</code>.
  </br>
  Если мы передадим ему массив свойств, будут закодированы только эти свойства.
</p>

<code class="code">
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
  };

  room.occupiedBy = meetup; // room ссылается на meetup

  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}
</code>
<p>
  Здесь мы, наверное, слишком строги. Список свойств применяется ко всей структуре объекта.
  Так что внутри participants – пустые объекты, потому что name нет в списке.
</p>

<p>
  Если мы хотим, чтобы больше свойств было сериализовано, но не хотим указывать все имена свойств через запятую,
  можем использовать функцию-replacer.
  </br>
  В качестве replacer мы можем использовать функцию, а не массив.
  Функция будет вызываться для каждой пары (key, value), и она должна возвращать заменённое значение,
  которое будет использоваться вместо исходного. Или undefined, чтобы пропустить значение.
  (для более подробной информации см. Источник)
</p>
<code class="code">
  JSON.stringify(myObject, function replacer(key, value) {
    return (key == 'keyNameToSkip') ? undefined : value;
  })
</code>

<h3>
  Форматирование: space
</h3>
<p>
  Третий аргумент в <code>JSON.stringify(value, replacer, space)</code> - это количество пробелов,
  используемых для удобного форматирования.
</p>

<p>
  Ранее все JSON-форматированные объекты не имели отступов и лишних пробелов.
  Это нормально, если мы хотим отправить объект по сети. Аргумент <code>space</code>
  используется исключительно для вывода в удобочитаемом виде.
</p>

<h3>
  Пользовательский «toJSON»
</h3>
<p>
  Как и <code>toString</code> для преобразования строк, объект может предоставлять метод <code>toJSON</code>
  для преобразования в JSON. <code>JSON.stringify</code> автоматически вызывает его, если он есть.
</p>

<p>
  Например, добавим собственную реализацию метода <code>toJSON</code> в наш объект room:
</p>
<code class="code">
  let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };

  let meetup = {
    title: "Conference",
    room
  };

  alert( JSON.stringify(room) ); // 23

  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "room": 23
    }
  */
</code>
<p>
  Как видите, <code>toJSON</code> используется как при прямом вызове <code>JSON.stringify(room)</code>,
  так и когда room вложен в другой сериализуемый объект.
</p>

<h3>
  JSON.parse
</h3>

<p>
  Чтобы декодировать JSON-строку, нам нужен другой метод с именем <code>JSON.parse</code>.
</p>
<code class="code">
  let value = JSON.parse(str, [reviver]);
</code>
<ul>
  <li><strong>str</strong> - JSON для преобразования в объект</li>
  <li>
    <strong>reviver</strong> - необязательная функция, которая будет вызываться для каждой пары
    (ключ, значение) и может преобразовывать значение
  </li>
</ul>

<h3>
  Использование reviver
</h3>

<p>
  Представьте, что мы получили объект meetup с сервера в виде строки данных.
</p>
<code class="code">
  // title: (meetup title), date: (meetup date)
  let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
</code>

<p>
  А теперь десериализуем её, т.е. снова превратим в объект JavaScript и попробуем обратиться к объекту Date.
</p>
<code class="code">
  let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
  let meetup = JSON.parse(str);

  alert( meetup.date.getDate() ); // Error!
</code>
<p>
  Ой, ошибка!

  Значением meetup.date является строка, а не Date объект. Как <code>JSON.parse</code> мог знать,
  что он должен был преобразовать эту строку в Date?
</p>

<p>
  Давайте передадим <code>JSON.parse</code> функцию восстановления вторым аргументом,
  которая возвращает все значения «как есть», но date станет Date:
</p>
<code class="code">
  let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

  let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });

  alert( meetup.date.getDate() ); // 30 - теперь работает!
</code>
<p>
  Кстати, это работает и для вложенных объектов, в которых бедет ключ date!
</p>

<h3>
  Источники:
</h3>
<ul>
  <li>
    <a href="https://learn.javascript.ru/json">Источник 1</a>
  </li>
</ul>
    