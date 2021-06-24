import { baseUrl } from "./baseUrl";

const axios = require("axios")

function sendAdminEmail(name,email,message){

    var base = baseUrl;
 
     const formData = new FormData();
     formData.append("name",name.toString())
     formData.append("email",email.toString())
     formData.append("message",message.toString())
 
     // Make a request 
    var response = axios.post(base+"controller/adminMessage",formData);
 
      return response.then(res=> res.data)
       .catch(error => [])
 }


 export {sendAdminEmail} 