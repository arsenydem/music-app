let container = document.querySelector(`.albums`);
let input2 = document.querySelector(`.input-top2`);
for (let i = 0; i < albums.length; i++) {
    let album = albums[i];
    container.innerHTML +=  `<div class="col">
    <a href="album.html?i=${i}" class="text-decoration-none">
        <div class="card">
            <img src="${album.img}" alt="" class="card-img-top">
            <div class="card-body">
                <p class="card-text">${album.title}</p>
            </div>
        </div>
      </a>
  </div>
    `
}

input2.addEventListener(`input`, function () {
    container.innerHTML = ``
    for (let i = 0; i < albums.length; i++) {
        let album = albums[i];
        if (album.title.toLowerCase().includes(input2.value.toLowerCase())) {
            container.innerHTML += `<div class="col">
            <a href="album.html?i=${i}" class="text-decoration-none">
                <div class="card">
                    <img src="${album.img}" alt="" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">${album.title}</p>
                    </div>
                </div>
              </a>
          </div>
            `
        }
        
    }
    
});