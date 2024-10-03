function scheduleDemo() {
    // Open a mailto link to schedule a demo
    window.location.href = "mailto:AdjusterConsole@gmail.com?subject=Schedule a Demo&body=I'd like to schedule a demo for the AdjusterConsole program.";
}


// Adding fade-in effect to text blocks
document.addEventListener('DOMContentLoaded', () => {
    const textBlocks = document.querySelectorAll('.text-block');
    textBlocks.forEach((block, index) => {
        setTimeout(() => {
            block.classList.add('fade-in');
        }, index * 300); // Staggered fade-in effect
    });
});

function toggleForm() {
    const form = document.getElementById("scheduleForm");
    form.classList.toggle("show"); // Toggles visibility and animation
}

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const time = document.getElementById("time").value;

    const subject = encodeURIComponent("Demo Request");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPreferred Time: ${time}`);
    const mailtoLink = `mailto:AdjusterConsole@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink; // Redirect to the email client

    // Optionally, close the form after submission
    toggleForm();
}
  

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
        let costPerUser;
        let users;
        
        if (employees >= 1 && employees <= 50) {
            costPerUser = 499;
            users = 50;
        } else if (employees >= 51 && employees <= 200) {
            costPerUser = 470;
            users = 200;
        } else {
            costPerUser = 440;
            users = employees;
        }

        // Estimate savings and cost
        const saveEstimate = employees * 3744;
        const annualCost = users * costPerUser;
        const profit = saveEstimate - annualCost;

        // Display the result
        setTimeout(() => {
            resultElement.innerHTML = `
                <p>Projected Annual Savings: $${saveEstimate.toLocaleString()}</p>
                <p>Annual Cost: $${annualCost.toLocaleString()}</p>
                <p>Net Profit (Savings - Cost): $${profit.toLocaleString()}</p>
            `;
            resultElement.style.opacity = '1';
        }, 200);
    }
});

	
	document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-scroll');

    const onScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);

    // Trigger on load for elements already in view
    onScroll();
});

document.getElementById('menu-toggle').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('active');

});

// Add event listeners to menu items to hide the dropdown when clicked
const menuItems = document.querySelectorAll('#dropdown-menu li a');

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        const dropdownMenu = document.getElementById('dropdown-menu');
        dropdownMenu.classList.remove('active'); // Hide the dropdown menu

    });
});

// Scroll back to the top when the button is clicked
document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});
