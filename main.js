let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // 이미지 전환 시간 (2초)
}

document.addEventListener('DOMContentLoaded', function() {
    openModal(); // 팝업 열기
    setTimeout(closeModal, 10000); // 5초 후에 팝업 닫기 (닫기 시간은 필요에 따라 조절 가능)
  });

  // JavaScript로 팝업을 열고 닫는 함수를 정의합니다.
  function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }