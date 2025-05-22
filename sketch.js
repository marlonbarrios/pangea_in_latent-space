// Define variables for Perlin noise offsets
let offsets = [
  { xoff: 500, yoff: 10, roff: 400 }, // Tectonics of Otherness
  { xoff: 700, yoff: 20, roff: 500 }, // Peoples and Features
  { xoff: 800, yoff: 30, roff: 550 }, // The Map is not the Territory
  { xoff: 1000, yoff: 300, roff: 600 }, // Transcriptural Fugue
  { xoff: 1100, yoff: 400, roff: 700 }, // Memory and Ancestors
  { xoff: 1200, yoff: 500, roff: 800 }, // Manifesto the Residtencia Poetica
  { xoff: 1300, yoff: 600, roff: 900 }, // Cumbia Rebajada
  { xoff: 1400, yoff: 700, roff: 1000 }, // Cybernetics and Government
  { xoff: 1500, yoff: 800, roff: 1100 }, // Tejedoras (economias de cuidado)
  { xoff: 1600, yoff: 900, roff: 1200 }, // Techno Economy
  { xoff: 1800, yoff: 1100, roff: 1400 }, // The north of the south/Sami
  { xoff: 1900, yoff: 1200, roff: 1500 }, // Dark Enlightment
  { xoff: 2000, yoff: 1300, roff: 1600 }, // UAIIN
  { xoff: 2100, yoff: 1400, roff: 1700 }, // The Emigrant
];

// Change default language to English
let currentLanguage = 'en'; // Changed from 'es' to 'en'

// Update translations object with complete bilingual support
const translations = {
  en: {
    concepts: [
      "pangea in latent space",
      "the map is not the territory",
      "tectonics of otherness",
      "pangea people",
      "Transcriptural Fugue",
      "In pursuit of stolen ghosts",
      "manifesto the resistencia poetica",
      "cumbia rebajada/migrating forms",
      "Project Cybersyn",
      "solidarity economy",
      "techno-economy",
      "the south of the north/sami",
      "dark enlightment",
      "UAIIN indigenous university",
      "The Emigrant - infinite story",
      "relentless epistemic acts"

    
    
    ],
    controls: {
      title: "CONTROLS",
      lines: "Lines",
      text: "Legend",
      circles: "Circles",
      boundary: "Boundary",
      trails: "Trails",
      fill: "Fill",
      groups: "All Groups",
      tealGroup: "Teal Group",
      yellowGroup: "Yellow Group",
      redGroup: "Red Group"
    },
    boundary: "pangea in latent space"
  },
  es: {
    concepts: [
      "pangea en el espacio latente",
      "el mapa no es el territorio",
      "tectónicas de la otredad",
      "pueblos pangea",
      "Fuga Transcriptural",
     "en busca de fantasmas robados",
      "manifiesto de la resistencia poética",
      "cumbia rebajada/formas migrantes",
      "Proyecto Cybersyn",
      "economía solidaria",
      "tecno-economía",
      "el sur del norte/sami",
      "iluminación oscura",
      "UAIIN universidad indígena",
      "El Emigrante - historia infinita",
      "actos epistémicos implacables"
    ],
    controls: {
      title: "CONTROLES",
      lines: "Líneas",
      text: "Legenda",
      circles: "Círculos",
      boundary: "Borde",
      trails: "Rastros",
      fill: "Relleno",
      groups: "Todos los Grupos",
      tealGroup: "Grupo Turquesa",
      yellowGroup: "Grupo Amarillo",
      redGroup: "Grupo Rojo"
    },
    boundary: "pangea en el espacio latente"
  }
};
  
  // Visibility flags
let showLines = true;
let showEllipses = false;
let showText = false; // Make sure text is off by default
  
  let slider; // Slider for controlling animation speed

// Add these variables at the top with other global variables
let hoveredIndex = -1; // Track which circle is being hovered

// Add to the global variables
let showBoundary = true;

// Update URLs object to include both English and Spanish versions
const urls = {
  // English URLs
  "pangea in latent space": "https://marlonbarrios.github.io/pangea_in_latent_space/",
  "the map is not the territory": "https://www.youtube.com/watch?v=MOoYjYLFhl0",
  "tectonics of otherness": "https://marlonbarrios.github.io/tectonics_of_otherness/",
  "pangea people": "https://originarios.vercel.app/",
  "Transcriptural Fugue": "https://transcripturalfugue-marlonbarrios-projects.vercel.app/",
  "ghosts and ancestors": "https://in-pursuit-of-stolen-ghosts.vercel.app/",
  "manifesto the resistencia poetica": "https://www.youtube.com/watch?v=yrmAd6rIdqk&t=34s",
  "cumbia rebajada/migrating forms": "https://en.wikipedia.org/wiki/I%27m_No_Longer_Here",
  "Project Cybersyn": "https://en.wikipedia.org/wiki/Project_Cybersyn",
  "solidarity economy": "https://en.wikipedia.org/wiki/Care_work",
  "techno-economy": "https://en.wikipedia.org/wiki/Digital_economy",
  "the south of the north/sami": "https://www.modernamuseet.se/stockholm/en/exhibitions/britta-marakatt-labba/",
  "dark enlightment": "https://en.wikipedia.org/wiki/Dark_enlightenment",
  "UAIIN indigenous university": "https://uaiinpebi-cric.edu.co/la-universidad/#resena",
  "The Emigrant - infinite story": "https://el-immigrante.vercel.app/",

  // Spanish URLs (same destinations)
  "pangea en el espacio latente": "https://marlonbarrios.github.io/pangea_in_latent_space/",
  "el mapa no es el territorio": "https://www.youtube.com/watch?v=MOoYjYLFhl0",
  "tectónicas de la otredad": "https://marlonbarrios.github.io/tectonics_of_otherness/",
  "pueblos pangea": "https://originarios.vercel.app/",
  "Fuga Transcriptural": "https://transcripturalfugue-marlonbarrios-projects.vercel.app/",
  "fantasmas y ancestros": "https://in-pursuit-of-stolen-ghosts.vercel.app/",
  "manifiesto de la resistencia poética": "https://www.youtube.com/watch?v=yrmAd6rIdqk&t=34s",
  "cumbia rebajada/formas migrantes": "https://en.wikipedia.org/wiki/I%27m_No_Longer_Here",
  "Project Cybersyn": "https://en.wikipedia.org/wiki/Project_Cybersyn",
  "economía solidaria": "https://en.wikipedia.org/wiki/Care_work",
  "tecno-economía": "https://en.wikipedia.org/wiki/Digital_economy",
  "el sur del norte/sami": "https://www.modernamuseet.se/stockholm/en/exhibitions/britta-marakatt-labba/",
  "iluminación oscura": "https://en.wikipedia.org/wiki/Dark_enlightenment",
  "UAIIN universidad indígena": "https://uaiinpebi-cric.edu.co/la-universidad/#resena",
  "El Emigrante - historia infinita": "https://el-immigrante.vercel.app/"
};

// Add new global variables for boundary animation
let boundaryNoiseOffset = 0;
const NOISE_INCREMENT = 0.02;
const ELASTICITY = 40; // Controls how much the boundary can stretch

// Add to global variables
let controlPanelWidth = 220;  // Fixed width
let controlPanelHeight = 260; // Fixed height to fit all controls
let controlPanelMargin = 20;  // Fixed margin

// Update the COLORS object with the new palette
const COLORS = {
  darkBlue: "#26547c",
  red: "#ef476f",
  yellow: "#ffd166",
  teal: "#06d6a0",
  white: "#fcfcfc"
};

// Add new global variable
let showPangeaConnections = false;

// Add a new constant for base node size
const BASE_NODE_SIZE = 20; // Increased from 20

// Update the boundary text variables
const BOUNDARY_TEXT = "pangea in latent space";
let boundaryPosition = 0;
let textWave = 10; // Increased from 0 to 10
const BOUNDARY_OFFSET =-50; // Increased from 60 to 100 to keep text further from boundary

// Add new state variable at the top
let useVisualTrails = false;
let showBoundaryFill = true; // New variable for boundary fill

// Add these variables at the top
let outsideBoids = [];
let insideBoids = [];
const NUM_OUTSIDE_BOIDS = 60;
const NUM_INSIDE_BOIDS = 45;
const NUM_CHASE_BOIDS = 50;  // New third population

// Add new boid array
let chaseBoids = [];  // Third population
let showGroups = true;  // Changed from showPopulation
let showOutsideGroup = true;  // Changed from showOutsidePopulation
let showInsideGroup = true;   // Changed from showInsidePopulation
let showChaseGroup = true;    // Changed from showChasePopulation

// Add global variable to track hovered topic
let hoveredTopicIndex = -1;

// Add Boid class
class Boid {
  constructor(x, y, type) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
    this.maxForce = 0.15;
    this.maxSpeed = 2.5;
    this.type = type; // 'outside', 'inside', or 'chase'
    this.size = 4.0;
  }

  edges() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }

  align(boids) {
    let perceptionRadius = 40;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  cohesion(boids) {
    let perceptionRadius = 80;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        steering.add(other.position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  separation(boids) {
    let perceptionRadius = 40;
    let steering = createVector();
    let total = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < perceptionRadius) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.div(d * d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  seekBoundary(hull) {
    if (!hull || hull.length < 3) return createVector();
    
    let steering = createVector();
    let closestPoint = null;
    let minDist = Infinity;
    
    // Find closest point on boundary
    for (let i = 0; i < hull.length; i++) {
      let point = hull[i];
      let nextPoint = hull[(i + 1) % hull.length];
      
      // Find closest point on the line segment
      let closest = this.getClosestPointOnLine(point, nextPoint);
      let d = dist(this.position.x, this.position.y, closest.x, closest.y);
      
      if (d < minDist) {
        minDist = d;
        closestPoint = closest;
      }
    }
    
    if (closestPoint) {
      // All boids try to stay inside
      if (minDist < 50) {
        // If close to boundary, steer away from it
        steering = p5.Vector.sub(this.position, closestPoint);
      } else if (!this.isInsideHull(hull)) {
        // If outside, steer back inside
        steering = p5.Vector.sub(closestPoint, this.position);
        steering.mult(2); // Stronger force to return inside
      }
      
      if (steering.mag() > 0) {
        steering.setMag(this.maxSpeed);
        steering.sub(this.velocity);
        steering.limit(this.maxForce * 1.5); // Stronger boundary force
      }
    }
    
    return steering;
  }

  // Helper method to check if boid is inside hull
  isInsideHull(hull) {
    let inside = false;
    for (let i = 0, j = hull.length - 1; i < hull.length; j = i++) {
      let xi = hull[i].x, yi = hull[i].y;
      let xj = hull[j].x, yj = hull[j].y;
      
      if (((yi > this.position.y) !== (yj > this.position.y)) &&
          (this.position.x < (xj - xi) * (this.position.y - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    return inside;
  }

  // Helper method to find closest point on line segment
  getClosestPointOnLine(a, b) {
    let ax = this.position.x - a.x;
    let ay = this.position.y - a.y;
    let bx = b.x - a.x;
    let by = b.y - a.y;
    
    let t = (ax * bx + ay * by) / (bx * bx + by * by);
    t = constrain(t, 0, 1);
    
    return createVector(
      a.x + t * bx,
      a.y + t * by
    );
  }

  // Add new method to avoid circles
  avoidCircles(positions) {
    let steering = createVector();
    
    positions.forEach((pos, index) => {
      if (index === 0) return; // Skip Pangea node
      
      let size = (pos.connections + 1) * BASE_NODE_SIZE;
      let d = dist(this.position.x, this.position.y, pos.x, pos.y);
      
      // If boid is too close to circle, steer away
      let avoidanceRadius = size/2 + 20; // Extra padding
      if (d < avoidanceRadius) {
        let diff = p5.Vector.sub(this.position, createVector(pos.x, pos.y));
        diff.div(d * d); // Stronger avoidance when closer
        steering.add(diff);
      }
    });
    
    if (steering.mag() > 0) {
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce * 2); // Stronger avoidance force
    }
    return steering;
  }

  // Add method to chase or be attracted to other populations
  chase(boids) {
    let steering = createVector();
    let perceptionRadius = 100;
    let total = 0;
    
    for (let other of boids) {
      if (other === this) continue;
      
      let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (d < perceptionRadius) {
        let force = p5.Vector.sub(other.position, this.position);
        
        // Different behaviors based on type
        if (this.type === 'outside') {
          // Outside boids chase inside boids
          if (other.type === 'inside') force.mult(1);
          else if (other.type === 'chase') force.mult(-1);
        } else if (this.type === 'inside') {
          // Inside boids chase chase boids
          if (other.type === 'chase') force.mult(1);
          else if (other.type === 'outside') force.mult(-1);
        } else if (this.type === 'chase') {
          // Chase boids chase outside boids
          if (other.type === 'outside') force.mult(1);
          else if (other.type === 'inside') force.mult(-1);
        }
        
        steering.add(force);
        total++;
      }
    }
    
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  // Update flock method to include chase behavior
  flock(boids, hull, positions) {
    let alignment = this.align(boids);
    let cohesion = this.cohesion(boids);
    let separation = this.separation(boids);
    let boundary = this.seekBoundary(hull);
    let avoidance = this.avoidCircles(positions);
    let chase = this.chase(boids);
    
    alignment.mult(0.6);
    cohesion.mult(0.6);
    separation.mult(1.6);
    boundary.mult(1.0);
    avoidance.mult(2.2);
    chase.mult(1.5);  // Chase force
    
    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
    this.acceleration.add(boundary);
    this.acceleration.add(avoidance);
    this.acceleration.add(chase);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  show() {
    strokeWeight(this.size);
    // Different colors for each type
    let boidColor;
    if (this.type === 'outside') {
      boidColor = COLORS.teal + "CC";
    } else if (this.type === 'inside') {
      boidColor = COLORS.yellow + "CC";
    } else {
      boidColor = COLORS.red + "CC"; // Chase boids are red
    }
    stroke(boidColor);
    point(this.position.x, this.position.y);
  }
}
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
  background(COLORS.darkBlue);
  
  // Initialize with English
  currentLanguage = 'en';
  
  // Create slider with very low initial value
  slider = createSlider(0.0001, 0.01, 0.0002, 0.0001); // min, max, default, step
  slider.position(20, height - 40);
  slider.style('width', '120px');
  
  // Add language toggle with English as default
  addLanguageToggle();
  
  // Initialize boids
  for (let i = 0; i < NUM_OUTSIDE_BOIDS; i++) {
    outsideBoids.push(new Boid(random(width), random(height), 'outside'));
  }
  
  // Initialize inside boids
  for (let i = 0; i < NUM_INSIDE_BOIDS; i++) {
    insideBoids.push(new Boid(width/2, height/2, 'inside'));
  }

  // Initialize chase boids
  for (let i = 0; i < NUM_CHASE_BOIDS; i++) {
    chaseBoids.push(new Boid(random(width), random(height), 'chase'));
  }
  
  // Update type for existing boids
  for (let boid of outsideBoids) {
    boid.type = 'outside';
  }
  for (let boid of insideBoids) {
    boid.type = 'inside';
  }
  
  updateControlPanelDimensions(); // Initialize panel dimensions
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  slider.position(20, height - 40);
  updateControlPanelDimensions(); // Update panel dimensions on resize
  }
  
  function draw() {
    // Reset to crosshairs at start of each frame
    cursor(CROSS);

    // Instead of clearing with background, use transparent overlay
    if (useVisualTrails) {
      // Add multiple semi-transparent layers for more intense trails
      push();
      noStroke();
      
      // First layer - very transparent for long trails
      fill(COLORS.darkBlue + '10');
      rect(0, 0, width, height);
      
      // Second layer - slightly more opaque for medium trails
      fill(COLORS.darkBlue + '08');
      rect(0, 0, width, height);
      
      // Add a subtle blur effect
      drawingContext.filter = 'blur(1px)';
      pop();
    } else {
      background(COLORS.darkBlue);
      drawingContext.filter = 'none';
    }

    // Get speed from slider with very small increments
    let speed = slider.value();

    // Update positions with minimal movement
    offsets.forEach(off => {
      off.xoff += speed;
      off.yoff += speed;
      off.roff += speed;
    });

    // Draw all elements
    drawConceptsAndLines();
    drawControlPanel();
    drawTopicsList();

    // Draw slider label
    push();
    textAlign(LEFT, CENTER);
    textSize(14);
    fill(COLORS.white);
    text('TECTONICS', 20, height - 55);
    pop();
  }
  
  function drawConceptsAndLines() {
    let positions = offsets.map(off => ({
      x: noise(off.xoff) * width,
      y: noise(off.yoff) * height,
    connections: 0
    }));
  
  // Count connections without special case for index 0
      positions.forEach((pos, i) => {
        for (let j = i + 1; j < positions.length; j++) {
          let d = dist(pos.x, pos.y, positions[j].x, positions[j].y);
      if (d < 200) {
        positions[i].connections++;
        positions[j].connections++;
      }
    }
  });

  // Collision avoidance without skipping any nodes
  const REPULSION_STRENGTH = 0.5;
  const ITERATIONS = 5;
  const MIN_DISTANCE = 150;

  for (let iter = 0; iter < ITERATIONS; iter++) {
    positions.forEach((pos1, i) => {
      let size1 = (pos1.connections + 1) * BASE_NODE_SIZE;
      let radius1 = size1 / 2;

      positions.forEach((pos2, j) => {
        if (i >= j) return; // Only skip self and already processed
        
        let size2 = (pos2.connections + 1) * BASE_NODE_SIZE;
        let radius2 = size2 / 2;
        
        let minDist = Math.max((radius1 + radius2) * 1.2, MIN_DISTANCE);
        let d = dist(pos1.x, pos1.y, pos2.x, pos2.y);
        
        if (d < minDist) {
          let angle = atan2(pos2.y - pos1.y, pos2.x - pos1.x);
          let overlap = minDist - d;
          
          let moveX = cos(angle) * overlap * REPULSION_STRENGTH;
          let moveY = sin(angle) * overlap * REPULSION_STRENGTH;
          
          pos1.x -= moveX * 0.5;
          pos1.y -= moveY * 0.5;
          pos2.x += moveX * 0.5;
          pos2.y += moveY * 0.5;
          
          let padding = 50;
          pos1.x = constrain(pos1.x, radius1 + padding, width - radius1 - padding);
          pos1.y = constrain(pos1.y, radius1 + padding, height - radius1 - padding);
          pos2.x = constrain(pos2.x, radius2 + padding, width - radius2 - padding);
          pos2.y = constrain(pos2.y, radius2 + padding, height - radius2 - padding);
        }
      });
    });
  }

  // Draw lines without skipping any nodes
  if (showLines) {
    positions.forEach((pos1, i) => {
      positions.forEach((pos2, j) => {
        if (i >= j) return;
        let d = dist(pos1.x, pos1.y, pos2.x, pos2.y);
        if (d < 200) {
          let thickness = map(d, 0, 200, 8, 1);
          stroke(COLORS.white);
          strokeWeight(thickness);
          line(pos1.x, pos1.y, pos2.x, pos2.y);
        }
      });
    });
  }

  // Draw boundary if enabled
  if (showBoundary) {
    let hullPoints = [];
    positions.forEach((pos, index) => {
      if (index === 0) return;
      let size = (pos.connections + 1) * 20;
      let radius = (size / 2) * 1.5; // Make boundary 50% larger than circles
      
      // Create more points around each circle for smoother boundary
      for (let angle = 0; angle < TWO_PI; angle += PI/8) {
        hullPoints.push({
          x: pos.x + cos(angle) * radius,
          y: pos.y + sin(angle) * radius
        });
      }
    });
    
    let hull = getConvexHull(hullPoints);
    if (hull.length > 2) {
      // Store points for text placement
      boundaryTextPoints = [];
      
      // Only draw fill if enabled
      if (showBoundaryFill) {
        beginShape();
        noStroke();
        let fillColor = color(COLORS.teal);
        fillColor.setAlpha(30); // More transparent fill
        fill(fillColor);
        
        // Draw the shape with fill
        for (let i = 0; i < hull.length; i++) {
          let point = hull[i];
          let nextPoint = hull[(i + 1) % hull.length];
          
          // Increase elasticity for larger boundary
          let dx = nextPoint.x - point.x;
          let dy = nextPoint.y - point.y;
          let distance = sqrt(dx * dx + dy * dy);
          
          let noiseFactor = noise(point.x * 0.01 + boundaryNoiseOffset, 
                                point.y * 0.01 + boundaryNoiseOffset);
          let displacement = map(noiseFactor, 0, 1, -ELASTICITY * 1.2, ELASTICITY * 1.2);
          
          let cp1x = point.x + dx/3 - dy * displacement/distance;
          let cp1y = point.y + dy/3 + dx * displacement/distance;
          let cp2x = point.x + 2*dx/3 + dy * displacement/distance;
          let cp2y = point.y + 2*dy/3 - dx * displacement/distance;
          
          if (i === 0) {
            vertex(point.x, point.y);
          }
          
          bezierVertex(cp1x, cp1y, cp2x, cp2y, nextPoint.x, nextPoint.y);
        }
        endShape(CLOSE);
      }
      
      // Draw the boundary stroke
      noFill();
      stroke(COLORS.teal);
      strokeWeight(2); // Thinner stroke for larger boundary
      
      beginShape();
      for (let i = 0; i < hull.length; i++) {
        let point = hull[i];
        let nextPoint = hull[(i + 1) % hull.length];
        
        let dx = nextPoint.x - point.x;
        let dy = nextPoint.y - point.y;
        let distance = sqrt(dx * dx + dy * dy);
        
        let noiseFactor = noise(point.x * 0.01 + boundaryNoiseOffset, 
                              point.y * 0.01 + boundaryNoiseOffset);
        let displacement = map(noiseFactor, 0, 1, -ELASTICITY * 1.2, ELASTICITY * 1.2);
        
        let cp1x = point.x + dx/3 - dy * displacement/distance;
        let cp1y = point.y + dy/3 + dx * displacement/distance;
        let cp2x = point.x + 2*dx/3 + dy * displacement/distance;
        let cp2y = point.y + 2*dy/3 - dx * displacement/distance;
        
        if (i === 0) {
          vertex(point.x, point.y);
        }
        
        bezierVertex(cp1x, cp1y, cp2x, cp2y, nextPoint.x, nextPoint.y);
      }
      endShape(CLOSE);
      
      // Draw the elastic text
      drawBoundaryText(hull);
      
      boundaryNoiseOffset += NOISE_INCREMENT;
    }
  }

  // Draw groups completely independently
  if (showGroups) {
    // Calculate hull for groups even if boundary is hidden
    let hullPoints = [];
    positions.forEach((pos, index) => {
      if (index === 0) return;
      hullPoints.push(pos);
    });
    let hull = getConvexHull(hullPoints);
    
    let allGroups = [
      ...(showOutsideGroup ? outsideBoids : []),
      ...(showInsideGroup ? insideBoids : []),
      ...(showChaseGroup ? chaseBoids : [])
    ];
    
    if (showOutsideGroup) {
      for (let member of outsideBoids) {
        member.edges();
        member.flock(allGroups, hull, positions);
        member.update();
        member.show();
      }
    }
    
    if (showInsideGroup) {
      for (let member of insideBoids) {
        member.edges();
        member.flock(allGroups, hull, positions);
        member.update();
        member.show();
      }
    }
    
    if (showChaseGroup) {
      for (let member of chaseBoids) {
        member.edges();
        member.flock(allGroups, hull, positions);
        member.update();
        member.show();
      }
    }
  }

  // Draw nodes
  positions.forEach((pos, index) => {
    let size = (pos.connections + 1) * BASE_NODE_SIZE;
    
    // Check hover for circle
    let d = dist(mouseX, mouseY, pos.x, pos.y);
    if (d < size/2) {
      hoveredIndex = index;
      if (urls[translations[currentLanguage].concepts[index]]) {
        cursor(HAND);
      }
    }
    
    // Draw circles if enabled
    if (showEllipses) {
      // Draw highlight for list hover
      if (index === hoveredTopicIndex) {
        push();
        noFill();
        stroke(getColorForConcept(index));
        strokeWeight(3);
        ellipse(pos.x, pos.y, size + 12, size + 12);
        pop();
      }
      
      // Draw hover effect for direct circle hover
      if (d < size/2) {
        push();
        stroke(255, 255, 255, 100);
        strokeWeight(3);
        fill(255, 255, 255, 40);
        ellipse(pos.x, pos.y, size + 12, size + 12);
        pop();
      }
      
      // Draw base circle
      push();
      stroke(255, 255, 255, 100);
      strokeWeight(1);
      fill(getColorForConcept(index));
      ellipse(pos.x, pos.y, size, size);
      pop();
    }
    
    // Draw text if enabled
    if (showText) {
      push();
      textAlign(CENTER, CENTER);
      textSize(16);
      textStyle(BOLD);
      noStroke();
      fill("#1a1a1a");
      text(translations[currentLanguage].concepts[index], pos.x, pos.y);
      textStyle(NORMAL);
      pop();
    }
  });

  // Reset hover state if not hovering over any circle
  if (hoveredIndex === -1) {
    showPangeaConnections = false;
    cursor(AUTO);
  }
}

function getColorForConcept(index) {
  // Use index to maintain same colors regardless of language
  switch (index) {
    case 0:  return color(239, 71, 111, 220);  // Coral red
    case 1:  return color(255, 209, 102, 220); // Golden yellow
    case 2:  return color(86, 163, 166, 220);  // Ocean blue
    case 3:  return color(255, 107, 107, 220); // Salmon pink
    case 4:  return color(167, 201, 87, 220);  // Lime green
    case 5:  return color(131, 96, 195, 220);  // Purple
    case 6:  return color(255, 170, 51, 220);  // Orange
    case 7:  return color(66, 103, 178, 220);  // Facebook blue
    case 8:  return color(255, 147, 188, 220); // Pink
    case 9:  return color(95, 204, 132, 220);  // Forest green
    case 10: return color(64, 156, 255, 220);  // Sky blue
    case 11: return color(180, 180, 180, 220); // Gray
    case 12: return color(255, 102, 102, 220); // Bright red
    case 13: return color(255, 153, 102, 220); // Bright orange
    default: return color(180, 180, 180, 220); // Default gray
  }
  }
  
  function keyPressed() {
    if (key === 'l') {
      showLines = !showLines;
    } else if (key === 'c') {
      showEllipses = !showEllipses;
    } else if (key === 't') {
      showText = !showText;
    showList = !showList; // Toggle list with text
  } else if (key === 'b') {
    showBoundary = !showBoundary;
  } else if (key === 'v') {
    useVisualTrails = !useVisualTrails;
    if (!useVisualTrails) {
      background(COLORS.darkBlue);
    }
  } else if (key === 'f') {
    showBoundaryFill = !showBoundaryFill;
  } else if (key === 'p') {
    showGroups = !showGroups;
  } else if (key === '1') {
    showOutsideGroup = !showOutsideGroup;
  } else if (key === '2') {
    showInsideGroup = !showInsideGroup;
  } else if (key === '3') {
    showChaseGroup = !showChaseGroup;
  }
}

// Add this new function to calculate the convex hull
function getConvexHull(points) {
  // Graham Scan algorithm for convex hull
  function cross(o, a, b) {
    return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  }
  
  points.sort((a, b) => a.y === b.y ? a.x - b.x : a.y - b.y);
  
  let lower = [];
  for (let i = 0; i < points.length; i++) {
    while (lower.length >= 2 && cross(lower[lower.length-2], lower[lower.length-1], points[i]) <= 0) {
      lower.pop();
    }
    lower.push(points[i]);
  }
  
  let upper = [];
  for (let i = points.length - 1; i >= 0; i--) {
    while (upper.length >= 2 && cross(upper[upper.length-2], upper[upper.length-1], points[i]) <= 0) {
      upper.pop();
    }
    upper.push(points[i]);
  }
  
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

// Add mouseClicked function
function mouseClicked() {
  let positions = offsets.map(off => ({
    x: noise(off.xoff) * width,
    y: noise(off.yoff) * height,
    r: noise(off.roff) * 200,
    connections: 0
  }));

  // Calculate connections for accurate circle sizes
  positions.forEach((pos, i) => {
    for (let j = i + 1; j < positions.length; j++) {
      if (i === 0 || j === 0) {
        positions[i].connections++;
        positions[j].connections++;
      } else {
        let d = dist(pos.x, pos.y, positions[j].x, positions[j].y);
        if (d < 200) {
          positions[i].connections++;
          positions[j].connections++;
        }
      }
    }
  });

  // Check if click is within any circle
  positions.forEach((pos, index) => {
    let size = (pos.connections + 1) * 20;
    let d = dist(mouseX, mouseY, pos.x, pos.y);
    if (d < size/2) {
      let concept = translations[currentLanguage].concepts[index];
      console.log('Clicked on:', concept); // Debug log
      
      if (urls[concept]) {
        console.log('Opening URL:', urls[concept]); // Debug log
        window.open(urls[concept], '_blank').focus();
      } else {
        console.log('No URL found for:', concept); // Debug log
      }
    }
  });
}

// Update drawControlPanel function
function drawControlPanel() {
  let x = width - controlPanelWidth - controlPanelMargin;
  let y = controlPanelMargin;
  let controls = translations[currentLanguage].controls;
  
  // Main panel with higher opacity
  push();
  fill(COLORS.darkBlue + "EE"); // More opaque background
  noStroke();
  rect(x, y, controlPanelWidth, controlPanelHeight, 10);
  
  // Content
  textAlign(LEFT, TOP);
  textSize(14); // Fixed text size
  fill(COLORS.white);
  let textX = x + 15;
  let textY = y + 15;
  let lineHeight = 22; // Slightly increased for better readability
  
  // Title
  push();
  textStyle(BOLD);
  fill(COLORS.white);
  text(controls.title, textX, textY);
  pop();
  textY += lineHeight * 1.2;
  
  // Control items
  const items = [
    { key: 'L', prop: 'lines', state: showLines },
    { key: 'T', prop: 'text', state: showText },
    { key: 'B', prop: 'boundary', state: showBoundary },
    { key: 'C', prop: 'circles', state: showEllipses },
    { key: 'V', prop: 'trails', state: useVisualTrails },
    { key: 'F', prop: 'fill', state: showBoundaryFill },
    { key: 'P', prop: 'groups', state: showGroups },
    { key: '1', prop: 'tealGroup', state: showOutsideGroup },
    { key: '2', prop: 'yellowGroup', state: showInsideGroup },
    { key: '3', prop: 'redGroup', state: showChaseGroup }
  ];

  items.forEach(item => {
    // Highlight active states more distinctly
    if (item.state) {
      fill(COLORS.white);
      textStyle(BOLD);
    } else {
      fill(COLORS.white + 'AA');
      textStyle(NORMAL);
    }
    text(`[${item.key}] ${controls[item.prop]}: ${item.state ? 'ON' : 'OFF'}`, textX, textY);
    textY += lineHeight;
  });
  
  pop();
}

// Updated drawBoundaryText function
function drawBoundaryText(hull) {
  if (hull.length < 2) return;
  
  // Text properties
  textSize(18);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  noStroke();
  
  // Even slower animation speeds
  boundaryPosition = (boundaryPosition + 0.0001) % 1; // Much slower movement (was 0.0003)
  textWave = (textWave + 0.005) % TWO_PI; // Slower wave (was 0.01)
  
  // Find position on hull
  let totalLength = 0;
  let lengths = [];
  
  // Calculate total perimeter length
  for (let i = 0; i < hull.length; i++) {
    let point = hull[i];
    let nextPoint = hull[(i + 1) % hull.length];
    let segLength = dist(point.x, point.y, nextPoint.x, nextPoint.y);
    lengths.push(segLength);
    totalLength += segLength;
  }
  
  let targetLength = totalLength * boundaryPosition;
  let currentLength = 0;
  
  for (let i = 0; i < hull.length; i++) {
    let point = hull[i];
    let nextPoint = hull[(i + 1) % hull.length];
    let segLength = lengths[i];
    
    if (currentLength + segLength >= targetLength) {
      let t = (targetLength - currentLength) / segLength;
      let x = lerp(point.x, nextPoint.x, t);
      let y = lerp(point.y, nextPoint.y, t);
      
      // Calculate normal vector to move text away from boundary
      let dx = nextPoint.x - point.x;
      let dy = nextPoint.y - point.y;
      let length = sqrt(dx * dx + dy * dy);
      let normalX = -dy / length;
      let normalY = dx / length;
      
      // Move text position away from boundary
      x += normalX * BOUNDARY_OFFSET;
      y += normalY * BOUNDARY_OFFSET;
      
      push();
      translate(x, y);
      
      // Gentler floating motion
      let waveOffset = sin(textWave) * 1.5 + cos(textWave * 0.5) * 0.75;
      translate(0, waveOffset);
      
      // Check if mouse is near text
      let d = dist(mouseX, mouseY, x, y);
      if (d < 30) {
        // Just change color and cursor, no rectangle
        fill(COLORS.yellow);
        // Only show hand cursor if there's a URL
        if (urls[translations[currentLanguage].boundary]) {
          cursor(HAND);
        }
        if (mouseIsPressed && urls[translations[currentLanguage].boundary]) {
          window.open(urls[translations[currentLanguage].boundary], '_blank');
        }
      } else {
        // More subtle color pulsing
        let fluidPulse = (sin(frameCount * 0.02 + textWave) * 0.3 + 0.7);
        let pulseColor = lerpColor(
          color(COLORS.teal), 
          color(COLORS.white), 
          fluidPulse
        );
        fill(pulseColor);
      }
      
      // Draw text with subtle shadow
      fill(COLORS.darkBlue + "80");
      text(translations[currentLanguage].boundary, 1, 1);
      fill(d < 30 ? COLORS.yellow : COLORS.teal);
      text(translations[currentLanguage].boundary, 0, 0);
      
      pop();
      break;
    }
    currentLength += segLength;
  }
}

// Add language toggle function
function addLanguageToggle() {
  let button = createButton(currentLanguage === 'es' ? '🇺🇸 English' : '🇪🇸 Español');
  button.position(10, 10);
  button.style('z-index', '100');
  button.style('padding', '8px 16px');
  button.style('font-size', '14px');
  button.style('border', 'none');
  button.style('border-radius', '4px');
  button.style('background', 'rgba(38, 84, 124, 0.8)');
  button.style('color', 'white');
  button.style('cursor', 'pointer');
  button.mousePressed(() => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    button.html(currentLanguage === 'es' ? '🇺🇸 English' : '🇪🇸 Español');
  });
}

// Add new global variables
let showList = false; // Controls list visibility
let listX = 20; // List position from left
let listY = 60; // List position from top (below language button)
let listSpacing = 25; // Spacing between list items

// Update drawTopicsList function
function drawTopicsList() {
  if (!showList) return;

  push();
  // Draw semi-transparent background for list
  fill(COLORS.darkBlue + 'CC');
  noStroke();
  rect(10, 50, 300, height - 60, 10);

  // Draw list items
  textAlign(LEFT, TOP);
  textSize(14);
  let y = listY;
  
  translations[currentLanguage].concepts.forEach((concept, index) => {
    // Check if mouse is over this item
    let isHover = mouseX > listX && mouseX < listX + 280 &&
                  mouseY > y && mouseY < y + listSpacing;
    
    if (isHover) {
      hoveredTopicIndex = index;
      fill(getColorForConcept(index));
      cursor(HAND);
    } else {
      fill(255);
    }

    // Draw the text
    text(concept, listX, y);
    
    // Add underline if it has a URL
    if (urls[concept]) {
      let textW = textWidth(concept);
      if (isHover) {
        stroke(getColorForConcept(index));
      } else {
        stroke(255, 255, 255, 100);
      }
      strokeWeight(1);
      line(listX, y + 18, listX + textW, y + 18);
    }
    
    y += listSpacing;
  });
  pop();
}

// Add click handler for list items
function mousePressed() {
  if (showList) {
    let y = listY;
    translations[currentLanguage].concepts.forEach((concept) => {
      if (mouseX > listX && mouseX < listX + 280 &&
          mouseY > y && mouseY < y + listSpacing) {
        if (urls[concept]) {
          window.open(urls[concept], '_blank');
        }
      }
      y += listSpacing;
    });
  }
  
  // ... rest of your existing mousePressed code ...
  }

// Update control panel dimensions to be fixed and visible
function updateControlPanelDimensions() {
  controlPanelWidth = 220;  // Fixed width
  controlPanelHeight = 260; // Fixed height to fit all controls
  controlPanelMargin = 20;  // Fixed margin
}