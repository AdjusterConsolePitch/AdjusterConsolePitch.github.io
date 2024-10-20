function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const time = document.getElementById("time").value;

    const subject = encodeURIComponent("Demo Request");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${time}`);
    const mailtoLink = `mailto:AdjusterConsole@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink; // Redirect to the email client

    // Optionally, close the form after submission
    toggleForm();
}

document.querySelector('.menu-icon').addEventListener('click', () => {
	document.querySelector('.nav-links-mobile').classList.toggle('active');
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    const employeesInput = document.getElementById('employees');
    const resultElement = document.getElementById('result');
    resultElement.style.opacity = '0';
    let employees = parseInt(employeesInput.value);

    if (!employees) {
        setTimeout(() => {
            resultElement.innerText = 'Enter estimated users';
            resultElement.style.opacity = '1';
        }, 200);
    } else {
        let costPerUser = 0;

		if (employees >= 1 && employees <= 50) {
			costPerUser = 42;
		} else if (employees >= 51 && employees <= 200) {
			costPerUser = 39;
		} else {
			costPerUser = 37;
		}
console.log('costPerUser',costPerUser);
		// Estimate savings and cost
		const saveEstimate = employees * 4992;
		console.log('saveEstimate',saveEstimate);
		const annualCost = employees * costPerUser * 12;
		console.log('annualCost',annualCost);
		const profit = saveEstimate - annualCost;
		console.log('profit',profit);

		// Calculate ROI
		const ROI = (profit / annualCost) * 100;
		console.log('ROI',ROI);

		// Display the result
		setTimeout(() => {
			resultElement.innerHTML = `
				<p>Projected Annual Savings: $${saveEstimate.toLocaleString()}</p>
				<p>Annual Cost: $${annualCost.toLocaleString()}</p>
				<p>Net Profit (Savings - Cost): $${profit.toLocaleString()}</p>
				<p>Return on Investment (ROI): ${ROI.toFixed(2)}%</p>
			`;
			resultElement.style.opacity = '1';
		}, 500);
    }
});

function demoReq() {
    // Display the form overlay by changing its display style
    document.getElementById('demoForm').style.display = 'flex';
}

function closeForm() {
    // Close the form overlay by hiding it
    document.getElementById('demoForm').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    
    // You can collect the form data here for further processing
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const companyName = document.getElementById('companyName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Do something with the form data (e.g., send it to a server)
    console.log({
        firstName,
        lastName,
        companyName,
        email,
        phone,
        message
    });

    // Close the form after submission
    closeForm();
}


/*function ignore() {
num_adjusters = 100
pay_per_hour = 26  # Average pay per adjuster per hour
benefits_percentage = 0.35  # Assume 35% for benefits and overhead
working_hours_per_day = 8
working_days_per_year = 250
productivity_increase = 0.10  // 10% increase in productivity
claims_per_adjuster_per_day = 15
program_costs = 200000 

# Calculate total compensation per adjuster (including benefits)
pay_per_day = pay_per_hour * working_hours_per_day
annual_base_salary = pay_per_day * working_days_per_year
annual_total_compensation_per_adjuster = annual_base_salary * (1 + benefits_percentage)

# Current total claims processed per day
current_total_claims = num_adjusters * claims_per_adjuster_per_day

# Increased claims due to productivity gain (10%)
additional_claims_per_adjuster = claims_per_adjuster_per_day * productivity_increase
total_additional_claims_per_day = additional_claims_per_adjuster * num_adjusters

# Annual total additional claims due to productivity increase
additional_claims_per_year = total_additional_claims_per_day * working_days_per_year

# Calculate how many adjusters' worth of work this saves
claims_per_adjuster_per_year = claims_per_adjuster_per_day * working_days_per_year
adjuster_savings = additional_claims_per_year / claims_per_adjuster_per_year

# Calculate the cost savings by avoiding hiring new adjusters
total_cost_savings = adjuster_savings * annual_total_compensation_per_adjuster

# Net benefit (cost savings from increased productivity - program costs)
net_program_value = total_cost_savings - program_costs

net_program_value
}*/