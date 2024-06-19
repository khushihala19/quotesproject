let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.  - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron"
];

let currentQuoteIndex = 0;
let quoteElement = document.getElementById('quote');
let progressCircle = document.getElementById('progress');
let timerText = document.getElementById('timer-text');
let totalTime = 30;
let timeLeft = totalTime;

function updateQuote() {
    quoteElement.style.opacity = 0; 
    setTimeout(() => {
        quoteElement.textContent = quotes[currentQuoteIndex];
        quoteElement.style.opacity = 1; 
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }, 1000); 
}

function startTimer() {
    timeLeft = totalTime;
    let timer = setInterval(() => {
        timeLeft--;
        let offset = (timeLeft / totalTime) * 283;
        progressCircle.style.strokeDashoffset = offset;
        timerText.textContent = `${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            updateQuote();
            startTimer();
        }
    }, 1000);
}

updateQuote();
startTimer();
