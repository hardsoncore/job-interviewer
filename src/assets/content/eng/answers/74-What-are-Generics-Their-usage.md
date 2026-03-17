<h4>Step 1: The Core Problem</h4>
<p>Imagine you need a function that takes an argument and simply returns it. Without generics, you have two paths, and both have critical flaws:</p>

<p><strong>Strict typing:</strong> Binding the function to a specific type (e.g., string). This makes the code non-reusable for numbers or objects.</p>

<p><strong>Using <code>any</code>:</strong> You gain versatility, but you completely lose type safety. The IDE stops suggesting methods, and the compiler will let errors slip through during the build process.</p>

<h4>Step 2: The Solution — Basic Syntax</h4>

<p><span class="accent">Generics</span> are variables for types. They allow you to define a type dynamically at the moment a function is called, or a class or interface is created.</p>

<code class="code">
  // &lt;T> is a placeholder (type variable) that will "capture" the passed type
  function identity&lt;T>(arg: T): T {
    return arg;
  }

  // Now the compiler strictly binds the input and output types:
  const myString = identity&lt;string>("Hello"); // Returns string
  const myNumber = identity&lt;number>(42);      // Returns number
</code>

<h4>Step 2.1: Covering Input and Output Types</h4>

<p>There are cases when a function takes one type of data and returns another. In such situations, you can use multiple type parameters.</p>

<p>This allows you to maintain strict typing for both types while providing flexibility in working with different data.</p>

<code class="code">
  // The function takes an input type (TInput) and an output type (TOutput)
  function processData<TInput, TOutput>(
    input: TInput,
    transformer: (val: TInput) => TOutput
  ): TOutput {
    return transformer(input);
  }

  // Example usage: converting a string to a number
  const result = processData<string, number>("123", (val) => parseInt(val));
</code>

<h4>Step 3: Generics in Interfaces (Real-world Contract)</h4>

<p>When working with a REST API, the server response structure is often standardized, and only the payload itself changes. Generics perfectly describe such patterns, eliminating code duplication.</p>

<code class="code">
  // Base interface, where T is the payload type
  interface ServerResponse&lt;T> {
    status: number;
    message: string;
    data: T;
  }

  interface User { id: number; name: string; }
  interface Article { title: string; content: string; }

  // Reusing the base response for different entities
  const userResponse: ServerResponse&lt;User> = {
    status: 200,
    message: "OK",
    data: { id: 1, name: "John" }
  };

  const articleResponse: ServerResponse&lt;Article> = { /* ... */ };
</code>

<h4>Step 4: Generic Constraints</h4>

<p>Sometimes you need the type T to not be just anything, but guaranteed to have a specific structure (for example, a method or a property). The <code>extends</code> keyword is used for this.</p>

<code class="code">
  interface HasLength {
    length: number;
  }

  // T can be any type, provided it has a length property
  function logLength&lt;T extends HasLength>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  logLength("Test");      // OK (string has length)
  logLength([1, 2, 3]);   // OK (array has length)
  // logLength(123);      // Compilation error: number does not have a length property
</code>

<h4>Step 5: Multiple Type Parameters</h4>

<p>You can use multiple type parameters if a function or class works with several data types.</p>
<code class="code">
  function merge&lt;T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  const merged = merge({ name: "Alice" }, { age: 30 });
  // merged has the type { name: string; age: number }
</code>

<h4>Step 6: Generics in Classes</h4>
<p>Generics are not limited to functions. You can create classes that work with any data types while maintaining strict typing.</p>
<code class="code">
  class Box&lt;T> {
    private content: T;

    constructor(content: T) {
      this.content = content;
    }

    getContent(): T {
      return this.content;
    }

    setContent(content: T): void {
      this.content = content;
    }
  }
</code>

<h4>Generics in Utility Types</h4>
<p>TypeScript comes with a set of built-in utilities that use generics to create new types based on existing ones. For example, <code>Partial&lt;T></code> makes all properties of type <code>T</code> optional, and <code>Readonly&lt;T></code> makes all properties of type <code>T</code> read-only.</p>

<p><code>Pick&lt;T, K&gt;</code> allows you to select a subset of properties from type <code>T</code>, and <code>Record&lt;K, T&gt;</code> creates an object type with keys <code>K</code> and values <code>T</code>. These utilities are widely used in real projects to manage types and ensure type safety when working with objects and functions.</p>

<h4>Step 7: Generics in TypeScript 4.7 and higher</h4>
<p>With the release of TypeScript 4.7, new capabilities for generics were introduced, such as improved support for recursive types and more flexible constraints. Now you can create complex types that were previously impossible or required cumbersome workarounds.</p>
<p>For instance, recursive types allow you to describe data structures that can contain nested elements of the same type, which is particularly useful when working with trees or graphs. Improved constraints allow you to create more precise types that better reflect real data and business logic.</p>

<h4>How Generics Work Under the Hood in JavaScript</h4>
<p>It's important to understand that generics are purely a tool for static typing in TypeScript. When the code is compiled to JavaScript, all types, including generics, are removed. This means that at runtime, there is no type information, and JavaScript is unaware of the existence of generics. They serve only to ensure type safety during development and compilation, but do not affect the behavior of the code at runtime.</p>

<h4>Conclusion</h4>

<p><span class="accent">Generics</span> are a powerful tool for creating flexible yet strictly typed code. They allow you to write functions and classes that work with any data types without sacrificing type safety. In modern TypeScript, you will use generics at every turn, from simple utilities to complex architectural patterns.</p>
