export interface QuickFaq {
  question: string;
  answer: string;
  keywords: string[];
}

export const QUICK_QUESTIONS: QuickFaq[] = [
  {
    question: 'What services do you provide?',
    answer: 'We provide Interior Painting, Exterior Painting, Waterproofing, False Ceiling, Texture Painting and Wooden Polish services.',
    keywords: ['service', 'services', 'interior', 'exterior', 'texture', 'ceiling', 'polish', 'paint', 'what do you do', 'work']
  },
  {
    question: 'Which areas do you serve?',
    answer: 'We provide painting services across Pune, including Kharadi, Mundhwa, Hadapsar, Viman Nagar, Magarpatta, Wagholi, Keshav Nagar, Kothrud, Wakad, Baner, Hinjewadi and surrounding areas.',
    keywords: ['area', 'areas', 'location', 'locations', 'pune', 'kharadi', 'mundhwa', 'hadapsar', 'viman', 'magarpatta', 'wagholi', 'keshav', 'kothrud', 'wakad', 'baner', 'hinjewadi', 'serve', 'where']
  },
  {
    question: 'Do you provide a free quotation?',
    answer: 'Yes. You can contact us for a quotation and discuss your painting requirements.',
    keywords: ['quotation', 'quote', 'free quote', 'estimate', 'price', 'pricing', 'cost', 'rate', 'charges', 'free']
  },
  {
    question: 'How long does painting take?',
    answer: 'Painting duration depends on the size and condition of the property and the type of work required. Contact us for an estimate based on your project.',
    keywords: ['long', 'duration', 'time', 'days', 'period', 'schedule', 'how much time', 'how long']
  },
  {
    question: 'Do you do waterproofing?',
    answer: 'Yes. We provide waterproofing solutions along with professional painting services.',
    keywords: ['waterproof', 'waterproofing', 'damp', 'seepage', 'leak', 'leakage', 'moisture', 'crack']
  },
  {
    question: 'How can I contact you?',
    answer: 'You can call us at +91 87936 00635 or contact us on WhatsApp for your painting requirements.',
    keywords: ['contact', 'call', 'phone', 'whatsapp', 'reach', 'number', 'mobile', 'talk', 'address', 'email']
  }
];

export const INITIAL_BOT_MESSAGE = `Hi! 👋 Welcome to Soham Painting Services.\nHow can I help you today?`;

export const FALLBACK_ANSWER = `You can call us directly at +91 87936 00635 or message us on WhatsApp for any painting or waterproofing inquiries. You can also pick any of the common questions below.`;
