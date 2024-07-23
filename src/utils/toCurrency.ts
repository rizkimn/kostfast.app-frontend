export function toCurrency(x: number) : string
{
  let result = x.toString();
  if (x >= 1000000000) {
    result = parseFloat((x / 1000000000).toFixed(3)).toString().replace(/\.0$/, '') + "M";
  } else if (x >= 1000000) {
    result = parseFloat((x / 1000000).toFixed(3)).toString().replace(/\.0$/, '') + "jt";
  } else if (x > 1000) {
    result = parseFloat((x / 1000).toFixed(3)).toString().replace(/\.0$/, '') + "rb";
  }

  result = result.replace('.', ',');

  const currency = result.slice(-2);

  if (result.split(",")[1] === "000"+currency) {
    result = result.split(",")[0]+currency;
  }

  

  return "Rp" + result;
}