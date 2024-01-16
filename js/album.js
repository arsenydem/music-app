let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);
let input = document.querySelector(`.input-top`);

let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);
let album = albums[i];

if (!album) {
    console.log(1)
    container.innerHTML = `Ошибка`;
    window.location.pathname = `index.html`;
    window.location.search = `i=0`;
} else {
    container.innerHTML += `
        <div class="card mt-1 mb-3">
            <div class="row">
                <div class="col-4">
                    <img src="${album.img}" alt="" class="img-fluid rounded-start">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${album.title}</h5>
                        <p class="card-text">${album.description}</p>
                        <p class="card-text"><small class="text-muted">${album.year}</small></p>
                    </div>
                </div>
            </div>
        </div>`

    let tracks = album.tracks;
    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        playlist.innerHTML += `
            <li class="track list-group-item d-flex align-items-center">
                <img class = "button${i} me-4 left-img" src="assets/free-icon-play-727245.png" alt="Кнопка «button»" height="30px">
                    <div class="">
                        <div class="">${track.title}</div>
                        <div class="">${track.aughtor}</div>
                    </div>
                    <div class="ms-auto time${i}">${track.time}</div>
                    <audio class="audio${i}" src="${track.src}"></audio>
                    
            </li>`
    }
}


let button = document.querySelector(`.button0`);
let audio = document.querySelector(`.audio0`);
let button2 = document.querySelector(`.button1`);
let audio2 = document.querySelector(`.audio1`);
let button3 = document.querySelector(`.button2`);
let audio3 = document.querySelector(`.audio2`);

let time = document.querySelector(`.time0`);
let time2 = document.querySelector(`.time1`);
let time3 = document.querySelector(`.time2`);

let timers = []

function Audioplay(button, audio, time) {
    let isPlaying = false;
    button.addEventListener(`click`, function () {
        let [xuina, s] = time.className.split('e')
        s = Number(s)
        // Если трек сейчас играет...
        if (isPlaying) {
            isPlaying = false;
            // Поставить на паузу
            audio.pause();
            clearInterval(timers[s])
            // Если трек сейчас не играет...
        } else {
            isPlaying = true;
            // Включить проигрывание
            audio.play();
            let timerId = setInterval(() => {
                let [minutes, seconds] = time.innerHTML.split(':');

                minutes = Number(minutes)
                seconds = Number(seconds)
                console.log(minutes, seconds)
                time.innerHTML = ``
                if (seconds == 0 && minutes == 0) {
                    clearInterval(timerId)
                    audio.pause();
                    time.innerHTML = `${track.time}`
                } else if (seconds == 0) {
                    seconds = 59
                    minutes -= 1
                    time.innerHTML = `${minutes}:${seconds}`
                } else {
                    time.innerHTML = `${minutes}:${seconds - 1}`
                }
            }, 1000);
            timers[s] = timerId
        }
    });
}

Audioplay(button, audio, time)
Audioplay(button2, audio2, time2)
Audioplay(button3, audio3, time3)

input.addEventListener(`input`, function () {
    playlist.innerHTML = ``
    for (let i = 0; i < album.tracks.length; i++) {
        let track = album.tracks[i];

        if (track.title.toLowerCase().includes(input.value.toLowerCase()) || track.aughtor.toLowerCase().includes(input.value.toLowerCase())) {
            playlist.innerHTML += `
            <li class="track list-group-item d-flex align-items-center">
                <img class = "button${i} me-4 left-img" src="assets/free-icon-play-727245.png" alt="Кнопка «button»" height="30px">
                    <div class="">
                        <div class="">${track.title}</div>
                        <div class="">${track.aughtor}</div>
                    </div>
                    <div class="ms-auto">${track.time}</div>
                    <audio class="audio${i}" src="${track.src}"></audio>
                    
            </li>`
        }

    }

});