type TypeOf = (
  param: any
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
const typeOf: TypeOf = (param: any) => {
  const toString = Object.prototype.toString;
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
  return Map[toString.call(param)];
};

export default typeOf;
