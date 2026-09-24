import { ServiceItem, ProjectItem, ReviewItem, StepItem, StatItem, QaPair } from '../types';
import projVillaImg from '../assets/images/proj_luxury_villa_1789142530536.jpg';
import projLivingImg from '../assets/images/proj_minimalist_living_1789142542489.jpg';
import projBungalowImg from '../assets/images/proj_bungalow_exterior_1789142556015.jpg';
import projOfficeImg from '../assets/images/proj_office_interior_1789142569691.jpg';
import projTextureImg from '../assets/images/proj_texture_wall_1789142582794.jpg';
import projCommercialImg from '../assets/images/proj_commercial_bldg_1789142597618.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'interior',
    icon: 'fa-solid fa-brush',
    title: 'Interior Painting',
    description: 'Royale luxury emulsions, velvet touches, and stain-resistant finishes with complete floor masking and post-cleaning.',
    actionText: 'Free Color Consultation'
  },
  {
    id: 'exterior',
    icon: 'fa-solid fa-house-chimney-window',
    title: 'Exterior Painting',
    description: 'Weather-shield coatings, anti-fungal silicon primers, and dust-resistant wall paints providing 5-10 year UV protection.',
    actionText: 'Monsoon Protection'
  },
  {
    id: 'waterproofing',
    icon: 'fa-solid fa-droplet-slash',
    title: 'Waterproofing',
    description: 'Comprehensive terrace, bathroom, seepage, and parapet wall waterproofing using Dr. Fixit & SmartCare polymer systems.',
    actionText: 'Seepage Free Warranty'
  },
  {
    id: 'false-ceiling',
    icon: 'fa-solid fa-border-top-left',
    title: 'False Ceiling Painting',
    description: 'Joint taping, gypsum putty leveling, and ultra-matte ceiling paints that eliminate harsh glare and highlight cove lighting.',
    actionText: 'Seamless Finish'
  },
  {
    id: 'texture',
    icon: 'fa-solid fa-layer-group',
    title: 'Texture Painting',
    description: 'Custom metallic stencils, rustic stucco, combed effects, marble finish, and feature wall designs curated for living spaces.',
    actionText: 'Designer Accent Walls'
  },
  {
    id: 'wooden-polish',
    icon: 'fa-solid fa-chair',
    title: 'Wooden Polish',
    description: 'Melamyne, PU polish, and natural French wax coats that revitalize doors, modular cabinets, wooden railings, and furniture.',
    actionText: 'Gloss & Matt Finishes'
  },
  {
    id: 'commercial',
    icon: 'fa-solid fa-building',
    title: 'Commercial Painting',
    description: 'Efficient painting solutions for offices, showrooms, schools, hospitals, and co-working hubs with night-shift execution options.',
    actionText: 'Minimal Downtime'
  },
  {
    id: 'putty-primer',
    icon: 'fa-solid fa-trowel',
    title: 'Wall Putty & Primer',
    description: 'Two-coat white cement putty base with machine sanding to eliminate minor wall undulations and optimize paint adhesion.',
    actionText: 'Ultra-smooth Base'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    tag: 'Residential Painting',
    location: 'Kharadi, Pune',
    title: '3 BHK Luxury Villa Repainting',
    description: 'Complete Asian Paints Royale Luxury interior emulsion with velvet accent walls and wooden polish.',
    imageUrl: projVillaImg
  },
  {
    id: 'proj-2',
    tag: 'Interior Painting',
    location: 'Magarpatta City, Pune',
    title: 'Modern Minimalist Living Room',
    description: 'Neutral warm grey scheme, seamless false ceiling putty work, and smudge-resistant washable walls.',
    imageUrl: projLivingImg
  },
  {
    id: 'proj-3',
    tag: 'Exterior Painting',
    location: 'Baner, Pune',
    title: 'Bungalow Weather-Shield Makeover',
    description: 'Apex Ultima weatherproof coating with anti-algae treatment and parapet crack repair.',
    imageUrl: projBungalowImg
  },
  {
    id: 'proj-4',
    tag: 'Office Painting',
    location: 'Viman Nagar, Pune',
    title: 'Tech Workspace Corporate Painting',
    description: 'Low-VOC acoustic coating executed over a single weekend with zero office operational disruption.',
    imageUrl: projOfficeImg
  },
  {
    id: 'proj-5',
    tag: 'Texture Painting',
    location: 'Hadapsar, Pune',
    title: 'Designer Metallic Feature Wall',
    description: 'Custom Royale Play metallic safari texture with spotlight enhancement for master bedroom.',
    imageUrl: projTextureImg
  },
  {
    id: 'proj-6',
    tag: 'Commercial Projects',
    location: 'Mundhwa, Pune',
    title: 'Commercial Retail Showroom',
    description: 'High-durability polyurethane wall enamels and architectural false ceiling high-contrast finishes.',
    imageUrl: projCommercialImg
  }


  
];

export const WORKFLOW_STEPS: StepItem[] = [
  {
    step: '01',
    title: '1. Contact Us',
    description: 'Give us a call or request a quotation online. We take down your property details and preferred schedule.',
    badge: 'Instant Callback',
    badgeIcon: 'fa-solid fa-phone'
  },
  {
    step: '02',
    title: '2. Free Site Visit',
    description: 'Our painting specialist visits your site with laser measurement tools, color shade cards, and moisture readers.',
    badge: 'Free & No Obligation',
    badgeIcon: 'fa-solid fa-house-user'
  },
  {
    step: '03',
    title: '3. Get Estimate',
    description: 'Receive a transparent, itemized quotation breaking down paint material options, labor, and exact completion timeline.',
    badge: 'Zero Hidden Costs',
    badgeIcon: 'fa-solid fa-receipt'
  },
  {
    step: '04',
    title: '4. Painting & Finishing',
    description: 'We mask all furniture, execute premium painting with dustless sanding, clean up thoroughly, and hand over your refreshed home.',
    badge: 'Spotless Clean Handover',
    badgeIcon: 'fa-solid fa-sparkles'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Suraj Biradar',
    location: 'Riverdale Heights, Kharadi',
    rating: 4.7,
    initials: 'RS',
    review: '"Excellent painting service in Kharadi, Pune! The team was polite, professional, and completed our 3BHK with clean, quality work. Highly recommended for home painting services!"'
  },
  {
    id: 'rev-2',
    name: 'Shubham Shivaji More',
    location: 'Amanora Park Town, Hadapsar',
    rating: 5,
    initials: 'AK',
    review: '"Very good painting service in Hadapsar, Pune. The pricing was affordable, the team was professional, and the quality of work was excellent. They completed the work neatly and on time. Highly recommended!."'
  },
  {
    id: 'rev-3',
    name: 'Vikas Patil',
    location: 'Konark Nagar, Viman Nagar',
    rating: 5,
    initials: 'VP',
    review: '"Competitive and honest quotation with zero hidden add-ons later. We also got our main door French polished along with texture work in the living room. Best painting contractors in Pune, highly recommended!"'
  },
  {
    id: 'rev-4',
    name: 'Aniket Jadhav',
    location: 'Konark Nagar, Viman Nagar',
    rating: 4.7,
    initials: 'VP',
    review: '"One of the best interior painting services in Pune. Excellent residential painting work with a professional team, quality finishing, and reliable service. Highly recommended for home painting in Pune!"'
  },

  {
    id: 'rev-6',
    name: 'Aniket Jadhav',
    location: 'Konark Nagar, Viman Nagar',
    rating: 4.5,
    initials: 'VP',
    review: '"Excellent painting service in Pune! The team was responsive, punctual, and professional. Great quality of work at a good value. Highly recommended for reliable painting services in Pune"'
  }
];

export const STATS_DATA: StatItem[] = [
  {
    number: '5+',
    label: 'Years of Experience',
    sublabel: 'Continuous excellence'
  },
  {
    number: '1,250+',
    label: 'Projects Completed',
    sublabel: 'Flats, villas & offices'
  },
  {
    number: '1,600+',
    label: 'Happy Clients',
    sublabel: '98% satisfaction rate'
  },
  {
    number: '25+',
    label: 'Service Areas',
    sublabel: 'Covering all of Pune'
  }
];

export const QA_PAIRS: QaPair[] = [
  {
    keywords: ['service', 'services', 'provide', 'offer'],
    reply: "We provide interior painting, exterior painting, waterproofing, texture painting, false ceiling painting, wooden polish, commercial painting, and wall putty preparation."
  },
  {
    keywords: ['area', 'areas', 'location', 'pune', 'serve', 'where'],
    reply: "We currently serve Pune and nearby areas including Mundhwa, Kharadi, Hadapsar, Viman Nagar, Wagholi, Magarpatta, Keshav Nagar, Baner, Wakad, and PCMC."
  },
  {
    keywords: ['visit', 'inspection', 'site visit', 'free visit'],
    reply: "Yes, we provide a 100% free site visit and estimate with wall moisture check across Pune without any obligation."
  },
  {
    keywords: ['quotation', 'estimate', 'cost', 'price', 'rate', 'how much'],
    reply: "To request a customized quotation, you can fill out our quotation form on this website or call us directly at 87936 00635."
  },
  {
    keywords: ['waterproof', 'waterproofing', 'seepage', 'damp', 'leakage'],
    reply: "Yes! We specialize in comprehensive terrace, parapet, bathroom, and wall seepage waterproofing with guaranteed polymer coatings."
  },
  {
    keywords: ['long', 'time', 'duration', 'days'],
    reply: "A standard 2BHK/3BHK interior paint job typically takes 3 to 5 working days with clean masking and dustless sanding."
  },
  {
    keywords: ['contact', 'call', 'number', 'phone', 'whatsapp'],
    reply: "You can reach us at 87936 00635 for instant phone support or WhatsApp us anytime."
  },
  {
    keywords: ['interior', 'exterior'],
    reply: "Yes, we handle both residential interior and exterior weatherproof painting for apartments, bungalows, and commercial buildings."
  }
];
