// Hero Module for Expansion Project
// Following cursor module architecture from PRD

export function init(rootEl) {
  const hero = {
    rootEl,
    isInitialized: false,
    
    // Initialize the hero module
    setup() {
      if (this.isInitialized) return;
      
      // Add event listeners and initialize animations
      this.attachEventListeners();
      this.initializeAnimations();
      this.isInitialized = true;
    },
    
    // Attach event listeners
    attachEventListeners() {
      const contactBtn = rootEl.querySelector('[data-hero-contact]');
      const showsBtn = rootEl.querySelector('[data-hero-shows]');
      const musicIcons = rootEl.querySelectorAll('[data-music-icon]');
      
      if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
      
      if (showsBtn) {
        showsBtn.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector('#tour')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
      
      musicIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
          e.preventDefault();
          const url = icon.getAttribute('href');
          if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
          }
        });
      });
    },
    
    // Initialize animations
    initializeAnimations() {
      // Add intersection observer for lazy animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero-animated');
          }
        });
      }, { threshold: 0.1 });
      
      const animatedElements = rootEl.querySelectorAll('[data-hero-animate]');
      animatedElements.forEach(el => observer.observe(el));
    },
    
    // Cleanup function
    cleanup() {
      // Remove event listeners and observers
      this.isInitialized = false;
    }
  };
  
  hero.setup();
  return hero;
}

export function render(data = {}) {
  return `
    <section class="hero-section lg:py-16" data-hero-root>
      <div class="grid grid-cols-1 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start" data-hero-animate>
          <h1 class="text-[#f6f3ed] mb-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold text-center sm:text-left">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-gray-300">
              ${data.title || 'Expansion Project'}
            </span>
          </h1>
          <div class="text-[#717477] text-base sm:text-lg mb-6 lg:text-xl determination-mono-font">
            ${data.subtitle || 'fusion_trio /// philadelphia_pa'}
            <div class="mt-4 flex justify-center sm:justify-start">
              ${data.musicLinks ? data.musicLinks.map(link => `
                <a href="${link.url}" data-music-icon class="mx-2 music-icon-button transition-all duration-300 ease-in-out hover:translate-y-[-5px]">
                  <img src="${link.icon}" alt="${link.alt}" width="40" height="40" class="transition-all duration-300 shadow-lg hover:shadow-xl">
                </a>
              `).join('') : ''}
            </div>
          </div>
          <div>
            <a href="#contact" data-hero-contact class="contact-button px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 text-[#121212] font-bold determination-mono-font transition-all duration-300 ease-in-out">
              <span class="relative z-10">Contact Us</span>
            </a>
          </div>
        </div>
        <div class="col-span-4 place-self-center mt-4 lg:mt-0" data-hero-animate>
          <div class="rounded-full w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] relative overflow-hidden transition-all duration-700 ease-in-out">
            <img src="${data.heroImage || '/images/mainCPGv2.webp'}" 
                 alt="${data.heroImageAlt || 'Expansion Project main band photo'}"
                 class="rounded-full object-cover hero-image transition-all duration-700 ease-in-out"
                 width="330" height="330"
                 loading="eager">
          </div>
        </div>
      </div>
    </section>
  `;
}

export function cleanup() {
  // Cleanup any event listeners or resources
}