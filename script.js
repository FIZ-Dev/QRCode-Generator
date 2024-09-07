let qrCode;

function generateQRCode() {
    const linkInput = document.getElementById('linkInput').value;
    const qrcodeDiv = document.getElementById('qrcode');

    // Hapus QR Code sebelumnya jika ada
    qrcodeDiv.innerHTML = '';

    if (linkInput.trim() === '') {
        alert("Masukkan link terlebih dahulu!");
        return;
    }

    // Inisialisasi QR Code Styling
    qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: linkInput,
        image: "", // Jika ingin menambahkan logo di tengah QR Code
        dotsOptions: {
            color: "#4267b2", // Warna dots
            type: "rounded"  // Bentuk dots (rounded, dots, etc.)
        },
        backgroundOptions: {
            color: "#ffffff"  // Background QR Code
        },
        cornersSquareOptions: {
            color: "#4267b2", // Warna kotak sudut QR
            type: "extra-rounded"
        },
        cornersDotOptions: {
            color: "#4267b2", // Warna titik di sudut
            type: "square"
        }
    });

    // Render QR Code ke dalam div
    qrCode.append(qrcodeDiv);

    // Tampilkan tombol download
    document.getElementById('downloadBtn').style.display = 'inline-block';
}

function downloadQRCode() {
    qrCode.download({ name: "qrcode", extension: "png" });
}
