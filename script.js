/* ==========================================================================
   FIDAN GALLERY - INTERACTIVE SCRIPT
   - Complete Artwork & Artist Datasets
   - Fail-safe Image Error Handling with Dynamic SVG Fallback
   - Real-time Keyword Search & Category Filtering
   - Modal Dialog with History, Provenance, & Accessibility Controls
   - Scroll Animations & Dynamic Navbar Controls
   ========================================================================== */

// --- DATASETS ---
const ARTWORKS_DATA = [
    {
        id: "mona-lisa",
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503–1519",
        movement: "Renaissance",
        medium: "Oil on Lombardy poplar panel",
        museum: "Musée du Louvre, Paris",
        dimensions: "77 cm × 53 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
        description: "The world's most famous portrait, celebrated for its enigmatic expression and revolutionary sfumato technique.",
        history: "Commissioned in Florence by Francesco del Giocondo for a portrait of his wife, Lisa Gherardini. Leonardo kept modifying the painting until his final years in France.",
        facts: "The painting has no visible eyebrows or eyelashes, likely due to gentle cleaning over centuries removing the thin glazes."
    },
    {
        id: "starry-night",
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        year: "1889",
        movement: "Post-Impressionism",
        medium: "Oil on canvas",
        museum: "Museum of Modern Art (MoMA), New York",
        dimensions: "73.7 cm × 92.1 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
        description: "An expressive depiction of the view from Van Gogh's asylum room in Saint-Rémy-de-Provence under a swirling night sky.",
        history: "Painted in June 1889, depicting the view just before sunrise from his east-facing window with an idealized village added.",
        facts: "The dominant bright star in the painting is actually Venus, which was near its brightest visual position in 1889."
    },
    {
        id: "persistence-memory",
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: "1931",
        movement: "Surrealism",
        medium: "Oil on canvas",
        museum: "Museum of Modern Art (MoMA), New York",
        dimensions: "24 cm × 33 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        description: "An iconic surrealist masterpiece depicting melting pocket watches set in a desolate, dreamlike landscape.",
        history: "First shown at the Julien Levy Gallery in 1932, it instantly became an icon of Surrealism and psychological art.",
        facts: "Dalí stated that the idea for the melting clocks came from watching Camembert cheese melt in the sun."
    },
    {
        id: "pearl-earring",
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: "c. 1665",
        movement: "Baroque",
        medium: "Oil on canvas",
        museum: "Mauritshuis, The Hague",
        dimensions: "44.5 cm × 39 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=800&q=80",
        description: "Known as the 'Mona Lisa of the North', this tronie depicts a young woman with a striking gaze and luminous pearl.",
        history: "The work is a 'tronie'—a Dutch study of a facial expression or character rather than a formal portrait.",
        facts: "Recent scientific examination revealed that the background was originally a translucent dark green glaze."
    },
    {
        id: "birth-of-venus",
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: "c. 1484–1486",
        movement: "Renaissance",
        medium: "Temperated oil on canvas",
        museum: "Uffizi Gallery, Florence",
        dimensions: "172.5 cm × 278.9 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        description: "Depicts the goddess Venus emerging from the sea as a fully grown woman, arriving at the seashore.",
        history: "Commissioned by the Medici family in Florence, marking one of the first large-scale mythological paintings since antiquity.",
        facts: "Venus's posture is anatomically impossible—her neck is elongated and her left shoulder drops at an unusual angle."
    },
    {
        id: "last-supper",
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: "1495–1498",
        movement: "Renaissance",
        medium: "Tempera and oil on plaster",
        museum: "Santa Maria delle Grazie, Milan",
        dimensions: "460 cm × 880 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Leonardo_Da_Vinci_High_Resolution.jpg/800px-%C3%9Altima_Cena_-_Leonardo_Da_Vinci_High_Resolution.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=800&q=80",
        description: "Represents the dramatic scene of the Last Supper when Jesus announces that one of his apostles will betray him.",
        history: "Painted directly on the dry refectory wall, Leonardo experimented with experimental pigment which caused rapid deterioration.",
        facts: "Little of the original paint remains today despite numerous major restorations over five centuries."
    },
    {
        id: "great-wave",
        title: "The Great Wave off Kanagawa",
        artist: "Katsushika Hokusai",
        year: "c. 1831",
        movement: "Modern Art",
        medium: "Woodblock print; ink and color on paper",
        museum: "Metropolitan Museum of Art, New York",
        dimensions: "25.7 cm × 37.8 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/800px-Great_Wave_off_Kanagawa2.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        description: "A iconic Japanese woodblock print showing towering rogue waves framing Mount Fuji in the background.",
        history: "Part of the series 'Thirty-Six Views of Mount Fuji', produced using imported Prussian Blue pigment.",
        facts: "It is estimated that around 5,000 to 8,000 impressions were originally printed from the woodblocks."
    },
    {
        id: "american-gothic",
        title: "American Gothic",
        artist: "Grant Wood",
        year: "1930",
        movement: "Modern Art",
        medium: "Oil on beaverboard",
        museum: "Art Institute of Chicago",
        dimensions: "78 cm × 65.3 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        description: "Depicts a farmer holding a pitchfork alongside his daughter standing in front of a rural Carpenter Gothic house.",
        history: "Wood was inspired by a cottage in Eldon, Iowa. The models were his sister Nan and his dentist Dr. Byron McKeeby.",
        facts: "Many Iowa residents were initially offended, assuming the painting depicted them as austere fundamentalists."
    },
    {
        id: "night-watch",
        title: "The Night Watch",
        artist: "Rembrandt van Rijn",
        year: "1642",
        movement: "Baroque",
        medium: "Oil on canvas",
        museum: "Rijksmuseum, Amsterdam",
        dimensions: "363 cm × 437 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/800px-The_Night_Watch_-_HD.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        description: "A monumental civic guard portrait famous for its dynamic composition and masterly use of light and shadow.",
        history: "Commissioned by Captain Banning Cocq for his civic guardsmen to hang in the Kloveniersdoelen hall in Amsterdam.",
        facts: "The title 'Night Watch' was applied later; the scene actually takes place during the daytime under dark varnish."
    },
    {
        id: "the-scream",
        title: "The Scream",
        artist: "Edvard Munch",
        year: "1893",
        movement: "Modern Art",
        medium: "Oil, tempera, pastel, and crayon on cardboard",
        museum: "National Gallery, Oslo",
        dimensions: "91 cm × 73.5 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73.5_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73.5_cm%2C_National_Gallery_of_Norway.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        description: "An agonized figure set against a blood-red sky, symbolizing modern human anxiety and existential dread.",
        history: "Inspired by a walking experience at sunset where Munch sensed an infinite scream passing through nature.",
        facts: "Munch created four distinct versions of The Scream in different mediums between 1893 and 1910."
    },
    {
        id: "creation-of-adam",
        title: "The Creation of Adam",
        artist: "Michelangelo",
        year: "c. 1512",
        movement: "Renaissance",
        medium: "Fresco",
        museum: "Sistine Chapel, Vatican City",
        dimensions: "280 cm × 570 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/800px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        description: "Illustrates the Biblical creation narrative from Genesis in which God gives life to Adam.",
        history: "Painted as part of the vast Sistine Chapel ceiling commissioned by Pope Julius II in Rome.",
        facts: "Neuroanatomy experts note that the background shroud surrounding God forms an accurate shape of the human brain."
    },
    {
        id: "water-lilies",
        title: "Water Lilies",
        artist: "Claude Monet",
        year: "1914–1926",
        movement: "Impressionism",
        medium: "Oil on canvas",
        museum: "Musée de l'Orangerie, Paris",
        dimensions: "200 cm × 1200 cm",
        primaryImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_-_Nymph%C3%A9as_-_Google_Art_Project.jpg/800px-Claude_Monet_-_Nymph%C3%A9as_-_Google_Art_Project.jpg",
        fallbackImg: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        description: "Part of a monumental series depicting Monet's flower garden and pond in Giverny under changing light.",
        history: "Monet spent the last thirty years of his life painting over 250 water lily compositions despite suffering from cataracts.",
        facts: "The large curved panels in Paris were designed specifically according to Monet's direct instructions for immersive viewing."
    }
];

const ARTISTS_DATA = [
    {
        name: "Leonardo da Vinci",
        years: "1452 – 1519",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self_portrait.jpg/300px-Leonardo_self_portrait.jpg",
        fallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
        bio: "Italian High Renaissance polymath who excelled in painting, anatomy, engineering, and scientific observation."
    },
    {
        name: "Vincent van Gogh",
        years: "1853 – 1890",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/300px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
        fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        bio: "Dutch Post-Impressionist painter whose dramatic brushwork and emotional intensity shaped modern Western art."
    },
    {
        name: "Claude Monet",
        years: "1840 – 1926",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/300px-Claude_Monet_1899_Nadar_crop.jpg",
        fallback: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        bio: "French founder of Impressionist painting who devoted his life to capturing light and natural atmosphere."
    },
    {
        name: "Rembrandt van Rijn",
        years: "1606 – 1669",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/300px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
        fallback: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
        bio: "Master of the Dutch Golden Age renowned for his revolutionary chiaroscuro and empathetic portraits."
    },
    {
        name: "Michelangelo",
        years: "1475 – 1564",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/300px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg",
        fallback: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
        bio: "Florentine Italian sculptor, painter, architect, and poet whose influence on Western art remains unsurpassed."
    },
    {
        name: "Pablo Picasso",
        years: "1881 – 1973",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1908.jpg/300px-Pablo_picasso_1908.jpg",
        fallback: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
        bio: "Co-founder of the Cubist movement who reshaped 20th-century art through bold avant-garde experimentation."
    }
];

// --- STATE MANAGEMENT ---
let currentFilter = 'all';
let currentSearch = '';

// --- DOM ELEMENTS ---
const galleryGrid = document.getElementById('galleryGrid');
const artistsGrid = document.getElementById('artistsGrid');
const mainSearchInput = document.getElementById('mainSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

const navbar = document.getElementById('navbar');
const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearchBtn = document.getElementById('closeSearchBtn');
const overlaySearchInput = document.getElementById('overlaySearchInput');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

const artworkModal = document.getElementById('artworkModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBody = document.getElementById('modalBody');
const backToTopBtn = document.getElementById('backToTopBtn');
const heroBg = document.getElementById('heroBg');

// --- SVG PLACEHOLDER GENERATOR ---
function createSvgPlaceholder(title, artist) {
    const encodedTitle = encodeURIComponent(title);
    const encodedArtist = encodeURIComponent(artist);
    return `data:image/svg+xml;utf8,
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
        <rect width="800" height="600" fill="%231a1a1a"/>
        <rect x="20" y="20" width="760" height="560" fill="none" stroke="%23c6a15b" stroke-width="2" stroke-opacity="0.3"/>
        <circle cx="400" cy="250" r="60" fill="%23c6a15b" fill-opacity="0.1" stroke="%23c6a15b" stroke-width="1.5"/>
        <path d="M375 250 L425 250 M400 225 L400 275" stroke="%23c6a15b" stroke-width="2"/>
        <text x="400" y="380" font-family="Georgia, serif" font-size="28" fill="%23f5f0e8" text-anchor="middle" font-weight="bold">${encodedTitle}</text>
        <text x="400" y="420" font-family="sans-serif" font-size="18" fill="%23c6a15b" text-anchor="middle">${encodedArtist}</text>
        <text x="400" y="460" font-family="sans-serif" font-size="12" fill="%23888888" text-anchor="middle" letter-spacing="2">FIDAN GALLERY ARCHIVE</text>
    </svg>`;
}

// --- RENDER FUNCTIONS ---
function renderGallery() {
    galleryGrid.innerHTML = '';

    const filtered = ARTWORKS_DATA.filter(item => {
        const matchesFilter = currentFilter === 'all' || item.movement.toLowerCase() === currentFilter.toLowerCase();
        const query = currentSearch.toLowerCase().trim();
        const matchesSearch = !query || 
            item.title.toLowerCase().includes(query) || 
            item.artist.toLowerCase().includes(query) ||
            item.movement.toLowerCase().includes(query) ||
            item.year.toLowerCase().includes(query);

        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filtered.forEach(art => {
            const card = document.createElement('div');
            card.className = 'artwork-card';
            
            const svgFallback = createSvgPlaceholder(art.title, art.artist);

            card.innerHTML = `
                <div class="artwork-img-wrapper">
                    <span class="artwork-movement-badge">${art.movement}</span>
                    <img src="${art.primaryImg}" 
                         alt="${art.title} by ${art.artist}" 
                         class="artwork-img" 
                         loading="lazy"
                         onerror="handleImageError(this, '${art.fallbackImg}', '${svgFallback}')">
                </div>
                <div class="artwork-info">
                    <h3 class="artwork-title">${art.title}</h3>
                    <div class="artwork-artist">${art.artist} (${art.year})</div>
                    <p class="artwork-desc">${art.description}</p>
                    <div class="artwork-action">
                        <button class="view-btn" onclick="openArtworkModal('${art.id}')">
                            <span>View Artwork</span>
                            <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
                        </button>
                    </div>
                </div>
            `;
            galleryGrid.appendChild(card);
        });
        if (window.lucide) lucide.createIcons();
    }
}

function renderArtists() {
    artistsGrid.innerHTML = '';
    ARTISTS_DATA.forEach(artist => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        const svgFallback = createSvgPlaceholder(artist.name, "Artist Profile");

        card.innerHTML = `
            <img src="${artist.avatar}" 
                 alt="${artist.name}" 
                 class="artist-avatar"
                 loading="lazy"
                 onerror="handleImageError(this, '${artist.fallback}', '${svgFallback}')">
            <div class="artist-details">
                <h3>${artist.name}</h3>
                <span class="artist-years">${artist.years}</span>
                <p class="artist-bio">${artist.bio}</p>
            </div>
        `;
        artistsGrid.appendChild(card);
    });
}

// --- IMAGE ERROR HANDLER ---
function handleImageError(imgElem, fallbackUrl, svgFallback) {
    if (!imgElem.dataset.triedFallback) {
        imgElem.dataset.triedFallback = "true";
        imgElem.src = fallbackUrl;
    } else {
        imgElem.onerror = null;
        imgElem.src = svgFallback;
    }
}

// --- MODAL CONTROLS ---
function openArtworkModal(id) {
    const art = ARTWORKS_DATA.find(item => item.id === id);
    if (!art) return;

    const svgFallback = createSvgPlaceholder(art.title, art.artist);

    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-img-container">
                <img src="${art.primaryImg}" 
                     alt="${art.title}" 
                     class="modal-img"
                     onerror="handleImageError(this, '${art.fallbackImg}', '${svgFallback}')">
            </div>
            <div class="modal-details">
                <h2 class="modal-title">${art.title}</h2>
                <div class="modal-artist">${art.artist}</div>
                
                <div class="modal-meta-grid">
                    <div class="meta-item">
                        <span class="meta-label">Year Created</span>
                        <span class="meta-val">${art.year}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Movement</span>
                        <span class="meta-val">${art.movement}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Medium</span>
                        <span class="meta-val">${art.medium}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Dimensions</span>
                        <span class="meta-val">${art.dimensions}</span>
                    </div>
                </div>

                <div class="modal-history">
                    <h4>Historical Background</h4>
                    <p>${art.history}</p>
                </div>

                <div class="modal-facts">
                    <h4>Key Insights & Provenance</h4>
                    <p>${art.facts}</p>
                </div>

                <div class="meta-item" style="margin-top: auto;">
                    <span class="meta-label">Current Museum Location</span>
                    <span class="meta-val" style="color:var(--color-gold);">${art.museum}</span>
                </div>
            </div>
        </div>
    `;

    artworkModal.classList.add('active');
    artworkModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    artworkModal.classList.remove('active');
    artworkModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// --- EVENT LISTENERS & INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Render initial sections
    renderGallery();
    renderArtists();
    
    // Lucide Icon Initialization
    if (window.lucide) lucide.createIcons();

    // Auto Update Dynamic Footer Year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Search input handlers
    mainSearchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        clearSearchBtn.classList.toggle('hidden', !currentSearch);
        renderGallery();
    });

    clearSearchBtn.addEventListener('click', () => {
        mainSearchInput.value = '';
        currentSearch = '';
        clearSearchBtn.classList.add('hidden');
        renderGallery();
    });

    // Category filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderGallery();
        });
    });

    resetFiltersBtn.addEventListener('click', () => {
        currentFilter = 'all';
        currentSearch = '';
        mainSearchInput.value = '';
        filterBtns.forEach(b => b.classList.remove('active'));
        filterBtns[0].classList.add('active');
        renderGallery();
    });

    // Navbar scroll state
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
            backToTopBtn.classList.add('active');
        } else {
            navbar.classList.remove('scrolled');
            backToTopBtn.classList.remove('active');
        }

        // Hero Parallax Effect
        if (heroBg) {
            heroBg.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.05)`;
        }
    });

    // Back to top button
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Search overlay toggle
    searchToggleBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        overlaySearchInput.focus();
    });

    closeSearchBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    overlaySearchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        mainSearchInput.value = currentSearch;
        clearSearchBtn.classList.toggle('hidden', !currentSearch);
        renderGallery();
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Modal close listeners
    modalCloseBtn.addEventListener('click', closeModal);
    artworkModal.addEventListener('click', (e) => {
        if (e.target === artworkModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            searchOverlay.classList.remove('active');
        }
    });
});
