import dayjs from 'dayjs';

export function formatDateToEventDate(dateString) {
  const date = dayjs(dateString);
  return date.format('MMM D');
}

export function getIconForType(type) {
  return `./img/icons/${type}.png`;
}
export function formatTimeRange(dateString) {
  const date = dayjs(dateString);
  return date.format('HH:MM');
}
export function timeDifference(dateFrom,dateTo) {
  const dateFromDayJs = dayjs(dateFrom);
  const dateToDayJs = dayjs(dateTo);

  if (dateToDayJs.diff(dateFromDayJs,'years')) {
    return `${dateToDayJs.diff(dateFromDayJs,'years')} Y`;
  }
  if (dateToDayJs.diff(dateFromDayJs,'days',true)) {
    return `${dateToDayJs.diff(dateFromDayJs,'days')} D`;
  }
  if (dateToDayJs.diff(dateFromDayJs,'hours')) {
    return `${dateToDayJs.diff(dateFromDayJs,'hours')} H`;
  }
  if (dateToDayJs.diff(dateFromDayJs,'minutes')) {
    return `${dateToDayJs.diff(dateFromDayJs,'minutes')} M`;
  }
  // export function convertDateFormatToSlash(inputDate) {
  //   const originalDate = dayjs(inputDate);
  //   return originalDate.format('DD/MM/YY HH:mm');
  // }
}
