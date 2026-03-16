export type Lang = "en" | "es" | "ar";
type Dict = Record<string, string>;

const en: Dict = {
  // Navigation
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.bookNow": "Book Now",
  "nav.bookNowCall": "Book Now — Call Us",

  // Hero
  "hero.location": "Journal Square · Jersey City",
  "hero.line1": "Sharp Cuts",
  "hero.line2": "Clean Fades",
  "hero.line3": "Trusted in Jersey City",
  "hero.subtitle": "Premium cuts, expert fades, and classic shaves — crafted with care in the heart of Jersey City.",
  "hero.bookAppointment": "Book Appointment",
  "hero.ourServices": "Our Services",
  "hero.years": "Years",
  "hero.clients": "Clients",
  "hero.reviews": "★ 291 Reviews",
  "hero.walkIns": "Walk-ins",
  "hero.alwaysWelcome": "Always Welcome",
  "hero.scroll": "Scroll",

  // Homepage - Services Section
  "home.whatWeOffer": "What We Offer",
  "home.ourServices": "Our Services",
  "home.viewAllServices": "View All Services →",

  // Homepage - About Section
  "home.aboutUs": "About Us",
  "home.whyMarina": "Why Marina Barbershop",
  "home.aboutP1": "Rooted in the heart of Journal Square, Marina Barbershop has been a staple for the Jersey City community. We're not a chain — we're a crew of skilled barbers who take pride in every fade, every lineup, and every hot towel shave we deliver.",
  "home.aboutP2": "Whether you're a regular who's been coming for years or a first-timer walking in off Bergen Ave, you get the same thing: precision work, honest prices, and a shop that feels like home. No appointments, no pretense — just great cuts and good conversation.",
  "home.servingSince": "Serving Jersey City since day one",
  "home.expertBarbers": "Expert Barbers",
  "home.expertBarbersDesc": "Years of experience with every style — classic to modern",
  "home.walkinsWelcome": "Walk-ins Welcome",
  "home.walkinsWelcomeDesc": "No appointments needed, just stop by anytime we're open",
  "home.premiumProducts": "Premium Products",
  "home.premiumProductsDesc": "Top-shelf grooming products for the best results",
  "home.communityFirst": "Community First",
  "home.communityFirstDesc": "Proudly serving Journal Square and all of Jersey City",

  // Homepage - Gallery Section
  "home.ourWork": "Our Work",
  "home.gallery": "Gallery",
  "home.viewFullGallery": "View Full Gallery →",

  // Homepage - Hours Section
  "home.wereOpen": "We're Open",
  "home.businessHours": "Business Hours",
  "home.walkInsNote": "Walk-ins always welcome — no appointment needed.",

  // Homepage - Testimonials Section
  "home.happyClients": "Happy Clients",
  "home.whatPeopleSay": "What People Say",
  "home.readAllReviews": "Read All Reviews →",

  // Homepage - CTA Section
  "home.noAppointmentNeeded": "No Appointment Needed",
  "home.walkInsAlways": "Walk-ins",
  "home.always": "Always",
  "home.welcome": "Welcome",
  "home.ctaSubtitle": "Come in, sit down, and let our barbers take care of you.",
  "home.callNumber": "Call (201) 736-3239",
  "home.getDirections": "Get Directions",

  // Homepage - Contact Mini
  "home.location": "Location",
  "home.phone": "Phone",
  "home.hours": "Hours",
  "home.hoursDetail": "Mon–Tue, Thu–Sat: 11AM–9PM",
  "home.hoursDetail2": "Sun: 11AM–3PM · Wed: Closed",

  // Days of the week
  "day.monday": "Monday",
  "day.tuesday": "Tuesday",
  "day.wednesday": "Wednesday",
  "day.thursday": "Thursday",
  "day.friday": "Friday",
  "day.saturday": "Saturday",
  "day.sunday": "Sunday",

  // Common
  "common.closed": "Closed",
  "common.popular": "Popular",

  // Service names
  "svc.classicHaircut": "Classic Haircut",
  "svc.fade": "Fade",
  "svc.scissorCut": "Scissor Cut",
  "svc.buzzCut": "Buzz Cut",
  "svc.kidsCut": "Kids Cut",
  "svc.seniorCut": "Senior Cut",
  "svc.beardTrim": "Beard Trim",
  "svc.beardShapeup": "Beard Shape-up",
  "svc.hotTowelShave": "Hot Towel Shave",
  "svc.neckShave": "Neck Shave",
  "svc.cutBeardCombo": "Cut + Beard Combo",
  "svc.cutShaveCombo": "Cut + Shave Combo",
  "svc.fullServicePackage": "Full Service Package",
  "svc.edgeupLineup": "Edge-up / Line-up",
  "svc.hairDesign": "Hair Design",
  "svc.eyebrowTrim": "Eyebrow Trim",
  "svc.other": "Other",

  // Service descriptions (homepage short versions)
  "svc.classicHaircut.homeDesc": "Timeless cut tailored to your style",
  "svc.fade.homeDesc": "Clean, precise fade — high, mid, or low",
  "svc.beardTrim.homeDesc": "Shape and define your beard",
  "svc.hotTowelShave.homeDesc": "Traditional straight-razor experience",
  "svc.cutBeardCombo.homeDesc": "Full grooming in one visit",
  "svc.kidsCut.homeDesc": "For the little ones (12 & under)",

  // Service descriptions (services page full versions)
  "svc.classicHaircut.desc": "A timeless cut shaped to your style and face structure.",
  "svc.fade.desc": "Precision fade — high, mid, or low. Clean lines guaranteed.",
  "svc.scissorCut.desc": "Detailed scissor work for textured, natural styles.",
  "svc.buzzCut.desc": "Simple, clean all-over buzz — quick and sharp.",
  "svc.kidsCut.desc": "Patient, friendly cuts for kids 12 and under.",
  "svc.seniorCut.desc": "Relaxed, comfortable cuts for seniors.",
  "svc.beardTrim.desc": "Shaping and trimming to clean up your beard.",
  "svc.beardShapeup.desc": "Define your lines with a clean, sharp edge-up.",
  "svc.hotTowelShave.desc": "Classic straight-razor shave with warm towel prep. A luxury experience.",
  "svc.neckShave.desc": "Quick clean-up of the neckline.",
  "svc.cutBeardCombo.desc": "Full haircut and beard trim in one visit. Best value.",
  "svc.cutShaveCombo.desc": "Haircut paired with a full hot towel straight-razor shave.",
  "svc.fullServicePackage.desc": "Everything included — cut, beard shape-up, hot towel, and neck shave.",
  "svc.edgeupLineup.desc": "Crisp edge-up of the hairline, sideburns, and neck.",
  "svc.hairDesign.desc": "Custom designs and patterns cut into your style.",
  "svc.eyebrowTrim.desc": "Clean up and shape your eyebrows.",

  // Service categories
  "svc.cat.haircuts": "Haircuts",
  "svc.cat.beardServices": "Beard Services",
  "svc.cat.comboPackages": "Combo Packages",
  "svc.cat.extrasAddons": "Extras & Add-ons",

  // Services page
  "services.title": "Services & Pricing",
  "services.subtitle": "Premium barbershop services at honest prices. Walk-ins welcome — no appointment needed.",
  "services.readyForCut": "Ready for Your Cut?",
  "services.walkInAnytime": "Walk in anytime or give us a call to check wait times.",

  // Gallery page
  "gallery.title": "Gallery",
  "gallery.subtitle": "Every cut tells a story. Browse some of our recent work from Marina Barbershop.",
  "gallery.likeWhatYouSee": "Like what you see? Come in for your own transformation.",
  "gallery.bookYourCut": "Book Your Cut — (201) 736-3239",

  // Gallery captions
  "gallery.curlyFade": "Curly Fade",
  "gallery.curlyFadeBack": "Curly Fade — Back View",
  "gallery.kidsCut": "Kids Cut",
  "gallery.curlyCut": "Curly Cut",
  "gallery.beardTrimFade": "Beard Trim & Fade",
  "gallery.kidsHaircut": "Kids Haircut",
  "gallery.happyClient": "Happy Client",
  "gallery.barberAtWork": "Barber at Work",
  "gallery.kidsCutDesign": "Kids Cut — Design",
  "gallery.ourBarber": "Our Barber",
  "gallery.kidsFade": "Kids Fade",
  "gallery.theOwner": "The Owner",
  "gallery.freshCut": "Fresh Cut",
  "gallery.beardAndFade": "Beard & Fade",

  // Gallery categories
  "gallery.cat.haircut": "Haircut",
  "gallery.cat.beard": "Beard",
  "gallery.cat.shop": "Shop",
  "gallery.cat.team": "Team",

  // Reviews page
  "reviews.customerReviews": "Customer Reviews",
  "reviews.whatPeopleSay": "What People Say",
  "reviews.basedOn": "Based on 291 reviews",
  "reviews.loveMarina": "Love Marina Barbershop?",
  "reviews.leaveReview": "Leave us a review on Google and help others discover the best barbershop in Jersey City.",
  "reviews.leaveGoogleReview": "Leave a Google Review →",

  // Review texts (10 reviews)
  "review.1": "Best barbershop in Jersey City, hands down. The fade is always on point and the atmosphere is chill. Won't go anywhere else.",
  "review.2": "Came in as a walk-in and was taken care of almost immediately. Professional, clean shop, and the barber really listened to what I wanted.",
  "review.3": "The hot towel shave is an absolute experience. Feels like a luxury treatment but at a real barbershop price. This is my spot now.",
  "review.4": "Brought my son in for his first real haircut and they were incredibly patient and kind. He loved it. We're regulars now.",
  "review.5": "Been going here for 2 years. Consistent quality every single time. The combo deal is a steal — haircut and beard for $40.",
  "review.6": "Clean shop, friendly staff, and they actually know how to do a proper fade. No fuss, just great work every time I come in.",
  "review.7": "Best haircut I've had in years. The barber was super attentive and gave great advice on styling. The beard shape-up was fire.",
  "review.8": "Always leave feeling fresh. The environment is welcoming and professional. Easy to find in Journal Square area. Highly recommend.",
  "review.9": "I'm picky about my fades and Marina's team delivers every time. They pay attention to detail and never rush you out.",
  "review.10": "The full service package is worth every penny. Clean cut, hot towel, the works. Walked out looking like a new man.",

  // Homepage short review versions (3 reviews)
  "review.home.1": "Best barbershop in Jersey City, hands down. The fade is always on point and the atmosphere is great.",
  "review.home.2": "Came in as a walk-in and was taken care of immediately. Professional, clean, and skilled. Will be back.",
  "review.home.3": "The hot towel shave is an experience. Feels like a luxury spa but at a fair price. Highly recommend.",

  // Review dates
  "date.jan2025": "Jan 2025",
  "date.dec2024": "Dec 2024",
  "date.january2025": "January 2025",
  "date.december2024": "December 2024",
  "date.november2024": "November 2024",
  "date.october2024": "October 2024",

  // Contact page
  "contact.bookOnline": "Book Online",
  "contact.title": "Contact & Booking",
  "contact.subtitle": "Questions? Walk-in hours? We're here to help. Or just stop by — walk-ins always welcome.",
  "contact.bookAnAppointment": "Book an Appointment",
  "contact.fullName": "Full Name *",
  "contact.phoneNumber": "Phone Number",
  "contact.emailAddress": "Email Address",
  "contact.serviceInterestedIn": "Service Interested In",
  "contact.selectService": "Select a service...",
  "contact.preferredDate": "Preferred Date",
  "contact.preferredTime": "Preferred Time",
  "contact.message": "Message *",
  "contact.messagePlaceholder": "Tell us anything — question about services, wait times, etc.",
  "contact.sendBooking": "Send Booking Request →",
  "contact.bookingReceived": "Booking Request Received!",
  "contact.addToCalendar": "Thanks for reaching out. Add this to your calendar so you don't forget:",
  "contact.addGoogleCalendar": "Add to Google Calendar",
  "contact.addAppleCalendar": "Add to Apple Calendar",
  "contact.orCallDirectly": "Or call us directly:",
  "contact.visitUs": "Visit Us",
  "contact.address": "Address",
  "contact.getDirections": "Get Directions →",
  "contact.tapToCall": "Tap to call",
  "contact.walkIns": "Walk-ins",
  "contact.alwaysWelcomeNoAppt": "Always welcome. No appointment needed.",

  // Footer
  "footer.tagline": "Premium barbershop services in Journal Square, Jersey City. Where style meets tradition.",
  "footer.quickLinks": "Quick Links",
  "footer.home": "Home",
  "footer.servicesPricing": "Services & Pricing",
  "footer.gallery": "Gallery",
  "footer.reviews": "Reviews",
  "footer.contactUs": "Contact Us",
  "footer.visitUs": "Visit Us",
  "footer.hoursMTTS": "Mon–Tue, Thu–Sat: 11:00 AM – 9:00 PM",
  "footer.hoursSun": "Sun: 11:00 AM – 3:00 PM",
  "footer.hoursWedClosed": "Wed: Closed",
  "footer.allRightsReserved": "All rights reserved.",
};

const es: Dict = {
  // Navigation
  "nav.home": "Inicio",
  "nav.services": "Servicios",
  "nav.gallery": "Galería",
  "nav.reviews": "Reseñas",
  "nav.contact": "Contacto",
  "nav.bookNow": "Reservar",
  "nav.bookNowCall": "Reservar — Llámanos",

  // Hero
  "hero.location": "Journal Square · Jersey City",
  "hero.line1": "Cortes Precisos",
  "hero.line2": "Degradados Limpios",
  "hero.line3": "De Confianza en Jersey City",
  "hero.subtitle": "Cortes premium, degradados expertos y afeitados clásicos — elaborados con cuidado en el corazón de Jersey City.",
  "hero.bookAppointment": "Reservar Cita",
  "hero.ourServices": "Nuestros Servicios",
  "hero.years": "Años",
  "hero.clients": "Clientes",
  "hero.reviews": "★ 291 Reseñas",
  "hero.walkIns": "Sin Cita",
  "hero.alwaysWelcome": "Siempre Bienvenidos",
  "hero.scroll": "Desplazar",

  // Homepage - Services Section
  "home.whatWeOffer": "Lo Que Ofrecemos",
  "home.ourServices": "Nuestros Servicios",
  "home.viewAllServices": "Ver Todos los Servicios →",

  // Homepage - About Section
  "home.aboutUs": "Sobre Nosotros",
  "home.whyMarina": "Por Qué Marina Barbershop",
  "home.aboutP1": "En el corazón de Journal Square, Marina Barbershop ha sido un pilar para la comunidad de Jersey City. No somos una cadena — somos un equipo de barberos expertos que se enorgullecen de cada degradado, cada delineado y cada afeitado con toalla caliente que realizamos.",
  "home.aboutP2": "Ya seas un cliente habitual que lleva años viniendo o un primerizo que entra desde Bergen Ave, obtienes lo mismo: trabajo de precisión, precios honestos y una tienda que se siente como en casa. Sin citas, sin pretensiones — solo grandes cortes y buena conversación.",
  "home.servingSince": "Sirviendo a Jersey City desde el primer día",
  "home.expertBarbers": "Barberos Expertos",
  "home.expertBarbersDesc": "Años de experiencia con cada estilo — del clásico al moderno",
  "home.walkinsWelcome": "Sin Cita Bienvenidos",
  "home.walkinsWelcomeDesc": "No se necesita cita, solo pasa cuando estemos abiertos",
  "home.premiumProducts": "Productos Premium",
  "home.premiumProductsDesc": "Productos de aseo de primera para los mejores resultados",
  "home.communityFirst": "La Comunidad Primero",
  "home.communityFirstDesc": "Sirviendo con orgullo a Journal Square y todo Jersey City",

  // Homepage - Gallery Section
  "home.ourWork": "Nuestro Trabajo",
  "home.gallery": "Galería",
  "home.viewFullGallery": "Ver Galería Completa →",

  // Homepage - Hours Section
  "home.wereOpen": "Estamos Abiertos",
  "home.businessHours": "Horario de Atención",
  "home.walkInsNote": "Siempre bienvenidos sin cita — no se necesita reserva.",

  // Homepage - Testimonials Section
  "home.happyClients": "Clientes Felices",
  "home.whatPeopleSay": "Lo Que Dicen",
  "home.readAllReviews": "Leer Todas las Reseñas →",

  // Homepage - CTA Section
  "home.noAppointmentNeeded": "Sin Necesidad de Cita",
  "home.walkInsAlways": "Sin Cita",
  "home.always": "Siempre",
  "home.welcome": "Bienvenidos",
  "home.ctaSubtitle": "Entra, siéntate y deja que nuestros barberos te cuiden.",
  "home.callNumber": "Call (201) 736-3239",
  "home.getDirections": "Cómo Llegar",

  // Homepage - Contact Mini
  "home.location": "Ubicación",
  "home.phone": "Teléfono",
  "home.hours": "Horario",
  "home.hoursDetail": "Lun–Mar, Jue–Sáb: 11AM–9PM",
  "home.hoursDetail2": "Dom: 11AM–3PM · Mié: Cerrado",

  // Days of the week
  "day.monday": "Lunes",
  "day.tuesday": "Martes",
  "day.wednesday": "Miércoles",
  "day.thursday": "Jueves",
  "day.friday": "Viernes",
  "day.saturday": "Sábado",
  "day.sunday": "Domingo",

  // Common
  "common.closed": "Cerrado",
  "common.popular": "Popular",

  // Service names
  "svc.classicHaircut": "Corte Clásico",
  "svc.fade": "Degradado",
  "svc.scissorCut": "Corte con Tijeras",
  "svc.buzzCut": "Rapado",
  "svc.kidsCut": "Corte para Niños",
  "svc.seniorCut": "Corte para Mayores",
  "svc.beardTrim": "Recorte de Barba",
  "svc.beardShapeup": "Delineado de Barba",
  "svc.hotTowelShave": "Afeitado con Toalla Caliente",
  "svc.neckShave": "Afeitado de Cuello",
  "svc.cutBeardCombo": "Combo Corte + Barba",
  "svc.cutShaveCombo": "Combo Corte + Afeitado",
  "svc.fullServicePackage": "Paquete Completo",
  "svc.edgeupLineup": "Delineado",
  "svc.hairDesign": "Diseño Capilar",
  "svc.eyebrowTrim": "Recorte de Cejas",
  "svc.other": "Otro",

  // Service descriptions (homepage short versions)
  "svc.classicHaircut.homeDesc": "Corte atemporal adaptado a tu estilo",
  "svc.fade.homeDesc": "Degradado limpio y preciso — alto, medio o bajo",
  "svc.beardTrim.homeDesc": "Da forma y define tu barba",
  "svc.hotTowelShave.homeDesc": "Experiencia tradicional con navaja",
  "svc.cutBeardCombo.homeDesc": "Arreglo completo en una visita",
  "svc.kidsCut.homeDesc": "Para los pequeños (12 años y menos)",

  // Service descriptions (services page full versions)
  "svc.classicHaircut.desc": "Un corte atemporal adaptado a tu estilo y estructura facial.",
  "svc.fade.desc": "Degradado de precisión — alto, medio o bajo. Líneas limpias garantizadas.",
  "svc.scissorCut.desc": "Trabajo detallado con tijeras para estilos texturizados y naturales.",
  "svc.buzzCut.desc": "Rapado limpio y uniforme — rápido y afilado.",
  "svc.kidsCut.desc": "Cortes pacientes y amigables para niños de 12 años y menos.",
  "svc.seniorCut.desc": "Cortes relajados y cómodos para personas mayores.",
  "svc.beardTrim.desc": "Dar forma y recortar para arreglar tu barba.",
  "svc.beardShapeup.desc": "Define tus líneas con un delineado limpio y preciso.",
  "svc.hotTowelShave.desc": "Afeitado clásico con navaja y preparación con toalla caliente. Una experiencia de lujo.",
  "svc.neckShave.desc": "Limpieza rápida de la línea del cuello.",
  "svc.cutBeardCombo.desc": "Corte completo y recorte de barba en una visita. Mejor valor.",
  "svc.cutShaveCombo.desc": "Corte de pelo combinado con afeitado completo con toalla caliente y navaja.",
  "svc.fullServicePackage.desc": "Todo incluido — corte, delineado de barba, toalla caliente y afeitado de cuello.",
  "svc.edgeupLineup.desc": "Delineado preciso de la línea del cabello, patillas y cuello.",
  "svc.hairDesign.desc": "Diseños y patrones personalizados cortados en tu estilo.",
  "svc.eyebrowTrim.desc": "Limpia y da forma a tus cejas.",

  // Service categories
  "svc.cat.haircuts": "Cortes de Pelo",
  "svc.cat.beardServices": "Servicios de Barba",
  "svc.cat.comboPackages": "Paquetes Combo",
  "svc.cat.extrasAddons": "Extras y Adicionales",

  // Services page
  "services.title": "Servicios y Precios",
  "services.subtitle": "Servicios de barbería premium a precios honestos. Bienvenidos sin cita — no se necesita reserva.",
  "services.readyForCut": "¿Listo para Tu Corte?",
  "services.walkInAnytime": "Pasa en cualquier momento o llámanos para consultar tiempos de espera.",

  // Gallery page
  "gallery.title": "Galería",
  "gallery.subtitle": "Cada corte cuenta una historia. Mira algunos de nuestros trabajos recientes en Marina Barbershop.",
  "gallery.likeWhatYouSee": "¿Te gusta lo que ves? Ven para tu propia transformación.",
  "gallery.bookYourCut": "Reserva Tu Corte — (201) 736-3239",

  // Gallery captions
  "gallery.curlyFade": "Degradado Rizado",
  "gallery.curlyFadeBack": "Degradado Rizado — Vista Trasera",
  "gallery.kidsCut": "Corte para Niños",
  "gallery.curlyCut": "Corte Rizado",
  "gallery.beardTrimFade": "Recorte de Barba y Degradado",
  "gallery.kidsHaircut": "Corte de Niños",
  "gallery.happyClient": "Cliente Feliz",
  "gallery.barberAtWork": "Barbero Trabajando",
  "gallery.kidsCutDesign": "Corte Niños — Diseño",
  "gallery.ourBarber": "Nuestro Barbero",
  "gallery.kidsFade": "Degradado Niños",
  "gallery.theOwner": "El Propietario",
  "gallery.freshCut": "Corte Fresco",
  "gallery.beardAndFade": "Barba y Degradado",

  // Gallery categories
  "gallery.cat.haircut": "Corte",
  "gallery.cat.beard": "Barba",
  "gallery.cat.shop": "Tienda",
  "gallery.cat.team": "Equipo",

  // Reviews page
  "reviews.customerReviews": "Reseñas de Clientes",
  "reviews.whatPeopleSay": "Lo Que Dicen",
  "reviews.basedOn": "Basado en 291 reseñas",
  "reviews.loveMarina": "¿Te Encanta Marina Barbershop?",
  "reviews.leaveReview": "Déjanos una reseña en Google y ayuda a otros a descubrir la mejor barbería en Jersey City.",
  "reviews.leaveGoogleReview": "Dejar Reseña en Google →",

  // Review texts (10 reviews)
  "review.1": "La mejor barbería en Jersey City, sin duda. El degradado siempre es perfecto y el ambiente es genial. No iré a otro lugar.",
  "review.2": "Entré sin cita y me atendieron casi de inmediato. Profesional, tienda limpia, y el barbero realmente escuchó lo que quería.",
  "review.3": "El afeitado con toalla caliente es una experiencia absoluta. Se siente como un tratamiento de lujo pero a precio de barbería real. Este es mi lugar ahora.",
  "review.4": "Traje a mi hijo para su primer corte de pelo real y fueron increíblemente pacientes y amables. Le encantó. Ahora somos clientes habituales.",
  "review.5": "He venido aquí durante 2 años. Calidad consistente cada vez. La oferta combo es increíble — corte y barba por $40.",
  "review.6": "Tienda limpia, personal amigable, y realmente saben hacer un degradado apropiado. Sin complicaciones, solo gran trabajo cada vez que vengo.",
  "review.7": "El mejor corte de pelo que he tenido en años. El barbero fue súper atento y dio grandes consejos de estilo. El delineado de barba fue espectacular.",
  "review.8": "Siempre salgo sintiéndome fresco. El ambiente es acogedor y profesional. Fácil de encontrar en el área de Journal Square. Muy recomendado.",
  "review.9": "Soy exigente con mis degradados y el equipo de Marina cumple cada vez. Prestan atención al detalle y nunca te apresuran.",
  "review.10": "El paquete de servicio completo vale cada centavo. Corte limpio, toalla caliente, todo. Salí luciendo como un hombre nuevo.",

  // Homepage short review versions (3 reviews)
  "review.home.1": "La mejor barbería en Jersey City, sin duda. El degradado siempre es perfecto y el ambiente es genial.",
  "review.home.2": "Entré sin cita y me atendieron de inmediato. Profesional, limpio y hábil. Volveré.",
  "review.home.3": "El afeitado con toalla caliente es una experiencia. Se siente como un spa de lujo pero a un precio justo. Muy recomendado.",

  // Review dates
  "date.jan2025": "Ene 2025",
  "date.dec2024": "Dic 2024",
  "date.january2025": "Enero 2025",
  "date.december2024": "Diciembre 2024",
  "date.november2024": "Noviembre 2024",
  "date.october2024": "Octubre 2024",

  // Contact page
  "contact.bookOnline": "Reservar en Línea",
  "contact.title": "Contacto y Reservas",
  "contact.subtitle": "¿Preguntas? ¿Horarios sin cita? Estamos aquí para ayudar. O simplemente pasa — siempre bienvenidos sin cita.",
  "contact.bookAnAppointment": "Reservar una Cita",
  "contact.fullName": "Nombre Completo *",
  "contact.phoneNumber": "Número de Teléfono",
  "contact.emailAddress": "Correo Electrónico",
  "contact.serviceInterestedIn": "Servicio de Interés",
  "contact.selectService": "Seleccionar un servicio...",
  "contact.preferredDate": "Fecha Preferida",
  "contact.preferredTime": "Hora Preferida",
  "contact.message": "Mensaje *",
  "contact.messagePlaceholder": "Cuéntanos lo que sea — preguntas sobre servicios, tiempos de espera, etc.",
  "contact.sendBooking": "Enviar Solicitud de Reserva →",
  "contact.bookingReceived": "¡Solicitud de Reserva Recibida!",
  "contact.addToCalendar": "Gracias por contactarnos. Agrega esto a tu calendario para no olvidarlo:",
  "contact.addGoogleCalendar": "Agregar a Google Calendar",
  "contact.addAppleCalendar": "Agregar a Apple Calendar",
  "contact.orCallDirectly": "O llámanos directamente:",
  "contact.visitUs": "Visítanos",
  "contact.address": "Dirección",
  "contact.getDirections": "Cómo Llegar →",
  "contact.tapToCall": "Toca para llamar",
  "contact.walkIns": "Sin Cita",
  "contact.alwaysWelcomeNoAppt": "Siempre bienvenidos. No se necesita cita.",

  // Footer
  "footer.tagline": "Servicios de barbería premium en Journal Square, Jersey City. Donde el estilo se encuentra con la tradición.",
  "footer.quickLinks": "Enlaces Rápidos",
  "footer.home": "Inicio",
  "footer.servicesPricing": "Servicios y Precios",
  "footer.gallery": "Galería",
  "footer.reviews": "Reseñas",
  "footer.contactUs": "Contáctanos",
  "footer.visitUs": "Visítanos",
  "footer.hoursMTTS": "Lun–Mar, Jue–Sáb: 11:00 AM – 9:00 PM",
  "footer.hoursSun": "Dom: 11:00 AM – 3:00 PM",
  "footer.hoursWedClosed": "Mié: Cerrado",
  "footer.allRightsReserved": "Todos los derechos reservados.",
};

const ar: Dict = {
  // Navigation
  "nav.home": "الرئيسية",
  "nav.services": "الخدمات",
  "nav.gallery": "المعرض",
  "nav.reviews": "التقييمات",
  "nav.contact": "اتصل بنا",
  "nav.bookNow": "احجز الآن",
  "nav.bookNowCall": "احجز الآن — اتصل بنا",

  // Hero
  "hero.location": "Journal Square · Jersey City",
  "hero.line1": "قصات حادة",
  "hero.line2": "تدريجات نظيفة",
  "hero.line3": "موثوق في جيرسي سيتي",
  "hero.subtitle": "قصات فاخرة، تدريجات خبيرة، وحلاقة كلاسيكية — مصنوعة بعناية في قلب جيرسي سيتي.",
  "hero.bookAppointment": "احجز موعد",
  "hero.ourServices": "خدماتنا",
  "hero.years": "سنوات",
  "hero.clients": "عملاء",
  "hero.reviews": "★ 291 تقييم",
  "hero.walkIns": "بدون موعد",
  "hero.alwaysWelcome": "مرحب بكم دائماً",
  "hero.scroll": "تصفح",

  // Homepage - Services Section
  "home.whatWeOffer": "ما نقدمه",
  "home.ourServices": "خدماتنا",
  "home.viewAllServices": "عرض جميع الخدمات ←",

  // Homepage - About Section
  "home.aboutUs": "من نحن",
  "home.whyMarina": "لماذا Marina Barbershop",
  "home.aboutP1": "في قلب جورنال سكوير، كان Marina Barbershop ركيزة لمجتمع جيرسي سيتي. نحن لسنا سلسلة — نحن فريق من الحلاقين المهرة الذين يفتخرون بكل تدريج وكل تحديد وكل حلاقة بالمنشفة الساخنة نقدمها.",
  "home.aboutP2": "سواء كنت عميلاً دائماً يأتي منذ سنوات أو زائراً لأول مرة من شارع بيرغن، ستحصل على نفس الشيء: عمل دقيق، أسعار صادقة، ومحل يشعرك وكأنك في بيتك. بدون مواعيد، بدون تكلف — فقط قصات رائعة ومحادثات جيدة.",
  "home.servingSince": "نخدم جيرسي سيتي منذ اليوم الأول",
  "home.expertBarbers": "حلاقون خبراء",
  "home.expertBarbersDesc": "سنوات من الخبرة في كل الأساليب — من الكلاسيكي إلى الحديث",
  "home.walkinsWelcome": "الزيارات بدون موعد مرحب بها",
  "home.walkinsWelcomeDesc": "لا حاجة لموعد، فقط تعال في أي وقت نكون مفتوحين",
  "home.premiumProducts": "منتجات فاخرة",
  "home.premiumProductsDesc": "منتجات العناية الفاخرة لأفضل النتائج",
  "home.communityFirst": "المجتمع أولاً",
  "home.communityFirstDesc": "نخدم بفخر جورنال سكوير وكل جيرسي سيتي",

  // Homepage - Gallery Section
  "home.ourWork": "أعمالنا",
  "home.gallery": "المعرض",
  "home.viewFullGallery": "عرض المعرض الكامل ←",

  // Homepage - Hours Section
  "home.wereOpen": "نحن مفتوحون",
  "home.businessHours": "ساعات العمل",
  "home.walkInsNote": "الزيارات بدون موعد مرحب بها دائماً — لا حاجة لحجز.",

  // Homepage - Testimonials Section
  "home.happyClients": "عملاء سعداء",
  "home.whatPeopleSay": "ماذا يقول الناس",
  "home.readAllReviews": "قراءة جميع التقييمات ←",

  // Homepage - CTA Section
  "home.noAppointmentNeeded": "لا حاجة لموعد",
  "home.walkInsAlways": "بدون موعد",
  "home.always": "دائماً",
  "home.welcome": "مرحب بكم",
  "home.ctaSubtitle": "تعال، اجلس، ودع حلاقينا يعتنون بك.",
  "home.callNumber": "Call (201) 736-3239",
  "home.getDirections": "الاتجاهات",

  // Homepage - Contact Mini
  "home.location": "الموقع",
  "home.phone": "الهاتف",
  "home.hours": "الساعات",
  "home.hoursDetail": "الإثنين–الثلاثاء، الخميس–السبت: 11ص–9م",
  "home.hoursDetail2": "الأحد: 11ص–3م · الأربعاء: مغلق",

  // Days of the week
  "day.monday": "الإثنين",
  "day.tuesday": "الثلاثاء",
  "day.wednesday": "الأربعاء",
  "day.thursday": "الخميس",
  "day.friday": "الجمعة",
  "day.saturday": "السبت",
  "day.sunday": "الأحد",

  // Common
  "common.closed": "مغلق",
  "common.popular": "مشهور",

  // Service names
  "svc.classicHaircut": "قص كلاسيكي",
  "svc.fade": "تدريج",
  "svc.scissorCut": "قص بالمقص",
  "svc.buzzCut": "حلاقة كاملة",
  "svc.kidsCut": "قص أطفال",
  "svc.seniorCut": "قص كبار السن",
  "svc.beardTrim": "تشذيب اللحية",
  "svc.beardShapeup": "تحديد اللحية",
  "svc.hotTowelShave": "حلاقة بالمنشفة الساخنة",
  "svc.neckShave": "حلاقة الرقبة",
  "svc.cutBeardCombo": "كومبو قص + لحية",
  "svc.cutShaveCombo": "كومبو قص + حلاقة",
  "svc.fullServicePackage": "باقة الخدمة الكاملة",
  "svc.edgeupLineup": "تحديد الخطوط",
  "svc.hairDesign": "تصميم الشعر",
  "svc.eyebrowTrim": "تشذيب الحواجب",
  "svc.other": "أخرى",

  // Service descriptions (homepage short versions)
  "svc.classicHaircut.homeDesc": "قصة خالدة مصممة لأسلوبك",
  "svc.fade.homeDesc": "تدريج نظيف ودقيق — عالي، متوسط أو منخفض",
  "svc.beardTrim.homeDesc": "شكّل وحدد لحيتك",
  "svc.hotTowelShave.homeDesc": "تجربة الحلاقة التقليدية بالموس",
  "svc.cutBeardCombo.homeDesc": "عناية كاملة في زيارة واحدة",
  "svc.kidsCut.homeDesc": "للصغار (12 سنة وأقل)",

  // Service descriptions (services page full versions)
  "svc.classicHaircut.desc": "قصة كلاسيكية مصممة لأسلوبك وبنية وجهك.",
  "svc.fade.desc": "تدريج دقيق — عالي، متوسط أو منخفض. خطوط نظيفة مضمونة.",
  "svc.scissorCut.desc": "عمل دقيق بالمقص للأساليب الطبيعية والمنسوجة.",
  "svc.buzzCut.desc": "حلاقة كاملة بسيطة ونظيفة — سريعة وحادة.",
  "svc.kidsCut.desc": "قصات صبورة وودية للأطفال 12 سنة وأقل.",
  "svc.seniorCut.desc": "قصات مريحة وهادئة لكبار السن.",
  "svc.beardTrim.desc": "تشكيل وتشذيب لتنظيف لحيتك.",
  "svc.beardShapeup.desc": "حدد خطوطك بتحديد نظيف وحاد.",
  "svc.hotTowelShave.desc": "حلاقة كلاسيكية بالموس مع تحضير بالمنشفة الساخنة. تجربة فاخرة.",
  "svc.neckShave.desc": "تنظيف سريع لخط الرقبة.",
  "svc.cutBeardCombo.desc": "قص شعر كامل وتشذيب لحية في زيارة واحدة. أفضل قيمة.",
  "svc.cutShaveCombo.desc": "قص شعر مع حلاقة كاملة بالمنشفة الساخنة والموس.",
  "svc.fullServicePackage.desc": "كل شيء مشمول — قص، تحديد لحية، منشفة ساخنة، وحلاقة رقبة.",
  "svc.edgeupLineup.desc": "تحديد واضح لخط الشعر والسوالف والرقبة.",
  "svc.hairDesign.desc": "تصاميم وأنماط مخصصة محفورة في أسلوبك.",
  "svc.eyebrowTrim.desc": "نظّف وشكّل حاجبيك.",

  // Service categories
  "svc.cat.haircuts": "قصات الشعر",
  "svc.cat.beardServices": "خدمات اللحية",
  "svc.cat.comboPackages": "باقات كومبو",
  "svc.cat.extrasAddons": "إضافات وخدمات إضافية",

  // Services page
  "services.title": "الخدمات والأسعار",
  "services.subtitle": "خدمات حلاقة فاخرة بأسعار صادقة. مرحب بالزيارات بدون موعد — لا حاجة لحجز.",
  "services.readyForCut": "جاهز لقصتك؟",
  "services.walkInAnytime": "تعال في أي وقت أو اتصل بنا للاستفسار عن أوقات الانتظار.",

  // Gallery page
  "gallery.title": "المعرض",
  "gallery.subtitle": "كل قصة تحكي حكاية. تصفح بعض أعمالنا الأخيرة في Marina Barbershop.",
  "gallery.likeWhatYouSee": "أعجبك ما ترى؟ تعال لتجربة تحولك الخاص.",
  "gallery.bookYourCut": "احجز قصتك — (201) 736-3239",

  // Gallery captions
  "gallery.curlyFade": "تدريج مجعد",
  "gallery.curlyFadeBack": "تدريج مجعد — منظر خلفي",
  "gallery.kidsCut": "قص أطفال",
  "gallery.curlyCut": "قص مجعد",
  "gallery.beardTrimFade": "تشذيب لحية وتدريج",
  "gallery.kidsHaircut": "قص شعر أطفال",
  "gallery.happyClient": "عميل سعيد",
  "gallery.barberAtWork": "الحلاق أثناء العمل",
  "gallery.kidsCutDesign": "قص أطفال — تصميم",
  "gallery.ourBarber": "حلاقنا",
  "gallery.kidsFade": "تدريج أطفال",
  "gallery.theOwner": "المالك",
  "gallery.freshCut": "قصة جديدة",
  "gallery.beardAndFade": "لحية وتدريج",

  // Gallery categories
  "gallery.cat.haircut": "قص شعر",
  "gallery.cat.beard": "لحية",
  "gallery.cat.shop": "المحل",
  "gallery.cat.team": "الفريق",

  // Reviews page
  "reviews.customerReviews": "تقييمات العملاء",
  "reviews.whatPeopleSay": "ماذا يقول الناس",
  "reviews.basedOn": "بناءً على 291 تقييم",
  "reviews.loveMarina": "أحببت Marina Barbershop؟",
  "reviews.leaveReview": "اترك لنا تقييماً على Google وساعد الآخرين في اكتشاف أفضل محل حلاقة في جيرسي سيتي.",
  "reviews.leaveGoogleReview": "اترك تقييماً على Google ←",

  // Review texts (10 reviews)
  "review.1": "أفضل محل حلاقة في جيرسي سيتي، بلا منازع. التدريج دائماً مثالي والأجواء رائعة. لن أذهب لأي مكان آخر.",
  "review.2": "دخلت بدون موعد وتم الاعتناء بي فوراً تقريباً. محترف، محل نظيف، والحلاق استمع فعلاً لما أريده.",
  "review.3": "الحلاقة بالمنشفة الساخنة تجربة مطلقة. تشعر وكأنها علاج فاخر لكن بسعر محل حلاقة حقيقي. هذا مكاني الآن.",
  "review.4": "أحضرت ابني لأول قصة شعر حقيقية وكانوا صبورين ولطيفين بشكل لا يصدق. أحبها. نحن عملاء دائمون الآن.",
  "review.5": "أتيت هنا منذ سنتين. جودة ثابتة في كل مرة. عرض الكومبو ممتاز — قص شعر ولحية بـ 40 دولار.",
  "review.6": "محل نظيف، طاقم ودود، ويعرفون فعلاً كيف يعملون تدريجاً صحيحاً. بدون ضجة، فقط عمل رائع في كل مرة أزور.",
  "review.7": "أفضل قصة شعر حصلت عليها منذ سنوات. كان الحلاق منتبهاً جداً وقدم نصائح رائعة للتصفيف. تحديد اللحية كان ممتازاً.",
  "review.8": "دائماً أخرج وأنا أشعر بالانتعاش. البيئة ترحيبية ومحترفة. سهل العثور عليه في منطقة جورنال سكوير. أنصح به بشدة.",
  "review.9": "أنا صعب الإرضاء بخصوص التدريجات وفريق Marina يقدم الأفضل في كل مرة. ينتبهون للتفاصيل ولا يستعجلونك أبداً.",
  "review.10": "باقة الخدمة الكاملة تستحق كل قرش. قص نظيف، منشفة ساخنة، كل شيء. خرجت وأنا أبدو كرجل جديد.",

  // Homepage short review versions (3 reviews)
  "review.home.1": "أفضل محل حلاقة في جيرسي سيتي، بلا منازع. التدريج دائماً مثالي والأجواء رائعة.",
  "review.home.2": "دخلت بدون موعد وتم الاعتناء بي فوراً. محترف، نظيف وماهر. سأعود.",
  "review.home.3": "الحلاقة بالمنشفة الساخنة تجربة رائعة. تشعر وكأنها منتجع فاخر لكن بسعر عادل. أنصح به بشدة.",

  // Review dates
  "date.jan2025": "يناير 2025",
  "date.dec2024": "ديسمبر 2024",
  "date.january2025": "يناير 2025",
  "date.december2024": "ديسمبر 2024",
  "date.november2024": "نوفمبر 2024",
  "date.october2024": "أكتوبر 2024",

  // Contact page
  "contact.bookOnline": "احجز عبر الإنترنت",
  "contact.title": "التواصل والحجز",
  "contact.subtitle": "أسئلة؟ أوقات الزيارة بدون موعد؟ نحن هنا للمساعدة. أو فقط تعال — مرحب بالزيارات بدون موعد دائماً.",
  "contact.bookAnAppointment": "احجز موعداً",
  "contact.fullName": "الاسم الكامل *",
  "contact.phoneNumber": "رقم الهاتف",
  "contact.emailAddress": "البريد الإلكتروني",
  "contact.serviceInterestedIn": "الخدمة المطلوبة",
  "contact.selectService": "اختر خدمة...",
  "contact.preferredDate": "التاريخ المفضل",
  "contact.preferredTime": "الوقت المفضل",
  "contact.message": "الرسالة *",
  "contact.messagePlaceholder": "أخبرنا بأي شيء — أسئلة حول الخدمات، أوقات الانتظار، إلخ.",
  "contact.sendBooking": "إرسال طلب الحجز ←",
  "contact.bookingReceived": "تم استلام طلب الحجز!",
  "contact.addToCalendar": "شكراً للتواصل. أضف هذا إلى تقويمك حتى لا تنسى:",
  "contact.addGoogleCalendar": "أضف إلى تقويم Google",
  "contact.addAppleCalendar": "أضف إلى تقويم Apple",
  "contact.orCallDirectly": "أو اتصل بنا مباشرة:",
  "contact.visitUs": "زورنا",
  "contact.address": "العنوان",
  "contact.getDirections": "الاتجاهات ←",
  "contact.tapToCall": "اضغط للاتصال",
  "contact.walkIns": "بدون موعد",
  "contact.alwaysWelcomeNoAppt": "مرحب بكم دائماً. لا حاجة لموعد.",

  // Footer
  "footer.tagline": "خدمات حلاقة فاخرة في جورنال سكوير، جيرسي سيتي. حيث يلتقي الأسلوب بالتقاليد.",
  "footer.quickLinks": "روابط سريعة",
  "footer.home": "الرئيسية",
  "footer.servicesPricing": "الخدمات والأسعار",
  "footer.gallery": "المعرض",
  "footer.reviews": "التقييمات",
  "footer.contactUs": "اتصل بنا",
  "footer.visitUs": "زورنا",
  "footer.hoursMTTS": "الإثنين–الثلاثاء، الخميس–السبت: 11:00 ص – 9:00 م",
  "footer.hoursSun": "الأحد: 11:00 ص – 3:00 م",
  "footer.hoursWedClosed": "الأربعاء: مغلق",
  "footer.allRightsReserved": "جميع الحقوق محفوظة.",
};

const all: Record<Lang, Dict> = { en, es, ar };

export function t(lang: Lang, key: string): string {
  return all[lang]?.[key] ?? all.en[key] ?? key;
}

export default all;
