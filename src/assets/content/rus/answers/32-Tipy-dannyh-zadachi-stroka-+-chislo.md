
<h2>Типы данных в JavaScript</h2>

<p>
  В JavaScript есть <strong>8 основных типов данных</strong>.
</p>

<p>
  <strong>Семь из них называют «примитивными» типами данных:</strong>
</p>

<ul>
  <li>
    <strong>number</strong> — для любых чисел: целочисленных или чисел с плавающей точкой;
    целочисленные значения ограничены диапазоном
    <code>±(2<sup>53</sup> − 1)</code>.
  </li>
  <li>
    <strong>bigint</strong> — для целых чисел произвольной длины (обычно с n в конце: <code>123n</code>).
  </li>
  <li>
    <strong>string</strong> — для строк. Строка может содержать ноль или больше символов,
    отдельного символьного типа не существует.
  </li>
  <li>
    <strong>boolean</strong> — для значений <code>true</code> / <code>false</code>.
  </li>
  <li>
    <strong>null</strong> — для неизвестных значений; отдельный тип,
    имеющий одно значение <code>null</code>.
  </li>
  <li>
    <strong>undefined</strong> — для неприсвоенных значений; отдельный тип,
    имеющий одно значение <code>undefined</code>.
  </li>
  <li>
    <strong>symbol</strong> — для уникальных идентификаторов.
  </li>
</ul>

<p>
  <strong>И один тип не является «примитивным» и стоит особняком:</strong>
</p>

<ul>
  <li>
    <strong>object</strong> — для более сложных структур данных.
  </li>
</ul>

<h3>Оператор typeof</h3>

<p>
  Оператор <code>typeof</code> позволяет узнать, какой тип данных сохранён в переменной.
</p>

<p>
  Он имеет две формы: <code>typeof x</code> или <code>typeof(x)</code>.
  Возвращает строку с именем типа, например <code>"string"</code>.
</p>

<h3>Особые случаи оператора typeof</h3>

<ul>
  <li><code>typeof null</code> возвращает <code>"object"</code> — это историческая ошибка, которая сохраняется для совместимости.</li>
  <li><code>typeof []</code> возвращает <code>"object"</code> — массивы являются объектами. У массивов есть отдельная проверка - <code>Array.isArray(value)</code></li>
  <li>
    <code>typeof NaN</code> возвращает <code>"number"</code> — NaN (Not-a-Number) считается числом, хотя это особое значение,
    обозначающее результат неудачных математических операций. Есть специальная проверка  <code>isNaN(value)</code>, чтобы проверить на NaN.</li>
  <li><code>typeof undefined</code> возвращает <code>"undefined"</code>.</li>
  <li><code>typeof function() {}</code> возвращает <code>"function"</code>, хотя функции являются объектами.</li>
  <li>Классы также возвращают <code>"function"</code>, потому что классы — это синтаксический сахар над функциями-конструкторами.</li>
</ul>

    