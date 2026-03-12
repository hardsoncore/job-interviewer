<p>
  <code>Object.defineProperty()</code> is a static method that allows you to directly define a new property on an object or modify an existing one, and then returns that object.
</p>

<p>
  This method is useful when you need to create a property with specific characteristics, such as immutability, non-enumerability, or non-configurability. It also allows you to create getters and setters to control access to a property.
</p>
<p>
  Regarding practical application, <code>Object.defineProperty()</code> is often used in libraries and frameworks to create APIs with specific data access rules, as well as to optimize performance by controlling how properties interact with JavaScript mechanisms.
</p>

<h4>Syntax</h4>

<code class="code">
  Object.defineProperty(obj, prop, descriptor);
</code>

<p>
  <code>obj</code> — the object on which the property will be defined.
</p>
<p>
  <code>prop</code> — the name of the property to be defined or modified.
</p>
<p>
  <code>descriptor</code> — the object that describes the configuration of the property. It can contain the following keys:
</p>

<p>Descriptors are of two types: <strong>data descriptors</strong> and <strong>accessor descriptors</strong>. Depending on the type of descriptor, the set of allowed keys will vary.</p>

<p>Common descriptor keys - available for both types</p>
<ul>
  <li><code>enumerable</code> — indicates whether the property will be enumerated during object iteration. Defaults to <code>false</code>.</li>
  <li><code>configurable</code> — indicates whether the property can be deleted or modified. Defaults to <code>false</code>.</li>
</ul>

<p>Data descriptors - describe the classic value of a property</p>
<ul>
  <li><code>value</code> — the value of the property. Defaults to <code>undefined</code>.</li>
  <li><code>writable</code> — indicates whether the value of the property can be changed. Defaults to <code>false</code>.</li>
</ul>

<p>Accessor descriptors - describe properties with getters and setters</p>
<ul>
  <li><code>get</code> — (defaults to <code>undefined</code>): A function that is implicitly called without arguments whenever the property is accessed. The return value of this function becomes the property's value.</li>

  <li><code>set</code> — (defaults to <code>undefined</code>): A function that is called with one argument (the new value) when an attempt is made to assign a new value to the property.</li>
</ul>

<p class="info info--orange">
  Important rule: a descriptor cannot be both at the same time. If you specify <code>value</code> and <code>get</code> in the same call, JavaScript will throw an error:

  <code class="code">
    Object.defineProperty(obj, 'prop', {
        value: 42,
        get() { return this._prop; }
    });

    // TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute
  </code>
</p>

<h4>Usage example</h4>
<code class="code">
  const obj = {};

  // Define the 'name' property using Object.defineProperty
  Object.defineProperty(obj, 'name', {
  value: 'Alice',
  writable: false, // The 'name' property cannot be changed
  enumerable: true,
  configurable: false // The 'name' property cannot be deleted or its configuration changed
  });

  console.log(obj.name); // Alice

  // Attempt to change the value of the 'name' property
  obj.name = 'Bob';
  console.log(obj.name); // Alice

  // Attempt to delete the 'name' property
  delete obj.name;
  console.log(obj.name); // Alice
</code>

<h4>Why use this in everyday practice?</h4>
<p>
  In regular product tasks, you rarely need to use <code>Object.defineProperty</code> directly. For getters and setters, a more concise syntax of classes or object literals is now more commonly used (for example, <code>get propName() { ... }</code>).
</p>
<p>
  However, understanding how <code>Object.defineProperty</code> works is important for a deep understanding of JavaScript, especially if you plan to work with frameworks that actively use this feature to create reactive properties or optimize performance.
</p>

<h4>Usage in Vue 2</h4>

<p>
  In Vue, <code>Object.defineProperty</code> is used to create reactive properties, track changes in data, and automatically update the DOM when that data changes.
</p>

<p>
  <code>Object.defineProperty</code> as the fundamental basis of reactivity is an exclusive feature of Vue 2. Other frameworks (even the next generations of Vue itself) have taken completely different paths.
</p>
