
<p>
  Смысл использования <code>Subject.prototype.asObservable()</code> состоит в том, чтобы предотвратить
  утечку &quot;observer side&quot; из API (предотвратить утечку абстракции, когда вы не хотите,
  чтобы кто-либо мог вызвать метод <code>next()</code> у возвращаемого значения).
</p>
<code class="code">
  const myAPI = {
    getData: () =&gt; {
      const subject = new Subject();
      const source = new SomeWeirdDataSource();
      source.onMessage = (data) =&gt; subject.next({ type: &#39;message&#39;, data });
      source.onOtherMessage = (data) =&gt; subject.next({ type: &#39;othermessage&#39;, data });
      return subject.asObservable();
    }
  };
</code>

<p>Теперь, когда кто-то получит результат от <code>myAPI.getData()</code> , он не может вызвать метод next():</p>

<code class="code">
  const result = myAPI.getData();
  result.next(&#39;LOL hax!&#39;); // throws an error because next doesn&#39;t exist
</code>

<p>
  В целом, это хорошая практика - инкапсулировать логику по управлению потоками данных внутри сервисов и не давать
  возможности менять эти данные извне без особой необходимости.
</p>

<p>
  Однако, в этом подходе также есть пара моментов, которые стоит учитывать. Во-первых,
  <code>getData()</code>
  не ленив, как большинство наблюдаемых, он немедленно создаст базовый источник данных
  <code>SomeWeirdDataSource</code>
  (и, предположительно, некоторые побочные эффекты).
  Во-вторых, на выходе <code>getData()</code> возвращает <code>return subject.asObservable();</code>,
  которое каждый раз будет новым наблюдаемым.;
</p>

<p>
  Таким образом, использовать этот подход следует с осторожностью.
  Также следует вынести часть с созданием <code>new Subject</code> за пределы этой функции,
  дабы не создавать новую сущность при каждом вызове (например, производить инициализацию
  <code>Subject</code> в корне компонента).
</p>
    