let currentQuestion = 1;
let userName = '';
let answers = [];
let motivasiList = [
    "Cinta itu indah dan penuh warna!",
    "Jangan takut untuk jatuh cinta, karena cinta membawa kebahagiaan.",
    "Cinta adalah perjalanan yang membuat hidup lebih berwarna.",
    "Setiap perasaan yang kamu rasakan adalah bagian dari kisah cintamu.",
    "Cinta sejati akan datang pada waktunya, tetap sabar dan percaya."
];

let currentMotivasi = ''; // Menyimpan motivasi yang sedang tampil

// Fungsi untuk memulai kuis
function startQuiz() {
    userName = document.getElementById('userName').value;
    if (userName === '') {
        alert('Nama tidak boleh kosong!');
        return;
    }
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion(currentQuestion);
}

// Fungsi untuk menampilkan pertanyaan
function showQuestion(questionNumber) {
    let questions = document.querySelectorAll('.question-container');
    questions.forEach(q => q.style.display = 'none');
    document.getElementById('question' + questionNumber).style.display = 'block';
}

// Fungsi untuk berpindah ke pertanyaan berikutnya
function nextQuestion(answer) {
    answers.push(answer);
    currentQuestion++;
    if (currentQuestion > 4) {
        showResult();
    } else {
        showQuestion(currentQuestion);
    }
}

// Fungsi untuk menampilkan hasil kuis
function showResult() {
    let likedPerson = document.getElementById('nameInput').value;
    if (likedPerson === '') {
        alert('Nama tidak boleh kosong!');
        return;
    }

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('likedPerson').textContent = likedPerson;

    // Menampilkan kata motivasi sekali ketika hasil ditampilkan
    if (!currentMotivasi) {
        changeMotivasi();
    }
    document.getElementById('motivasi').textContent = currentMotivasi;
}

// Fungsi untuk mengganti kata motivasi secara acak
function changeMotivasi() {
    currentMotivasi = motivasiList[Math.floor(Math.random() * motivasiList.length)];
}

// Fungsi untuk memulai ulang kuis
function restartQuiz() {
    document.getElementById('start-container').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('userName').value = '';
    currentQuestion = 1;
    answers = [];
    currentMotivasi = ''; // Reset motivasi untuk memilih motivasi baru
}

// Fungsi untuk berbagi ke WhatsApp
function shareToWhatsApp() {
    let likedPerson = document.getElementById('likedPerson').textContent;
    let motivasi = document.getElementById('motivasi').textContent;
    let message = `Aku mengikuti BAGI BAGI INFO PACAR, dan orang yang aku sukai adalah: ${likedPerson}. Motivasi untukku dari sana adalah: ${motivasi} *yang ingin mencoba link:`;
    let url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Fungsi untuk menangkap dan mengunduh screenshot
function captureAndDownloadScreenshot() {
    html2canvas(document.getElementById('result')).then(function (canvas) {
        let link = document.createElement('a');
        link.download = `${userName}_result.png`;
        link.href = canvas.toDataURL();
        link.click();
    });
}


