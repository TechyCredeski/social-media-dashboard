//Toggle Switch
const slider = document.getElementsByClassName('slider')[0];
//Top section
const nav = document.getElementsByClassName('top')[0];
//Top Dashboard Cards
const box1 = document.getElementsByClassName('box')[0];
const box2 = document.getElementsByClassName('box')[1];
const box3 = document.getElementsByClassName('box')[2];
const box4 = document.getElementsByClassName('box')[3];
//Overview Section
const overview = document.getElementsByClassName('overview')[0];
//Overview Cards
const smallBox1 = document.getElementsByClassName('small-box')[0];
const smallBox2 = document.getElementsByClassName('small-box')[1];
const smallBox3 = document.getElementsByClassName('small-box')[2];
const smallBox4 = document.getElementsByClassName('small-box')[3];
const smallBox5 = document.getElementsByClassName('small-box')[4];
const smallBox6 = document.getElementsByClassName('small-box')[5];
const smallBox7 = document.getElementsByClassName('small-box')[6];
const smallBox8 = document.getElementsByClassName('small-box')[7];



const body = document.getElementsByTagName('body')[0];

slider.addEventListener('click', themeSwitch);

function themeSwitch() {
    slider.classList.toggle('light-toggle')
    body.classList.toggle('light');
    nav.classList.toggle('light-top');
    box1.classList.toggle('light-box');
    box2.classList.toggle('light-box');
    box3.classList.toggle('light-box');
    box4.classList.toggle('light-box');
    overview.classList.toggle('light-overview');
    smallBox1.classList.toggle('light-small-box');
    smallBox2.classList.toggle('light-small-box');
    smallBox3.classList.toggle('light-small-box');
    smallBox4.classList.toggle('light-small-box');
    smallBox5.classList.toggle('light-small-box');
    smallBox6.classList.toggle('light-small-box');
    smallBox7.classList.toggle('light-small-box');
    smallBox8.classList.toggle('light-small-box');
}
