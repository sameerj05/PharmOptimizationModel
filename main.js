// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.to(".hero-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.2
});
gsap.to(".hero-subtitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.4
});
gsap.to(".hero-cta", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.6
});

async function fetchData() {
    try {
        let response = await fetch("http://localhost:5000/api/data"); // Fetch data from Flask backend
        let data = await response.json();

        let firstColumn = Object.keys(data[0])[0];  // First column as labels
        let secondColumn = Object.keys(data[0])[1]; // Second column as values

        let labels = data.map(row => row[firstColumn]); // X-axis
        let values = data.map(row => row[secondColumn]); // Y-axis

        let ctx = document.getElementById("chart").getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: secondColumn,
                    data: values,
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();

// Create floating shapes in hero section
const heroShapes = document.getElementById("hero-shapes");
for (let i = 0; i < 15; i++) {
    const size = Math.random() * 100 + 50;
    const shape = document.createElement("div");
    shape.classList.add("shape");
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
    heroShapes.appendChild(shape);

    // Animate each shape
    gsap.to(shape, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

// Scroll Animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.to(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.8
    });
});

// Problem section animations
gsap.to(".problem-text", {
    scrollTrigger: {
        trigger: ".problem-text",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    x: 0,
    duration: 0.8
});

gsap.to(".problem-visual", {
    scrollTrigger: {
        trigger: ".problem-visual",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    x: 0,
    duration: 0.8,
    delay: 0.2
});

// Solution cards animation
gsap.utils.toArray('.solution-card').forEach((card, index) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.2
    });
});

// Data section animations
gsap.to(".chart-container", {
    scrollTrigger: {
        trigger: ".chart-container",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    scale: 1,
    duration: 0.8
});

gsap.to(".chart-controls", {
    scrollTrigger: {
        trigger: ".chart-controls",
        start: "top 90%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    duration: 0.8,
    delay: 0.3
});

// Timeline animations
gsap.utils.toArray('.timeline-item').forEach((item, index) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.2
    });
});

// Conclusion animations
gsap.to(".conclusion-title", {
    scrollTrigger: {
        trigger: ".conclusion-title",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.8
});

gsap.to(".conclusion-text", {
    scrollTrigger: {
        trigger: ".conclusion-text",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2
});

gsap.to(".conclusion-cta", {
    scrollTrigger: {
        trigger: ".conclusion-cta",
        start: "top 90%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.4
});

// Problem chart
const problemCtx = document.getElementById('problem-chart').getContext('2d');
const problemChart = new Chart(problemCtx, {
    type: 'bar',
    data: {
        labels: ['Resource Waste', 'Data Silos', 'Legacy Systems', 'Market Response'],
        datasets: [{
            label: 'Current Pain Points (Impact %)',
            data: [32, 45, 28, 38],
            backgroundColor: [
                'rgba(74, 40, 130, 0.7)',
                'rgba(204, 0, 51, 0.7)',
                'rgba(74, 40, 130, 0.7)',
                'rgba(204, 0, 51, 0.7)'
            ],
            borderColor: [
                'rgba(74, 40, 130, 1)',
                'rgba(204, 0, 51, 1)',
                'rgba(74, 40, 130, 1)',
                'rgba(204, 0, 51, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 50
            }
        }
    }
});

// Data visualization section
const dataCtx = document.getElementById('dataChart').getContext('2d');
let activeChart;

// Initial chart (revenue)
createChart('revenue');

// Chart switching
document.querySelectorAll('.chart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const chartType = this.getAttribute('data-type');
        createChart(chartType);
    });
});

function createChart(type) {
    // Destroy previous chart if exists
    if (activeChart) {
        activeChart.destroy();
    }

    let data, options;

    switch(type) {
        case 'revenue':
            data = {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Current Revenue ($M)',
                        data: [2.1, 2.3, 2.0, 2.4],
                        borderColor: 'rgba(74, 40, 130, 1)',
                        backgroundColor: 'rgba(74, 40, 130, 0.1)',
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: 'Projected Revenue with Solution ($M)',
                        data: [2.1, 2.8, 3.5, 4.2],
                        borderColor: 'rgba(204, 0, 51, 1)',
                        backgroundColor: 'rgba(204, 0, 51, 0.1)',
                        borderWidth: 2,
                        fill: true
                    }
                ]
            };
            break;
        case 'efficiency':
            data = {
                labels: ['Process 1', 'Process 2', 'Process 3', 'Process 4'],
                datasets: [
                    {
                        label: 'Current Efficiency (%)',
                        data: [62, 58, 45, 67],
                        backgroundColor: 'rgba(74, 40, 130, 0.7)'
                    },
                    {
                        label: 'Projected Efficiency with Solution (%)',
                        data: [85, 90, 78, 92],
                        backgroundColor: 'rgba(204, 0, 51, 0.7)'
                    }
                ]
            };
            break;
        case 'satisfaction':
            data = {
                labels: ['2025 Q1', '2025 Q2', '2025 Q3', '2025 Q4'],
                datasets: [{
                    type: 'line',
                    label: 'Customer Satisfaction (%)',
                    data: [75, 82, 88, 95],
                    borderColor: 'rgba(204, 0, 51, 1)',
                    tension: 0.4,
                    yAxisID: 'y1'
                }, {
                    type: 'bar',
                    label: 'Issue Resolution Time (hours)',
                    data: [48, 36, 24, 12],
                    backgroundColor: 'rgba(74, 40, 130, 0.7)',
                    yAxisID: 'y'
                }]
            };
            options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    },
                    y1: {
                        beginAtZero: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false
                        },
                        title: {
                            display: true,
                            text: 'Satisfaction %'
                        },
                        max: 100
                    }
                }
            };
            break;
    }

    // Default options if not specified
    if (!options) {
        options = {
            responsive: true,
            maintainAspectRatio: false
        };
    }

    // Create chart
    const chartType = type === 'satisfaction' ? 'bar' : (type === 'efficiency' ? 'bar' : 'line');
    
    activeChart = new Chart(dataCtx, {
        type: chartType,
        data: data,
        options: options
    });

    // Add animation
    gsap.fromTo(dataCtx, 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 0.5 }
    );
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});