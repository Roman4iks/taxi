function formatDateTime(dateTimeString: string): string {
    const dateTime = new Date(dateTimeString);
    const day = dateTime.getDate();
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
  
    const formattedDate = `${day}.${month}.${year}`;
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
  
    return `${formattedDate} ${formattedTime}`;
}

export default formatDateTime