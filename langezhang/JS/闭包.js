var getNowI = blockFunc();
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(getNowI());
  }, 1000);
}

function blockFunc() {
  var i = 0;
  function getNowI() {
    return i++;
  }
  return getNowI;
}
