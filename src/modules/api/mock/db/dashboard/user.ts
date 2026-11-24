import type {
  HelperProfile,
  UserRepairData,
  UserReportsData,
  UserTrackingData,
} from "@/modules/interface/api/dashboard";

export const mock_user_tracking_db: UserTrackingData = {
  id: "a1b2c3d4-1111-4111-8111-000000000001",
  requestCode: "AT-026",
  status: "inProgress",
  updatedAt: {
    en: "13 Mar 2025 09:15",
    th: "13 มี.ค. 2568 09:15 น.",
  },
  device: {
    en: "Wheelchair",
    th: "รถเข็นวีลแชร์ (Wheelchair)",
  },
  issue: {
    en: "Left wheel stiff, cannot rotate",
    th: "ล้อซ้ายฝืด หมุนไม่ได้",
  },
  helper: {
    name: {
      en: "Wittaya Srisuk",
      th: "นายวิทยา ศรีสุข",
    },
    role: {
      en: "Medical Equipment Technician",
      th: "ช่างเทคนิคอุปกรณ์การแพทย์",
    },
    center: {
      en: "Central AT Service Center",
      th: "ศูนย์บริการ AT เขตกลาง",
    },
  },
  timelineSteps: [
    {
      id: "a1b2c3d4-1111-4111-8111-000000000011",
      number: 1,
      state: "done",
      title: {
        en: "Request Received",
        th: "รับเรื่องแล้ว",
      },
      time: {
        en: "12 Mar 2025 10:24",
        th: "12 มี.ค. 2568 10:24 น.",
      },
      detail: {
        en: "The system received your request and queued it for technician assignment.",
        th: "ระบบได้รับคำขอความช่วยเหลือเรียบร้อยแล้ว อยู่ระหว่างการมอบหมายผู้ให้ความช่วยเหลือ",
      },
    },
    {
      id: "a1b2c3d4-1111-4111-8111-000000000012",
      number: 2,
      state: "current",
      title: {
        en: "Under Review",
        th: "กำลังตรวจสอบ",
      },
      time: {
        en: "13 Mar 2025 09:15",
        th: "13 มี.ค. 2568 09:15 น.",
      },
      detail: {
        en: "Our team is reviewing the issue details and preparing an assistance schedule.",
        th: "ทีมงานกำลังตรวจสอบข้อมูลและประเมินการช่วยเหลือ จะแจ้งความคืบหน้าให้ทราบ",
      },
    },
    {
      id: "a1b2c3d4-1111-4111-8111-000000000013",
      number: 3,
      state: "upcoming",
      title: {
        en: "Assistance Scheduled",
        th: "นัดหมายช่วยเหลือ",
      },
      time: {
        en: "Pending",
        th: "รอดำเนินการ",
      },
      detail: {
        en: "A technician visit or repair appointment will be confirmed once review finishes.",
        th: "ทีมงานจะกำหนดวันและเวลานัดหมายหลังจากตรวจสอบข้อมูลเสร็จสิ้น",
      },
    },
    {
      id: "a1b2c3d4-1111-4111-8111-000000000014",
      number: 4,
      state: "upcoming",
      title: {
        en: "Completed",
        th: "เสร็จสิ้น",
      },
      time: {
        en: "Pending",
        th: "รอดำเนินการ",
      },
      detail: {
        en: "Repair and verification completed with your device ready for regular use.",
        th: "ดำเนินการซ่อมแซมและส่งมอบอุปกรณ์เรียบร้อยแล้ว",
      },
    },
  ],
  activityItems: [
    {
      id: "a1b2c3d4-1111-4111-8111-000000000021",
      status: "inProgress",
      time: {
        en: "13 Mar 2025 09:15",
        th: "13 มี.ค. 2568 09:15 น.",
      },
      title: {
        en: "Under Review",
        th: "กำลังตรวจสอบ",
      },
      description: {
        en: "The team is reviewing your details and evaluating support options. Updates will follow.",
        th: "ทีมงานกำลังตรวจสอบข้อมูลและประเมินการช่วยเหลือ จะแจ้งความคืบหน้าให้ทราบ",
      },
    },
    {
      id: "a1b2c3d4-1111-4111-8111-000000000022",
      status: "completed",
      time: {
        en: "12 Mar 2025 10:24",
        th: "12 มี.ค. 2568 10:24 น.",
      },
      title: {
        en: "Request Received",
        th: "รับเรื่องแล้ว",
      },
      description: {
        en: "Your assistance request was received and is awaiting helper assignment.",
        th: "ระบบได้รับคำขอความช่วยเหลือเรียบร้อยแล้ว อยู่ระหว่างการมอบหมายผู้ให้ความช่วยเหลือ",
      },
    },
    {
      id: "a1b2c3d4-1111-4111-8111-000000000023",
      status: "completed",
      time: {
        en: "12 Mar 2025 10:20",
        th: "12 มี.ค. 2568 10:20 น.",
      },
      title: {
        en: "Request Submitted",
        th: "ส่งคำขอ",
      },
      description: {
        en: "You submitted assistance request AT-026.",
        th: "คุณได้ส่งคำขอความช่วยเหลือ เลขที่ AT-026",
      },
    },
  ],
};

export const mock_user_repair_db: UserRepairData = {
  devices: [
    {
      id: "b1b2c3d4-2222-4222-8222-000000000001",
      name: {
        en: "Ergonomic Wireless Keyboard",
        th: "คีย์บอร์ดไร้สายเพื่อสุขภาพ",
      },
      meta: {
        en: "Serial #AT-KB-204 · Warranty active",
        th: "รหัส #AT-KB-204 · อยู่ในประกัน",
      },
    },
    {
      id: "b1b2c3d4-2222-4222-8222-000000000002",
      name: {
        en: "Power Wheelchair Controller",
        th: "ชุดควบคุมรถเข็นไฟฟ้า",
      },
      meta: {
        en: "Serial #AT-WC-089 · Next check in 14 days",
        th: "รหัส #AT-WC-089 · ตรวจเช็กครั้งถัดไปใน 14 วัน",
      },
    },
  ],
  tickets: [
    {
      id: "b1b2c3d4-2222-4222-8222-000000000011",
      title: {
        en: "Joystick Sensitivity Calibration",
        th: "ปรับเทียบความไวจอยสติ๊ก",
      },
      meta: {
        en: "Ticket #RM-104 · Technician assigned",
        th: "ใบงาน #RM-104 · มอบหมายช่างแล้ว",
      },
      status: "inProgress",
    },
    {
      id: "b1b2c3d4-2222-4222-8222-000000000012",
      title: {
        en: "Battery Health Inspection",
        th: "ตรวจสุขภาพแบตเตอรี่",
      },
      meta: {
        en: "Ticket #RM-098 · Passed inspection",
        th: "ใบงาน #RM-098 · ผ่านการตรวจสอบ",
      },
      status: "completed",
    },
  ],
};

export const mock_user_helpers_db: HelperProfile[] = [
  {
    id: "c1b2c3d4-3333-4333-8333-000000000001",
    name: {
      en: "ณัฐธิดา ศิริพรชัย",
      th: "ณัฐธิดา ศิริพรชัย",
    },
    specialty: {
      en: "Screen Reader & Low-Vision Specialist",
      th: "ผู้เชี่ยวชาญโปรแกรมอ่านหน้าจอและสายตาเลือนราง",
    },
    schedule: {
      en: "Mon - Fri · 09:00 - 16:30",
      th: "จันทร์ - ศุกร์ · 09:00 - 16:30 น.",
    },
    available: true,
  },
  {
    id: "c1b2c3d4-3333-4333-8333-000000000002",
    name: {
      en: "ปิยวัฒน์ เจริญสุข",
      th: "ปิยวัฒน์ เจริญสุข",
    },
    specialty: {
      en: "Mobility & Wheelchair Technician",
      th: "ช่างเทคนิคอุปกรณ์เคลื่อนที่และรถเข็น",
    },
    schedule: {
      en: "Tue - Sat · 08:30 - 17:00",
      th: "อังคาร - เสาร์ · 08:30 - 17:00 น.",
    },
    available: true,
  },
  {
    id: "c1b2c3d4-3333-4333-8333-000000000003",
    name: {
      en: "ศิริพร มณีรัตน์",
      th: "ศิริพร มณีรัตน์",
    },
    specialty: {
      en: "Voice Control & AAC Trainer",
      th: "ผู้ฝึกสอนการสั่งการด้วยเสียงและ AAC",
    },
    schedule: {
      en: "Mon - Thu · 10:00 - 16:00",
      th: "จันทร์ - พฤหัสบดี · 10:00 - 16:00 น.",
    },
    available: false,
  },
];

export const mock_user_reports_db: UserReportsData = {
  stats: {
    totalRequests: "8",
    completedServices: "6",
    hoursAssisted: "12.5",
  },
  history: [
    {
      id: "d1b2c3d4-4444-4444-8444-000000000001",
      title: {
        en: "Voice Input Assessment",
        th: "ประเมินการใช้งานสั่งการด้วยเสียง",
      },
      date: {
        en: "18 Nov 2026",
        th: "18 พ.ย. 2026",
      },
      result: {
        en: "Completed",
        th: "เสร็จสิ้น",
      },
    },
    {
      id: "d1b2c3d4-4444-4444-8444-000000000002",
      title: {
        en: "Battery Health Inspection",
        th: "ตรวจสุขภาพแบตเตอรี่",
      },
      date: {
        en: "10 Nov 2026",
        th: "10 พ.ย. 2026",
      },
      result: {
        en: "Passed",
        th: "ผ่านเกณฑ์",
      },
    },
    {
      id: "d1b2c3d4-4444-4444-8444-000000000003",
      title: {
        en: "Initial Accessibility Onboarding",
        th: "ปฐมนิเทศการใช้งานระบบการเข้าถึง",
      },
      date: {
        en: "02 Nov 2026",
        th: "02 พ.ย. 2026",
      },
      result: {
        en: "Verified",
        th: "ยืนยันแล้ว",
      },
    },
  ],
};
