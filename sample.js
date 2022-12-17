document.getElementById("add").onclick = function () {
  document.getElementById("task").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#newtask input").value}
              </span>
              <button class="delete">
                  X
              </button>
          </div>
      `;

  var pending_tasks = document.getElementsByClassName("delete");
  for (var i = 0; i < pending_tasks.length; i++) {
    pending_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
