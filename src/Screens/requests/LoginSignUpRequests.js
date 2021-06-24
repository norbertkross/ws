import { baseUrl } from "./baseUrl";

const axios = require("axios")


    function register(username,email,password){
        var base = baseUrl;

        
        const formData = new FormData();
        formData.append("username",username.toString())
        formData.append("email",email.toString())
        formData.append("password",password.toString())

        
        // Make a request 
        var response = axios.post(base+"controller/register",formData);

        return response.then(res=> res.data)
            .catch(error => [])
    
    }



    function loginUserRequest(nameEmail,password){

        var base = baseUrl;
        
        const formData = new FormData();
        formData.append("unameEmail",nameEmail.toString())
        formData.append("password",password.toString())

    
            // Make a request 
        var response = axios.post(base+"controller/login",formData);

        return response.then(res=> res.data)
            .catch(error => [])

    }




export {register,loginUserRequest}