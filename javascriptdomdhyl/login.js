let img = new Image();
let lol = document.querySelector("div");

img.onload = function() {
  lol.appendChild(img)
}

img.src = 'vscode.png'

function login(usn,pass){
  document.write("-------------------<p>")
  document.write("-------LOGIN-------<p>")
  document.write("-------------------<p>")
  document.write("username :" + usn)
  document.write("<p>password: " + pass)
}

login("dhiyaul","*******")