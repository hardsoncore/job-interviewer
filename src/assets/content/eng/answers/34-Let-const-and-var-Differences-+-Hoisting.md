<h3>var (Legacy of the past)</h3>
<p class="info info--orange">
  <strong>var</strong> — is a keyword for declaring variables that has existed since the earliest versions of JavaScript.
  <br>
  In modern JavaScript, <code>var</code> is practically no longer used, but knowing its mechanics is important for understanding how the language works under the hood.
</p>

<p>
  <strong>Scope:</strong> Limited to the function in which it is declared. It completely ignores block brackets <code>{ ... }</code> (for example, inside <code>if</code> or <code>for</code>). If declared outside of any function, it becomes a global variable and (in a browser context) is recorded as a property of the global <code>window</code> object.
</p>

<p>
  <strong>Hoisting:</strong> The engine hoists the declaration to the top of its scope during the context creation phase and immediately assigns it the value <code>undefined</code>. You can access the variable before its physical declaration in the code — you will get <code>undefined</code>, not an error.
</p>

<p>
  <strong>Redeclaration:</strong> You can declare the same variable multiple times in the same context. The engine will simply ignore subsequent <code>var</code> keywords and overwrite the value.
</p>

<h3>let (The modern standard for mutable data)</h3>
<p class="info info--blue">
  <strong>let</strong> was introduced in the ES6 (2015) standard and became the new standard for declaring variables whose values can change.
  <br>
  It solves many problems associated with <code>var</code> and provides more predictable behavior.
</p>
<p>
  <strong>Scope:</strong> Strictly block-level. The variable lives only inside the nearest curly braces <code>{ ... }</code>. This elegantly solves the old problem of the counter variable "leaking" out of a <code>for</code> loop.
</p>

<p>
  <strong>Hoisting and TDZ (Temporal Dead Zone):</strong> Formally, hoisting also occurs (the engine knows about the variable before code execution), but it is not initialized. Attempting to access it before the line of its declaration will throw a <code>ReferenceError</code>. This protective mechanism (TDZ) saves you from many non-obvious bugs.
</p>

<p>
  <strong>Reassignment:</strong> The value can be changed any number of times, but you cannot redeclare the variable (write <code>let a</code> a second time) in the same scope — it will result in a syntax error.
</p>

<h3>const (Immutable reference)</h3>
<p class="info info--blue">
  <strong>const</strong> was introduced in the ES6 (2015) standard and is intended for declaring variables whose value must not change.
</p>

<p>
  <strong>Scope:</strong> Subject to the same block scope and TDZ rules as <code>let</code>.
</p>

<p>
  <strong>Mandatory initialization:</strong> Must be initialized with a value right at the moment of declaration (you cannot write <code>const a;</code> and leave the assignment for later).
</p>

<p>
  <strong>Shallow immutability:</strong> The <code>const</code> keyword prohibits reassigning the reference itself. If the variable holds a primitive (number, string, boolean), it cannot be changed. But if it holds an object or an array, you can freely modify its contents (add properties, push elements), since the reference to the object's memory location itself remains unchanged.
</p>

<h3>The golden rule for every day</h3>
<p>
  By default, it is best to use <code>const</code> for everything. If you know in advance that the value of the variable will change during execution (for example, a loop counter or a data accumulator) — use <code>let</code>. The <code>var</code> keyword is best left strictly for supporting old legacy code.
</p>

<h3>Hoisting</h3>
<p>
  <span class="accent">Hoisting</span> is not the "physical movement of code to the top of the file," as tutorials often write. The engine doesn't move anything anywhere. It is a side effect of how the specification describes the creation of the Execution Context.
</p>

<p>
  The execution of any code is divided into two phases: the Creation Phase and the Execution Phase.
</p>

<p>
  During the <strong>Creation Phase</strong> (before even a single line of code is executed), the engine scans the code and pre-fills the Environment Record:
</p>

<p>
  <strong>function declaration:</strong> The engine finds the function declaration, immediately creates a full-fledged function object in memory, and records it in the Environment Record. Therefore, you can call a function before it is declared in the code.
</p>

<p>
  <strong>var:</strong> The engine finds the variable, records its name in the Environment Record, and immediately initializes it with the value undefined.
</p>

<p>
  <strong>let and const:</strong> The engine finds them and adds their names to the Environment Record, but does not initialize them. The specification strictly states: accessing an uninitialized binding must throw a ReferenceError. This state (from the beginning of the block to the line of declaration) is called the Temporal Dead Zone (TDZ).
</p>

<h3>Variable Assignment</h3>
<p>
  The specification type Reference plays the main role here.
</p>

<p>
  When you write <code>a = 10</code>, the engine doesn't just take and put 10 into a. Under the hood, a complex process takes place:
</p>

<p>
  The expression on the left (<code>a</code>) is evaluated and returns the Reference specification type. This Reference contains three things:
</p>

<p>
  1. <strong>Base value:</strong> The Lexical Environment in which this variable was found (or the object, if it is obj.a).
</p>
<p>
  2. <strong>Referenced name:</strong> The string "a".
</p>
<p>
  3. <strong>Strict reference:</strong> A boolean value (true if we are in 'use strict').
</p>

<p>
  Then the engine calls the internal method PutValue(V, W) (where V is our Reference, and W is the value 10).
</p>

<p>
  The PutValue method looks at the Reference. If the Base value does not exist (for example, the variable is not declared anywhere), the behavior branches:
</p>

<p>
  In strict mode ('use strict'), a ReferenceError is thrown: a is not defined.
</p>

<p>
  In non-strict mode, the engine silently creates a global variable a in the window/global object. (It is precisely the specification and the PutValue method that describe this unpleasant language bug from the past).
</p>
