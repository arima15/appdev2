document.getElementById('service-select').addEventListener('change', function() {
    const selectedService = this.value;
    const serviceDescription = document.getElementById('service-description');

    switch (selectedService) {
        case 'consultation':
            serviceDescription.innerHTML = 'Consult with a Dentist<br>Duration: 1 hour<br>Price: $100';
            break;
        case 'cleaning':
            serviceDescription.innerHTML = 'Teeth Cleaning<br>Duration: 30 minutes<br>Price: $75';
            break;
        case 'whitening':
            serviceDescription.innerHTML = 'Teeth Whitening<br>Duration: 1 hour<br>Price: $150';
            break;
        case 'extraction':
            serviceDescription.innerHTML = 'Tooth Extraction<br>Duration: 45 minutes<br>Price: $120';
            break;
        default:
            serviceDescription.innerHTML = 'Select a service to see details.';
    }
});