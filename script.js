document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("date");
    const imageElement = document.getElementById("random-image");
    const closeButton = document.getElementById("close-button");
    const shareButton = document.getElementById("share-button");
    const circleContainer = document.querySelector('.circle-container');
    const cardContainer = document.querySelector('.card-container');

    // 오늘 날짜 표시
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('ko-KR');

    // 3개의 랜덤 이미지 배열
    const images = [
        'images/image1.png', // 첫 번째 이미지 경로
        'images/image2.png', // 두 번째 이미지 경로
        'images/image3.png', // 세 번째 이미지 경로
        'images/image4.png', // 네 번째 이미지 경로
        'images/image5.png', // 다섯 번째 이미지 경로
        'images/image6.png', // 여섯 번째 이미지 경로
        'images/image7.png', // 일곱 번째 이미지 경로
        'images/image8.png', // 여덟 번째 이미지 경로
        'images/image9.png', // 아홉 번째 이미지 경로
        'images/image10.png', // 열 번째 이미지 경로
    ];

    // 각 동그라미에 대한 이미지 배열
    const assignedImages = []; // 각 동그라미에 할당된 이미지를 저장할 배열

    // 동그라미 생성 및 색칠
    const totalDays = 100;
    for (let i = 1; i <= totalDays; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.textContent = i; // 동그라미에 숫자 추가
        circle.dataset.day = i; // 각 동그라미에 데이터 속성 추가

    

        // 랜덤 이미지 할당
        const randomIndex = Math.floor(Math.random() * images.length);
        assignedImages[i] = images[randomIndex]; // 동그라미에 할당된 이미지 저장

        // 오늘 날짜와 동그라미 클릭 이벤트 추가
        if (i <= today.getDate()) {
            circle.classList.add('filled');
            if (i === today.getDate()) {
                circle.classList.add('animate-fill'); // 오늘 날짜 동그라미에 애니메이션 추가
            }
            circle.addEventListener("click", function() {
                // 클릭한 동그라미의 날짜로 업데이트
                const clickedDate = new Date(today.getFullYear(), today.getMonth(), i);
                dateElement.textContent = clickedDate.toLocaleDateString('ko-KR');

                // 고정된 이미지 표시
                imageElement.src = assignedImages[i]; // 해당 동그라미에 할당된 이미지 설정


                // 카드가 보여지도록 설정
                cardContainer.style.display = "block"; 
                cardContainer.querySelector('.card').style.animation = "none"; // 애니메이션 초기화
                setTimeout(() => {
                    cardContainer.querySelector('.card').style.animation = ""; // 애니메이션 재적용
                }, 0);
            });
        }

        circleContainer.appendChild(circle);
    }

    // 페이지 로드 시 랜덤 이미지 선택 (첫 번째 이미지로 고정)
    const initialIndex = Math.floor(Math.random() * images.length);
    imageElement.src = assignedImages[today.getDate()]; // 오늘 날짜 동그라미의 이미지 설정

    // SNS 공유 버튼 클릭 시 팝업 창 표시
    shareButton.addEventListener("click", function() {
        alert("캡쳐해서 인스타 공유 부탁드립니다! 16~17일 이벤트 진행중입니다!");
    });
    
    // 닫기 버튼 클릭 시 카드 닫기
    closeButton.addEventListener("click", function() {
        cardContainer.style.display = "none"; // 카드 숨기기
    });

    // 랜덤 이미지 클릭 시 아무 일도 일어나지 않도록 설정
    imageElement.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지
    });

    // 페이지 로드 시 카드 보여주기
    cardContainer.style.display = "block"; // 카드가 보이도록 설정
});

