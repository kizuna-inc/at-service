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
    device: "NVDA / VoiceOver",
    description: {
      en: "Need help configuring Thai speech rate, keyboard shortcut profile, and browser focus mode for daily work.",
      th: "ต้องการความช่วยเหลือในการตั้งค่าความเร็วเสียงภาษาไทย คีย์ลัด และโหมดโฟกัสบนเบราว์เซอร์สำหรับการใช้งานประจำวัน",
    },
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
    device: "Ergonomic Desk & Chair",
    description: {
      en: "On-site evaluation to adjust desk height, monitor arm angle, and wheelchair clearance for home workspace.",
      th: "ประเมินพื้นที่หน้างานเพื่อปรับความสูงโต๊ะ ขาจับจอภาพ และระยะเลี้ยวรถเข็นสำหรับพื้นที่ทำงานที่บ้าน",
    },
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
    device: "Focus 40 Blue",
    description: {
      en: "Completed hands-on orientation covering Bluetooth pairing, panning keys, and Thai braille grade 1 shortcuts.",
      th: "อบรมการใช้งานจริงเสร็จสิ้นแล้ว ครอบคลุมการเชื่อมต่อ Bluetooth ปุ่มเลื่อนบรรทัด และคีย์ลัดอักษรเบรลล์ภาษาไทย",
    },
  },
];
