const service_Id = "service_ccl90gb"
const template_Id = "template_pfoyonb"


function send(e) {
    e.preventDefault();

    emailjs.sendForm(service_Id, template_Id, this).then(
        () => {
            alert("sent");
        },
        (err) => {
            alert(JSON.stringify(err))
        }
    )
}
