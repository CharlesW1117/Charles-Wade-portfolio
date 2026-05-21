// Initialize Lucide icons
    lucide.createIcons();

    // ===== Typing Animation =====
    (function() {
      const titles = ['JavaScript Developer', 'React Specialist', 'Node.js Engineer', 'Problem Solver'];
      const el = document.getElementById('typing-text-o5p6');
      let titleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 80;

      function type() {
        const current = titles[titleIndex];
        if (isDeleting) {
          el.textContent = current.substring(0, charIndex - 1);
          charIndex--;
          typeSpeed = 40;
        } else {
          el.textContent = current.substring(0, charIndex + 1);
          charIndex++;
          typeSpeed = 80;
        }

        if (!isDeleting && charIndex === current.length) {
          typeSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          typeSpeed = 400;
        }

        setTimeout(type, typeSpeed);
      }
      type();
    })();

    // ===== Scroll Reveal (IntersectionObserver) =====
    (function() {
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      reveals.forEach(el => observer.observe(el));
    })();

    // ===== Skills Progress Bar Animation =====
    (function() {
      const skillsSection = document.getElementById('skills');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('skills-visible');
          }
        });
      }, { threshold: 0.2 });
      observer.observe(skillsSection);
    })();

    // ===== Navbar Scroll Effect =====
    (function() {
      const navbar = document.getElementById('navbar-a1b2');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    })();

    // ===== Active Nav Link Highlighting =====
    (function() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link[data-nav]');

      function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
          }
        });
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-nav') === current) {
            link.classList.add('active');
          }
        });
      }
      window.addEventListener('scroll', updateActiveLink);
      updateActiveLink();
    })();

    // ===== Mobile Menu Toggle =====
    (function() {
      const hamburger = document.getElementById('hamburger-btn-e5f6');
      const mobileMenu = document.getElementById('mobile-menu-g7h8');
      const closeBtn = document.getElementById('mobile-close-i9j0');
      const mobileLinks = document.querySelectorAll('.mobile-nav-link');

      hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      });

      function closeMenu() {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }

      closeBtn.addEventListener('click', closeMenu);
      mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    })();

    // ===== Project Filter =====
    (function() {
      const tabs = document.querySelectorAll('.filter-tab');
      const cards = document.querySelectorAll('.project-card');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          const filter = tab.getAttribute('data-filter');

          cards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
              card.classList.remove('hidden-card');
              card.style.opacity = '0';
              card.style.transform = 'translateY(20px)';
              requestAnimationFrame(() => {
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              });
            } else {
              card.classList.add('hidden-card');
            }
          });
        });
      });
    })();

    // ===== Contact Form Submission =====
    (function() {
      const form = document.getElementById('contact-form-k7l8');
      const wrapper = document.getElementById('contact-form-wrapper-i5j6');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const subject = document.getElementById('form-subject').value.trim();
        const message = document.getElementById('form-message').value.trim();

        if (!name || !email || !subject || !message) {
          [document.getElementById('form-name'), document.getElementById('form-email'),
           document.getElementById('form-subject'), document.getElementById('form-message')].forEach(input => {
            if (!input.value.trim()) {
              input.style.borderColor = '#f43f5e';
              setTimeout(() => { input.style.borderColor = ''; }, 2000);
            }
          });
          return;
        }

        // Show success state
        wrapper.innerHTML = `
          <div class="success-anim flex flex-col items-center justify-center text-center py-12">
            <div class="w-20 h-20 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, #22c55e, #4ade80)">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Message Sent!</h3>
            <p class="text-textMuted text-sm max-w-xs">Thanks for reaching out, I'll get back to you soon.</p>
          </div>
        `;
      });
    })();

    // ===== Logo scroll to top =====
    (function() {
      const logo = document.getElementById('logo-link-c3d4');
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    })();