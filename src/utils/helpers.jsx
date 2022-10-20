import React from "react";

export function formatDate(strDate) {
  const date = new Date(strDate);
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export const getArrayFromString = (str, separator) => {
  return str.split(separator);
}
export const swip = () => {}

export const getStartingIndex = (children, defaultIndex)=> {
  if (defaultIndex && defaultIndex < React.Children.count(children)) {
    return defaultIndex;
  }
  return 0;
};
