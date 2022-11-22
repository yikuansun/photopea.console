var input = document.querySelector("#userText");
input.focus();
input.addEventListener("blur", function() { this.focus(); });
var output = document.querySelector("#existingText");

input.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        e.preventDefault();
        output.innerText += this.innerText + "\n > ";
        this.innerText = "";
    }
});