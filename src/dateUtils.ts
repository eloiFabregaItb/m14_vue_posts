export function formatTimestamp(timestamp: number): string {
  const now = new Date();
  const date = new Date(timestamp);

  const isSameDay = now.toDateString() === date.toDateString();
  const isYesterday = new Date(now.setDate(now.getDate() - 1)).toDateString() === date.toDateString();
  const isTomorrow = new Date(now.setDate(now.getDate() + 2)).toDateString() === date.toDateString();

  if (isSameDay) {
    return `today at ${formatTime(date)}`;
  } else if (isYesterday) {
    return `yesterday at ${formatTime(date)}`;
  } else if (isTomorrow) {
    return `tomorrow at ${formatTime(date)}`;
  } else if (now.getFullYear() === date.getFullYear()) {
    return `${formatDate(date)} at ${formatTime(date)}`;
  } else {
    return `${formatDate(date, true)} at ${formatTime(date)}`;
  }
}

function formatDate(date: Date, includeYear: boolean = false): string {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}${includeYear ? `/${year}` : ''}`;
  return formattedDate;
}

function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  return formattedTime;
}