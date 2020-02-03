let buttonsKick = document.querySelectorAll('.drum');

for (let i = 0; i <buttonsKick.length; i++) {

    buttonsKick[i].addEventListener('click', function() {
        let letter = this.innerHTML;
        playSounds(letter);
        animation(letter);
    });
    
}

document.addEventListener('keydown', function(event){
playSounds(event.key);
animation(event.key);
});


function playSounds(key){

       switch (key) {
           case 'w':
             var w = new Audio('sounds/tom-1.mp3');
             w.play();
           break;
           case 'a':
             var a = new Audio('sounds/tom-2.mp3');
             a.play();
           break;
           case 's':
             var s = new Audio('sounds/tom-3.mp3');
             s.play();
           break;
           case 'd':
             var d = new Audio('sounds/tom-4.mp3');
             d.play();
           break;
           case 'j':
             var j = new Audio('sounds/crash.mp3');
             j.play();
           break;
           case 'k':
             var k = new Audio('sounds/snare.mp3');
             k.play();
           break;
           case 'l':
             var l = new Audio('sounds/kick-bass.mp3');
             l.play();
           break;  
       }
     
};

function animation(currentKey) {
    let activeKey = document.querySelector('.'+ currentKey);
    activeKey.classList.add('pressed');

    setTimeout(function(){
        activeKey.classList.remove('pressed');
    },100);
}

