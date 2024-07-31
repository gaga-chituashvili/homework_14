

let title = document.createElement(`h2`);
title.textContent = `ვენეცია`
document.body.appendChild(title);
title.classList.add(`title`);


let text = document.createElement(`p`);
text.textContent =`ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.`;
document.body.appendChild(text);
text.classList.add(`Text`);
text.style.fontSize=`20px`;
text.style.color=`#ffff00`


let circle = document.querySelector(`.circle`);
document.body.appendChild(circle);


let button = document.createElement(`button`);
button.textContent =`DELETE CIRCLE`
document.body.appendChild(button);
button.classList.add(`button`);

button.addEventListener(`click`, ()=>{
    if(button.textContent === ` DELETE CIRCLE`){
        button.textContent = `RETURN`;
        circle.style.display=`none`;
    }else{button.textContent = `DELETE CIRCLE`
    }
});








let box = document.querySelector(`.box`);
box.appendChild(title);
box.appendChild(text);
box.appendChild(circle);
box.appendChild(button);


