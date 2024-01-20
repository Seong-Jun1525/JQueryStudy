let today = new Date()
let past = new Date("2002/5/31")
// 월
let month = today.getMonth() + 1
let month02 = past.getMonth() + 1
// 일
let date = today.getDate()
let date02 = past.getDate()
// 요일
let day = today.getDay()
let day02 = past.getDay()

function ChangeDay(day) {
    switch (day) {
        case 1:
            day = "월"
            return day
        case 2:
            day = "화"
            return day
        case 3:
            day = "수"
            return day
        case 4:
            day = "목"
            return day
        case 5:
            day = "금"
            return day
        case 6:
            day = "토"
            return day
        case 0:
            day = "일"
            return day
        default:
            console.log("err")
            break;
    }
}

document.write(`
    <h1>오늘 날짜 정보</h1>
    <ul>
        <li>${month}월</li>
        <li>${date}일</li>
        <li>${ChangeDay(day)}요일</li>
    </ul>
    <h1>월드컵 날짜 정보</h1>
    <ul>
        <li>${month02}월</li>
        <li>${date02}일</li>
        <li>${ChangeDay(day02)}요일</li>
    </ul>
`)
document.write(today + "<br><br>")
// document.write(now)

let nowYear = today.getFullYear()
let theDate = new Date(nowYear, 11, 31)
let diffDate = theDate.getTime() - today.getTime()
let result = Math.ceil(diffDate / (60 * 1000 * 60 * 24)) // Math.ceil() 메서드를 사용하여 반올림
document.write("연말 D-day: " + result + "일 남았습니다.")