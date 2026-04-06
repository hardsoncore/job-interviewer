<h3>What is a Composable?</h3>

<p>
  <span class="accent">Composable</span> is a function that uses the Composition API (<code>ref</code>, <code>reactive</code>, <code>computed</code>, <code>watch</code>, lifecycle hooks, etc.) to encapsulate and reuse reactive state and logic in Vue.js components.
  <br>
  A <strong>Composable</strong> allows developers to create abstract functions that can be easily integrated into various components, ensuring cleaner and more modular code.
</p>

<p>
  A <strong>Composable</strong> is not a built-in Vue concept, but rather a design pattern / convention that developers can use to organize and reuse logic in their applications.
</p>

<p class="info info--orange">
  There is a strict community convention regarding <strong>composable</strong> naming - using the "use" prefix (e.g., <code>useFetch</code>, <code>useAuth</code>). This convention helps to immediately identify functions that are composables and distinguish them from regular utilities or services.
</p>

<h3>What is the difference between a Composable and a regular utility (utils)?</h3>

<p>
  It is important to understand the difference between stateless and stateful functions.
</p>

<p>
  A <strong>regular utility</strong> is a pure function that takes arguments, executes logic (e.g., date formatting or complex mathematical calculations), and returns a result. It knows nothing about Vue and does not store mutable data within itself.
</p>

<p>
  A <strong>Composable</strong> is a function that uses Vue's capabilities (Composition API) to manage reactive state or side effects (event subscriptions, timers via lifecycle hooks). It stores reusable logic that can include reactive data and interact with the component's lifecycle.
</p>

<p class="info info--blue">
  Essentially, the main difference lies in the presence of reactivity: as soon as a regular utility function starts encapsulating state within itself (adding <code>ref</code> or <code>reactive</code>) or using hooks (<code>onMounted</code>), it turns into a <strong>composable</strong>.
</p>

<h5>Example of a NON-composable:</h5>

<p>
  According to the official Vue documentation, a Composable is a function that encapsulates and reuses stateful logic.
  <br>
  This example is not a classic composable for three reasons:
  <br>
  - It does not create or encapsulate independent state within itself (no own <code>ref</code> or <code>reactive</code>).
  <br>
  - It does not return any reactive data for use in the component.
  <br>
  - The basic naming convention is violated - the function does not start with the "use" prefix (it should be something like useLogger).
</p>

<code class="code">
  function logCount(count) {
    watch(count, (val) => console.log(val));
  }
</code>

<h5>Example of a composable:</h5>

<p>
  This function uses <code>ref</code> to create a reactive state and returns it, allowing the component that calls this function to react to changes in that state. This makes it a composable.
</p>

<code class="code">
  function useCounter() {
    const count = ref(0);

    const increment = () => count.value++;

    return { count, increment };
  }

</code>

<h3>Golden Rules for Writing Composables</h3>

<p>
  <strong>Naming:</strong> The function name must always start with "use" (e.g., <code>useFetch</code>, <code>useMouse</code>, <code>useAuth</code>).
</p>

<p><strong>Encapsulation:</strong> All logic related to a specific task should be inside a single function.</p>

<p>
  <strong>Return Value:</strong> Return a plain JavaScript object containing <code>ref</code>s (rather than a <code>reactive</code> object). This allows you to safely destructure the result in the component without losing reactivity.
</p>

<p>
  <strong>Handling Reactive Arguments:</strong> A good composable should be able to work with reactive arguments. To "unwrap" the passed arguments inside the function, you should use <code>unref()</code> (or <code>toValue()</code> in Vue 3.3+). This allows the composable to react to changes in the input data.
</p>

<p>
  <strong>Cleaning Up:</strong> If a composable creates event listeners or timers, it is obligated to clean them up in the <code>onUnmounted</code> hook.
</p>

<h3>Basic Template (using mouse tracking as an example)</h3>

<code class="code">
  import { ref, onMounted, onUnmounted } from 'vue';

  export function useMouse() {
    // 1. Reactive state initialization
    const x = ref(0);
    const y = ref(0);

    // 2. State update logic
    function update(event) {
      x.value = event.pageX;
      y.value = event.pageY;
    }

    // 3. Subscribing to events on mount
    onMounted(() => window.addEventListener('mousemove', update));

    // 4. Cleanup on unmount (CRITICALLY IMPORTANT)
    onUnmounted(() => window.removeEventListener('mousemove', update));

    // 5. Returning refs
    return { x, y };
  }
</code>

<h3>Local vs. Global State</h3>

<p>
  <strong>Local (default):</strong> The state (<code>ref</code>) is declared inside the function. Each component calling useSomething() will get its own independent copy of the state.
</p>

<p>
  <strong>Global (Shared):</strong> The state is declared outside the function, in the module's closure. All components calling the composable will share the same reactive state (a mini-replacement for Vuex/Pinia).
</p>

<code class="code">
  import { ref } from 'vue'

  // Global state (one for the entire application)
  const globalCount = ref(0)

  export function useCounter() {
    // Local state (new for each component)
    const localCount = ref(0)

    return { globalCount, localCount }
  }
</code>

<h3>Composition within Composition</h3>

<p>
  Composables can call other composables. For example, useFetch can use useEventListener internally to track the network status (online/offline) before making a request.
</p>

<h3>When to use Composables?</h3>
<p>
  <strong>Recurring Logic:</strong> When you have logic that repeats across multiple components (e.g., form handling, authentication, API interaction), composables allow you to encapsulate this logic and easily reuse it.
</p>

<h3>What are the benefits of using Composables?</h3>
<p>
  <strong>Reusability:</strong> Composables make it easy to reuse logic across different components, which reduces code duplication.
</p>

<p>
  <strong>Component Cleanliness:</strong> By moving complex logic into composables, components become cleaner and easier to read, as they focus solely on presentation.
</p>

<p>
  <strong>Flexibility:</strong> Composables can be easily combined with each other, allowing you to build complex functions from simpler ones.
</p>

<h3>When should you NOT use Composables?</h3>
<p>
  <strong>Simple Logic:</strong> If the logic is very simple and only used in one place, creating a composable might be overkill.
</p>

<p>
  <strong>Highly Specialized Functions:</strong> If a function is designed for a very specific task that doesn't make sense to be reused, it might not need to be a composable.
</p>

<h3>Key differences between Composables, Mixins, and HOCs</h3>
<p>
  <strong>Mixins:</strong> Mixins can create problems with name collisions and implicit origins of methods or dependencies, whereas composables return explicit objects and do not have these issues.
</p>
<p>
  <strong>HOCs (Higher-Order Components):</strong> HOCs wrap components and can create complex hierarchies, whereas composables simply return objects with state and logic that can be used inside components without wrapping.
</p>
