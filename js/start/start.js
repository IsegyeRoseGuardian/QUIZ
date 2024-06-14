document.getElementById('youtube_link').addEventListener('click', function (event) {
    event.preventDefault();
    var sound = document.getElementById('youtube_sound');
    sound.play();
    setTimeout(function () {
        window.location.href = event.target.href;
    }, 700);
});

document.getElementById('profile_link').addEventListener('click', function (event) {
    event.preventDefault();
    var sound = document.getElementById('profile_sound');
    sound.play();
    setTimeout(function () {
        window.location.href = event.target.href;
    }, 700);
});

document.getElementById('tmi_link').addEventListener('click', function (event) {
    event.preventDefault();
    var sound = document.getElementById('tmi_sound');
    sound.play();
    setTimeout(function () {
        window.location.href = event.target.href;
    }, 700);
});