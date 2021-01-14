const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const formatTime = (date: Date): string => {
  return `${date.getHours().toString()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

export const formatShortDate = (date: Date): string => {
  return `${date.getDate().toString()}/${(date.getMonth()+1).toString()}/${date.getFullYear().toString()}`;
}

export const formatMidDate = (date: Date): string => {
  return `${days[date.getDay()].substr(0, 3)} ${date.getDate().toString()} ${months[date.getMonth()].substr(0, 3)} ${date.getFullYear().toString()}`;
}

export const formatLongDate = (date: Date): string => {
  return `${days[date.getDay()]} ${date.getDate().toString()} ${months[date.getMonth()]} ${date.getFullYear().toString()}`;
}

export const formatTotalDate = (strDate: string): string => {
  const date = new Date(strDate);
  return `${formatMidDate(date)} ${formatTime(date)}`;
}
