// Explore button
let blurBg = document.getElementById("blur-bg");

function exploreNav() {
    blurBg.style.display = "block";
}
// ---

// Navbar
var sideNav = document.querySelector(".side-navbar");
function sideNavbar() {
    sideNav.style.left = "0";
}

function closeSideNavbar() {
    sideNav.style.left = "-68%";
}
// ---

// Rooms
let iconHeart = document.querySelector(".iconHeart");
let iconHeartFill = document.querySelector(".iconHeartFill");

iconHeart.addEventListener('click', likeHeart);

function likeHeart() {
    iconHeartFill.style.display = "block";
    iconHeart.style.display = "none";
}

iconHeartFill.addEventListener('click', disLikeHeart);

function disLikeHeart() {
    iconHeartFill.style.display = "none";
    iconHeart.style.display = "block";
}
// ---

let iconHeart1 = document.querySelector("#iconHeart");
let iconHeartFill1 = document.querySelector("#iconHeartFill");

iconHeart1.addEventListener('click', likeHeart1);

function likeHeart1() {
    iconHeartFill1.style.display = "block";
    iconHeart1.style.display = "none";
}

iconHeartFill1.addEventListener('click', disLikeHeart1);

function disLikeHeart1() {
    iconHeartFill1.style.display = "none";
    iconHeart1.style.display = "block";
}
// ---

let image1 = document.getElementById("Image1");
function viewImage1() {
    image1.style.display = "block";
}
function closeView1() {
    image1.style.display = "none";
}
// ---

let image2 = document.getElementById("Image2");
function viewImage2() {
    image2.style.display = "block";

}
function closeView2() {
    image2.style.display = "none";
}
// ---

// Gallery
document.addEventListener("click",function(e){
    if (e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
        
    }
})
// ---

