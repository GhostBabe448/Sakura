/**
 * SAKURA MOTORS - JavaScript
 * Funcionalidad completa: coches, auth, chat, filtros
 */

// ==========================================
// DATOS DE COCHES
// ==========================================

const carsData = [
    {
        id: 1,
        brand: 'Toyota',
        model: 'GR Supra',
        year: 2023,
        price: 68900,
        km: 12500,
        fuel: 'Gasolina',
        transmission: 'Automatico',
        power: '340 CV',
        description: 'El Toyota GR Supra es un icono renacido. Con motor BMW B58 3.0L de 6 cilindros en linea, ofrece una experiencia de conduccion pura y emocionante. Diseño aerodinamico y prestaciones de superdeportivo.',
        image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
        badge: 'Destacado'
    },
    {
        id: 2,
        brand: 'Nissan',
        model: 'GT-R Nismo',
        year: 2022,
        price: 195000,
        km: 8900,
        fuel: 'Gasolina',
        transmission: 'Automatico',
        power: '600 CV',
        description: 'El Nissan GT-R Nismo representa la cuspide de la ingenieria japonesa. Motor V6 biturbo de 3.8L, traccion integral ATTESA E-TS y una aerodinamica refinada en el tunel de viento.',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
        badge: 'Nismo'
    },
    {
        id: 3,
        brand: 'Mazda',
        model: 'MX-5 RF',
        year: 2023,
        price: 38900,
        km: 15400,
        fuel: 'Gasolina',
        transmission: 'Manual',
        power: '184 CV',
        description: 'El Mazda MX-5 RF es el roadster mas vendido de la historia. Con su techo rigido retractil, equilibrio perfecto 50:50 y motor Skyactiv-G de 2.0L, define la diversion al volante.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        badge: null
    },
    {
        id: 4,
        brand: 'Honda',
        model: 'Civic Type R',
        year: 2023,
        price: 52900,
        km: 6700,
        fuel: 'Gasolina',
        transmission: 'Manual',
        power: '329 CV',
        description: 'El Honda Civic Type R es el hot hatch definitivo. Motor VTEC Turbo de 2.0L, suspension adaptativa y el mejor tiempo en Nurburgring de su categoria. Disenado para puristas.',
        image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800&q=80',
        badge: 'Type R'
    },
    {
        id: 5,
        brand: 'Subaru',
        model: 'BRZ',
        year: 2023,
        price: 34900,
        km: 11200,
        fuel: 'Gasolina',
        transmission: 'Manual',
        power: '234 CV',
        description: 'El Subaru BRZ es un coupe ligero y divertido. Motor boxer de 2.4L, traccion trasera y un chasis desarrollado para el maximo disfrute en carreteras reviradas.',
        image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?w=800&q=80',
        badge: null
    },
    {
        id: 6,
        brand: 'Lexus',
        model: 'RC F',
        year: 2022,
        price: 87500,
        km: 22100,
        fuel: 'Gasolina',
        transmission: 'Automatico',
        power: '477 CV',
        description: 'El Lexus RC F combina lujo y potencia con un V8 atmosferico de 5.0L que entrega 477 CV. Artesania japonesa en cada detalle con acabidos en alcantara y carbono.',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
        badge: 'V8'
    },
    {
        id: 7,
        brand: 'Toyota',
        model: 'GR86',
        year: 2023,
        price: 35900,
        km: 9300,
        fuel: 'Gasolina',
        transmission: 'Manual',
        power: '234 CV',
        description: 'El Toyota GR86 es la evolucion del deportivo accesible. Motor boxer de 2.4L, traccion trasera y un chasis perfeccionado en los circuitos mas exigentes del mundo.',
        image: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80',
        badge: 'Nuevo'
    },
    {
        id: 8,
        brand: 'Nissan',
        model: '370Z',
        year: 2021,
        price: 42500,
        km: 28500,
        fuel: 'Gasolina',
        transmission: 'Manual',
        power: '328 CV',
        description: 'El Nissan 370Z es un clasico moderno. V6 VQ37VHR de 3.7L, diseno atemporal y una conduccion visceral que conecta al piloto con la carretera de forma autentica.',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
        badge: null
    },
    {
        id: 9,
        brand: 'Honda',
        model: 'NSX',
        year: 2022,
        price: 189000,
        km: 5400,
        fuel: 'Hibrido',
        transmission: 'Automatico',
        power: '581 CV',
        description: 'El Honda NSX es un superdeportivo hibrido que combina un V6 biturbo con tres motores electricos. Tecnologia derivada de la Formula 1 en un coche de calle homologado.',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80',
        badge: 'Hibrido'
    },
    {
        id: 10,
        brand: 'Mazda',
        model: 'RX-7 Spirit R',
        year: 2002,
        price: 78000,
        km: 45000,
        fuel: 'Gasolina',
        transmission: 'Manual',
        power: '280 CV',
        description: 'El Mazda RX-7 Spirit R es la ultima y mas exclusiva evolucion del FD. Motor rotativo 13B-REW, edicion limitada de solo 1.500 unidades y un legado unico en la historia del motor Wankel.',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
        badge: 'Clasico'
    },
    {
        id: 11,
        brand: 'Subaru',
        model: 'WRX STI',
        year: 2023,
        price: 54900,
        km: 7800,
        fuel: 'Gasolina',
        transmission: 'Manual',
        power: '310 CV',
        description: 'El Subaru WRX STI es un icono del rally adaptado a la carretera. Motor boxer EJ25 turbo, traccion integral Symmetrical AWD y diferencial central DCCD para maximo control.',
        image: 'https://images.unsplash.com/photo-1626668893632-6f3d4466d22f?w=800&q=80',
        badge: 'STI'
    },
    {
        id: 12,
        brand: 'Lexus',
        model: 'LC 500',
        year: 2023,
        price: 115000,
        km: 12000,
        fuel: 'Gasolina',
        transmission: 'Automatico',
        power: '464 CV',
        description: 'El Lexus LC 500 es la expresion maxima del lujo deportivo japones. V8 atmosferico de 5.0L con una banda sonora inolvidable y un diseno que desafio todos los limites.',
        image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
        badge: null
    }
];

// ==========================================
// ESTADO GLOBAL
// ==========================================

let currentFilter = 'todos';
let currentCar = null;
let currentUser = null;
let chatHistory = [];

// ==========================================
// UTILIDADES
// ==========================================

function formatPrice(price) {
    return new Intl.NumberFormat('es-ES').format(price);
}

function formatNumber(num) {
    return new Intl.NumberFormat('es-ES').format(num);
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function getCurrentTime() {
    return new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

// ==========================================
// RENDERIZAR COCHES
// ==========================================

function getSpecIcons() {
    return {
        km: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
        fuel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 5h-3V3H8v2H5v14h14V5zm-7 12H8v-2h4v2zm0-4H8v-2h4v2zm0-4H8V7h4v2z"/></svg>`,
        transmission: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="3"/></svg>`,
        power: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
    };
}

function renderCars() {
    const grid = document.getElementById('carsGrid');
    const icons = getSpecIcons();

    const filteredCars = currentFilter === 'todos'
        ? carsData
        : carsData.filter(car => car.brand === currentFilter);

    if (filteredCars.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <p style="color: var(--color-gray-500); font-size: 1.125rem;">No hay vehiculos disponibles de esta marca.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredCars.map((car, index) => `
        <div class="car-card" style="animation-delay: ${index * 0.05}s" onclick="openCarModal(${car.id})">
            <div class="car-image">
                <img src="${car.image}" alt="${car.brand} ${car.model}" loading="lazy">
                ${car.badge ? `<span class="car-badge">${car.badge}</span>` : ''}
            </div>
            <div class="car-info">
                <p class="car-brand">${car.brand}</p>
                <h3 class="car-name">${car.model}</h3>
                <p class="car-year">${car.year}</p>
                <div class="car-specs">
                    <div class="car-spec">
                        ${icons.km}
                        <span>${formatNumber(car.km)} km</span>
                    </div>
                    <div class="car-spec">
                        ${icons.fuel}
                        <span>${car.fuel}</span>
                    </div>
                    <div class="car-spec">
                        ${icons.transmission}
                        <span>${car.transmission}</span>
                    </div>
                    <div class="car-spec">
                        ${icons.power}
                        <span>${car.power}</span>
                    </div>
                </div>
                <div class="car-footer">
                    <span class="car-price">${formatPrice(car.price)} <span>€</span></span>
                    <div class="car-actions" onclick="event.stopPropagation()">
                        <button class="btn-icon" onclick="openCarModal(${car.id})" title="Ver detalles">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                            </svg>
                        </button>
                        <button class="btn-icon" onclick="openChatModal(${car.id})" title="Comprar ahora">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// FILTROS
// ==========================================

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderCars();
        });
    });
}

function filterCars(brand) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => {
        b.classList.toggle('active', b.dataset.filter === brand);
    });
    currentFilter = brand;
    renderCars();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// CAR MODAL
// ==========================================

function openCarModal(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    currentCar = car;

    const detail = document.getElementById('carDetail');
    const icons = getSpecIcons();

    detail.innerHTML = `
        <div class="car-detail-image">
            <img src="${car.image}" alt="${car.brand} ${car.model}">
        </div>
        <div class="car-detail-info">
            <p class="car-detail-brand">${car.brand}</p>
            <h2 class="car-detail-name">${car.model}</h2>
            <p class="car-detail-year">${car.year} · ${formatNumber(car.km)} km</p>
            <p class="car-detail-price">${formatPrice(car.price)} <span>€</span></p>
            <p class="car-detail-desc">${car.description}</p>
            <div class="car-detail-specs">
                <div class="detail-spec-item">
                    ${icons.km}
                    <div>
                        <span class="detail-spec-label">Kilometraje</span>
                        <span class="detail-spec-value">${formatNumber(car.km)} km</span>
                    </div>
                </div>
                <div class="detail-spec-item">
                    ${icons.fuel}
                    <div>
                        <span class="detail-spec-label">Combustible</span>
                        <span class="detail-spec-value">${car.fuel}</span>
                    </div>
                </div>
                <div class="detail-spec-item">
                    ${icons.transmission}
                    <div>
                        <span class="detail-spec-label">Transmision</span>
                        <span class="detail-spec-value">${car.transmission}</span>
                    </div>
                </div>
                <div class="detail-spec-item">
                    ${icons.power}
                    <div>
                        <span class="detail-spec-label">Potencia</span>
                        <span class="detail-spec-value">${car.power}</span>
                    </div>
                </div>
            </div>
            <div class="car-detail-actions">
                <button class="btn btn-primary" onclick="openChatModal(${car.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                    Comprar Ahora
                </button>
                <button class="btn btn-outline" onclick="closeCarModal()">Cerrar</button>
            </div>
        </div>
    `;

    document.getElementById('carModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCarModal() {
    document.getElementById('carModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// AUTH (localStorage)
// ==========================================

function initAuth() {
    const stored = localStorage.getItem('sakura_user');
    if (stored) {
        currentUser = JSON.parse(stored);
        updateUserUI();
    }
}

function updateUserUI() {
    const section = document.getElementById('userSection');
    if (currentUser) {
        section.innerHTML = `
            <div class="user-logged">
                <span class="user-name">Hola, ${currentUser.name.split(' ')[0]}</span>
                <button class="btn-logout" onclick="handleLogout()">Cerrar sesion</button>
            </div>
        `;
    } else {
        section.innerHTML = `
            <button class="btn btn-outline" id="loginBtn" onclick="openAuthModal()">Iniciar Sesion</button>
        `;
    }
}

function openAuthModal() {
    document.getElementById('authModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    document.getElementById('loginTab').classList.toggle('active', tab === 'login');
    document.getElementById('registerTab').classList.toggle('active', tab === 'register');
    document.getElementById('loginPanel').classList.toggle('active', tab === 'login');
    document.getElementById('registerPanel').classList.toggle('active', tab === 'register');
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    const existingUsers = JSON.parse(localStorage.getItem('sakura_users') || '[]');
    if (existingUsers.find(u => u.email === email)) {
        showToast('Ya existe una cuenta con este email', 'error');
        return;
    }

    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem('sakura_users', JSON.stringify(existingUsers));

    currentUser = { name, email };
    localStorage.setItem('sakura_user', JSON.stringify(currentUser));

    document.getElementById('registerForm').reset();
    closeAuthModal();
    updateUserUI();
    showToast(`Bienvenido, ${name.split(' ')[0]}! Tu cuenta ha sido creada.`, 'success');
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const existingUsers = JSON.parse(localStorage.getItem('sakura_users') || '[]');
    const user = existingUsers.find(u => u.email === email && u.password === password);

    if (!user) {
        showToast('Email o contrasena incorrectos', 'error');
        return;
    }

    currentUser = { name: user.name, email: user.email };
    localStorage.setItem('sakura_user', JSON.stringify(currentUser));

    document.getElementById('loginForm').reset();
    closeAuthModal();
    updateUserUI();
    showToast(`Hola de nuevo, ${user.name.split(' ')[0]}!`, 'success');
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('sakura_user');
    updateUserUI();
    showToast('Sesion cerrada correctamente');
}

// ==========================================
// CHAT
// ==========================================

function openChatModal(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    currentCar = car;

    const subject = document.getElementById('chatSubject');
    subject.innerHTML = `Sobre: <strong>${car.brand} ${car.model}</strong> (${car.year}) - ${formatPrice(car.price)} €`;

    // Mensajes iniciales
    chatHistory = [];
    const messagesDiv = document.getElementById('chatMessages');
    messagesDiv.innerHTML = '';

    addMessage('seller', `Konichiwa! Soy Kenji Tanaka, asesor de Sakura Motors. Veo que te interesa el ${car.brand} ${car.model}. Es una excelente eleccion. ¿En que puedo ayudarte?`);

    setupQuickReplies();

    document.getElementById('chatModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeChatModal() {
    document.getElementById('chatModal').classList.remove('active');
    document.body.style.overflow = '';
}

function addMessage(sender, text) {
    const messagesDiv = document.getElementById('chatMessages');
    const time = getCurrentTime();
    const div = document.createElement('div');
    div.className = `message message-${sender}`;
    div.innerHTML = `${text}<span class="message-time">${time}</span>`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage(event) {
    event.preventDefault();
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    addMessage('user', text);
    input.value = '';

    // Respuesta automatica con delay
    setTimeout(() => {
        const response = getAutoResponse(text, currentCar);
        addMessage('seller', response);
    }, 800 + Math.random() * 600);
}

function sendQuickReply(text) {
    const input = document.getElementById('chatInput');
    input.value = text;
    sendMessage(new Event('submit'));
}

function setupQuickReplies() {
    const repliesDiv = document.getElementById('quickReplies');
    const quickReplies = ['Precio', 'Financiacion', 'Garantia', 'Entrega', 'Reservar', 'Comprar'];

    repliesDiv.innerHTML = quickReplies.map(reply =>
        `<button type="button" class="quick-reply" onclick="sendQuickReply('${reply}')">${reply}</button>`
    ).join('');
}

function getAutoResponse(text, car) {
    const lower = text.toLowerCase();
    const price = formatPrice(car.price);

    if (lower.includes('precio') || lower.includes('precio')) {
        return `El ${car.brand} ${car.model} tiene un precio de **${price} €**. Incluye garantia de 12 meses y revision completa. ¿Te gustaria conocer opciones de financiacion?`;
    }

    if (lower.includes('financ') || lower.includes('cuota') || lower.includes('pagar')) {
        const cuota = Math.round(car.price / 60);
        return `Ofrecemos financiacion hasta en 60 meses sin entrada. Podrias tener cuotas desde **${formatPrice(cuota)} €/mes**. Tambien tenemos opciones de leasing. ¿Te preparo una simulacion personalizada?`;
    }

    if (lower.includes('garantia') || lower.includes('garantia')) {
        return `Todos nuestros vehiculos incluyen garantia de **12 meses** con cobertura total de motor, transmision y sistemas electricos. Puedes ampliarla hasta 24 meses por 890 € adicionales.`;
    }

    if (lower.includes('entrega') || lower.includes('envio') || lower.includes('lleva')) {
        return `Realizamos entregas en toda Espana peninsular. El plazo es de 3 a 5 dias habiles y tiene un coste de 290 €. Si prefieres, puedes recogerlo en nuestras instalaciones de Madrid sin coste adicional.`;
    }

    if (lower.includes('reserv') || lower.includes('aparta')) {
        return `Puedes reservar el vehiculo con un deposito de **2.000 €**. El coche se retirara del mercado por 7 dias, tiempo en el que puedes financiar o preparar la compra. ¿Quieres que te envie los datos para la reserva?`;
    }

    if (lower.includes('compra') || lower.includes('comprar') || lower.includes('lo quiero')) {
        return `Excelente eleccion! Para proceder con la compra del ${car.brand} ${car.model}, necesitare:

1. Copia de DNI/NIE
2. Justificante de domicilio
3. IBAN para domiciliacion

El proceso es muy sencillo. ¿Prefieres hacerlo aqui por el chat o que te llamemos para gestionarlo?`;
    }

    if (lower.includes('hola') || lower.includes('buenas') || lower.includes('hola')) {
        return `Hola de nuevo! Estoy aqui para ayudarte con el ${car.brand} ${car.model}. Puedes preguntarme sobre el precio, financiacion, garantia, entrega o cualquier otra duda que tengas.`;
    }

    if (lower.includes('gracias') || lower.includes('gracias') || lower.includes('adios') || lower.includes('adios')) {
        return `De nada! Ha sido un placer atenderte. Si tienes mas dudas sobre el ${car.brand} ${car.model}, aqui estare. Tambien puedes llamarnos al +34 912 345 678. ¡Que tengas un buen dia!`;
    }

    if (lower.includes('test') || lower.includes('probar') || lower.includes('prueba')) {
        return `Por supuesto! Puedes concertar una prueba de conduccion en nuestras instalaciones de Madrid. Solo necesito que me confirmes el dia y la hora que prefieres. Tambien necesitare una copia de tu carnet de conducir.`;
    }

    if (lower.includes('estado') || lower.includes('condicion') || lower.includes('kilometros')) {
        return `Este ${car.brand} ${car.model} tiene **${formatNumber(car.km)} km** reales y ha pasado nuestra revision de 150 puntos. El estado es excelente, tanto mecanico como de carroceria. Tienes el informe completo disponible.`;
    }

    if (lower.includes('intercambio') || lower.includes('cambio') || lower.includes('usado')) {
        return `Aceptamos tu coche actual como parte del pago. Necesitariamos verlo para valorarlo, pero podemos hacer una estimacion inicial si me dices la marca, modelo, anno y kilometraje.`;
    }

    // Respuesta por defecto
    const defaults = [
        `Entiendo. Sobre el ${car.brand} ${car.model}, es un vehiculo realmente especial. ¿Te gustaria saber algo mas especifico sobre el precio, la financiacion o la garantia?`,
        `Buena pregunta. Cualquier duda que tengas sobre el ${car.brand} ${car.model}, estoy aqui para resolverla. Tambien puedo ofrecerte informacion sobre nuestras opciones de financiacion.`,
        `Claro. El ${car.brand} ${car.model} es una de nuestras unidades mas solicitadas. ¿Hay algo en particular que te gustaria saber? Precio, kilometraje, equipo...`,
        `Gracias por tu interes en el ${car.brand} ${car.model}. Te recomiendo que me preguntes sobre el precio, financiacion o garantia. Tambien puedo ayudarte a reservarlo.`
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
}

// ==========================================
// HEADER SCROLL
// ==========================================

function setupHeaderScroll() {
    const header = document.getElementById('header');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                header.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ==========================================
// MOBILE MENU
// ==========================================

function setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Cerrar al hacer click en enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// ==========================================
// MODAL CERRAR CON ESC
// ==========================================

function setupModalKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCarModal();
            closeAuthModal();
            closeChatModal();
        }
    });
}

// ==========================================
// ANIMACIONES AL SCROLL
// ==========================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animar secciones
    document.querySelectorAll('.section-header, .about-content, .about-image, .contact-info, .contact-map').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================
// INICIALIZACION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderCars();
    setupFilters();
    initAuth();
    setupHeaderScroll();
    setupMobileMenu();
    setupModalKeyboard();
    setupScrollAnimations();
});
