// Confetti Animation
document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.querySelector('.confetti');
    const sparklesContainer = document.querySelector('.sparkles');
    const messageContainer = document.querySelector('.message-container');

    // Generate confetti pieces
    function createConfetti() {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('piece');

        // Randomize position and animation delay
        const left = Math.random() * 100;
        const delay = Math.random() * 3;
        confettiPiece.style.left = `${left}vw`;
        confettiPiece.style.animationDelay = `${delay}s`;

        confettiContainer.appendChild(confettiPiece);

        setTimeout(() => {
            confettiPiece.remove();
        }, 4000);
    }

    // Create confetti every 200ms
    setInterval(createConfetti, 200);

    // Sparkles effect when mouse moves
    document.addEventListener('mousemove', (event) => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Randomize position around the mouse
        const size = Math.random() * 5 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.top = `${event.clientY}px`;
        sparkle.style.left = `${event.clientX}px`;

        sparklesContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });

    // Show New Year message on click
    document.body.addEventListener('click', function() {
        messageContainer.style.opacity = 1;
        messageContainer.innerHTML = "Cheers to a New Year filled with new beginnings and adventures!";
        
        setTimeout(() => {
            messageContainer.style.opacity = 0;
        }, 5000); // Hide after 5 seconds
    });
});
