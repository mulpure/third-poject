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

//window.addEventListener("keypress", plz, false);

/* function plz(key){
   if (key.keyCode == "13"){
      alert("아직 엔터키 작동 안됨, 로그인 버튼으로 이동바람")
   }
}



function check(form)
{
    if(form.userid.value=="김동하"&&form.userpassword.value=="2885"){
        alert("동개, 방문을 환영합니다")
        window.open('친친.html')
    }
    else if(form.userid.value=="박유찬"&&form.userpassword.value=="0175"){
      alert("박유찬, 방문을 환영합니다!")
      window.open("친친.html")
    }
    else if(form.userid.value=="현동욱"&&form.userpassword.value=="1152"){
      alert("현동욱, 방문을 환영합니다!")
      window.open("친친.html")
   }
   else if(form.userid.value=="이윤지"&&form.userpassword.value=="4588"){
    alert("현동욱, 방문을 환영합니다!")
    window.open("친친.html")
 }
 */








function check(form)
{
    if(form.userid.value=="김동하"&&form.userpassword.value=="2885"){
        alert("동개, 방문을 환영합니다")
        window.open('친친.html')
    }
    else if(form.userid.value=="박유찬"&&form.userpassword.value=="0175"){
      alert("박유찬, 방문을 환영합니다!")
      window.open("친친.html")
    }
    else if(form.userid.value=="현동욱"&&form.userpassword.value=="1152"){
      alert("현동욱, 방문을 환영합니다!")
      window.open("친친.html")
   }
   else if(form.userid.value=="이윤지"&&form.userpassword.value=="4588"){
    alert("현동욱, 방문을 환영합니다!")
    window.open("친친.html")
 }


    else{
      alert("등록이 되어있지 않음")
      const YesOrNo = confirm("회원가입하러 가실건가요?")
      if(YesOrNo){
        alert("연락바랍니다")
        window.open("../동개연락수단/연락수단.html")
      }
      else{
        alert("취소됨")
      }

    }
}