//window.addEventListener('keydown', function check(form))
//function enterkey(){
  //  if(window.event.keycode==13){
   //     alert("엔터키누름")
   // }
//}

//const inputType1 = document.querySelector("#id")

//const handleTyping = function(){
  //  console.log("타이핑 중")
//}

//inputType1.onkeydown =  handleTyping
//const inputTest = document.getElementById("pw")
//const hand = function(evnet){
  //  console.log(event)
//}
//inputTest.addEventListener('keydown', hand)


window.addEventListener("keypress", plz, false);
function plz(key){
   if (key.keyCode == "13"){
       alert("아직 엔터키 작동 안됨")
   }
}



function check(form)
{
    if(form.userid.value=="김동하"&&form.userpassword.value=="2885"){
        alert("방문을 환영합니다!")
        window.open('친친.html')
    }
    else if(form.userid.value="현동욱"&&form.userpassword.value=="1152"){
      alert("방문을 환영합니다!")
        window.open("친친.html")
    }
    else if(form.userid.value="박유찬"&&form.userpassword.value=="0175"){
      alert("방문을 환영합니다!")
      window.open("친친.html")
  }
  else if(form.userid.value="전예진"&&form.userpassword.value=="1621"){
    alert("방문을 환영합니다!")
    window.open("친친.html")
}
    else{
        alert("이름이나 전화번호가 잘못됨")
    }
}