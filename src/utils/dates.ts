export const getDate = (withTime: boolean) => {
    const todayDate = new Date();
    let today: string;
    const dd = String(todayDate.getDate()).padStart(2, '0');
    const mm = String(todayDate.getMonth() + 1).padStart(2, '0');
    const yyyy = todayDate.getFullYear();
    const hours = String(todayDate.getHours()).padStart(2, '0');
    const minutes = String(todayDate.getMinutes()).padStart(2, '0');
    const seconds = String(todayDate.getSeconds()).padStart(2, '0');

    today = yyyy + '-' + mm + '-' + dd;

    if (withTime) {
        today += ' ' + hours + ':' + minutes + ':' + seconds;
    }

    return today;
}