import { Band } from "@/Type/band"; // นำเข้า type Band จากไฟล์ band.ts

export const bands: Band[] = [ // ประกาศตัวแปร bands เป็น array ของ type Band
  {
    id: 1,
    name: "COCKTAIL",
    genre: "Alternative Rock / Orchestral",
    yearFormed: 2002,
    image: "/image/Band/cocktail.jpg",
    members: [
      { name: "โอม ปัณฑพล ประสารราชกิจ", image: "/image/Band/ohm.jpg", role: "Vocals" },
      { name: "ฟิลิปส์ เปรมสิริกรณ์", image: "/image/Band/drumsct.jpg", role: "Drums" },
      { name: "เชา ชวรัตน์ หรรษคุณาฒัย", image: "/image/Band/Guitarct.jpg", role: "Guitar" },
      { name: "ปาร์ค เกริกเกียรติ สว่างวงศ์", image: "/image/Band/Bassct.jpg", role: "Bass" },
    ],
    description: "วงดนตรีร็อกที่มีการผสมผสานเครื่องสายออเคสตราได้อย่างลงตัว",
  },
  {
    id: 2,
    name: "Big Ass",
    genre: "Hard Rock / Alternative Rock",
    yearFormed: 1997,
    image: "/image/Band/big-ass.jpg",
    members: [
      { name: "เจ๋ง เดชา โคนาโล", image: "/image/Band/Jba.jpg", role: "Vocals" },
      { name: "อ๊อฟ พูนศักดิ์ จตุระบุล", image: "/image/Band/Aba.jpg", role: "Lead Guitar" },
      { name: "หมู อภิชาติ พรมรักษา", image: "/image/Band/Mba.jpg", role: " Guitar" },
      { name: "โอ๊ค พงศพัศ ศรีพันธบุตร", image: "/image/Band/Oba.webp", role: "Guitar" },
      { name: "กบ ขจรเดช พรมรักษา", image: "/image/Band/Ggba.webp", role: "Bass" },
      
    ],
    description: "วงร็อกรุ่นใหญ่เจ้าของเพลงฮิตหนักแน่นและทรงพลัง",
  },
  {
    id: 3,
    name: "Only Monday",
    genre: "Alternative Rock",
    yearFormed: 2021,
    image: "/image/Band/onlymonday.jpg",
    members: [
      { name: "ธีร์ ทีปกร คำสุรีย์", image: "/image/Band/Tom.webp", role: "Vocals & Guitar" },
      { name: "โปรด วริศ สาระเขตต์ ", image: "/image/Band/pom.jpg", role: "Bass" },
      { name: "เฟรม คฑาวุธ ขำทอง", image: "/image/Band/fom.webp", role: "Drums" },
    ],
    description: "วงร็อกรุ่นใหม่ไฟแรงกับซาวด์ดนตรีที่เข้มข้นและเข้าถึงอารมณ์",
  },
];