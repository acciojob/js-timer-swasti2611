// write js code here if required
let p=document.getElementById("timer")
let date=new Date();
   const day=date.getDay();
   const month=date.getMonth();
   const year=date.getYear()

const hour=date.getHours()
const min=date.getMinutes();
const sec=date.getSeconds()


p.innerHTML=`
  <div>${day}/${month}/${year},${hour}:${min}:${sec}</div>

`