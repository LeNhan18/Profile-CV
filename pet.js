    // Pet animation
    const pet = document.getElementById('pet');
    let x = 0;
    let y = window.innerHeight - 100; // Đặt gần đáy cửa sổ trình duyệt
    let isMovingRight = true; //Di chuyển con trỏ từ phải sang
    let isJumping = false; //Trạng thái nhảy của pet
    function updatePetPosition() {
        const speed = 1; // Tốc độ di chuyển theo trục x
        const boundary = 20;

        if (isMovingRight) {
            x+=speed;
            pet.classList.remove('flip');
            if (x >= window.innerWidth - boundary) {
                isMovingRight = false;
                pet.classList.add('flip');
            }
        } else {
            x -= speed;
            if (x <= boundary) {
                isMovingRight = true;
                pet.classList.remove('flip');
            }
        }

        if (!isJumping && Math.random() < 0.005) { // có 0.5 xác suất thú cưng nhảy lên
            isJumping = true;
            pet.style.animation = 'jump 0.5s ease';
            setTimeout(() => {
                isJumping = false;
                pet.style.animation = '';
            }, 500);
        }

        pet.style.left = x + 'px';
        pet.style.top = y + 'px';
        requestAnimationFrame(updatePetPosition);
    }

    // Khởi động animation
    updatePetPosition();

    // Make pet follow cursor on hover
    document.addEventListener('mousemove', (e) => {
        const distanceThreshold = 200;
        const dx = e.clientX - x;
        const dy = e.clientY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < distanceThreshold) {
            x += dx * 0.05;
            y += dy * 0.05;
            
            // Update direction based on mouse position
            if (dx > 0) {
                pet.classList.remove('flip');
            } else {
                pet.classList.add('flip');
            }
        }
    });