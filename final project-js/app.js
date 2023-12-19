//ניתובים לדפים שונים בעזרת-window
const home = () => {
    window.location.replace("./index.html")
}
const aplication = () => {
    window.location.replace("./html page/aplication.html")
}
const cours = () => {
    window.location.replace("./html page/course.html")
}
const response = () => {
    window.location.replace("./html page/response.html")
}
const cources = () => {
    window.location.replace("./html page/cources.html")
}
//במצב שהסקרול לא הכי למעלה יראו דברים מסוימים
const scrol = (e) => {
    let prin = document.getElementById("pri")
    let ttop = document.getElementById("ttop1")
    if (e.target.scrollingElement.scrollTop != 0) {
        prin.style.display = "block";
        ttop.style.display = "block";
    }
    else {
        prin.style.display = "none";
        ttop.style.display = "none";
    }
}
const topp = () => {
    window.scroll(0,0)
}
// צאט
let ch = document.getElementById("chat")
let ch2 = document.querySelector("#chat3")
//פתיחה
const chatopen = () => {
    ch.style.display = "block";
    ch2.style.display = "none";
}
//סגירה
const x_chat = () => {
    ch.style.display = "none";
    ch2.style.display = "block";
}
let stop = 0
let start = 0
let wordsq = []
let counter = 0
//מערך המילים שיכולות להיות עליהם שאלה
let arrquestions = ["גיל", "הגיל", "גילאי", "הגילאים", "גילאים", "מגזר", "מגזרים", "יתקיים", "יתקיימו", "אופן", "מורה", "מורים", "מלמד", "שנים", "וותק", "הוותק", "עומס", "שיעורי בית", "השיעורי בית", "ש.ב"]
//מערך תשובות
let arranswers = ["לגילאי ה-20-40 ", "לגילאי ה-20-40 ", "לגילאי ה-20-40 ", "לגילאי ה-20-40 ", "לגילאי ה-20-40 ", "למגזר החרדי", "למגזר החרדי"
    , "ב-zoom ובסרטונים ברורים ",
    "ב-zoom ובסרטונים ברורים", "ב-zoom ובסרטונים ברורים", "מתמקצעי school online בעלי ידע נרחב ", "מתמקצעי school online בעלי ידע נרחב ", "מתמקצעי school online בעלי ידע נרחב ", "מעל 15 שנות וותק", "מעל 15 שנות וותק",
    "מעל 15 שנות וותק", "תרגול יהיה כל שיעור ,ייתכנו תקופות עמוסות בסוף הקורס בעקבות הגשת הפרויקט", "תרגול יהיה כל שיעור ,ייתכנו תקופות עמוסות בסוף הקורס בעקבות הגשת הפרויקט",
    "תרגול יהיה כל שיעור ,ייתכנו תקופות עמוסות בסוף הקורס בעקבות הגשת הפרויקט", "תרגול יהיה כל שיעור ,ייתכנו תקופות עמוסות בסוף הקורס בעקבות הגשת הפרויקט"]
let brr
let allchat
let queans
//אם לחצו על אנטר השאלה נשלחת לפונקציה
const chat = (e) => {
    if (e.charCode == 13) {
        worder(e)
    }
}
// מקבלת את הערך של השאלה חותכת את השאלה למילים  ומשווה עם המערכים
const worder = (e) => {
    wordsq = [];
    let arrq = e.target.value
    e.preventDefault()
    console.log(arrq);

    for (let index = 0; index < arrq.length; index++) {

        if (arrq[index] == " ") {
            wordsq.push(arrq.substring(stop, index))
            stop = index + 1
        }
    }
    wordsq.push(arrq.substring(stop, (arrq.length)))
    e.target.value = " "
    allchat = document.getElementById("qustionanswer")
    queans = document.createElement("p")
    queans.innerText = arrq;
    queans.classList.add("questions")
    allchat.appendChild(queans)
    // brr=document.createElement("br")
    // allchat.appendChild(brr)
    counter = 0
    let tmp = 0
    for (let i = 0; i < wordsq.length; i++) {
        counter++
        for (let j = 0; j < arrquestions.length; j++) {
            if (wordsq[i] == arrquestions[j]) {
                queans = document.createElement("p")
                queans.innerText = arranswers[j];
                queans.classList.add("answers")
                allchat.appendChild(queans)
                // brr=document.createElement("br")
                // allchat.appendChild(brr)
                tmp = 1;
                break;
            }
            else {
                if (counter == wordsq.length && j == arrquestions.length - 1 && tmp != 1) {
                    queans = document.createElement("p")
                    queans.innerText = "מצטערים ,אין נתונים במערכת!!!";
                    queans.classList.add("answers")
                    allchat.appendChild(queans)
                    // brr=document.createElement("br")
                    // allchat.appendChild(brr)      
                }
            }
        }
    }
}
// חיפוש קורס ,מתעדכן ב-storage
let se1 = document.getElementById("se")
let course_specifi
const searcha = () => {
    let inputse = document.createElement("input")
    inputse.setAttribute("id", "input_search")
    inputse.addEventListener("blur", (event) => {
        if (event.target.value != "") {
            course_specifi = event.target.value;
            sessionStorage.setItem("cource", course_specifi)
            window.location.replace("./html page/learn.html")
        }
    })
    se1.appendChild(inputse)
}
// הצגת רשימת התלמידות 
let big_cart2
let validtrush
let cart2 = document.getElementById("cart")
const signup1 = () => {
    cart2.style.display = "block"
}
let which_course3
const signup2 = (num) => {
    switch (num) {
        case 1:
            which_course3 = "צילום"
            break;
        case 2:
            which_course3 = "עיצוב אתרים"
            break;
        case 3:
            which_course3 = "ציור"
            break;
        case 4:
            which_course3 = "עיצוב פנים"
            break;
    }
    let arrsign = []
    let types2 = document.getElementById("types")
    big_cart2 = document.getElementById("big_cart")
    let student_name
let students2=[]
   SignUp=[{ nameSign:"שרה כהן",NameCource:"צילום" },{ nameSign:"לאה לוי",NameCource:"עיצוב אתרים" },{ nameSign:"רחל כץ",NameCource:"ציור" },{ nameSign:"מרים שטרן",NameCource:"עיצוב פנים" }] 
    if (localStorage.Sign == "null"||localStorage.Sign ==undefined) {
        localStorage.setItem("Sign", JSON.stringify(SignUp))
    }
    SignUp = JSON.parse(localStorage.getItem("Sign"));
    for (let index = 0; index < SignUp.length; index++) {
        if (SignUp[index].NameCource == which_course3) {
            arrsign.push(SignUp[index].nameSign)
        }
    }
    types2.style.display = "none"
    big_cart2.style.display = "block"
    for (let index = 0; index < arrsign.length; index++) {
        let big_student = document.createElement("div")
        let students = document.createElement("div")
        students.innerHTML = arrsign[index]
        students.setAttribute("class","stud")
        big_student.appendChild(students)
        let trush = document.createElement("i")
        trush.setAttribute("class", "bi bi-trash trush")
        big_student.appendChild(trush)
        big_student.setAttribute("id", "big_student2")
        big_cart2.appendChild(big_student)
        trush.addEventListener("click", (event) => {
            student_name = event.currentTarget.parentElement.children[0].innerText;
            if (student_name == sessionStorage.getItem("Username")) {
                big_cart2.removeChild(event.currentTarget.parentNode)
                students2 = JSON.parse(localStorage.getItem("Sign"));
          for (let index = 0; index < students2.length; index++) {
              if (students2[index].nameSign == student_name) {
            students2.splice(index,1)
            localStorage.setItem("Sign",JSON.stringify(students2))
              } 
         }
            }
            
            else {
                validtrush = document.createElement("div")
                validtrush.innerText = "אינך רשאי להסיר שם זה!"
                validtrush.style.color = "red"
                big_cart2.appendChild(validtrush)
                setTimeout(() => {
                     big_cart2.removeChild(validtrush)
                    }, 1000);
            }
        })
    }
}

   

const x_cart = () => {
    cart2.style.display = "none"
}
// log out
const logout = () => {
    sessionStorage.clear()
}
//ניסוי
// var animateButton = function(e) {

//     e.preventDefault;
//     //reset animation
//     e.target.classList.remove('animate');
    
//     e.target.classList.add('animate');
//     setTimeout(function(){
//       e.target.classList.remove('animate');
//     },700);
//   };
  
//   var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
//   for (var i = 0; i < bubblyButtons.length; i++) {
//     bubblyButtons[i].addEventListener('click', animateButton, false);
//   }
//   let button = document.querySelector('.button');
//   let buttonText = document.querySelector('.tick');
  
//   const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";
  
//   buttonText.innerHTML = "Submit";
  
//   button.addEventListener('click', function() {
  
//     if (buttonText.innerHTML !== "Submit") {
//       buttonText.innerHTML = "Submit";
//     } else if (buttonText.innerHTML === "Submit") {
//       buttonText.innerHTML = tickMark;
//     }
//     this.classList.toggle('button__circle');
//   });