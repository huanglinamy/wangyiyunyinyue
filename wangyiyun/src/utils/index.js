// 格式化时间
export function formatTime(time){
  let min = parseInt(time%3600/60)+'',
      sec = parseInt(time%60)+'';
  return min.padStart(2, '0')+':'+sec.padStart(2, '0');
}

// 时间转化为秒数
export function toSec(time){
  let arr = time.split(':');
  return (arr[0]*60+arr[1]*1).toFixed(2);
}

// 数组打乱
export function randomArr(arr){
  let newArr = [...arr];
  newArr.sort((a,b)=>Math.random()>.5?-1: 1);
  console.log('arr...', arr, 'newArrr...', newArr);
  return newArr;
}