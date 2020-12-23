/**
 * Reference : https://www.hackerrank.com/challenges/time-conversion/problem
 */
function timeConversion(s) {
    // Split by AM or PM. time and 
    const [time ,timeOfDay] = s.split(/(PM|AM)/);
    
     // Split by hour, minute and second and convert to number
     let [hour, minute, second] = time.split(':').map((number,index)=>{
         return parseInt(number);
     });
     
     
      // Will add 12 to 12AM and all PM hour slots other than 12PM 
      // and taken modulus with 24
     if (
         (timeOfDay === 'PM' && hour < 12) || 
         (timeOfDay === 'AM' && hour === 12)
         )
       hour = (hour + 12) % 24; 
     
      // If hour value < 10, 0 needs to be appended for formatting.
      // 00:00:00
      if (hour < 10)
          hour = '0' + hour;
      if (minute < 10)
          minute = '0' + minute;
      if (second < 10)
          second = '0' + second;
    
     let finalString = `${hour}:${minute}:${second}`
     return finalString;     
}