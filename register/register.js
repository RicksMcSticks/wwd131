document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    const addParticipantButton = document.getElementById('add-participant');
    const registrationForm = document.getElementById('registration-form');
    const participantsFieldset = document.getElementById('participants');
    const summarySection = document.getElementById('summary');
    const summaryMessage = document.getElementById('summary-message');

    // Participant Template Function
    function participantTemplate(count) {
        return `
            <section class="participant${count}">
                <label for="name${count}">Participant ${count} Name:</label>
                <input type="text" id="name${count}" name="name${count}" required><br><br>

                <label for="fee${count}">Fee:</label>
                <input type="number" id="fee${count}" name="fee${count}" required><br><br>
            </section>
        `;
    }

    // Add Participant Button Functionality
    addParticipantButton.addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        participantsFieldset.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    // Submit Form Functionality
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission (page reload)

        // Calculate the total fees
        const totalFee = totalFees();

        // Get the adult's name
        const adultName = document.getElementById('adult-name').value;

        // Display the summary message
        const info = {
            adultName: adultName,
            participantCount: participantCount,
            totalFee: totalFee
        };

        summaryMessage.innerHTML = successTemplate(info);

        // Hide the form and show the summary
        registrationForm.style.display = 'none';
        summarySection.style.display = 'block';
    });

    // Function to calculate the total fee
    function totalFees() {
        const feeElements = document.querySelectorAll("[id^=fee]");
        let total = 0;

        feeElements.forEach(fee => {
            total += parseFloat(fee.value) || 0;  // Add fee, if valid
        });

        return total.toFixed(2);
    }

    // Success message template
    function successTemplate(info) {
        return `Thank you ${info.adultName} for registering. You have registered ${info.participantCount} participants and owe $${info.totalFee} in Fees.`;
    }
});