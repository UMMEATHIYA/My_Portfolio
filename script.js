document.addEventListener('DOMContentLoaded', function() {
    const text = "Transforming Tomorrow: Robotics 🤖& AI 🦾🦿Developer 👩‍💻with 2.7 Years at IBM 👁️🐝Ⓜ️| Master's in Computer Science 👩‍🎓 at DePaul University| Dedicated to Elevating Skills for a Future 🔮of Innovation.";
    const typingElement = document.querySelector('.typing-effect');

    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the speed of typing here (in milliseconds)
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.bubble');
    const container = document.querySelector('.skills-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const bubbleSize = 100; // Adjust this to the size of your bubbles
    const usedPositions = [];

    function getRandomPosition(bubbleWidth, bubbleHeight) {
        let position;
        let attempts = 0;

        do {
            position = {
                left: Math.random() * (containerWidth - bubbleWidth),
                top: Math.random() * (containerHeight - bubbleHeight)
            };
            attempts++;
        } while (isOverlapping(position, bubbleWidth, bubbleHeight) && attempts < 100);

        usedPositions.push({
            left: position.left,
            right: position.left + bubbleWidth,
            top: position.top,
            bottom: position.top + bubbleHeight
        });

        return position;
    }

    function isOverlapping(position, bubbleWidth, bubbleHeight) {
        for (let i = 0; i < usedPositions.length; i++) {
            const existing = usedPositions[i];
            if (
                position.left < existing.right &&
                position.left + bubbleWidth > existing.left &&
                position.top < existing.bottom &&
                position.top + bubbleHeight > existing.top
            ) {
                return true;
            }
        }
        return false;
    }

    bubbles.forEach((bubble, index) => {
        const bubbleWidth = bubble.offsetWidth;
        const bubbleHeight = bubble.offsetHeight;
        const position = getRandomPosition(bubbleWidth, bubbleHeight);

        bubble.style.left = `${position.left}px`;
        bubble.style.top = `${position.top}px`;

        setTimeout(() => {
            bubble.style.opacity = 1;
            bubble.style.transform = 'translateY(0)';
        }, index * 1000); // Adjust the timing as needed
    });
});





