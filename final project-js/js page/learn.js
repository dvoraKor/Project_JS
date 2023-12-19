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

// קורסים
let arrcourse = [
    {
        name_of_course: "קורס צילום",
        Textc: "קורס בו תלמדי לעצב את האתר ממממממממממממממממ נננננננננננננננננ",
        date_begining: "01/06/2022",
        name_of_teacher: "שרה לביא",
        number_of_meeting: "12",
        price: 8500,
        backgrou: '../pictures/photografy/bg.PNG',
        arrpictures: [
            '../pictures/photografy/1.PNG',
            '../pictures/photografy/2.PNG',
            '../pictures/photografy/3.PNG',
            '../pictures/photografy/4.PNG',
            '../pictures/photografy/5.PNG',
            '../pictures/photografy/6.PNG',
            '../pictures/photografy/7.PNG',
            '../pictures/photografy/8.PNG',
            '../pictures/photografy/9.PNG'
        ]
    },
    {
        name_of_course: "קורס ציור",
        date_begining: "18/09/2022",
        name_of_teacher: "רבקי בר",
        number_of_meeting: "16",
        price: 10200,
        backgrou: '../pictures/drwing/10.PNG',
        arrpictures: [

            '../pictures/drwing/45.PNG',
            '../pictures/drwing/145.PNG',
            '../pictures/drwing/321.PNG',
            '../pictures/drwing/457.PNG',
            '../pictures/drwing/632.PNG',
            '../pictures/drwing/852.PNG',
            '../pictures/drwing/987.PNG',
            '../pictures/drwing/1.PNG',
            '../pictures/drwing/451.PNG',
        ]

    },
    {
        name_of_course: "קורס עיצוב פנים",
        date_begining: "09/12/2021",
        name_of_teacher: "יהודית לוי",
        number_of_meeting: "10",
        price: 13000,
        backgrou: '../pictures/design/art-0017-001.PNG',
        arrpictures: [
            '../pictures/design/gettyimages-155161279-612x612.PNG',
            '../pictures/design/gettyimages-811852936-612x612.PNG',
            '../pictures/design/gettyimages-1130261462-612x612.PNG',
            '../pictures/design/gettyimages-1184180042-612x612.PNG',
            '../pictures/design/gettyimages-1284800593-612x612.PNG',
            '../pictures/design/gettyimages-1249978394-612x612.PNG',
            '../pictures/design/gettyimages-1297771874-612x612.PNG',
            '../pictures/design/unnamed.PNG',
            '../pictures/design/unnamed2.PNG',
        ]
    },
    {
        name_of_course: "קורס עיצוב אתרים",
        date_begining: "24/6/2022",
        name_of_teacher: "שרה לביא",
        number_of_meeting: "18",
        price: 8700,
        backgrou: '../pictures/application/8.PNG',
        arrpictures: ['../pictures/application/13.PNG',
            ' ../pictures/application/WhatsApp-Image-2020-12-14-at-13.49.46-scaled.PNG',
            ' ../pictures/application/בוגרת-scaled.PNG',
            ' ../pictures/application/מוקאפ-לאתר-קליק-פוד-scaled (1).PNG',
            '../pictures/application/מוקאפ-לדף-הבית-באתר-1.PNG',
            '../pictures/application/מכאן-מתחילים-לזנק.png',
            '../pictures/application/סלר-עוגות-scaled.PNG',
            '../pictures/application/רחפנים_1-scaled.PNG',
            '../pictures/application/תינוקים_1-scaled.PNG'
        ]
    }]
let name_of_course = document.getElementById("big_title");
let filterData
let details = document.getElementById("Details");
let big_works=document.getElementById("works")
let big_picture_works=document.getElementById("picture_works")
// בודק ב-session storage איזה קורס נבחר או חופש ומציג אותו
let course_choosen
const which_course = () => {
    course_choosen = sessionStorage.getItem("cource");
    filterData = arrcourse.filter(x => x.name_of_course.includes(course_choosen));
    name_of_course.innerText = filterData[0].name_of_course
    name_of_course.setAttribute("id","single_course")
    name_of_course.style.backgroundImage = "url(" + filterData[0].backgrou + ")"
    details.innerHTML=""
    let details2 = document.createElement("div")
    details.appendChild(details2)
    details2.innerText = "פרטים";
    details2.setAttribute("id","details2")
    let date_begining = document.createElement("p")
    let date_begining_icon=document.createElement("i")
    date_begining.appendChild(date_begining_icon)
    date_begining_icon.setAttribute("class", "bi bi-calendar links")
    details.appendChild(date_begining)
    date_begining.innerText = "תאריך פתיחת הקורס:" + filterData[0].date_begining
    date_begining.setAttribute("class","detail")
    let name_of_teacher = document.createElement("p")
    details.appendChild(name_of_teacher)
    name_of_teacher.innerText = "שם המורה:" + filterData[0].name_of_teacher
    name_of_teacher.setAttribute("class","detail")
    let number_of_meeting = document.createElement("p")
    details.appendChild(number_of_meeting)
    number_of_meeting.innerText = "מספר שיעורים:" + filterData[0].number_of_meeting
    number_of_meeting.setAttribute("class","detail")
    let price = document.createElement("p")
    details.appendChild(price)
    price.innerText = "מחיר הקורס:" + filterData[0].price
    price.setAttribute("class","detail")
    let works = document.createElement("p")
    big_works.appendChild(works)
    works.innerText = "עבודות בוגרים"
   works.setAttribute("id","all_works")
    for (let index = 0; index < filterData[0].arrpictures.length; index++) {
        let img = document.createElement("img")
        big_picture_works.appendChild(img)
        img.setAttribute("src", filterData[0].arrpictures[index])
        img.setAttribute("class","one_work")
    }
}
const form1 = (e) => {
    window.location.replace('../html page/course.html')
}
//גלילה
const scrol = (e) => {
    let ttop = document.getElementById("ttop3")
    if (e.target.scrollingElement.scrollTop != 0) {
        ttop.style.display = "block";
    }
    else {
        ttop.style.display = "none";
    }
}


