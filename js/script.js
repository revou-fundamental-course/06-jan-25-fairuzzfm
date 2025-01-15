/*File js*/
console.log('Hello World!');

// Fungsi validasi form
function formValidation() {

    let name = document.getElementById('name-input').value;
    console.log('Form Validation has been called');
    if (name == "") {
        //Kondisi jika name kosong
        alert('Name must be filled out');
    }
    else {
        //display result name
        document.getElementById('result-form').innerHTML =  nameInput;
    }

}
document.getElementById('submit-btn').addEventListener('click', formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner+=1;
    changeBackground();

}

// Fungsi mengganti banner/banner auto slide
function changeBackground() {
    let bannerlist = document.getElementsByClassName('banner-image');
    console.log(bannerlist);
    console.log(indexBanner);

    if (indexBanner > bannerlist.length-1) {
        //reset index
        indexBanner = 0;
    }
    //looping ganti background
    for (let i = 0; i < bannerlist.length; i++) {
        bannerlist[i].style.display = 'none';
    }

    bannerlist[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);
