
function storeUserEmailPcid(pcid,email){
    window.localStorage.setItem("widgetSource_pcid",`${pcid}`);
    window.localStorage.setItem("widgetSource_email",`${email}`);
}


function storeUsernameAndUid(name,uid){
    window.localStorage.setItem("widgetSource_username",`${name}`);
    window.localStorage.setItem("widgetSource_uid",`${uid}`);
}


function getStoredKey(id){

   var varr = window.localStorage.getItem(`${id}`);
   return varr;

}

export {storeUserEmailPcid,getStoredKey,storeUsernameAndUid}