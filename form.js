
function sendMailHtml() {

    var name = document.getElementById('ImputName').value;
    var email = document.getElementById('InputEmail').value;
    var object = document.getElementById('ImputObject').value;
    var text = document.getElementById('comment').value;


    let varName = "";
    let varEmail = "";
    let varObject = "";
    let varText = "";
    let count = 0;

    if (name === "") {
        varName = "Nom";
        count = count + 1;
    }
    if (email === "" ) {
        varEmail = "email";
        count = count + 1;
    }
    if (email.search("@") < 2 ){
        alert("Veuillez entrer un mail valide");
        return;
    }
    if (object === "") {
        varObject = "objet";
        count = count + 1;
    }
    if (text === "") {
        varText = "message";
        count = count + 1;
    }

    if (count !== 0) {
        alert("Veuillez préciser votre " + varName + " " + varEmail + " " + varObject + " " + varText);
    } else {
        alert("Votre message a été envoyé !!" + '\n' + '\n' + "Voici votre message :" + '\n' + "Email : " + email + '\n' + "Objet : " + object + '\n' + '\n' + text);
    }
};