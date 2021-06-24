import { baseUrl } from "./baseUrl";

const axios = require("axios")

function verifyIfLoggedInAlready(email,pcid){

    var base = baseUrl;
 
     const formData = new FormData();
     formData.append("email",email.toString())
     formData.append("pcid",pcid.toString())
 
     // Make a request 
    var response = axios.post(base+"controller/usercomputer",formData);
 
      return response.then(res=> res.data)
       .catch(error => [])
 }


 export {verifyIfLoggedInAlready} 