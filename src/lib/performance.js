// Performance monitoring utilities for Expansion Project

export function reportWebVitals(metric) {
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
}

// Lazy load images with native loading
export function lazyLoadImages() {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
}

// Preload critical resources
export function preloadCriticalAssets() {
  const criticalAssets = [
    { href: '/fonts/Determination Mono.ttf', as: 'font', type: 'font/ttf' },
    { href: '/fonts/Kallisto-Lined.otf', as: 'font', type: 'font/otf' },
    { href: '/images/mainCPGv2.webp', as: 'image' },
  ];
  
  criticalAssets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = asset.href;
    link.as = asset.as;
    if (asset.type) link.type = asset.type;
    if (asset.as === 'font') link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// Resource hints for third-party domains
export function addResourceHints() {
  const hints = [
    { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
    { rel: 'dns-prefetch', href: 'https://widgetv3.bandsintown.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    document.head.appendChild(link);
  });
}