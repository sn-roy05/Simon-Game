var cnt = 1
var string = []
var pressed = []
var obj = {
  "btn1": 1,
  "btn2": 2,
  "btn3": 3,
  "btn4": 4,
};

document.addEventListener("keypress", function(){
  var cnt = 1;
  document.querySelector('.head').innerHTML = "Level " + cnt;
  animation();
});


document.querySelector('.btn1').addEventListener("click", function(){
  var val = this.classList[0];
  pressed.push(obj[val]);
  if (string.length == pressed.length) {
    validate();
  }

});
document.querySelector('.btn2').addEventListener("click", function(){
  var val = this.classList[0];
  pressed.push(obj[val]);
  if (string.length == pressed.length) {
    validate();
  }

});
document.querySelector('.btn3').addEventListener("click", function(){
  var val = this.classList[0];
  pressed.push(obj[val]);
  if (string.length == pressed.length) {
    validate();
  }

});
document.querySelector('.btn4').addEventListener("click", function(){
  var val = this.classList[0];
  pressed.push(obj[val]);
  if (string.length == pressed.length) {
    validate();
  }

});



function animation(){
  var random_num = Math.floor(Math.random() * 4 + 1);
  string.push(random_num);
  var code = '.btn' + random_num  ;
  var btn_clicked = document.querySelector(code).classList;
  btn_clicked.add("clicked");
  setTimeout(function() {
    btn_clicked.remove("clicked");
  }, 200);
  pressed = [];
}

function validate(){
  var check = true;
  for(let i = 0; i < pressed.length; i++){
    if (pressed[i] != string[i]){
      check = false;
    }
  }
  if (check){
    document.querySelector('.head').innerHTML = "Level " + cnt;
    cnt ++;
    animation();
  }
  else{
    console.log(string);
    console.log(pressed);
    document.querySelector('.head').innerHTML = "Try Again";
  }
}
