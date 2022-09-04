import { TodoStatus } from "../utils/changeTodoStatus";

export interface TodoInteface {
  id: string;
  topic: string;
  text: string;
  status: TodoStatus;
}

export interface SubtaskInteface {
  text: string;
}

const FIREBASE_DOMAIN =
  "https://react-router-bd9e9-default-rtdb.europe-west1.firebasedatabase.app/";

export async function getAllTodos() {
  const response = await fetch(`${FIREBASE_DOMAIN}/Todos.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch todos.");
  }

  const transformedTodos: TodoInteface[] = [];

  for (const key in data) {
    const TodoObj = {
      id: key,
      ...data[key],
    };

    transformedTodos.push(TodoObj);
  }

  return transformedTodos;
}

export async function getSingleTodo(TodoId: string) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Todos/${TodoId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch todo.");
  }

  const loadedTodo: TodoInteface = {
    id: TodoId,
    ...data,
  };

  return loadedTodo;
}

export async function addTodo(TodoData: TodoInteface) {
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
type addSubtaskArgumentType = { todoId: string; subtaskText: SubtaskInteface };

export async function addSubtask(subtaskData: addSubtaskArgumentType) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Subtasks/${subtaskData.todoId}.json`,
    {
      method: "POST",
      body: JSON.stringify(subtaskData.subtaskText),
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

export async function getAllSubtasks(TodoId: string) {
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

export async function deleteTodo(TodoId: string) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Todos/${TodoId}.json`, {
    method: "DELETE",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not delete todo.");
  }

  return null;
}

export async function updateTodo(requestData: TodoInteface) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Todos/${requestData.id}.json`,
    {
      method: "PATCH",
      body: JSON.stringify({
        text: requestData.text,
        topic: requestData.topic,
        status: requestData.status,
      }),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not update todo.");
  }

  return null;
}
