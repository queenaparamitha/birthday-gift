// Data foto galeri (ganti dengan foto-foto pacar kamu)
// silakan ganti nama file gambar dan path sesuai dengan foto asli!
// Untuk keperluan demo, saya menggunakan placeholder gambar dari unsplash love themed.
// TAPI KAMU HARUS GANTI DENGAN URL FOTO PACAR ATAU FILE LOKAL.
// Contoh: 'images/foto1.jpg' jika kamu simpan di folder images.

const fotoData = [
    { src: "https://picsum.photos/id/64/400/400", alt: "Foto Cantik 1 - Senyum manis" },
    { src: "https://picsum.photos/id/169/400/400", alt: "Momen lucu bareng kamu" },
    { src: "https://picsum.photos/id/20/400/400", alt: "Kebersamaan kita" },
    { src: "https://picsum.photos/id/96/400/400", alt: "Cinta tak terbatas" },
    { src: "https://picsum.photos/id/145/400/400", alt: "Cerah seperti bintang" },
    { src: "https://picsum.photos/id/26/400/400", alt: "Peluk cium dari aku" }
];

// Nama pacar (bisa diubah sesuai nama asli)
const namaPacar = "Sayangku Tercinta"; // Ganti dengan nama pacarmu 💕

document.addEventListener("DOMContentLoaded", function() {
    // Set nama pacar di hero
    const namaSpan = document.getElementById("namaPacar");
    if (namaSpan) namaSpan.innerText = namaPacar;

    // Render galeri foto
    const galleryGrid = document.getElementById("galleryGrid");
    if (galleryGrid) {
        fotoData.forEach((foto, index) => {
            const item = document.createElement("div");
            item.className = "gallery-item";
            const img = document.createElement("img");
            img.src = foto.src;
            img.alt = foto.alt;
            img.loading = "lazy";
            // tambahkan event klik untuk modal
            item.appendChild(img);
            item.addEventListener("click", () => {
                openModal(foto.src, foto.alt);
                // kejutan tambahan: balon pesan kecil
                showToast("💖 Foto favoritku dari kamu! 💖");
            });
            galleryGrid.appendChild(item);
        });
    }

    // Modal elements
    const modal = document.getElementById("modalPhoto");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const closeModalBtn = document.querySelector(".close-modal");

    function openModal(src, altText) {
        modal.style.display = "flex";
        modalImg.src = src;
        modalCaption.innerText = altText + "  💗";
        // menambah efek hati
        createHeartBurst();
    }

    function closeModalFunc() {
        modal.style.display = "none";
    }

    if (closeModalBtn) closeModalBtn.onclick = closeModalFunc;
    window.onclick = function(event) {
        if (event.target === modal) closeModalFunc();
    };

    // Kejutan tombol utama
    const kejutanBtn = document.getElementById("kejutanBtn");
    if (kejutanBtn) {
        kejutanBtn.addEventListener("click", () => {
            // Buat banyak hati melayang
            for (let i = 0; i < 30; i++) {
                createFloatingHeart();
            }
            // Ubah pesan di message box jadi pesan spesial
            const displayMsg = document.getElementById("displayMessage");
            if (displayMsg) {
                displayMsg.innerHTML = "🎉 SELAMAT ULANG TAHUN YANG TERINDAH! 🎉<br> Kamu adalah hadiah terindah dalam hidupku. Semoga hari-harimu dipenuhi cinta dan tawa! 🌹💖";
            }
            // mainkan efek suara? tidak pakai audio biar simpel, tapi vibrasi hati.
            alert("💖 Happy Birthday sayang! 💖\nSemoga kamu suka dengan kejutan kecil ini! Aku sayang kamu!");
        });
    }

    // Fungsi membuat floating heart random
    function createFloatingHeart() {
        const heartContainer = document.getElementById("floatingHearts");
        if (!heartContainer) return;
        const heart = document.createElement("div");
        heart.className = "heart-animate";
        heart.innerHTML = randomHeartIcon();
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 80 + "%";
        heart.style.fontSize = Math.random() * 20 + 14 + "px";
        heart.style.animationDuration = Math.random() * 2 + 2.5 + "s";
        heart.style.opacity = 0.7 + Math.random() * 0.3;
        heartContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    function randomHeartIcon() {
        const icons = ["❤️", "💖", "💗", "💓", "💕", "💞", "💘", "❤️‍🔥", "🌸", "✨"];
        return icons[Math.floor(Math.random() * icons.length)];
    }

    // Efek burst hati saat klik foto
    function createHeartBurst() {
        for (let i = 0; i < 12; i++) {
            createFloatingHeart();
        }
    }

    // pesan dari tombol pesan cepat
    const msgBtns = document.querySelectorAll(".msg-btn");
    const displayMessage = document.getElementById("displayMessage");
    if (msgBtns.length && displayMessage) {
        msgBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const pesan = btn.getAttribute("data-msg");
                if (pesan) {
                    displayMessage.innerHTML = pesan + " 💋";
                    // animasi kecil
                    displayMessage.style.transform = "scale(1.02)";
                    setTimeout(() => {
                        displayMessage.style.transform = "scale(1)";
                    }, 200);
                    // tambah hati
                    createFloatingHeart();
                }
            });
        });
    }

    // Buat background floating hati banyak secara periodik
    setInterval(() => {
        if (document.hasFocus()) {
            createFloatingHeart();
        }
    }, 4000);

    // untuk pertama kali muncul, buat beberapa hati salam
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createFloatingHeart(), i * 300);
    }

    // Efek toast sederhana (alert kecil elegan)
    function showToast(msg) {
        // buat notifikasi floating kecil
        const toast = document.createElement("div");
        toast.innerText = msg;
        toast.style.position = "fixed";
        toast.style.bottom = "30px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.backgroundColor = "#ff80a5";
        toast.style.color = "white";
        toast.style.padding = "10px 20px";
        toast.style.borderRadius = "50px";
        toast.style.fontWeight = "bold";
        toast.style.zIndex = "1001";
        toast.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
        toast.style.backdropFilter = "blur(8px)";
        toast.style.fontFamily = "'Quicksand', sans-serif";
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 2000);
    }

    // Tambahan: efek greeting dengan mouse pada gallery! biar makin manis
    const items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
        item.addEventListener("mouseenter", () => {
            // mini heart di dekat kursor? opsional
        });
    });

    // Ubah judul tab menjadi lebih romantis
    document.title = `Happy Birthday, ${namaPacar}! 💖`;
    
    // membuat background hati yang lebih banyak di bg-hearts secara dinamis
    const bgHearts = document.querySelector(".bg-hearts");
    if (bgHearts) {
        for (let i = 0; i < 35; i++) {
            const floatingBgHeart = document.createElement("div");
            floatingBgHeart.innerHTML = "❤️";
            floatingBgHeart.style.position = "absolute";
            floatingBgHeart.style.left = Math.random() * 100 + "%";
            floatingBgHeart.style.top = Math.random() * 100 + "%";
            floatingBgHeart.style.fontSize = Math.random() * 24 + 10 + "px";
            floatingBgHeart.style.opacity = 0.1 + Math.random() * 0.2;
            floatingBgHeart.style.animation = "floatUp 12s linear infinite";
            floatingBgHeart.style.animationDelay = Math.random() * 10 + "s";
            floatingBgHeart.style.pointerEvents = "none";
            bgHearts.appendChild(floatingBgHeart);
        }
    }
});
