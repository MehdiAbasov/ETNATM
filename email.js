const serviceId = "service_lfy7cue"
const templateId = "template_09sy0nk"
const publicKey = "XdGw_KZCJfxbKSAqO"

const myForm = document.getElementById('contactForm')
const btn = document.getElementById('btn')


myForm.addEventListener("submit", function (e) {
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
