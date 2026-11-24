import type {
  AdminDeviceItem,
  AdminOverviewData,
  AdminReportsData,
  AdminStaffItem,
  AdminUserItem,
} from "@/modules/interface/api/dashboard";

export const mock_admin_overview_db: AdminOverviewData = {
  stats: {
    totalUsers: "128",
    activeStaff: "14",
    openRequests: "19",
  },
  overviewItems: [
    {
      id: "f1b2c3d4-6666-4666-8666-000000000001",
      title: {
        en: "Assistive Device Inventory Sync",
        th: "ซิงก์คลังอุปกรณ์สิ่งอำนวยความสะดวก",
      },
      meta: {
        en: "48 devices active · 98% availability",
        th: "ใช้งาน 48 รายการ · พร้อมให้บริการ 98%",
      },
      status: "active",
    },
    {
      id: "f1b2c3d4-6666-4666-8666-000000000002",
      title: {
        en: "Pending Staff Assignments",
        th: "คำขอรอมอบหมายเจ้าหน้าที่",
      },
      meta: {
        en: "4 new requests awaiting review",
        th: "มีคำขอใหม่ 4 รายการรอตรวจสอบ",
      },
      status: "pending",
    },
    {
      id: "f1b2c3d4-6666-4666-8666-000000000003",
      title: {
        en: "Daily Accessibility Audit",
        th: "ตรวจสอบมาตรฐานการเข้าถึงประจำวัน",
      },
      meta: {
        en: "WCAG 2.2 AA check passed",
        th: "ผ่านเกณฑ์ WCAG 2.2 AA",
      },
      status: "completed",
    },
  ],
};

export const mock_admin_users_db: AdminUserItem[] = [
  {
    id: "f2b2c3d4-6666-4666-8666-000000000001",
    name: {
      en: "Somchai Jaidee",
      th: "สมชาย ใจดี",
    },
    username: "@somchai.j",
    meta: {
      en: "Wheelchair & Screen Reader · Joined 12 Jan 2026",
      th: "รถเข็นและโปรแกรมอ่านหน้าจอ · สมัคร 12 ม.ค. 2569",
    },
    status: "active",
  },
  {
    id: "f2b2c3d4-6666-4666-8666-000000000002",
    name: {
      en: "Thanakorn Chanphen",
      th: "ธนกร จันทร์เพ็ญ",
    },
    username: "@thanakorn.c",
    meta: {
      en: "Voice Input Kit · Joined 03 Feb 2026",
      th: "ชุดสั่งการด้วยเสียง · สมัคร 03 ก.พ. 2569",
    },
    status: "active",
  },
  {
    id: "f2b2c3d4-6666-4666-8666-000000000003",
    name: {
      en: "Anan Sukjai",
      th: "อนันต์ สุขใจ",
    },
    username: "@anan.s",
    meta: {
      en: "Large Print Display · Awaiting verification",
      th: "ชุดจอภาพอักษรขนาดใหญ่ · รอยืนยันตัวตน",
    },
    status: "pending",
  },
];

export const mock_admin_staff_db: AdminStaffItem[] = [
  {
    id: "f3b2c3d4-6666-4666-8666-000000000001",
    name: {
      en: "Nattapong Srisuk",
      th: "ณัฐพงศ์ ศรีสุข",
    },
    specialty: {
      en: "Screen Reader & Braille Calibration",
      th: "โปรแกรมอ่านหน้าจอและอักษรเบรลล์",
    },
    workload: {
      en: "3 active cases · Mon - Fri",
      th: "รับผิดชอบ 3 เคส · จันทร์ - ศุกร์",
    },
    available: true,
  },
  {
    id: "f3b2c3d4-6666-4666-8666-000000000002",
    name: {
      en: "Wipada Rattana",
      th: "วิภาดา รัตนะ",
    },
    specialty: {
      en: "Mobility & Wheelchair Repair",
      th: "อุปกรณ์ช่วยเคลื่อนที่และซ่อมรถเข็น",
    },
    workload: {
      en: "2 active cases · Mon - Fri",
      th: "รับผิดชอบ 2 เคส · จันทร์ - ศุกร์",
    },
    available: true,
  },
  {
    id: "f3b2c3d4-6666-4666-8666-000000000003",
    name: {
      en: "Kittisak Chaiya",
      th: "กิตติศักดิ์ ไชยะ",
    },
    specialty: {
      en: "Voice Control & Hardware Setup",
      th: "ระบบสั่งการด้วยเสียงและติดตั้งอุปกรณ์",
    },
    workload: {
      en: "6 active cases · Tue - Sat",
      th: "รับผิดชอบ 6 เคส · อังคาร - เสาร์",
    },
    available: false,
  },
];

export const mock_admin_devices_db: AdminDeviceItem[] = [
  {
    id: "f4b2c3d4-6666-4666-8666-000000000001",
    name: {
      en: "Braille Display Focus 40",
      th: "เครื่องแสดงผลอักษรเบรลล์ Focus 40",
    },
    category: {
      en: "Vision",
      th: "การมองเห็น",
    },
    meta: {
      en: "Unit #AT-104 · Assigned to Somchai J.",
      th: "รหัส #AT-104 · ใช้งานโดย สมชาย จ.",
    },
    status: "active",
  },
  {
    id: "f4b2c3d4-6666-4666-8666-000000000002",
    name: {
      en: "Electric Wheelchair Joystick Module",
      th: "ชุดจอยสติ๊กรถเข็นไฟฟ้า",
    },
    category: {
      en: "Mobility",
      th: "การเคลื่อนที่",
    },
    meta: {
      en: "Unit #AT-219 · In calibration lab",
      th: "รหัส #AT-219 · อยู่ระหว่างปรับเทียบ",
    },
    status: "inProgress",
  },
  {
    id: "f4b2c3d4-6666-4666-8666-000000000003",
    name: {
      en: "Large Print Tactile Keyboard",
      th: "คีย์บอร์ดปุ่มนูนอักษรขนาดใหญ่",
    },
    category: {
      en: "Input",
      th: "การป้อนข้อมูล",
    },
    meta: {
      en: "Unit #AT-308 · Pending intake check",
      th: "รหัส #AT-308 · รอตรวจสอบรับเข้าคลัง",
    },
    status: "pending",
  },
];

export const mock_admin_reports_db: AdminReportsData = {
  stats: {
    totalCases: "142",
    resolvedRate: "94%",
    avgResponse: "2.4h",
  },
  logs: [
    {
      id: "f5b2c3d4-6666-4666-8666-000000000001",
      title: {
        en: "Monthly Assistive Equipment Audit",
        th: "ตรวจนับคลังอุปกรณ์ประจำเดือน",
      },
      date: {
        en: "2026-11-23 · Automated Sync",
        th: "23 พ.ย. 2569 · ซิงก์อัตโนมัติ",
      },
      result: {
        en: "Passed",
        th: "ผ่าน",
      },
    },
    {
      id: "f5b2c3d4-6666-4666-8666-000000000002",
      title: {
        en: "Staff Workload Rebalance",
        th: "ปรับสมดุลภาระงานเจ้าหน้าที่",
      },
      date: {
        en: "2026-11-21 · Admin Ops",
        th: "21 พ.ย. 2569 · ฝ่ายปฏิบัติการ",
      },
      result: {
        en: "Applied",
        th: "ดำเนินการแล้ว",
      },
    },
    {
      id: "f5b2c3d4-6666-4666-8666-000000000003",
      title: {
        en: "WCAG 2.2 AA Compliance Scan",
        th: "สแกนมาตรฐาน WCAG 2.2 AA",
      },
      date: {
        en: "2026-11-18 · Accessibility",
        th: "18 พ.ย. 2569 · การเข้าถึงระบบ",
      },
      result: {
        en: "Verified",
        th: "ยืนยันแล้ว",
      },
    },
  ],
};
