document.getElementById('sendBtn').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const mi = document.getElementById('mi').value;
    const lastName = document.getElementById('lastName').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;

    const sports = [];
    document.querySelectorAll('input[name="sports"]:checked').forEach(sport => {
        sports.push(sport.value);
    });

    const selectedYear = document.querySelector('input[name="year"]:checked')?.value || 'None selected';

    const selectedFood = document.getElementById('food').value;

    const comments = document.getElementById('commentBox').value;

    const message = `
        First Name: ${firstName}
        MI: ${mi}
        Last Name: ${lastName}
        City: ${city}
        State: ${state}
        Zip Code: ${zipCode}
        Sports: ${sports.length > 0 ? sports.join(', ') : 'None selected'}
        Year: ${selectedYear}
        Favorite Food: ${selectedFood}
        Comments: ${comments || 'No comments'}
    `;

    alert(message);
    
    document.getElementById('surveyForm').reset();
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('surveyForm').reset();
});