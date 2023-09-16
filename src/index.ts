type Primitive = string | number | boolean | null | undefined;
type Value = Primitive | Value[] | { [key in PropertyKey]: Value };

/**
 *
 * @param val source value
 * @returns cloned value
 */
const ixclone = <T extends Value>(value: T): T => {
  let k: any, out: any, tmp: any;

  if (Array.isArray(value)) {
    out = Array((k = value.length));
    while (k--) out[k] = (tmp = value[k]) && typeof tmp === "object" ? ixclone(tmp) : tmp;
    return out;
  }

  if (Object.prototype.toString.call(value) === "[object Object]") {
    out = {};
    for (k in value) {
      if (k === "__proto__") {
        Object.defineProperty(out, k, {
          value: ixclone((value as any)[k]),
          configurable: true,
          enumerable: true,
          writable: true,
        });
      } else {
        out[k] = (tmp = (value as any)[k]) && typeof tmp === "object" ? ixclone(tmp) : tmp;
      }
    }
    return out;
  }

  return value;
};

export type { Value };
export default ixclone;
