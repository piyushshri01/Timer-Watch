function date(){
    let html;
    let datePicker =  new Date();
    let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // let time = {
    //     d0: datePicker.getDay(),
    //     d1: datePicker.getMonth(),
    //     d2: datePicker.getFullYear(),
    //     d3: datePicker.getHours(),
    //     d4: datePicker.getMinutes(),
    //     d5: datePicker.getSeconds()
         
    // }
    //    html = `<h1> ${time.d0} - ${month[time.d1-1]} - ${time.d2} \ ${time.d3} : ${time.d4} :${time.d5} </h1>`; 
         html = `<h1> ${datePicker.getDate()} - ${month[datePicker.getMonth()]} - ${datePicker.getFullYear()} \ ${datePicker.getHours()} : ${datePicker.getMinutes()} : ${datePicker.getSeconds()} </h1> `;
         document.querySelector('.date').innerHTML = html;
               
    }
    setInterval(date, 1000);
