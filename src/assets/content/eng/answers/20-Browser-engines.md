<h4>1. Chromium (Blink + V8)</h4>

<p><strong>Where it is used:</strong> Google Chrome, Microsoft Edge, Opera, Brave, Vivaldi.</p>

<p><strong>Rendering engine:</strong> Blink (WebCore fork).</p>

<p><strong>JS engine:</strong> V8.</p>

<p><strong>Key differences:</strong> This is the absolute leader of the modern web. The V8 engine sets performance standards for heavy SPA applications (for example, written in Angular or Vue) and is used under the hood of the Node.js environment. Blink is the fastest to implement new W3C standard drafts and modern CSS properties.</p>

<p><strong>Weak point:</strong> Its multi-process architecture (each tab and plugin is a separate process) makes it very RAM-hungry.</p>

<h4>2. Apple (WebKit + JavaScriptCore)</h4>

<p><strong>Where it is used:</strong> Safari, and absolutely all browsers on iOS/iPadOS (Apple's policy forces third-party applications to use WebKit under the hood).</p>

<p><strong>Rendering engine:</strong> WebKit.</p>

<p><strong>JS engine:</strong> JavaScriptCore.</p>

<p><strong>Key differences:</strong> Strict focus on hardware optimization, interface smoothness, and privacy. On Apple Silicon architecture (especially on M1 Pro-level chips), this engine shows benchmark battery life and does not overheat the system.</p>

<p><strong>Weak point:</strong> Conservatism. WebKit often ignores new APIs for years (for example, it resisted PWAs and Push notifications for a long time), which forces frontend developers to write separate polyfills for it.</p>

<h4>3. Mozilla (Gecko + SpiderMonkey)</h4>
<p><strong>Where it is used:</strong> Firefox.</p>

<p><strong>Rendering engine:</strong> Gecko (with the integration of Servo engine components, written in Rust).</p>

<p><strong>JS engine:</strong> SpiderMonkey.</p>

<p><strong>Key differences:</strong> The last major independent player that does not belong to corporations with their ecosystem and advertising interests. It focuses on advanced tracking protection. It is excellent at parallelizing calculations and rendering tasks on multi-core processors.</p>

<p><strong>Weak point:</strong> It is gradually losing market share, which is why some developers test code in it as a last priority.</p>

<h4>4. Microsoft (EdgeHTML + Chakra) — outdated</h4>
<p><strong>Where it was used:</strong> Older versions of Microsoft Edge (until 2020).</p>

<p><strong>Rendering engine:</strong> EdgeHTML (Trident fork).</p>
<p><strong>JS engine:</strong> Chakra.</p>
<p><strong>Key differences:</strong> It was developed as an alternative to Internet Explorer with improved support for modern web standards. EdgeHTML was faster than Trident but lagged behind competitors in JavaScript performance and support for new APIs.</p>

<p><strong>Weak point:</strong> Outdated architecture and weak support for modern web standards, which led to its replacement by Chromium in 2020.</p>
<br>

<h3>Browser classification by engine usage type:</h3>
<p>Globally, the whole variety of modern browsers can be divided into three architectural categories.</p>

<h4>Category 1: The Engine Creators</h4>

<p>These are corporations that invest huge resources into the design, development, and support of their own browser engines from scratch (or based on deep historical forks). They compile the engine and ship it together with their browser.</p>

<ul>
  <li><strong>Google Chrome</strong></li>
  <li><strong>Apple Safari</strong></li>
  <li><strong>Mozilla Firefox</strong></li>
  <li><strong>Microsoft Edge (until 2020)</strong></li>
</ul>

<h4>Category 2: Custom UI over someone else's engine (The UI Wrappers)</h4>

<p>These are browsers that do not develop their own engine, but use an existing one (most often Chromium) and build their user interface and additional features on top of it (for example, unique toolbars, ad blockers, etc.). They do not make changes to the rendering or JS engine, but they can add their features at the UI level.</p>

<p><strong>Microsoft Edge:</strong> Abandoned their own engine (EdgeHTML) in 2020 and completely switched to Chromium. They added deep integration with Windows and AI (Copilot).</p>

<p><strong>Opera:</strong> Long ago abandoned the legendary Presto engine. Now it is Chromium + VPN + custom UI.</p>

<p><strong>Brave:</strong> Chromium + aggressive tracker blocking at the network request level (written in Rust) + crypto wallet.</p>

<p><strong>Vivaldi / Arc / Yandex Browser:</strong> They all use Chromium under the hood, differing only in design, tab organization, and target audience.</p>

<p class="info"><strong>Key nuance:</strong> Browsers in this category always carry the engine with them. The engine update depends on the developers of the browser itself, not on the user's operating system.</p>

<h4>Category 3: System wrappers (OS-provided WebView)</h4>

<p>These applications do not contain an engine inside them at all. They are just a "face" (UI and network filters), and for parsing HTML, CSS, and JS, they send commands to the engine that is already built into the user's device operating system.</p>

<p><strong>Privacy browsers (DuckDuckGo, Ecosia):</strong> Use the OS WebView to remain as lightweight as possible, focusing only on intercepting tracking scripts.</p>

<p><strong>In-App browsers:</strong> Windows that open inside Telegram, Instagram, Gmail, or banking applications. They always use the system WebView.</p>

<p><strong>All third-party browsers on iOS (until 2024):</strong> Due to Apple's strict policy, any Chrome, Firefox, or Edge on the iPhone was just a system wrapper over WebKit. (An exception is now gradually being introduced only for users inside the European Union thanks to the DMA law).</p>

<p class="info"><strong>Key nuance:</strong> The capabilities and bugs of browsers in this category directly depend on the operating system version. If a user hasn't updated their Android or macOS for a long time, the WebView inside the OS will also be outdated, and new CSS/JS features will not work there.</p>
