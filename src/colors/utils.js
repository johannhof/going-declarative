export function randomColor(){
  return Math.floor(Math.random() * 255);
}

export function randomColors(){
  return {r: randomColor(), g: randomColor(), b: randomColor()};
}

export function combineColors(colors){
  let ret = colors.reduce(function(acc, color){
    acc.r += color.r;
    acc.g += color.g;
    acc.b += color.b;
    return acc;
  }, {r: 0, g: 0, b: 0});
  ret.r = Math.round(ret.r / colors.length);
  ret.g = Math.round(ret.g / colors.length);
  ret.b = Math.round(ret.b / colors.length);
  return ret;
}
