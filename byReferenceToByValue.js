function test(){
  var arr, x;
  arr = [];
  for (var i = 0; i < 10; i++){
    (function(value){
      x = function(){
        console.log(value);
      };
      arr.push(x);
    })(i);
    arr[i]();
  }
}
test();