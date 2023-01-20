

let num = +prompt("birinchi sinni kiriting")
let ishoralar = prompt("ishoralardan birini tanlang: + - * / ")
let num2
boolean1 = true
if (ishoralar == "+"){
    console.log("ok")
}else if (ishoralar == "-"){
    console.log("ok")
}else if (ishoralar == "*"){
    console.log("ok")
}else if (ishoralar == "/"){
    console.log("ok")
}else{
    boolean1 = false
}

if(boolean1){
    num2 = +prompt("ikkinchi raqamni kiriting")
}else{
    "xatolik yuz berdi"
}

switch(ishoralar){
    case '+':
    result = num + num2
    break
      case '-':
    result = num - num2
    break
      case '*':
    result = num * num2
    break
      case '/':
    result = num / num2
    break
}

alert(result)