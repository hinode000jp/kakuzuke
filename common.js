const nameBtn = document.getElementById('name-btn');

if (nameBtn){
    nameBtn.onclick = function(){
        let myName = prompt('あなたの名前を入力してください。');
        localStorage.setItem('user-name',myName);
    }
}