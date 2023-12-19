
//בדיקת תקינות הערכים שהוזנו
let Myspan = document.createElement("span")
Myspan.setAttribute("id", "name");
let validlettr2 = document.getElementById("validlettr")
flag = false;
const IsLetterOfName2 = (e) => {

    if (e.keyCode != 32 && e.keyCode < 65 || (e.keyCode > 90 && e.keyCode < 97) || e.keyCode > 122 && (e.keyCode < 1487 || e.keyCode > 1515)) {
        if (flag == false) {
            validlettr2.appendChild(Myspan)
            Myspan.innerText = "!הערך אינו חוקי"
            Myspan.style.color = "red"
            flag = true
        }
        e.preventDefault()
        e.keyCode = 0
    }
    else {
        let divname = document.getElementById("name")
        if (divname)
            validlettr2.removeChild(Myspan)
        flag = false
    }
}
let tep_name
let temphint
let forgethint = document.getElementById("hin")
let inputs = document.getElementsByClassName("logininput")
let Users = [{ username: "dvori", emailuser: "dvori1498@gmail.com", password: "213840143", hint: "id" }]
// שמירה של שם המשתמש כדי לזהותו אם רוצה רמז לסיסמא
const tmp_memory = e => {
    tep_name = e.target.value
}
// רמז לסיסמה
const hint_of_password = () => {
    Users = JSON.parse(localStorage.getItem("users2"));
    temphint = Users.find(x => x.username == tep_name)
    if (temphint == undefined)
        forgethint.innerText = "!זו גלישה ראשונה שלך באתר שלנו"
    else {
        temphint = temphint.hint
        forgethint.innerText = temphint + ":רמז לסיסמה "
    }
}
// שמירת נתונים
const login = (e) => {
    e.preventDefault();
    let newuser = { UserName: inputs[0].value, PassWord: inputs[1].value, Emeil: inputs[2].value }
    if (localStorage.users2 == "null"||localStorage.users2 ==undefined) {
        localStorage.setItem("users2", JSON.stringify(Users))
    }

    Users = JSON.parse(localStorage.getItem("users2"));
    console.log(Users);
    Users.push({ username: inputs[0].value, emailuser: inputs[1].value, password: inputs[2].value, hint: inputs[3].value })
    console.log(Users);
    sessionStorage.setItem("Username", inputs[0].value)
    sessionStorage.setItem("Email", inputs[1].value)
    sessionStorage.setItem("Userpassword", inputs[2].value)
    localStorage.setItem("users2", JSON.stringify(Users))
    window.location.replace("../index.html")
}
const x_login = () => {
    window.location.replace('../index.html')
}
