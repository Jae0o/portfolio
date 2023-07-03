export default function ChangeDate(value) {
  const date = new Date(value)
  const Years = date.getFullYear();
  const Month = date.getMonth();
  const Day = date.getDay();
  return `${Years}. ${Month}. ${Day}.`
}