export function formatDate(strDate: string): string {
  const date: Date = new Date(strDate);
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function getArrayFromString(str: string, separator:string): string[] {
  return str.split(separator);
}