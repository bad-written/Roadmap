// 格式化文件大小
type CalcFileSize = (value: number | string | null) => string;
const calcFileSize: CalcFileSize = value => {
  if (null === value || value === ``) {
    return `0 Bytes`;
  }
  const unitArr = [`Bytes`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`];
  let index = 0;
  let srcsize = 0;
  if (typeof value === `string`) {
    srcsize = parseFloat(value);
  }
  index = Math.floor(Math.log(srcsize) / Math.log(1024));
  const size: string = (srcsize / Math.pow(1024, index)).toFixed(2);
  return size + unitArr[index];
};

export default calcFileSize;
