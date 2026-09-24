export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  actionText: string;
}

export interface ProjectItem {
  id: string;
  tag: string;
  location: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  initials: string;
  review: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  badge: string;
  badgeIcon: string;
}

export interface StatItem {
  number: string;
  label: string;
  sublabel: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp?: string;
  showActions?: boolean;
  showCallButton?: boolean;
  showWhatsAppButton?: boolean;
  showQuoteButton?: boolean;
  quickReplies?: string[];
}

export interface QaPair {
  keywords: string[];
  reply: string;
  category?: string;
  quickReplies?: string[];
  showCallButton?: boolean;
  showWhatsAppButton?: boolean;
  showQuoteButton?: boolean;
}

export interface QuoteFormData {
  name: string;
  mobile: string;
  location: string;
  propertyType: string;
  area: string;
  service: string;
  requirements: string;
}
