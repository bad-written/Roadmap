type TypeOf = (
  param: Record<string, unknown>
) =>
  | `boolean`
  | `number`
  | `string`
  | `function`
  | `array`
  | `date`
  | `regExp`
  | `undefined`
  | `null`
  | `object`
  | `formData`;
const typeOf: TypeOf = param => {
  const Map = {
    "[object Boolean]": `boolean`,
    "[object Number]": `number`,
    "[object String]": `string`,
    "[object Function]": `function`,
    "[object Array]": `array`,
    "[object Date]": `date`,
    "[object RegExp]": `regExp`,
    "[object Undefined]": `undefined`,
    "[object Null]": `null`,
    "[object Object]": `object`,
    "[object FormData]": `formData`
  };
  return Map[Object.prototype.toString.call(param)];
};

export default typeOf;
