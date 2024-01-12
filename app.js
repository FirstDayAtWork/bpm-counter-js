const bpmTap = document.querySelector('#bpm-tap');
const tapCounter = document.querySelector('#tap-counter');
const bpmNum = document.querySelector('#bpm-num');
const resetButton = document.querySelector('#reset-btn');
const timeSec = document.querySelector('#timer');

function tapPerBpm(){
    let count = 0;
    let start = 0;
    let first = 0;
    let bpm = 0;
    let mins = 0;
    let secs = 0;

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
    
        // show cur time
        mins = Math.floor((start - first) / 60000);
        secs = Math.floor((start - first) / 1000) % 60;
        
        if (secs < 10) secs = `0${secs}`;
        if (mins < 10) mins = `0${mins}`;


        bpmTap.value = '';
        bpmTap.textContent = `${bpm}`
        bpmNum.children[0].innerText = `${bpm}`
        tapCounter.children[0].innerText = `${count}`
        timeSec.children[0].innerText = `${mins}:${secs}`
    })


    resetButton.addEventListener('click', () => {
        count = 0;
        bpm = 0;
        bpmNum.children[0].innerText = `0`
        tapCounter.children[0].innerText = `0`
        timeSec.children[0].innerText = `00:00`
    })

}

tapPerBpm()

