import { Question } from 'src/app/models/question.model';

export const questions = [
  {
    id: 1,
    name: 'How does the browser parse a page?',
    answer: 'assets/content/eng/answers/1-How-does-the-browser-parse-a-page.md',
    tags: [
      'markup',
      'CSS',
      'browser'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Critical Rendering Path',
        isChecked: false
      },
      {
        name: 'How the browser builds the DOM, CSSOM, and Render Tree',
        isChecked: false
      },
      {
        name: 'How the browser executes JavaScript and how it affects rendering',
        isChecked: false
      },
      {
        name: 'What is Layout / Reflow',
        isChecked: false
      },
      {
        name: 'What is Repaint',
        isChecked: false
      },
      {
        name: 'Composite',
        isChecked: false
      },
      {
        name: 'Events DOMContentLoaded and Load - what is the difference?',
        isChecked: false
      }
    ]
  },
  {
    id: 2,
    name: 'How to optimize page rendering',
    answer: 'assets/content/eng/answers/2-How-to-optimize-page-rendering.md',
    tags: [
      'markup',
      'CSS',
      'browser'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Critical Rendering Path (CRP)',
        isChecked: false
      },
      {
        name: 'Optimizing DOM (HTML)',
        isChecked: false
      },
      {
        name: 'Optimizing CSSOM (CSS)',
        isChecked: false
      },
      {
        name: 'Optimizing JavaScript',
        isChecked: false
      },
      {
        name: 'Optimizing media and fonts (Resources)',
        isChecked: false
      },
      {
        name: 'Network optimizations and content delivery',
        isChecked: false
      },
      {
        name: 'Profiling and metrics',
        isChecked: false
      }
    ]
  },
  {
    id: 3,
    name: 'What is <DOCTYPE>. Why is it needed?',
    answer: 'assets/content/eng/answers/3-What-is-DOCTYPE-Why-is-it-needed.md',
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
    id: 4,
    name: 'HTML5 Tags. Semantics. Accessibility.',
    answer: 'assets/content/eng/answers/4-HTML5-Tags-Semantics-Accessibility.md',
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
    id: 5,
    name: 'What are the ways to include CSS on a page?',
    answer: 'assets/content/eng/answers/5-What-are-the-ways-to-include-CSS-on-a-page.md',
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
    id: 6,
    name: 'CSS Priority. Cascade.',
    answer: 'assets/content/eng/answers/6-CSS-Priority-Cascade.md',
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
    id: 7,
    name: 'CSS Selector Weight',
    answer: 'assets/content/eng/answers/7-CSS-Selector-Weight.md',
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
    id: 8,
    name: 'High specificity of a selector, are there any drawbacks? + !important',
    answer: 'assets/content/eng/answers/8-High-specificity-of-a-selector-are-there-any-drawbacks.md',
    tags: [
      'markup',
      'CSS'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'Drawbacks of high specificity',
        isChecked: false
      },
      {
        name: '!important - when to use it and what problems it can cause',
        isChecked: false
      },
      {
        name: 'Best practices for managing specificity and style priority',
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
    answer: 'assets/content/eng/answers/28-Pre--and-post--CSS-processors-Experience-with-them.md',
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
    name: 'What types of nodes exist in the DOM, how do they differ, and what are they used for?',
    answer: 'assets/content/eng/answers/31-What-types-of-nodes-exist-in-the-DOM.md',
    tags: [
      'browser',
      'performance',
      'markup',
      'DOM'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'What types of nodes exist in the DOM?',
        isChecked: false
      },
      {
        name: 'How do they differ?',
        isChecked: false
      },
      {
        name: 'What are the different types of nodes used for?',
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
      'variables',
      'let', 'const', 'var',
      'JS mechanics'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Let, const and var - differences',
        isChecked: false
      },
      {
        name: 'Hoisting and its features for let, const and var',
        isChecked: false
      },
      {
        name: 'How Hoisting works with var, let and const',
        isChecked: false
      },
      {
        name: 'Temporal Dead Zone (TDZ) for let and const',
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
    category: 'JavaScript',
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
    answer: 'assets/content/eng/answers/55-Promise-chaining.md',
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
        name: '11 main features of ES6',
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
      'browser mechanics'
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
        name: 'Reactive programming - what is it?',
        isChecked: false
      },
      {
        name: 'RxJs - what is it for?',
        isChecked: false
      },
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
        name: 'Zone.js - what is it?',
        isChecked: false
      },
      {
        name: 'How Zone.js works under the hood',
        isChecked: false
      }
    ]
  },
  {
    id: 70,
    name: 'Which Utility Types do you use in practice?',
    answer: 'assets/content/eng/answers/70-Which-Utility-Types-do-you-use-in-practice.md',
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
        name: 'Generics - what problem do they solve?',
        isChecked: false
      },
      {
        name: 'Generics syntax',
        isChecked: false
      },
      {
        name: 'Usage of Generics in functions, interfaces, and classes',
        isChecked: false
      },
      {
        name: 'Constraints in Generics',
        isChecked: false
      },
      {
        name: 'Utility Types based on Generics',
        isChecked: false
      },
      {
        name: 'Multiple type parameters',
        isChecked: false
      },
      {
        name: 'How Generics work under the hood in JavaScript',
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
        name: 'Abstraction',
        isChecked: false
      },
      {
        name: 'Encapsulation',
        isChecked: false
      },
      {
        name: 'Inheritance',
        isChecked: false
      },
      {
        name: 'Polymorphism',
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
    name: 'Sorting methods. What are their differences and which one is better to use in different cases?',
    answer: 'assets/content/eng/answers/86-Sorting-methods.md',
    tags: [
      'algorithm',
      'sorting',
      'Big O'
    ],
    category: 'Algorithms',
    structure: [
      {
        name: 'Bubble Sort',
        isChecked: false
      },
      {
        name: 'Insertion Sort',
        isChecked: false
      },
      {
        name: 'Selection Sort',
        isChecked: false
      },
      {
        name: 'Merge Sort',
        isChecked: false
      },
      {
        name: 'Quick Sort',
        isChecked: false
      }
    ]
  },
  {
    id: 87,
    name: 'Method for evaluating algorithm complexity. O(1), O(n), O(log n), etc. What it is and why it is needed',
    answer: 'assets/content/eng/answers/87-Method-for-evaluating-algorithm-complexity.md',
    tags: [
      'algorithm',
      'complexity',
      'Big O'
    ],
    category: 'Algorithms',
    structure: [
      {
        name: 'O(1)',
        isChecked: false
      },
      {
        name: 'O(n)',
        isChecked: false
      },
      {
        name: 'O(log n)',
        isChecked: false
      }
    ]
  },
  {
    id: 88,
    name: 'Trees, Graphs, Inverted Trees',
    answer: 'assets/content/eng/answers/88-Trees-Graphs-Inverted-Trees.md',
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
        name: 'What is RxJS',
        isChecked: false
      },
      {
        name: 'What is RxJS used for?',
        isChecked: false
      },
      {
        name: 'Basic entities of RxJS: Observable, Observer, Subscription, Subject',
        isChecked: false
      },
      {
        name: 'Popular operators',
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
        name: 'Zoneless (Modern Angular / Signals)',
        isChecked: false
      }
    ]
  },
  {
    id: 100,
    name: 'Deferrable Views (@defer): How does this mechanism work?',
    answer: 'assets/content/eng/answers/100-Deferrable-Views-defer.md',
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
    name: 'Functional Guards - what they are and why class-based Guards were deprecated?',
    answer: 'assets/content/eng/answers/101-Functional-Guards.md',
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
    name: 'Functional Interceptors: How to configure HTTP request interceptors (Interceptors) in a Standalone application without using modules and HTTP_INTERCEPTORS?',
    answer: 'assets/content/eng/answers/102-Functional-Interceptors.md',
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
    name: 'Lifecycle Angular. Modern Approach',
    answer: 'assets/content/eng/answers/103-Lifecycle-Angular-Lifecycle-Hooks-Modern-Approach.md',
    tags: [
      'Angular',
      'Lifecycle',
      'Hooks'
    ],
    category: 'Angular',
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
    category: 'JavaScript',
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
    category: '',
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

  {
    id: 106,
    name: 'Abstract Classes in TypeScript. When to use abstract classes instead of interfaces?',
    answer: 'assets/content/eng/answers/106-Abstract-Classes-v-TypeScript.md',
    tags: [
      'TypeScript',
      'OOP',
      'Abstract Classes'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Abstract Classes - what they are and why they are needed?',
        isChecked: false
      },
      {
        name: 'When to use abstract classes instead of interfaces',
        isChecked: false
      },
      {
        name: 'Can abstract classes be used for multiple inheritance?',
        isChecked: false
      },
      {
        name: 'Can abstract classes be combined with interfaces?',
        isChecked: false
      }
    ]
  },
  {
    id: 107,
    name: 'Protected vs Private vs Public in TypeScript. When to use each of these access modifiers?',
    answer: 'assets/content/eng/answers/107-Protected-vs-Private-vs-Public-v-TypeScript.md',
    tags: [
      'TypeScript',
      'OOP',
      'Access Modifiers'
    ],
    category: 'TypeScript',
    structure: [
      {
        name: 'Protected (Access Modifier)',
        isChecked: false
      },
      {
        name: 'Private (Access Modifier)',
        isChecked: false
      },
      {
        name: 'Public (Access Modifier)',
        isChecked: false
      },
      {
        name: 'When to use each of these access modifiers',
        isChecked: false
      }
    ]
  },
  {
    id: 108,
    name: 'Console API. What console methods do you use in your work and for what?',
    answer: 'assets/content/eng/answers/108-Console-API.md',
    tags: [
      'JavaScript',
      'Debugging',
      'Console'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Console API - what it is and why it is needed?',
        isChecked: false
      },
    ]
  },
  {
    id: 109,
    name: 'Pure Function and its advantages. Examples of pure and impure functions in JavaScript',
    answer: 'assets/content/eng/answers/109-Pure-Function.md',
    tags: [
      'JavaScript',
      'Functional Programming',
      'Pure Functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Pure Functions - what they are and their advantages',
        isChecked: false
      },
    ]
  },
  {
    id: 110,
    name: 'Higher-Order Function in JavaScript. Examples and usage',
    answer: 'assets/content/eng/answers/110-Higher-Order-Function.md',
    tags: [
      'JavaScript',
      'Functional Programming',
      'Higher-Order Functions'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Higher-Order Functions - what they are and their advantages',
        isChecked: false
      },
    ]
  },
  {
    id: 111,
    name: 'What is the difference between Higher-order operators in RxJS: mergeMap, switchMap, concatMap, and exhaustMap?',
    answer: 'assets/content/eng/answers/111-RxJS-Higher-order-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'mergeMap',
        isChecked: false
      },
      {
        name: 'switchMap',
        isChecked: false
      },
      {
        name: 'concatMap',
        isChecked: false
      },
      {
        name: 'exhaustMap',
        isChecked: false
      }
    ]
  },
  {
    id: 112,
    name: 'What is the difference between combination operators in RxJS: combineLatest, forkJoin, withLatestFrom, concat, merge, zip, and race?',
    answer: 'assets/content/eng/answers/112-RxJS-Combination-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'combineLatest',
        isChecked: false
      },
      {
        name: 'forkJoin',
        isChecked: false
      },
      {
        name: 'withLatestFrom',
        isChecked: false
      },
      {
        name: 'concat',
        isChecked: false
      },
      {
        name: 'merge',
        isChecked: false
      },
      {
        name: 'zip',
        isChecked: false
      },
      {
        name: 'race',
        isChecked: false
      }
    ]
  },
  {
    id: 113,
    name: 'What is the difference between creation operators in RxJS: of, from, fromEvent, interval, and timer?',
    answer: 'assets/content/eng/answers/113-RxJS-Creation-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'of',
        isChecked: false
      },
      {
        name: 'from',
        isChecked: false
      },
      {
        name: 'fromEvent',
        isChecked: false
      },
      {
        name: 'interval',
        isChecked: false
      },
      {
        name: 'timer',
        isChecked: false
      }
    ]
  },
  {
    id: 114,
    name: 'What is the difference between filtering operators in RxJS: filter, take, takeUntil, skip, and distinctUntilChanged?',
    answer: 'assets/content/eng/answers/114-RxJS-Filtering-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'filter',
        isChecked: false
      },
      {
        name: 'take',
        isChecked: false
      },
      {
        name: 'takeUntil',
        isChecked: false
      },
      {
        name: 'skip',
        isChecked: false
      },
      {
        name: 'distinctUntilChanged',
        isChecked: false
      }
    ]
  },
  {
    id: 115,
    name: 'What is the difference between utility operators in RxJS: tap, finalize, delay, timeout, and retry?',
    answer: 'assets/content/eng/answers/115-RxJS-Utility-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'tap',
        isChecked: false

      },
      {
        name: 'finalize',
        isChecked: false
      },
      {
        name: 'delay',
        isChecked: false
      },
      {
        name: 'timeout',
        isChecked: false
      },
      {
        name: 'retry',
        isChecked: false
      }
    ]
  },
  {
    id: 116,
    name: 'What is the difference between transformation operators in RxJS: map, mapTo, pluck, and scan?',
    answer: 'assets/content/eng/answers/116-RxJS-Transformation-Operators.md',
    tags: [
      'Angular',
      'RxJS',
      'Operators'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'map',
        isChecked: false
      },
      {
        name: 'mapTo',
        isChecked: false
      },
      {
        name: 'pluck',
        isChecked: false
      },
      {
        name: 'scan',
        isChecked: false
      }
    ]
  },
  {
    id: 117,
    name: 'Element Injector (or NodeInjector) in Angular. What is it and what is it for? Token priority on a single element',
    answer: 'assets/content/eng/answers/117-Element-Injector-in-Angular-What-is-it-and-what-is-it-for.md',
    tags: [
      'Angular',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Element Injector (or NodeInjector) - what is it',
        isChecked: false
      },
      {
        name: 'How Element Injector works in Angular',
        isChecked: false
      },
      {
        name: 'Why Element Injector is needed and what problems it solves',
        isChecked: false
      }
    ]
  },
  {
    id: 118,
    name: 'DI Hierarchy and Shadowing Pattern',
    answer: 'assets/content/eng/answers/118-DI-Hierarchy-and-Shadowing-Pattern.md',
    tags: [
      'Angular',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'DI Hierarchy in Angular',
        isChecked: false
      },
      {
        name: 'Shadowing Pattern',
        isChecked: false
      }
    ]
  },
  {
    id: 119,
    name: 'Providers in Angular. Types of Providers and Their Usage',
    answer: 'assets/content/eng/answers/119-Providers-in-Angular-Types-of-Providers-and-Their-Usage.md',
    tags: [
      'Angular',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Providers in Angular - what is it',
        isChecked: false
      },
      {
        name: 'Types of Providers in Angular (Class Provider, Factory Provider, Value Provider, Existing Provider)',
        isChecked: false
      },
      {
        name: 'When to use each type of provider',
        isChecked: false
      }
    ]
  },
  {
    id: 120,
    name: 'Services in Angular. What are they and what are they for? Lifecycle of services',
    answer: 'assets/content/eng/answers/120-Services-in-Angular-What-are-they-and-what-are-they-for.md',
    tags: [
      'Angular',
      'Services',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Services in Angular - what is it',
        isChecked: false
      },
      {
        name: 'Why services are needed in Angular',
        isChecked: false
      },
      {
        name: 'Lifecycle of services in Angular',
        isChecked: false
      }
    ]
  },
  {
    id: 121,
    name: 'Singleton Pattern in Angular. Are Angular services singletons by default?',
    answer: 'assets/content/eng/answers/121-Singleton-Pattern-in-Angular-Are-Angular-Services-Singletons-by-Default.md',
    tags: [
      'Angular',
      'Singleton',
      'Dependency Injection'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Singleton Pattern - what is it',
        isChecked: false
      },
      {
        name: 'Are Angular services singletons by default?',
        isChecked: false
      }
    ]
  },
  {
    id: 122,
    name: 'Types of Directives: Structural vs Attribute. What is the difference between structural and attribute directives in Angular? Give examples.',
    answer: 'assets/content/eng/answers/122-Directives-in-Angular-Structural-vs-Attribute.md',
    tags: [
      'Angular',
      'Directives'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Structural directives in Angular',
        isChecked: false
      },
      {
        name: 'Attribute directives in Angular',
        isChecked: false
      }
    ]
  },
  {
    id: 123,
    name: 'Pipes: Pure vs Impure. What are pure and impure pipes? Why using functions in templates (e.g., {{ getLabel(item) }}) is a bad practice, and how pipes help solve this?',
    answer: 'assets/content/eng/answers/123-Pipes-Pure-vs-Impure.md',
    tags: [
      'Angular',
      'Pipes'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'Pure pipes in Angular',
        isChecked: false
      },
      {
        name: 'Impure pipes in Angular',
        isChecked: false
      },
    ]
  },
  {
    id: 124,
    name: 'ViewChild / ContentChild. What is the difference between @ViewChild and @ContentChild? When to use each decorator?',
    answer: 'assets/content/eng/answers/124-ViewChild-ContentChild.md',
    tags: [
      'Angular',
      'ViewChild',
      'ContentChild'
    ],
    category: 'Angular',
    structure: [
      {
        name: 'ViewChild in Angular',
        isChecked: false
      },
      {
        name: 'ContentChild in Angular',
        isChecked: false
      },
      {
        name: 'When to use @ViewChild and when to use @ContentChild',
        isChecked: false
      }
    ]
  },
  {
    id: 125,
    name: 'Proxy and Reflect. What is the difference between them? How do they work and why have modern frameworks (Vue 3, MobX) switched to them?',
    answer: 'assets/content/eng/answers/125-Proxy-Reflect.md',
    tags: [
      'JavaScript',
      'Proxy',
      'Reflect'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'Proxy in JavaScript',
        isChecked: false
      },
      {
        name: 'Reflect in JavaScript',
        isChecked: false
      },
      {
        name: 'When to use Proxy and when to use Reflect',
        isChecked: false
      },
      {
        name: 'Usage in modern frameworks',
        isChecked: false
      }
    ]
  },
  {
    id: 126,
    name: 'Memory Leaks. What are common causes of memory leaks in JS and how to avoid them?',
    answer: 'assets/content/eng/answers/126-Memory-Leaks.md',
    tags: [
      'JavaScript',
      'Memory Leaks'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'What are memory leaks in the context of web applications and why it is important',
        isChecked: false
      },
      {
        name: 'Common causes of memory leaks in JavaScript',
        isChecked: false
      },
      {
        name: 'How to avoid memory leaks in JavaScript',
        isChecked: false
      },
      {
        name: 'Tools for detecting and fixing memory leaks',
        isChecked: false
      }
    ]
  },
  {
    id: 127,
    name: 'Web Workers / Service Workers. JS is single-threaded, but how can we perform heavy computations without blocking the UI?',
    answer: 'assets/content/eng/answers/127-Web-Workers-Service-Workers.md',
    tags: [
      'JavaScript',
      'Web Workers',
      'Service Workers'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'What are Web Workers and Service Workers in the context of web applications',
        isChecked: false
      },
      {
        name: 'When to use Web Workers and when to use Service Workers',
        isChecked: false
      },
      {
        name: 'Examples of using Web Workers and Service Workers',
        isChecked: false
      },
      {
        name: 'Tools for working with Web Workers and Service Workers',
        isChecked: false
      }
    ]
  },
  {
    id: 128,
    name: 'What are the key differences between Composition API and Options API, and what fundamental problems does it solve?',
    answer: 'assets/content/eng/answers/128-Composition-API-Options-API.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Composition API',
      'Options API'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is Composition API and Options API in Vue.js',
        isChecked: false
      },
      {
        name: 'Key differences between Composition API and Options API',
        isChecked: false
      },
      {
        name: 'Fundamental problems solved by Composition API',
        isChecked: false
      }
    ]
  },
  {
    id: 129,
    name: 'What is setup()? Syntactic sugar <script setup>+ Macros: defineProps and defineEmits',
    answer: 'assets/content/eng/answers/129-Script-Setup.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Script Setup'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is setup() and why it is needed in Vue.js',
        isChecked: false
      },
      {
        name: 'What is <script setup> in Vue.js',
        isChecked: false
      },
      {
        name: 'Key differences between <script setup> and the standard setup() function',
        isChecked: false
      },
      {
        name: 'Benefits of using <script setup>',
        isChecked: false
      }
    ]
  },
  {
    id: 130,
    name: 'Two brothers of reactivity: ref vs reactive',
    answer: 'assets/content/eng/answers/130-Ref-vs-Reactive.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is ref and reactive in Vue.js',
        isChecked: false
      },
      {
        name: 'Key differences between ref and reactive',
        isChecked: false
      }
    ]
  },
  {
    id: 131,
    name: 'toValue vs toRaw. What is the difference between these functions and when to use each?',
    answer: 'assets/content/eng/answers/131-ToValue-vs-ToRaw.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is toValue and toRaw in Vue.js',
        isChecked: false
      },
      {
        name: 'Key differences between toValue and toRaw',
        isChecked: false
      }
    ]
  },
  {
    id: 132,
    name: 'Automatic tracking: watch vs watchEffect',
    answer: 'assets/content/eng/answers/132-Watch-vs-WatchEffect.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is watch and watchEffect in Vue.js',
        isChecked: false
      },
      {
        name: 'Key differences between watch and watchEffect',
        isChecked: false
      }
    ]
  },
  {
    id: 133,
    name: 'Computed properties: computed',
    answer: 'assets/content/eng/answers/133-Computed.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is computed in Vue.js',
        isChecked: false
      },
      {
        name: 'When to use computed and when it is an anti-pattern',
        isChecked: false
      }
    ]
  },
  {
    id: 134,
    name: 'Eliminating "Prop Drilling": provide / inject',
    answer: 'assets/content/eng/answers/134-Provide-Inject.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is provide / inject in Vue.js',
        isChecked: false
      },
      {
        name: 'When to use provide / inject and when it is an anti-pattern',
        isChecked: false
      }
    ]
  },
  {
    id: 135,
    name: 'Slots: Key differences between default slots, named slots, and dynamic slots',
    answer: 'assets/content/eng/answers/135-Slots.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Slots'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What are slots in Vue.js',
        isChecked: false
      },
      {
        name: 'Key differences between default slots, named slots, and dynamic slots',
        isChecked: false
      }
    ]
  },
  {
    id: 136,
    name: 'Teleport: What is Teleport in Vue.js and why is it needed? What are the benefits of using Teleport?',
    answer: 'assets/content/eng/answers/136-Teleport.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Teleport'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is Teleport in Vue.js',
        isChecked: false
      },
      {
        name: 'When to use Teleport and when it is an anti-pattern',
        isChecked: false
      }
    ]
  },
  {
    id: 137,
    name: 'How has the reactivity system changed in Vue 3? What are the differences under the hood?',
    answer: 'assets/content/eng/answers/137-Reactivity.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Reactivity'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'How does reactivity work in Vue 3',
        isChecked: false
      },
      {
        name: 'What are the differences under the hood between reactivity in Vue 2 and Vue 3',
        isChecked: false
      },
      {
        name: 'Why is rendering significantly faster in Vue 3? Compiler optimizations (Patch Flags, Static Hoisting)',
        isChecked: false
      }
    ]
  },
  {
    id: 138,
    name: 'What are Fragments in Vue 3, and how do they affect template structure?',
    answer: 'assets/content/eng/answers/138-Fragments.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Fragments'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What are Fragments in Vue 3',
        isChecked: false
      },
      {
        name: 'How do Fragments affect template structure',
        isChecked: false
      }
    ]
  },
  {
    id: 139,
    name: 'Custom Directives. How has the creation of custom directives changed?',
    answer: 'assets/content/eng/answers/139-CustomDirectives.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Custom Directives'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What are custom directives (Custom Directives) in Vue 3',
        isChecked: false
      },
      {
        name: 'How do custom directives affect template structure',
        isChecked: false
      }
    ]
  },
  {
    id: 140,
    name: 'Pinia. Why did the ecosystem switch to Pinia? What are the advantages compared to Vuex and others?',
    answer: 'assets/content/eng/answers/140-Pinia.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Pinia'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'Why did the ecosystem switch to Pinia',
        isChecked: false
      },
      {
        name: 'What are the advantages of Pinia compared to Vuex and others',
        isChecked: false
      }
    ]
  },
  {
    id: 141,
    name: 'Lifecycle Hooks in Vue 3',
    answer: 'assets/content/eng/answers/141-LifecycleHooks.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Lifecycle Hooks'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'How have lifecycle hooks changed in Vue 3',
        isChecked: false
      },
      {
        name: 'Where did created and beforeCreate go',
        isChecked: false
      }
    ]
  },
  {
    id: 142,
    name: 'What is a Composable? What are they used for?',
    answer: 'assets/content/eng/answers/142-Composable.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Composable'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is a Composable in Vue.js',
        isChecked: false
      },
      {
        name: 'How does a Composable differ from regular service methods',
        isChecked: false
      },
      {
        name: 'What are the advantages of using Composables',
        isChecked: false
      },
      {
        name: 'Key differences between Composables and mixins or HOCs',
        isChecked: false
      },
    ]
  },
  {
    id: 143,
    name: 'Built-in <Suspense> component. How does it work and what problems does it solve?',
    answer: 'assets/content/eng/answers/143-Suspense.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Suspense'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'How does the built-in <Suspense> component work',
        isChecked: false
      },
      {
        name: 'What problems does <Suspense> solve',
        isChecked: false
      }
    ]
  },
  {
    id: 144,
    name: 'When and why should you use shallowRef and shallowReactive instead of the regular ones?',
    answer: 'assets/content/eng/answers/144-ShallowRef.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'ShallowRef'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'When and why should you use shallowRef and shallowReactive',
        isChecked: false
      },
      {
        name: 'What are the advantages of using shallowRef and shallowReactive',
        isChecked: false
      }
    ]
  },
  {
    id: 145,
    name: 'What is defineModel and how does it simplify two-way data binding?',
    answer: 'assets/content/eng/answers/145-DefineModel.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'DefineModel'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is defineModel and how does it simplify two-way data binding',
        isChecked: false
      },
      {
        name: 'What are the advantages of using defineModel',
        isChecked: false
      }
    ]
  },
  {
    id: 146,
    name: 'What is the difference between toRef and toRefs, and when should they be used?',
    answer: 'assets/content/eng/answers/146-ToRefToRefs.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'ToRef',
      'ToRefs'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is toRef and toRefs',
        isChecked: false
      },
      {
        name: 'What are the advantages of using toRef and toRefs',
        isChecked: false
      }
    ]
  },
  {
    id: 147,
    name: 'What is Vue Router? What important features does the router provide? What navigation hooks are available in vue-router?',
    answer: 'assets/content/eng/answers/147-VueRouter.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Vue Router'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'What is Vue Router',
        isChecked: false
      }
    ]
  },
  {
    id: 147,
    name: 'How is data passed between components in Vue?',
    answer: 'assets/content/eng/answers/147-DataTransfer.md',
    tags: [
      'Vue.js',
      'Vue 3',
      'Data Transfer'
    ],
    category: 'Vue.js',
    structure: [
      {
        name: 'How is data passed between components in Vue',
        isChecked: false
      }
    ]
  },
  {
    id: 148,
    name: 'HTTP/HTTPS: methods, headers, caching, and security',
    answer: 'assets/content/eng/answers/148-HTTPHTTPS.md',
    tags: [
      'Web Security',
      'HTTP',
      'HTTPS',
      'cross-site',
      'Same-Origin Policy'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'HTTP/HTTPS: methods, headers, caching, and security',
        isChecked: false
      }
    ]
  },
  {
    id: 149,
    name: 'Same-Origin Policy and CORS. How do browsers ensure security when exchanging data between different origins?',
    answer: 'assets/content/eng/answers/149-SameOriginPolicyCORS.md',
    tags: [
      'Web Security',
      'CORS',
      'cross-site',
      'Same-Origin Policy'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'Same-Origin Policy and CORS',
        isChecked: false
      }
    ]
  },
  {
    id: 150,
    name: 'Cookies. What are cookies and what are they used for?',
    answer: 'assets/content/eng/answers/150-CookiesSecurity.md',
    tags: [
      'Web Security',
      'cookies',
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'What are cookies and what are they used for?',
        isChecked: false
      },
      {
        name: 'Which cookie attributes help ensure security (Secure, HttpOnly, SameSite)?',
        isChecked: false
      }
    ]
  },
  {
    id: 151,
    name: 'How do browsers ensure the security of cookies when exchanging data between different origins?',
    answer: 'assets/content/eng/answers/151-CookiesSecurity.md',
    tags: [
      'Web Security',
      'cookies',
      'cross-site',
      'Same-Origin Policy'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'How do browsers ensure the security of cookies when exchanging data between different origins?',
        isChecked: false
      },
      {
        name: 'Which cookie attributes help ensure security (Secure, HttpOnly, SameSite)?',
        isChecked: false
      }
    ]
  },
  {
    id: 152,
    name: 'XSS (Cross-Site Scripting). What are XSS attacks and how to protect against them?',
    answer: 'assets/content/eng/answers/152-XSS.md',
    tags: [
      'Web Security',
      'XSS',
      'cross-site'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'What are XSS attacks and how do they work',
        isChecked: false
      },
      {
        name: 'How to protect against XSS attacks',
        isChecked: false
      }
    ]
  },
  {
    id: 153,
    name: 'CSRF (Cross-Site Request Forgery). What are CSRF attacks and how to protect against them?',
    answer: 'assets/content/eng/answers/153-CSRF.md',
    tags: [
      'Web Security',
      'CSRF',
      'cross-site'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'What are CSRF attacks and how do they work',
        isChecked: false
      },
      {
        name: 'How to protect against CSRF attacks',
        isChecked: false
      }
    ]
  },
  {
    id: 154,
    name: 'SQL Injection. What are SQL injections and how to protect against them?',
    answer: 'assets/content/eng/answers/154-SQL-Injection.md',
    tags: [
      'Web Security',
      'SQL Injection'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'What are SQL injections and how do they work?',
        isChecked: false
      }
    ]
  },
  {
    id: 155,
    name: 'SSL/TLS. What are SSL/TLS and how do they ensure data security during transmission?',
    answer: 'assets/content/eng/answers/155-SSLTLS.md',
    tags: [
      'Web Security',
      'SSL',
      'TLS'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'What are SSL/TLS and how do they ensure data security during transmission?',
        isChecked: false
      }
    ]
  },
  {
    id: 156,
    name: 'OAuth 2.0. What is OAuth 2.0 and how does it ensure secure authorization in web applications?',
    answer: 'assets/content/eng/answers/156-OAuth2.md',
    tags: [
      'Web Security',
      'OAuth 2.0',
      'authorization'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'What is OAuth 2.0',
        isChecked: false
      }
    ]
  },
  {
    id: 157,
    name: 'JWT (JSON Web Tokens). What is JWT and how is it used for authentication and information exchange between client and server?',
    answer: 'assets/content/eng/answers/157-JWT.md',
    tags: [
      'Web Security',
      'JWT',
      'authentication'
    ],
    category: 'Web Security',
    structure: [
      {
        name: 'What is JWT and how is it used for authentication and information exchange between client and server?',
        isChecked: false
      }
    ]
  },
  {
    id: 158,
    name: 'Why is working with the DOM considered very resource-intensive?',
    answer: 'assets/content/eng/answers/158-Why-working-with-DOM-is-resource-intensive.md',
    tags: [
      'DOM',
      'performance',
      'web development'
    ],
    category: 'Markup',
    structure: [
      {
        name: 'DOM - Web API, not part of JavaScript',
        isChecked: false
      },
      {
        name: 'DOM - a complex hierarchical data structure',
        isChecked: false
      },
      {
        name: 'Reflow and Repaint',
        isChecked: false
      }
    ]
  },
  {
    id: 159,
    name: 'Ecmascript language types VS Ecmascript specification types',
    answer: 'assets/content/eng/answers/159-EcmascriptTypes.md',
    tags: [
      'JavaScript',
      'Ecmascript',
      'types'
    ],
    category: 'JavaScript',
    structure: [
      {
        name: 'What are Ecmascript language types?',
        isChecked: false
      },
      {
        name: 'What are Ecmascript specification types?',
        isChecked: false
      },
      {
        name: 'What is the difference between language types and specification types in Ecmascript?',
        isChecked: false
      }
    ]
  }
] as Question[];
