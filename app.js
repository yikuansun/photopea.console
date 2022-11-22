var input = document.querySelector("#userText");
input.focus();
input.addEventListener("blur", function() { this.focus(); });