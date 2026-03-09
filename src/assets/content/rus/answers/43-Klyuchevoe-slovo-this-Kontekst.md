
<p class="info info--blue">
  <b>Главное правило <code>this</code></b></br>
  <span>
    Значение <code>this</code> определяется в момент вызова функции, а не в момент её создания
    (за исключением стрелочных функций).
  </span>
  </br>
</p>

<p>Чтобы понять, чему равен <code>this</code>, нужно посмотреть на то, как вызывается функция, а не где она написана.</p>

<h3>1. Глобальный контекст и обычный вызов функции</h3>
<p>Если функция вызывается сама по себе, без привязки к объекту:</p>

<ul>
  <li>
    Без строгого режима (non-strict mode):
    <code>this</code> ссылается на глобальный объект (в браузере это <code>window</code>).
  </li>

  <li>В строгом режиме ("use strict"): <code>this</code> будет равен <code>undefined</code>.</li>
</ul>

<code class="code">
  function showContext() {
    console.log(this);
  }
  showContext(); // window или undefined (при "use strict")
</code>

<h3>2. Вызов в качестве метода объекта</h3>
<p>Если функция вызывается как метод объекта (через точку), <code>this</code> указывает на объект, стоящий слева от точки.</p>
<code class="code">
  const user = {
    name: 'Diuna',
    bark() {
      console.log(this.name);
    }
  };
  user.bark(); // 'Diuna', так как слева от точки находится user
</code>

<p>Опасность: потеря контекста Если передать метод как коллбэк или присвоить другой переменной, связь с объектом теряется.</p>

<code class="code">
  const lostBark = user.bark;
  lostBark(); // undefined, так как вызывается просто как функция
</code>

<h3>3. Стрелочные функции (Arrow Functions)</h3>
<p class="info info--orange">
  У стрелочных функций нет своего <code>this</code>.
</p>
<p>
  Стрелочные функции берут его из лексического окружения
  (внешней области видимости) в момент своего создания, и это значение больше никогда не меняется.
</p>

<code class="code">
  const group = {
    title: 'Frontend Team',
    showList() {
      setTimeout(() => {
        // this берется из showList, который указывает на group
        console.log(this.title);
      }, 1000);
    }
  };
</code>
    