let item;
let pos = 0;
document.getElementById('listadder').onclick = function(){
    item = document.getElementById('listitem').value;
    document.getElementById('list').innerHTML += "<ul id='"+pos+"'><h3><button id='deletebtn'>"+pos+"</button>" + item+ "</h3></ul>"
    pos++
}

document.getElementById('listitem').onclick = function(){
    document.getElementById('listitem').value = ''
}
