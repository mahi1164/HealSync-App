// Initialize i18next with external JSON files
document.addEventListener('DOMContentLoaded', async function() {
    // Load translation files
    const loadTranslations = async () => {
        try {
            const enResponse = await fetch('./translations/en.json');
            const hiResponse = await fetch('./translations/hi.json');
            const enTranslations = await enResponse.json();
            const hiTranslations = await hiResponse.json();
            
            return {
                en: { translation: enTranslations },
                hi: { translation: hiTranslations }
            };
        } catch (error) {
            console.warn('Could not load translation files, using embedded translations');
            // Fallback to embedded translations
            return {
                en: {
                    translation: {
                        "nav.home": "Home", "nav.demo": "Demo", "nav.features": "Features", 
                        "nav.dashboard": "Dashboard", "nav.profile": "Profile",
                        "auth.login": "Login", "auth.register": "Register", "auth.logout": "Logout",
                        "hero.title": "Connecting 5,000 Years of Healing Wisdom to Modern Healthcare",
                        "hero.subtitle": "Seamlessly integrate NAMASTE & ICD-11 codes into your EMR system with our powerful API",
                        "hero.demo": "Try Live Demo", "hero.learn": "Learn More",
                        "demo.title": "🔄 Live Translation Demo",
                        "demo.subtitle": "Experience real-time code conversion between NAMASTE and ICD-11 systems",
                        "demo.translator": "NAMASTE → ICD-11 Code Translator",
                        "demo.terms": "Traditional Medicine Terms",
                        "demo.placeholder": "Type a condition or symptom...",
                        "demo.translate": "Translate", "demo.speak": "🎤 Speak",
                        "demo.upload": "Upload Prescription", "demo.whatsapp": "WhatsApp Bot",
                        "demo.popular": "Popular Searches:",
                        "demo.vata": "Vata Dosha Imbalance", "demo.pitta": "Pitta Fever",
                        "demo.kapha": "Kapha Respiratory Issues", "demo.tridosha": "Tridosha Imbalance",
                        "demo.icd": "ICD-11 Translation", "demo.code": "ICD-11 Code",
                        "demo.select": "Select a term to translate", "demo.desc": "Description",
                        "demo.real": "Real-time translation will appear here",
                        "demo.category": "Category", "demo.module": "Traditional Medicine Module",
                        "demo.confidence": "Translation Confidence",
                        "demo.fhir": "FHIR Format", "demo.analytics": "Analytics",
                        "features.title": "Powerful Integration Features",
                        "features.subtitle": "Everything you need for seamless traditional medicine digitization",
                        "features.real.title": "Real-time Translation",
                        "features.real.desc": "Instant code conversion with 98% accuracy using advanced matching algorithms.",
                        "features.voice.title": "Voice Input",
                        "features.voice.desc": "Speak your terms and get instant translations in English or Hindi.",
                        "features.handwriting.title": "Handwriting Recognition",
                        "features.handwriting.desc": "Upload handwritten prescriptions and convert them to ICD-11 codes.",
                        "features.whatsapp.title": "WhatsApp Bot",
                        "features.whatsapp.desc": "Get translations via WhatsApp for quick access.",
                        "features.abha.title": "ABHA Integration",
                        "features.abha.desc": "Secure authentication with Indian health IDs.",
                        "features.fhir.title": "FHIR R4 Compliant",
                        "features.fhir.desc": "Global standards for seamless EMR integration.",
                        "dashboard.title": "Dashboard", "dashboard.subtitle": "Monitor your translations, stats, and activity.",
                        "dashboard.today": "Translations Today", "dashboard.accuracy": "Average Accuracy",
                        "dashboard.response": "Avg Response Time", "dashboard.emrs": "Connected EMRs",
                        "profile.title": "Profile", "profile.edit": "Edit Profile", "profile.save": "Save Changes",
                        "footer.about": "About Us", "footer.links": "Quick Links", "footer.contact": "Contact",
                        "footer.about_text": "Bridging traditional and modern medicine with cutting-edge technology."
                    }
                },
                hi: {
                    translation: {
                        "nav.home": "होम", "nav.demo": "डेमो", "nav.features": "विशेषताएँ",
                        "nav.dashboard": "डैशबोर्ड", "nav.profile": "प्रोफाइल",
                        "auth.login": "लॉगिन", "auth.register": "रजिस्टर", "auth.logout": "लॉगआउट",
                        "hero.title": "5,000 साल के उपचार ज्ञान को आधुनिक स्वास्थ्य सेवा से जोड़ना",
                        "hero.subtitle": "NAMASTE और ICD-11 कोड को EMR सिस्टम में सहजता से एकीकृत करें",
                        "hero.demo": "लाइव डेमो आजमाएं", "hero.learn": "और जानें",
                        "demo.title": "🔄 लाइव अनुवाद डेमो",
                        "demo.subtitle": "NAMASTE और ICD-11 सिस्टम के बीच वास्तविक समय कोड रूपांतरण का अनुभव करें",
                        "demo.translator": "NAMASTE → ICD-11 कोड अनुवादक",
                        "demo.terms": "पारंपरिक चिकित्सा शब्द",
                        "demo.placeholder": "एक स्थिति या लक्षण टाइप करें...",
                        "demo.translate": "अनुवाद करें", "demo.speak": "🎤 बोलें",
                        "demo.upload": "पर्चा अपलोड करें", "demo.whatsapp": "व्हाट्सएप बॉट",
                        "demo.popular": "लोकप्रिय खोजें:",
                        "demo.vata": "वात दोष असंतुलन", "demo.pitta": "पित्त बुखार",
                        "demo.kapha": "कफ श्वसन समस्याएं", "demo.tridosha": "त्रिदोष असंतुलन",
                        "demo.icd": "ICD-11 अनुवाद", "demo.code": "ICD-11 कोड",
                        "demo.select": "शब्द चुनें अनुवाद के लिए", "demo.desc": "विवरण",
                        "demo.real": "वास्तविक समय अनुवाद यहां दिखाई देगा",
                        "demo.category": "श्रेणी", "demo.module": "पारंपरिक चिकित्सा मॉड्यूल",
                        "demo.confidence": "अनुवाद विश्वास",
                        "demo.fhir": "FHIR प्रारूप", "demo.analytics": "विश्लेषण",
                        "features.title": "शक्तिशाली एकीकरण विशेषताएँ",
                        "features.subtitle": "सहज पारंपरिक चिकित्सा डिजिटाइजेशन के लिए सब कुछ",
                        "features.real.title": "वास्तविक समय अनुवाद",
                        "features.real.desc": "उन्नत मिलान एल्गोरिदम के साथ 98% सटीकता के साथ तत्काल कोड रूपांतरण.",
                        "features.voice.title": "वॉयस इनपुट",
                        "features.voice.desc": "अपने शब्द बोलें और अंग्रेजी या हिंदी में तत्काल अनुवाद प्राप्त करें.",
                        "features.handwriting.title": "हस्तलिपि पहचान",
                        "features.handwriting.desc": "हस्तलिखित पर्चे अपलोड करें और उन्हें ICD-11 कोड में बदलें.",
                        "features.whatsapp.title": "व्हाट्सएप बॉट",
                        "features.whatsapp.desc": "त्वरित पहुंच के लिए व्हाट्सएप के माध्यम से अनुवाद प्राप्त करें.",
                        "features.abha.title": "ABHA एकीकरण",
                        "features.abha.desc": "भारतीय स्वास्थ्य आईडी के साथ सुरक्षित प्रमाणीकरण.",
                        "features.fhir.title": "FHIR R4 अनुपालन",
                        "features.fhir.desc": "सहज EMR एकीकरण के लिए वैश्विक मानक.",
                        "dashboard.title": "डैशबोर्ड", "dashboard.subtitle": "अपने अनुवाद, आंकड़े और गतिविधि की निगरानी करें.",
                        "dashboard.today": "आज के अनुवाद", "dashboard.accuracy": "औसत सटीकता",
                        "dashboard.response": "औसत प्रतिक्रिया समय", "dashboard.emrs": "कनेक्टेड EMR सिस्टम",
                        "profile.title": "प्रोफाइल", "profile.edit": "प्रोफाइल संपादित करें",
                        "profile.save": "परिवर्तन सहेजें",
                        "footer.about": "हमारे बारे में", "footer.links": "त्वरित लिंक", "footer.contact": "संपर्क",
                        "footer.about_text": "कटिंग-एज तकनीक के साथ पारंपरिक और आधुनिक चिकित्सा को जोड़ना."
                    }
                }
            };
        }
    };
    


    const translations = await loadTranslations();
    
    // Initialize i18next
    i18next.init({
        lng: localStorage.getItem('lang') || 'en',
        resources: translations
    }, (err, t) => {
        if (err) console.error('i18next init failed:', err);
        updateAllTranslations();
        initializeApp();
    });
});

function setupProfileDropdown() {
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileDropdown) {
        // Remove any existing event listeners
        profileDropdown.removeEventListener('click', handleProfileClick);
        // Add new event listener
        profileDropdown.addEventListener('click', handleProfileClick);
    }
}

function handleProfileClick(e) {
    e.stopPropagation();
    const menu = this.querySelector('.dropdown-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}
// Update all translations on page
function updateAllTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = i18next.t(key);
        
        // Handle placeholder attributes
        if (key.includes('[placeholder]')) {
            const actualKey = key.replace('[placeholder]', '');
            el.placeholder = i18next.t(actualKey);
        } else {
            el.innerHTML = translation;
        }
    });
    
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = i18next.language.toUpperCase();
    }
}

// Initialize app functionality
function initializeApp() {
    updateHeader();
    applySavedTheme();
    initializeDemo();
    initializeStats();
    setupEventListeners();
}

// Navigation functions
function navigate(page) {
    window.location.href = page;
}

// Language toggle
function toggleLanguage() {
    const currentLang = i18next.language;
    const newLang = currentLang === 'en' ? 'hi' : 'en';
    
    i18next.changeLanguage(newLang, () => {
        localStorage.setItem('lang', newLang);
        updateAllTranslations();
        
        // Update language toggle button
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.textContent = newLang === 'en' ? 'EN' : 'हिं';
        }
        
        // Update voice recognition language if active
        if (window.currentRecognition) {
            window.currentRecognition.lang = newLang === 'hi' ? 'hi-IN' : 'en-IN';
        }
    });
}

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    } else {
        document.body.classList.remove('dark');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
}

// Header management
function updateHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const profileDropdown = document.getElementById('profile-dropdown');
    
    if (!profileDropdown) return;
    
    if (user) {
        // Logged in user menu
        profileDropdown.innerHTML = `
            <img id="profile-photo" src="${user.photo || 'https://via.placeholder.com/40'}" alt="Profile" class="rounded-circle">
            <span id="username">${user.name}</span>
            <ul class="dropdown-menu hidden">
                <li><a href="index.html" data-i18n="nav.home">Home</a></li>
                <li><a href="dashboard.html" data-i18n="nav.dashboard">Dashboard</a></li>
                <li><a href="index.html#features" data-i18n="nav.features">Features</a></li>
                <li><a href="index.html#demo" data-i18n="nav.demo">Live Demo</a></li>
                <li><a href="profile.html" data-i18n="nav.profile">Settings</a></li>
                <li><span onclick="logout()" data-i18n="auth.logout" style="cursor: pointer; display: block; padding: 0.75rem 1.5rem;">Logout</span></li>
            </ul>
        `;
    } else {
        // Guest user menu
        profileDropdown.innerHTML = `
            <img id="profile-photo" src="https://via.placeholder.com/40" alt="Guest" class="rounded-circle">
            <span id="username">Guest</span>
            <ul class="dropdown-menu hidden">
                <li><a href="login.html" data-i18n="auth.login">Login</a></li>
                <li><a href="register.html" data-i18n="auth.register">Register</a></li>
                <li><a href="dashboard.html" data-i18n="nav.dashboard">Dashboard</a></li>
                <li><a href="index.html#features" data-i18n="nav.features">Features</a></li>
                <li><a href="index.html#demo" data-i18n="nav.demo">Live Demo</a></li>
            </ul>
        `;
    }
    
    // Re-apply translations and event listeners
    setTimeout(() => {
        updateAllTranslations();
        setupProfileDropdown();
    }, 100);
}

// Event listeners
function setupEventListeners() {
    // Profile dropdown toggle
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileDropdown) {
        profileDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            const menu = this.querySelector('.dropdown-menu');
            if (menu) {
                menu.classList.toggle('hidden');
            }
        });
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const dropdowns = document.querySelectorAll('.dropdown-menu:not(.hidden)');
        dropdowns.forEach(dropdown => {
            if (!dropdown.closest('#profile-dropdown').contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function toggleMobileMenu() {
    const navRight = document.querySelector('.nav-right');
    if (navRight) {
        navRight.classList.toggle('active');
    }
}

// Authentication functions
function login() {
    const email = document.getElementById('login-email')?.value;
    const password = document.getElementById('login-password')?.value;
    
    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }
    
    const userData = {
        name: email.split('@')[0],
        email: email,
        photo: 'https://via.placeholder.com/40'
    };
    
    localStorage.setItem('user', JSON.stringify(userData));
    updateHeader(); // Add this line
    navigate('dashboard.html');
}

function register() {
    const name = document.getElementById('register-name')?.value;
    const email = document.getElementById('register-email')?.value;
    const password = document.getElementById('register-password')?.value;
    const confirm = document.getElementById('register-confirm')?.value;
    const photoFile = document.getElementById('register-photo')?.files[0];
    
    if (!name || !email || !password) {
        alert('Please fill in all required fields');
        return;
    }
    
    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }
    
    const photo = photoFile ? URL.createObjectURL(photoFile) : 'https://via.placeholder.com/40';
    const userData = { name, email, photo };
    
    localStorage.setItem('user', JSON.stringify(userData));
    updateHeader(); // Add this line
    navigate('dashboard.html');
}

function logout() {
    localStorage.removeItem('user');
    updateHeader();
    navigate('index.html');
}

// Profile functions
function editProfile() {
    const form = document.getElementById('edit-profile-form');
    if (form) {
        form.classList.remove('hidden');
        
        const user = JSON.parse(localStorage.getItem('user')) || {};
        document.getElementById('edit-name').value = user.name || '';
        document.getElementById('edit-email').value = user.email || '';
    }
}

function saveProfile() {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const name = document.getElementById('edit-name')?.value;
    const email = document.getElementById('edit-email')?.value;
    const photoFile = document.getElementById('edit-photo')?.files[0];
    
    if (name) user.name = name;
    if (email) user.email = email;
    if (photoFile) user.photo = URL.createObjectURL(photoFile);
    
    localStorage.setItem('user', JSON.stringify(user));
    updateHeader();
    
    const form = document.getElementById('edit-profile-form');
    if (form) {
        form.classList.add('hidden');
    }
    
    alert('Profile updated successfully!');
}

// Demo functionality
function initializeDemo() {
    // Translation database
    const translations = {
        'vata dosha imbalance': { 
            code: 'MG21.0', 
            desc: 'Constitutional imbalance affecting nervous system and movement', 
            category: 'Traditional Medicine', 
            confidence: 95 
        },
        'pitta fever': { 
            code: 'XA50Z', 
            desc: 'Heat-related disorders affecting metabolism and digestion', 
            category: 'Traditional Medicine', 
            confidence: 92 
        },
        'kapha respiratory issues': { 
            code: 'JB60.1', 
            desc: 'Mucus-related respiratory and pulmonary conditions', 
            category: 'Traditional Medicine', 
            confidence: 90 
        },
        'tridosha imbalance': { 
            code: 'MG22.0', 
            desc: 'Complex constitutional disorder affecting all three doshas', 
            category: 'Traditional Medicine', 
            confidence: 98 
        }
    };

    // Fuzzy matching function
    function fuzzyMatch(input, options) {
        input = input.toLowerCase().trim();
        let bestMatch = null;
        let highestScore = 0;

        for (const key of Object.keys(options)) {
            const score = calculateSimilarity(input, key);
            if (score > highestScore && score > 60) { // Minimum 60% similarity
                highestScore = score;
                bestMatch = key;
            }
        }

        return bestMatch;
    }

    function calculateSimilarity(s1, s2) {
        const longer = s1.length > s2.length ? s1 : s2;
        const shorter = s1.length > s2.length ? s2 : s1;
        
        if (longer.length === 0) return 100;
        
        let matches = 0;
        for (let i = 0; i < shorter.length; i++) {
            if (longer.includes(shorter[i])) matches++;
        }
        
        return (matches / longer.length) * 100;
    }

    // Global functions for demo
    window.setTerm = function(term) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = term;
            translateCode();
        }
    };

    window.translateCode = function() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        const term = searchInput.value.trim();
        if (!term) {
            resetOutput();
            return;
        }

        const matchedKey = fuzzyMatch(term, translations);
        const result = matchedKey ? translations[matchedKey] : {
            code: 'N/A',
            desc: 'No translation found. Please try a different term or check spelling.',
            category: 'Unknown',
            confidence: 0
        };

        updateOutput(result);
    };

    window.startListening = function() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Speech recognition not supported in this browser');
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = i18next.language === 'hi' ? 'hi-IN' : 'en-IN';
        
        window.currentRecognition = recognition;

        recognition.onstart = function() {
            const btn = event.target || document.querySelector('[onclick="startListening()"]');
            if (btn) {
                btn.innerHTML = '🎤 Listening...';
                btn.disabled = true;
            }
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = transcript;
                translateCode();
            }
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            alert('Speech recognition error: ' + event.error);
        };

        recognition.onend = function() {
            const btn = document.querySelector('[onclick="startListening()"]');
            if (btn) {
                btn.innerHTML = '🎤 Speak';
                btn.disabled = false;
            }
        };

        recognition.start();
    };

    window.uploadImage = function() {
        const fileInput = document.getElementById('imageUpload');
        if (!fileInput || !fileInput.files[0]) {
            alert('Please select an image file first');
            return;
        }

        const file = fileInput.files[0];
        
        // Show loading state
        const btn = event.target || document.querySelector('[onclick="uploadImage()"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Processing...';
        btn.disabled = true;

        // Use Tesseract.js for OCR
        if (typeof Tesseract !== 'undefined') {
            Tesseract.recognize(file, 'eng+hin', {
                logger: m => console.log(m)
            }).then(({ data: { text } }) => {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.value = text.trim().replace(/\s+/g, ' ');
                    translateCode();
                }
                
                btn.innerHTML = originalText;
                btn.disabled = false;
            }).catch(err => {
                console.error('OCR Error:', err);
                alert('Error processing image. Please try again.');
                btn.innerHTML = originalText;
                btn.disabled = false;
            });
        } else {
            // Fallback if Tesseract is not loaded
            alert('OCR functionality not available. Please ensure the page is fully loaded.');
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    };

    window.openWhatsApp = function() {
        const message = encodeURIComponent('Hello! I need help with HealSync medical code translation.');
        const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    function updateOutput(result) {
        document.getElementById('icdCode').textContent = result.code;
        document.getElementById('description').textContent = result.desc;
        document.getElementById('category').textContent = result.category;
        document.getElementById('confidence').textContent = `${result.confidence}%`;
        
        const confidenceBar = document.getElementById('confidenceBar');
        if (confidenceBar) {
            confidenceBar.style.width = `${result.confidence}%`;
        }

        const outputCard = document.getElementById('outputCard');
        if (outputCard) {
            outputCard.style.opacity = '1';
        }

        if (result.code === 'N/A') {
    setTimeout(() => {
        alert('Term not found. Try using popular search terms or check spelling.');
    }, 500);}
    }
}