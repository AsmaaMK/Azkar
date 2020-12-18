function repeat_btn_clicked(id) {
    document.getElementById('repeat-' + id).addEventListener('click', function () {
        var repeats = document.getElementById('num-'+ id).textContent;
        if (repeats > 0) repeats--;
        if (repeats)
            document.getElementById('num-'+ id).textContent = repeats;
        else
            document.getElementById('num-'+ id).innerHTML = '<img style= "width: 40px; height: 40px; padding-top: 10px;"src="img/compleat.png">';
    });
}

for (var i = 1; i <= '20'; i++) {
    repeat_btn_clicked(i);
}