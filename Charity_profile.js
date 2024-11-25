
const signUpButton = document.getElementById('sign-up-button');
const signUpSection = document.getElementById('sign-up-section');


signUpButton.addEventListener('click', () => {

    if (!document.getElementById('volunteer-form')) {

        const form = document.createElement('form');
        form.id = 'volunteer-form';


        form.innerHTML = `
            <h2>Volunteer Information</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone">
            <br>
            <button type="submit">Submit</button>
        `;


        signUpSection.appendChild(form);


        form.addEventListener('submit', (event) => {
            event.preventDefault();


            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;


            alert(`Thank you for signing up, ${name}! We will contact you at ${email}.`);


            form.reset();
        });
    }
});


///hover message
const charityName = document.getElementById('charity-name');
const hoverMessage = document.getElementById('hover-message');


charityName.addEventListener('mouseover', function() {
    hoverMessage.style.display = 'inline';
});


charityName.addEventListener('mouseout', function() {
    hoverMessage.style.display = 'none'; 
});