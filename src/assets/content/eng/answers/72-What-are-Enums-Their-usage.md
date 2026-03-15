<h3>What are Enums?</h3>

<p><span class="accent">Enum</span> (short for enumeration) is a data structure that allows you to define a strict set of named constants that are logically related to each other.</p>

<p>Roughly speaking, it is a dictionary of allowed states or types for a specific entity. Instead of using "magic numbers" (<code>1</code>, <code>2</code>, <code>3</code>) or regular strings (<code>"active"</code>, <code>"deleted"</code>) in your code, you create a single source of truth.</p>

<h3>Why use them (and what pain do they solve)?</h3>

<h4>1. Self-documenting code</h4>
<p>The construct <code>if (user.role === UserRole.Admin)</code> reads like plain English text. This is exponentially clearer than <code>if (user.role === 1)</code>.</p>

<h4>2. Protection against silly mistakes</h4>
<p>If you make a typo (for example, typing <code>UserRole.Adimn</code>), the compiler will notify you before the code even runs. With regular strings, the error would only appear at runtime.</p>

<h4>3. Smart autocomplete</h4>
<p>Your IDE will instantly suggest all available options as soon as you type the enumeration name and add a dot. You don't need to keep all the backend statuses in your head.</p>

<h4>4. Centralized refactoring</h4>
<p>If the backend decides to change a status value from <code>in_progress</code> to <code>processing</code>, you change this value in exactly one line — inside the Enum itself.</p>

<h3>Types of Enums</h3>
<p>There are several types of Enums in TypeScript:</p>

<p><strong>Numeric Enums</strong> — by default, each member gets a numeric value starting from 0. For example:</p>
<code class="code">
  enum UserRole {
    Admin, // 0
    User,  // 1
    Guest  // 2
  }

  // You can explicitly set values if you want:
  enum ResponseStatus {
    Pending = 0,
    Success = 200,
    Failed = 404
  }
</code>

<p><strong>String Enums</strong> — each member is explicitly initialized with a string. This is a more readable and safe option:</p>
<code class="code">
  enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
  }
</code>

<p><strong>Heterogeneous Enums</strong> — mixed, where members can be both strings and numbers. They are generally not recommended for use, as they can be confusing.</p>

<p class="info info--orange">Considered an anti-pattern, as they can lead to unobvious bugs.</p>

<code class="code">
  enum MixedEnum {
    No = 0,
    Yes = "YES"
  }
</code>

<p><strong>Const Enums</strong> — optimized for performance, they are completely removed during compilation, and their values are inlined directly into the code. This can be useful for frequently used constants, but should be used with caution, as they do not support some features of regular Enums (like iteration). There are also debugging issues since there won't be an explicit Enum object in the compiled code. Recently, their usage has become less popular.</p>

<code class="code">
  const enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
  }
</code>

<h3>What's "under the hood" and what to do in plain JS?</h3>
<p>It's important to remember that built-in Enums do not exist in native JavaScript.</p>

<h4>What happens during compilation?</h4>

<p>When TypeScript compiles the code, it turns your Enums into real JavaScript objects (creating so-called IIFE functions).</p>
<p>For example, the <code>UserRole</code> Enum will be compiled into an object that can be used to access its values. This allows you to retain the benefits of Enums even in an environment where they don't exist natively.</p>

<code class="code">
  // TypeScript Enum
  enum Role {
    Admin = 0,
    User = 1
  }

  // Compiled JavaScript
  "use strict";
  var Role;
  (function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
  })(Role || (Role = {}));
</code>

<h4>How to handle it in plain JS?</h4>

<p>If you are working on a project without TypeScript (for example, in classic Vue 2 with plain JS), the Enum pattern is easily emulated using an immutable object:</p>

<code class="code">
  const TaskStatus = Object.freeze({
    TODO: 'TODO',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE'
  });

  // Usage is exactly the same: TaskStatus.DONE
</code>
