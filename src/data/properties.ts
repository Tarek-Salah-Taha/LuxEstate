import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  price: number;
  location: { en: string; ar: string };
  type: "villa" | "apartment" | "penthouse" | "commercial";
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured: boolean;
  features: { en: string[]; ar: string[] };
}

export const properties: Property[] = [
  {
    id: "1",
    title: { en: "Skyline Penthouse", ar: "بنتهاوس سكاي لاين" },
    description: {
      en: "A breathtaking penthouse with panoramic city views, featuring floor-to-ceiling windows, premium finishes, and a private rooftop terrace. This exceptional residence offers the pinnacle of urban luxury living.",
      ar: "بنتهاوس خلاب بإطلالات بانورامية على المدينة، يتميز بنوافذ ممتدة من الأرض حتى السقف وتشطيبات فاخرة وتراس خاص على السطح."
    },
    price: 4500000,
    location: { en: "Dubai Marina, UAE", ar: "دبي مارينا، الإمارات" },
    type: "penthouse",
    beds: 4,
    baths: 5,
    sqft: 5200,
    image: property1,
    featured: true,
    features: {
      en: ["Private Pool", "Smart Home", "Concierge", "Gym", "Wine Cellar", "Home Theater"],
      ar: ["مسبح خاص", "منزل ذكي", "خدمة كونسيرج", "صالة رياضية", "قبو نبيذ", "سينما منزلية"]
    }
  },
  {
    id: "2",
    title: { en: "Sunset Terrace Villa", ar: "فيلا تراس الغروب" },
    description: {
      en: "An elegant penthouse terrace overlooking the city with outdoor dining areas surrounded by lush greenery. Perfect for those who appreciate sunset views and refined outdoor living.",
      ar: "تراس بنتهاوس أنيق يطل على المدينة مع مناطق طعام خارجية محاطة بالمساحات الخضراء. مثالي لمن يقدر مناظر الغروب والحياة الخارجية الراقية."
    },
    price: 3200000,
    location: { en: "Palm Jumeirah, UAE", ar: "نخلة جميرا، الإمارات" },
    type: "villa",
    beds: 5,
    baths: 6,
    sqft: 7500,
    image: property2,
    featured: true,
    features: {
      en: ["Garden", "Pool", "Beach Access", "Staff Quarters", "Smart Home", "Garage"],
      ar: ["حديقة", "مسبح", "وصول للشاطئ", "سكن للعمالة", "منزل ذكي", "مرآب"]
    }
  },
  {
    id: "3",
    title: { en: "Coastal Dream Residence", ar: "منزل الحلم الساحلي" },
    description: {
      en: "A stunning beachfront villa with contemporary white architecture set among palm trees. This property offers direct beach access and unobstructed ocean views from every room.",
      ar: "فيلا ساحلية مذهلة بعمارة بيضاء معاصرة بين أشجار النخيل. يوفر هذا العقار وصولاً مباشراً للشاطئ وإطلالات محيطية من كل غرفة."
    },
    price: 6800000,
    location: { en: "Jumeirah Beach, UAE", ar: "شاطئ جميرا، الإمارات" },
    type: "villa",
    beds: 6,
    baths: 7,
    sqft: 9200,
    image: property3,
    featured: true,
    features: {
      en: ["Private Beach", "Infinity Pool", "Home Cinema", "Wine Room", "Spa", "Elevator"],
      ar: ["شاطئ خاص", "مسبح إنفينيتي", "سينما منزلية", "غرفة نبيذ", "سبا", "مصعد"]
    }
  },
  {
    id: "4",
    title: { en: "Golden Manor Kitchen", ar: "مطبخ القصر الذهبي" },
    description: {
      en: "A luxury apartment featuring exquisite interior design with marble countertops and gold fixtures. Every detail is crafted to perfection in this premium residence.",
      ar: "شقة فاخرة تتميز بتصميم داخلي رائع مع أسطح رخامية وتجهيزات ذهبية. كل التفاصيل مصنوعة بإتقان في هذا المسكن المتميز."
    },
    price: 2100000,
    location: { en: "Downtown Dubai, UAE", ar: "وسط دبي، الإمارات" },
    type: "apartment",
    beds: 3,
    baths: 3,
    sqft: 3400,
    image: property4,
    featured: false,
    features: {
      en: ["Designer Kitchen", "Marble Floors", "Balcony", "Parking", "Security", "Pool"],
      ar: ["مطبخ مصمم", "أرضيات رخامية", "شرفة", "موقف سيارات", "أمن", "مسبح"]
    }
  },
  {
    id: "5",
    title: { en: "Crystal Tower Office", ar: "مكتب برج كريستال" },
    description: {
      en: "A premium commercial space in a modern glass building surrounded by landscaped gardens. Ideal for companies seeking prestigious business addresses.",
      ar: "مساحة تجارية فاخرة في مبنى زجاجي حديث محاط بحدائق منسقة. مثالي للشركات الباحثة عن عناوين أعمال مرموقة."
    },
    price: 8500000,
    location: { en: "Business Bay, UAE", ar: "الخليج التجاري، الإمارات" },
    type: "commercial",
    beds: 0,
    baths: 4,
    sqft: 12000,
    image: property5,
    featured: false,
    features: {
      en: ["Meeting Rooms", "Reception", "Parking", "24/7 Security", "Cafeteria", "Rooftop"],
      ar: ["قاعات اجتماعات", "استقبال", "موقف سيارات", "أمن ٢٤/٧", "كافتيريا", "سطح"]
    }
  },
  {
    id: "6",
    title: { en: "Mountain View Estate", ar: "عقار إطلالة الجبل" },
    description: {
      en: "A magnificent villa with a spectacular swimming pool and breathtaking mountain views. Mediterranean-style architecture blends seamlessly with the natural landscape.",
      ar: "فيلا رائعة مع مسبح مذهل وإطلالات جبلية خلابة. العمارة المتوسطية تمتزج بسلاسة مع المناظر الطبيعية."
    },
    price: 5200000,
    location: { en: "Hatta, UAE", ar: "حتا، الإمارات" },
    type: "villa",
    beds: 7,
    baths: 8,
    sqft: 11000,
    image: property6,
    featured: false,
    features: {
      en: ["Mountain Views", "Olympic Pool", "Tennis Court", "BBQ Area", "Garden", "Staff House"],
      ar: ["إطلالات جبلية", "مسبح أولمبي", "ملعب تنس", "منطقة شواء", "حديقة", "سكن عمالة"]
    }
  },
];
