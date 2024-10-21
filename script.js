function sendEmail(event) {
    event.preventDefault();
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${time}`);
    const mailtoLink = `mailto:Info@AdjusterConsole.com.com?subject=${subject}&body=${body}`;
   
    window.location.href = mailtoLink;
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
		const saveEstimate = employees * 5262;
		const annualCost = employees * costPerUser * 12;
		const profit = saveEstimate - annualCost;

		setTimeout(() => {
			resultElement.innerHTML = `
				<p>Projected Annual Savings: $${saveEstimate.toLocaleString()}</p>
				<p>Annual Cost: $${annualCost.toLocaleString()}</p>
				<p>Net Profit (Savings - Cost): $${profit.toLocaleString()}</p>
			`;
			resultElement.style.opacity = '1';
		}, 500);
    }
});

function demoReq() {
    document.getElementById('demoForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById('demoForm').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const companyName = document.getElementById("companyName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const formData = {
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        email: email,
        phone: phone,
        message: message
    };
    fetch("https://email-submit.mechprowilliams.workers.dev", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert("Thank you! Your demo request has been submitted.");
        closeForm();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Oops! Something went wrong. Please try again.");
    });
}

const logo = document.querySelector('.logo');
const rightLinks = document.querySelector('.right-links');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('myHeader');

window.onscroll = function() {
    if (window.scrollY > 50) {
        rightLinks.classList.add('scrolled');
		logo.classList.add('scrolled');
		navLinks.classList.add('scrolled');
    } else {
        rightLinks.classList.remove('scrolled');
		logo.classList.remove('scrolled');
		navLinks.classList.remove('scrolled');
    }
};

document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth < 768) {
		function handleClick() {
			const clickedId = this.id;
			const capitalizedId = clickedId.charAt(0).toUpperCase() + clickedId.slice(1);
			const targetId = 'full' + capitalizedId;
			const targetElement = document.getElementById(targetId);
			if (targetElement.classList.contains('leftSlide')) {
				targetElement.classList.add('leftIn');
			} else if (targetElement.classList.contains('rightSlide')) {
				targetElement.classList.add('rightIn');
			}
		}
		const flexChildren = document.querySelectorAll('.flex-child');
		flexChildren.forEach((child) => {
			child.addEventListener('click', handleClick);
		});
		
		function handleSlideClick() {
			if (this.classList.contains('leftSlide')) {
				this.classList.remove('leftIn'); 
			} else if (this.classList.contains('rightSlide')) {
				this.classList.remove('rightIn');
			}
		}
		const leftSlides = document.querySelectorAll('.leftSlide');
		const rightSlides = document.querySelectorAll('.rightSlide');
		leftSlides.forEach((slide) => {
			slide.addEventListener('click', handleSlideClick);
		});
		rightSlides.forEach((slide) => {
			slide.addEventListener('click', handleSlideClick);
		});
	}
 });
