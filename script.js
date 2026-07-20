// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: "#050f0a",
        surface: "#0d1f14",
        surfaceLight: "#142b1a",
        primary: "#22c55e",
        secondary: "#4ade80",
        textpri: "#f0f4ff",
        textmut: "#94a3b8",
        codebg: "#0d1f14",
      },
      fontFamily: { inter: ["Inter", "sans-serif"] },
    },
  },
};

// Icons
if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
  lucide.createIcons();
}

// Particle Canvas
(function () {
  var canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var particles = [];
  var particleCount = 80;

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (var i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(34,197,94," + p.opacity + ")";
      ctx.fill();
    }
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = "rgba(34,197,94," + 0.06 * (1 - dist / 120) + ")";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// Typing Animation
(function () {
  var titles = [
    "JavaScript Developer",
    "React Specialist",
    "Node.js Engineer",
    "Problem Solver",
  ];
  var el = document.getElementById("typing-text-r4s5");
  if (!el) return;
  var titleIndex = 0,
    charIndex = 0,
    isDeleting = false;

  function tick() {
    var current = titles[titleIndex];
    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 80);
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 40);
    }
  }
  setTimeout(tick, 800);
})();

// Navbar Scroll Effect
(function () {
  var nav = document.getElementById("main-nav-w4d2");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
})();

// Active Nav Link Highlight
(function () {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll("#desktop-nav-e3f4 .nav-link");
  function updateActive() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (sec) {
      var id = "#" + sec.id;
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === id) {
          link.classList.toggle(
            "active-link",
            scrollY >= sec.offsetTop &&
              scrollY < sec.offsetTop + sec.offsetHeight,
          );
        }
      });
    });
  }
  window.addEventListener("scroll", updateActive);
  updateActive();
})();

// Mobile Menu
(function () {
  var menuBtn = document.getElementById("mobile-menu-btn-s7t8");
  var menu = document.getElementById("mobile-menu-u9v0");
  var closeBtn = document.getElementById("mobile-menu-close-w1x2");
  menuBtn.addEventListener("click", function () {
    menu.classList.remove("hidden");
  });
  closeBtn.addEventListener("click", function () {
    menu.classList.add("hidden");
  });
  menu.querySelectorAll(".mobile-nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.add("hidden");
    });
  });
})();

// Intersection Observer (scroll reveals + skill bars)
(function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("skill-item")) {
          var pct = entry.target.getAttribute("data-percent");
          var bar = entry.target.querySelector(".skill-bar-fill");
          if (bar)
            setTimeout(function () {
              bar.style.width = pct + "%";
            }, 100);
        }
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  document
    .querySelectorAll(".fade-up, .slide-left, .slide-right")
    .forEach(function (el) {
      observer.observe(el);
    });
  document.querySelectorAll(".skill-item").forEach(function (el) {
    observer.observe(el);
  });

  setTimeout(function () {
    document
      .querySelectorAll("#hero-section-c1d2 .fade-up")
      .forEach(function (el) {
        el.classList.add("visible");
      });
  }, 100);
})();

// Code Tabs
(function () {
  var tabs = document.querySelectorAll("[data-code-tab]");
  var panels = {
    react: document.getElementById("code-panel-react-t9u0"),
    express: document.getElementById("code-panel-express-v1w2"),
    sql: document.getElementById("code-panel-sql-x3y4"),
  };
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-code-tab");
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tab.classList.add("active");
      Object.keys(panels).forEach(function (key) {
        panels[key].classList.toggle("active", key === target);
      });
    });
  });
})();
