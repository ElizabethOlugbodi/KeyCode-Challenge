// var i = 0; txt;
// txt = 'Hi, welcome to my key code generator.';
// var speed = 50;

//     function typing() {
//         if (i < txt.length) {

//         document.getElementById("txt").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typing, 50);
//     }
// }

const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay');

window.addEventListener('keydown',(e)=>
{   overlay.classList.add('hide');
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.keyCode;
    if(e.keyCode === 32){
        displayKey.innerText = `'space'`;
    }
})

keyCodeDiv.addEventListener('click',(e)=>{
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly','');
    textArea.style.position = 'absolute';
    textArea.value = keyCodeDiv.querySelector('h2').innerText;
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    keyCodeDiv.querySelector('p').innerText = 'Copied';
    setTimeout(()=>{
        keyCodeDiv.querySelector('p').innerText = 'Click Me To Copy';
    }, 2000)
})

