
<h3>input() вместо @Input()</h3>
<p>
  <strong>input()</strong> - это функция, которая принимает данные от родителя и возвращает реактивный <code>Signal</code>
  (только для чтения). Она автоматически подписывается на изменения и обновляет шаблон, когда данные меняются.
</p>
<p>
  <strong>Главный плюс:</strong> Полностью избавляет от громоздкого ngOnChanges. Все реакции на новые данные пишутся
  чисто и декларативно через <code>computed()</code>.
</p>
<p>
  <strong>Типизация:</strong> Больше не нужно обманывать TS восклицательным знаком (!). Для обязательных пропсов просто
  пишем <code>input.required&lt;string&gt;()</code>.
</p>

<code class="code">
  import { Component, input } from '@angular/core';

  @Component({...})
  export class ChildComponent {
    // name имеет тип Signal&lt;string>
    name = input&lt;string>();

    // computedName будет автоматически обновляться при изменении name
    computedName = computed(() => this.name() + '!');
  }
</code>

<h3>output() вместо @Output()</h3>
<p>
  <strong>output()</strong> - это функция, которая создает <code>OutputEmitterRef</code>, который родитель может читать и изменять.
  Это позволяет легко отправлять данные обратно вверх по иерархии компонентов.
</p>

<p>
  <strong>Главный плюс:</strong> Больше не тянет за собой тяжелый RxJS (<code>EventEmitter</code> под капотом был завязан
  на <code>Subject</code>). Механизм стал нативным, легковесным и более быстрым.
</p>
<p>
  <strong>Безопасность:</strong> Защищает от случайных вызовов <code>error()</code> или <code>complete()</code>,
  которые могли "убить" классический эмиттер.
</p>

<code class="code">
  import { Component, output } from '@angular/core';

  @Component({...})
  export class ChildComponent {
    // panelClosed имеет тип OutputEmitterRef<void>
    panelClosed = output&lt;void>();

    close() {
      this.panelClosed.emit(); // Вызов метода emit
    }
  }
</code>

<h3>model() для двусторонней связи, вместо @Input + @Output</h3>
<p>
  <strong>model()</strong> - это синтаксический сахар для создания сигнала, который работает и как вход, и как выход одновременно.
  Идеально подходит для форм и компонентов, которые должны поддерживать двустороннюю связь данных (Two-way Binding).
</p>

<p>
  <strong>Главный плюс:</strong> Заменяет бойлерплейт. Раньше приходилось писать пару <code>@Input() value</code> и
  <code>@Output() valueChange</code>. Теперь достаточно <code>model()</code>. При вызове <code>this.myModel.set(newValue)</code>
  Angular сам, под капотом, пробросит событие наверх.
</p>
<p>
  <strong>Важное отличие:</strong> Не путать с <code>[(ngModel)]</code> из FormsModule. <code>ngModel</code> работает с нативными
  HTML-элементами (через ControlValueAccessor), а <code>model()</code> предназначен для общения твоих
  собственных компонентов друг с другом.
</p>

<code class="code">
  import { Component, model } from '@angular/core';

  @Component({...})
  export class ChildComponent {
    // value имеет тип Signal&lt;string> и может быть как входом, так и выходом
    value = model&lt;string>();
  }
</code>
    