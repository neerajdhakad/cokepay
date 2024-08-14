const faqs = [
  {
    question: "How can I make my Lend/Sell PRICELESS?",
    answer:
      "The core idea of Little Sharers is 'sharing'; if you too believe the same, go ahead and post your LEND | SELL as zero-priced making your child’s memories priceless!",
  },
  {
    question: "What is the refund policy?",
    answer:
      "You can request a refund within 30 days of purchase. Please contact our support for assistance.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "You can request a refund within 30 days of purchase. Please contact our support for assistance.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "You can request a refund within 30 days of purchase. Please contact our support for assistance.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "You can request a refund within 30 days of purchase. Please contact our support for assistance.",
  },
  // Add more FAQs here
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
        <h1 class="poppins-bold text-4xl text-[rgb(244,0,9,60%)]">0${
          index + 1
        }</h1>
        <div class="flex flex-col w-full">
          <div class="flex justify-between items-center">
            <h2 class="text-xl poppins-semibold">${faq.question}</h2>
            <button class="faq-toggle focus:outline-none text-xl text-[#F40009]">
              <span class="plus-icon hover:text-black">+</span>  
                <svg class="hidden minus-icon w-6 h-6" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.203857" y="0.0679932" width="46.1733" height="46.1733" rx="23.0866" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7321 19.0734L27.3717 17.713L23.2905 21.7942L19.2093 17.713L17.849 19.0734L21.9301 23.1546L17.849 27.2358L19.2093 28.5962L23.2905 24.515L27.3717 28.5962L28.7321 27.2358L24.6509 23.1546L28.7321 19.0734Z" fill="white"/>
                </svg> 
            </button>
          </div>
          <p class="poppins-regular mt-2 hidden overflow-hidden">${
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



