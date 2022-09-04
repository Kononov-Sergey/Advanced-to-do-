export enum TodoStatus {
  pending = "PENDING",
  inProgress = "IN_PROGRESS",
  done = "DONE",
}

export default function changeTodoStatus(status: TodoStatus) {
  if (status === TodoStatus.pending) return TodoStatus.inProgress;
  return TodoStatus.done;
}
