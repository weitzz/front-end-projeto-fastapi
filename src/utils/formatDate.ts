
export const formatDate = (data : string) => {
    const originalDate = new Date(data);
    
     const day = originalDate.getDate();
     const month = originalDate.getMonth() + 1;
     const year = originalDate.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate
    
}