<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixclone/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="license" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/ixclone">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/npm/version?t=dark&n=ixclone">
      <img alt="version" src="https://flamrdevs.cyclic.app/npm/version?t=light&n=ixclone" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=ixclone">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixclone">
      <img alt="size" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixclone" hspace="1">
    </picture>
  </a>
</p>

# ixclone

simple clone

## Usage

```ts
import ixclone from "ixclone";

const A = {
  foo: "bar",
};

const B = ixclone(A);

A.foo = "baz";

console.log(A.foo !== B.foo);
```

## License

MIT
