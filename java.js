const conversionRates = {
    length: {
        meter: 1,
        millimetre: 1000,
        decimetre: 10,
        decametre: 0.1,
        kilometre: 0.001,
        foot: 3.28084,
        mile: 0.000621371
    },
    weight: {
        gram: 1,
        decigram: 10,
        kilogram: 0.001,
        milligram: 1000,
        centigram: 100,
        hectogram: 0.01
    },
    time: {
        minute: 1,
        hour: 1 / 60,
        day: 1 / 1440,
        week: 1 / 10080,
        year: 1 / 525600
    }
};

function convert() {
    let inputElements = document.querySelectorAll('.container');
    inputElements.forEach(container => {
        let inputValue = container.querySelector('input').value;
        let fromUnit = container.querySelectorAll('select')[0].value;
        let toUnit = container.querySelectorAll('select')[1].value;
        let category = Object.keys(conversionRates).find(cat => fromUnit in conversionRates[cat]);
        
        if (inputValue && category) {
            let result = (inputValue * conversionRates[category][toUnit]) / conversionRates[category][fromUnit];
            container.querySelector('#result').textContent = `  ${result.toFixed(6)}`;
        }  
    });
}