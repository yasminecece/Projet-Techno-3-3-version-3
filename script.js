document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    dateClick: function(info) {
      const title = prompt("Nom de l'évènement ?");
      if (title) {
        calendar.addEvent({
          title: title,
          start: info.dateStr
        });
      }
    }
  });

  calendar.render();
});

function sendMessage() {
  const chat = document.getElementById("chat");
  const input = document.getElementById("userInput");

  const responses = [
    "Commence par la tâche la plus difficile 💪",
    "Découpe ton travail en petites étapes ⏱️",
    "N'oublie pas de faire des pauses ☕",
    "Tu avances bien, continue 🌟"
  ];

  chat.innerHTML += `<p><b>Toi :</b> ${input.value}</p>`;
  chat.innerHTML += `<p><b>Assistant :</b> ${responses[Math.floor(Math.random()*responses.length)]}</p>`;
  input.value = "";
}
