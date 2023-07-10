import React, { useState } from "react";
import Heading from "./Heading";

const Contacts = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  let name,value;
  const postUserData = (event)=>{
    name=event.target.name;
    value=event.target.value;

    setUserData({...userData,[name]:value});
  };

  // connect with firebase
  const submitData = async(event)=>{
    event.preventDefault();
    const {name, email, subject, message} = userData;

    if(name && email && subject && message){
    const res = await fetch(
      'https://portfoliowebsite-20877-default-rtdb.firebaseio.com/userDataRecords.json',{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email, 
          subject, 
          message,
        }),
      }
      );
      if(res){
        setUserData({
          name: "",
          email: "",
          subject: "",
          message: "",
      });
      alert("Your message is recieved successfully");
      }
      else{
        alert("Please fill the form again!");
      }
    }

    else{
      alert("Please fill the form!");
    }
  };
  return (
    <section className="container mx-auto w-[380px] md:w-[450px] px-4 py-10" id="contacts">
      <Heading title="Contact Me" />

      <form method="POST" className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="inputStyle"
            value={userData.name}
            onChange={postUserData}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="inputStyle"
            value={userData.email}
            onChange={postUserData}
            required
          />
          {/* <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="inputStyle"
            value={userData.phone}
            onChange={postUserData}
            pattern="+91-[0-9]{5}-[0-9]{5}"
            required
          />
           */}
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="inputStyle"
          value={userData.subject}
          onChange={postUserData}
          required
        />
        <textarea
          rows="6"
          name="message"
          placeholder="Message"
          className="inputStyle"
          value={userData.message}
          onChange={postUserData}
          required
        ></textarea>

        <div>
          <button type="submit" className="btn" onClick={submitData}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
