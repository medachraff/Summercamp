function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    document.getElementById('QrCodeTXT').value = decodedText;
    document.getElementById('qr-reader').style.display = 'none';
    document.getElementById('titleQRdONE').style.display = 'block';
}

var html5QrcodeScanner = new Html5QrcodeScanner(
 "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);