var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("playPauseBtn");
var trackTitle = document.getElementById("trackTitle");

var tracks = [
    {title: "Song One", src: "melody-bgm-tamil-love-indian-186668.mp3"},
    {title: "Song Two", src: "lazy-day-stylish-futuristic-chill-239287.mp3"},
    {title: "Song Three", src: "sad-soul-chasing-a-feeling-185750.mp3"}
];

var currentTrack = 0;

function loadTrack(trackIndex) {
    audio.src = tracks[trackIndex].src;
    trackTitle.innerText = tracks[trackIndex].title;
    audio.load();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = "Pause";
    } else {
        audio.pause();
        playPauseBtn.innerText = "Play";
    }
}

function previousTrack() {
    currentTrack--;
    if (currentTrack < 0) {
        currentTrack = tracks.length - 1;
    }
    loadTrack(currentTrack);
    audio.play();
}

function nextTrack() {
    currentTrack++;
    if (currentTrack >= tracks.length) {
        currentTrack = 0;
    }
    loadTrack(currentTrack);
    audio.play();
}

// Load the first track initially
loadTrack(currentTrack);
