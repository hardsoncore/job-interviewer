
<h3>Что такое Standalone Components?</h3>
<p>
  Если говорить просто, <span class="accent">Standalone Components</span> - это компоненты, директивы и пайпы, которые полностью
  самодостаточны. Их больше не нужно декларировать (добавлять в массив declarations) в каком-либо <code>@NgModule</code>,
  чтобы использовать.
</p>

<h3>Ключевые особенности:</h3>

<p>
  <strong>Флаг standalone: true:</strong> В декораторе <code>@Component</code> (или <code>@Directive</code> /
  <code>@Pipe</code>) явно указывается этот флаг.
</p>
<p>
  <strong>Собственный массив imports:</strong> Теперь компонент сам напрямую запрашивает всё, что ему нужно для отрисовки
  шаблона. Сюда можно импортировать другие standalone-компоненты, директивы, пайпы или классические модули (например,
  <code>CommonModule</code> или <code>ReactiveFormsModule</code>).
</p>

<code class="code">
  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { UiButtonComponent } from './ui-button.component';

  @Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [CommonModule, UiButtonComponent], // Зависимости на уровне компонента
    template: `
      &lt;div * ngIf="user">
        &lt;h1>{{ user.name }}</h1>
        &lt; app - ui - button > Редактировать </app-ui-button>
      &lt;/div>
    `
  })

  export class UserProfileComponent {
    user = { name: 'John Doe' };
  }
</code>

<h3>Почему отказались от NgModules?</h3>
<p>
  <code>NgModule</code> долгое время был ядром фреймворка, но со временем экосистема и требования к веб-разработке изменились.
</p>
<p>
  Вот главные причины сдвига парадигмы:
</p>
<p>
  <strong>Уменьшение бойлерплейта и простота:</strong> <code>NgModule</code> создавал лишнюю абстракцию. Приходилось держать
  в голове две структуры:
  дерево компонентов и дерево модулей. Без модулей код становится намного линейнее. Ментальная модель теперь гораздо ближе к
  компонентным фреймворкам вроде Vue, где компонент просто импортирует то, что ему нужно в скрипте, без посредников-модулей.
</p>
<p>
  <strong>Лучший Tree-Shaking (оптимизация бандла):</strong> Когда зависимости указаны на уровне самого компонента, сборщикам
  (<code>Webpack</code>, <code>Vite</code>/<code>Esbuild</code>) гораздо проще статически проанализировать код.
  Инструменты сборки точно знают, что используется, и уверенно вырезают "мертвый код", делая приложение легче.
</p>
<p>
  <strong>Упрощенный Lazy Loading:</strong> Раньше, чтобы лениво загрузить один компонент, приходилось создавать вокруг него
  искусственный модуль (<code>NgModule</code>) со своим файлом роутинга. Теперь роутер Angular умеет делать
  <code>loadComponent</code> напрямую.
</p>
<p>
  <strong>Решение проблемы "SharedModules":</strong> В старой архитектуре проекты часто обрастали гигантскими
  <code>SharedModule</code>, которые импортировались повсюду. В итоге компоненты получали доступ к десяткам директив и
  пайпов, которые им на самом деле были не нужны. Standalone-подход заставляет точечно импортировать только необходимое,
  соблюдая принцип строгой изоляции.
</p>
    