
document.addEventListener("DOMContentLoaded", function () {

  const calendarEl = document.getElementById("calendar");

  // sécurité : si on n'est pas sur la page planner
  if (!calendarEl) return;

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    height: "100%",
    selectable: true,

    dateClick: function (info) {
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
