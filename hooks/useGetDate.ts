export const useGetDate = (): string => {
  const date = new Date();
  const day: string = date.getDate().toString().padStart(2, "0");
  const month: string = (date.getMonth() + 1).toString().padStart(2, "0");
  const year: string = date.getFullYear().toString();
  const currentDate = day + "/" + month + "/" + year;

  return currentDate;
};
