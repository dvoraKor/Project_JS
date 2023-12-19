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


let which_course2
const choose_course = () => {

    switch (number_course) {
        case "at":
            which_course2 = "עיצוב אתרים"
            break;
        case "zil":
            which_course2 = "צילום"
            break;
        case "ziu":
            which_course2 = "ציור"
            break;
        case "pn":
            which_course2 = "עיצוב פנים"
            break;
    }
    sessionStorage.setItem("cource", which_course2)
    window.location.replace("../html page/learn.html")
}
let arrcourse = [
    {
        name_of_course: "קורס צילום",
        Textc:["נלמד תפעול המצלמה ומדידת אור, עדיפות מהירות, ","מריחה והקפאה, עדיפות צמצם, עומק שדה, חשיפה ידנית",
    " וחשיפות ארוכות ללילה, צילום שחור לבן והכנה לטבע, ","יישור טכני, מצגת תאורה, כולל 5 סיורי חוץ ותוכנת ניהול"
," התמונות Lightroom מבית אדובי, ביחידה הכוללת:","ניהול ארכיון, גיבויים שונים, חיפושים אוטומטיים, "], 
        ide: "zil",
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
            '../pictures/photografy/8.PNG'
        ]
    },
    {
        name_of_course: "קורס ציור",
        Textc:["נלמד בנושא תורת הצבע יכירו הלומדים את המושגים","צורה וצבע , תורת הצבע , צבעים חמים קרים ומשתלבים",
       " בנושא הקומפוזיציה ילמדו על קומפוזיציות שונות ודרכי","בנייתן ושליטה בהן, לצד מושגי יסוד גרפיים חשובים."
    ,"התנסות ותרגול שיטתי עד לשליטה מלאה ברישום ","באמצעות עיפרון, כולל שימוש בטכניקות מתקדמות "],
        ide: "ziu",
        date_begining: "18/09/2022",
        name_of_teacher: "רבקי בר",
        number_of_meeting: "16",
        price: 10200,
        backgrou: '../pictures/drwing/10.PNG',
        arrpictures: [

            '../pictures/drwing/45.PNG',
            '../pictures/drwing/145.PNG',
            '../pictures/drwing/321.PNG',
            '../pictures/drwing/451.PNG',
            '../pictures/drwing/457.PNG',
            '../pictures/drwing/632.PNG',
            '../pictures/drwing/852.PNG',
            '../pictures/drwing/987.PNG',
            '../pictures/drwing/1.PNG',
        ]

    },
    {
        name_of_course: "קורס עיצוב פנים",
        Textc:[ "נלמד להכיר את עולם חומרי הגלם השונים ושימושיהם,","עולם הצבעים והשפעתם, עיצוב תאורה, אקוסטיקה, נגישות ועוד."
        ,"לרכוש ארגז כלים נרחב למקצוע הלבשת הבית, בעבודה על פי ","קונספט עיצובי, סגנונות וטרנדים, ובהתאמה לאופי הלקוח. לקרוא"
        ,"מפות תכנון ולשלוט במונחים המקצועיים כמו פרספקטיבה,"," איזומטריה, קומפוזיציה, סימטריה, סימנים מוסכמים ועוד."],
        ide: "pn",
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
        Textc: ["נלמד על יסודות העיצוב, על המסרים המועברים באמצעות ","צורה, צבע ופונט, ועל הדרך הנכונה לבחור את העיצוב",
    "הנכון לאתר שלנועל הדרך הנכונה להעמיד אלמנטים","בעיצוב בצורה שתעניין את הצופה, תגרום לו לקבל "
,"את המסרים שאנחנו רוצים בסדר שאנחנו רוצים","בצורה הטובה והמקצועית ביותר!!"],
        ide: "at",
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
let arrcourse2 = [
    {
        name_of_course: "קורס צילום",
        Textc:["נלמד תפעול המצלמה ומדידת אור, עדיפות מהירות, ","מריחה והקפאה, עדיפות צמצם, עומק שדה, חשיפה ידנית",
    " וחשיפות ארוכות ללילה, צילום שחור לבן והכנה לטבע, ","יישור טכני, מצגת תאורה, כולל 5 סיורי חוץ ותוכנת ניהול"
," התמונות Lightroom מבית אדובי, ביחידה הכוללת:","ניהול ארכיון, גיבויים שונים, חיפושים אוטומטיים, "], 
        ide: "zil",
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
            '../pictures/photografy/8.PNG'
        ]
    },
    {
        name_of_course: "קורס ציור",
        Textc:["נלמד בנושא תורת הצבע יכירו הלומדים את המושגים","צורה וצבע , תורת הצבע , צבעים חמים קרים ומשתלבים",
       " בנושא הקומפוזיציה ילמדו על קומפוזיציות שונות ודרכי","בנייתן ושליטה בהן, לצד מושגי יסוד גרפיים חשובים."
    ,"התנסות ותרגול שיטתי עד לשליטה מלאה ברישום ","באמצעות עיפרון, כולל שימוש בטכניקות מתקדמות "],
        ide: "ziu",
        date_begining: "18/09/2022",
        name_of_teacher: "רבקי בר",
        number_of_meeting: "16",
        price: 10200,
        backgrou: '../pictures/drwing/10.PNG',
        arrpictures: [

            '../pictures/drwing/45.PNG',
            '../pictures/drwing/145.PNG',
            '../pictures/drwing/321.PNG',
            '../pictures/drwing/451.PNG',
            '../pictures/drwing/457.PNG',
            '../pictures/drwing/632.PNG',
            '../pictures/drwing/852.PNG',
            '../pictures/drwing/987.PNG',
            '../pictures/drwing/1.PNG',
        ]

    },
    {
        name_of_course: "קורס עיצוב פנים",
        Textc:[ "נלמד להכיר את עולם חומרי הגלם השונים ושימושיהם,","עולם הצבעים והשפעתם, עיצוב תאורה, אקוסטיקה, נגישות ועוד."
        ,"לרכוש ארגז כלים נרחב למקצוע הלבשת הבית, בעבודה על פי ","קונספט עיצובי, סגנונות וטרנדים, ובהתאמה לאופי הלקוח. לקרוא"
        ,"מפות תכנון ולשלוט במונחים המקצועיים כמו פרספקטיבה,"," איזומטריה, קומפוזיציה, סימטריה, סימנים מוסכמים ועוד."],
        ide: "pn",
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
        Textc: ["נלמד על יסודות העיצוב, על המסרים המועברים באמצעות ","צורה, צבע ופונט, ועל הדרך הנכונה לבחור את העיצוב",
    "הנכון לאתר שלנועל הדרך הנכונה להעמיד אלמנטים","בעיצוב בצורה שתעניין את הצופה, תגרום לו לקבל "
,"את המסרים שאנחנו רוצים בסדר שאנחנו רוצים","בצורה הטובה והמקצועית ביותר!!"],
        ide: "at",
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
let all_c = document.getElementById("all_cources")
let aa
let bb
let cc
let dd
let ee
//ריקון ועדכון מחדש
const louding_course = () => {
    while (all_c.hasChildNodes()) {
        all_c.removeChild(all_c.firstChild);
    }
    for (let index = 0; index < arrcourse2.length; index++) {
        dd = document.createElement("div")
        ee=document.createElement("div")
        aa = document.createElement("h2")
        ee.appendChild(aa)
        aa.innerText = arrcourse2[index].name_of_course
        for (let i = 0; i <arrcourse2[index].Textc.length; i++) {
           bb = document.createElement("p")
           bb.innerText=arrcourse2[index].Textc[i]
           ee.appendChild(bb)
        }
        
        bb.setAttribute("class", "text_course")
        ee.setAttribute("id","text_")
        dd.appendChild(ee)
        cc = document.createElement("img")
        dd.appendChild(cc)
        cc.setAttribute("src", arrcourse2[index].backgrou)
        cc.setAttribute("class", "courseimg") 
        dd.setAttribute("id", arrcourse2[index].ide)
        dd.setAttribute("class","one_course")
        dd.addEventListener("click", (event) => {
            // let ide=event.getElementById("")
            switch (event.currentTarget.id) {
                case "at":
                    which_course2 = "עיצוב אתרים"
                    break;
                case "zil":
                    which_course2 = "צילום"
                    break;
                case "ziu":
                    which_course2 = "ציור"
                    break;
                case "pn":
                    which_course2 = "עיצוב פנים"
                    break;
            }

            sessionStorage.setItem("cource", which_course2)
            window.location.replace("../html page/learn.html")
        })
        
        all_c.appendChild(dd)

    }
}

//מיון וסינון
//מיון לפי מחיר
const funcSort = (min, max, arrcourse) => {
    for (let index = 0; index < arrcourse.length; index++) {
        if (arrcourse[index].price < max && arrcourse[index].price >= min && newarr1.includes(arrcourse[index]) == false) {
            max = arrcourse[index].price
            tmp = arrcourse[index]
        }
    }
    return tmp
}
let newarr1 = []
let tmp = 0
let tmp2
const sort1 = () => {

    for (let index = 0; index < arrcourse.length; index++) {
        if (index == 0) {
            tmp2 = funcSort(0, 20000, arrcourse);
            newarr1.push(tmp2)
        }
        else {
            tmp2 = funcSort(tmp2.price, 20000, arrcourse);
            newarr1.push(tmp2)
        }
    }
    arrcourse2 = newarr1
    louding_course()
}
//סינון לפי שם מורה
let newarr2 = []
let filterarr = []
const cheke = (e, opt) => {
    filterarr = arrcourse.filter(x => x.name_of_teacher.includes(e.target.value));
    if (opt.checked == true) {
        for (let index = 0; index < filterarr.length; index++) {
            newarr2.push(filterarr[index])
            console.log(newarr2)
            arrcourse2 = newarr2
            louding_course()
        }
    }
    else {
        for (let index = 0; index < newarr2.length; index++) {
            if (filterarr.includes(newarr2[index])) {
                newarr2.splice(index, 1)
                index--
                console.log(newarr2);
            }
        }
        arrcourse2 = newarr2
        louding_course()

    }
    //  arrcourse=newarr2 
    //   louding_course()
}


let chekbo = document.getElementById("chekbox2")
const sort2 = () => {
    chekbo.style.display = "block"
}
//גלילה
const scrol = (e) => {
    let ttop = document.getElementById("ttop2")
    if (e.target.scrollingElement.scrollTop != 0) {
        ttop.style.display = "block";
    }
    else {
        ttop.style.display = "none";
    }
}
const ttop=()=>{
    window.scroll(0,0)
}
let sort_price2=document.getElementById("sort_price_")
const price_=()=>{
    let sort_price3=document.createElement("div")
    sort_price2.setAttribute("id","text10")
    while (sort_price2.hasChildNodes()) {
        sort_price2.removeChild(sort_price2.firstChild);
    }
    sort_price2.appendChild(sort_price3)
    sort_price3.innerText="מיון לפי מחיר"
    setTimeout(() => {
        sort_price2.removeChild(sort_price3)
       }, 1000);

}


let sort_teacher2=document.getElementById("sort_teacher_")
const teacher_=()=>{
    let sort_teacher3=document.createElement("div")
    sort_teacher2.setAttribute("id","text11")
    while (sort_teacher2.hasChildNodes()) {
        sort_teacher2.removeChild(sort_teacher2.firstChild);
    }
    sort_teacher2.appendChild(sort_teacher3)
    sort_teacher3.innerText="סינון לפי מורה"
    setTimeout(() => {
        sort_teacher2.removeChild(sort_teacher3)
       }, 1000);

}

