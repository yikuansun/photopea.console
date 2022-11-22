var input = document.querySelector("#userText");
input.focus();
input.addEventListener("blur", function() { this.focus(); });
var output = document.querySelector("#existingText");

input.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        e.preventDefault();
        output.innerText += this.innerText + "\n";
        Photopea.runScript(window.parent, this.innerText).then(function(echoed) {
            output.innerText += echoed.join("\n") + "\n > ";
        });
        this.innerText = "";
    }
});