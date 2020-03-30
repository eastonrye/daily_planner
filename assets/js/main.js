const DATE_FORMAT = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const renderTaskList = list => {
  list.forEach(element => {
    const task = $("<li>").addClass(["task", "ui-state-default"]);

    const title = $("<h1>")
      .addClass("task-title")
      .text(element.title);

    const description = $("<p>")
      .addClass("task-description")
      .text(element.description);

    const date = $("<p>")
      .addClass("task-dueDate")
      .text(
        new Date(element.dueDate.$date).toLocaleString("en-US", DATE_FORMAT)
      );

    task.append([title, description, "<hr>", date]);

    $(".taskList").append(task);
  });

  $("#sortable1, #sortable2")
    .sortable({
      connectWith: ".connectedSortable",
      containment: ".taskLists-container"
    })
    .disableSelection();
};

$(document).ready(() => {
  $("#current-date").text(new Date().toLocaleString("en-US", DATE_FORMAT));

  API.getAllTasks().then(function(data) {
    renderTaskList(data);
  });
});
