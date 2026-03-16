export const questions = [
  {
    id: 1,
    name: 'How does the browser parse a page?',
    answer: 'assets/content/eng/answers/1-How-does-the-browser-parse-a-page.md',
    tags: [
      'markup',
      'browser'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Parsing HTML, building the DOM',
        isChecked: false
      },
      {
        name: 'Fetching external resources (JS, CSS)',
        isChecked: false
      },
      {
        name: 'Parsing CSS and creating CSSOM',
        isChecked: false
      },
      {
        name: 'Executing JavaScript',
        isChecked: false
      },
      {
        name: 'Combining DOM and CSSOM to build the render tree',
        isChecked: false
      },
      {
        name: 'Calculating layout and rendering the result',
        isChecked: false
      }
    ]
  },
  {
    id: 2,
    name: 'What is <DOCTYPE>. Why is it needed?',
    answer: 'assets/content/eng/answers/2-What-is-DOCTYPE-Why-is-it-needed.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'What is this DOCTYPE tag',
        isChecked: false
      },
      {
        name: 'Why is DOCTYPE needed',
        isChecked: false
      },
      {
        name: 'Explain that there are different types of DOCTYPE',
        isChecked: false
      },
      {
        name: 'Is it possible to do without DOCTYPE?',
        isChecked: false
      },
      {
        name: 'Nowadays, it is almost always recommended to use DOCTYPE HTML5',
        isChecked: false
      }
    ]
  },
  {
    id: 3,
    name: 'HTML5 Tags. Semantics. Accessibility.',
    answer: 'assets/content/eng/answers/3-HTML5-Tags-Semantics-Accessibility.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'What is semantic markup and why is it needed',
        isChecked: false
      },
      {
        name: 'Main semantic HTML tags',
        isChecked: false
      },
      {
        name: 'How to markup a page from a semantic perspective',
        isChecked: false
      }
    ]
  },
  {
    id: 4,
    name: 'What are the ways to include CSS on a page?',
    answer: 'assets/content/eng/answers/4-What-are-the-ways-to-include-CSS-on-a-page.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Including CSS through an external stylesheet using the link tag',
        isChecked: false
      },
      {
        name: 'Adding CSS using the style tag',
        isChecked: false
      },
      {
        name: 'Importing CSS using the @import rule',
        isChecked: false
      },
      {
        name: 'Inline CSS styles',
        isChecked: false
      },
      {
        name: 'CSS styles through JavaScript',
        isChecked: false
      }
    ]
  },
  {
    id: 5,
    name: 'CSS Priority. Cascade.',
    answer: 'assets/content/eng/answers/5-CSS-Priority-Cascade.md',
    tags: [
      'css'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Specificity of selectors',
        isChecked: false
      },
      {
        name: 'Order of declaration',
        isChecked: false
      },
      {
        name: '!important',
        isChecked: false
      },
      {
        name: 'Source of styles',
        isChecked: false
      }
    ]
  },
  {
    id: 6,
    name: 'CSS Selector Weight',
    answer: 'assets/content/eng/answers/6-CSS-Selector-Weight.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: '!important',
        isChecked: false
      },
      {
        name: 'Inline styles',
        isChecked: false
      },
      {
        name: 'ID',
        isChecked: false
      },
      {
        name: 'Classes, Attributes, Pseudo-classes',
        isChecked: false
      },
      {
        name: 'Tags, Pseudo-elements',
        isChecked: false
      },
      {
        name: 'Zero weight',
        isChecked: false
      }
    ]
  },
  {
    id: 7,
    name: 'High specificity of a selector, are there any drawbacks?',
    answer: 'assets/content/eng/answers/7-High-specificity-of-a-selector-are-there-any-drawbacks.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 8,
    name: '!important',
    answer: 'assets/content/eng/answers/8-!important.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 9,
    name: 'Selectors: > + ~',
    answer: 'assets/content/eng/answers/9-Selectors-+-~.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: '>',
        isChecked: false
      },
      {
        name: '+',
        isChecked: false
      },
      {
        name: '~',
        isChecked: false
      }
    ]
  },
  {
    id: 10,
    name: 'Element Pseudo-classes',
    answer: 'assets/content/eng/answers/10-Element-Pseudo-classes.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'State pseudo-classes (Interactive)',
        isChecked: false
      },
      {
        name: 'Structural pseudo-classes',
        isChecked: false
      },
      {
        name: 'Advanced selectors (Modern CSS)',
        isChecked: false
      }
    ]
  },
  {
    id: 11,
    name: 'Form Pseudo-classes',
    answer: 'assets/content/eng/answers/11-Form-Pseudo-classes.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: ':disabled',
        isChecked: false
      },
      {
        name: ':required',
        isChecked: false
      },
      {
        name: ':invalid',
        isChecked: false
      },
      {
        name: ':valid',
        isChecked: false
      },
      {
        name: ':checked',
        isChecked: false
      },
      {
        name: ':placeholder-shown',
        isChecked: false
      },
    ]
  },
  {
    id: 12,
    name: 'Pseudo-elements',
    answer: 'assets/content/eng/answers/12-Pseudo-elements.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'What are pseudo-elements?',
        isChecked: false
      },
      {
        name: 'Generated content (::before and ::after)',
        isChecked: false
      },
      {
        name: 'Text (::first-letter and ::first-line)',
        isChecked: false
      },
      {
        name: 'Interface (::placeholder, ::selection, ::marker)',
        isChecked: false
      },
      {
        name: 'Advanced (::backdrop, ::file-selector-button)',
        isChecked: false
      }
    ]
  },
  {
    id: 13,
    name: 'Positioning elements (absolute, fixed, relative etc.)',
    answer: 'assets/content/eng/answers/13-Positioning-elements-absolute-fixed-relative.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'static',
        isChecked: false
      },
      {
        name: 'relative',
        isChecked: false
      },
      {
        name: 'absolute',
        isChecked: false
      },
      {
        name: 'fixed',
        isChecked: false
      },
      {
        name: 'sticky',
        isChecked: false
      }
    ]
  },
  {
    id: 14,
    name: 'Types of elements (inline, block, etc.). Their differences',
    answer: 'assets/content/eng/answers/14-Types-of-elements-inline-block-etc-Their-differences.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Block elements',
        isChecked: false
      },
      {
        name: 'Inline elements',
        isChecked: false
      },
    ]
  },
  {
    id: 15,
    name: 'Centering (horizontal, vertical)',
    answer: 'assets/content/eng/answers/15-Centering-horizontal-vertical.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Horizontal centering',
        isChecked: false
      },
      {
        name: 'Vertical centering',
        isChecked: false
      }
    ]
  },
  {
    id: 16,
    name: 'Box Model and box-sizing',
    answer: 'assets/content/eng/answers/16-Box-Model-and-box-sizing.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Box Model',
        isChecked: false
      },
      {
        name: 'box-sizing: content-box and box-sizing: border-box',
        isChecked: false
      }
    ]
  },
  {
    id: 17,
    name: 'Flexbox VS Grid',
    answer: 'assets/content/eng/answers/17-Flexbox-VS-Grid.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'What is Flexbox?',
        isChecked: false
      },
      {
        name: 'What is Grid?',
        isChecked: false
      },
      {
        name: 'Main differences between Flexbox and Grid',
        isChecked: false
      },
    ]
  },
  {
    id: 18,
    name: 'CSS animations',
    answer: 'assets/content/eng/answers/18-CSS-animations.md',
    tags: [
      'markup',
      'CSS',
      'animations'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'What are CSS animations?',
        isChecked: false
      },
      {
        name: 'Main properties for creating animations',
        isChecked: false
      },
      {
        name: 'Advantages and disadvantages of CSS animations',
        isChecked: false
      }
    ]
  },
  {
    id: 19,
    name: 'Reset and Normalize (Reset VS Normalize). Their differences.',
    answer: 'assets/content/eng/answers/19-Reset-and-Normalize-Reset-VS-Normalize-Their-differences.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Reset - what is it?',
        isChecked: false
      },
      {
        name: 'Normalize - what is it?',
        isChecked: false
      },
      {
        name: 'Main differences between reset and normalize',
        isChecked: false
      }
    ]
  },
  {
    id: 20,
    name: 'Units of measurement (em, rem, %, px, vh, vw)',
    answer: 'assets/content/eng/answers/20-Units-of-measurement-em-rem-px-vh-vw.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 21,
    name: 'Order of resource loading. Scripts in head, scripts at the end of body. What is the difference?',
    answer: 'assets/content/eng/answers/21-Order-of-resource-loading-Scripts-in-head-scripts-at-the-end-of-body-What-is-the-difference.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Order of resource loading (scripts in head, scripts at the end of body)',
        isChecked: false
      }
    ]
  },
  {
    id: 22,
    name: 'Ways to include JS on a page',
    answer: 'assets/content/eng/answers/22-Ways-to-include-JS-on-a-page.md',
    tags: [
      'HTML',
      'markup',
      'JavaScript'
    ],
    category: 'Markup',
    structure: [
      {
        name: '3 ways to include JS on a page',
        isChecked: false
      }
    ]
  },
  {
    id: 23,
    name: 'Defer and async attributes on the script tag',
    answer: 'assets/content/eng/answers/23-Defer-and-async-attributes-on-the-script-tag.md',
    tags: [
      'HTML',
      'markup',
      'JavaScript'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Async',
        isChecked: false
      },
      {
        name: 'Defer',
        isChecked: false
      },
      {
        name: 'No attributes',
        isChecked: false
      }
    ]
  },
  {
    id: 24,
    name: 'SVG. SVG animations',
    answer: 'assets/content/eng/answers/24-SVG-Animations.md',
    tags: [
      'SVG',
      'markup',
      'animations'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'What is SVG?',
        isChecked: false
      },
      {
        name: 'Key features of SVG',
        isChecked: false
      }
    ]
  },
  {
    id: 25,
    name: 'Canvas. What is it and why is it needed?',
    answer: 'assets/content/eng/answers/25-Canvas-What-is-it-and-why-is-it-needed.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Canvas - what is it?',
        isChecked: false
      },
      {
        name: 'Why is Canvas needed?',
        isChecked: false
      },
      {
        name: 'Main areas of application',
        isChecked: false
      },
      {
        name: 'Advantages of Canvas',
        isChecked: false
      }
    ]
  },
  {
    id: 26,
    name: 'Custom properties',
    answer: 'assets/content/eng/answers/26-Custom-properties.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Custom properties - what is it?',
        isChecked: false
      },
      {
        name: 'Browser support and when they appeared',
        isChecked: false
      },
      {
        name: 'Main differences from SASS/LESS variables',
        isChecked: false
      }
    ]
  },
  {
    id: 27,
    name: 'Pixel-perfect',
    answer: 'assets/content/eng/answers/27-Pixel-perfect.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Pixel-perfect - what is it?',
        isChecked: false
      }
    ]
  },
  {
    id: 28,
    name: 'Pre- and post- CSS processors. Experience with them',
    answer: 'assets/content/eng/answers/28-Pre--i-post--protsessory-CSS-Opyt-raboty-s-nimi.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Pre- and post- CSS processors - what is it?',
        isChecked: false
      },
      {
        name: 'Relevance in 2025-2026',
        isChecked: false
      }
    ]
  },
  {
    id: 29,
    name: 'BEM Methodology. Main positions, what problems does it solve?',
    answer: 'assets/content/eng/answers/29-BEM-Methodology-Main-positions-what-problems-does-it-solve.md',
    tags: [
      'HTML',
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'BEM Methodology - what is it?',
        isChecked: false
      },
      {
        name: 'Main positions of BEM methodology',
        isChecked: false
      },
      {
        name: 'What problems does BEM solve?',
        isChecked: false
      }
    ]
  },
  {
    id: 30,
    name: 'HTML template assets/content/engines/preprocessors (handlebars, mustache, pug etc)',
    answer: 'assets/content/eng/answers/30-HTML-template-assets/content/engines-preprocessors-handlebars-mustache-pug-etc.md',
    tags: [
      'HTML',
      'markup'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'HTML template assets/content/engines/preprocessors - what is it?',
        isChecked: false
      },
      {
        name: 'Examples of popular tools',
        isChecked: false
      },
      {
        name: 'What is the difference between a template assets/content/engine and a preprocessor?',
        isChecked: false
      },
      {
        name: 'Are they relevant today?',
        isChecked: false
      }
    ]
  },
  {
    id: 31,
    name: 'CORS. What is it and how does it work?',
    answer: 'assets/content/eng/answers/31-CORS-What-is-it-and-how-does-it-work.md',
    tags: [
      'browser',
      'security'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'CORS - what is it?',
        isChecked: false
      }
    ]
  },
  {
    id: 32,
    name: 'Data types in JavaScript. typeof and its features',
    answer: 'assets/content/eng/answers/32-Data-types-in-JavaScript-typeof-and-its-features.md',
    tags: [
      'JavaScript',
      'Data types'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '7 primitive data types',
        isChecked: false
      },
      {
        name: '1 non-primitive data type',
        isChecked: false
      },
      {
        name: 'typeof and its features',
        isChecked: false
      }
    ]
  },
  {
    id: 33,
    name: 'Type conversion in JavaScript',
    answer: 'assets/content/eng/answers/33-Type-conversion-in-JavaScript.md',
    tags: [
      'JavaScript',
      'Data types'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Three main types of conversion',
        isChecked: false
      }
    ]
  },
  {
    id: 34,
    name: 'Let, const and var. Differences + Hoisting',
    answer: 'assets/content/eng/answers/34-Let-const-and-var-Differences-+-Hoisting.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    structure: [
      {
        name: 'Let, const and var - differences',
        isChecked: false
      },
      {
        name: 'Hoisting and its features for let, const and var',
        isChecked: false
      }
    ]
  },
  {
    id: 35,
    name: 'Functions: function declaration, function expression',
    answer: 'assets/content/eng/answers/35-Functions-function-declaration-function-expression.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Function declaration',
        isChecked: false
      },
      {
        name: 'Function expression',
        isChecked: false
      }
    ]
  },
  {
    id: 36,
    name: 'Data structures (array, object, set, map)',
    answer: 'assets/content/eng/answers/36-Data-structures-array-object-set-map.md',
    tags: [
      'JavaScript',
      'Data types',
      'Structures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Array',
        isChecked: false
      },
      {
        name: 'Object',
        isChecked: false
      },
      {
        name: 'Map',
        isChecked: false
      },
      {
        name: 'Set',
        isChecked: false
      },
      {
        name: 'WeakMap and WeakSet',
        isChecked: false
      }
    ]
  },
  {
    id: 37,
    name: 'Array methods you use',
    answer: 'assets/content/eng/answers/37-Array-methods-you-use.md',
    tags: [
      'JavaScript',
      'Data types',
      'Structures',
      'Iterable',
      'Array'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'pop/push and shift/unshift, their differences',
        isChecked: false
      },
      {
        name: 'splice',
        isChecked: false
      },
      {
        name: 'slice',
        isChecked: false
      },
      {
        name: 'concat',
        isChecked: false
      },
      {
        name: 'forEach',
        isChecked: false
      },
      {
        name: 'indexOf/lastIndexOf and includes, their differences',
        isChecked: false
      },
      {
        name: 'find and findIndex, their differences',
        isChecked: false
      },
      {
        name: 'filter',
        isChecked: false
      },
      {
        name: 'map',
        isChecked: false
      },
      {
        name: 'sort(fn)',
        isChecked: false
      },
      {
        name: 'reverse',
        isChecked: false
      },
      {
        name: 'split и join',
        isChecked: false
      },
      {
        name: 'reduce',
        isChecked: false
      },
      {
        name: 'Array.isArray',
        isChecked: false
      },
      {
        name: '«thisArg»',
        isChecked: false
      }
    ]
  },
  {
    id: 38,
    name: 'Iterators and Generators',
    answer: 'assets/content/eng/answers/38-Iterators-and-Generators.md',
    tags: [
      'JavaScript',
      'Iterable',
      'JS mechanics',
      'Generators'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Iterators: Mechanics under the hood',
        isChecked: false
      },
      {
        name: 'Generators',
        isChecked: false
      },
      {
        name: 'Why is this useful in practice?',
        isChecked: false
      }
    ]
  },
  {
    id: 39,
    name: 'Scope, Lexical Environment',
    answer: 'assets/content/eng/answers/39-Scope-Lexical-Environment.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Lexical Environment',
        isChecked: false
      },
      {
        name: 'Types of scopes: global, function, block',
        isChecked: false
      },
      {
        name: 'Variable lifecycle',
        isChecked: false
      }
    ]
  },
  {
    id: 40,
    name: 'Closure',
    answer: 'assets/content/eng/answers/40-Closure.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Closure - what it is and why it is needed',
        isChecked: false
      },
      {
        name: '[[Environment]]',
        isChecked: false
      },
      {
        name: 'Using closures to create private variables',
        isChecked: false
      }
    ]
  },
  {
    id: 41,
    name: 'Garbage Collector. What it is and why it is needed?',
    answer: 'assets/content/eng/answers/41-Garbage-Collector-What-it-is-and-why-it-is-needed.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    structure: [
      {
        name: 'Garbage Collector',
        isChecked: false
      }
    ]
  },
  {
    id: 42,
    name: 'Recursion. What it is and why it is needed?',
    answer: 'assets/content/eng/answers/42-Recursion-What-it-is-and-why-it-is-needed.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Recursion - what it is and why it is needed',
        isChecked: false
      },
      {
        name: 'Pros and cons of recursion',
        isChecked: false
      }
    ]
  },
  {
    id: 43,
    name: 'The "this" keyword. Context',
    answer: 'assets/content/eng/answers/43-The-this-keyword-Context.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'context'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Global context and regular function call',
        isChecked: false
      },
      {
        name: 'Calling as an object method',
        isChecked: false
      },
      {
        name: 'Arrow functions',
        isChecked: false
      }
    ]
  },
  {
    id: 44,
    name: 'Context binding (explicit, implicit). Bind, call, apply and their differences',
    answer: 'assets/content/eng/answers/44-Context-binding-explicit-implicit-Bind-call-apply-and-their-differences.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'context'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Implicit Binding',
        isChecked: false
      },
      {
        name: 'Explicit Binding',
        isChecked: false
      },
      {
        name: 'Methods call, apply and bind and their differences',
        isChecked: false
      }
    ]
  },
  {
    id: 45,
    name: 'Currying',
    answer: 'assets/content/eng/answers/45-Currying.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions',
      'closures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Currying - what it is and why it is needed',
        isChecked: false
      },
      {
        name: 'Implementation of currying',
        isChecked: false
      },
      {
        name: 'Why is this useful in practice?',
        isChecked: false
      }
    ]
  },
  {
    id: 46,
    name: 'Partial Application',
    answer: 'assets/content/eng/answers/46-Partial-Application.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions',
      'closures'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Partial Application (based on currying)',
        isChecked: false
      },
      {
        name: 'Implementation of partial application',
        isChecked: false
      }
    ]
  },
  {
    id: 47,
    name: 'Arguments object (why is it called a pseudo-array?)',
    answer: 'assets/content/eng/answers/47-Arguments-object-why-is-it-called-a-pseudo-array.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Arguments object',
        isChecked: false
      },
      {
        name: 'Why is it called a pseudo-array?',
        isChecked: false
      },
      {
        name: 'Arguments VS Arrow Functions',
        isChecked: false
      },
      {
        name: 'Modern alternatives',
        isChecked: false
      }
    ]
  },
  {
    id: 48,
    name: '"use strict" directive',
    answer: 'assets/content/eng/answers/48-Use-strict-directive.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '"use strict" directive - what it is and why it is needed',
        isChecked: false
      },
      {
        name: 'Main changes when strict mode is enabled',
        isChecked: false
      },
      {
        name: 'How to enable strict mode?',
        isChecked: false
      }
    ]
  },
  {
    id: 49,
    name: 'Object conversion: toString and valueOf',
    answer: 'assets/content/eng/answers/49-Object-conversion-toString-and-valueOf.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Object conversion: toString and valueOf',
        isChecked: false
      },
      {
        name: 'How the assets/content/engine decides which method to call first',
        isChecked: false
      }
    ]
  },
  {
    id: 50,
    name: 'Event loop, microtasks, event queue',
    answer: 'assets/content/eng/answers/50-Event-loop-microtasks-event-queue.md',
    tags: [
      'JavaScript',
      'Browser mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Why do we need the Event Loop?',
        isChecked: false
      },
      {
        name: 'Main entities: Call Stack, Heap, Web APIs, Microtasks and Macrotasks',
        isChecked: false
      }
    ]
  },
  {
    id: 51,
    name: 'Inheritance in JavaScript',
    answer: 'assets/content/eng/answers/51-Inheritance-in-JavaScript.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Inheritance in JavaScript',
        isChecked: false
      },
      {
        name: 'Prototype inheritance and prototype chain',
        isChecked: false
      }
    ]
  },
  {
    id: 52,
    name: 'Reference __proto__. What is it and how to use it?',
    answer: 'assets/content/eng/answers/52-Reference-__proto__-What-is-it-and-how-to-use-it.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: '__proto__ - what is it?',
        isChecked: false
      }
    ]
  },
  {
    id: 53,
    name: 'F.prototype property and creating objects with new',
    answer: 'assets/content/eng/answers/53-Fprototype-property-and-creating-objects-with-new.md',
    tags: [
      'JavaScript',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'F.prototype',
        isChecked: false
      }
    ]
  },
  {
    id: 54,
    name: 'Promises. Why are they needed? What problem did they solve?',
    answer: 'assets/content/eng/answers/54-Promises-Why-are-they-needed-What-problem-did-they-solve.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'What is a Promise, in which version of ES did it appear',
        isChecked: false
      },
      {
        name: 'What problem did Promises solve?',
        isChecked: false
      },
      {
        name: 'Immutability of the result after the Promise is settled',
        isChecked: false
      },
      {
        name: 'then, catch, finally',
        isChecked: false
      },
      {
        name: 'Evolution of Promises and async/await',
        isChecked: false
      }
    ]
  },
  {
    id: 55,
    name: 'Promise chaining. Can we call promise.then().finally().then() or promise.catch().then()? What will we get?',
    answer: 'assets/content/eng/answers/55-Promise-chaining-Can-we-call-promisethenfinallythen-or-promisecatchthen-What-will-we-get.md',
    tags: [
      'JavaScript',
      'JS mechanics',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Promise chaining',
        isChecked: false
      },
      {
        name: 'We can continue the chain after an error',
        isChecked: false
      },
      {
        name: 'We can also build such chains with finally',
        isChecked: false
      }
    ]
  },
  {
    id: 56,
    name: 'Try - Catch. What is it and why is it needed?',
    answer: 'assets/content/eng/answers/56-Try---Catch-What-is-it-and-why-is-it-needed.md',
    tags: [
      'JavaScript'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Try - Catch - what is it for?',
        isChecked: false
      }
    ]
  },
  {
    id: 57,
    name: 'What is new in the language in ES6?',
    answer: 'assets/content/eng/answers/57-What-is-new-in-the-language-in-ES6.md',
    tags: [
      'JavaScript',
      'ES6'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 58,
    name: 'What is new in the language after ES6?',
    answer: 'assets/content/eng/answers/58-What-is-new-in-the-language-after-ES6.md',
    tags: [
      'JavaScript',
      'ES6',
      'ES7'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 59,
    name: 'Async await. What problem do they solve?',
    answer: 'assets/content/eng/answers/59-Async-await-What-problem-do-they-solve.md',
    tags: [
      'JavaScript',
      'ES6',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Evolution of asynchronous JS in ES8',
        isChecked: false
      },
      {
        name: 'Why do we need async/await? What problem does it solve?',
        isChecked: false
      },
      {
        name: 'try...catch...finally',
        isChecked: false
      },
      {
        name: 'node.js and support for async/await',
        isChecked: false
      }
    ]
  },
  {
    id: 60,
    name: 'Methods for managing a group of promises',
    answer: 'assets/content/eng/answers/60-Methods-for-managing-a-group-of-promises.md',
    tags: [
      'JavaScript',
      'ES6',
      'Promise',
      'Async'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'What problem do they solve?',
        isChecked: false
      },
      {
        name: 'Promise.all() — «All or nothing»',
        isChecked: false
      },
      {
        name: 'Promise.allSettled() — «Wait for all, no matter what»',
        isChecked: false
      },
      {
        name: 'Promise.race() — «Who is faster»',
        isChecked: false
      },
      {
        name: 'Promise.any() — «At least one successful»',
        isChecked: false
      }
    ]
  },
  {
    id: 61,
    name: 'DOM - what is it and why? DOM events. Bubbling, capturing. Delegation',
    answer: 'assets/content/eng/answers/61-DOM---what-is-it-and-why-DOM-events-Bubbling-capturing-Delegation.md',
    tags: [
      'markup',
      'markup',
      'browser mechanics',
      'browser'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 62,
    name: 'LocalStorage VS SessionStorage. Differences, working principle',
    answer: 'assets/content/eng/answers/62-LocalStorage-VS-SessionStorage-Differences-working-principle.md',
    tags: [
      'browser',
      'LocalStorage',
      'SessionStorage'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'LocalStorage',
        isChecked: false
      },
      {
        name: 'SessionStorage',
        isChecked: false
      },
    ]
  },
  {
    id: 63,
    name: 'Code style: linters, prettier etc.',
    answer: 'assets/content/eng/answers/63-Code-style-Linters-Prettier.md',
    tags: [
      'programming',
      'codestyle',
      'best-practice'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Why do we need code style and tools to maintain it?',
        isChecked: false
      },
      {
        name: 'Prettier',
        isChecked: false
      },
      {
        name: 'ESLint, TSLint and CodeLint',
        isChecked: false
      },
      {
        name: '.editorconfig',
        isChecked: false
      }
    ]
  },
  {
    id: 64,
    name: 'Mutability/Immutability (when working with arrays etc)',
    answer: 'assets/content/eng/answers/64-Mutability-Immutability-when-working-with-arrays-etc.md',
    tags: [
      'programming',
      'immutable'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 65,
    name: 'Reactive programming. RxJs and main methods',
    answer: 'assets/content/eng/answers/65-Reactive-programming-RxJs-and-main-methods.md',
    tags: [
      'TypeScript',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 66,
    name: 'What is an Observable object in RxJs?',
    answer: 'assets/content/eng/answers/66-What-is-an-Observable-object-in-RxJs.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Observable - what is it?',
        isChecked: false
      }
    ]
  },
  {
    id: 67,
    name: 'What is a Subject? What types are there?',
    answer: 'assets/content/eng/answers/67-What-is-a-Subject-What-types-are-there.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Subject - what is it?',
        isChecked: false
      }
    ]
  },
  {
    id: 68,
    name: 'Observables VS Subject - differences',
    answer: 'assets/content/eng/answers/68-Observables-VS-Subject---differences.md',
    tags: [
      'TypeScript',
      'Observables',
      'Async',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Subject specifics',
        isChecked: false
      },
      {
        name: 'Behavior differences and types of Subject',
        isChecked: false
      },
      {
        name: 'Observable specifics',
        isChecked: false
      },
      {
        name: 'Observable - only for data retrieval, Subject - also for propagation',
        isChecked: false
      }
    ]
  },
  {
    id: 69,
    name: 'Zone.js. What is it and why is it needed?',
    answer: 'assets/content/eng/answers/69-Zonejs-What-is-it-and-why-is-it-needed.md',
    tags: [
      'Angular',
      'Change Detection',
      'Async'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 70,
    name: 'Which Utility Types (Утилиты типов) do you use in practice?',
    answer: 'assets/content/eng/answers/70-Which-Utility-Types-Utility-tipov-do-you-use-in-practice.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Partial&lt;Type>',
        isChecked: false
      },
      {
        name: 'Required&lt;Type>',
        isChecked: false
      },
      {
        name: 'Pick&lt;Type, Keys>',
        isChecked: false
      },
      {
        name: 'Omit&lt;Type, Keys>',
        isChecked: false
      },
      {
        name: 'Record&lt;Keys, Type>',
        isChecked: false
      }
    ]
  },
  {
    id: 71,
    name: 'What are Type Guards and Type Assertions?',
    answer: 'assets/content/eng/answers/71-What-are-Type-Guards-and-Type-Assertions.md',
    tags: [
      'TypeScript',
      'TS mechanics',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Type Guards - typeof, in, instanceof, Custom Type Guards',
        isChecked: false
      },
      {
        name: 'Type Assertions - as, <Type>, !, as const',
        isChecked: false
      }
    ]
  },
  {
    id: 72,
    name: 'What are Enums? Their usage',
    answer: 'assets/content/eng/answers/72-What-are-Enums-Their-usage.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Enums ',
        isChecked: false
      },
      {
        name: 'Advantages of Enums',
        isChecked: false
      },
      {
        name: 'Numeric Enums',
        isChecked: false
      },
      {
        name: 'String Enums',
        isChecked: false
      },
      {
        name: 'Heterogeneous Enums',
        isChecked: false
      },
      {
        name: 'Const Enums',
        isChecked: false
      },
      {
        name: 'Under the hood: how JavaScript handles Enums',
        isChecked: false
      }
    ]
  },
  {
    id: 73,
    name: 'Class, Interface, Type. Differences and usage',
    answer: 'assets/content/eng/answers/73-Class-Interface-Type-Differences-and-usage.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Class (Implementation)',
        isChecked: false
      },
      {
        name: 'Interface (Contract)',
        isChecked: false
      },
      {
        name: 'Type (Alias)',
        isChecked: false
      }
    ]
  },
  {
    id: 74,
    name: 'What are Generics? Their usage',
    answer: 'assets/content/eng/answers/74-What-are-Generics-Their-usage.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Generics',
        isChecked: false
      }
    ]
  },
  {
    id: 75,
    name: 'Difference between any, unknown, and never',
    answer: 'assets/content/eng/answers/75-Difference-between-any-unknown-and-never.md',
    tags: [
      'TypeScript',
      'Typization'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'any',
        isChecked: false
      },
      {
        name: 'unknown',
        isChecked: false
      },
      {
        name: 'never',
        isChecked: false
      }
    ]
  },
  {
    id: 76,
    name: 'When to use .asObservable() in RxJs?',
    answer: 'assets/content/eng/answers/76-When-to-use-asObservable-in-RxJs.md',
    tags: [
      'TypeScript',
      'Angular',
      'RxJs'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'asObservable() - what it is and why it is needed?',
        isChecked: false
      },
      {
        name: 'Correct way to use asObservable()',
        isChecked: false
      },
      {
        name: 'Anti-pattern of using asObservable()',
        isChecked: false
      }
    ]
  },
  {
    id: 77,
    name: 'Main principles of OOP. What is it and why is it needed?',
    answer: 'assets/content/eng/answers/77-Main-principles-of-OOP-What-is-it-and-why-is-it-needed.md',
    tags: [
      'programming',
      'OOP'
    ],
    category: 'programming',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 78,
    name: 'Design Patterns',
    answer: 'assets/content/eng/answers/78-Design-Patterns.md',
    tags: [
      'Patterns',
      'best-practice'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Design Patterns - what they are and why they are needed?',
        isChecked: false
      }
    ]
  },
  {
    id: 79,
    name: 'Function Decorators. What they are and why they are needed?',
    answer: 'assets/content/eng/answers/79-Function-Decorators-What-they-are-and-why-they-are-needed.md',
    tags: [
      'JavaScript',
      'Patterns',
      'best-practice'
    ],
    category: 'programming',
    structure: [
      {
        name: 'Decorator',
        isChecked: false
      }
    ]
  },
  {
    id: 80,
    name: 'SOLID Principles. What they are and why they are needed?',
    answer: 'assets/content/eng/answers/80-SOLID-Principles-What-they-are-and-why-they-are-needed.md',
    tags: [
      'programming',
      'best-practice',
      'OOP'
    ],
    category: 'programming',
    structure: [
      {
        name: 'SOLID Principles - what they are and why they are needed',
        isChecked: false
      },
      {
        name: 'Single Responsibility Principle',
        isChecked: false
      },
      {
        name: 'Open-Closed Principle',
        isChecked: false
      },
      {
        name: 'Liskov Substitution Principle',
        isChecked: false
      },
      {
        name: 'Interface Segregation Principle',
        isChecked: false
      },
      {
        name: 'Dependency Inversion Principle',
        isChecked: false
      }
    ]
  },
  {
    id: 81,
    name: 'HTTP Protocol. What it is and what it is used for?',
    answer: 'assets/content/eng/answers/81-HTTP-Protocol-What-it-is-and-what-it-is-used-for.md',
    tags: [
      'protocol',
      'internet'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 82,
    name: 'Special Angular selectors. Pseudo-classes :host, :host-context and pseudo-element ::ng-deep',
    answer: 'assets/content/eng/answers/82-Special-Angular-selectors-Pseudo-classes-host-host-context-and-pseudo-element-ng-deep.md',
    tags: [
      'Angular',
      'html',
      'markup'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'HTML tags',
        isChecked: false
      }
    ]
  },
  {
    id: 83,
    name: 'SQL. Basic commands',
    answer: 'assets/content/eng/answers/83-SQL-Basic-commands.md',
    tags: [
      'DBMS (Database Management Systems)',
      'databases',
      'SQL'
    ],
    category: 'Databases',
    structure: [
      {
        name: 'SELECT, FROM',
        isChecked: false
      },
      {
        name: 'SELECT DISTINCT',
        isChecked: false
      },
      {
        name: 'WHERE',
        isChecked: false
      },
      {
        name: 'GROUP BY',
        isChecked: false
      },
      {
        name: 'HAVING',
        isChecked: false
      },
      {
        name: 'ORDER BY',
        isChecked: false
      },
      {
        name: 'JOIN and its variants',
        isChecked: false
      }
    ]
  },
  {
    id: 84,
    name: 'JSON Format, toJSON method',
    answer: 'assets/content/eng/answers/84-JSON-Format-toJSON-method.md',
    tags: [
      'JSON',
      'Data Structures'
    ],
    category: 'Databases',
    structure: [
      {
        name: 'JSON - what it is and why it is needed',
        isChecked: false
      },
      {
        name: 'toJSON method',
        isChecked: false
      }
    ]
  },
  {
    id: 85,
    name: 'Authentication and Authorization. What is the difference?',
    answer: 'assets/content/eng/answers/85-Authentication-and-Authorization-What-is-the-difference.md',
    tags: [
      'security',
      'authentication',
      'authorization'
    ],
    category: 'General',
    structure: [
      {
        name: 'Authentication',
        isChecked: false
      },
      {
        name: 'Authorization',
        isChecked: false
      }
    ]
  },
  {
    id: 86,
    name: 'Application Security (AppSec)',
    answer: 'assets/content/eng/answers/86-Application-Security-AppSec.md',
    tags: [
      'security',
      'AppSec',
      'OWASP'
    ],
    category: 'General',
    structure: [
      {
        name: 'XSS',
        isChecked: false
      },
      {
        name: 'CSRF',
        isChecked: false
      },
      {
        name: 'SQL Injection',
        isChecked: false
      }
    ]
  },
  {
    id: 87,
    name: 'Trees, Graphs, Inverted Trees',
    answer: 'assets/content/eng/answers/87-Trees-Graphs-Inverted-Trees.md',
    tags: [
      'data structures',
      'trees',
      'graphs'
    ],
    category: 'General',
    structure: [
      {
        name: 'Trees',
        isChecked: false
      },
      {
        name: 'Inverted Trees',
        isChecked: false
      },
      {
        name: 'Binary Trees',
        isChecked: false
      },
      {
        name: 'Graphs',
        isChecked: false
      }
    ]
  },
  {
    id: 88,
    name: 'Why is working with the DOM considered very resource-intensive?',
    answer: 'assets/content/eng/answers/88-Why-is-working-with-the-DOM-considered-very-resource-intensive.md',
    tags: [
      'DOM',
      'performance',
      'web development'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'DOM — Web API, not part of JavaScript',
        isChecked: false
      },
      {
        name: 'DOM — a complex hierarchical data structure',
        isChecked: false
      },
      {
        name: 'Reflow and Repaint',
        isChecked: false
      }
    ]
  },
  {
    id: 89,
    name: 'Shadow DOM. Style encapsulation',
    answer: 'assets/content/eng/answers/89-Shadow-DOM-Style-Encapsulation.md',
    tags: [
      'web development',
      'shadow DOM'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Shadow DOM - what it is',
        isChecked: false
      },
      {
        name: 'The problem that Shadow DOM solves',
        isChecked: false
      },
      {
        name: 'Key features of Shadow DOM',
        isChecked: false
      }
    ]
  },
  {
    id: 90,
    name: 'Virtual DOM. Optimization at the framework level',
    answer: 'assets/content/eng/answers/90-Virtual-DOM-Optimization-at-the-framework-level.md',
    tags: [
      'web development',
      'virtual DOM',
      'Vue',
      'React'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Virtual DOM - what it is',
        isChecked: false
      },
      {
        name: 'The problem that Virtual DOM solves',
        isChecked: false
      },
      {
        name: 'How Virtual DOM works',
        isChecked: false
      }
    ]
  },
  {
    id: 91,
    name: 'RxJS and Asynchronous Programming',
    answer: 'assets/content/eng/answers/91-RxJS-and-Asynchronous-Programming.md',
    tags: [
      'rxjs',
      'asynchronous',
      'reactive programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Basics of RxJS',
        isChecked: false
      },
      {
        name: 'Key building blocks of RxJS',
        isChecked: false
      },
      {
        name: 'RxJS Operators',
        isChecked: false
      },
      {
        name: 'Memory Management in RxJS',
        isChecked: false
      }
    ]
  },
  {
    id: 92,
    name: 'State management in Angular. NgRx',
    answer: 'assets/content/eng/answers/92-State-management-in-Angular-NgRx.md',
    tags: [
      'angular',
      'state management',
      'reactive programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'State management in Angular. NgRx, what it is',
        isChecked: false
      },
      {
        name: 'Store, Actions, Reducers, Selectors',
        isChecked: false
      },
      {
        name: 'Effects (Side effects and asynchronicity)',
        isChecked: false
      }
    ]
  },
  {
    id: 93,
    name: 'Signals in Angular. What is the fundamental difference between Signals and RxJS, and why did the Angular team decide to implement this pattern?',
    answer: 'assets/content/eng/answers/93-Signals-in-Angular-What-is-the-fundamental-difference-between-Signals-and-RxJS-and-why-did-the-Angular-team-decide-to-implement-this-pattern.md',
    tags: [
      'Angular',
      'Signals',
      'Reactive Programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Signals in Angular, what it is',
        isChecked: false
      },
      {
        name: 'The fundamental difference between Signals and RxJS',
        isChecked: false
      }
    ]
  },
  {
    id: 94,
    name: 'How do computed and effect work?',
    answer: 'assets/content/eng/answers/94-How-do-computed-and-effect-work.md',
    tags: [
      'Angular',
      'Signals',
      'Reactive Programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Computed',
        isChecked: false
      },
      {
        name: 'Effect',
        isChecked: false
      },
      {
        name: 'When to use Effect, and when it is an anti-pattern',
        isChecked: false
      }
    ]
  },
  {
    id: 95,
    name: 'Signal-based API: input(), output() and model()',
    answer: 'assets/content/eng/answers/95-Signal-based-API-input-output-and-model.md',
    tags: [
      'Angular',
      'Signals',
      'Reactive Programming'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'input(), output() and model() - what it is',
        isChecked: false
      }
    ]
  },
  {
    id: 96,
    name: 'Standalone Components: Why did they abandon NgModules?',
    answer: 'assets/content/eng/answers/96-Standalone-Components-Why-did-they-abandon-NgModules.md',
    tags: [
      'Angular',
      'Standalone',
      'Architecture'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Standalone Concept',
        isChecked: false
      },
      {
        name: 'Why did they abandon NgModules',
        isChecked: false
      }
    ]
  },
  {
    id: 97,
    name: 'inject() function vs Constructor DI',
    answer: 'assets/content/eng/answers/97-inject-function-vs-Constructor-DI.md',
    tags: [
      'Angular',
      'Standalone',
      'Architecture',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'inject() function',
        isChecked: false
      },
      {
        name: 'Advantages of inject() compared to Constructor DI',
        isChecked: false
      },
      {
        name: 'Where you CAN use inject()',
        isChecked: false
      },
      {
        name: 'Where you CANNOT use inject()',
        isChecked: false
      }
    ]
  },
  {
    id: 98,
    name: 'New Control Flow (@if, @for) vs Structural Directives (*ngIf, *ngFor)',
    answer: 'assets/content/eng/answers/98-New-Control-Flow-if-for-vs-Structural-Directives-ngIf-ngFor.md',
    tags: [
      'Angular',
      'Syntax'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'New Control Flow',
        isChecked: false
      },
      {
        name: 'Advantages of the new Control Flow',
        isChecked: false
      }
    ]
  },
  {
    id: 99,
    name: 'Change Detection Strategies (Default vs OnPush vs Zoneless)',
    answer: 'assets/content/eng/answers/99-Change-Detection-Strategies-Default-vs-OnPush-vs-Zoneless.md',
    tags: [
      'Angular',
      'Change Detection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'ChangeDetectionStrategy.Default',
        isChecked: false
      },
      {
        name: 'ChangeDetectionStrategy.OnPush',
        isChecked: false
      },
      {
        name: 'Zoneless (Современный Angular / Signals)',
        isChecked: false
      }
    ]
  },
  {
    id: 100,
    name: 'Deferrable Views (@defer): Как работает этот механизм? Какие встроенные триггеры (on viewport, on interaction, on idle) существуют для ленивой загрузки кусков шаблона?',
    answer: 'assets/content/eng/answers/100-Deferrable-Views-defer-Kak-rabotaet-etot-mehanizm-Kakie-vstroennye-triggery-on-viewport-on-interaction-on-idle-sushchestvuyut-dlya-lenivoj-zagruzki-kuskov-shablona.md',
    tags: [
      'Angular',
      'Performance'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Deferrable Views',
        isChecked: false
      }
    ]
  },
  {
    id: 101,
    name: 'Functional Guards - что это и почему классовые Guards были объявлены deprecated?',
    answer: 'assets/content/eng/answers/101-Functional-Guards---chto-eto-i-pochemu-klassovye-Guards-byli-obyavleny-deprecated.md',
    tags: [
      'angular',
      'routing',
      'guards'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Functional Guards',
        isChecked: false
      }
    ]
  },
  {
    id: 102,
    name: 'Functional Interceptors: Как настроить перехватчики HTTP-запросов (Interceptors) в Standalone-приложении без использования модулей и HTTP_INTERCEPTORS?',
    answer: 'assets/content/eng/answers/102-Functional-Interceptors-Kak-nastroit-perehvatchiki-HTTP-zaprosov-Interceptors-v-Standalone-prilozhenii-bez-ispolzovaniya-modulej-i-HTTP_INTERCEPTORS.md',
    tags: [
      'angular',
      'routing',
      'interceptors'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Functional Interceptors',
        isChecked: false
      }
    ]
  },
  {
    id: 103,
    name: 'Lifecycle Angular (Жизненный цикл компонента). Современный подход',
    answer: 'assets/content/eng/answers/103-Lifecycle-Angular-Lifecycle-Hooks-Modern-Approach.md',
    tags: [
      'Angular',
      'Lifecycle',
      'Hooks'
    ],
    structure: [
      {
        name: 'Lifecycle Hooks (Classic)',
        isChecked: false
      },
      {
        name: 'Modern Approach',
        isChecked: false
      }
    ]
  },
  {
    id: 104,
    name: 'Object.defineProperty - what it is and what it is for?',
    answer: 'assets/content/eng/answers/104-Object-defineProperty-what-it-is-and-what-it-is-for.md',
    tags: [
      'JavaScript',
      'Angular.js',
      'Vue 2'
    ],
    structure: [
      {
        name: 'Object.defineProperty - what it is and what it is for?',
        isChecked: false
      },
      {
        name: 'General property descriptors: configurable, enumerable',
        isChecked: false
      },
      {
        name: 'Data descriptors: writable, value',
        isChecked: false
      },
      {
        name: 'Accessor descriptors: get, set',
        isChecked: false
      },
      {
        name: 'Usage in Vue and other frameworks - (only Vue 2, in Vue 3 - already Proxy)',
        isChecked: false
      }
    ]
  },
  {
    id: 105,
    name: 'The essence of reactivity in Angular.js, Angular 2+, Vue 2, and Vue 3. What is the fundamental difference between approaches?',
    answer: 'assets/content/eng/answers/105-The-essence-of-reactivity-in-Angular-Vue.md',
    tags: [
      'Angular',
      'Vue',
      'Reactivity'
    ],
    structure: [
      {
        name: 'Reactivity in Vue 2',
        isChecked: false
      },
      {
        name: 'Reactivity in Vue 3',
        isChecked: false
      },
      {
        name: 'Reactivity in Angular.js',
        isChecked: false
      },
      {
        name: 'Reactivity in Angular 2+',
        isChecked: false
      }
    ]
  },
];
