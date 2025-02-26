document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    
    // 3D rotation effect for elements with .container class
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        const rotateX = (y - 50) * 0.1;
        const rotateY = (x - 50) * 0.1;
        container.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
    });
});
