'use strict';
const lank = localStorage.getItem("lank");
const long = localStorage.getItem("long");
const correctAnswer = localStorage.getItem("correct");
const lanksname = ['一流','普通','二流','三流','そっくりさん','遊ぶ価値なし'];
const lankscolor = ['url("photo/kuro.jpg")','url("photo/cha.jpg")','url("photo/siro.jpg")','url("photo/mizu.jpg")','url("photo/gin.jpg")','url("photo/kin.jpg")'];
const userName = localStorage.getItem('user-name');
const lankUser = ['様', 'さん', '君', '', 'にそっくりな人', ''];
const font = ['serif','sans-serif','sans-serif','monospace','monospace','serif'];
const Auxiliaryverb = ['でござります','です','だよ','だぜ','だ',''];
const Pronoun = ['あなた様','あなた','君','お前','そこの人',''];
document.body.style.backgroundImage = lankscolor[lank];
document.body.style.fontFamily = font[5-lank];

if (lank == 0) {
    document.body.style.color = "#FF0000";
} else {
    document.body.style.color = "#000000";
}

if (lank == 0){
    document.getElementById("kekka").textContent = lanksname[5-lank];
}else{
    document.getElementById("kekka").textContent = userName + lankUser[5-lank] +'、'+ `${long}問中${correctAnswer}問正解${Auxiliaryverb[5-lank]}。${Pronoun[5-lank]}は、${lanksname[5-lank]}${Auxiliaryverb[5-lank]}。`;
    if (lank == 5) {
        document.getElementById("homekotoba").textContent = 'おめでとうございます！';
    }

}