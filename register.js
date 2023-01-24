const serviceId = "service_kjmb127";
const templateId = "template_9r1c2xu";

const myForm = document.getElementById('qeydiyyatform');
const btn = document.getElementById('regbtn');

myForm.addEventListener('submit', function (e) {

    e.preventDefault();
    btn.value = "sending...";

    emailjs.sendForm(serviceId, templateId, this).then(
        () => {
            btn.value = "send";
            alert("sent");
        },
        (err) => {
            alert(JSON.stringify(err))
        }
    )
});

