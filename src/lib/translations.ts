export type Language = "en" | "hi" | "ta" | "te" | "kn" | "ml" | "bn" | "mr" | "gu" | "pa" | "or" | "ur" | "as";

export interface TranslationKeys {
  // Navbar
  nav_home: string;
  nav_about: string;
  nav_donate: string;
  nav_track: string;
  nav_history: string;
  nav_contact: string;
  nav_signin: string;
  nav_donate_now: string;

  // Hero
  hero_badge: string;
  hero_title1: string;
  hero_title2: string;
  hero_subtitle: string;
  hero_btn_donate: string;
  hero_btn_request: string;

  // Stats
  stat_meals: string;
  stat_families: string;
  stat_cities: string;
  stat_volunteers: string;

  // How it works
  how_title: string;
  how_subtitle: string;
  step1_title: string;
  step1_desc: string;
  step2_title: string;
  step2_desc: string;
  step3_title: string;
  step3_desc: string;

  // Testimonials
  testi_title: string;
  testi_subtitle: string;

  // CTA
  cta_title: string;
  cta_subtitle: string;
  cta_donate: string;
  cta_signup: string;

  // About
  about_hero_title: string;
  about_hero_subtitle: string;
  about_mission_title: string;
  about_mission_desc: string;
  about_vision_title: string;
  about_vision_desc: string;
  about_impact: string;
  about_team: string;
  about_partners: string;

  // Donate page
  donate_title: string;
  donate_subtitle: string;
  donate_food_type: string;
  donate_quantity: string;
  donate_address: string;
  donate_city: string;
  donate_time: string;
  donate_photo: string;
  donate_photo_desc: string;
  donate_extra: string;
  donate_submit: string;
  donate_success_title: string;
  donate_success_desc: string;
  donate_more: string;
  donate_track: string;

  // Track
  track_title: string;
  track_subtitle: string;
  track_donated: string;
  track_picked: string;
  track_transit: string;
  track_delivered: string;

  // History
  history_title: string;
  history_subtitle: string;
  history_empty: string;
  history_all: string;
  history_view_all: string;

  // Dashboard
  dash_greeting: string;
  dash_subtitle: string;
  dash_donor: string;
  dash_receiver: string;
  dash_total_donations: string;
  dash_meals_served: string;
  dash_families_helped: string;
  dash_impact_score: string;
  dash_donate_now: string;
  dash_donate_desc: string;
  dash_recent: string;
  dash_nearby: string;
  dash_nearby_desc: string;
  dash_request_food: string;
  dash_your_requests: string;

  // Sign In
  signin_welcome: string;
  signin_new_account: string;
  signin_existing: string;
  signin_who: string;
  signin_donor: string;
  signin_donor_desc: string;
  signin_receiver: string;
  signin_receiver_desc: string;
  signin_name: string;
  signin_phone: string;
  signin_city: string;
  signin_email: string;
  signin_password: string;
  signin_create: string;
  signin_login: string;
  signin_have_account: string;
  signin_new_user: string;

  // Profile
  profile_info: string;
  profile_edit: string;
  profile_save: string;
  profile_badges: string;
  profile_donations: string;
  profile_locked: string;

  // Contact
  contact_title: string;
  contact_subtitle: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  contact_message: string;
  contact_send: string;
  contact_address: string;
  contact_working: string;

  // Footer
  footer_tagline: string;
  footer_quick: string;
  footer_support: string;
  footer_connect: string;
  footer_copyright: string;

  // Food categories
  food_roti: string;
  food_sabzi: string;
  food_rice: string;
  food_fruits: string;
  food_packed: string;
  food_sweets: string;

  // Time slots
  time_morning: string;
  time_afternoon: string;
  time_evening: string;
  time_night: string;
}

const en: TranslationKeys = {
  nav_home: "Home",
  nav_about: "About Us",
  nav_donate: "Donate Food",
  nav_track: "Track",
  nav_history: "History",
  nav_contact: "Contact",
  nav_signin: "Sign In",
  nav_donate_now: "Donate Now 🍱",

  hero_badge: "India's Largest Food Donation Platform",
  hero_title1: "Don't Waste Food,",
  hero_title2: "Feed Someone!",
  hero_subtitle: "One plate of food can change someone's world. Send your extra food to those who need it through AnnaSeva. 🙏",
  hero_btn_donate: "🍱 Donate Food",
  hero_btn_request: "🙋 Request Food",

  stat_meals: "Meals Donated",
  stat_families: "Families Helped",
  stat_cities: "Cities Active",
  stat_volunteers: "Volunteers",

  how_title: "How Does It Work?",
  how_subtitle: "In just 3 steps you can help a hungry person",
  step1_title: "Donate",
  step1_desc: "List your extra food — roti, sabzi, rice, anything!",
  step2_title: "Pickup",
  step2_desc: "Our team picks up the food from your location",
  step3_title: "Deliver",
  step3_desc: "Food is safely delivered to those in need",

  testi_title: "People's Stories ❤️",
  testi_subtitle: "What our donors and receivers say",

  cta_title: "Start Today! 🙏",
  cta_subtitle: "A small help can bring great joy. Donate or request — AnnaSeva is with you.",
  cta_donate: "🍱 Donate Food Now",
  cta_signup: "Sign Up Free →",

  about_hero_title: "Our Story ❤️",
  about_hero_subtitle: "AnnaSeva is a dream where no one sleeps hungry. We use the power of technology and community to deliver extra food to those in need.",
  about_mission_title: "Our Mission 🎯",
  about_mission_desc: "To eliminate food waste in India and deliver food to every person in need. Even one plate can make a difference.",
  about_vision_title: "Our Vision 🌟",
  about_vision_desc: "To be active in every Indian city by 2030 and donate 10 crore meals. An India where no one sleeps hungry.",
  about_impact: "Our Impact 📊",
  about_team: "Our Team 👥",
  about_partners: "Partner NGOs 🤝",

  donate_title: "Donate Food 🍱",
  donate_subtitle: "Send your extra food to those who need it",
  donate_food_type: "Food Type (select)",
  donate_quantity: "How much food? (Quantity)",
  donate_address: "Pickup Address",
  donate_city: "City",
  donate_time: "Pickup Time Slot",
  donate_photo: "Photo (optional)",
  donate_photo_desc: "Upload food photo",
  donate_extra: "Anything else? (Optional)",
  donate_submit: "Donate 🙏",
  donate_success_title: "Thank You! 🙏",
  donate_success_desc: "Your donation has been listed. Our team will contact you soon.",
  donate_more: "Donate More",
  donate_track: "Track →",

  track_title: "Track Donation 📍",
  track_subtitle: "See live status of your donated food",
  track_donated: "Donated",
  track_picked: "Picked Up",
  track_transit: "In Transit",
  track_delivered: "Delivered",

  history_title: "Donation History 📜",
  history_subtitle: "All your past donations are here",
  history_empty: "No donations found for this status",
  history_all: "All Status",
  history_view_all: "View All History →",

  dash_greeting: "Namaste! 🙏",
  dash_subtitle: "Help someone today too",
  dash_donor: "🤲 Donor",
  dash_receiver: "🙏 Receiver",
  dash_total_donations: "Total Donations",
  dash_meals_served: "Meals Served",
  dash_families_helped: "Families Helped",
  dash_impact_score: "Impact Score",
  dash_donate_now: "Donate Now! 🍱",
  dash_donate_desc: "Have extra food? Donate in just one click",
  dash_recent: "Recent Donations",
  dash_nearby: "Available Donations Nearby 📍",
  dash_nearby_desc: "Food available near you",
  dash_request_food: "Request Food 🙏",
  dash_your_requests: "Your Requests",

  signin_welcome: "Welcome to AnnaSeva! 🙏",
  signin_new_account: "Create new account",
  signin_existing: "Sign in to your account",
  signin_who: "Who are you?",
  signin_donor: "Donor",
  signin_donor_desc: "Want to give food",
  signin_receiver: "Receiver",
  signin_receiver_desc: "Need food",
  signin_name: "Your Name",
  signin_phone: "Phone Number",
  signin_city: "City",
  signin_email: "Email",
  signin_password: "Password",
  signin_create: "Create Account 🚀",
  signin_login: "Sign In →",
  signin_have_account: "Already have account?",
  signin_new_user: "New user?",

  profile_info: "Profile Information",
  profile_edit: "Edit",
  profile_save: "Save",
  profile_badges: "Achievements & Badges",
  profile_donations: "Donations",
  profile_locked: "🔒 Locked",

  contact_title: "Contact Us 📞",
  contact_subtitle: "Any questions or suggestions? We're here for you!",
  contact_name: "Your Name",
  contact_email: "Email Address",
  contact_phone: "Phone Number (optional)",
  contact_message: "Write your message...",
  contact_send: "Send Message 📩",
  contact_address: "Address",
  contact_working: "Working Hours",

  footer_tagline: "Don't waste food, feed someone! India's largest food donation community.",
  footer_quick: "Quick Links",
  footer_support: "Support",
  footer_connect: "Connect With Us",
  footer_copyright: "© 2026 AnnaSeva. Made with ❤️ in India. All rights reserved.",

  food_roti: "Roti/Chapati",
  food_sabzi: "Sabzi/Curry",
  food_rice: "Rice/Biryani",
  food_fruits: "Fruits",
  food_packed: "Packed Food",
  food_sweets: "Sweets",

  time_morning: "Morning (8-11 AM)",
  time_afternoon: "Afternoon (12-3 PM)",
  time_evening: "Evening (4-7 PM)",
  time_night: "Night (8-10 PM)",
};

const hi: TranslationKeys = {
  nav_home: "होम",
  nav_about: "हमारे बारे में",
  nav_donate: "खाना दान करें",
  nav_track: "ट्रैक करें",
  nav_history: "इतिहास",
  nav_contact: "संपर्क",
  nav_signin: "साइन इन",
  nav_donate_now: "अभी दान करें 🍱",

  hero_badge: "भारत का सबसे बड़ा फूड डोनेशन प्लेटफॉर्म",
  hero_title1: "खाना बर्बाद मत करो,",
  hero_title2: "किसी का पेट भरो!",
  hero_subtitle: "एक प्लेट खाना किसी की दुनिया बदल सकता है। AnnaSeva से अपना एक्स्ट्रा खाना उन लोगों तक पहुँचाएँ जिन्हें इसकी ज़रूरत है। 🙏",
  hero_btn_donate: "🍱 खाना दान करें",
  hero_btn_request: "🙋 खाना माँगें",

  stat_meals: "भोजन दान किया",
  stat_families: "परिवारों की मदद",
  stat_cities: "शहरों में सक्रिय",
  stat_volunteers: "स्वयंसेवक",

  how_title: "कैसे काम करता है?",
  how_subtitle: "सिर्फ 3 स्टेप्स में आप किसी भूखे इंसान की मदद कर सकते हैं",
  step1_title: "दान करें",
  step1_desc: "अपना एक्स्ट्रा खाना लिस्ट करें — रोटी, सब्ज़ी, चावल, कुछ भी!",
  step2_title: "पिकअप",
  step2_desc: "हमारी टीम आपके लोकेशन से खाना पिक करती है",
  step3_title: "डिलीवर",
  step3_desc: "ज़रूरतमंदों तक खाना सुरक्षित पहुँचा दिया जाता है",

  testi_title: "लोगों की कहानियाँ ❤️",
  testi_subtitle: "हमारे डोनर्स और रिसीवर्स क्या कहते हैं",

  cta_title: "आज ही शुरू करें! 🙏",
  cta_subtitle: "एक छोटी सी मदद बड़ी खुशी दे सकती है। दान करें या माँगें — AnnaSeva आपके साथ है।",
  cta_donate: "🍱 अभी खाना दान करें",
  cta_signup: "मुफ्त साइन अप करें →",

  about_hero_title: "हमारी कहानी ❤️",
  about_hero_subtitle: "AnnaSeva एक सपना है जहाँ कोई भूखा न सोए। हम टेक्नोलॉजी और कम्युनिटी की ताकत से एक्स्ट्रा खाना ज़रूरतमंदों तक पहुँचाते हैं।",
  about_mission_title: "हमारा मिशन 🎯",
  about_mission_desc: "इंडिया में फूड वेस्ट को खत्म करना और हर ज़रूरतमंद इंसान तक खाना पहुँचाना। एक प्लेट खाना भी फर्क डाल सकता है।",
  about_vision_title: "हमारी विज़न 🌟",
  about_vision_desc: "2030 तक हर इंडियन सिटी में एक्टिव होना और 10 करोड़ मील्स डोनेट करना। एक ऐसा इंडिया जहाँ कोई भूखा न सोए।",
  about_impact: "हमारा प्रभाव 📊",
  about_team: "हमारी टीम 👥",
  about_partners: "पार्टनर NGOs 🤝",

  donate_title: "खाना दान करें 🍱",
  donate_subtitle: "अपना एक्स्ट्रा खाना उन लोगों तक पहुँचाएँ जिन्हें ज़रूरत है",
  donate_food_type: "खाने का प्रकार (चुनें)",
  donate_quantity: "कितना खाना? (मात्रा)",
  donate_address: "पिकअप पता",
  donate_city: "शहर",
  donate_time: "पिकअप टाइम स्लॉट",
  donate_photo: "फोटो (वैकल्पिक)",
  donate_photo_desc: "खाने की फोटो अपलोड करें",
  donate_extra: "कुछ और बताना है? (वैकल्पिक)",
  donate_submit: "दान करें 🙏",
  donate_success_title: "धन्यवाद! 🙏",
  donate_success_desc: "आपका डोनेशन सफलतापूर्वक लिस्ट हो गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।",
  donate_more: "और दान करें",
  donate_track: "ट्रैक करें →",

  track_title: "डोनेशन ट्रैक करें 📍",
  track_subtitle: "आपके डोनेट किए खाने का लाइव स्टेटस देखें",
  track_donated: "दान किया",
  track_picked: "पिक अप हुआ",
  track_transit: "रास्ते में",
  track_delivered: "डिलीवर हो गया",

  history_title: "डोनेशन इतिहास 📜",
  history_subtitle: "आपकी सभी पिछली डोनेशन यहाँ हैं",
  history_empty: "इस स्टेटस की कोई डोनेशन नहीं मिली",
  history_all: "सभी स्टेटस",
  history_view_all: "सारा इतिहास देखें →",

  dash_greeting: "नमस्ते! 🙏",
  dash_subtitle: "आज भी किसी की मदद करें",
  dash_donor: "🤲 दानकर्ता",
  dash_receiver: "🙏 प्राप्तकर्ता",
  dash_total_donations: "कुल दान",
  dash_meals_served: "भोजन परोसे",
  dash_families_helped: "परिवारों की मदद",
  dash_impact_score: "इम्पैक्ट स्कोर",
  dash_donate_now: "अभी दान करें! 🍱",
  dash_donate_desc: "आपके पास एक्स्ट्रा खाना है? बस एक क्लिक में दान करें",
  dash_recent: "हाल की डोनेशन",
  dash_nearby: "आसपास उपलब्ध डोनेशन 📍",
  dash_nearby_desc: "आपके आसपास उपलब्ध खाना",
  dash_request_food: "खाना माँगें 🙏",
  dash_your_requests: "आपकी रिक्वेस्ट्स",

  signin_welcome: "AnnaSeva में स्वागत है! 🙏",
  signin_new_account: "नया अकाउंट बनाएँ",
  signin_existing: "अपने अकाउंट में साइन इन करें",
  signin_who: "आप कौन हैं?",
  signin_donor: "दानकर्ता",
  signin_donor_desc: "खाना देना चाहते हैं",
  signin_receiver: "प्राप्तकर्ता",
  signin_receiver_desc: "खाना चाहिए",
  signin_name: "आपका नाम",
  signin_phone: "फोन नंबर",
  signin_city: "शहर",
  signin_email: "ईमेल",
  signin_password: "पासवर्ड",
  signin_create: "अकाउंट बनाएँ 🚀",
  signin_login: "साइन इन →",
  signin_have_account: "पहले से अकाउंट है?",
  signin_new_user: "नए यूज़र?",

  profile_info: "प्रोफ़ाइल जानकारी",
  profile_edit: "बदलें",
  profile_save: "सेव करें",
  profile_badges: "उपलब्धियाँ और बैज",
  profile_donations: "दान",
  profile_locked: "🔒 लॉक",

  contact_title: "हमसे संपर्क करें 📞",
  contact_subtitle: "कोई सवाल या सुझाव है? हम आपके लिए यहाँ हैं!",
  contact_name: "आपका नाम",
  contact_email: "ईमेल एड्रेस",
  contact_phone: "फोन नंबर (वैकल्पिक)",
  contact_message: "अपना मैसेज लिखें...",
  contact_send: "मैसेज भेजें 📩",
  contact_address: "पता",
  contact_working: "कार्य समय",

  footer_tagline: "खाना बर्बाद मत करो, किसी का पेट भरो! भारत की सबसे बड़ी फूड डोनेशन कम्युनिटी।",
  footer_quick: "त्वरित लिंक",
  footer_support: "सहायता",
  footer_connect: "हमसे जुड़ें",
  footer_copyright: "© 2026 AnnaSeva. भारत में ❤️ से बनाया गया। सर्वाधिकार सुरक्षित।",

  food_roti: "रोटी/चपाती",
  food_sabzi: "सब्ज़ी/करी",
  food_rice: "चावल/बिरयानी",
  food_fruits: "फल",
  food_packed: "पैक्ड फूड",
  food_sweets: "मिठाई",

  time_morning: "सुबह (8-11 AM)",
  time_afternoon: "दोपहर (12-3 PM)",
  time_evening: "शाम (4-7 PM)",
  time_night: "रात (8-10 PM)",
};

const ta: TranslationKeys = {
  nav_home: "முகப்பு",
  nav_about: "எங்களைப் பற்றி",
  nav_donate: "உணவு நன்கொடை",
  nav_track: "கண்காணி",
  nav_history: "வரலாறு",
  nav_contact: "தொடர்பு",
  nav_signin: "உள்நுழை",
  nav_donate_now: "இப்போது நன்கொடை 🍱",
  hero_badge: "இந்தியாவின் மிகப்பெரிய உணவு நன்கொடை தளம்",
  hero_title1: "உணவை வீணாக்காதீர்கள்,",
  hero_title2: "ஒருவரின் வயிற்றை நிரப்புங்கள்!",
  hero_subtitle: "ஒரு தட்டு உணவு ஒருவரின் உலகை மாற்ற முடியும். AnnaSeva மூலம் உங்கள் கூடுதல் உணவை தேவையுள்ளவர்களுக்கு அனுப்புங்கள். 🙏",
  hero_btn_donate: "🍱 உணவு நன்கொடை",
  hero_btn_request: "🙋 உணவு கோரிக்கை",
  stat_meals: "நன்கொடை உணவு", stat_families: "குடும்பங்களுக்கு உதவி", stat_cities: "நகரங்களில் செயல்பாடு", stat_volunteers: "தன்னார்வலர்கள்",
  how_title: "எப்படி செயல்படுகிறது?", how_subtitle: "3 எளிய படிகளில் ஒரு பசித்தவருக்கு உதவுங்கள்",
  step1_title: "நன்கொடை", step1_desc: "உங்கள் கூடுதல் உணவை பட்டியலிடுங்கள்", step2_title: "பிக்கப்", step2_desc: "எங்கள் குழு உங்கள் இடத்தில் இருந்து எடுக்கும்", step3_title: "டெலிவரி", step3_desc: "தேவையுள்ளவர்களுக்கு பாதுகாப்பாக வழங்கப்படும்",
  testi_title: "மக்களின் கதைகள் ❤️", testi_subtitle: "எங்கள் நன்கொடையாளர்கள் என்ன சொல்கிறார்கள்",
  cta_title: "இன்றே தொடங்குங்கள்! 🙏", cta_subtitle: "ஒரு சிறிய உதவி பெரிய மகிழ்ச்சி தரும்.", cta_donate: "🍱 இப்போது நன்கொடை செய்யுங்கள்", cta_signup: "இலவச பதிவு →",
  about_hero_title: "எங்கள் கதை ❤️", about_hero_subtitle: "யாரும் பசியுடன் தூங்காத ஒரு கனவு.", about_mission_title: "எங்கள் நோக்கம் 🎯", about_mission_desc: "இந்தியாவில் உணவு வீணாவதை நிறுத்தி தேவையுள்ளவர்களுக்கு வழங்குதல்.", about_vision_title: "எங்கள் பார்வை 🌟", about_vision_desc: "2030க்குள் ஒவ்வொரு நகரத்திலும் செயல்படுதல்.", about_impact: "எங்கள் தாக்கம் 📊", about_team: "எங்கள் குழு 👥", about_partners: "கூட்டாளி NGOக்கள் 🤝",
  donate_title: "உணவு நன்கொடை 🍱", donate_subtitle: "உங்கள் கூடுதல் உணவை தேவையுள்ளவர்களுக்கு", donate_food_type: "உணவு வகை (தேர்வு)", donate_quantity: "எவ்வளவு உணவு?", donate_address: "பிக்கப் முகவரி", donate_city: "நகரம்", donate_time: "பிக்கப் நேரம்", donate_photo: "புகைப்படம் (விருப்பம்)", donate_photo_desc: "உணவு புகைப்படம் பதிவேற்றவும்", donate_extra: "வேறு ஏதாவது?", donate_submit: "நன்கொடை செய்யுங்கள் 🙏", donate_success_title: "நன்றி! 🙏", donate_success_desc: "உங்கள் நன்கொடை பதிவாகியது.", donate_more: "மேலும் நன்கொடை", donate_track: "கண்காணி →",
  track_title: "நன்கொடை கண்காணி 📍", track_subtitle: "உங்கள் உணவின் நிலையை பாருங்கள்", track_donated: "நன்கொடை", track_picked: "எடுக்கப்பட்டது", track_transit: "வழியில்", track_delivered: "வழங்கப்பட்டது",
  history_title: "நன்கொடை வரலாறு 📜", history_subtitle: "உங்கள் அனைத்து நன்கொடைகளும் இங்கே", history_empty: "இந்த நிலையில் நன்கொடை இல்லை", history_all: "அனைத்து நிலை", history_view_all: "அனைத்தும் பாருங்கள் →",
  dash_greeting: "வணக்கம்! 🙏", dash_subtitle: "இன்றும் ஒருவருக்கு உதவுங்கள்", dash_donor: "🤲 நன்கொடையாளர்", dash_receiver: "🙏 பெறுநர்", dash_total_donations: "மொத்த நன்கொடைகள்", dash_meals_served: "உணவு வழங்கப்பட்டது", dash_families_helped: "குடும்பங்களுக்கு உதவி", dash_impact_score: "தாக்க மதிப்பெண்", dash_donate_now: "இப்போது நன்கொடை! 🍱", dash_donate_desc: "கூடுதல் உணவு உள்ளதா? ஒரே கிளிக்கில் நன்கொடை", dash_recent: "சமீபத்திய நன்கொடைகள்", dash_nearby: "அருகிலுள்ள நன்கொடைகள் 📍", dash_nearby_desc: "உங்கள் அருகில் உணவு", dash_request_food: "உணவு கோருங்கள் 🙏", dash_your_requests: "உங்கள் கோரிக்கைகள்",
  signin_welcome: "AnnaSeva-க்கு வரவேற்கிறோம்! 🙏", signin_new_account: "புதிய கணக்கு உருவாக்கவும்", signin_existing: "உள்நுழையவும்", signin_who: "நீங்கள் யார்?", signin_donor: "நன்கொடையாளர்", signin_donor_desc: "உணவு தர விரும்புகிறேன்", signin_receiver: "பெறுநர்", signin_receiver_desc: "உணவு தேவை", signin_name: "உங்கள் பெயர்", signin_phone: "தொலைபேசி எண்", signin_city: "நகரம்", signin_email: "மின்னஞ்சல்", signin_password: "கடவுச்சொல்", signin_create: "கணக்கு உருவாக்கவும் 🚀", signin_login: "உள்நுழை →", signin_have_account: "ஏற்கனவே கணக்கு உள்ளதா?", signin_new_user: "புதியவரா?",
  profile_info: "சுயவிவர தகவல்", profile_edit: "திருத்தவும்", profile_save: "சேமிக்கவும்", profile_badges: "சாதனைகள் & பேட்ஜ்கள்", profile_donations: "நன்கொடைகள்", profile_locked: "🔒 பூட்டப்பட்டது",
  contact_title: "எங்களை தொடர்பு கொள்ளுங்கள் 📞", contact_subtitle: "கேள்விகள் அல்லது பரிந்துரைகள்? நாங்கள் இங்கே!", contact_name: "உங்கள் பெயர்", contact_email: "மின்னஞ்சல்", contact_phone: "தொலைபேசி (விருப்பம்)", contact_message: "உங்கள் செய்தியை எழுதுங்கள்...", contact_send: "செய்தி அனுப்பவும் 📩", contact_address: "முகவரி", contact_working: "வேலை நேரம்",
  footer_tagline: "உணவை வீணாக்காதீர்கள்! இந்தியாவின் மிகப்பெரிய உணவு நன்கொடை சமூகம்.", footer_quick: "விரைவு இணைப்புகள்", footer_support: "ஆதரவு", footer_connect: "எங்களுடன் இணையுங்கள்", footer_copyright: "© 2026 AnnaSeva. இந்தியாவில் ❤️ உடன் உருவாக்கப்பட்டது.",
  food_roti: "ரொட்டி/சப்பாத்தி", food_sabzi: "காய்கறி/கறி", food_rice: "அரிசி/பிரியாணி", food_fruits: "பழங்கள்", food_packed: "பேக் உணவு", food_sweets: "இனிப்புகள்",
  time_morning: "காலை (8-11 AM)", time_afternoon: "மதியம் (12-3 PM)", time_evening: "மாலை (4-7 PM)", time_night: "இரவு (8-10 PM)",
};

const te: TranslationKeys = {
  nav_home: "హోమ్", nav_about: "మా గురించి", nav_donate: "ఆహారం దానం", nav_track: "ట్రాక్", nav_history: "చరిత్ర", nav_contact: "సంప్రదించండి", nav_signin: "సైన్ ఇన్", nav_donate_now: "ఇప్పుడు దానం 🍱",
  hero_badge: "భారతదేశంలో అతిపెద్ద ఆహార దాన వేదిక", hero_title1: "ఆహారం వృధా చేయకండి,", hero_title2: "ఎవరినైనా పోషించండి!", hero_subtitle: "ఒక ప్లేట్ ఆహారం ఎవరో ఒకరి ప్రపంచాన్ని మార్చగలదు. 🙏", hero_btn_donate: "🍱 ఆహారం దానం", hero_btn_request: "🙋 ఆహారం అభ్యర్థన",
  stat_meals: "భోజనాలు దానం", stat_families: "కుటుంబాలకు సహాయం", stat_cities: "నగరాల్లో చురుగ్గా", stat_volunteers: "వాలంటీర్లు",
  how_title: "ఎలా పని చేస్తుంది?", how_subtitle: "3 సులభ దశల్లో ఆకలితో ఉన్నవారికి సహాయం చేయండి",
  step1_title: "దానం", step1_desc: "మీ అదనపు ఆహారాన్ని జాబితా చేయండి", step2_title: "పికప్", step2_desc: "మా టీమ్ మీ ప్రదేశం నుండి తీసుకుంటుంది", step3_title: "డెలివరీ", step3_desc: "అవసరమైన వారికి సురక్షితంగా చేరవేయబడుతుంది",
  testi_title: "ప్రజల కథలు ❤️", testi_subtitle: "మా దాతలు ఏమి చెబుతున్నారు",
  cta_title: "ఈ రోజే ప్రారంభించండి! 🙏", cta_subtitle: "చిన్న సహాయం గొప్ప ఆనందాన్ని ఇస్తుంది.", cta_donate: "🍱 ఇప్పుడు దానం చేయండి", cta_signup: "ఉచిత సైన్ అప్ →",
  about_hero_title: "మా కథ ❤️", about_hero_subtitle: "ఎవరూ ఆకలితో నిద్రపోని కల.", about_mission_title: "మా లక్ష్యం 🎯", about_mission_desc: "భారతదేశంలో ఆహార వృధాను అంతం చేయడం.", about_vision_title: "మా దృష్టి 🌟", about_vision_desc: "2030 నాటికి ప్రతి నగరంలో చురుగ్గా ఉండటం.", about_impact: "మా ప్రభావం 📊", about_team: "మా టీమ్ 👥", about_partners: "భాగస్వామి NGOలు 🤝",
  donate_title: "ఆహారం దానం చేయండి 🍱", donate_subtitle: "మీ అదనపు ఆహారాన్ని అవసరమైన వారికి", donate_food_type: "ఆహార రకం (ఎంచుకోండి)", donate_quantity: "ఎంత ఆహారం?", donate_address: "పికప్ చిరునామా", donate_city: "నగరం", donate_time: "పికప్ సమయం", donate_photo: "ఫోటో (ఐచ్ఛికం)", donate_photo_desc: "ఆహారం ఫోటో అప్లోడ్", donate_extra: "ఇంకేమైనా?", donate_submit: "దానం చేయండి 🙏", donate_success_title: "ధన్యవాదాలు! 🙏", donate_success_desc: "మీ దానం నమోదైంది.", donate_more: "మరింత దానం", donate_track: "ట్రాక్ →",
  track_title: "దానం ట్రాక్ 📍", track_subtitle: "మీ ఆహార స్థితిని చూడండి", track_donated: "దానం చేయబడింది", track_picked: "పికప్ అయింది", track_transit: "మార్గంలో", track_delivered: "డెలివరీ అయింది",
  history_title: "దాన చరిత్ర 📜", history_subtitle: "మీ గత దానాలు ఇక్కడ ఉన్నాయి", history_empty: "ఈ స్థితిలో దానం లేదు", history_all: "అన్ని స్థితి", history_view_all: "అన్నీ చూడండి →",
  dash_greeting: "నమస్కారం! 🙏", dash_subtitle: "ఈ రోజు కూడా ఎవరికైనా సహాయం చేయండి", dash_donor: "🤲 దాత", dash_receiver: "🙏 గ్రహీత", dash_total_donations: "మొత్తం దానాలు", dash_meals_served: "భోజనాలు అందించాయి", dash_families_helped: "కుటుంబాలకు సహాయం", dash_impact_score: "ప్రభావ స్కోర్", dash_donate_now: "ఇప్పుడు దానం! 🍱", dash_donate_desc: "అదనపు ఆహారం ఉందా? ఒక క్లిక్‌లో దానం", dash_recent: "ఇటీవలి దానాలు", dash_nearby: "సమీపంలో అందుబాటులో 📍", dash_nearby_desc: "మీ సమీపంలో ఆహారం", dash_request_food: "ఆహారం అభ్యర్థించండి 🙏", dash_your_requests: "మీ అభ్యర్థనలు",
  signin_welcome: "AnnaSeva కి స్వాగతం! 🙏", signin_new_account: "కొత్త ఖాతా సృష్టించండి", signin_existing: "సైన్ ఇన్ చేయండి", signin_who: "మీరు ఎవరు?", signin_donor: "దాత", signin_donor_desc: "ఆహారం ఇవ్వాలనుకుంటున్నారు", signin_receiver: "గ్రహీత", signin_receiver_desc: "ఆహారం కావాలి", signin_name: "మీ పేరు", signin_phone: "ఫోన్ నంబర్", signin_city: "నగరం", signin_email: "ఇమెయిల్", signin_password: "పాస్వర్డ్", signin_create: "ఖాతా సృష్టించండి 🚀", signin_login: "సైన్ ఇన్ →", signin_have_account: "ఖాతా ఉందా?", signin_new_user: "కొత్తవారా?",
  profile_info: "ప్రొఫైల్ సమాచారం", profile_edit: "సవరించు", profile_save: "సేవ్", profile_badges: "సాధనలు & బ్యాడ్జ్‌లు", profile_donations: "దానాలు", profile_locked: "🔒 లాక్",
  contact_title: "మమ్మల్ని సంప్రదించండి 📞", contact_subtitle: "ప్రశ్నలు లేదా సూచనలు? మేము ఇక్కడ ఉన్నాము!", contact_name: "మీ పేరు", contact_email: "ఇమెయిల్", contact_phone: "ఫోన్ (ఐచ్ఛికం)", contact_message: "మీ సందేశం రాయండి...", contact_send: "సందేశం పంపండి 📩", contact_address: "చిరునామా", contact_working: "పని సమయాలు",
  footer_tagline: "ఆహారం వృధా చేయకండి! భారతదేశంలో అతిపెద్ద ఆహార దాన సమూహం.", footer_quick: "త్వరిత లింక్‌లు", footer_support: "సహాయం", footer_connect: "మాతో కనెక్ట్ అవ్వండి", footer_copyright: "© 2026 AnnaSeva. భారతదేశంలో ❤️ తో తయారు.",
  food_roti: "రోటి/చపాతి", food_sabzi: "కూరగాయలు/కర్రీ", food_rice: "అన్నం/బిర్యానీ", food_fruits: "పండ్లు", food_packed: "ప్యాక్ ఆహారం", food_sweets: "మిఠాయిలు",
  time_morning: "ఉదయం (8-11 AM)", time_afternoon: "మధ్యాహ్నం (12-3 PM)", time_evening: "సాయంత్రం (4-7 PM)", time_night: "రాత్రి (8-10 PM)",
};

const kn: TranslationKeys = {
  nav_home: "ಮುಖಪುಟ", nav_about: "ನಮ್ಮ ಬಗ್ಗೆ", nav_donate: "ಆಹಾರ ದಾನ", nav_track: "ಟ್ರ್ಯಾಕ್", nav_history: "ಇತಿಹಾಸ", nav_contact: "ಸಂಪರ್ಕ", nav_signin: "ಸೈನ್ ಇನ್", nav_donate_now: "ಈಗ ದಾನ ಮಾಡಿ 🍱",
  hero_badge: "ಭಾರತದ ಅತಿದೊಡ್ಡ ಆಹಾರ ದಾನ ವೇದಿಕೆ", hero_title1: "ಆಹಾರ ವ್ಯರ್ಥ ಮಾಡಬೇಡಿ,", hero_title2: "ಯಾರನ್ನಾದರೂ ಊಟ ಹಾಕಿ!", hero_subtitle: "ಒಂದು ಪ್ಲೇಟ್ ಊಟ ಯಾರೊಬ್ಬರ ಜೀವನವನ್ನು ಬದಲಾಯಿಸಬಹುದು. 🙏", hero_btn_donate: "🍱 ಆಹಾರ ದಾನ", hero_btn_request: "🙋 ಆಹಾರ ವಿನಂತಿ",
  stat_meals: "ಊಟ ದಾನ", stat_families: "ಕುಟುಂಬಗಳಿಗೆ ಸಹಾಯ", stat_cities: "ನಗರಗಳಲ್ಲಿ ಸಕ್ರಿಯ", stat_volunteers: "ಸ್ವಯಂಸೇವಕರು",
  how_title: "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?", how_subtitle: "3 ಸರಳ ಹಂತಗಳಲ್ಲಿ ಹಸಿದವರಿಗೆ ಸಹಾಯ ಮಾಡಿ",
  step1_title: "ದಾನ", step1_desc: "ನಿಮ್ಮ ಹೆಚ್ಚುವರಿ ಆಹಾರವನ್ನು ಪಟ್ಟಿ ಮಾಡಿ", step2_title: "ಪಿಕಪ್", step2_desc: "ನಮ್ಮ ತಂಡ ನಿಮ್ಮ ಸ್ಥಳದಿಂದ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ", step3_title: "ಡೆಲಿವರಿ", step3_desc: "ಅಗತ್ಯವಿರುವವರಿಗೆ ಸುರಕ್ಷಿತವಾಗಿ ತಲುಪಿಸಲಾಗುತ್ತದೆ",
  testi_title: "ಜನರ ಕಥೆಗಳು ❤️", testi_subtitle: "ನಮ್ಮ ದಾನಿಗಳು ಏನು ಹೇಳುತ್ತಾರೆ",
  cta_title: "ಇಂದೇ ಪ್ರಾರಂಭಿಸಿ! 🙏", cta_subtitle: "ಒಂದು ಸಣ್ಣ ಸಹಾಯ ದೊಡ್ಡ ಸಂತೋಷ ನೀಡುತ್ತದೆ.", cta_donate: "🍱 ಈಗ ದಾನ ಮಾಡಿ", cta_signup: "ಉಚಿತ ಸೈನ್ ಅಪ್ →",
  about_hero_title: "ನಮ್ಮ ಕಥೆ ❤️", about_hero_subtitle: "ಯಾರೂ ಹಸಿವಿನಿಂದ ಮಲಗದ ಕನಸು.", about_mission_title: "ನಮ್ಮ ಮಿಷನ್ 🎯", about_mission_desc: "ಭಾರತದಲ್ಲಿ ಆಹಾರ ವ್ಯರ್ಥವನ್ನು ನಿಲ್ಲಿಸುವುದು.", about_vision_title: "ನಮ್ಮ ದೃಷ್ಟಿ 🌟", about_vision_desc: "2030ರ ಹೊತ್ತಿಗೆ ಪ್ರತಿ ನಗರದಲ್ಲಿ ಸಕ್ರಿಯ.", about_impact: "ನಮ್ಮ ಪ್ರಭಾವ 📊", about_team: "ನಮ್ಮ ತಂಡ 👥", about_partners: "ಪಾಲುದಾರ NGOಗಳು 🤝",
  donate_title: "ಆಹಾರ ದಾನ ಮಾಡಿ 🍱", donate_subtitle: "ನಿಮ್ಮ ಹೆಚ್ಚುವರಿ ಆಹಾರವನ್ನು ಅಗತ್ಯವಿರುವವರಿಗೆ", donate_food_type: "ಆಹಾರ ವಿಧ (ಆಯ್ಕೆ)", donate_quantity: "ಎಷ್ಟು ಆಹಾರ?", donate_address: "ಪಿಕಪ್ ವಿಳಾಸ", donate_city: "ನಗರ", donate_time: "ಪಿಕಪ್ ಸಮಯ", donate_photo: "ಫೋಟೋ (ಐಚ್ಛಿಕ)", donate_photo_desc: "ಆಹಾರ ಫೋಟೋ ಅಪ್ಲೋಡ್", donate_extra: "ಬೇರೇನಾದರೂ?", donate_submit: "ದಾನ ಮಾಡಿ 🙏", donate_success_title: "ಧನ್ಯವಾದ! 🙏", donate_success_desc: "ನಿಮ್ಮ ದಾನ ನೋಂದಾಯಿತು.", donate_more: "ಇನ್ನಷ್ಟು ದಾನ", donate_track: "ಟ್ರ್ಯಾಕ್ →",
  track_title: "ದಾನ ಟ್ರ್ಯಾಕ್ 📍", track_subtitle: "ನಿಮ್ಮ ಆಹಾರದ ಸ್ಥಿತಿ ನೋಡಿ", track_donated: "ದಾನ", track_picked: "ಪಿಕಪ್ ಆಯಿತು", track_transit: "ದಾರಿಯಲ್ಲಿ", track_delivered: "ಡೆಲಿವರಿ ಆಯಿತು",
  history_title: "ದಾನ ಇತಿಹಾಸ 📜", history_subtitle: "ನಿಮ್ಮ ಎಲ್ಲಾ ಹಿಂದಿನ ದಾನಗಳು ಇಲ್ಲಿವೆ", history_empty: "ಈ ಸ್ಥಿತಿಯಲ್ಲಿ ದಾನ ಇಲ್ಲ", history_all: "ಎಲ್ಲಾ ಸ್ಥಿತಿ", history_view_all: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ →",
  dash_greeting: "ನಮಸ್ಕಾರ! 🙏", dash_subtitle: "ಇಂದೂ ಯಾರಿಗಾದರೂ ಸಹಾಯ ಮಾಡಿ", dash_donor: "🤲 ದಾನಿ", dash_receiver: "🙏 ಸ್ವೀಕರಿಸುವವರು", dash_total_donations: "ಒಟ್ಟು ದಾನಗಳು", dash_meals_served: "ಊಟ ಬಡಿಸಲಾಯಿತು", dash_families_helped: "ಕುಟುಂಬಗಳಿಗೆ ಸಹಾಯ", dash_impact_score: "ಪ್ರಭಾವ ಸ್ಕೋರ್", dash_donate_now: "ಈಗ ದಾನ! 🍱", dash_donate_desc: "ಹೆಚ್ಚುವರಿ ಆಹಾರ ಇದೆಯೇ? ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ದಾನ", dash_recent: "ಇತ್ತೀಚಿನ ದಾನಗಳು", dash_nearby: "ಹತ್ತಿರ ಲಭ್ಯವಿದೆ 📍", dash_nearby_desc: "ನಿಮ್ಮ ಹತ್ತಿರ ಆಹಾರ", dash_request_food: "ಆಹಾರ ಕೋರಿ 🙏", dash_your_requests: "ನಿಮ್ಮ ವಿನಂತಿಗಳು",
  signin_welcome: "AnnaSeva ಗೆ ಸ್ವಾಗತ! 🙏", signin_new_account: "ಹೊಸ ಖಾತೆ ರಚಿಸಿ", signin_existing: "ಸೈನ್ ಇನ್ ಮಾಡಿ", signin_who: "ನೀವು ಯಾರು?", signin_donor: "ದಾನಿ", signin_donor_desc: "ಆಹಾರ ನೀಡಲು ಬಯಸುತ್ತೇನೆ", signin_receiver: "ಸ್ವೀಕರಿಸುವವರು", signin_receiver_desc: "ಆಹಾರ ಬೇಕು", signin_name: "ನಿಮ್ಮ ಹೆಸರು", signin_phone: "ಫೋನ್ ಸಂಖ್ಯೆ", signin_city: "ನಗರ", signin_email: "ಇಮೇಲ್", signin_password: "ಪಾಸ್ವರ್ಡ್", signin_create: "ಖಾತೆ ರಚಿಸಿ 🚀", signin_login: "ಸೈನ್ ಇನ್ →", signin_have_account: "ಖಾತೆ ಇದೆಯೇ?", signin_new_user: "ಹೊಸಬರೇ?",
  profile_info: "ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿ", profile_edit: "ಸಂಪಾದಿಸಿ", profile_save: "ಉಳಿಸಿ", profile_badges: "ಸಾಧನೆಗಳು & ಬ್ಯಾಡ್ಜ್‌ಗಳು", profile_donations: "ದಾನಗಳು", profile_locked: "🔒 ಲಾಕ್",
  contact_title: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ 📞", contact_subtitle: "ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಸಲಹೆಗಳು? ನಾವು ಇಲ್ಲಿದ್ದೇವೆ!", contact_name: "ನಿಮ್ಮ ಹೆಸರು", contact_email: "ಇಮೇಲ್", contact_phone: "ಫೋನ್ (ಐಚ್ಛಿಕ)", contact_message: "ನಿಮ್ಮ ಸಂದೇಶ ಬರೆಯಿರಿ...", contact_send: "ಸಂದೇಶ ಕಳುಹಿಸಿ 📩", contact_address: "ವಿಳಾಸ", contact_working: "ಕೆಲಸದ ಸಮಯ",
  footer_tagline: "ಆಹಾರ ವ್ಯರ್ಥ ಮಾಡಬೇಡಿ! ಭಾರತದ ಅತಿದೊಡ್ಡ ಆಹಾರ ದಾನ ಸಮುದಾಯ.", footer_quick: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು", footer_support: "ಬೆಂಬಲ", footer_connect: "ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ", footer_copyright: "© 2026 AnnaSeva. ಭಾರತದಲ್ಲಿ ❤️ ಯಿಂದ ತಯಾರಿಸಲಾಗಿದೆ.",
  food_roti: "ರೊಟ್ಟಿ/ಚಪಾತಿ", food_sabzi: "ತರಕಾರಿ/ಕರಿ", food_rice: "ಅನ್ನ/ಬಿರಿಯಾನಿ", food_fruits: "ಹಣ್ಣುಗಳು", food_packed: "ಪ್ಯಾಕ್ ಆಹಾರ", food_sweets: "ಸಿಹಿ ತಿಂಡಿಗಳು",
  time_morning: "ಬೆಳಿಗ್ಗೆ (8-11 AM)", time_afternoon: "ಮಧ್ಯಾಹ್ನ (12-3 PM)", time_evening: "ಸಂಜೆ (4-7 PM)", time_night: "ರಾತ್ರಿ (8-10 PM)",
};

const ml: TranslationKeys = {
  nav_home: "ഹോം", nav_about: "ഞങ്ങളെ കുറിച്ച്", nav_donate: "ഭക്ഷണ ദാനം", nav_track: "ട്രാക്ക്", nav_history: "ചരിത്രം", nav_contact: "ബന്ധപ്പെടുക", nav_signin: "സൈൻ ഇൻ", nav_donate_now: "ഇപ്പോൾ ദാനം 🍱",
  hero_badge: "ഇന്ത്യയിലെ ഏറ്റവും വലിയ ഭക്ഷണ ദാന വേദി", hero_title1: "ഭക്ഷണം പാഴാക്കരുത്,", hero_title2: "ആരെയെങ്കിലും ഊട്ടൂ!", hero_subtitle: "ഒരു പ്ലേറ്റ് ഭക്ഷണം ഒരാളുടെ ലോകം മാറ്റും. 🙏", hero_btn_donate: "🍱 ഭക്ഷണം ദാനം", hero_btn_request: "🙋 ഭക്ഷണം അഭ്യർത്ഥന",
  stat_meals: "ഭക്ഷണം ദാനം", stat_families: "കുടുംബങ്ങളെ സഹായിച്ചു", stat_cities: "നഗരങ്ങളിൽ സജീവം", stat_volunteers: "സന്നദ്ധ പ്രവർത്തകർ",
  how_title: "എങ്ങനെ പ്രവർത്തിക്കുന്നു?", how_subtitle: "3 ലളിതമായ ഘട്ടങ്ങളിൽ വിശക്കുന്നവരെ സഹായിക്കൂ",
  step1_title: "ദാനം", step1_desc: "നിങ്ങളുടെ അധിക ഭക്ഷണം ലിസ്റ്റ് ചെയ്യൂ", step2_title: "പിക്കപ്പ്", step2_desc: "ഞങ്ങളുടെ ടീം നിങ്ങളുടെ സ്ഥലത്ത് നിന്ന് എടുക്കും", step3_title: "ഡെലിവറി", step3_desc: "ആവശ്യക്കാർക്ക് സുരക്ഷിതമായി എത്തിക്കും",
  testi_title: "ജനങ്ങളുടെ കഥകൾ ❤️", testi_subtitle: "ഞങ്ങളുടെ ദാതാക്കൾ എന്ത് പറയുന്നു",
  cta_title: "ഇന്ന് തന്നെ തുടങ്ങൂ! 🙏", cta_subtitle: "ഒരു ചെറിയ സഹായം വലിയ സന്തോഷം നൽകും.", cta_donate: "🍱 ഇപ്പോൾ ദാനം ചെയ്യൂ", cta_signup: "സൗജന്യ സൈൻ അപ്പ് →",
  about_hero_title: "ഞങ്ങളുടെ കഥ ❤️", about_hero_subtitle: "ആരും വിശന്ന് ഉറങ്ങാത്ത ഒരു സ്വപ്നം.", about_mission_title: "ഞങ്ങളുടെ ദൗത്യം 🎯", about_mission_desc: "ഇന്ത്യയിലെ ഭക്ഷണ പാഴ് ഇല്ലാതാക്കൽ.", about_vision_title: "ഞങ്ങളുടെ കാഴ്ചപ്പാട് 🌟", about_vision_desc: "2030 ആകുമ്പോഴേക്കും എല്ലാ നഗരങ്ങളിലും സജീവം.", about_impact: "ഞങ്ങളുടെ സ്വാധീനം 📊", about_team: "ഞങ്ങളുടെ ടീം 👥", about_partners: "പങ്കാളി NGOകൾ 🤝",
  donate_title: "ഭക്ഷണം ദാനം ചെയ്യൂ 🍱", donate_subtitle: "നിങ്ങളുടെ അധിക ഭക്ഷണം ആവശ്യക്കാർക്ക്", donate_food_type: "ഭക്ഷണ തരം (തിരഞ്ഞെടുക്കൂ)", donate_quantity: "എത്ര ഭക്ഷണം?", donate_address: "പിക്കപ്പ് വിലാസം", donate_city: "നഗരം", donate_time: "പിക്കപ്പ് സമയം", donate_photo: "ഫോട്ടോ (ഐച്ഛികം)", donate_photo_desc: "ഭക്ഷണ ഫോട്ടോ അപ്‌ലോഡ്", donate_extra: "മറ്റെന്തെങ്കിലും?", donate_submit: "ദാനം ചെയ്യൂ 🙏", donate_success_title: "നന്ദി! 🙏", donate_success_desc: "നിങ്ങളുടെ ദാനം രജിസ്റ്റർ ചെയ്തു.", donate_more: "കൂടുതൽ ദാനം", donate_track: "ട്രാക്ക് →",
  track_title: "ദാനം ട്രാക്ക് 📍", track_subtitle: "നിങ്ങളുടെ ഭക്ഷണത്തിന്റെ സ്ഥിതി കാണൂ", track_donated: "ദാനം", track_picked: "പിക്കപ്പ് ആയി", track_transit: "വഴിയിൽ", track_delivered: "ഡെലിവർ ആയി",
  history_title: "ദാന ചരിത്രം 📜", history_subtitle: "നിങ്ങളുടെ മുൻ ദാനങ്ങൾ ഇവിടെ", history_empty: "ഈ സ്ഥിതിയിൽ ദാനം ഇല്ല", history_all: "എല്ലാ സ്ഥിതി", history_view_all: "എല്ലാം കാണൂ →",
  dash_greeting: "നമസ്കാരം! 🙏", dash_subtitle: "ഇന്നും ആരെയെങ്കിലും സഹായിക്കൂ", dash_donor: "🤲 ദാതാവ്", dash_receiver: "🙏 സ്വീകർത്താവ്", dash_total_donations: "ആകെ ദാനങ്ങൾ", dash_meals_served: "ഭക്ഷണം വിളമ്പി", dash_families_helped: "കുടുംബങ്ങളെ സഹായിച്ചു", dash_impact_score: "സ്വാധീന സ്‌കോർ", dash_donate_now: "ഇപ്പോൾ ദാനം! 🍱", dash_donate_desc: "അധിക ഭക്ഷണമുണ്ടോ? ഒരു ക്ലിക്കിൽ ദാനം", dash_recent: "സമീപകാല ദാനങ്ങൾ", dash_nearby: "സമീപത്ത് ലഭ്യം 📍", dash_nearby_desc: "നിങ്ങളുടെ സമീപത്ത് ഭക്ഷണം", dash_request_food: "ഭക്ഷണം അഭ്യർത്ഥിക്കൂ 🙏", dash_your_requests: "നിങ്ങളുടെ അഭ്യർത്ഥനകൾ",
  signin_welcome: "AnnaSeva-ലേക്ക് സ്വാഗതം! 🙏", signin_new_account: "പുതിയ അക്കൗണ്ട് സൃഷ്ടിക്കൂ", signin_existing: "സൈൻ ഇൻ ചെയ്യൂ", signin_who: "നിങ്ങൾ ആരാണ്?", signin_donor: "ദാതാവ്", signin_donor_desc: "ഭക്ഷണം നൽകാൻ ആഗ്രഹിക്കുന്നു", signin_receiver: "സ്വീകർത്താവ്", signin_receiver_desc: "ഭക്ഷണം ആവശ്യമാണ്", signin_name: "നിങ്ങളുടെ പേര്", signin_phone: "ഫോൺ നമ്പർ", signin_city: "നഗരം", signin_email: "ഇമെയിൽ", signin_password: "പാസ്‌വേഡ്", signin_create: "അക്കൗണ്ട് സൃഷ്ടിക്കൂ 🚀", signin_login: "സൈൻ ഇൻ →", signin_have_account: "അക്കൗണ്ട് ഉണ്ടോ?", signin_new_user: "പുതിയ ഉപയോക്താവോ?",
  profile_info: "പ്രൊഫൈൽ വിവരങ്ങൾ", profile_edit: "തിരുത്തുക", profile_save: "സേവ്", profile_badges: "നേട്ടങ്ങളും ബാഡ്ജുകളും", profile_donations: "ദാനങ്ങൾ", profile_locked: "🔒 ലോക്ക്",
  contact_title: "ഞങ്ങളെ ബന്ധപ്പെടൂ 📞", contact_subtitle: "ചോദ്യങ്ങൾ അല്ലെങ്കിൽ നിർദ്ദേശങ്ങൾ? ഞങ്ങൾ ഇവിടെ!", contact_name: "നിങ്ങളുടെ പേര്", contact_email: "ഇമെയിൽ", contact_phone: "ഫോൺ (ഐച്ഛികം)", contact_message: "നിങ്ങളുടെ സന്ദേശം എഴുതൂ...", contact_send: "സന്ദേശം അയക്കൂ 📩", contact_address: "വിലാസം", contact_working: "പ്രവൃത്തി സമയം",
  footer_tagline: "ഭക്ഷണം പാഴാക്കരുത്! ഇന്ത്യയിലെ ഏറ്റവും വലിയ ഭക്ഷണ ദാന സമൂഹം.", footer_quick: "ദ്രുത ലിങ്കുകൾ", footer_support: "പിന്തുണ", footer_connect: "ഞങ്ങളുമായി ബന്ധപ്പെടൂ", footer_copyright: "© 2026 AnnaSeva. ഇന്ത്യയിൽ ❤️ ഉടെ നിർമ്മിച്ചത്.",
  food_roti: "റൊട്ടി/ചപ്പാത്തി", food_sabzi: "കറി/സബ്‌ജി", food_rice: "ചോറ്/ബിരിയാണി", food_fruits: "പഴങ്ങൾ", food_packed: "പാക്ക് ഭക്ഷണം", food_sweets: "മധുരപലഹാരങ്ങൾ",
  time_morning: "രാവിലെ (8-11 AM)", time_afternoon: "ഉച്ച (12-3 PM)", time_evening: "വൈകുന്നേരം (4-7 PM)", time_night: "രാത്രി (8-10 PM)",
};

const bn: TranslationKeys = {
  nav_home: "হোম", nav_about: "আমাদের সম্পর্কে", nav_donate: "খাবার দান", nav_track: "ট্র্যাক", nav_history: "ইতিহাস", nav_contact: "যোগাযোগ", nav_signin: "সাইন ইন", nav_donate_now: "এখনই দান করুন 🍱",
  hero_badge: "ভারতের বৃহত্তম খাদ্য দান প্ল্যাটফর্ম", hero_title1: "খাবার নষ্ট করবেন না,", hero_title2: "কাউকে খাওয়ান!", hero_subtitle: "এক প্লেট খাবার কারো জীবন বদলে দিতে পারে। 🙏", hero_btn_donate: "🍱 খাবার দান", hero_btn_request: "🙋 খাবার চাই",
  stat_meals: "খাবার দান", stat_families: "পরিবারকে সাহায্য", stat_cities: "শহরে সক্রিয়", stat_volunteers: "স্বেচ্ছাসেবক",
  how_title: "কিভাবে কাজ করে?", how_subtitle: "৩টি সহজ ধাপে ক্ষুধার্তদের সাহায্য করুন",
  step1_title: "দান", step1_desc: "আপনার অতিরিক্ত খাবার তালিকাভুক্ত করুন", step2_title: "পিকআপ", step2_desc: "আমাদের টিম আপনার অবস্থান থেকে নিয়ে যাবে", step3_title: "ডেলিভারি", step3_desc: "প্রয়োজনীয় মানুষদের কাছে নিরাপদে পৌঁছে দেওয়া হবে",
  testi_title: "মানুষের গল্প ❤️", testi_subtitle: "আমাদের দাতারা কী বলেন",
  cta_title: "আজই শুরু করুন! 🙏", cta_subtitle: "একটু সাহায্য অনেক আনন্দ দিতে পারে।", cta_donate: "🍱 এখনই দান করুন", cta_signup: "বিনামূল্যে সাইন আপ →",
  about_hero_title: "আমাদের গল্প ❤️", about_hero_subtitle: "কেউ ক্ষুধার্ত থাকবে না এই স্বপ্ন।", about_mission_title: "আমাদের লক্ষ্য 🎯", about_mission_desc: "ভারতে খাদ্যের অপচয় বন্ধ করা।", about_vision_title: "আমাদের দৃষ্টিভঙ্গি 🌟", about_vision_desc: "২০৩০ সালের মধ্যে প্রতিটি শহরে সক্রিয় থাকা।", about_impact: "আমাদের প্রভাব 📊", about_team: "আমাদের টিম 👥", about_partners: "অংশীদার NGOগুলি 🤝",
  donate_title: "খাবার দান করুন 🍱", donate_subtitle: "আপনার অতিরিক্ত খাবার প্রয়োজনীয়দের কাছে", donate_food_type: "খাবারের ধরন (নির্বাচন করুন)", donate_quantity: "কতটুকু খাবার?", donate_address: "পিকআপ ঠিকানা", donate_city: "শহর", donate_time: "পিকআপ সময়", donate_photo: "ছবি (ঐচ্ছিক)", donate_photo_desc: "খাবারের ছবি আপলোড", donate_extra: "আর কিছু?", donate_submit: "দান করুন 🙏", donate_success_title: "ধন্যবাদ! 🙏", donate_success_desc: "আপনার দান নিবন্ধিত হয়েছে।", donate_more: "আরো দান", donate_track: "ট্র্যাক →",
  track_title: "দান ট্র্যাক 📍", track_subtitle: "আপনার খাবারের অবস্থা দেখুন", track_donated: "দান", track_picked: "পিকআপ হয়েছে", track_transit: "পথে", track_delivered: "ডেলিভারি হয়েছে",
  history_title: "দান ইতিহাস 📜", history_subtitle: "আপনার সমস্ত আগের দান এখানে", history_empty: "এই অবস্থায় কোনো দান নেই", history_all: "সব অবস্থা", history_view_all: "সব দেখুন →",
  dash_greeting: "নমস্কার! 🙏", dash_subtitle: "আজও কাউকে সাহায্য করুন", dash_donor: "🤲 দাতা", dash_receiver: "🙏 গ্রহীতা", dash_total_donations: "মোট দান", dash_meals_served: "খাবার পরিবেশন", dash_families_helped: "পরিবারকে সাহায্য", dash_impact_score: "প্রভাব স্কোর", dash_donate_now: "এখনই দান! 🍱", dash_donate_desc: "অতিরিক্ত খাবার আছে? এক ক্লিকে দান", dash_recent: "সাম্প্রতিক দান", dash_nearby: "কাছাকাছি পাওয়া যাচ্ছে 📍", dash_nearby_desc: "আপনার কাছে খাবার", dash_request_food: "খাবার চাই 🙏", dash_your_requests: "আপনার অনুরোধ",
  signin_welcome: "AnnaSeva-তে স্বাগতম! 🙏", signin_new_account: "নতুন অ্যাকাউন্ট তৈরি করুন", signin_existing: "সাইন ইন করুন", signin_who: "আপনি কে?", signin_donor: "দাতা", signin_donor_desc: "খাবার দিতে চাই", signin_receiver: "গ্রহীতা", signin_receiver_desc: "খাবার দরকার", signin_name: "আপনার নাম", signin_phone: "ফোন নম্বর", signin_city: "শহর", signin_email: "ইমেইল", signin_password: "পাসওয়ার্ড", signin_create: "অ্যাকাউন্ট তৈরি 🚀", signin_login: "সাইন ইন →", signin_have_account: "অ্যাকাউন্ট আছে?", signin_new_user: "নতুন ব্যবহারকারী?",
  profile_info: "প্রোফাইল তথ্য", profile_edit: "সম্পাদনা", profile_save: "সেভ", profile_badges: "অর্জন ও ব্যাজ", profile_donations: "দানসমূহ", profile_locked: "🔒 লক",
  contact_title: "যোগাযোগ করুন 📞", contact_subtitle: "প্রশ্ন বা পরামর্শ? আমরা এখানে!", contact_name: "আপনার নাম", contact_email: "ইমেইল", contact_phone: "ফোন (ঐচ্ছিক)", contact_message: "আপনার বার্তা লিখুন...", contact_send: "বার্তা পাঠান 📩", contact_address: "ঠিকানা", contact_working: "কাজের সময়",
  footer_tagline: "খাবার নষ্ট করবেন না! ভারতের বৃহত্তম খাদ্য দান সম্প্রদায়।", footer_quick: "দ্রুত লিংক", footer_support: "সহায়তা", footer_connect: "আমাদের সাথে যোগাযোগ", footer_copyright: "© 2026 AnnaSeva. ভারতে ❤️ দিয়ে তৈরি।",
  food_roti: "রুটি/চাপাটি", food_sabzi: "সবজি/তরকারি", food_rice: "ভাত/বিরিয়ানি", food_fruits: "ফল", food_packed: "প্যাকড খাবার", food_sweets: "মিষ্টি",
  time_morning: "সকাল (৮-১১ AM)", time_afternoon: "দুপুর (১২-৩ PM)", time_evening: "সন্ধ্যা (৪-৭ PM)", time_night: "রাত (৮-১০ PM)",
};

const mr: TranslationKeys = {
  nav_home: "मुखपृष्ठ", nav_about: "आमच्याबद्दल", nav_donate: "अन्नदान", nav_track: "ट्रॅक", nav_history: "इतिहास", nav_contact: "संपर्क", nav_signin: "साइन इन", nav_donate_now: "आता दान करा 🍱",
  hero_badge: "भारतातील सर्वात मोठे अन्नदान व्यासपीठ", hero_title1: "अन्न वाया घालवू नका,", hero_title2: "कोणाचे पोट भरा!", hero_subtitle: "एक ताट जेवण कोणाचं जगणं बदलू शकतं. 🙏", hero_btn_donate: "🍱 अन्नदान करा", hero_btn_request: "🙋 अन्न मागा",
  stat_meals: "जेवण दान", stat_families: "कुटुंबांना मदत", stat_cities: "शहरांत सक्रिय", stat_volunteers: "स्वयंसेवक",
  how_title: "कसं काम करतं?", how_subtitle: "फक्त ३ पायऱ्यांत भुकेल्या माणसाला मदत करा",
  step1_title: "दान", step1_desc: "तुमचं अतिरिक्त अन्न सूचीबद्ध करा", step2_title: "पिकअप", step2_desc: "आमची टीम तुमच्या ठिकाणाहून घेते", step3_title: "वितरण", step3_desc: "गरजूंपर्यंत सुरक्षितपणे पोहोचवलं जातं",
  testi_title: "लोकांच्या कथा ❤️", testi_subtitle: "आमचे दाते काय म्हणतात",
  cta_title: "आजच सुरू करा! 🙏", cta_subtitle: "थोडी मदत मोठा आनंद देते.", cta_donate: "🍱 आता दान करा", cta_signup: "मोफत साइन अप →",
  about_hero_title: "आमची कथा ❤️", about_hero_subtitle: "कोणीही भुकेल्यापोटी झोपू नये हे स्वप्न.", about_mission_title: "आमचं ध्येय 🎯", about_mission_desc: "भारतातील अन्नाची नासाडी थांबवणं.", about_vision_title: "आमची दृष्टी 🌟", about_vision_desc: "२०३० पर्यंत प्रत्येक शहरात सक्रिय.", about_impact: "आमचा प्रभाव 📊", about_team: "आमची टीम 👥", about_partners: "भागीदार NGO 🤝",
  donate_title: "अन्नदान करा 🍱", donate_subtitle: "तुमचं अतिरिक्त अन्न गरजूंना द्या", donate_food_type: "अन्न प्रकार (निवडा)", donate_quantity: "किती अन्न?", donate_address: "पिकअप पत्ता", donate_city: "शहर", donate_time: "पिकअप वेळ", donate_photo: "फोटो (ऐच्छिक)", donate_photo_desc: "अन्नाचा फोटो अपलोड करा", donate_extra: "आणखी काही?", donate_submit: "दान करा 🙏", donate_success_title: "धन्यवाद! 🙏", donate_success_desc: "तुमचं दान नोंदवलं गेलं.", donate_more: "आणखी दान करा", donate_track: "ट्रॅक करा →",
  track_title: "दान ट्रॅक 📍", track_subtitle: "तुमच्या अन्नाची स्थिती पहा", track_donated: "दान केलं", track_picked: "पिकअप झालं", track_transit: "वाटेत", track_delivered: "वितरित",
  history_title: "दान इतिहास 📜", history_subtitle: "तुमची सर्व मागील दानं इथे", history_empty: "या स्थितीत दान नाही", history_all: "सर्व स्थिती", history_view_all: "सर्व पहा →",
  dash_greeting: "नमस्कार! 🙏", dash_subtitle: "आजही कोणाला तरी मदत करा", dash_donor: "🤲 दाता", dash_receiver: "🙏 प्राप्तकर्ता", dash_total_donations: "एकूण दानं", dash_meals_served: "जेवण दिलं", dash_families_helped: "कुटुंबांना मदत", dash_impact_score: "प्रभाव गुण", dash_donate_now: "आता दान करा! 🍱", dash_donate_desc: "अतिरिक्त अन्न आहे? एका क्लिकवर दान करा", dash_recent: "अलीकडील दानं", dash_nearby: "जवळपास उपलब्ध 📍", dash_nearby_desc: "तुमच्या जवळचं अन्न", dash_request_food: "अन्न मागा 🙏", dash_your_requests: "तुमच्या विनंत्या",
  signin_welcome: "AnnaSeva मध्ये स्वागत! 🙏", signin_new_account: "नवीन खातं तयार करा", signin_existing: "साइन इन करा", signin_who: "तुम्ही कोण आहात?", signin_donor: "दाता", signin_donor_desc: "अन्न द्यायचं आहे", signin_receiver: "प्राप्तकर्ता", signin_receiver_desc: "अन्न हवं आहे", signin_name: "तुमचं नाव", signin_phone: "फोन नंबर", signin_city: "शहर", signin_email: "ईमेल", signin_password: "पासवर्ड", signin_create: "खातं तयार करा 🚀", signin_login: "साइन इन →", signin_have_account: "खातं आहे?", signin_new_user: "नवीन वापरकर्ता?",
  profile_info: "प्रोफाइल माहिती", profile_edit: "बदला", profile_save: "जतन करा", profile_badges: "कामगिरी आणि बॅज", profile_donations: "दानं", profile_locked: "🔒 लॉक",
  contact_title: "आमच्याशी संपर्क साधा 📞", contact_subtitle: "प्रश्न किंवा सूचना? आम्ही इथे!", contact_name: "तुमचं नाव", contact_email: "ईमेल", contact_phone: "फोन (ऐच्छिक)", contact_message: "तुमचा संदेश लिहा...", contact_send: "संदेश पाठवा 📩", contact_address: "पत्ता", contact_working: "कामाचे तास",
  footer_tagline: "अन्न वाया घालवू नका! भारतातील सर्वात मोठा अन्नदान समुदाय.", footer_quick: "जलद लिंक्स", footer_support: "मदत", footer_connect: "आमच्याशी जोडा", footer_copyright: "© 2026 AnnaSeva. भारतात ❤️ ने बनवले.",
  food_roti: "भाकरी/चपाती", food_sabzi: "भाजी/आमटी", food_rice: "भात/बिर्याणी", food_fruits: "फळं", food_packed: "पॅक अन्न", food_sweets: "गोडधोड",
  time_morning: "सकाळ (8-11 AM)", time_afternoon: "दुपार (12-3 PM)", time_evening: "संध्याकाळ (4-7 PM)", time_night: "रात्र (8-10 PM)",
};

const gu: TranslationKeys = {
  nav_home: "હોમ", nav_about: "અમારા વિશે", nav_donate: "ભોજન દાન", nav_track: "ટ્રેક", nav_history: "ઇતિહાસ", nav_contact: "સંપર્ક", nav_signin: "સાઇન ઇન", nav_donate_now: "હવે દાન કરો 🍱",
  hero_badge: "ભારતનું સૌથી મોટું ભોજન દાન પ્લેટફોર્મ", hero_title1: "ખોરાક બગાડો નહીં,", hero_title2: "કોઈકનું પેટ ભરો!", hero_subtitle: "એક થાળી ભોજન કોઈનું જીવન બદલી શકે. 🙏", hero_btn_donate: "🍱 ભોજન દાન", hero_btn_request: "🙋 ભોજન માંગો",
  stat_meals: "ભોજન દાન", stat_families: "કુટુંબોને મદદ", stat_cities: "શહેરોમાં સક્રિય", stat_volunteers: "સ્વયંસેવકો",
  how_title: "કેવી રીતે કામ કરે છે?", how_subtitle: "3 સરળ પગલાંમાં ભૂખ્યાને મદદ કરો",
  step1_title: "દાન", step1_desc: "તમારો વધારાનો ખોરાક લિસ્ટ કરો", step2_title: "પિકઅપ", step2_desc: "અમારી ટીમ તમારા સ્થળેથી લઈ જશે", step3_title: "ડિલિવરી", step3_desc: "જરૂરિયાતમંદોને સુરક્ષિત રીતે પહોંચાડાય",
  testi_title: "લોકોની વાતો ❤️", testi_subtitle: "અમારા દાતાઓ શું કહે છે",
  cta_title: "આજે જ શરૂ કરો! 🙏", cta_subtitle: "નાની મદદ મોટી ખુશી આપે.", cta_donate: "🍱 હવે દાન કરો", cta_signup: "મફત સાઇન અપ →",
  about_hero_title: "અમારી વાત ❤️", about_hero_subtitle: "કોઈ ભૂખ્યું ન સૂએ એવું સ્વપ્ન.", about_mission_title: "અમારું લક્ષ્ય 🎯", about_mission_desc: "ભારતમાં ખોરાકનો બગાડ બંધ કરવો.", about_vision_title: "અમારી દ્રષ્ટિ 🌟", about_vision_desc: "2030 સુધીમાં દરેક શહેરમાં સક્રિય.", about_impact: "અમારી અસર 📊", about_team: "અમારી ટીમ 👥", about_partners: "ભાગીદાર NGO 🤝",
  donate_title: "ભોજન દાન કરો 🍱", donate_subtitle: "વધારાનો ખોરાક જરૂરિયાતમંદોને આપો", donate_food_type: "ખોરાક પ્રકાર (પસંદ કરો)", donate_quantity: "કેટલો ખોરાક?", donate_address: "પિકઅપ સરનામું", donate_city: "શહેર", donate_time: "પિકઅપ સમય", donate_photo: "ફોટો (વૈકલ્પિક)", donate_photo_desc: "ખોરાકનો ફોટો અપલોડ", donate_extra: "બીજું કંઈ?", donate_submit: "દાન કરો 🙏", donate_success_title: "આભાર! 🙏", donate_success_desc: "તમારું દાન નોંધાયું.", donate_more: "વધુ દાન", donate_track: "ટ્રેક →",
  track_title: "દાન ટ્રેક 📍", track_subtitle: "તમારા ખોરાકની સ્થિતિ જુઓ", track_donated: "દાન", track_picked: "પિકઅપ થયું", track_transit: "રસ્તામાં", track_delivered: "ડિલિવર થયું",
  history_title: "દાન ઇતિહાસ 📜", history_subtitle: "તમારા બધા ભૂતકાળના દાન અહીં", history_empty: "આ સ્થિતિમાં કોઈ દાન નથી", history_all: "બધી સ્થિતિ", history_view_all: "બધું જુઓ →",
  dash_greeting: "નમસ્તે! 🙏", dash_subtitle: "આજે પણ કોઈને મદદ કરો", dash_donor: "🤲 દાતા", dash_receiver: "🙏 પ્રાપ્તકર્તા", dash_total_donations: "કુલ દાન", dash_meals_served: "ભોજન પીરસ્યું", dash_families_helped: "કુટુંબોને મદદ", dash_impact_score: "અસર સ્કોર", dash_donate_now: "હવે દાન! 🍱", dash_donate_desc: "વધારાનો ખોરાક છે? એક ક્લિકમાં દાન", dash_recent: "તાજેતરના દાન", dash_nearby: "નજીકમાં ઉપલબ્ધ 📍", dash_nearby_desc: "તમારી નજીક ખોરાક", dash_request_food: "ખોરાક માંગો 🙏", dash_your_requests: "તમારી વિનંતીઓ",
  signin_welcome: "AnnaSeva માં સ્વાગત! 🙏", signin_new_account: "નવું ખાતું બનાવો", signin_existing: "સાઇન ઇન કરો", signin_who: "તમે કોણ છો?", signin_donor: "દાતા", signin_donor_desc: "ખોરાક આપવો છે", signin_receiver: "પ્રાપ્તકર્તા", signin_receiver_desc: "ખોરાક જોઈએ", signin_name: "તમારું નામ", signin_phone: "ફોન નંબર", signin_city: "શહેર", signin_email: "ઇમેઇલ", signin_password: "પાસવર્ડ", signin_create: "ખાતું બનાવો 🚀", signin_login: "સાઇન ઇન →", signin_have_account: "ખાતું છે?", signin_new_user: "નવા વપરાશકર્તા?",
  profile_info: "પ્રોફાઇલ માહિતી", profile_edit: "સંપાદિત કરો", profile_save: "સાચવો", profile_badges: "સિદ્ધિઓ અને બેજ", profile_donations: "દાન", profile_locked: "🔒 લૉક",
  contact_title: "અમારો સંપર્ક કરો 📞", contact_subtitle: "પ્રશ્નો કે સૂચનો? અમે અહીં છીએ!", contact_name: "તમારું નામ", contact_email: "ઇમેઇલ", contact_phone: "ફોન (વૈકલ્પિક)", contact_message: "તમારો સંદેશ લખો...", contact_send: "સંદેશ મોકલો 📩", contact_address: "સરનામું", contact_working: "કામના કલાકો",
  footer_tagline: "ખોરાક બગાડો નહીં! ભારતનો સૌથી મોટો ભોજન દાન સમુદાય.", footer_quick: "ઝડપી લિંક્સ", footer_support: "મદદ", footer_connect: "અમારી સાથે જોડાઓ", footer_copyright: "© 2026 AnnaSeva. ભારતમાં ❤️ થી બનાવ્યું.",
  food_roti: "રોટલી/ચપાતી", food_sabzi: "શાક/કરી", food_rice: "ભાત/બિરયાની", food_fruits: "ફળ", food_packed: "પેક ખોરાક", food_sweets: "મીઠાઈ",
  time_morning: "સવાર (8-11 AM)", time_afternoon: "બપોર (12-3 PM)", time_evening: "સાંજ (4-7 PM)", time_night: "રાત (8-10 PM)",
};

const pa: TranslationKeys = {
  nav_home: "ਹੋਮ", nav_about: "ਸਾਡੇ ਬਾਰੇ", nav_donate: "ਖਾਣਾ ਦਾਨ", nav_track: "ਟ੍ਰੈਕ", nav_history: "ਇਤਿਹਾਸ", nav_contact: "ਸੰਪਰਕ", nav_signin: "ਸਾਈਨ ਇਨ", nav_donate_now: "ਹੁਣੇ ਦਾਨ ਕਰੋ 🍱",
  hero_badge: "ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਖਾਣਾ ਦਾਨ ਪਲੇਟਫਾਰਮ", hero_title1: "ਖਾਣਾ ਬਰਬਾਦ ਨਾ ਕਰੋ,", hero_title2: "ਕਿਸੇ ਦਾ ਢਿੱਡ ਭਰੋ!", hero_subtitle: "ਇੱਕ ਥਾਲੀ ਖਾਣਾ ਕਿਸੇ ਦੀ ਜ਼ਿੰਦਗੀ ਬਦਲ ਸਕਦਾ ਹੈ। 🙏", hero_btn_donate: "🍱 ਖਾਣਾ ਦਾਨ", hero_btn_request: "🙋 ਖਾਣਾ ਮੰਗੋ",
  stat_meals: "ਭੋਜਨ ਦਾਨ", stat_families: "ਪਰਿਵਾਰਾਂ ਦੀ ਮਦਦ", stat_cities: "ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਸਰਗਰਮ", stat_volunteers: "ਵਲੰਟੀਅਰ",
  how_title: "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ?", how_subtitle: "3 ਸੌਖੇ ਕਦਮਾਂ ਵਿੱਚ ਭੁੱਖੇ ਦੀ ਮਦਦ ਕਰੋ",
  step1_title: "ਦਾਨ", step1_desc: "ਆਪਣਾ ਵਾਧੂ ਖਾਣਾ ਲਿਸਟ ਕਰੋ", step2_title: "ਪਿੱਕਅੱਪ", step2_desc: "ਸਾਡੀ ਟੀਮ ਤੁਹਾਡੀ ਥਾਂ ਤੋਂ ਲੈ ਜਾਵੇਗੀ", step3_title: "ਡਿਲੀਵਰੀ", step3_desc: "ਲੋੜਵੰਦਾਂ ਤੱਕ ਸੁਰੱਖਿਅਤ ਪਹੁੰਚਾਇਆ ਜਾਵੇਗਾ",
  testi_title: "ਲੋਕਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ ❤️", testi_subtitle: "ਸਾਡੇ ਦਾਨੀ ਕੀ ਕਹਿੰਦੇ ਹਨ",
  cta_title: "ਅੱਜ ਹੀ ਸ਼ੁਰੂ ਕਰੋ! 🙏", cta_subtitle: "ਥੋੜੀ ਮਦਦ ਵੱਡੀ ਖੁਸ਼ੀ ਦੇ ਸਕਦੀ.", cta_donate: "🍱 ਹੁਣੇ ਦਾਨ ਕਰੋ", cta_signup: "ਮੁਫ਼ਤ ਸਾਈਨ ਅੱਪ →",
  about_hero_title: "ਸਾਡੀ ਕਹਾਣੀ ❤️", about_hero_subtitle: "ਕੋਈ ਭੁੱਖਾ ਨਾ ਸੌਵੇ ਇਹ ਸੁਪਨਾ.", about_mission_title: "ਸਾਡਾ ਮਿਸ਼ਨ 🎯", about_mission_desc: "ਭਾਰਤ ਵਿੱਚ ਖਾਣੇ ਦੀ ਬਰਬਾਦੀ ਬੰਦ ਕਰਨਾ.", about_vision_title: "ਸਾਡੀ ਸੋਚ 🌟", about_vision_desc: "2030 ਤੱਕ ਹਰ ਸ਼ਹਿਰ ਵਿੱਚ ਸਰਗਰਮ.", about_impact: "ਸਾਡਾ ਪ੍ਰਭਾਵ 📊", about_team: "ਸਾਡੀ ਟੀਮ 👥", about_partners: "ਭਾਈਵਾਲ NGO 🤝",
  donate_title: "ਖਾਣਾ ਦਾਨ ਕਰੋ 🍱", donate_subtitle: "ਵਾਧੂ ਖਾਣਾ ਲੋੜਵੰਦਾਂ ਤੱਕ ਪਹੁੰਚਾਓ", donate_food_type: "ਖਾਣੇ ਦੀ ਕਿਸਮ (ਚੁਣੋ)", donate_quantity: "ਕਿੰਨਾ ਖਾਣਾ?", donate_address: "ਪਿੱਕਅੱਪ ਪਤਾ", donate_city: "ਸ਼ਹਿਰ", donate_time: "ਪਿੱਕਅੱਪ ਸਮਾਂ", donate_photo: "ਫੋਟੋ (ਵਿਕਲਪਿਕ)", donate_photo_desc: "ਖਾਣੇ ਦੀ ਫੋਟੋ ਅੱਪਲੋਡ", donate_extra: "ਹੋਰ ਕੁਝ?", donate_submit: "ਦਾਨ ਕਰੋ 🙏", donate_success_title: "ਧੰਨਵਾਦ! 🙏", donate_success_desc: "ਤੁਹਾਡਾ ਦਾਨ ਰਜਿਸਟਰ ਹੋ ਗਿਆ.", donate_more: "ਹੋਰ ਦਾਨ", donate_track: "ਟ੍ਰੈਕ →",
  track_title: "ਦਾਨ ਟ੍ਰੈਕ 📍", track_subtitle: "ਤੁਹਾਡੇ ਖਾਣੇ ਦੀ ਸਥਿਤੀ ਦੇਖੋ", track_donated: "ਦਾਨ", track_picked: "ਪਿੱਕਅੱਪ ਹੋਇਆ", track_transit: "ਰਸਤੇ ਵਿੱਚ", track_delivered: "ਡਿਲੀਵਰ ਹੋਇਆ",
  history_title: "ਦਾਨ ਇਤਿਹਾਸ 📜", history_subtitle: "ਤੁਹਾਡੇ ਸਾਰੇ ਪਿਛਲੇ ਦਾਨ ਇੱਥੇ", history_empty: "ਇਸ ਸਥਿਤੀ ਵਿੱਚ ਕੋਈ ਦਾਨ ਨਹੀਂ", history_all: "ਸਾਰੀ ਸਥਿਤੀ", history_view_all: "ਸਭ ਦੇਖੋ →",
  dash_greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! 🙏", dash_subtitle: "ਅੱਜ ਵੀ ਕਿਸੇ ਦੀ ਮਦਦ ਕਰੋ", dash_donor: "🤲 ਦਾਨੀ", dash_receiver: "🙏 ਲੈਣ ਵਾਲਾ", dash_total_donations: "ਕੁੱਲ ਦਾਨ", dash_meals_served: "ਭੋਜਨ ਦਿੱਤਾ", dash_families_helped: "ਪਰਿਵਾਰਾਂ ਦੀ ਮਦਦ", dash_impact_score: "ਪ੍ਰਭਾਵ ਸਕੋਰ", dash_donate_now: "ਹੁਣੇ ਦਾਨ! 🍱", dash_donate_desc: "ਵਾਧੂ ਖਾਣਾ ਹੈ? ਇੱਕ ਕਲਿੱਕ ਵਿੱਚ ਦਾਨ", dash_recent: "ਤਾਜ਼ਾ ਦਾਨ", dash_nearby: "ਨੇੜੇ ਉਪਲਬਧ 📍", dash_nearby_desc: "ਤੁਹਾਡੇ ਨੇੜੇ ਖਾਣਾ", dash_request_food: "ਖਾਣਾ ਮੰਗੋ 🙏", dash_your_requests: "ਤੁਹਾਡੀਆਂ ਬੇਨਤੀਆਂ",
  signin_welcome: "AnnaSeva ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ! 🙏", signin_new_account: "ਨਵਾਂ ਖਾਤਾ ਬਣਾਓ", signin_existing: "ਸਾਈਨ ਇਨ ਕਰੋ", signin_who: "ਤੁਸੀਂ ਕੌਣ ਹੋ?", signin_donor: "ਦਾਨੀ", signin_donor_desc: "ਖਾਣਾ ਦੇਣਾ ਚਾਹੁੰਦੇ ਹੋ", signin_receiver: "ਲੈਣ ਵਾਲਾ", signin_receiver_desc: "ਖਾਣਾ ਚਾਹੀਦਾ", signin_name: "ਤੁਹਾਡਾ ਨਾਂ", signin_phone: "ਫੋਨ ਨੰਬਰ", signin_city: "ਸ਼ਹਿਰ", signin_email: "ਈਮੇਲ", signin_password: "ਪਾਸਵਰਡ", signin_create: "ਖਾਤਾ ਬਣਾਓ 🚀", signin_login: "ਸਾਈਨ ਇਨ →", signin_have_account: "ਖਾਤਾ ਹੈ?", signin_new_user: "ਨਵੇਂ ਹੋ?",
  profile_info: "ਪ੍ਰੋਫਾਈਲ ਜਾਣਕਾਰੀ", profile_edit: "ਸੋਧੋ", profile_save: "ਸੇਵ", profile_badges: "ਪ੍ਰਾਪਤੀਆਂ ਅਤੇ ਬੈਜ", profile_donations: "ਦਾਨ", profile_locked: "🔒 ਲੌਕ",
  contact_title: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ 📞", contact_subtitle: "ਸਵਾਲ ਜਾਂ ਸੁਝਾਅ? ਅਸੀਂ ਇੱਥੇ ਹਾਂ!", contact_name: "ਤੁਹਾਡਾ ਨਾਂ", contact_email: "ਈਮੇਲ", contact_phone: "ਫੋਨ (ਵਿਕਲਪਿਕ)", contact_message: "ਆਪਣਾ ਸੁਨੇਹਾ ਲਿਖੋ...", contact_send: "ਸੁਨੇਹਾ ਭੇਜੋ 📩", contact_address: "ਪਤਾ", contact_working: "ਕੰਮ ਦੇ ਘੰਟੇ",
  footer_tagline: "ਖਾਣਾ ਬਰਬਾਦ ਨਾ ਕਰੋ! ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਖਾਣਾ ਦਾਨ ਭਾਈਚਾਰਾ.", footer_quick: "ਤੇਜ਼ ਲਿੰਕ", footer_support: "ਮਦਦ", footer_connect: "ਸਾਡੇ ਨਾਲ ਜੁੜੋ", footer_copyright: "© 2026 AnnaSeva. ਭਾਰਤ ਵਿੱਚ ❤️ ਨਾਲ ਬਣਾਇਆ.",
  food_roti: "ਰੋਟੀ/ਚਪਾਤੀ", food_sabzi: "ਸਬਜ਼ੀ/ਕੜੀ", food_rice: "ਚੌਲ/ਬਿਰਿਆਨੀ", food_fruits: "ਫਲ", food_packed: "ਪੈਕ ਖਾਣਾ", food_sweets: "ਮਿਠਾਈ",
  time_morning: "ਸਵੇਰ (8-11 AM)", time_afternoon: "ਦੁਪਹਿਰ (12-3 PM)", time_evening: "ਸ਼ਾਮ (4-7 PM)", time_night: "ਰਾਤ (8-10 PM)",
};

// Remaining languages use English as base with native greetings
const or: TranslationKeys = { ...en, nav_home: "ହୋମ", hero_title1: "ଖାଦ୍ୟ ନଷ୍ଟ କରନ୍ତୁ ନାହିଁ,", hero_title2: "କାହାକୁ ଖାଇବାକୁ ଦିଅନ୍ତୁ!", dash_greeting: "ନମସ୍କାର! 🙏", signin_welcome: "AnnaSeva ରେ ସ୍ୱାଗତ! 🙏", cta_title: "ଆଜି ଆରମ୍ଭ କରନ୍ତୁ! 🙏", nav_about: "ଆମ ବିଷୟରେ", nav_donate: "ଖାଦ୍ୟ ଦାନ", nav_track: "ଟ୍ରାକ୍", nav_history: "ଇତିହାସ", nav_contact: "ଯୋଗାଯୋଗ", nav_signin: "ସାଇନ୍ ଇନ୍", nav_donate_now: "ବର୍ତ୍ତମାନ ଦାନ 🍱" };
const ur: TranslationKeys = { ...en, nav_home: "ہوم", hero_title1: "کھانا ضائع مت کرو،", hero_title2: "کسی کا پیٹ بھرو!", dash_greeting: "السلام علیکم! 🙏", signin_welcome: "!AnnaSeva میں خوش آمدید 🙏", cta_title: "!آج ہی شروع کریں 🙏", nav_about: "ہمارے بارے میں", nav_donate: "کھانا عطیہ", nav_track: "ٹریک", nav_history: "تاریخ", nav_contact: "رابطہ", nav_signin: "سائن ان", nav_donate_now: "ابھی عطیہ کریں 🍱" };
const as_lang: TranslationKeys = { ...en, nav_home: "হোম", hero_title1: "খাদ্য নষ্ট নকৰিব,", hero_title2: "কাৰোবাক খুৱাওক!", dash_greeting: "নমস্কাৰ! 🙏", signin_welcome: "AnnaSeva-লৈ স্বাগতম! 🙏", cta_title: "আজিয়েই আৰম্ভ কৰক! 🙏", nav_about: "আমাৰ বিষয়ে", nav_donate: "খাদ্য দান", nav_track: "ট্ৰেক", nav_history: "ইতিহাস", nav_contact: "যোগাযোগ", nav_signin: "ছাইন ইন", nav_donate_now: "এতিয়াই দান কৰক 🍱" };

export const translations: Record<Language, TranslationKeys> = {
  en, hi, ta, te, kn, ml, bn, mr, gu, pa, or, ur, as: as_lang,
};
