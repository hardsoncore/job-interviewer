<h3>1. any — "Disabling typing" (Permissiveness)</h3>
<p>
  <code>any</code> tells the compiler: "Trust me, I know what I'm doing, don't check this variable." <b>This is an escape from the strict type system back into the wild world of vanilla JavaScript.</b>
</p>

<p>
  <span class="accent">Behavior:</span> Any value can be assigned to a variable of type <code>any</code>, and the <code>any</code> variable itself can be assigned anywhere.
</p>

<p>
  <span class="accent">Property access:</span> The compiler allows you to call any methods and access any properties of the object, even if they don't exist. Errors will only surface at runtime.
</p>

<p>
  <span class="accent">When to use:</span> <b>Almost never in new code.</b> It is only acceptable during the gradual migration of a large legacy project to TypeScript or for very quick and temporary hacks during debugging.
</p>

<code class="code">
  let data: any = "hello";
  data = 42; // Ok
  data.fetchItems(); // No compilation error, but the code will crash in the browser
</code>

<h3>2. unknown — "Safe any" (Unknown)</h3>

<p>
  The <code>unknown</code> type was introduced as a type-safe alternative to <code>any</code>. It says: "This could be anything, but until you explicitly prove what type it is, I won't let you work with it."
</p>

<p>
  <span class="accent">Behavior:</span> Just like with <code>any</code>, you can put absolutely anything into <code>unknown</code> (this is known as a Top Type). But a value of type <code>unknown</code> cannot be directly assigned to other types (except <code>any</code> and <code>unknown</code> itself).
</p>

<p>
  <span class="accent">Property access:</span> Forbidden until the type is narrowed (Type Narrowing) using operators like <code>typeof</code>, <code>instanceof</code>, or custom validation functions (Type Guards).
</p>

<p>
  <span class="accent">When to use:</span> When receiving any data from the outside world. It is perfect for API responses, <code>JSON.parse()</code> results, reading unknown structures from <code>localStorage</code>, or working with untyped libraries.
</p>

<code class="code">
  let input: unknown = "hello";

  // Compilation error: Type 'unknown' is not assignable to type 'string'
  // let str: string = input;

  if (typeof input === "string") {
    let str: string = input; // Now this is safe
    console.log(str.toUpperCase()); // HELLO
  }
</code>

<p class="info info--orange">
  Important: <code>unknown</code> is not just a stricter <code>any</code>, but a fundamentally different type. It provides type safety by forcing you to explicitly check and narrow the type before use, whereas <code>any</code> completely disables this check.
</p>

<h3>3. never — "Impossible state" (Emptiness)</h3>

<p>
  The <code>never</code> type represents a type that can never have a value. It is used to denote functions that never return (e.g., throw an exception or run infinitely), or for variables that cannot be initialized.
</p>

<p>
  <span class="accent">Behavior:</span> Nothing can be assigned to a variable of type never (not even any).
</p>

<p>
  <span class="accent">Where it occurs automatically:</span> In functions that always throw an error (<code>throw new Error()</code>), or functions with an infinite loop (<code>while(true)</code>) that never terminate.
</p>

<p>
  <span class="accent">When to use:</span> The most powerful application of never is creating exhaustiveness checks in switch or <code>if/else</code> statements. This guarantees that if you expand your types in the future, you won't forget to handle the new variants.
</p>

<code class="code">
  type AppState = 'loading' | 'success' | 'error';

  function handleState(state: AppState) {
    switch (state) {
      case 'loading': return console.log('Loading...');
      case 'success': return console.log('Done!');
      case 'error': return console.log('Error!');
      default:
        // If we add a new status to AppState (e.g., 'empty'),
        // but forget to add a case for it, TypeScript will throw an error on this line,
        // because the type 'empty' cannot be assigned to never.
        const exhaustiveCheck: never = state;
        return exhaustiveCheck;
    }
  }
</code>
<p class="info info--orange">
  Important: <code>never</code> is the opposite of <code>unknown</code> (a bottom type). While <code>unknown</code> can be any type, <code>never</code> cannot be any type. It is a type that has no possible values.
</p>
