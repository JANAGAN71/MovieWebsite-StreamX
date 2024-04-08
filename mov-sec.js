// function search() {
//     let searchbox = document.getElementById('search-item').value.toUpperCase();
//     const movies = document.getElementsByClassName('moviebox');
//     const moviebox = document.querySelectorAll('box');
//     const moviename = moviebox.getElementsByTagName('h4');

//     for (var i = 0; i < moviename.length; i++) {
//         let match = moviebox[i].getElementsByTagName('h4')[0];

//         let textCont = match.textContent || match.innerHTML || match.innerText;

//         if (textCont.toUpperCase().indexOf(searchbox) > -1) {
//             moviebox[i].style.display = "";
//         }
//         else {
//             moviebox[i].style.display = "none";
//         }
//     }
// }

// function search() {
//     let searchbox = document.getElementById('search-item').value.toUpperCase();
//     const box = document.getElementsByClassName('box');
//     const moviename = document.querySelectorAll('.box .data h4');

//     for (var i = 0; i < moviename.length; i++) {
//         let match = moviename[i];
//         let textCont = match.textContent || match.innerHTML || match.innerText;

//         if (textCont.toUpperCase().indexOf(searchbox) > -1) {
//             match.box.style.display = "";
//         } else {
//             box.style.display = "none"; 
//         }
//     }
// }


function search() {
    let searchbox = document.getElementById('search-item').value.toUpperCase();
    const boxes = document.getElementsByClassName('box');
    const movienames = document.querySelectorAll('.box .data h4');

    for (var i = 0; i < movienames.length; i++) {
        let match = movienames[i];
        let textCont = match.textContent || match.innerText;

        if (textCont.toUpperCase().indexOf(searchbox) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none"; 
        }
    }
}

