function send()  {
    var info={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        texarea:document.getElementById("msg").value

    }


const serviceid="service_izxn7ru";
const templateid="template_kycdk5a";
emailjs.send(serviceid,templateid,info)
.then(
    res=>{document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("subject").value="";
    document.getElementById("msg").value="";
    console.log(res)
    alert(" your message is sent successfully")


}

)


.catch((err)=>console.log(err))

}