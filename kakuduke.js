'use strict';
const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const seikaisound = document.getElementById('seikai');
const fuseikaisound = document.getElementById('fuseikai');
const buttons1 = document.getElementById('buttons1');
const buttons2 = document.getElementById('buttons2');
const image1 = document.getElementById('no1');
const image2 = document.getElementById('no2');
let lank = 5;
let correctAnswer = 0;
let sum = 0;
let Judgment = 0;
let answer;
let leftimage;
let rightimage;
let Misunderstanding;
let arr = [];
const lanksname = ['一流','普通','二流','三流','そっくりさん','遊ぶ価値なし']; 
const lankscolor = ['url("photo/kuro.jpg")','url("photo/cha.jpg")','url("photo/siro.jpg")','url("photo/mizu.jpg")','url("photo/gin.jpg")','url("photo/kin.jpg")'];
const font = ['serif','sans-serif','sans-serif','monospace','monospace','serif'];
const buttonsname = [
    ['1番のマスク','2番のマスク'],
    ['1番の牛肉','2番の牛肉'],
    ['1番のワイン','2番のワイン'],
    ['1番の食パン','2番の食パン'],
    ['1番の腕時計','2番の腕時計']
];
const questions = [
    {question: 'アベノマスク', answer: Math.floor((Math.random()*2)+1), Commentary: '他の人が作った布マスク'},
    {question: '高級牛肉', answer: Math.floor((Math.random()*2)+1), Commentary: '外国産の安い牛肉'},
    {question: '高級ワイン', answer: Math.floor((Math.random()*2)+1), Commentary: 'イタリア製の安くて美味しいワイン'},
    {question: '高級食パン', answer: Math.floor((Math.random()*2)+1), Commentary: '三等粉を使った安い食パン'},
    {question: '高級腕時計', answer: Math.floor((Math.random()*2)+1), Commentary: '男性用の普通の腕時計'},
];
var arrLength = questions.length;

for (let i=0; i<arrLength; i++){
    arr[i] = i;
} 
let img = new Array();
img[1] = new Image();
img[1].src = "photo/1.png";
img[2] = new Image();
img[2].src = "photo/2.jpg";
img[3] = new Image();
img[3].src = "photo/3.png";
img[4] = new Image();
img[4].src = "photo/4.jpg";
img[5] = new Image();
img[5].src = "photo/5.jpg";
img[6] = new Image();
img[6].src = "photo/6.jpg";
img[7] = new Image();
img[7].src = "photo/7.jpg";
img[8] = new Image();
img[8].src = "photo/8.jpg";
img[9] = new Image();
img[9].src = "photo/9.jpg";
img[10] = new Image();
img[10].src = "photo/10.jpg";

questions.push('end');
let long = count(questions,'end');

function count(array,name){
    let nownumber = 0;
    while(!(array[nownumber] === name)){
        nownumber = nownumber+1;
    }
    return nownumber; 
}

function change(array,a,b){
    array.push('end');
    let long = count(array,'end');
    array[long] = array[a];
    array[a] = array[b];
    array[b] = array[long];
    array.pop;
};

function changeIMG(){
    if (questions[arr[sum]].answer === 1){
        document.getElementById("no1").src = img[(arr[sum]+1)*2-1].src;
        document.getElementById("no2").src = img[(arr[sum]+1)*2].src;
    }else{
        document.getElementById("no1").src = img[(arr[sum]+1)*2].src;
        document.getElementById("no2").src = img[(arr[sum]+1)*2-1].src;
    }
}
function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[arr[sum]].question+'はどちらか。';
    buttons1.textContent = buttonsname[arr[sum]][0];
    buttons2.textContent = buttonsname[arr[sum]][1];
}
function onAnswer(ans) {
    if (questions[arr[sum]].answer === 1){
        if (ans === 1){
            Judgment = 1;
        }else{
            Judgment = 0;
        }
        answer = 0;
        Misunderstanding = 1;
    }else{
        if (ans === 0){
            Judgment = 1;
        }else{
            Judgment = 0;
        }
        answer = 1;
        Misunderstanding = 0;  
    }
    if (Judgment === 1) {
        seikaisound.play();
        alert('正解');
        correctAnswer++;
        if (lank === 4 || sum === long-1 && lank < 5){
            lank++;
            document.body.style.backgroundImage = lankscolor[lank];
            document.body.style.fontFamily = font[5-lank];
        }
    } else {
        fuseikaisound.play();
        alert('不正解');
        lank = lank-1;
        document.body.style.backgroundImage = lankscolor[lank];
        document.body.style.fontFamily = font[5-lank];
    }
    alert(questions[arr[sum]].question+'は、'+buttonsname[arr[sum]][answer]+'である。ちなみに、'+buttonsname[arr[sum]][Misunderstanding]+'は、'+questions[arr[sum]].Commentary+'である。');
    sum++;
    if (lank === 0 || sum === long){   
        localStorage.setItem("long", long);
        localStorage.setItem("correct", correctAnswer);
        localStorage.setItem("lank", lank);
        localStorage.setItem("lanksname", JSON.stringify(lanksname));
        window.location.href = 'kekka.html';
    } else {
        writeQuestion();
        changeIMG();
    }
}
function onStart() {
    arr.forEach(function(value) {console.log(value);});
    while(arrLength){
        let j = Math.floor(Math.random()*arrLength);
        let t = arr[--arrLength];
        arr[arrLength] = arr[j];
        arr[j] = t;
    }
    lank = 5;
    correctAnswer = 0;
    sum = 0;
    writeQuestion();
    changeIMG();
    document.body.style.backgroundImage = 'url("photo/kin.jpg")';
    document.body.style.fontFamily = font[5-lank];
}
onStart();