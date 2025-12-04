// Traveling Salesperson Problem - vis-network visualization
// Shows 10 major US cities and demonstrates random vs optimized routes

// ===========================================
// CITY DATA - Approximate US map positions
// ===========================================
// Positions are relative to canvas center (0,0)
// X: negative = west, positive = east
// Y: negative = north, positive = south

// City positions approximate US geography (centered at origin)
const cities = [
    { id: 0, label: 'Seattle', x: -320, y: -180 },
    { id: 1, label: 'San Francisco', x: -340, y: -20 },
    { id: 2, label: 'Los Angeles', x: -300, y: 80 },
    { id: 3, label: 'Phoenix', x: -200, y: 100 },
    { id: 4, label: 'Denver', x: -100, y: -20 },
    { id: 5, label: 'Dallas', x: -20, y: 120 },
    { id: 6, label: 'Chicago', x: 80, y: -80 },
    { id: 7, label: 'Atlanta', x: 160, y: 60 },
    { id: 8, label: 'New York', x: 280, y: -100 },
    { id: 9, label: 'Miami', x: 220, y: 180 }
];

// Approximate distances in miles (simplified for visualization)
// Using Euclidean distance scaled to approximate real distances
const DISTANCE_SCALE = 8; // Scale factor to approximate miles

// ===========================================
// STATE VARIABLES
// ===========================================
let network = null;
let nodes = null;
let edges = null;
let currentRoute = [];
let currentDistance = 0;
let isAnimating = false;
let travelerElement = null;

// ===========================================
// ENVIRONMENT DETECTION
// ===========================================
function isInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

// ===========================================
// DISTANCE CALCULATIONS
// ===========================================
function getDistance(city1, city2) {
    const dx = city2.x - city1.x;
    const dy = city2.y - city1.y;
    return Math.sqrt(dx * dx + dy * dy) * DISTANCE_SCALE;
}

function getTotalDistance(route) {
    let total = 0;
    for (let i = 0; i < route.length - 1; i++) {
        total += getDistance(cities[route[i]], cities[route[i + 1]]);
    }
    // Add return to start
    if (route.length > 0) {
        total += getDistance(cities[route[route.length - 1]], cities[route[0]]);
    }
    return total;
}

// ===========================================
// ROUTE ALGORITHMS
// ===========================================

// Generate random route
function generateRandomRoute() {
    const route = [...Array(cities.length).keys()];
    // Fisher-Yates shuffle
    for (let i = route.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [route[i], route[j]] = [route[j], route[i]];
    }
    return route;
}

// Nearest neighbor heuristic
function nearestNeighborRoute(startCity = 0) {
    const route = [startCity];
    const unvisited = new Set([...Array(cities.length).keys()].filter(i => i !== startCity));

    let current = startCity;
    while (unvisited.size > 0) {
        let nearest = null;
        let nearestDist = Infinity;

        for (const city of unvisited) {
            const dist = getDistance(cities[current], cities[city]);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = city;
            }
        }

        route.push(nearest);
        unvisited.delete(nearest);
        current = nearest;
    }

    return route;
}

// 2-opt improvement
function twoOptImprove(route) {
    let improved = true;
    let bestRoute = [...route];
    let bestDistance = getTotalDistance(bestRoute);

    while (improved) {
        improved = false;

        for (let i = 0; i < bestRoute.length - 1; i++) {
            for (let j = i + 2; j < bestRoute.length; j++) {
                // Skip if adjacent (no swap possible)
                if (j === i + 1) continue;

                // Create new route by reversing segment between i+1 and j
                const newRoute = [...bestRoute];
                let left = i + 1;
                let right = j;
                while (left < right) {
                    [newRoute[left], newRoute[right]] = [newRoute[right], newRoute[left]];
                    left++;
                    right--;
                }

                const newDistance = getTotalDistance(newRoute);
                if (newDistance < bestDistance) {
                    bestRoute = newRoute;
                    bestDistance = newDistance;
                    improved = true;
                }
            }
        }
    }

    return bestRoute;
}

// Full optimization: nearest neighbor + 2-opt
function optimizeRoute() {
    // Try nearest neighbor from different starting cities
    let bestRoute = null;
    let bestDistance = Infinity;

    for (let start = 0; start < cities.length; start++) {
        let route = nearestNeighborRoute(start);
        route = twoOptImprove(route);
        const distance = getTotalDistance(route);

        if (distance < bestDistance) {
            bestDistance = distance;
            bestRoute = route;
        }
    }

    return bestRoute;
}

// ===========================================
// VISUALIZATION
// ===========================================

function initializeNetwork() {
    // Create nodes
    const nodeData = cities.map(city => ({
        id: city.id,
        label: city.label,
        x: city.x,
        y: city.y,
        color: {
            background: '#ffffff',
            border: '#2c5530'
        },
        font: {
            color: '#333333',
            size: 12,
            face: 'Arial'
        },
        borderWidth: 2,
        shape: 'dot',
        size: 15
    }));

    nodes = new vis.DataSet(nodeData);
    edges = new vis.DataSet([]);

    const options = {
        layout: { improvedLayout: false },
        physics: { enabled: false },
        interaction: {
            selectConnectedEdges: false,
            zoomView: !isInIframe(),
            dragView: !isInIframe(),
            dragNodes: false,
            navigationButtons: true
        },
        nodes: {
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.2)',
                size: 5,
                x: 2,
                y: 2
            }
        },
        edges: {
            width: 3,
            color: { color: '#2196f3' },
            smooth: false
        }
    };

    const container = document.getElementById('network');
    const data = { nodes: nodes, edges: edges };
    network = new vis.Network(container, data, options);

    // Fit to nodes, then scale down and shift to account for right panel (240px wide)
    network.once('afterDrawing', () => {
        network.fit({
            animation: false
        });
        // Scale down to 75% and shift left to make room for right panel
        const scale = network.getScale();
        const viewPosition = network.getViewPosition();
        network.moveTo({
            position: {
                x: viewPosition.x + 100,
                y: viewPosition.y
            },
            scale: scale * 0.75,
            animation: false
        });
    });
}

function drawRoute(route) {
    // Clear existing edges
    edges.clear();

    if (route.length === 0) return;

    // Create edges for route
    const edgeData = [];
    for (let i = 0; i < route.length - 1; i++) {
        edgeData.push({
            id: `e${i}`,
            from: route[i],
            to: route[i + 1]
        });
    }
    // Add return edge
    edgeData.push({
        id: `e${route.length - 1}`,
        from: route[route.length - 1],
        to: route[0],
        dashes: true
    });

    edges.add(edgeData);
}

function updateRouteDisplay(route, distance, showImprovement = false, oldDistance = 0) {
    const detailsEl = document.getElementById('route-details');
    const totalEl = document.getElementById('total-distance');

    if (route.length === 0) {
        detailsEl.innerHTML = 'Click "Visit All Cities" to start a random tour.';
        totalEl.innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 0; i < route.length; i++) {
        const city = cities[route[i]];
        const nextCity = cities[route[(i + 1) % route.length]];
        const dist = Math.round(getDistance(city, nextCity));
        const isReturn = i === route.length - 1;

        html += `<div class="route-step">
            <span class="city-name">${i + 1}. ${city.label}</span>
            <span class="distance">${dist} mi</span>
        </div>`;
    }

    detailsEl.innerHTML = html;

    let totalHtml = `Total: ${Math.round(distance).toLocaleString()} miles`;
    if (showImprovement && oldDistance > distance) {
        const saved = Math.round(oldDistance - distance);
        const percent = Math.round((saved / oldDistance) * 100);
        totalHtml += `<div class="improvement">Saved ${saved.toLocaleString()} mi (${percent}% shorter!)</div>`;
    }
    totalEl.innerHTML = totalHtml;
}

// ===========================================
// ANIMATION
// ===========================================

function createTraveler() {
    if (travelerElement) {
        travelerElement.remove();
    }
    travelerElement = document.createElement('div');
    travelerElement.className = 'traveler';
    document.querySelector('.container').appendChild(travelerElement);
    return travelerElement;
}

function animateVisit(route, callback) {
    if (isAnimating) return;
    isAnimating = true;

    const traveler = createTraveler();
    const container = document.getElementById('network');
    const rect = container.getBoundingClientRect();

    let step = 0;
    const totalSteps = route.length + 1; // +1 for return to start

    // Build edges progressively
    edges.clear();

    function getScreenPosition(cityId) {
        const pos = network.getPositions([cityId])[cityId];
        const canvasPos = network.canvasToDOM(pos);
        return {
            x: canvasPos.x + rect.left - 10,
            y: canvasPos.y + rect.top - 10
        };
    }

    function animateStep() {
        if (step >= totalSteps) {
            isAnimating = false;
            traveler.remove();
            travelerElement = null;
            if (callback) callback();
            return;
        }

        const currentCity = route[step % route.length];
        const nextCity = route[(step + 1) % route.length];

        // Position traveler at current city
        const pos = getScreenPosition(currentCity);
        traveler.style.left = pos.x + 'px';
        traveler.style.top = pos.y + 'px';

        // Add edge to previous city (except first step)
        if (step > 0) {
            const prevCity = route[(step - 1 + route.length) % route.length];
            edges.add({
                id: `e${step - 1}`,
                from: prevCity,
                to: currentCity,
                dashes: step === totalSteps - 1
            });
        }

        // Highlight current city
        nodes.update({
            id: currentCity,
            color: { background: '#ffd700', border: '#ff8c00' }
        });

        // Reset previous city color (except start city until return)
        if (step > 0 && step < route.length) {
            const prevCity = route[step - 1];
            nodes.update({
                id: prevCity,
                color: { background: '#4caf50', border: '#2e7d32' }
            });
        }

        step++;
        setTimeout(animateStep, 400);
    }

    animateStep();
}

// ===========================================
// EVENT HANDLERS
// ===========================================

function handleVisitAll() {
    // Reset colors
    cities.forEach(city => {
        nodes.update({
            id: city.id,
            color: { background: '#ffffff', border: '#2c5530' }
        });
    });

    currentRoute = generateRandomRoute();
    currentDistance = getTotalDistance(currentRoute);

    document.getElementById('optimize-btn').disabled = true;

    animateVisit(currentRoute, () => {
        // After animation, show final route
        drawRoute(currentRoute);
        updateRouteDisplay(currentRoute, currentDistance);
        document.getElementById('optimize-btn').disabled = false;

        // Reset all node colors to visited (green)
        cities.forEach(city => {
            nodes.update({
                id: city.id,
                color: { background: '#4caf50', border: '#2e7d32' }
            });
        });
    });
}

function handleOptimize() {
    if (currentRoute.length === 0) return;

    const oldDistance = currentDistance;

    // Optimize the route
    currentRoute = optimizeRoute();
    currentDistance = getTotalDistance(currentRoute);

    // Update visualization
    drawRoute(currentRoute);
    updateRouteDisplay(currentRoute, currentDistance, true, oldDistance);

    // Change edge color to show optimization
    const edgeUpdates = edges.get().map(edge => ({
        id: edge.id,
        color: { color: '#4caf50' }
    }));
    edges.update(edgeUpdates);
}

function handleReset() {
    if (isAnimating) return;

    currentRoute = [];
    currentDistance = 0;

    // Clear edges
    edges.clear();

    // Reset node colors
    cities.forEach(city => {
        nodes.update({
            id: city.id,
            color: { background: '#ffffff', border: '#2c5530' }
        });
    });

    // Reset display
    updateRouteDisplay([], 0);
    document.getElementById('optimize-btn').disabled = true;

    // Remove traveler if exists
    if (travelerElement) {
        travelerElement.remove();
        travelerElement = null;
    }
}

// ===========================================
// INITIALIZATION
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNetwork();

    document.getElementById('visit-btn').addEventListener('click', handleVisitAll);
    document.getElementById('optimize-btn').addEventListener('click', handleOptimize);
    document.getElementById('reset-btn').addEventListener('click', handleReset);

    // Handle window resize
    window.addEventListener('resize', () => {
        if (network) {
            network.fit({ animation: false });
            // Scale down and shift left for right panel
            const scale = network.getScale();
            const viewPosition = network.getViewPosition();
            network.moveTo({
                position: { x: viewPosition.x + 100, y: viewPosition.y },
                scale: scale * 0.75,
                animation: false
            });
        }
    });
});
