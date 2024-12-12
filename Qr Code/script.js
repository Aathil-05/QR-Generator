function qrGen(){
    var url = document.getElementById("URL").value
    var dot = document.getElementById("dot").value
    var back = document.getElementById("back").value
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 270,
        height: 270,
        colorDark : dot,
        colorLight : back,
        correctLevel : QRCode.CorrectLevel.H
    });
    document.getElementById("URL").value = ''
}