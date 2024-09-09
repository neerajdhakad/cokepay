const faqs = [
  {
    question: "What is this app?",
    answer: "The app is a loyalty program that allows users to make cashless purchases from Coca-Cola vending machines using their smartphone. It connects to the vending machine via Bluetooth and enables easy, convenient, and cashless transactions."
  },
  {
    question: "How does the app connect to a vending machine?",
    answer: "The app uses Bluetooth to connect to nearby vending machines. Simply open the app, select 'Purchase,' and choose the machine that matches the machine ID sticker on the vending machine."
  },
  {
    question: "How do I make a purchase?",
    answer: "After connecting to the vending machine, you have 25 seconds to make a selection using the machine's keypad. Once you choose a product, the app will display the total amount to be paid. Approve the transaction in the app, and your product will be delivered to the vending machine tray for pickup."
  },
  {
    question: "How will the payment be done while making the purchase?",
    answer: "The amount of the product purchased will be deducted from the credits loaded in the app once you approve the payment. Make sure your account has sufficient credits before making the purchase."
  },
  {
    question: "Do I need to load credits in the app?",
    answer: "Yes, to make a purchase, you need to pre-load credits into your account. You can add funds using a credit card, debit card, or banking card."
  },
  {
    question: "What happens if I don’t select a product within 25 seconds?",
    answer: "If you don’t make a selection within the 25-second window, the connection to the vending machine will time out, and you will need to reconnect to start the purchase process again."
  },
  {
    question: "Can I use the app with any vending machine?",
    answer: "The app is compatible with vending machines that are part of the program and have a Bluetooth connection. Look for the app’s machine ID sticker to verify compatibility."
  },
  {
    question: "How do I know the correct vending machine to connect with?",
    answer: "After selecting 'Purchase' in the app, you’ll see a list of nearby machines. Match the machine ID displayed in the app with the sticker on the vending machine to ensure you're connecting to the correct one."
  },
  {
    question: "Is there a limit to how many credits I can load onto the app?",
    answer: "Yes, you can load a maximum of $100 USD onto the app at any given time. Make sure your account has sufficient balance before making a purchase."
  },
  {
    question: "What if I have a problem with the app or a purchase?",
    answer: "If you encounter any issues, such as a failed connection or an incorrect charge, please contact our customer support team through the app’s Help section. We're here to assist you."
  },
  {
    question: "Can I earn rewards with this app?",
    answer: "Yes! By using the app to make purchases, you can earn loyalty points and rewards, which can be redeemed for promotions, future discounts, or free products. This feature will be available soon in selected markets."
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We use industry-standard encryption and secure payment processing to ensure your payment information is safe at all times."
  },
  {
    question: "How do I update my payment method?",
    answer: "You can update your payment information in the app settings under the 'Payment Methods' section. This will allow you to manage your credit, debit, or banking card details."
  },
  {
    question: "Where is the service available?",
    answer: "The service is currently available on selected vending machines with the CokePay signage in Puerto Rico. We're expanding to more locations soon, so stay tuned!"
  },
  {
    question: "How long do I have to approve the payment after selecting a product?",
    answer: "After selecting a product, you have 25 seconds to approve the payment. If you don't approve the payment within this time, the transaction will be voided, and you'll need to start the purchase process again."
  },
  {
    question: "Can I purchase multiple products in one transaction?",
    answer: "No, the app allows you to purchase only one product at a time. If you want to buy multiple products, you'll need to complete separate transactions for each item."
  },
  {
    question: "How can I view my recent transactions?",
    answer: "To view your recent transactions, simply select the 'Transaction History' button on the home screen. You'll be able to see a list of your most recent transactions, up to the last 25."
  },
  {
    question: "How do I load credits into my account?",
    answer: "To load credits, go to the home screen and select the 'Reload' button. Then, choose your preferred payment method to pre-purchase credits and follow the on-screen instructions based on the selected payment method."
  },
  {
    question: "How do I delete my account?",
    answer: "To delete your account, go to the user profile section in the app and press the 'Delete' button. Follow the prompts to confirm the deletion. You will have to contact the administrator to re-activate the same account."
  },
  {
    question: "How do I update my personal information?",
    answer: "To update your personal information, go to the Profile section of the app and select the 'Personal Information' menu option. From there, you can update your details as needed."
  },
  {
    question: "Where can I find the Privacy Policy?",
    answer: "To view the Privacy Policy, go to the app menu and select the 'Settings' page. On the Settings page, you'll find a section labeled 'Privacy Policy' where you can review the details."
  },
  {
    question: "Where can I find the Terms of Use policy?",
    answer: "To view the Terms of Use, go to the app menu and select the 'Settings' page. On the Settings page, you'll find a section labeled 'Terms of Use' where you can review the policy."
  },
  {
    question: "How do I enable biometrics or face identification?",
    answer: "To enable biometrics or face identification, go to the 'Settings' page in the app menu. Then, select the 'Security' menu option and follow the instructions to enable biometrics for added security."
  },
  {
    question: "How do I change my login password?",
    answer: "To change your login password, go to the 'Settings' page in the app menu. Then, select the 'Security' menu option, and you'll find an option to change your password. Follow the prompts to update your password."
  },
  {
    question: "How do I change my PIN number?",
    answer: "To change your PIN number, go to the 'Settings' page in the app menu. Then, select the 'Security' menu option, where you'll find an option to change your PIN. Follow the prompts to update your PIN number."
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use industry-standard encryption and data protection measures to ensure your personal information is secure and handled with the utmost care."
  }
];
const faqContainer = document.getElementById("faq-container");

faqs.forEach((faq, index) => {
  const faqElement = document.createElement("div");
  faqElement.classList.add(
    "bg-white",
    "px-8",
    "py-6",
    "transition-all",
    "duration-300",
    "mb-1" 
  );

  faqElement.innerHTML = `
      <div class="flex justify-between items-start gap-3">
        <h1 class="poppins-bold text-4xl text-[rgb(244,0,9,60%)]">${
          index + 1
        }</h1>
        <div class="flex flex-col w-full">
          <div class="flex justify-between items-center">
            <h2 class="text-md md:text-xl poppins-semibold">${faq.question}</h2>
            <button class="faq-toggle focus:outline-none text-xl text-[#F40009]">
              <span class="plus-icon hover:text-black">+</span>  
                <svg class="hidden minus-icon w-6 h-6" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.203857" y="0.0679932" width="46.1733" height="46.1733" rx="23.0866" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7321 19.0734L27.3717 17.713L23.2905 21.7942L19.2093 17.713L17.849 19.0734L21.9301 23.1546L17.849 27.2358L19.2093 28.5962L23.2905 24.515L27.3717 28.5962L28.7321 27.2358L24.6509 23.1546L28.7321 19.0734Z" fill="white"/>
                </svg> 
            </button>
          </div>
          <p class="poppins-regular mt-2 text-sm md:text-md hidden overflow-hidden">${
            faq.answer
          }</p>
        </div>
      </div>
    `;

  faqContainer.appendChild(faqElement);
});

const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    const answer = this.closest('.flex').nextElementSibling;
    const faqItem = this.closest('.bg-white');
    const questionNumber = faqItem.querySelector('h1');

    // Close other open FAQs
    document.querySelectorAll('.faq-toggle').forEach(btn => {
      const otherAnswer = btn.closest('.flex').nextElementSibling;
      const otherFaqItem = btn.closest('.bg-white');
      const otherQuestionNumber = otherFaqItem.querySelector('h1');

      if (btn !== this) {
        otherAnswer.classList.add('hidden');
        otherFaqItem.classList.remove('bg-transparent', 'bg-opacity-50', 'text-white');
        otherQuestionNumber.classList.remove('text-white');
        btn.querySelector('.plus-icon').classList.remove('hidden');
        btn.querySelector('.minus-icon').classList.add('hidden');
      }
    });

    // Toggle the current FAQ
    answer.classList.toggle('hidden');
    if (!answer.classList.contains('hidden')) {
      faqItem.classList.add('bg-transparent', 'bg-opacity-50', 'text-white');
      questionNumber.classList.add('text-white');
      this.querySelector('.plus-icon').classList.add('hidden');
      this.querySelector('.minus-icon').classList.remove('hidden');
    } else {
      faqItem.classList.remove('bg-transparent', 'bg-opacity-50', 'text-white');
      questionNumber.classList.remove('text-white');
      this.querySelector('.plus-icon').classList.remove('hidden');
      this.querySelector('.minus-icon').classList.add('hidden');
    }
  });
});


// Navbar
document.getElementById('hamburger').onclick = function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.querySelector('.hamburger');

  // Toggle mobile menu
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('-translate-y-full', 'hidden');
    mobileMenu.classList.add('translate-y-0');
  } else {
    mobileMenu.classList.add('-translate-y-full');
    mobileMenu.classList.remove('translate-y-0');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  }

  // Toggle hamburger icon to cross
  hamburgerIcon.classList.toggle('cross');
};

// Close the mobile menu and revert hamburger when a link is clicked
const mobileLinks = document.querySelectorAll('#mobile-menu a');

mobileLinks.forEach(link => {
  link.onclick = function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.querySelector('.hamburger');
    mobileMenu.classList.add('-translate-y-full');
    mobileMenu.classList.remove('translate-y-0');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);

    // Revert hamburger icon to original
    hamburgerIcon.classList.remove('cross');
  };
});

//Captcha function

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

// Function to set captcha
function setCaptcha() {
  const captchaText = document.getElementById('captchaText');
  const newCaptcha = generateCaptcha(); 
  const spacedCaptcha = newCaptcha.split('').join('  ');
  
  captchaText.innerText = spacedCaptcha; 
  captchaText.style.transform = '';  
}

// Initialize captcha on page load
window.onload = setCaptcha;

// Refresh captcha when button is clicked
document.getElementById('refreshCaptcha').addEventListener('click', function () {
  setCaptcha();
});

 // Function to validate form fields
 document.getElementById('submitBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const captchaInput = document.getElementById('captcha-input').value.trim();
  const captchaText = document.getElementById('captchaText').innerText.trim();
  
  let valid = true;

  // Name validation
  if (!name) {
    document.getElementById('name-error').classList.remove('hidden');
    valid = false;
  } else {
    document.getElementById('name-error').classList.add('hidden');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    document.getElementById('email-error').classList.remove('hidden');
    valid = false;
  } else {
    document.getElementById('email-error').classList.add('hidden');
  }

  // Message validation
  if (!message) {
    document.getElementById('message-error').classList.remove('hidden');
    valid = false;
  } else {
    document.getElementById('message-error').classList.add('hidden');
  }

  // Captcha validation
  if (captchaInput !== captchaText.replace(/\s/g, '')) { // Remove spaces in captchaText
    document.getElementById('captcha-error').classList.remove('hidden');
    valid = false;
  } else {
    document.getElementById('captcha-error').classList.add('hidden');
  }

  // If form is valid, submit it (you can add further actions here)
  if (valid) {
    alert('Form submitted successfully!');
    // You can submit the form or send an AJAX request here
  }
});

const dropdownArrow = document.getElementById('dropdownArrow');
const languageOptions = document.getElementById('languageOptions');
const selectedLanguage = document.getElementById('selectedLanguage');

// Toggle dropdown visibility when arrow is clicked
dropdownArrow.addEventListener('click', () => {
  languageOptions.classList.toggle('hidden');
});

// Update the selected language when an option is clicked
languageOptions.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const selectedLang = event.target.getAttribute('data-lang');
    selectedLanguage.innerText = selectedLang;
    languageOptions.classList.add('hidden'); // Hide dropdown after selection
  }
});

// Hide dropdown if clicked outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.relative')) {
    languageOptions.classList.add('hidden');
  }
});

// JavaScript for Mobile Dropdown
const dropdownArrowMobile = document.getElementById('dropdownArrowMobile');
const languageOptionsMobile = document.getElementById('languageOptionsMobile');
const selectedLanguageMobile = document.getElementById('selectedLanguageMobile');

// Toggle dropdown visibility when arrow is clicked (Mobile)
dropdownArrowMobile.addEventListener('click', () => {
  languageOptionsMobile.classList.toggle('hidden');
});

// Update the selected language when an option is clicked (Mobile)
languageOptionsMobile.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const selectedLang = event.target.getAttribute('data-lang');
    selectedLanguageMobile.innerText = selectedLang;
    languageOptionsMobile.classList.add('hidden'); // Hide dropdown after selection
  }
});

// Loader Animation
var tl = gsap.timeline();

tl.from("#loader img", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader img", {
  opacity: 0,
  x: -10,
  duration: 1,
  stagger: 0.1,
});
tl.to("#loader", {
  opacity: 0,
});
tl.to("#loader", {
  display: "none",
});

tl.from("nav div a , #selectedLanguage , .arrow",{
  y:-10,
  opacity:0,
  stagger:0.15, 
})
tl.from("#mobile-screen",{
  y:30,
  opacity:0
})
tl.from(".div2 h1, .div2 span svg",{
  y:30,
  opacity:0, 
})
tl.from(".div2 p",{
  y:30,
  opacity:0, 
})
tl.from(".div2 button",{
  y:30,
  opacity:0, 
})
tl.from("#vending-machine",{
  x:-100,
  opacity:0
},"svgs")
tl.from(".bottle",{
  x:200,
  opacity:0
},"svgs")

tl.from("#splash-screen",{
  x:-100,
  opacity:0,
},"images")
tl.from("#wallet",{
  x:100,
  opacity:0,
},"images")