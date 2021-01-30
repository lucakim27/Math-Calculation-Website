function sendMail() {
    var yourMessage = document.getElementById("content").value;
    var subject = document.getElementById("subject").value;
    document.location.href = "mailto:nikolaikim27@gmail.com?subject="+ encodeURIComponent(subject)+ "&body=" + encodeURIComponent(yourMessage);
}
