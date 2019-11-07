export function getBool(val: any): boolean {
  switch (val) {
    case "false":
    case "0":
    case 0:
      return false;
    case "true":
    case "1":
    case 1:
      return true;
  }
  throw Error("Illegal Boolean value, should be true/false");
}
export function getFloat(val: any) {
  const parsed = Number.parseFloat(val);
  if (Number.isNaN(parsed)) {
    throw Error("Illegal Float value");
  }
  return parsed;
}
export function getInteger(val: any) {
  const parsed = parseInt(val, 10);
  if (Number.isNaN(parsed)) {
    throw Error("Illegal Integer value");
  }
  return parsed;
}
