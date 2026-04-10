<p>
  Modern JS engines (we will look at the most popular one — Google's V8) use the JIT (Just-In-Time) compilation model. This means that the code is compiled right during execution, not beforehand.
  <br>
  Below is a detailed summary of the architecture and lifecycle of code execution in V8.
</p>

<h3>1. Parsing (From text to structure)</h3>

<p class="info info--blue">
  To speed up page loading, the engine does not parse functions that haven't been called yet. The <strong>Pre-parser</strong> just runs through them, checking basic syntax, and the full AST is built only when the function is called.
</p>

<p>
  Before the code starts executing, the engine needs to read and understand it. This stage is divided into two phases:
</p>
<p>
  1.1. <strong>Lexical analysis (Tokenization):</strong> The code is broken down into the smallest meaningful units — tokens (keywords, operators, brackets).
</p>

<code class="code">
  const a = 5;
  // Tokens: const, a, =, 5, ;

  function greet(name) {
    return `Hello, ${name}!`;
  }
  // Tokens: function, greet, (, name, ), {, return, `Hello, ${name}!`, }
</code>

<p>
  1.2. <strong>Syntax analysis (Parsing):</strong> An AST (Abstract Syntax Tree) is built from the tokens — a tree-like representation of the code's logic.
</p>

<h3>2. Interpretation (Fast start)</h3>

<p class="info info--blue">
  <strong>Interpretation</strong> is the process of executing bytecode without compiling it into native machine code first. It provides a fast start, allowing the code to run right after parsing, without having to wait for full compilation.
  <br>
  This stage is also optimized — the bytecode for functions is generated only on their first call, which saves resources.
</p>

<p>
  The engine doesn't wait for the whole code to be compiled to start working. The main goal here is to launch as fast as possible.
</p>
<p>
  <strong>Bytecode Generation.</strong> An engine component (in V8 it is called <strong>Ignition</strong>) goes through the AST and translates it into bytecode.
</p>
<p>
  <strong>Execution:</strong> The bytecode starts executing immediately. It is not as fast as native machine code, but it doesn't need time for complex compilation at startup.
</p>

<code class="code">
  // Source code
  function add(a, b) {
    return a + b;
  }

  // Bytecode (simplified example)
  LOAD_PARAM a
  LOAD_PARAM b
  ADD
  RETURN
</code>

<h3>3. Optimization (JIT compilation)</h3>

<p>
  While the interpreter executes the bytecode, the <strong>Profiler (Monitor)</strong> works in parallel. It observes the code and collects statistics: which functions are called most often and with what data types.
</p>

<p>
  The Profiler only counts the frequency of calls. Functions that are executed many times (for example, inside loops) are marked as "hot".
</p>

<p>
  The interpreter itself, using the <strong>Inline Caches (IC)</strong> mechanism, tracks what data types are passed to the functions. For example, if a function always receives numbers, this is important information for optimization.
</p>

<p>
  After that, based on the collected information, the engine makes assumptions - this is called <strong>speculative optimization</strong>.
</p>

<p>
  If the <strong>Profiler</strong> saw that the function always receives only numbers as input, <strong>TurboFan</strong> will compile machine code specifically tailored to work with numbers, dropping type checks.
</p>

<p>
  The optimized code replaces the interpreted bytecode, and further calls to the function are executed with high performance.
</p>

<p>
  However, if the function starts receiving other data types in the future (for example, strings), the optimized code may become inefficient. In this case, the engine can "deoptimize" the function, returning to the interpreted bytecode. This is called <strong>Bailout / Deoptimization</strong>.
  <br>
  Deoptimization is a very resource-intensive operation. Therefore, engines try to avoid it by using different heuristics to determine when to optimize code.
</p>

<p class="info info--blue">
  It is important to understand that optimization is a continuous process. The engine constantly collects data and can re-optimize the code if the situation changes.
</p>

<h3>How to write code that the engine can optimize</h3>

<p>
  As a developer, you can help the JIT compiler to not do extra work and avoid deoptimization.
</p>

<p>
  <strong>Maintain monomorphism:</strong> Try to pass arguments of the same type to a specific function.
</p>

<p>
  <strong>Fix the shape of objects (Hidden Classes):</strong> Engines create "hidden classes" (Shapes) under the hood for objects with the same set of keys. Always initialize object properties in the constructor and strictly in the same order.
</p>

<p>
  <strong>Avoid the <code>delete</code> operator:</strong> Removing properties from an object "breaks" its hidden class, forcing the engine to create a new one and discard previous memory access optimizations.
</p>

<p>
  <strong>Don't change array element types:</strong> If an array started its lifecycle as an array of numbers (for example, <code>[1, 2, 3]</code>), don't push strings or objects into it. This will force the engine to rebuild the array in memory using a less efficient pattern.
</p>
