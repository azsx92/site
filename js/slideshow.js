var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;

showSlides(current); // 현재 이미지
prev.onclick = prevSlide; // 이전 이미지
next.onclick = nextSlide; //다음 이미지

function showSlides(n) {
    for(var i =0; i < slides.length; i++) {
        slides[i].style.display = "none";  //모든 이미지를 화면에서 감춤
    }
    slides[n].style.display = "block";  //모든 이미지를 화면에 표시=
} 

function prevSlide() {
    if(current > 0) current -= 1; // current 값이 0보다 크면 이전 위치로
    else current = slides.length -1; // 그렇지 않으면( 처 번째 이미지이므로) 마지막 위치로
     showSlides(current); //이동한 위치의 이미지 표시
}

function nextSlide() {
    if(current < slides.length -1) current +=1; //currnet값이 2보다 작이면 다음 위치로
    else current = 0; // 그렇지 않다면 (마지막 이미지이므로) 첫 전째 위치로 이동
        showSlides(current); //이동한 위치의 이미지 표시
}