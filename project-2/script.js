// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  } else if (!validateEmail(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    contactForm.reset();
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// To-Do List Logic
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const taskDueDate = document.getElementById('taskDueDate');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = todoInput.value.trim();
  const dueDate = taskDueDate.value;

  if (task !== "" && dueDate !== "") {
    addTask(task, dueDate);
    todoInput.value = "";
    taskDueDate.value = "";
  }
});

function addTask(task, dueDate) {
  const li = document.createElement('li');
  li.textContent = `${task} (Due: ${new Date(dueDate).toLocaleDateString()})`;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = "X";
  removeBtn.onclick = function() {
    todoList.removeChild(li);
  };

  li.appendChild(removeBtn);
  todoList.appendChild(li);
}

