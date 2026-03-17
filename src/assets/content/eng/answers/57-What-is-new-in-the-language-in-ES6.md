<h3>ECMAScript 2015 (ES6)</h3>

<p>
  Why is everyone still talking about ES6 (ECMAScript 2015)?
  <br>
  This update became the largest in the history of the language (so far), transforming JS from a "scripting language" into a serious tool for developing large applications.
</p>

<p>
  So what exactly is new in the language with the release of ES6?
</p>

<h3>1. Variables: let and const</h3>
<p>Variables with block scope (<code>let</code> and <code>const</code>) arrived to replace variables with global/function scope (<code>var</code>).</p>

<p>The concept of the <span class="accent">Temporal Dead Zone</span> also appeared - this is a period in JavaScript between the start of a scope (block) and the moment of initialization of a variable declared via <code>let</code> or <code>const</code>. In this zone, the variable already exists but is inaccessible, and any attempt to access it before the declaration line throws a <code>ReferenceError</code>.</p>

<h3>2. Arrow Functions</h3>
<p>Shorter syntax and different <code>this</code> behavior:</p>

<code class="code">
  const add = (a, b) => a + b;
</code>

<h4>Key differences between arrow functions and regular ones:</h4>
<ul>
  <li>Arrow functions do not have their own <code>this</code> context. They inherit it from the surrounding lexical context.</li>
  <li>Arrow functions do not have their own <code>arguments</code> object.</li>
  <li>Arrow functions do not have access to the <code>super</code> object and cannot be used as constructors with the <code>new</code> keyword.</li>
</ul>

<h3>3. Template Literals</h3>
<p>Using backticks <code>`</code> for interpolation:</p>

<code class="code">
  const name = 'Diuna';
  console.log(`Hello, ${name}!`); // Multiline strings are supported out of the box
</code>

<h3>4. Destructuring</h3>
<p>Convenient extraction of data from arrays and objects:</p>

<code class="code">
  // Object
  const { name, age } = user;
  // Array
  const [first, second] = colors;
</code>

<h3>5. Spread and Rest operators (...)</h3>
<p><span class="accent">Spread</span>: "unpacks" an array or object (copying, merging).</p>
<p><span class="accent">Rest</span>: gathers the remaining function arguments into an array.</p>

<code class="code">
  const combinedArr = [...arr1, ...arr2]; // Spread
  function sum(...args) { return args.reduce((a, b) => a + b); } // Rest
</code>

<h3>6. Default Parameters</h3>
<p>Now you can set values right in the function declaration:</p>

<code class="code">
  function greet(name = 'Guest') { ... }
</code>

<h3>7. Classes</h3>
<p>Syntactic sugar over prototypal inheritance. The keywords <code>class</code>, <code>constructor</code>, <code>static</code>, <code>extends</code>, <code>super</code> were introduced.</p>

<code class="code">
  class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(`${this.name} makes a sound`); }
  }
</code>

<h3>8. Modules (Import / Export)</h3>
<p>Official support for modularity at the language level:</p>

<code class="code">
  export const pi = 3.14;
  import { pi } from './math.js';
</code>

<h3>9. Promises</h3>
<p>A built-in mechanism for working with asynchronous code, eliminating "callback hell".</p>

<p>States: <code>pending</code>, <code>fulfilled</code>, <code>rejected</code>.</p>

<h3>10. Object Enhancements</h3>
<p>Shorthand property names: <code>{ name: name } → { name }</code>.</p>

<p>Computed property names: <code>[propName]: value</code>.</p>

<h3>11. New Data Types and Collections</h3>
<p><code>Map</code>: a collection of key-value pairs (the key can be an object).</p>
<p><code>Set</code>: a collection of unique values.</p>
<p><code>Symbol</code>: a new primitive for creating unique identifiers.</p>
