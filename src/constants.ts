import { Search, Users, FileText, Box, Globe, ShieldCheck, LayoutGrid, Calendar, DollarSign, Headset, Award, Clock } from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why" },
  { name: "Contact Us", href: "#contact" },
];

export const SERVICES = [
  {
    icon: Search,
    title: "Product Sourcing",
    desc: "We find the best products that match your business needs."
  },
  {
    icon: Users,
    title: "Supplier Verification",
    desc: "We verify suppliers to ensure reliability and product quality."
  },
  {
    icon: FileText,
    title: "Quality Inspection",
    desc: "We conduct strict quality checks before shipment for your peace of mind."
  },
  {
    icon: Box,
    title: "Order Management",
    desc: "We handle your orders efficiently from production to delivery."
  },
  {
    icon: Globe,
    title: "Shipping & Logistics",
    desc: "We manage shipping and logistics to deliver your products safely."
  }
];

export const BENEFITS = [
  { 
    icon: Users, 
    title: "Professional Team", 
    desc: "Experienced and dedicated team to serve you better." 
  },
  { 
    icon: ShieldCheck, 
    title: "Quality Assurance", 
    desc: "We ensure the best quality products for your business." 
  },
  { 
    icon: LayoutGrid, 
    title: "Wide Product Range", 
    desc: "Access to a wide range of products and industries." 
  },
  { 
    icon: Calendar, 
    title: "On-Time Delivery", 
    desc: "Timely delivery is our commitment." 
  },
  { 
    icon: DollarSign, 
    title: "Cost Effective", 
    desc: "We help you save cost and maximize your profit." 
  },
  { 
    icon: Headset, 
    title: "24/7 Support", 
    desc: "We are here to support you anytime." 
  }
];

export const TRUST_BADGES = [
  { icon: ShieldCheck, text: "Trusted & Reliable \nSourcing Partner" },
  { icon: Award, text: "High-Quality \nProducts" },
  { icon: DollarSign, text: "Competitive \nPricing" },
  { icon: Clock, text: "On-Time \nDelivery" }
];
