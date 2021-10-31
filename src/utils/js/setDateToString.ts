export const setDateToString = (datestring: number) => {
    const date = new Date(datestring*1000);

    return `${date.getDate()} ${date.toLocaleString(`ru`, {month: `long`})} ${date.getFullYear()}`;
};