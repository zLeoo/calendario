const date = new Date();

const renderCalendar = () => {
  const monthDays = document.querySelector(".days");

  const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(),date.getMonth(), 0).getDate();

  const firstDay = date.getDay();

  const lastDayIndex =  new Date(date.getFullYear(),date.getMonth() + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;  

  const months = [
  
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const weekdays = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado-feira",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = weekdays[date.getDay()] + ', ' + date.getDate() + ' de ' + months[date.getMonth()] + ' de ' + date.getFullYear() ;
 
 
  let days = "";

  for(let x = firstDay; x > 0; x-- ){
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    
    
  };

  for(let i = 1;i <= lastDay; i++){
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`;
    }else {
      days += `<div>${i}</div>`;
    }
    
    
  };

  if(nextDays >= 1)
      {
          for(let j = 1; j <= nextDays; j++){
              days += `<div class="next-date" onclick="selected()">${j}</div>`;
              monthDays.innerHTML=days;
          }
      }
      else
      {
          for(let k = 0; k <= nextDays; k++){
              days += `<div class="invisible"></div>`;
              monthDays.innerHTML=days;
          }
      }

}

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
})

document.querySelector('.next').addEventListener('click',() => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
})    
renderCalendar();