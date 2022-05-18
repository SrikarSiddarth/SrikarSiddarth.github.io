// import * from './codes/gameInput'

var onclick = [];
var onmouseover = [];
var btns = []

// wait for the page to load

window.onload = function(){

	for(var i=0; i<16; i++){
		// get all the buttons
		btns[i] = document.getElementById('b'+i);
		btns[i].style.left = (i%4) * 80 + "px";
		btns[i].style.top = Math.floor((i/4)) * 40 + 'px';
		// console.log('b'+i)
	}
	// console.log(btns)	
}


function buttonClick(pos){
    for(var i=0;i<16;i++){
        onclick[i] = 0;
        onmouseover[i] = 0;
    }
    onclick[pos] = 1;
    btns[pos].style.backgroundColor = 'orange';
    // btns[pos].style.color = 'white';

    // console.log('button: '+pos+' was pressed!')
}

function mouseover(pos){
	if (onclick.includes(1)){
		onmouseover[pos] = 1;
		btns[pos].style.backgroundColor = 'orange';
		// console.log(onclick)
  //   	console.log('button: '+pos+' was hovered upon!')	
	}

    
}

// console.log(document.getElementsByClassName('canvas'))

document.body.addEventListener('mouseup', function(){
    for(var i=0;i<16;i++){
        onclick[i] = 0;
        onmouseover[i] = 0;
        btns[i].style.backgroundColor = 'skyblue';
    }
    
    // console.log(onclick)
    // console.log('mouseup')
});