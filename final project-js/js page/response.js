// header
const home = () => {
    window.location.replace("../index.html")
}
const aplication = () => {
    window.location.replace("../html page/aplication.html")
}
const cours = () => {
    window.location.replace("../html page/course.html")
}
const response = () => {
    window.location.replace("../html page/response.html")
}
const cources = () => {
    window.location.replace("../html page/cources.html")
}
//בלחיצה על הכוכב הוא מתחלף לכוכב מלא
let counter = 0
let response_old = []
const other_star = (e) => {
    e.target.setAttribute("class", "bi-star-fill")
    counter++;
}
//תגובה חדשה נשמרת ב-local srorage
const your_response = () => {
    let textar = document.getElementsByTagName("textarea")[0].value
    if (localStorage.getItem("response") == undefined) {
        response_old.push({ melel: textar, count_stars: counter })
        localStorage.setItem("response", JSON.stringify(response_old))
    }
    else {
        response_old = JSON.parse(localStorage.getItem("response"))
        response_old.push({ melel: textar, count_stars: counter })
        localStorage.setItem("response", JSON.stringify(response_old))
    }
}
//יצירת התגובה החדשה לפעם הבאה שיכנסו לתגובות
let bigdiv
let tmpdiv
let boddy = document.getElementById("res")
const printarr = () => {
    if (localStorage.getItem("response") != undefined) {
        response_old = JSON.parse(localStorage.getItem("response"))

        response_old.forEach(element => {
            let tmpdiv = document.createElement("div")
            let tmpp = document.createElement("p")
            bigdiv = document.createElement("div")
            tmpp.setAttribute("class", "default_response")
            tmpp.innerHTML = element.melel;
            
            tmpdiv.setAttribute("class", "stars")
            for (let index = 1; index <= 5; index++) {
                let tmpi = document.createElement("i")
                if (element.count_stars >= index)
                    tmpi.setAttribute("class", "bi-star-fill")
                else
                    tmpi.setAttribute("class", "bi-star")
                tmpdiv.appendChild(tmpi)
                bigdiv.appendChild(tmpdiv)
                bigdiv.appendChild(tmpp)
                boddy.appendChild(bigdiv)
            }
        });
    }
}