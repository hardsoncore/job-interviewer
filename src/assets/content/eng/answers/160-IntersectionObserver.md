<p>
  <span class="accent">Intersection Observer API</span> is a modern web API that allows you to track the intersection of an element with another element or with the viewport. It provides a way to asynchronously observe changes in the intersection of an element with its parent element or the viewport, which is especially useful for optimizing performance and improving user experience.
</p>

<p class="info info--blue">
  The API received the status of a "cross-browser standard" in March 2019. Today, it is an absolutely basic feature that you can safely use in any modern browser.
</p>

<h3>Main Use Cases of the Intersection Observer API:</h3>

<ul>
  <li>
    <strong>Lazy Loading:</strong> For images, iframes, or heavy components when they enter the viewport.
  </li>
  <li>
    <strong>Infinite Scrolling:</strong> Loading new data when you reach the end of a list.
  </li>
  <li>
    <strong>Scroll Animations:</strong> Triggering CSS animations exactly when an element appears on the screen.
  </li>
  <li>
    <strong>Visibility Analytics:</strong> Tracking whether a user has seen an ad banner or a specific block of text.
  </li>
</ul>

<h3>Architecture and Basic Concepts</h3>
<p>
  To get started, you need to create an <code>IntersectionObserver</code> instance by passing a callback function and an options object to it.
</p>

<h4>1. Options</h4>

<ul>
  <li>
    <strong>root:</strong> The element that acts as the viewport. By default, it is the browser window (<code>null</code>). If you specify a specific element, it must be an ancestor of the observed element.
  </li>
  <li>
    <strong>rootMargin:</strong> Margins around the root element. It works like a CSS margin (for example, <code>"10px 20px 30px 40px"</code>, <code>"50px"</code>, or <code>"10%"</code>). It allows you to grow or shrink the area where the observer triggers. This is useful if you need to start loading an image <code>50px</code> before it actually appears on the screen.
  </li>
  <li>
    <strong>threshold:</strong> Intersection sensitivity. A number or an array of numbers from <code>0.0</code> to <code>1.0</code>. It specifies what percentage of the element must be visible for the callback to trigger.
    <br>
    For example, <code>[0, 0.5, 1]</code> will allow the callback to run when the element is 0%, 50%, and 100% visible.
  </li>
</ul>

<h4>2. Callback Function</h4>
<p>
  The function that is called when an intersection happens. It takes two arguments:
</p>

<ul>
  <li><strong>entries:</strong> An array of <code>IntersectionObserverEntry</code> objects (data about each observed element).</li>
  <li><strong>observer:</strong> A reference to the observer instance itself.</li>
</ul>

<p>
  Main properties of the <code>entry</code> object (from the <code>entries</code> array):
</p>

<ul>
  <li><strong>isIntersecting (boolean):</strong> Is the target element intersecting with the <code>root</code> right now, based on the <code>threshold</code>?</li>
  <li><strong>intersectionRatio (number):</strong> The current percentage of visibility (from 0.0 to 1.0).</li>
  <li><strong>target (Element):</strong> The actual DOM element being observed.</li>
  <li><strong>boundingClientRect (DOMRectReadOnly):</strong> The size and position of the target.</li>
  <li><strong>intersectionRect (DOMRectReadOnly):</strong> The size and position of the visible part of the target.</li>
  <li><strong>rootBounds (DOMRectReadOnly):</strong> The size and position of the root.</li>
  <li><strong>time (DOMHighResTimeStamp):</strong> The time when the intersection happened (useful for analytics).</li>
</ul>

<h3>Usage Example</h3>

<code class="code">
  // 1. Set options
  const options = {
    root: null, // browser viewport
    rootMargin: '0px',
    threshold: 0.5 // Triggers when 50% of the element is visible
  };

  // 2. Create the callback
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element is in the viewport!', entry.target);

        // Run your logic (for example, load an image)
        // entry.target.src = entry.target.dataset.src;

        // VERY IMPORTANT: stop observing if the action only needs to happen once
        // This prevents memory leaks in SPAs (Vue/Angular)
        observer.unobserve(entry.target);
      }
    });
  };

  // 3. Initialize the Observer
  const observer = new IntersectionObserver(callback, options);

  // 4. Find the element and start observing
  const targetElement = document.querySelector('.my-element');
  observer.observe(targetElement);

  // When destroying the component (e.g., in ngOnDestroy or beforeDestroy)
  // do not forget to call observer.disconnect() for a complete cleanup.
</code>

<h3>How the Intersection Observer API Works</h3>

<h4>When is the callback called?</h4>
<p>
  When creating an <code>IntersectionObserver</code>, we will call the callback provided during creation every time the condition described in the options is met (when crossing the <code>threshold</code>).
</p>

<p>
  The callback will receive an array of <code>IntersectionObserverEntry</code> objects. Each of them contains information about whether the element intersects with the <code>root</code>, how much of it is visible (<code>intersectionRatio</code>), and the element itself (<code>target</code>).
</p>

<p>
  Inside the callback, we can check if the element intersects using the <code>isIntersecting</code> property. If it is <code>true</code>, it means the element is visible in the viewport (or inside the <code>root</code> element) by the certain percentage we specified in the <code>threshold</code>.
</p>

<p>
   It works both ways — both when the element appears and when it disappears from the viewport.
</p>

<p>
  It runs infinitely. If an element appears and disappears, the callback will be called every time the intersection conditions are met. That is why it is important to control when to stop observing (for example, after the first image load) so you don't create unnecessary load on the browser.
</p>

<h4>The entries array. What is inside?</h4>

<p>
  This is a list of only those elements that we explicitly told to watch (via <code>observer.observe()</code>) and whose state has just changed (they crossed the <code>threshold</code>).
</p>

<p>
  The browser collects them into an array for optimization: if 10 elements cross the threshold at once during a fast scroll, the browser will return them in a batch in a single callback run so it doesn't block the main thread.
</p>

<p>
  Inside the array, there are no raw HTML tags, but state snapshot objects. The DOM node itself is stored in the <code>entry.target</code> property, and the visibility status is in <code>entry.isIntersecting</code>.
</p>

<h3>Best Practices</h3>

<ul>
  <li>Always disable observation (<code>unobserve</code> or <code>disconnect</code>) for elements that are no longer needed to avoid memory leaks.</li>
  <li>Be careful with a large number of observed elements — it can affect performance. Do not create a new <code>IntersectionObserver()</code> for each card in a list of 1000 elements. Create one instance and call <code>observer.observe(target)</code> in a loop for all the cards.</li>
  <li>Even though intersection calculations are asynchronous, the callback itself runs on the main thread. Do not do heavy synchronous calculations inside it. If you need complex logic, use requestIdleCallback or setTimeout.</li>
</ul>
