<p align="center">
  <a title="license" href="https://github.com/flamrdevs/ixclone/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/core/badge?t=dark&v=MIT">
      <img alt="github" src="https://flamrdevs.cyclic.app/core/badge?t=light&v=MIT" hspace="1">
    </picture>
  </a>
  <a title="gzip" href="https://bundlejs.com/?q=ixclone">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://flamrdevs.cyclic.app/bundlejs/size?t=dark&n=ixclone">
      <img alt="github" src="https://flamrdevs.cyclic.app/bundlejs/size?t=light&n=ixclone" hspace="1">
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
