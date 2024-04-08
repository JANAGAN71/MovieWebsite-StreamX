const bgImgs = document.getElementById('bg-img');

const imgs = ['../img/13.jpg', '../img/15.jpg', '../img/home1.jpg', '../img/home3.jpg'];

let cur_ind = 0;

function changeBG(){
        bgImgs.style.backgroundImage = `url('${imgs[cur_ind]}')`;
        cur_ind = (cur_ind+1) % imgs.length;
}

setInterval(changeBG, 3000);

// changeBG();