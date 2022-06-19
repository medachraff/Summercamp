function OpenQR(){
    StartScanner()
    document.getElementById('qr').setAttribute('style', '')
    document.getElementById("popUp").style.display = "flex";
}
function CloseQr(){
    document.getElementById("popUp").style.display = "none";
    document.getElementById('qr').setAttribute('style', 'display:none;')
}
function Done(msg){
    CloseQr()
    document.getElementById('QrCodeTXT').value = msg
    document.getElementById('titleQRdONE').style.display = "block"
}