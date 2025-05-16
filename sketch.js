// Define variables for Perlin noise offsets
let offsets = [
    { xoff: 500, yoff: 10, roff: 400 }, // Tectonics of Otherness
    { xoff: 700, yoff: 20, roff: 500 }, // Peoples and Features
    { xoff: 1000, yoff: 300, roff: 600 }, // Language
    { xoff: 1100, yoff: 400, roff: 700 }, // Memory and Ancestors
    { xoff: 1200, yoff: 500, roff: 800 }, // Manifesto the Residtencia Poetica
    { xoff: 1300, yoff: 600, roff: 900 }, // Cumbia Rebajada
    { xoff: 1400, yoff: 700, roff: 1000 }, // Cybernetics and Government
    { xoff: 1500, yoff: 800, roff: 1100 }, // Tejedoras (economias de cuidado)
    { xoff: 1600, yoff: 900, roff: 1200 }, // Techno Economy
    { xoff: 1700, yoff: 1000, roff: 1300 }, // Pangea in Latent Space
    { xoff: 1800, yoff: 1100, roff: 1400 }, // The north of the south/Sami
    { xoff: 1900, yoff: 1200, roff: 1500 }, // Dark Enlightment
];
  
  
  
  let concepts = [
    "the map is not the territory", 
    "tectonics of otherness", 
    "pangea people",
    "written language", 
    "ghosts and ancestors", 
    "manifesto the resistencia poetica",
    "cumbia rebajada/migrating forms", 
    "cyber-government", 
    "solidarity economy", 
    "techno-economy",
    "the south of the north/sami",
    "dark enlightment",
  ];
  
  // Visibility flags
  let showLines = true;
  let showEllipses = false;
  let showText = false; // Make sure text is off by default
  
  let slider; // Slider for controlling animation speed
  
  // Add these variables at the top with other global variables
  let hoveredIndex = -1; // Track which circle is being hovered
  
  // Add to the global variables
  let showBoundary = true;
  
  // Add URLs object at the top with other global variables
  const urls = {
    "pangea in latent space": "https://marlonbarrios.github.io/pangea_in_latent_space/",
    "the map is not the territory": "https://en.wikipedia.org/wiki/Cartography",
    "tectonics of otherness": "https://marlonbarrios.github.io/tectonics_of_otherness/",
    "pangea people": "https://originarios.vercel.app/",
    "written language": "https://en.wikipedia.org/wiki/Language",
    "ghosts and ancestors": "https://en.wikipedia.org/wiki/Cultural_memory",
    "manifesto the resistencia poetica": "https://www.youtube.com/watch?v=yrmAd6rIdqk&t=34s",
    "cumbia rebajada/migrating forms": "https://en.wikipedia.org/wiki/Cumbia",
    "cyber-government": "https://en.wikipedia.org/wiki/Cybernetics",
    "solidarity economy": "https://en.wikipedia.org/wiki/Care_work",
    "techno-economy": "https://en.wikipedia.org/wiki/Digital_economy",
    "the south of the north/sami": "https://en.wikipedia.org/wiki/Sami_people",
    "dark enlightment": "https://en.wikipedia.org/wiki/Dark_enlightenment"
  };
  
  // Add new global variables for boundary animation
  let boundaryNoiseOffset = 0;
  const NOISE_INCREMENT = 0.02;
  const ELASTICITY = 40; // Controls how much the boundary can stretch
  
  // Add to global variables
  let controlPanelWidth = 200;
  let controlPanelHeight = 120;
  let controlPanelMargin = 20;

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

  function setup() {
    createCanvas(windowWidth, windowHeight);
  
    console.log('URLs loaded:', urls); // Debug log
  
    // Initialize the slider with new position and half speed
    slider = createSlider(0, 0.02, 0.0005, 0.001);
    slider.position(20, height - 40);
    slider.style('width', '170px');
  
    // Set default cursor to crosshairs
    cursor(CROSS);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    slider.position(20, height - 40);
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
      fill(COLORS.darkBlue + '10'); // More transparent
      rect(0, 0, width, height);
      
      // Second layer - slightly more opaque for medium trails
      fill(COLORS.darkBlue + '08'); // Even more transparent
      rect(0, 0, width, height);
      
      // Add a subtle blur effect
      drawingContext.filter = 'blur(1px)';
      pop();
    } else {
      // Normal background clear
      background(COLORS.darkBlue);
      drawingContext.filter = 'none';
    }
  
    let speed = slider.value();
  
    offsets.forEach(off => {
      off.xoff += speed;
      off.yoff += speed;
      off.roff += speed;
    });
  
    drawConceptsAndLines();
    
    drawControlPanel();
    
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
      r: noise(off.roff) * 200,
      connections: 0
    }));
  
    // First count connections
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
  
    // Add collision avoidance with stronger repulsion
    const REPULSION_STRENGTH = 0.5; // Increased from 0.5
    const ITERATIONS = 5; // Increased from 2
    const MIN_DISTANCE = 150; // Minimum distance between circle centers
  
    // Perform multiple iterations of collision resolution
    for (let iter = 0; iter < ITERATIONS; iter++) {
      positions.forEach((pos1, i) => {
        if (i === 0) return; // Skip Pangea node
        
        let size1 = (pos1.connections + 1) * BASE_NODE_SIZE;
        let radius1 = size1 / 2;
  
        positions.forEach((pos2, j) => {
          if (i <= j) return; // Skip self and already processed pairs
          
          let size2 = (pos2.connections + 1) * BASE_NODE_SIZE;
          let radius2 = size2 / 2;
          
          let minDist = Math.max((radius1 + radius2) * 1.2, MIN_DISTANCE); // Use larger of minimum distance or circle sizes
          let d = dist(pos1.x, pos1.y, pos2.x, pos2.y);
          
          if (d < minDist) {
            // Calculate repulsion vector
            let angle = atan2(pos2.y - pos1.y, pos2.x - pos1.x);
            let overlap = minDist - d;
            
            // Move circles apart with stronger force
            let moveX = cos(angle) * overlap * REPULSION_STRENGTH;
            let moveY = sin(angle) * overlap * REPULSION_STRENGTH;
            
            // Apply movement (split between both circles)
            pos1.x -= moveX * 0.5;
            pos1.y -= moveY * 0.5;
            pos2.x += moveX * 0.5;
            pos2.y += moveY * 0.5;
            
            // Keep circles within canvas bounds with padding
            let padding = 50; // Increased padding from canvas edges
            pos1.x = constrain(pos1.x, radius1 + padding, width - radius1 - padding);
            pos1.y = constrain(pos1.y, radius1 + padding, height - radius1 - padding);
            pos2.x = constrain(pos2.x, radius2 + padding, width - radius2 - padding);
            pos2.y = constrain(pos2.y, radius2 + padding, height - radius2 - padding);
          }
        });
      });
    }
  
    // Draw lines if enabled
    if (showLines || showPangeaConnections) {
      positions.forEach((pos, i) => {
        // Skip Pangea (index 0) in line drawing
        if (i === 0) return;
        
        for (let j = i + 1; j < positions.length; j++) {
          if (j === 0) continue; // Skip Pangea connections
          
          let d = dist(pos.x, pos.y, positions[j].x, positions[j].y);
          if (d < 200) {
            let thickness = map(d, 0, 200, 8, 1);
            stroke(COLORS.white);
            strokeWeight(thickness);
            line(pos.x, pos.y, positions[j].x, positions[j].y);
          }
        }
      });
    }
  
    // Draw boundary if enabled - this represents Pangea's presence
    if (showBoundary) {
      let hullPoints = [];
      positions.forEach((pos, index) => {
        if (index === 0) return;
        let size = (pos.connections + 1) * 20;
        let radius = size / 2;
        for (let angle = 0; angle < TWO_PI; angle += PI/4) {
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
          fillColor.setAlpha(40); // Increased from 15 to 40 for more visibility
          fill(fillColor);
          
          // Draw the shape with fill
          for (let i = 0; i < hull.length; i++) {
            let point = hull[i];
            let nextPoint = hull[(i + 1) % hull.length];
            
            // Calculate control points for bezier
            let dx = nextPoint.x - point.x;
            let dy = nextPoint.y - point.y;
            let distance = sqrt(dx * dx + dy * dy);
            
            let noiseFactor = noise(point.x * 0.01 + boundaryNoiseOffset, 
                                  point.y * 0.01 + boundaryNoiseOffset);
            let displacement = map(noiseFactor, 0, 1, -ELASTICITY, ELASTICITY);
            
            let cp1x = point.x + dx/3 - dy * displacement/distance;
            let cp1y = point.y + dy/3 + dx * displacement/distance;
            let cp2x = point.x + 2*dx/3 + dy * displacement/distance;
            let cp2y = point.y + 2*dy/3 - dx * displacement/distance;
            
            if (i === 0) {
              vertex(point.x, point.y);
            }
            
            bezierVertex(cp1x, cp1y, cp2x, cp2y, nextPoint.x, nextPoint.y);
            
            // Store points for text placement
            let steps = 10;
            for (let t = 0; t < 1; t += 1/steps) {
              let x = bezierPoint(point.x, cp1x, cp2x, nextPoint.x, t);
              let y = bezierPoint(point.y, cp1y, cp2y, nextPoint.y, t);
              boundaryTextPoints.push({x, y});
            }
          }
          endShape(CLOSE);
        }
        
        // Draw the boundary stroke
        noFill();
        stroke(COLORS.teal);
        strokeWeight(3);
        
        // Draw the same shape again for the stroke
        beginShape();
        for (let i = 0; i < hull.length; i++) {
          let point = hull[i];
          let nextPoint = hull[(i + 1) % hull.length];
          
          let dx = nextPoint.x - point.x;
          let dy = nextPoint.y - point.y;
          let distance = sqrt(dx * dx + dy * dy);
          
          let noiseFactor = noise(point.x * 0.01 + boundaryNoiseOffset, 
                                point.y * 0.01 + boundaryNoiseOffset);
          let displacement = map(noiseFactor, 0, 1, -ELASTICITY, ELASTICITY);
          
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
  
    // Draw nodes
    positions.forEach((pos, index) => {
      if (index === 0) return; // Skip drawing Pangea node
      
      let size = (pos.connections + 1) * BASE_NODE_SIZE;
      
      // Check hover regardless of circle visibility
      let d = dist(mouseX, mouseY, pos.x, pos.y);
      if (d < size/2) {
        hoveredIndex = index;
        // Only show hand cursor if there's a URL for this concept
        if (urls[concepts[index]]) {
          cursor(HAND);
        }
      }
      
      // Draw circles if enabled
      if (showEllipses) {
        if (d < size/2) {
          // More visible hover effect
          stroke(255, 255, 255, 100);
          strokeWeight(3);
          fill(255, 255, 255, 40);
          ellipse(pos.x, pos.y, size + 12, size + 12);
        }
        
        fill(getColorForConcept(index));
        ellipse(pos.x, pos.y, size, size);
      }
      
      // Draw text if enabled, regardless of circle visibility
      if (showText) {
        textSize(16);
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        noStroke();
        fill("#1a1a1a"); // Very dark gray, almost black
        text(concepts[index], pos.x, pos.y);
        textStyle(NORMAL);
      }
    });

    // Reset Pangea connections flag if not hovering over any circle
    if (hoveredIndex === -1) {
      showPangeaConnections = false;
      cursor(AUTO);
    }
  }
  
  function getColorForConcept(index) {
    // Create a palette of 12 distinct colors with carefully chosen alpha values
    const colorMapping = {
      "pangea in latent space": color(6, 214, 160, 255),       // Bright teal (main node)
      "the map is not the territory": color(239, 71, 111, 220), // Coral red
      "tectonics of otherness": color(255, 209, 102, 220),     // Golden yellow
      "pangea people": color(86, 163, 166, 220),               // Ocean blue
      "written language": color(255, 107, 107, 220),           // Salmon pink
      "ghosts and ancestors": color(167, 201, 87, 220),        // Lime green
      "manifesto the resistencia poetica": color(131, 96, 195, 220), // Purple
      "cumbia rebajada/migrating forms": color(255, 170, 51, 220), // Orange
      "cyber-government": color(66, 103, 178, 220),            // Facebook blue
      "solidarity economy": color(255, 147, 188, 220),         // Pink
      "techno-economy": color(95, 204, 132, 220),             // Forest green
      "the south of the north/sami": color(64, 156, 255, 220), // Sky blue
      "dark enlightment": color(180, 180, 180, 220)           // Gray for new concept
    };

    // Add subtle white stroke to make nodes more distinct
    stroke(252, 252, 252, 80);
    strokeWeight(1.5);

    // Return the color for the concept, or a default color if not found
    return colorMapping[concepts[index]] || color(180, 180, 180, 220);
  }
  
  function keyPressed() {
    if (key === 'l') {
      showLines = !showLines;
    } else if (key === 'c') {
      showEllipses = !showEllipses;
    } else if (key === 't') {
      showText = !showText;
    } else if (key === 'b') {
      showBoundary = !showBoundary;
    } else if (key === 'v') {
      useVisualTrails = !useVisualTrails;
      // Clear the screen when turning trails off
      if (!useVisualTrails) {
        background(COLORS.darkBlue);
      }
    } else if (key === 'f') {
      showBoundaryFill = !showBoundaryFill;
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
        let concept = concepts[index];
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

  // Add new function to draw control panel
  function drawControlPanel() {
    let x = width - controlPanelWidth - controlPanelMargin;
    let y = controlPanelMargin;
    
    // Update panel background
    fill(COLORS.darkBlue + "99"); // Add 60% transparency
    noStroke();
    rect(x, y, controlPanelWidth, controlPanelHeight, 10);
    
    // Draw controls text
    textAlign(LEFT, TOP);
    textSize(14);
    fill(COLORS.white);
    let textX = x + 15;
    let textY = y + 15;
    let lineHeight = 20;
    
    text('CONTROLS:', textX, textY);
    textY += lineHeight + 5;
    
    // Show current states
    text(`[L] Lines: ${showLines ? 'ON' : 'OFF'}`, textX, textY);
    textY += lineHeight;
    
    text(`[T] Text: ${showText ? 'ON' : 'OFF'}`, textX, textY);
    textY += lineHeight;
    
    text(`[B] Boundary: ${showBoundary ? 'ON' : 'OFF'}`, textX, textY);
    textY += lineHeight;
    
    text(`[C] Circles: ${showEllipses ? 'ON' : 'OFF'}`, textX, textY);
    textY += lineHeight;
    
    text(`[V] Trails: ${useVisualTrails ? 'ON' : 'OFF'}`, textX, textY);
    textY += lineHeight;
    
    text(`[F] Fill: ${showBoundaryFill ? 'ON' : 'OFF'}`, textX, textY);
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
          if (urls[BOUNDARY_TEXT]) {
            cursor(HAND);
          }
          if (mouseIsPressed && urls[BOUNDARY_TEXT]) {
            window.open(urls[BOUNDARY_TEXT], '_blank');
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
        text(BOUNDARY_TEXT, 1, 1);
        fill(d < 30 ? COLORS.yellow : COLORS.teal);
        text(BOUNDARY_TEXT, 0, 0);
        
        pop();
        break;
      }
      currentLength += segLength;
    }
  }

