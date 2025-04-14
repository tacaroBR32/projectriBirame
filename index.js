const olka = document.querySelector('.olka');
const cano= document.querySelector('.cano');

const jump = () =>{
    olka.classList.add('jump');


setTimeout(() => {
    olka.classList.remove('jump');
},500);
}
   


const loop= setInterval(() => {
    const canoposição = cano.offsetLeft;
    const olkaposition = +window.getComputedStyle(olka).bottom.replace('px', '');

   
    if(canoposição < 370 && canoposição > 290  && olkaposition < 70){
    cano.style.animation = 'none';
    cano.style.left= `${canoposição}px`;

    olka.style.animation = 'none';
    olka.style.bottom = `${olkaposition}px`;
}
    
}, 10);

   
document.addEventListener('keydown', jump);    
