let line = document.getElementById("line");

line.style.width = '50%';
line.style.height = '2px';


let mr = document.getElementById('mrbutton')
let work = document.getElementById('workbutton')
let gender = document.getElementById('genderbutton')

mr.onclick = Addmr
work.onclick = ADDwork
gender.onclick = ADDgender

function Addmr() {
    let textInput = document.getElementById('mr')
    let mr = textInput.value
    alert('Место рождения ' + mr)
}
function ADDwork() {
    let textInput = document.getElementById('work')
    let work = textInput.value
    alert('Должность ' + work)
}
function ADDgender() {
    let textInput = document.getElementById('gender')
    let sex = textInput.value
    alert('Пол ' + sex)
}

let Send = document.getElementById('SendButton')

Send.onclick = SendAncet

function SendAncet() {

    let Kurc = document.getElementById('kurs')
    let kurc = Kurc.value
    let Language = document.getElementById('Lang')
    let language = Language.value
    let Length = document.getElementById('Length')
    let length = Length.value
    alert("Курс: " + kurc + " Язык общения: " + language + " Продолжительность обучения: " + length)

    let kurcPrice = 0
    let langPrice = 0
    let lenPrice = 0
    let result = 0

    if (kurc == 'Первый') kurcPrice = 600
    else if (kurc == 'Второй') kurcPrice = 550
    else if (kurc == 'Третий') kurcPrice == 450
    else kurcPrice = 350

    if (language == 'Русский') langPrice = 50
    else if (language == 'Английский') langPrice = 100
    else langPrice = 150

    if (lenPrice == '1 год') lenPrice = 100
    else if (lenPrice == '2 года') lenPrice == 150
    else if (lenPrice == '3 года') lenPrice == 200
    else lenPrice = 250

    result = kurcPrice + langPrice + lenPrice

    alert("Конечная стоимость курса: " + result)
}
