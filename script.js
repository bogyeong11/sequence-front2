const scrollContainer = document.getElementById("scrollContainer");

function cloneItems() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContainer.appendChild(clone);
    });
}

function autoScroll() {
    const speed = 1; // 스크롤 속도 조절
    function scroll() {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
        }
        scrollContainer.scrollLeft += speed;
        requestAnimationFrame(scroll);
    }
    scroll();
}

cloneItems(); // 아이템을 복제하여 무한 루프 효과 만들기
autoScroll();