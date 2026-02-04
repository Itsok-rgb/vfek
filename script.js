// Configuration - Customize these!
const CONFIG = {
    // Set your relationship start date (Year, Month-1, Day)
    relationshipStartDate: new Date(2023, 0, 14), // January 14, 2023

    // Customize your memories
    memories: [
        { icon: '☕', title: 'First Date', description: 'That coffee shop where it all began' },
        { icon: '🎬', title: 'Movie Night', description: 'When we watched our favorite film together' },
        { icon: '🌅', title: 'Beach Sunset', description: 'Watching the sunset by the ocean' },
        { icon: '🎂', title: 'Birthday Surprise', description: 'The cake that made you smile' },
        { icon: '✈️', title: 'Adventure Trip', description: 'Our unforgettable journey together' },
        { icon: '🎵', title: 'Concert', description: 'Dancing to our favorite songs' }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    createFloatingHearts();
    generateMemoryCards();
    startCounter();
});

// -------------------- SCREEN NAVIGATION --------------------
function startProposal() {
    showNextScreen('memoryScreen');
}

function showNextScreen(nextId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const nextScreen = document.getElementById(nextId);
    if (nextScreen) {
        nextScreen.classList.add('active');
    }
}

// -------------------- FLOATING HEARTS --------------------
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💞'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 10000);
    }, 300);
}

// -------------------- MEMORY CARDS --------------------
function generateMemoryCards() {
    const memoryCards = document.getElementById('memoryCards');
    memoryCards.innerHTML = '';

    CONFIG.memories.forEach((memory, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card animate-in';
        card.style.animationDelay = `${index * 0.2}s`;

        card.innerHTML = `
            <div class="memory-icon">${memory.icon}</div>
            <h3>${memory.title}</h3>
            <p>${memory.description}</p>
        `;

        memoryCards.appendChild(card);
    });
}

// -------------------- TIME COUNTER --------------------
function startCounter() {
    function updateCounter() {
        const now = new Date();
        const diff = now - CONFIG.relationshipStartDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('daysCounter').textContent = days;
        document.getElementById('hoursCounter').textContent = hours;
        document.getElementById('minutesCounter').textContent = minutes;
        document.getElementById('secondsCounter').textContent = seconds;
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}

// -------------------- PROPOSAL BUTTONS --------------------
function handleYes() {
    showNextScreen('successScreen');
}

function handleNo() {
    alert("Nice try 😄");
}

function moveNoButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
