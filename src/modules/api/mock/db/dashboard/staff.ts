import type {
  StaffOverviewData,
  StaffQueueItem,
  StaffRepairItem,
  StaffReportsData,
  StaffScheduleItem,
} from "@/modules/interface/api/dashboard";

export const mock_staff_queue_db: StaffQueueItem[] = [
  {
    id: "e1b2c3d4-5555-4555-8555-000000000001",
    title: {
      en: "ธนกร จันทร์เพ็ญ · Screen Reader Calibration",
      th: "ธนกร จันทร์เพ็ญ · ปรับเทียบโปรแกรมอ่านหน้าจอ",
    },
    meta: {
      en: "Priority: Normal · Requested 30m ago",
      th: "ความสำคัญ: ปกติ · ส่งคำขอเมื่อ 30 นาทีที่แล้ว",
    },
    status: "pending",
    requesterName: {
      en: "Thanakorn Chanphen",
      th: "ธนกร จันทร์เพ็ญ",
    },
    requesterId: "f2b2c3d4-6666-4666-8666-000000000002",
    priority: "normal",
    device: {
      en: "Voice Input Kit & Screen Reader (#AT-205)",
      th: "ชุดสั่งการด้วยเสียงและโปรแกรมอ่านหน้าจอ (#AT-205)",
    },
    location: {
      en: "Room B2 · Assistive Tech Lab",
      th: "ห้อง B2 · ศูนย์เทคโนโลยีสิ่งอำนวยความสะดวก",
    },
    requestedAt: {
      en: "26 Nov 2026 · 11:15",
      th: "26 พ.ย. 2569 · 11:15 น.",
    },
    description: {
      en: "User reported screen reader voice feedback lagging during coursework. Needs speech rate calibration and microphone profile check.",
      th: "ผู้ใช้งานแจ้งว่าเสียงอ่านหน้าจอหน่วงระหว่างเรียนออนไลน์ ต้องการปรับเทียบความเร็วเสียงและตรวจสอบโปรไฟล์ไมโครโฟน",
    },
  },
  {
    id: "e1b2c3d4-5555-4555-8555-000000000002",
    title: {
      en: "สมหญิง ใจดี · Wheelchair Joystick Check",
      th: "สมหญิง ใจดี · ตรวจเช็กจอยสติ๊กรถเข็นไฟฟ้า",
    },
    meta: {
      en: "Assigned to you · Due today 15:00",
      th: "มอบหมายให้คุณ · กำหนดส่งวันนี้ 15:00",
    },
    status: "inProgress",
    requesterName: {
      en: "Somying Jaidee",
      th: "สมหญิง ใจดี",
    },
    priority: "urgent",
    device: {
      en: "Power Wheelchair Joystick (#AT-089)",
      th: "จอยสติ๊กรถเข็นไฟฟ้า (#AT-089)",
    },
    location: {
      en: "On-site visit · Bang Khen",
      th: "ลงพื้นที่ · เขตบางเขน",
    },
    requestedAt: {
      en: "26 Nov 2026 · 09:40",
      th: "26 พ.ย. 2569 · 09:40 น.",
    },
    description: {
      en: "Left-turn joystick drift observed during indoor movement. Scheduled for bench diagnostics and deadzone recalibration before 15:00.",
      th: "พบอาการจอยสติ๊กเลี้ยวซ้ายคลาดเคลื่อนขณะใช้งานในอาคาร กำหนดตรวจเช็กและปรับเทียบค่าศูนย์ก่อนเวลา 15:00 น.",
    },
  },
  {
    id: "e1b2c3d4-5555-4555-8555-000000000003",
    title: {
      en: "อนันต์ สุขใจ · Large Print Display Kit",
      th: "อนันต์ สุขใจ · ชุดจอภาพอักษรขนาดใหญ่",
    },
    meta: {
      en: "Handover verified · 11:20",
      th: "ยืนยันการส่งมอบแล้ว · 11:20",
    },
    status: "completed",
    requesterName: {
      en: "Anan Sukjai",
      th: "อนันต์ สุขใจ",
    },
    requesterId: "f2b2c3d4-6666-4666-8666-000000000003",
    priority: "normal",
    device: {
      en: "Large Print Display Kit (#AT-308)",
      th: "ชุดจอภาพอักษรขนาดใหญ่ (#AT-308)",
    },
    location: {
      en: "Front Desk · Service Center",
      th: "เคาน์เตอร์บริการ · ศูนย์ช่วยเหลือ",
    },
    requestedAt: {
      en: "26 Nov 2026 · 08:50",
      th: "26 พ.ย. 2569 · 08:50 น.",
    },
    description: {
      en: "Completed intake check, contrast profile setup, and keyboard switch verification. Handover signed off by user at front desk.",
      th: "ตรวจรับอุปกรณ์ ตั้งค่าโปรไฟล์ความคมชัด และทดสอบปุ่มกดนูนเสร็จสิ้น ผู้ใช้งานเซ็นรับมอบเรียบร้อยแล้ว",
    },
  },
];

export const mock_staff_overview_db: StaffOverviewData = {
  stats: {
    pendingQueue: "4",
    inProgress: "6",
    completedToday: "9",
  },
  queue: mock_staff_queue_db,
};

export const mock_staff_repairs_db: StaffRepairItem[] = [
  {
    id: "e2b2c3d4-5555-4555-8555-000000000001",
    title: {
      en: "Braille Cell Alignment",
      th: "ปรับแนวหมุดอักษรเบรลล์",
    },
    device: {
      en: "Focus 40 · #AT-104",
      th: "Focus 40 · #AT-104",
    },
    meta: {
      en: "Ticket #RM-201 · Reported 2 hours ago",
      th: "ใบงาน #RM-201 · แจ้งเมื่อ 2 ชั่วโมงที่แล้ว",
    },
    status: "pending",
  },
  {
    id: "e2b2c3d4-5555-4555-8555-000000000002",
    title: {
      en: "Wheelchair Joystick Calibration",
      th: "ปรับเทียบจอยสติ๊กรถเข็นไฟฟ้า",
    },
    device: {
      en: "Power Chair · #AT-089",
      th: "รถเข็นไฟฟ้า · #AT-089",
    },
    meta: {
      en: "Ticket #RM-198 · Bench diagnostics",
      th: "ใบงาน #RM-198 · กำลังตรวจเช็กที่ห้องปฏิบัติการ",
    },
    status: "inProgress",
  },
  {
    id: "e2b2c3d4-5555-4555-8555-000000000003",
    title: {
      en: "Tactile Key Switch Replacement",
      th: "เปลี่ยนสวิตช์ปุ่มกดนูน",
    },
    device: {
      en: "Large Print Keyboard · #AT-308",
      th: "คีย์บอร์ดอักษรใหญ่ · #AT-308",
    },
    meta: {
      en: "Ticket #RM-190 · Ready for pickup",
      th: "ใบงาน #RM-190 · พร้อมส่งมอบ",
    },
    status: "completed",
  },
];

export const mock_staff_schedule_db: StaffScheduleItem[] = [
  {
    id: "e3b2c3d4-5555-4555-8555-000000000001",
    title: {
      en: "ธนกร จันทร์เพ็ญ · Screen Reader Fitting",
      th: "ธนกร จันทร์เพ็ญ · ติดตั้งโปรแกรมอ่านหน้าจอ",
    },
    time: {
      en: "Today · 13:30 - 14:30",
      th: "วันนี้ · 13:30 - 14:30 น.",
    },
    meta: {
      en: "Room B2 · Assistive Tech Lab",
      th: "ห้อง B2 · ศูนย์เทคโนโลยีสิ่งอำนวยความสะดวก",
    },
    status: "inProgress",
  },
  {
    id: "e3b2c3d4-5555-4555-8555-000000000002",
    title: {
      en: "สมหญิง ใจดี · Home Ergonomic Check",
      th: "สมหญิง ใจดี · ประเมินโต๊ะทำงานที่บ้าน",
    },
    time: {
      en: "Tomorrow · 10:00 - 11:00",
      th: "พรุ่งนี้ · 10:00 - 11:00 น.",
    },
    meta: {
      en: "On-site visit · Bang Khen",
      th: "ลงพื้นที่ · เขตบางเขน",
    },
    status: "pending",
  },
  {
    id: "e3b2c3d4-5555-4555-8555-000000000003",
    title: {
      en: "อนันต์ สุขใจ · Display Kit Handover",
      th: "อนันต์ สุขใจ · ส่งมอบชุดจอภาพอักษรใหญ่",
    },
    time: {
      en: "Today · 10:30 - 11:20",
      th: "วันนี้ · 10:30 - 11:20 น.",
    },
    meta: {
      en: "Front Desk · Signed off",
      th: "เคาน์เตอร์บริการ · เซ็นรับแล้ว",
    },
    status: "completed",
  },
];

export const mock_staff_reports_db: StaffReportsData = {
  stats: {
    completedCases: "28",
    avgTurnaround: "1.8h",
    satisfaction: "4.9/5",
  },
  logs: [
    {
      id: "e4b2c3d4-5555-4555-8555-000000000001",
      title: {
        en: "Large Print Display Kit Handover",
        th: "ส่งมอบชุดจอภาพอักษรขนาดใหญ่",
      },
      date: {
        en: "2026-11-24 · อนันต์ สุขใจ",
        th: "24 พ.ย. 2569 · อนันต์ สุขใจ",
      },
      result: {
        en: "Completed",
        th: "เสร็จสิ้น",
      },
    },
    {
      id: "e4b2c3d4-5555-4555-8555-000000000002",
      title: {
        en: "Voice Input Microphone Calibration",
        th: "ปรับเทียบไมโครโฟนสั่งการด้วยเสียง",
      },
      date: {
        en: "2026-11-22 · สมชาย ใจดี",
        th: "22 พ.ย. 2569 · สมชาย ใจดี",
      },
      result: {
        en: "Completed",
        th: "เสร็จสิ้น",
      },
    },
    {
      id: "e4b2c3d4-5555-4555-8555-000000000003",
      title: {
        en: "Ergonomic Keyboard Setup",
        th: "ติดตั้งคีย์บอร์ดเพื่อสุขภาพ",
      },
      date: {
        en: "2026-11-20 · กัญญา รัตนากร",
        th: "20 พ.ย. 2569 · กัญญา รัตนากร",
      },
      result: {
        en: "Verified",
        th: "ยืนยันแล้ว",
      },
    },
  ],
};
