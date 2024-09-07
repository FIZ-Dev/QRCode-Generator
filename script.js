function generateQRCode() {
    const linkInput = document.getElementById('linkInput').value;
    const qrcodeDiv = document.getElementById('qrcode');

    // Clear previous QR code if any
    qrcodeDiv.innerHTML = '';

    if (linkInput.trim() === '') {
        alert("Masukkan link terlebih dahulu!");
        return;
    }

    // Generate QR code
    const qrCode = new QRCode(qrcodeDiv, {
        text: linkInput,
        width: 200,
        height: 200,
    });

    // Show download button
    document.getElementById('downloadBtn').style.display = 'inline-block';
}

function downloadQRCode() {
    const qrCanvas = document.querySelector('#qrcode canvas');
    const image = qrCanvas.toDataURL("image/png");

    const link = document.createElement('a');
    link.href = image;
    link.download = 'qrcode.png';
    link.click();
}
