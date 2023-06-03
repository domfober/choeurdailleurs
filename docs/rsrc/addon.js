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


createmodal();
check();