document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Maths',
        start: '2026-02-02',
        color: '#4CAF50'
      },
      {
        title: 'Anglais',
        start: '2026-02-05',
        color: '#2196F3'
      }
    ]
  });

  calendar.render();
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  const responses = [
    "Essaie de découper ton travail en petites sessions ⏱️",
    "Commence par la tâche la plus difficile 💪",
    "Pense à faire des pauses régulières ☕",
    "Tu es sur la bonne voie, continue 🌟"
  ];

  const reply = responses[Math.floor(Math.random() * responses.length)];

  chat.innerHTML += `<p><strong>Toi :</strong> ${input.value}</p>`;
  chat.innerHTML += `<p><strong>Assistant :</strong> ${reply}</p>`;

  input.value = "";
}
