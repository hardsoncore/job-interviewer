<p class="info">
  <span class="accent">Pseudo-elements</span> are a way to style parts of an element that do not exist in the HTML markup (in the DOM tree), but are visually rendered by the browser. They start with a double colon <code>::</code> (although a single <code>:</code> is allowed for compatibility with older CSS versions).
</p>

<h3>Main types of pseudo-elements</h3>
<p>
  There are quite a few of them, but in real work, you will use these 5-6 ones in 90% of cases:
</p>

<h4>1. Generated content (::before and ::after)</h4>

<p>The most powerful tools for a layout designer. They create a virtual element that is placed inside the parent, at the very beginning (<code>::before</code>) or at the very end (<code>::after</code>).</p>

<p>What for: Icons, decorative elements, breadcrumbs, custom checkboxes, clearing floats (clearfix).</p>

<p>Requirement: The content property. Without it (even if it is empty <code>content: '';</code>), the pseudo-element will not appear.</p>

<h4>2. Text (::first-letter and ::first-line)</h4>

<p><code>::first-letter</code>: Styles the first letter of a block-level element (drop cap effect in books).</p>

<p><code>::first-line</code>: Styles the first line of text. Note that the line length depends on the browser window width, so styles are applied dynamically.</p>

<h4>3. Interface</h4>

<p><code>::placeholder</code>: Responsible for the style of the hint text in <code>input</code> and <code>textarea</code>.</p>

<p><code>::selection</code>: How the text looks when the user selects it with the mouse (usually changes <code>background</code> and <code>color</code>).</p>
<p><code>::marker</code>: Styles markers (dots/numbers) in <code>ul</code> and <code>ol</code> lists.</p>

<h4>4. Advanced (rarely used, but useful)</h4>

<p><code>::backdrop</code>: The background that appears behind elements in fullscreen mode (for example, behind an open <code>dialog</code> or a video).</p>
<p><code>::file-selector-button</code>: The "Choose file" button inside <code>input type="file"</code>.</p>
