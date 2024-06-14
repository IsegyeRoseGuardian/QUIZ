document.getElementById('start_game_link').addEventListener('click', function(event) {
    event.preventDefault();
    var sound = document.getElementById('start_sound');
    sound.play();
    setTimeout(function() {
        window.location.href = event.target.href;
    }, 700); // 소리가 재생된 후 1초 후에 페이지 이동 (필요에 따라 조정 가능)
});