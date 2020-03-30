class api {
  getAllTasks() {
    return $.ajax({
      url: "../../../mockApi/tasks.json",
      method: "Get"
    });
  }
}

const API = new api();
