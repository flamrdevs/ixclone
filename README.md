<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixclone/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l/ixclone?t=dark">
      <img alt="license" src="https://none.deno.dev/npm/l/ixclone?t=light" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixclone">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v/ixclone?t=dark">
      <img alt="version" src="https://none.deno.dev/npm/v/ixclone?t=light" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixclone">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/bundlejs/mz/ixclone?t=dark">
      <img alt="size" src="https://none.deno.dev/bundlejs/mz/ixclone?t=light" hspace="1">
    </picture>
  </a>
</p>

<h1 id="ixclone">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=rocket">
    <img alt="lucide rocket" src="https://none.deno.dev/ui/icon/lucide?t=light&i=rocket" hspace="1">
  </picture>
  <span>
    ixclone
  </span>
</h1>

simple clone

<h2 id="usage">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=code">
    <img alt="lucide code" src="https://none.deno.dev/ui/icon/lucide?t=light&i=code" hspace="1">
  </picture>
  <span>
    usage
  </span>
</h2>

```ts
import ixclone from "ixclone";

const A = {
  foo: "bar",
};

const B = ixclone(A);

A.foo = "baz";

console.log(A.foo !== B.foo);
```

<h2 id="license">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=scale">
    <img alt="lucide scale" src="https://none.deno.dev/ui/icon/lucide?t=light&i=scale" hspace="1">
  </picture>
  <span>
    license
  </span>
</h2>

MIT
