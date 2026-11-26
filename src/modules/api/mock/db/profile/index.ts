import type { UserProfile } from "@/modules/interface/api/profile";

export const mock_profiles_db: UserProfile[] = [
  {
    id: "f2b2c3d4-6666-4666-8666-000000000002",
    username: "user",
    role: "user",
    status: "active",
    name: {
      en: "Thanakorn Chanphen",
      th: "ธนกร จันทร์เพ็ญ",
    },
    email: "thanakorn.c@atcare.example.org",
    phone: "081-234-5678",
    address: {
      en: "42/18 Phahonyothin Rd, Chatuchak, Bangkok 10900",
      th: "42/18 ถนนพหลโยธิน เขตจตุจักร กรุงเทพมหานคร 10900",
    },
    department: {
      en: "Faculty of Information Technology · Student Member",
      th: "คณะเทคโนโลยีสารสนเทศ · สมาชิกนักศึกษา",
    },
    bio: {
      en: "Uses voice input and screen reader software for daily coursework and remote learning.",
      th: "ใช้งานชุดสั่งการด้วยเสียงและโปรแกรมอ่านหน้าจอสำหรับการเรียนการสอนประจำวัน",
    },
    emergencyContact: {
      name: {
        en: "Supaporn Chanphen",
        th: "สุภาพร จันทร์เพ็ญ",
      },
      relation: {
        en: "Mother",
        th: "มารดา",
      },
      phone: "089-876-5432",
    },
    assistiveNeeds: [
      {
        en: "Voice Control Setup",
        th: "การตั้งค่าระบบสั่งการด้วยเสียง",
      },
      {
        en: "Screen Reader Support",
        th: "การสนับสนุนโปรแกรมอ่านหน้าจอ",
      },
    ],
    assignedDevices: [
      {
        code: "#AT-205",
        name: {
          en: "Voice Input Kit",
          th: "ชุดสั่งการด้วยเสียง",
        },
      },
      {
        code: "#AT-112",
        name: {
          en: "Ergonomic Keyboard",
          th: "คีย์บอร์ดเพื่อสุขภาพ",
        },
      },
    ],
  },
  {
    id: "f2b2c3d4-6666-4666-8666-000000000001",
    username: "somchai.j",
    role: "user",
    status: "active",
    name: {
      en: "Somchai Jaidee",
      th: "สมชาย ใจดี",
    },
    email: "somchai.j@atcare.example.org",
    phone: "082-345-6789",
    address: {
      en: "19/4 Ngamwongwan Rd, Bang Khen, Bangkok 10220",
      th: "19/4 ถนนงามวงศ์วาน เขตบางเขน กรุงเทพมหานคร 10220",
    },
    department: {
      en: "Community Care Member · North Bangkok",
      th: "สมาชิกบริการชุมชน · กรุงเทพฯ เหนือ",
    },
    bio: {
      en: "Requires mobility assistance and braille display calibration for home workstation use.",
      th: "ต้องการการดูแลอุปกรณ์ช่วยเคลื่อนที่และการปรับเทียบอักษรเบรลล์สำหรับการใช้งานที่บ้าน",
    },
    emergencyContact: {
      name: {
        en: "Malee Jaidee",
        th: "มาลี ใจดี",
      },
      relation: {
        en: "Spouse",
        th: "คู่สมรส",
      },
      phone: "086-112-3344",
    },
    assistiveNeeds: [
      {
        en: "Mobility & Wheelchair Care",
        th: "การดูแลรถเข็นและอุปกรณ์ช่วยเคลื่อนที่",
      },
      {
        en: "Braille Display Support",
        th: "การสนับสนุนเครื่องแสดงผลอักษรเบรลล์",
      },
    ],
    assignedDevices: [
      {
        code: "#AT-104",
        name: {
          en: "Braille Display Focus 40",
          th: "เครื่องแสดงผลอักษรเบรลล์ Focus 40",
        },
      },
      {
        code: "#AT-026",
        name: {
          en: "Power Wheelchair",
          th: "รถเข็นไฟฟ้า",
        },
      },
    ],
  },
  {
    id: "f2b2c3d4-6666-4666-8666-000000000003",
    username: "anan.s",
    role: "user",
    status: "pending",
    name: {
      en: "Anan Sukjai",
      th: "อนันต์ สุขใจ",
    },
    email: "anan.s@atcare.example.org",
    phone: "083-456-7890",
    address: {
      en: "88 Ramkhamhaeng Rd, Bang Kapi, Bangkok 10240",
      th: "88 ถนนรามคำแหง เขตบางกะปิ กรุงเทพมหานคร 10240",
    },
    department: {
      en: "New Member · Pending Intake Verification",
      th: "สมาชิกใหม่ · รอยืนยันข้อมูลรับบริการ",
    },
    bio: {
      en: "Applied for high-contrast display and tactile keyboard kit for reading documents.",
      th: "ยื่นคำขอชุดจอภาพความคมชัดสูงและคีย์บอร์ดปุ่มนูนสำหรับการอ่านเอกสาร",
    },
    emergencyContact: {
      name: {
        en: "Prasert Sukjai",
        th: "ประเสริฐ สุขใจ",
      },
      relation: {
        en: "Brother",
        th: "พี่ชาย",
      },
      phone: "084-555-7788",
    },
    assistiveNeeds: [
      {
        en: "Large Print & High Contrast",
        th: "อักษรขนาดใหญ่และความคมชัดสูง",
      },
    ],
    assignedDevices: [],
  },
  {
    id: "f2b2c3d4-6666-4666-8666-000000000004",
    username: "staff",
    role: "staff",
    status: "active",
    name: {
      en: "Natthida Siripornchai",
      th: "ณัฐธิดา ศิริพรชัย",
    },
    email: "natthida.s@atcare.example.org",
    phone: "02-123-4568",
    address: {
      en: "AT Care Center, Building B, Room 204",
      th: "ศูนย์บริการ AT Care อาคาร B ห้อง 204",
    },
    department: {
      en: "Assistive Technology & Repair Specialist",
      th: "ผู้เชี่ยวชาญเทคโนโลยีสิ่งอำนวยความสะดวกและซ่อมบำรุง",
    },
    bio: {
      en: "Handles screen reader setups, home ergonomic visits, and assistive device diagnostics.",
      th: "ดูแลการติดตั้งโปรแกรมอ่านหน้าจอ การลงพื้นที่ประเมิน และการตรวจเช็กอุปกรณ์สิ่งอำนวยความสะดวก",
    },
  },
  {
    id: "f2b2c3d4-6666-4666-8666-000000000005",
    username: "admin",
    role: "admin",
    status: "active",
    name: {
      en: "Kittipong Watthanakul",
      th: "กิตติพงศ์ วัฒนากูล",
    },
    email: "kittipong.w@atcare.example.org",
    phone: "02-123-4560",
    address: {
      en: "AT Care Headquarters, Floor 3",
      th: "สำนักงานใหญ่ AT Care ชั้น 3",
    },
    department: {
      en: "Service Operations & Accessibility Governance",
      th: "ฝ่ายบริหารปฏิบัติการและมาตรฐานการเข้าถึง",
    },
    bio: {
      en: "Oversees user onboarding, staff workload allocation, and WCAG 2.2 AA compliance audits.",
      th: "กำกับดูแลการลงทะเบียนผู้ใช้งาน การจัดสรรภาระงานเจ้าหน้าที่ และมาตรฐาน WCAG 2.2 AA",
    },
  },
];
