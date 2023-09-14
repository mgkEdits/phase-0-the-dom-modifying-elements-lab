// Write your code here!
main.remove();


const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory")
const newContent = document.createTextNode("Elijah Nyasiando is the champion");
newHeader.appendChild(newContent);
document.body.append(newHeader);

