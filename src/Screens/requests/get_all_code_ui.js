import { baseUrl } from "./baseUrl";

const axios = require("axios");

function getCodes(framework){

  //console.log(framework);
   var base = baseUrl;

   const formData = new FormData();
  //  console.log(formData.keys);
   formData.append("framework",framework.toString())

    // Make a request 
   var response = axios.post(base+"view/allcodes",formData);

     return response.then(res=>res.data)
      .catch(error => [])
}

function getCodeById(name,id){

   var base = baseUrl;

    const formData = new FormData();
    formData.append("name",name.toString())
    formData.append("id",id.toString())

    // Make a request 
   var response = axios.post(base+"controller/specificcode",formData);

     return response.then(res => {
      //  console.log(res);
     return res.data})
      .catch(error => [])
}



function searchWidget(widgetname,framework){

   var base = baseUrl;

    const formData = new FormData();
    formData.append("q",widgetname.toString())
    formData.append("framework",framework.toString())

    // Make a request 
   var response = axios.post(base+"controller/search",formData);

     return response.then(res=> res.data)
      .catch(error => [])
}


export {
  getCodes,getCodeById,searchWidget
}