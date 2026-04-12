<p class="info">
  <span class="accent">Pseudo-classes</span> are special selectors that let you style elements based on their state, position in the document structure, or other conditions. They start with a colon <code>:</code>.
</p>

<h2>1. State Pseudo-classes (Interactive)</h2>
<p>These selectors react to user actions:</p>

<ul>
    <li><code>:hover</code> — when the mouse cursor is over an element.</li>
    <li><code>:active</code> — the moment of clicking (holding down the mouse button).</li>
    <li><code>:focus</code> — when an element is selected (e.g., via the Tab key or a click).</li>
    <li><code>:focus-visible</code> — triggers only when navigating with a keyboard.</li>
</ul>

<h2>2. Structural Pseudo-classes</h2>
<p>They help style elements depending on their position in the DOM:</p>

<table>
    <thead>
        <tr>
            <th>Pseudo-class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>:first-child</code></td>
            <td>The first child of its parent.</td>
        </tr>
        <tr>
            <td><code>:last-child</code></td>
            <td>The last child of its parent.</td>
        </tr>
        <tr>
            <td><code>:nth-child(n)</code></td>
            <td>Selection by number or formula (e.g., 2n for even numbers).</td>
        </tr>
        <tr>
            <td><code>:only-child</code></td>
            <td>If the element is the only child.</td>
        </tr>
        <tr>
            <td><code>:not(selector)</code></td>
            <td>Exception: selects everything except the specified one.</td>
        </tr>
    </tbody>
</table>

<h2>3. Advanced Selectors (Modern CSS)</h2>

<p><code>:has()</code> — the "parent selector". It allows you to style a parent if it contains a specific element inside.</p>

<p>Example: <code>div:has(img)</code> — selects only those <code>div</code> elements that contain an image.</p>

<p>
  <code>:is()</code> — groups selectors for cleaner code.
  It allows you to group selectors instead of listing long chains separated by commas.
</p>

<code class="code">
  /* Without :is() */
  .content h1,
  .content h2,
  .content h3,
  .section h1,
  .section h2,
  .section h3 {
    color: red;
  }

  /* With :is() */
  :is(.content, .section) :is(h1, h2, h3) {
    color: red;
  }
</code>

<p><code>:where()</code> — similar to <code>:is()</code>, but with zero specificity (easily overridden by other styles).</p>

<h2>4. Form Pseudo-classes</h2>

<p>These selectors apply to form elements depending on their state or attributes:</p>

<p><code>:disabled</code> — if the field is blocked (disabled).</p>

<p><code>:required</code> — if the field has a required attribute.</p>

<p><code>:invalid</code> / <code>:valid</code> — automatic validation (for example, if something else is typed into a <code>type="email"</code> field).</p>
<p><code>:checked</code> — for selected checkboxes and radio buttons.</p>

<p><code>:placeholder-shown</code> — styles the field while nothing is typed in it yet.</p>
