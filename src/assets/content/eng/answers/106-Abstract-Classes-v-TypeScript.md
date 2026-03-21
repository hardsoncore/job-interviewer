<h3>What is an Abstract Class?</h3>
<p><span class="accent">An abstract class</span> is a base class that cannot be instantiated directly (created using <code>new</code>). It serves as a "blueprint" for other classes.</p>

<p>Its main feature is that it can contain both method declarations (abstract methods that subclasses are required to implement) and ready-made implementations (regular methods that subclasses get out of the box).</p>

<p class="info info--orange">When designing architecture, choosing between an abstract class and an interface is a classic dilemma. In TypeScript, both tools provide powerful capabilities for defining contracts and ensuring type safety, but they serve different purposes and have their own unique features. In this answer, we will explore the key features of abstract classes in TypeScript.</p>

<h3>Abstract Classes vs. Interfaces</h3>



<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Abstract Class</th>
      <th>Interface</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Instantiation (new)</td>
      <td>Forbidden</td>
      <td>Forbidden</td>
    </tr>
    <tr>
      <td>Default implementation</td>
      <td>Yes. You can write method logic.</td>
      <td>No. Signatures only.</td>
    </tr>
    <tr>
      <td>Multiplicity</td>
      <td>A class can inherit from only one class.</td>
      <td>A class can implement multiple interfaces.</td>
    </tr>
    <tr>
      <td>Access modifiers</td>
      <td>Supports public, private, protected.</td>
      <td>Everything is always public.</td>
    </tr>
    <tr>
      <td>State (Properties)</td>
      <td>Can hold state (variables with data).</td>
      <td>Does not hold state, only describes the shape.</td>
    </tr>
    <tr>
      <td>Runtime presence (JS)</td>
      <td>Compiles into a regular class (or function). Remains in the code.</td>
      <td>Completely disappears after compilation to JS.</td>
    </tr>
  </tbody>
</table>

<h3>When to use Abstract Classes instead of Interfaces?</h3>
<h4>Use abstract classes when:</h4>

<p>1. <strong>There is shared base logic.</strong> You have several related classes that do part of the work in the same way. You move this shared work (implementation) into an abstract class to avoid code duplication (DRY principle).</p>

<p>2. <strong>State is required.</strong> The base entity needs to store some internal variables or flags that will be used in all subclasses.</p>

<p>3. <strong>Access modifiers are needed.</strong> You need to hide part of the base class's internal logic from the outside world using protected, making it accessible only to subclasses.</p>

<p>4. <strong>Dependency Injection (Especially relevant for frameworks).</strong> Since interfaces disappear in the JavaScript runtime, they cannot be used as tokens for dependency injection. Abstract classes remain in JS, so they work perfectly as DI tokens (a common trick in serious architecture).</p>

<h4>Use interfaces when:</h4>

<p>1. You just need to describe the "shape" of an object (for example, typing a JSON response from an API).</p>

<p>2. You need to define a strict behavioral contract for classes that are not logically related to each other at all (for example, a Logger interface that can be implemented by both a service and a component).</p>

<p>3. You need to implement multiple inheritance of behaviors.</p>

<h3>Real-world example: "Template Method" Pattern</h3>



<p>Abstract classes are perfect for the <strong>Template Method</strong> pattern, where the base algorithm is defined, and details are delegated to subclasses.</p>

<code class="code">
  abstract class DataFetcher {
    // Shared state
    protected isFetching = false;

    // Ready implementation (shared by all)
    public async fetchAndProcess(): Promise<void> {
      this.isFetching = true;
      try {
        const data = await this.getData(); // Call to abstract method
        this.processData(data);            // Call to abstract method
      } finally {
        this.isFetching = false;
      }
    }

    // Subclasses MUST implement these details
    protected abstract getData(): Promise<any>;
    protected abstract processData(data: any): void;
  }

  // Concrete implementation
  class UserFetcher extends DataFetcher {
    protected async getData(): Promise<any> {
      return fetch('/api/users').then(res => res.json());
    }

    protected processData(data: any): void {
      console.log('Processing users:', data);
    }
  }

  const fetcher = new UserFetcher();
  fetcher.fetchAndProcess(); // Using shared algorithm with unique details
</code>
