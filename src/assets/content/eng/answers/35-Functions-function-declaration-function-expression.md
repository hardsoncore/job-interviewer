<h3>Function Declaration</h3>

<p>This is the classic way to create a function. It is declared as a separate construct in the main code flow.</p>

<code class="code">
  function greet(name) {
    return `Hello, ${name}!`;
  }
</code>

<h4>Key Features:</h4>

<p><strong>Name is required:</strong> The function must have a name (greet) so the JS parser understands it is exactly a Declaration.</p>

<p><strong>Hoisting:</strong> This is the most important mechanic. The JavaScript engine scans the code before execution and "hoists" all Function Declarations to the very top of their scope (global or functional).</p>

<p><strong>Usage:</strong> Ideal for creating global utilities or main logical blocks that should be accessible anywhere in the file.</p>

<code class="code">
  // The function is called BEFORE its declaration in the code — and it works.
  const total = getDiscount(100);

  function getDiscount(price) {
    return price * 0.9;
  }
</code>

<p class="info info--orange">Arrow functions cannot be Function Declarations - they are always Function Expressions.</p>

<h3>Function Expression</h3>

<p>
  This is a way to create a function where the function is assigned to a variable. It can be anonymous (without a name) or have a name (Named Function Expression).
  <br>
  JS treats such a function simply as a value.
</p>

<code class="code">
  // Anonymous function expression
  const greet = function(name) {
    return `Hello, ${name}!`;
  };
</code>

<h4>Key Features:</h4>

<p><strong>Name is optional:</strong> Usually, they are anonymous (as in the example above), but they can also be named (Named Function Expression).</p>

<p><strong>No Hoisting:</strong> The function is created exactly at the moment the execution flow reaches that line. It cannot be called before initialization.</p>

<p><strong>Usage:</strong> Closures, callbacks, passing functions as arguments, object methods.</p>

<h3>Error Example (TDZ — Temporal Dead Zone):</h3>

<code class="code">
  // ReferenceError: Cannot access 'getDiscount' before initialization
  const total = getDiscount(100);

  const getDiscount = function(price) {
    return price * 0.9;
  };
</code>

<h3>Named Function Expression (NFE)</h3>

<p>A variation of a Function Expression where the function has a local name. It is accessible only within the function itself. This is critically useful for recursion and readable stack traces during debugging.</p>

<code class="code">
  const factorial = function calc(n) {
    if (n <= 1) return 1;
    return n * calc(n - 1); // Referring to itself by its internal name
  };

  console.log(factorial(5)); // 120
  console.log(calc(5)); // ReferenceError: calc is not defined
</code>


<h3>Important Nuances and Recommendations</h3>

<p><strong>Consistency:</strong> Try not to mix styles unnecessarily. For helper functions at the root of a file, use Declarations (so they don't clutter the top of the file, they can be moved to the bottom). For logic dependent on conditions, or callbacks — use Expressions.</p>

<p><strong>Arrow Functions:</strong> Remember that in modern frontend development, many Function Expressions are replaced by arrow functions (<code>const sum = (a, b) => a + b</code>). They are also expressions and are not hoisted, but additionally, they do not have their own <code>this</code> context (which often saves the day when passing callbacks in components).</p>

<p><strong>Strict Mode (<code>'use strict'</code>):</strong> In strict mode, a Function Declaration has block scope. If declared inside an <code>if {}</code>, it will be inaccessible outside of that block.</p>

<p><strong>Recursion:</strong> If a function needs to call itself, and you are using a Function Expression, it is better to make it a Named Function Expression to avoid access issues to the function from within itself.</p>

<p><strong>Performance:</strong> In most cases, there is no performance difference between these methods. Choose the style that best suits the specific task and improves code readability.</p>

<p class="info info--blue">
  Although there is a myth that a large number of Function Declarations can slow down code execution, in practice, modern JavaScript engines optimize their execution, and the performance difference is minimal.
  <br>
  The difference in initialization time between a thousand Function Declarations and a thousand Function Expressions is negligible and cannot be adequately measured in real-world conditions.
</p>

<p class="deep-dive">Deep Dive Notes</p>

<h3>Under the Hood: The Engine and ECMAScript Specification</h3>

<p>According to the ECMAScript specification, when a JavaScript engine (e.g., V8 in Chrome) executes code, it goes through two phases.</p>

<h4>Phase 1: Creation Phase (Compilation Phase)</h4>

<p>Before even a single line of code is executed, the engine parses the script (converts it into tokens), builds an AST (Abstract Syntax Tree), and allocates memory for variables and functions. This is called the initialization of the Lexical Environment.</p>

<p>During this phase, all Function Declarations are processed, and their names are added to the scope. This means that even if a function is declared at the bottom of a file, it will be accessible at the top.</p>

<p>Function Expressions, on the other hand, are not processed at this stage. The engine only sees the variable declaration (e.g., <code>const sum = ...</code> or <code>var sum = ...</code>).</p>

<h4>Phase 2: Execution Phase (Фаза виконання)</h4>
<p>The engine starts executing the code line by line (top to bottom).</p>

<p><strong>FD:</strong> The engine simply skips the lines with Function Declarations, as they have already been processed and loaded into memory during the first phase.</p>

<p><strong>FE:</strong> When the execution flow reaches the line with <code>const sum = function() {}</code>, the expression evaluation occurs. Only at this microsecond does the engine create the Function Object in the heap and store the reference to it in the variable <code>sum</code>.</p>

<h3>Difference at the Language Grammar Level (AST)</h3>
<p>In the ECMAScript specification, these are two fundamentally different syntactic constructs:</p>

<p><strong>Statement:</strong> A Function Declaration is a statement. It performs an action (registers a function in the environment) but does not return a value. It cannot be passed as an argument or assigned directly to a variable.</p>

<p><strong>Expression:</strong> A Function Expression is part of an expression. An expression in JS is any piece of code that returns a value. The engine evaluates the FE and returns a value — the function itself (an object in memory), which we can then assign to a variable, pass to <code>setTimeout</code>, or use in a closure.</p>

<p>A classic senior-level example for understanding grammar:</p>

<code class="code">
  // This is a Function Declaration. It will throw a syntax error (SyntaxError),
  // because a statement cannot be invoked in-place, and the parser expects a function name.
  function() {
    console.log('test');
  }();
  // SyntaxError: Function statements require a function name

  // Wrap it in parentheses (Grouping Operator).
  // Parentheses in JS can only contain expressions.
  // The parser instantly turns the FD into a Function Expression.
  // Now it is an IIFE (Immediately Invoked Function Expression), and the code works.
  (function() {
    console.log('test');
  })();
</code>

<h3>Myth: Function Declarations Slow Down Initialization (Performance)</h3>
<p>The essence of the myth: Since all Function Declarations are hoisted and initialized in memory during the context creation phase (before code execution starts), a massive number of them will supposedly severely slow down the application's startup.</p>

<h4>How It Actually Works (Lazy Parsing):</h4>
<p>Modern JS engines (V8, SpiderMonkey) are incredibly optimized. To avoid wasting time and memory on startup, they use a lazy parsing mechanism (Lazy / Pre-parsing).</p>

<p><strong>Pre-parsing on startup:</strong> When the engine scans the code and finds a Function Declaration, it doesn't compile its entire body. It only makes a quick pass: checks basic syntax and registers the function name in the lexical environment. This takes fractions of a millisecond.</p>

<p><strong>Lazy Compilation:</strong> Full parsing of the function body, building the complete AST, and bytecode generation occur only at the moment of the first call to this function. If the function is never called, the engine will never spend resources on its deep compilation.</p>
