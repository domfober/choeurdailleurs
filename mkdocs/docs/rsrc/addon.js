var cname = "choeurdailleurs";
var passwd= "ailleurs2021";
var authID = "AUTH";
var passID = "PSWD";

function submit() {
    let p = document.getElementById ("passwd");
    if (p.value == passwd) {
        hideAuth();
        localStorage.setItem (cname, p.value);
    }
    else {
        document.getElementById (passID).classList.add ("invalid");
        p.value = "";
        setTimeout(function () {document.getElementById (passID).classList.remove ("invalid");}, 200 ); 
    } 
}

function showAuth() {
    document.getElementById (authID).style.visibility = "visible";
    document.getElementById (passID).style.visibility = "visible";
}

function hideAuth() {
    document.getElementById (authID).style.visibility = "hidden";
    document.getElementById (passID).style.visibility = "hidden";
}

function check() {
    let p = localStorage.getItem(cname);
    if (!p || p != passwd)
        showAuth();
}

function createmodal () {
    let div = document.createElement('div');
    div.className = "cover";
    div.id = authID;
    let auth = document.createElement('div');
    auth.className = "modal";
    auth.id = passID
    auth.innerHTML = "<p>Mot de passe : <input id=\"passwd\" type=\"password\"> <button onclick=\"submit()\">OK</button></p>";
    document.body.appendChild (div);
    document.body.appendChild (auth);
}

var emails = "camille.truffa@gmail.com, cecile.lemaitre74@gmail.com, dfober@gmail.com, rufino.f@hotmail.fr, Femie@querite.com, zab.dreizehn@orange.fr, cochat.jean-claude@orange.fr, jmbrouillard@orange.fr, jsphlemaitre@gmail.com, mlpayett@orange.fr, mpcanard@orange.fr, marion.ravussin@gmail.com, myriam54declercq@gmail.com, patduvert@hotmail.fr";
function toClip(button) {
	navigator.clipboard.writeText(emails);
    button.style.background = "lightgreen";
    setTimeout(function() {document.getElementById("TOCLIP").style.background = "#86d3ff"; }, 800); 
}

createmodal();
check();