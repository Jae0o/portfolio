export function NumberCount(num) {
  if (num < 9999) {
    return num
  }
  else if (num < 999999) {
    const value = (num / 10000).toFixed(1);
    return value + "만";
  }
  else if (num < 99999999) {
    return (num / 10000).toFixed() + "만"
  }
  else if (num < 999999999999) {
    return (num / 100000000).toFixed() + '억'
  }
  else if (num < 999999999999999) {
    return (num / 1000000000000).toFixed() + '조'
  }

}
