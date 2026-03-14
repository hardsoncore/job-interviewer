<h4>Why are they needed?</h4>

<p><span class="accent">Code linters and formatters</span> are tools that help maintain a consistent coding style and prevent common mistakes. They analyze your code for issues and help keep it in line with specified rules.</p>

<p>Setting up unified standards and automating checks is what separates a chaotic set of scripts from a mature, maintainable product. When a team is working on a codebase, automation tools take over the routine, allowing developers to discuss architecture and business logic during code reviews, rather than missing semicolons.</p>

<h4>1. Code Formatting: Prettier</h4>
<p><span class="accent">Prettier</span> is an opinionated code formatter. It takes your code, ignores the original formatting, and rewrites it from scratch according to predefined rules (line length, quotes, indentation).</p>

<p><strong>Problem it solves:</strong> It completely eliminates code style disputes within the team. The code always looks the same, regardless of who wrote it. This also minimizes pointless merge conflicts caused by different amounts of spacing.</p>

<p><strong>Feature:</strong> Prettier formats the code but does not check its logic.</p>

<h4>2. Code Linting: ESLint and Stylelint</h4>
<p><span class="accent">ESLint</span> is a tool for static code analysis. It checks your code for potential errors, bad practices, and style violations. Unlike Prettier, ESLint can be configured to check code logic, variable usage, naming conventions, and much more.</p>

<p><strong>Problem it solves:</strong> It helps detect errors and potential issues in the code before it is executed. This can include unused variables, incorrect function usage, or even potential security vulnerabilities.</p>
<p><strong>Feature:</strong> ESLint can be configured to enforce specific rules that may be specific to your project or team.</p>

<p><span class="accent">Stylelint</span> is the equivalent of ESLint, but for CSS and other styles. It helps maintain a consistent writing style for CSS, SCSS, and other preprocessors.</p>

<h4>3. Basic Editor Settings: .editorconfig</h4>

<p><span class="accent">.editorconfig</span> is a simple configuration file that sits in the root of the project and is understood by most modern IDEs (VS Code, WebStorm, etc.).</p>

<p><strong>Problem it solves:</strong> It synchronizes basic text editor settings across all team members before linters even come into play.</p>

<p><strong>What it controls:</strong> Indentation size (tab vs space), line ending type (LF or CRLF — critically important if the team has Windows, macOS, and Linux users), and a mandatory empty line at the end of the file.</p>

<h4>4. Commit Control: Husky + lint-staged</h4>
<p>Setting up linters is not enough — you need to enforce their use by the team. If someone forgets to enable auto-formatting in their editor, dirty code will make its way into the repository.</p>

<p><strong>Husky:</strong> A tool for easily managing Git Hooks. It allows you to run scripts on specific git actions (for example, before a commit — pre-commit, or before a push — pre-push).</p>

<p><strong>lint-staged:</strong> A utility that runs linters only on files that have been added to the index (staged) for the current commit.</p>

<p><strong>How it works together:</strong> When attempting to make a git commit, Husky intercepts the command and runs lint-staged. This runs the modified files through Prettier and ESLint. If there are errors, the commit is aborted.</p>

<h4>5. Commit Message Standards: Commitlint</h4>

<p>Consistent code is good, but a readable Git history is even better.</p>

<p><strong>Problem it solves:</strong> It prohibits commits with messages like "fix", "wip", or "asdfgh".</p>

<p><strong>How it works:</strong> It enforces a convention (most commonly Conventional Commits). A commit should look like <code>feat(auth): add login modal</code> or <code>fix(api): resolve timeout issue</code>. This makes it possible to automatically generate a <code>CHANGELOG.md</code> later and easily navigate the release history.</p>
