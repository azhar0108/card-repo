import React from "react";
import UserCard from "../Components/Card";
import './LandingPage.css';

const LandingPage=()=>{


  const data=[{
      name:"azhar",
      email:"azhar@mail.com"
  },{name:"idrisi",
email:"idrisi@mail.com"}];


  data.map((user,i)=>console.log(i,user.name));


 return(
    <div className="landing-page">
        {data.map((user)=>
        <div>
        <UserCard user={user} />
      <br/><br/>
      </div>
        )}
    
    </div>
 )
}

export default LandingPage;