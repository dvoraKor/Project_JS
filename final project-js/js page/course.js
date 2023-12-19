// שם
flag = false;
let MyDiv = document.createElement("div")
let bigdiv3 = document.getElementsByClassName("divim")
MyDiv.setAttribute("id", "name");
const IsLetterOfName = (e) => {

    if (e.keyCode != 32 && e.keyCode < 65 || (e.keyCode > 90 && e.keyCode < 97) || e.keyCode > 122 && (e.keyCode < 1487 || e.keyCode > 1515)) {
        if (flag == false) {
            bigdiv3[1].appendChild(MyDiv)
            MyDiv.innerText = "הערך אינו חוקי!"
            MyDiv.style.color = "red"
            flag = true
        }
        e.preventDefault()
        e.keyCode = 0
    }
    else {
        let divname = document.getElementById("name")
        if (divname)
            bigdiv3[1].removeChild(MyDiv)
        flag = false
    }
}
//קורס
const IsLetterOfNamecource = (e) => {

    if (e.keyCode != 32 && e.keyCode < 65 || (e.keyCode > 90 && e.keyCode < 97) || e.keyCode > 122 && (e.keyCode < 1487 || e.keyCode > 1515)) {
        if (flag == false) {
            bigdiv3[0].appendChild(MyDiv)
            MyDiv.innerText = "הערך אינו חוקי!"
            MyDiv.style.color = "red"
            flag = true
        }
        e.preventDefault()
        e.keyCode = 0
    }
    else {
        let divname = document.getElementById("name")
        if (divname)
            bigdiv3[0].removeChild(MyDiv)
        flag = false
    }
}
// טלפון
flag = false;
let MyDiv6 = document.createElement("div")
MyDiv6.setAttribute("id", "phone");
const IsDigitOfPh = (e) => {
    if (e.keyCode < 48 || e.keyCode > 57) {
        if (flag == false) {
            bigdiv3[2].appendChild(MyDiv6)
            MyDiv6.innerText = "הערך אינו חוקי!"
            MyDiv6.style.color = "red"
            flag = true
        }
        e.preventDefault()
        e.keyCode = 0
    }
    if (e.keyCode > 48 && e.keyCode < 57) {
        let divphone = document.getElementById("phone")

        if (divphone) {
            bigdiv3[2].removeChild(MyDiv6)
        }
        flag = false
    }
}
// אשראי
flag = false;
let MyDiv7 = document.createElement("div")
MyDiv6.setAttribute("id", "phone");
const IsDigitOfviza = (e) => {
    if (e.keyCode < 48 || e.keyCode > 57) {
        if (flag == false) {
            bigdiv3[3].appendChild(MyDiv6)
            MyDiv7.innerText = "הערך אינו חוקי!"
            MyDiv7.style.color = "red"
            flag = true
        }
        e.preventDefault()
        e.keyCode = 0
    }
    if (e.keyCode > 48 && e.keyCode < 57) {
        let divphone = document.getElementById("phone")

        if (divphone) {
            bigdiv3[3].removeChild(MyDiv7)
        }
        flag = false
    }
}

let MyDiv3 = document.createElement("div")
let b
const checkPone = (e) => {


    MyDiv3.setAttribute("id", "da");
    if (e.target.value.length < 7 || e.target.value.length > 7) {
        if (MyDiv3.innerHTML == "") {
            MyDiv3.innerHTML = "! הטלפון אינו תקין"
            document.body.appendChild(MyDiv3)
            b = true
        }
    }
    else {
        let d = document.getElementById("da")
        document.body.removeChild(d)
        b = false
    }
}
//local storage -הרשמות לקורס נרשם ב
let none1=document.getElementById("none2")
let print_details2=document.getElementById("print_details")
let SignUp = [{ nameSign: "dvori", NameCource: "ציור" }]
const ook = (e) => {
e.preventDefault()
    if (localStorage.Sign == undefined) {
        localStorage.setItem("Sign", JSON.stringify(SignUp))
    }

    SignUp = JSON.parse(localStorage.getItem("Sign"));
    SignUp.push({ nameSign: e.target.un.value, NameCource: e.target.uc.value })
    console.log(SignUp);
    localStorage.setItem("Sign", JSON.stringify(SignUp))
   //הדפסת קבלה
    none1.style.display="none"
    let de=document.createElement("p")
    de.innerText="קבלה"
    de.setAttribute("id","det")
    print_details2.appendChild(de)
    let nc=document.createElement("p")
    nc.innerText="שם הקורס: "+e.target[0].value
    nc.setAttribute("class","details5")
    print_details2.appendChild(nc)
    let np=document.createElement("p")
    np.innerText="שם: "+e.target[1].value
    np.setAttribute("class","details5")
    print_details2.appendChild(np)
    let te=document.createElement("p")
    te.innerText="טלפון: "+e.target[2].value
    te.setAttribute("class","details5")
    print_details2.appendChild(te)
    let em=document.createElement("p")
    em.innerText="מייל: "+e.target[3].value
    em.setAttribute("class","details5")
    print_details2.appendChild(em)
    window.print()
}



const x_form = () => {
    window.location.replace('../index.html')
}