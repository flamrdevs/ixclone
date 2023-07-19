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
