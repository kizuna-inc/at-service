import type { HelpRequest } from "@/modules/interface/api/requests";

export const mock_requests_db: HelpRequest[] = [
  {
    id: "d4c5b2f8-7f6e-4b3a-9c8d-1e2f3a4b5c6d",
    title: {
      en: "Screen Reader Configuration",
      th: "ตั้งค่าโปรแกรมอ่านหน้าจอ",
    },
    category: "software",
    meta: {
      en: "Submitted 2 hours ago · Assigned to ณัฐธิดา ศิริพรชัย",
      th: "ส่งเมื่อ 2 ชั่วโมงที่แล้ว · ผู้รับผิดชอบ ณัฐธิดา ศิริพรชัย",
    },
    status: "pending",
    urgency: "normal",
  },
  {
    id: "e5d6c3a9-807f-4c4b-ad9e-2f3a4b5c6d7e",
    title: {
      en: "Home Desk Ergonomic Setup",
      th: "จัดโต๊ะทำงานเพื่อสุขภาพที่บ้าน",
    },
    category: "assessment",
    meta: {
      en: "Scheduled for tomorrow 10:00",
      th: "นัดหมายพรุ่งนี้ 10:00 น.",
    },
    status: "inProgress",
    urgency: "normal",
  },
  {
    id: "f6e7d4ba-9180-4d5c-beaf-3a4b5c6d7e8f",
    title: {
      en: "Braille Display Orientation",
      th: "แนะนำการใช้งานจอแสดงผลอักษรเบรลล์",
    },
    category: "training",
    meta: {
      en: "Completed on 18 Nov 2026",
      th: "เสร็จสิ้นเมื่อ 18 พ.ย. 2026",
    },
    status: "completed",
    urgency: "normal",
  },
];
