<p>The process of turning HTML, CSS, and JS code into an interactive page on the screen is called the <strong>Critical Rendering Path</strong>. It consists of the following sequential steps:</p>

<h3>1. HTML Parsing and DOM Tree Construction</h3>
<p>As soon as the browser receives the first bytes of an HTML document over the network, the HTML parser starts.</p>

<p>The parser reads the code from top to bottom, converting tags into tokens (start tag, content, end tag), and tokens into nodes.</p>

<p>From these nodes, the <span class="accent">DOM (Document Object Model)</span> is built — a tree-like structure describing the page content.</p>

<p class="info">Important: HTML parsing happens incrementally (as it is downloaded) but can be blocked by synchronous scripts (<code>&lt;script&gt;</code>).</p>

<h3>2. Downloading External Resources and JavaScript Execution</h3>
<p>Upon encountering links to external resources (fonts, images, CSS, JS), the browser sends requests to download them.</p>

<p>JavaScript plays a special role:</p>

<p> - By default, <code>&lt;script&gt;</code> blocks HTML parsing. The browser pauses DOM construction, downloads the script, executes it, and only then continues parsing the HTML.</p>

<p> - <code>defer</code> — the script is downloaded in the background without blocking parsing, and executes strictly after the entire HTML has been parsed, preserving the script execution order.</p>

<p> - <code>async</code> — the script is downloaded in the background and executes immediately upon download, pausing HTML parsing during execution. The execution order is not guaranteed.</p>

<p>Modern browsers use a Preload Scanner — a background process that "looks ahead" of the HTML parser, finds external resources, and starts downloading them in advance.</p>

<h3>3. CSS Parsing and CSSOM Creation</h3>
<p>As soon as a CSS file is downloaded, the browser converts it into the <span class="accent">CSSOM (CSS Object Model)</span> — a tree-like structure describing the styles for DOM nodes.</p>

<p>Unlike HTML, CSS parsing cannot be incremental, as styles declared at the end of the file can override styles from the beginning.</p>

<p>CSS is Render-Blocking. The browser will not start painting the page until the complete CSSOM is built to avoid a "Flash of Unstyled Content" (FOUC).</p>

<h3>4. Render Tree Construction</h3>
<p>The browser combines the DOM and CSSOM into a single Render Tree.</p>

<p>The Render Tree contains only the nodes that will be visually displayed on the screen.</p>

<p>Tags like <code>&lt;head&gt;</code>, <code>&lt;meta&gt;</code>, and <code>&lt;script&gt;</code> are not included in this tree.</p>

<p>Nodes with the <code>display: none</code> property are excluded from the render tree.</p>

<p>Nodes with <code>visibility: hidden</code> or <code>opacity: 0</code> styles remain in the tree, as they still occupy space on the screen (affecting geometry).</p>

<h3>5. Geometry Calculation (Layout / Reflow)</h3>
<p>Having the Render Tree, the browser knows what to paint, but not where.</p>
<p>During the <span class="accent">Layout</span> phase, the browser traverses the render tree from top to bottom and calculates the exact dimensions (width, height) and coordinates of each element on the screen (in pixels) relative to the viewport.</p>

<p><span class="accent">Reflow</span> is the process where the browser recalculates the dimensions and exact positioning of elements on the page. Essentially, this is a re-execution of the Layout step.</p>

<h3>6. Paint</h3>
<p>The browser knows the geometry of all elements. During the <span class="accent">Paint</span> phase, it starts filling in the pixels on the screen: drawing text, colors, borders, shadows, and background images. Painting typically occurs on multiple independent layers.</p>

<h3>7. Compositing</h3>
<p>Since elements might have been painted on different layers (for example, elements with <code>transform</code>, <code>opacity</code>, or <code>z-index</code>), in the final step, the browser overlays these layers on top of each other in the correct order on the Graphics Processing Unit (GPU), forming the final image that the user sees.</p>

<h3>Key Loading Events</h3>
<p><code>DOMContentLoaded</code> — fires when the initial HTML document has been completely loaded and parsed into the DOM, without waiting for stylesheets, images, and subframes to finish loading.</p>

<p><code>load</code> — fires when the page is fully loaded, including all dependent resources (images, styles, etc.).</p>
