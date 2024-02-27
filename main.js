/*let bnt = document.getElementById('bnt');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drug = null;
let dragged;
bnt.onclick = function () {
    if (inp.value != '') {
        boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}<p/>
        `
        inp.value = '';
    }

    dragItem();
}


function dragItem() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', function () {
            drag = item;
            item.style.opacity = '0.5';
        });

        item.addEventListener('dragend', function () {
            drag = null;
            item.style.opacity = '1';
        });
    });

    boxs.forEach(box => {
        box.addEventListener('dragover', function (event) {
            event.preventDefault();
            this.style.background = '#090';
            this.style.color = '#fff';
        });

        box.addEventListener('dragleave', function () {
            this.style.background = '#fff';
            this.style.color = '#000';
        });

        box.addEventListener('drop', function () {
            this.style.background = '#fff';
            this.style.color = '#000';
            this.appendChild(drag);
        });


    });
}



for (let box of boxs) {
    box.ondragstart = (e) => {
        dragged = box;
        e.dataTransfer.setData("text/plain", box.innerHTML);
        box.classList.add("dragged");
    };

    box.ondragover = (e) => {
        e.preventDefault();
    }

    box.ondragenter = () => {
        if (!box.classList.contains("dragged"))
            box.classList.add("dropHover");
    }

    box.ondragleave = () => {
        box.classList.remove("dropHover");
    }

    box.ondragend = () => {
        box.classList.remove("dragged");
    }

    box.ondrop = (e) => {
        dragged.innerHTML = box.innerHTML;
        box.innerHTML = e.dataTransfer.getData("text/plain");
        box.classList.remove("dropHover");
        box.classList.add("shake");

    }
}*/

let bnt = document.getElementById('bnt');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;
let dragged = null;

bnt.onclick = function () {
    if (inp.value !== '') {
        boxs[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
        inp.value = '';
        dragItem();
    }
}

function dragItem() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', function () {
            drag = item;
            item.style.opacity = '0.5';
        });

        item.addEventListener('dragend', function () {
            drag = null;
            item.style.opacity = '1';
        });
    });

    boxs.forEach(box => {
        box.addEventListener('dragover', function (event) {
            event.preventDefault();
            this.style.background = '#090';
            this.style.color = '#fff';
        });

        box.addEventListener('dragleave', function () {
            this.style.background = '#fff';
            this.style.color = '#000';
        });

        box.addEventListener('drop', function () {
            this.style.background = '#fff';
            this.style.color = '#000';
            this.appendChild(drag);
        });
    });
}

for (let box of boxs) {
    box.ondragstart = (e) => {
        dragged = box;
        e.dataTransfer.setData("text/plain", box.innerHTML);
        box.classList.add("dragged");
    };

    box.ondragover = (e) => {
        e.preventDefault();
    }

    box.ondragenter = () => {
        if (!box.classList.contains("dragged"))
            box.classList.add("dropHover");
    }

    box.ondragleave = () => {
        box.classList.remove("dropHover");
    }

    box.ondragend = () => {
        box.classList.remove("dragged");
    }

    box.ondrop = (e) => {
        dragged.innerHTML = box.innerHTML;
        box.innerHTML = e.dataTransfer.getData("text/plain");
        box.classList.remove("dropHover");
        box.classList.add("shake");
    }
}
