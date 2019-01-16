function sendMailHtml() {
    var name = document.getElementById('ImputName').value;
    var email = document.getElementById('InputEmail').value;
    var object = document.getElementById('ImputObject').value;
    var text = document.getElementById('comment').value;

    if (name == "") {
        alert("Veuillez préciser votre nom");
        return false;
    }
    if (email == "") {
        alert("Veuillez préciser votre mail");
        return false;
    }
    if (object == "") {
        alert("Veuillez préciser l'objet de votre demande");
        return false;
    }
    if (text == "") {
        alert("Veuillez préciser votre message");
        return false;
    } else {
        alert("Votre message a été envoyé !!" + '\n' + '\n' + "Voici votre message :" + '\n' + "Email : " + email + '\n' + "Objet : " + object + '\n' + '\n' + text);
    }
};