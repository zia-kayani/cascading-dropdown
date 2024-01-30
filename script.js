const countryStateCityData = {
    pakistan: {
        punjab: ['Lahore', 'Rawalpindi'],
        sindh: ['Karachi', 'Hyderabad'],
        kpk: ['Peshawar', 'Abbottabad'],
    },
    india: {
        maharashtra: ['Mumbai', 'Pune'],
        tamilnadu: ['Chennai', 'Coimbatore'],
        karnataka: ['Bangalore', 'Mysore'],
    },
    china: {
        beijing: ['Beijing City'],
        shanghai: ['Shanghai City'],
        guangdong: ['Guangzhou', 'Shenzhen'],
    },
};

const outputDiv = document.getElementById('outputDiv');

function populateStates() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const selectedCountry = countrySelect.value;
    

    // Clearing the existing options
    stateSelect.innerHTML = '<option value="">Select State</option>';

    // Populating the states based on the selected country
    for (const state in countryStateCityData[selectedCountry]) {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    }

    // Triggering the population of the cities based on the selected state by calling the populateCities() function 
    populateCities();
}

function populateCities() {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const selectedCountry = document.getElementById('country').value;
    const selectedState = stateSelect.value;
    const selectedCity = citySelect.value;

    // Clearing existing options
    citySelect.innerHTML = '<option value="">Select City</option>';

    // Populating cities based on the selected country and state
    const cities = countryStateCityData[selectedCountry][selectedState] || [];
    for (const city of cities) {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    }

    document.getElementById('city').addEventListener('change', populateCities);

    outputDiv.textContent = `
    Country: ${selectedCountry}
    State: ${selectedState}
    City: ${selectedCity}
    `;
}