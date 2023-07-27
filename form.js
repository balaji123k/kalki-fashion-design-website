

const itemid = document.getElementById('itemid');
itemid.value=localStorage.getItem("id");

const formvalue = document.getElementById('getformvalue');
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(formvalue.elements['itemid'].value)
  console.log(formvalue.elements['email'].value)
    const now = new Date(); // current date and time in local time zone
    const offset = 330; // offset in minutes (5:30 hours = 5 * 60 + 30 = 330 minutes)
    const createdAt = new Date(now.getTime() + offset * 60 * 1000);

  let data={
    "name":formvalue.elements['itemid'].value,
    "email":formvalue.elements['email'].value,
    "phone" :formvalue.elements['phone'].value,
    "handlength":formvalue.elements['handlength'].value,
    "handwidth":formvalue.elements['handwidth'].value,
    "bodylength" :formvalue.elements['bodylength'].value,
    "bodywidth":formvalue.elements['bodywidth'].value,
    "shoulderlength":formvalue.elements['shoulderlength'].value,
    "neckwidth" :formvalue.elements['neckwidth'].value,
    "createdAt" : createdAt,
  }


  async function func(){
      
    console.log("func",data);
    const response = await fetch("http://localhost:3000/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
     console.log(response);
     const deliveryDate = new Date(createdAt);
     deliveryDate.setDate(deliveryDate.getDate() + 12);
     const monthYear = deliveryDate.toLocaleString('default', { month: 'long', year: 'numeric' });
 
     // Display the delivery date
     window.alert(`You have placed your order successfully!\nYour order will be delivered on ${deliveryDate.toDateString()}`);
 
    //  window.alert(`You have successfully placed your order!\nYour ordered will be placed on ${deliveryDate} + ${deliveryDate.}`)
  }
    func()
});