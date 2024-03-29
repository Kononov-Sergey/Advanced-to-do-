import { TodoStatusEnum } from "../utils/changeTodoStatus";

// this file is responsible of any interaction with server (api so to say)
// so get post delete patch, these all methods are here

export interface TodoInteface {
  id: string;
  topic: string;
  text: string;
  status: TodoStatusEnum;
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
export type addSubtaskArgumentType = {
  todoId: string;
  subtaskData: SubtaskInteface;
};

export async function addSubtask(subtaskInfo: addSubtaskArgumentType) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Subtasks/${subtaskInfo.todoId}.json`,
    {
      method: "POST",
      body: JSON.stringify(subtaskInfo.subtaskData),
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
  const responseTodo = await fetch(`${FIREBASE_DOMAIN}/Todos/${TodoId}.json`, {
    method: "DELETE",
  });
  const responseSubtask = await fetch(
    `${FIREBASE_DOMAIN}/Subtasks/${TodoId}.json`,
    {
      method: "DELETE",
    }
  );

  const dataTodo = await responseTodo.json();
  const dataSubtask = await responseSubtask.json();

  if (!responseTodo.ok) {
    throw new Error(dataTodo.message || "Could not delete todo.");
  }

  if (!responseSubtask.ok) {
    throw new Error(dataSubtask.message || "Could not delete subtask.");
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
