// script.js — ripple effect
const data_of_peoples = [
  {
    image: "https://variety.com/wp-content/uploads/2024/12/Jeff-Bezos.jpg",
    name: "Jeff Bezos",
    designation: "CEO of Amazon",
    company: "Amazon",
    skills: "JavaScript, React, Node.js",
    istatus: "Stranger",
    intro: "Passionate about building scalable web apps and solving real-world problems."
  },
  {
    image: "https://images.unsplash.com/photo-1743369671728-f3488e99caf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Henry Walsh",
    designation: "UI/UX Designer",
    company: "Microsoft",
    skills: "Figma, Photoshop, Wireframing",
    istatus: "Stranger",
    intro: "Creative designer focused on crafting user-friendly experiences."
  },
  {
    image: "https://images.unsplash.com/photo-1569292316763-0b667e9e960c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "William Foster",
    designation: "Data Scientist",
    company: "Amazon",
    skills: "Python, Machine Learning, AI",
    istatus: "Stranger",
    intro: "Loves analyzing data to create meaningful insights and AI-driven solutions."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "James Thornton",
    designation: "Cloud Architect",
    company: "IBM",
    skills: "AWS, Azure, GCP",
    istatus: "Stranger",
    intro: "Helps organizations move to cloud with secure and scalable architectures."
  },
  {
    image: "https://images.unsplash.com/photo-1629649536405-664cc1a973fb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Edward Brooks",
    designation: "Full Stack Developer",
    company: "Adobe",
    skills: "MERN Stack, TypeScript",
    istatus: "Stranger",
    intro: "Enjoys creating robust web apps with a strong focus on performance."
  },
  {
    image: "https://images.unsplash.com/photo-1677563231818-7d4e2c7b7c2c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Thomas Whitaker",
    designation: "Product Manager",
    company: "Flipkart",
    skills: "Agile, Scrum, Product Roadmap",
    istatus: "Stranger",
    intro: "Bridges the gap between business needs and technology with effective solutions."
  },
  {
    image: "https://images.unsplash.com/photo-1741978276404-a4781b98fa96?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Freddie Turner",
    designation: "Cybersecurity Analyst",
    company: "Cisco",
    skills: "Network Security, Ethical Hacking",
    istatus: "Stranger",
    intro: "Passionate about securing systems and preventing cyber attacks."
  },
  {
    image: "https://images.unsplash.com/photo-1629790457423-3adc0c876be5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alfie Morgan",
    designation: "AI Researcher",
    company: "OpenAI",
    skills: "Deep Learning, NLP",
    istatus: "Stranger",
    intro: "Explores the future of AI with a focus on natural language understanding."
  },
  {
    image: "https://images.unsplash.com/photo-1633116177775-f1ba1a4f20cf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Arthur Chapman",
    designation: "DevOps Engineer",
    company: "Netflix",
    skills: "CI/CD, Docker, Kubernetes",
    istatus: "Stranger",
    intro: "Works on automation pipelines to deliver smooth deployments."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1742038612506-20e787807d8d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Harry Clarke",
    designation: "Business Analyst",
    company: "Accenture",
    skills: "Data Analysis, Excel, Tableau",
    istatus: "Stranger",
    intro: "Helps businesses make data-driven decisions with insightful analysis."
  },{
    image: "https://plus.unsplash.com/premium_photo-1736961713821-6f430b8eaa98?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "George Harriso",
    designation: "Product Manager",
    company: "Flipkart",
    skills: "Agile, Scrum, Product Roadmap",
    istatus: "Stranger",
    intro: "Bridges the gap between business needs and technology with effective solutions."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1678197937473-3cab36f28f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Oliver Bennett",
    designation: "Cybersecurity Analyst",
    company: "Cisco",
    skills: "Network Security, Ethical Hacking",
    istatus: "Stranger",
    intro: "Passionate about securing systems and preventing cyber attacks."
  },
];


function upload_data() {
  let data = '';
  data_of_peoples.forEach(function(elem, idx) {
    // Set color based on status
    let color = "var(--brand-1)"; // default: Stranger (rose)
    if (elem.istatus === "Waiting for response") color = "#ffc107"; // yellow
    if (elem.istatus === "Accepted") color = "#43e56cd6"; // green

    data += `<div class="card">
      <img src="${elem.image}" alt="1" />
      <h1>${elem.name}</h1>
      <h5>${elem.designation}</h5>
      <h5>${elem.company}</h5>
      <h4>${elem.skills}</h4>
      <h3 style="color:${color}">${elem.istatus}</h3>
      <p>${elem.intro}</p>
      <button id=${idx}>Ask for a Meeting</button>
    </div>`;
  });
  let main = document.querySelector('main');
  main.innerHTML = data;
}
upload_data();

let main = document.querySelector('main');
main.addEventListener('click', function(dets) {
  let gold = data_of_peoples[dets.target.id];
  if (gold && gold.istatus === "Stranger") {
    gold.istatus = "Waiting for response";
    upload_data();
    setTimeout(function() {
      gold.istatus = "Accepted";
      upload_data();
    }, 2000);
  } else if (gold) {
    gold.istatus = "Stranger";
    upload_data();
  }
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.card button');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top  = (e.clientY - rect.top  - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});