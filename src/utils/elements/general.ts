export function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

export function getRelativeTime(formatter: any, date: string): string {
  return formatter.relativeTime(date);
}

export function getExperienceText(text: string): string {
  return text.length > 180 ? `${text.slice(0, 180)}...` : text;
}

export function getExperienceAverage(max: number, ratings: number[]): number {
  if (ratings.length === 0 || max === 0) {
    return 0;
  }
  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  const avg = sum / ratings.length;
  const normalized = (avg / max) * 5;
  return Number.parseFloat(normalized.toFixed(1));
}
