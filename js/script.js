let profile = document.querySelector('.profile');
let user = document.querySelector('.User');
let btnAccept = document.querySelectorAll('.acceptBtn');
let btnClose = document.querySelectorAll('.closeBtn');
let spanHead = document.querySelector('#conectReq');
let spanHeadConec = document.querySelector('#yourConect');


function cambioNombre(e) {
    e.preventDefault();
    user.innerHTML = 'Sergio Sánchez';
}

function deleteElement(event) {
    let entireElement = event.target.closest('tr');
    entireElement.remove();
    let score = parseInt(spanHead.textContent);
    score--;
    spanHead.innerHTML = ` ${score}`;

    let score2 = parseInt(spanHeadConec.textContent);
    score2--;
    spanHeadConec.innerHTML = `${score2}`;

};

function puntaje(event) {
    let score = parseInt(spanHead.textContent);
    score++;
    spanHead.innerHTML = ` ${score}`;

    let score2 = parseInt(spanHeadConec.textContent);
    score2++;
    spanHeadConec.innerHTML = `${score2}`;
}

for (let i = 0; i < btnAccept.length; i++) {
    btnAccept[i].addEventListener('click', puntaje);
}


for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener('click', deleteElement);
}




profile.addEventListener('click', cambioNombre);
