export default function changeTodoStatus(status) {
  if (status === "PENDING") return "IN_PROGRESS";
  return "DONE";
}
