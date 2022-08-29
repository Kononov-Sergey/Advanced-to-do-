const FIREBASE_DOMAIN =
  "https://react-router-bd9e9-default-rtdb.europe-west1.firebasedatabase.app/";

export async function getAllTodos() {
  const response = await fetch(`${FIREBASE_DOMAIN}/Todos.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch todos.");
  }

  const transformedTodos = [];

  for (const key in data) {
    const TodoObj = {
      id: key,
      ...data[key],
    };

    transformedTodos.push(TodoObj);
  }

  return transformedTodos;
}

export async function getSingleTodo(TodoId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Todos/${TodoId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch todo.");
  }

  const loadedTodo = {
    id: TodoId,
    ...data,
  };

  return loadedTodo;
}

export async function addTodo(TodoData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Todos.json`, {
    method: "POST",
    body: JSON.stringify(TodoData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create todo.");
  }

  return null;
}

export async function addSubtask(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Subtasks/${requestData.TodoId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.SubtaskData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add subtask.");
  }

  return { SubtaskId: data.name };
}

export async function getAllSubtasks(TodoId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Subtasks/${TodoId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get subtasks.");
  }

  const transformedSubtasks = [];

  for (const key in data) {
    const SubtaskObj = {
      id: key,
      ...data[key],
    };

    transformedSubtasks.push(SubtaskObj);
  }

  return transformedSubtasks;
}
