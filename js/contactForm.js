window.addEventListener('load', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        console.log("THE FORM HAS BEEN SUBMITTED");
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById('contact-form').style.display = 'none';
                document.getElementById('thank-you').style.display = 'block';
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('form-errors').innerText = 'There was an error in sending your message: ' + error;
            });
    });
});