<h3>4 Core Principles of OOP</h3>
<p><span class="accent">OOP</span> - this is a set of engineering hygiene rules. They are needed to make the code easy to read, safe to extend, and so that any developer (or even yourself) can quickly understand it after six months.</p>

<h4>Encapsulation (Hiding)</h4>

<p><strong>Essence:</strong> Bundling data (state) and the methods that operate on it within a single unit (class), as well as hiding implementation details from the outside world.</p>

<p><strong>Why:</strong> To protect data from unauthorized direct access or modification. Interaction with the object occurs only through its public API (getters, setters, methods).</p>

<p><strong>In practice:</strong> Using access modifiers (<code>private</code>, <code>protected</code> in TypeScript) to hide a service's internal logic from components.</p>

<h4>Abstraction (Simplification)</h4>

<p><strong>Essence:</strong> Highlighting only the characteristics and behaviors of an object that are relevant to a specific task, while ignoring all insignificant details.</p>

<p><strong>Why:</strong> To reduce system complexity. Focusing on what the object does, rather than how it implements it under the hood.</p>

<p><strong>In practice:</strong> Designing contracts using abstract classes or interfaces (<code>interface</code>) that define strict rules for components while hiding complex implementation.</p>

<h4>Inheritance (Reuse)</h4>

<p><strong>Essence:</strong> A mechanism that allows one class (child) to inherit the properties and methods of another class (parent/base).</p>

<p><strong>Why:</strong> To eliminate code duplication (the DRY principle) and build a logical hierarchy of entities.</p>

<p><strong>In practice:</strong> Creating, for example, a <code>BaseComponent</code> with shared methods (like unsubscribing from streams upon destruction) and extending it (<code>extends</code>) in specific UI components.</p>

<h4>Polymorphism (One interface — many implementations)</h4>

<p><strong>Essence:</strong> The ability of a system to use objects with the same interface without knowing their specific types or internal structure.</p>

<p><strong>Why:</strong> Code flexibility and extensibility. Making the same method call on different objects results in the execution of different logic, specific to each object.</p>

<p><strong>In practice:</strong> Overriding base methods in child classes. Calling <code>save()</code> on different data models will save them differently, even though the call signature remains identical.</p>
