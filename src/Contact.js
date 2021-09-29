import React, { useState } from "react"


const Contact=()=>{

  const [data,Setdata]=useState({
    fullname: " ",
    phone: " ",
    email: " ",
    message: " ",
  });
  const InputEvent=(event)=>{
    const {name,value}=event.target;


    Setdata((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      };
    });
  };

  const formsubmit=(e)=>{
    e.preventDefault();
    alert(
    `my name is ${data.fullname} my mobile is ${data.phone}`
    )
  }


  return(
    <>

<div className="my-5">
  <h1 className="text-center">
    contact us
  </h1>
  <div className="container contact_div">
<div className="col-md-6 col-10 mx-auto">


<form onSubmit={formsubmit}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="email" class="form-control" placeholder="full name"
  name="fullnam"
  value={data.fullname}
  onchange={InputEvent}
  
/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone No</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="phone no"
name="phone"
value={data.phone}
onchange={InputEvent}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onchange={InputEvent}
  placeholder="name@example
  .com"
  />
</div>



<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Send Feedback</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  name="message"
  value={data.message}
  onchange={InputEvent}
  ></textarea>
</div>

<div class="col-12">
  <button class="btn btn-outline-primary" type="submit"></button>
</div>


</form>



</div>

  </div>
</div>
    </>
  )
} 

export default Contact;