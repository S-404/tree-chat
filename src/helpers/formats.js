export const pad = (num, places) => String(num).padStart(places, '0');

export const datetimeFormat = (date)=>{

    let d = new Date(date);
    d.setHours(d.getHours() + d.getTimezoneOffset() / 60)
    let DD = pad(d.getDate(),2) ;
    let MM = pad(d.getMonth()+1,2) ;
    let yyyy = String (d.getFullYear()).substring(2);
    let HH = pad(d.getHours(), 2);
    let mm = pad(d.getMinutes(), 2);

    return `${MM}.${DD}.${yyyy} ${HH}:${mm}`
}