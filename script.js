function repeat_btn_clicked(id) {
    document.getElementById('repeat-' + id).addEventListener('click', function () {
        var repeats = document.getElementById('num-' + id).textContent;
        if (repeats > 0) repeats--;
        if (repeats)
            document.getElementById('num-' + id).textContent = repeats;
        else
            document.getElementById('num-' + id).innerHTML = '<img style= "width: 40px; height: 40px; padding-top: 10px;"src="img/compleat.png">';
    });
}

function play_audio(id) {
    var loopCount = document.getElementById('num-' + id).textContent;
    var aud = document.getElementById('audio-' + id);

    aud.addEventListener('timeupdate', function () {
        
        if (this.currentTime == 0 && loopCount > 1) {
            loopCount--;
            document.getElementById('num-' + id).textContent = loopCount;
        } else if (this.currentTime == 0) {
            this.pause();
            document.getElementById('num-' + id).innerHTML = '<img style= "width: 40px; height: 40px; padding-top: 10px;"src="img/compleat.png">';
        }

    });
}


for (var i = 1; i <= '25'; i++) {
    repeat_btn_clicked(i);
    play_audio(i);
}