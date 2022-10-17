//CAMBIA USUARIO ACTIVO EN MENU LATERAL
function showUser(userInfo,userForChange){
    let userName = userInfo[0].getElementsByClassName("userName");
    imageName=userForChange.children[1].children[0].textContent.replace(/\s+/g, '');
    imageName=removeAccents(imageName);
    userImage = userInfo[0].getElementsByClassName("photos");
    userName[0].textContent=userForChange.children[1].children[0].textContent;
    userImage[0].src="http://127.0.0.1:5500/assets/img/"+imageName+".jpg";

}

//HABILITA AREA DE CHAT CON USUARIO ACTIVO
function showChatArea(){
    const chatArea=document.getElementsByClassName("areaChat");
    const imageArea=document.getElementsByClassName("imgUserActive");
    const activeUser=document.getElementsByClassName("userName");
    const statusUser=document.getElementsByClassName("text-secondary");
    cleanChatArea();
    chatArea[0].style.display='flex';
    chatArea[0].style.flexDirection='column';
    chatArea[0].style.justifyContent='space-between';
    chatArea[0].style.alignItem='baseline';
    chatArea[0].children[0].style.display='flex';
    chatArea[0].children[0].children[0].setAttribute('src',imageArea[0].currentSrc);
    chatArea[0].children[0].children[1].children[0].textContent=activeUser[0].textContent;
    chatArea[0].children[0].children[1].children[1].textContent=statusUser[0].textContent;
}

//ELIMINA MENSAJES DE USUARIO ACTIVO ANTERIOR
function cleanChatArea(){
    const chatArea=document.getElementsByClassName("talkSpace");
    if (chatArea[0].childElementCount==0){
        return false;
    }else{
        let messages=chatArea[0].getElementsByClassName("userMessage");
        let sizeMessages=messages.length;
         for (let index = sizeMessages-1; index >= 0; index--) {
           messages[index].parentNode.removeChild(messages[index]);
        }
        document.getElementById("message").value="Escriba su mensaje...";
    }
}

//INSERTA MENSAJES EN EL AREA DE CHAT
function sendMessage(){
    const message=document.getElementById("message");
    const chatArea=document.getElementsByClassName("talkSpace");
    const newP=document.createElement("p");
    newP.textContent=message.value;
    newP.className="userMessage bg-secondary text-light p-2 me-3 rounded-pill";
    chatArea[0].appendChild(newP);
    chatArea[0].style.display='flex';
    chatArea[0].style.flexDirection='column';
    chatArea[0].style.marginTop='auto';
    chatArea[0].style.alignItems='end';
    document.getElementById("message").value="";

}

//DETECTA PRESION EN TECLA ENTER Y LLAMA A FUNCION QUE ENVIA MENSAJES
function keyPress(e)
{
    if (window.event) {keyval=e.keyCode}
    else
        if (e.which) {keyval=e.which}
    if (keyval=="13") {
        e.preventDefault();
        sendMessage();
    }
}

//ESCONDE PANTALLA DE BIENVENIDA
function hide(className) {
    div = document.getElementsByClassName(className);
    div[0].style.display= 'none';
}

//LLAMA A FUNCION PARA CAMBIAR USUARIO ACTIVO EN MENU LATERAL
function toogle(onClickUser){
    activeUser=document.getElementsByClassName("userId");
    showUser(activeUser,onClickUser);
}

//HABILITA EL AREA DE CHAT DINAMICA
function chatArea(){
    let
    general=document.getElementsByClassName("general");
    hide("general");
    showChatArea();
}

//LIMPIA INPUT TEXT AL HACER CLICK
function cleanMessageBox(){
    if (document.getElementById("message").value=="Escriba su mensaje..."){
        document.getElementById("message").value=""
    }
}

//FUNCION PARA REMOVER TILDES
function removeAccents(word) {
    let name=word.replace("Á", "A")
            .replace("É", "E")
            .replace("Í", "I")
            .replace("Ó", "O")
            .replace("Ú", "U")
            .replace("á", "a")
            .replace("é", "e")
            .replace("í", "i")
            .replace("ó", "o")
            .replace("ú", "u");
    return name;
}