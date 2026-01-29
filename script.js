function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("p");
  userMsg.textContent = "👤 " + input.value;
  chatbox.appendChild(userMsg);

  const botMsg = document.createElement("p");
  botMsg.className = "bot";
  botMsg.textContent = "🤖 Conseil : fais une tâche à la fois et prends des pauses régulières.";
  chatbox.appendChild(botMsg);

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}
