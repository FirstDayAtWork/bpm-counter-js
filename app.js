const bpmTap = document.querySelector('#bpm-tap');
const tapCounter = document.querySelector('#tap-counter');
const bpmNum = document.querySelector('#bpm-num');
const resetButton = document.querySelector('#reset-btn');
const timeSec = document.querySelector('#timer');

function tapPerBpm(){
    let count = 0;
    let start = 0;
    let first = 0;
    let prev = 0;
    let bpm = 0;
    

    bpmTap.addEventListener('input', () => {
        // show time since first click in msec
        start = Date.now();
    
        if(count === 0){
            // lock first click time
            first = start;
            count = 1
        } else {
            bpm = Math.round((count * 60000) / (start - first))   
            count++
        }
    
        bpmTap.value = '';
        bpmNum.children[0].innerText = `${bpm}`
        tapCounter.children[0].innerText = `${count}`
        timeSec.children[0].innerText = `${Math.round((start - first) / 1000)}`
        prev = start
    })


    resetButton.addEventListener('click', () => {
        count = 0;
        bpm = 0;
        bpmNum.children[0].innerText = ``
        tapCounter.children[0].innerText = ``
        timeSec.children[0].innerText = ``
    })

}

tapPerBpm()

