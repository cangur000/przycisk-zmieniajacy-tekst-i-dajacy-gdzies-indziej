let przycisk = document.getElementById("przycisk");
let textarea = document.getElementById("mytextarea");

document.getElementById("przycisk").onclick = function aaa() {
    let tekst = textarea.value;
    document.getElementById("miejsce").textContent = tekst;
} 