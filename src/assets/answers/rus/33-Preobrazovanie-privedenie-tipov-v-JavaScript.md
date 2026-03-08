
<p>
  Существует <strong>3 наиболее широко используемых преобразования</strong>:
  строковое, численное и логическое.
</p>

<h3>Строковое преобразование</h3>

<p>
  Происходит, когда нам нужно что-то вывести. Может быть вызвано с помощью
  <code>String(value)</code>. Для примитивных значений работает очевидным образом.
</p>

<h3>Численное преобразование</h3>

<p>
  Происходит в математических операциях. Может быть вызвано с помощью
  <code>Number(value)</code>.
</p>

<p><strong>Преобразование подчиняется правилам:</strong></p>

<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>Значение</th>
      <th>Становится…</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>undefined</code></td>
      <td><code>NaN</code></td>
    </tr>
    <tr>
      <td><code>null</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>true / false</code></td>
      <td><code>1 / 0</code></td>
    </tr>
    <tr>
      <td><code>string</code></td>
      <td>
        Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка,
        получаем <code>0</code>, иначе из непустой строки «считывается» число.
        При ошибке результат <code>NaN</code>.
      </td>
    </tr>
  </tbody>
</table>

<h3>Логическое преобразование</h3>

<p>
  Происходит в логических операциях. Может быть вызвано с помощью
  <code>Boolean(value)</code>.
</p>

<p><strong>Подчиняется правилам:</strong></p>

<table border="1" cellpadding="6" cellspacing="0">
  <thead>
    <tr>
      <th>Значение</th>
      <th>Становится…</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>, <code>""</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>любое другое значение</td>
      <td><code>true</code></td>
    </tr>
  </tbody>
</table>

<h3>Важные особенности</h3>

<ul>
  <li>
    <code>undefined</code> при численном преобразовании становится <code>NaN</code>, а не <code>0</code>.
  </li>
  <li>
    <code>"0"</code> и строки из одних пробелов, например <code>" "</code>,
    при логическом преобразовании всегда дают <code>true</code>.
  </li>
</ul>
    