let currentQuestion = 1;
let userName = '';
let answers = [];
let motivasiList = [
    "Kesuksesan bukanlah kunci kebahagiaan, kebahagiaan adalah kunci kesuksesan.",
    "Jangan berhenti berusaha, karena setiap langkah kecil membawa kita lebih dekat pada impian.",
    "Hidup tidak selalu mudah, tetapi setiap tantangan adalah kesempatan untuk tumbuh.",
    "Percayalah pada dirimu sendiri, karena kamu lebih kuat dari yang kamu kira.",
    "Jangan biarkan kegagalan menghentikanmu, itu hanya batu loncatan menuju kesuksesan.",
    "Bekerja keraslah hari ini untuk masa depan yang lebih cerah.",
    "Waktu tidak akan menunggu, jadi lakukan yang terbaik sekarang.",
    "Hidupmu adalah hasil dari pilihan-pilihan yang kamu buat.",
    "Tetaplah positif, meski dunia terkadang terlihat gelap.",
    "Jangan menunggu kesempatan datang, ciptakan kesempatanmu sendiri.",
    "Percayalah, hal-hal baik akan datang ketika kamu berusaha dengan sepenuh hati.",
    "Kegagalan bukan akhir dari segalanya, itu hanya permulaan untuk mencapai keberhasilan.",
    "Jangan pernah menyerah, karena setiap usaha akan membuahkan hasil pada waktunya.",
    "Kesulitan adalah ujian, dan ujian adalah kesempatan untuk menunjukkan kekuatanmu.",
    "Hidup ini bukan tentang menunggu badai berlalu, tetapi tentang belajar menari di tengah hujan.",
    "Jangan takut untuk mencoba hal baru, karena di situlah kamu akan menemukan potensi sejati.",
    "Setiap langkah kecil yang kamu ambil hari ini, membawa perubahan besar di masa depan.",
    "Keberanian bukan berarti tidak merasa takut, tetapi tetap melangkah meskipun ada rasa takut.",
    "Jadilah dirimu sendiri, karena kamu tidak perlu menjadi orang lain untuk sukses.",
    "Mimpi besar dimulai dari langkah kecil yang berani diambil.",
    "Terkadang, kamu harus merasakan kegagalan untuk memahami arti sejati dari kesuksesan.",
    "Hidup ini penuh dengan peluang, jangan sia-siakan setiap kesempatan yang datang.",
    "Jangan terlalu lama meratapi masa lalu, fokuslah pada apa yang bisa kamu capai di masa depan.",
    "Keberhasilan bukan tentang apa yang kamu miliki, tetapi tentang siapa kamu menjadi.",
    "Hidup ini adalah perjalanan, bukan tujuan. Nikmati setiap langkah yang kamu ambil.",
    "Jika kamu ingin melihat perubahan, mulailah dari diri sendiri.",
    "Terkadang hal terbaik datang setelah perjuangan panjang, jangan pernah berhenti berjuang.",
    "Kesuksesan adalah hasil dari kerja keras, ketekunan, dan keyakinan pada diri sendiri.",
    "Belajarlah dari masa lalu, tetapi jangan biarkan itu menghalangi langkahmu ke depan.",
    "Jangan biarkan ketakutan menghalangi kamu untuk meraih impianmu."
]
;

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
    let message = `Aku mengikuti BAGI BAGI INFO PACAR, dan orang yang aku sukai adalah: ${likedPerson}. Motivasi untukku dari sana adalah: ${motivasi} link:cariinformasi.vercel.app/`;
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


