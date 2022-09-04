export enum TodoStatusEnum {
  pending = "PENDING",
  inProgress = "IN_PROGRESS",
  done = "DONE",
}

export default function changeTodoStatus(status: TodoStatusEnum) {
  if (status === TodoStatusEnum.pending) return TodoStatusEnum.inProgress;
  return TodoStatusEnum.done;
}
