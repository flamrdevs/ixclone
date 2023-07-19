const ixclone = <T>(val: T): T => {
  let k: any, out: any, tmp: any;

  if (Array.isArray(val)) {
    out = Array((k = val.length));
    while (k--) out[k] = (tmp = val[k]) && typeof tmp === "object" ? ixclone(tmp) : tmp;
    return out;
  }

  if (Object.prototype.toString.call(val) === "[object Object]") {
    out = {};
    for (k in val) {
      if (k === "__proto__") {
        Object.defineProperty(out, k, {
          value: ixclone((val as any)[k]),
          configurable: true,
          enumerable: true,
          writable: true,
        });
      } else {
        out[k] = (tmp = (val as any)[k]) && typeof tmp === "object" ? ixclone(tmp) : tmp;
      }
    }
    return out;
  }

  return val;
};

export default ixclone;
