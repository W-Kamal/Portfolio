import React, { ReactNode } from 'react';

export function formatDate(strDate: string): string {
  const date: Date = new Date(strDate);
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export const getArrayFromString = (str: string, separator: string): string[] => {
  return str.split(separator);
}
export const swip = () => {}

export const getStartingIndex = (children: ReactNode, defaultIndex?: number): number => {
  if (defaultIndex && defaultIndex < React.Children.count(children)) {
    return defaultIndex;
  }
  return 0;
};
