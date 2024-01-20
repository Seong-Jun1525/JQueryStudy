var myHeight = prompt("당신의 키를 입력하세요")
var myWeight = prompt("당신의 몸무게를 입력하세요")
var result = (myHeight - 100) * 0.9
if(myWeight > result+5) document.write("과체중")
else if(myWeight < result-5) document.write("저체중")
else document.write("적정체중")