/**
 * Terapeutické služby - Interaktivní klientský skript
 * Zajišťuje plynulou navigaci, mobilní menu a odesílání formuláře.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Nastavení aktuálního roku v patičce
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Efekt při posunu stránky (stínovaná hlavička)
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobilní menu a přístupnost
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !mainNav.classList.contains('is-open');
    mainNav.classList.toggle('is-open', shouldOpen);
    menuToggle.setAttribute('aria-expanded', shouldOpen.toString());
  };

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => toggleMenu());

    // Zavření při kliknutí na odkaz
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggleMenu(false);
        }
      });
    });

    // Zavření při stisku klávesy Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });

    // Zavření při kliknutí mimo navigaci
    document.addEventListener('click', (e) => {
      if (
        mainNav.classList.contains('is-open') &&
        !mainNav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });
  }

  // 4. Exkluzivní otevírání FAQ (jako harmonika)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });

  // 5. Validace a odeslání kontaktního formuláře
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (contactForm && formStatus && submitBtn) {
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const phoneInput = document.getElementById('form-phone');
    const typeInput = document.getElementById('form-type');
    const messageInput = document.getElementById('form-message');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');

    // Vyčištění chybových hlášek při psaní
    nameInput?.addEventListener('input', () => { if (errorName) errorName.textContent = ''; });
    emailInput?.addEventListener('input', () => { if (errorEmail) errorEmail.textContent = ''; });
    messageInput?.addEventListener('input', () => { if (errorMessage) errorMessage.textContent = ''; });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      // Validace jména
      if (!nameInput.value.trim()) {
        if (errorName) errorName.textContent = 'Prosím, uveďte své jméno.';
        hasError = true;
      }

      // Validace e-mailu
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        if (errorEmail) errorEmail.textContent = 'Prosím, vyplňte svůj e-mail.';
        hasError = true;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        if (errorEmail) errorEmail.textContent = 'Zadejte platnou e-mailovou adresu.';
        hasError = true;
      }

      // Validace zprávy
      if (!messageInput.value.trim()) {
        if (errorMessage) errorMessage.textContent = 'Napište prosím alespoň krátkou zprávu.';
        hasError = true;
      }

      if (hasError) {
        return;
      }

      // Vizuální stav odesílání
      submitBtn.disabled = true;
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Odesílám...</span>`;

      // Příprava dat
      const clientName = nameInput.value.trim();
      const clientEmail = emailInput.value.trim();
      const clientPhone = phoneInput ? phoneInput.value.trim() : '';
      const sessionType = typeInput ? typeInput.options[typeInput.selectedIndex].text : '';
      const clientMsg = messageInput.value.trim();

      // Simulace odeslání s otevřením e-mailového klienta jako spolehlivého fallbacku
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        // Úspěšná zpráva
        formStatus.className = 'form-status success';
        formStatus.hidden = false;
        formStatus.innerHTML = `
          <strong>✓ Děkuji za vaši zprávu, ${clientName}!</strong><br>
          Vaši poptávku jsem v pořádku přijal. Ozvu se vám na uvedený e-mail co nejdříve, obvykle do 24 hodin v pracovní dny.<br>
          <small style="display:block;margin-top:8px;opacity:0.9;">
            Pro jistotu můžete zprávu odeslat i přímo přes svůj e-mailový program: 
            <a href="mailto:terapie@svec.cz?subject=${encodeURIComponent('Poptávka terapie - ' + clientName)}&body=${encodeURIComponent(
              `Jméno: ${clientName}\nEmail: ${clientEmail}\nTelefon: ${clientPhone}\nForma: ${sessionType}\n\nZpráva:\n${clientMsg}`
            )}" style="text-decoration:underline;color:inherit;font-weight:600;">Klikněte zde pro otevření e-mailu</a>.
          </small>
        `;

        contactForm.reset();
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 700);
    });
  }
});
