import type { KnowledgeArticle } from "@/modules/interface/api/knowledge";

export const mock_knowledge_db: KnowledgeArticle[] = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    badgeClass: "bg-a11y-screenreader text-text-inverse",
    updatedAt: "2026-11-18",
    readMinutes: 4,
    tag: {
      en: "Screen Reader",
      th: "โปรแกรมอ่านหน้าจอ",
    },
    title: {
      en: "Getting Started with Screen Readers",
      th: "เริ่มต้นใช้งานโปรแกรมอ่านหน้าจอ",
    },
    summary: {
      en: "Essential keyboard shortcuts for NVDA and VoiceOver.",
      th: "คีย์ลัดสำคัญสำหรับ NVDA และ VoiceOver",
    },
    sections: [
      {
        heading: {
          en: "1. Basic Navigation Keys",
          th: "1. ปุ่มนำทางพื้นฐาน",
        },
        body: {
          en: "Use Tab and Shift+Tab to jump between links, buttons, and form inputs. Press Enter or Space to activate the focused control.",
          th: "ใช้ปุ่ม Tab และ Shift+Tab เพื่อเลื่อนไปยังลิงก์ ปุ่ม และช่องกรอกข้อมูล กด Enter หรือ Space เพื่อเลือกใช้งานรายการนั้น",
        },
      },
      {
        heading: {
          en: "2. Heading & Landmark Shortcuts",
          th: "2. คีย์ลัดสำหรับหัวข้อและโครงสร้างหน้า",
        },
        body: {
          en: "In NVDA, press H to skip across headings and D to cycle page landmarks. In VoiceOver on macOS, open the Rotor with VO+U to browse headings quickly.",
          th: "ใน NVDA กดปุ่ม H เพื่อข้ามไปยังหัวข้อถัดไป และปุ่ม D เพื่อสลับไปยังส่วนหลักของหน้า สำหรับ VoiceOver บน macOS ใช้ปุ่ม VO+U เพื่อเปิด Rotor เลือกหัวข้อได้อย่างรวดเร็ว",
        },
      },
      {
        heading: {
          en: "3. Adjusting Speech Rate",
          th: "3. การปรับความเร็วเสียงพูด",
        },
        body: {
          en: "Slow down speech while learning a new app, then raise the speed gradually using your screen reader settings menu.",
          th: "เริ่มต้นด้วยความเร็วเสียงระดับปานกลางเมื่อใช้งานระบบใหม่ จากนั้นค่อยเพิ่มความเร็วในเมนูตั้งค่าของโปรแกรมอ่านหน้าจอตามความถนัด",
        },
      },
    ],
  },
  {
    id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    badgeClass: "bg-a11y-textsize text-text-inverse",
    updatedAt: "2026-11-15",
    readMinutes: 3,
    tag: {
      en: "Visual",
      th: "การมองเห็น",
    },
    title: {
      en: "Customizing Text Size & High Contrast",
      th: "ปรับขนาดตัวอักษรและความต่างสีสูง",
    },
    summary: {
      en: "Adjust display readability and WCAG contrast presets.",
      th: "ตั้งค่าการแสดงผลให้อ่านง่ายตามมาตรฐาน WCAG",
    },
    sections: [
      {
        heading: {
          en: "1. Using the Accessibility Menu",
          th: "1. การใช้งานเมนูช่วยการเข้าถึง",
        },
        body: {
          en: "Open the accessibility icon in the top navigation bar at any time to scale text up or toggle high-contrast mode across every dashboard view.",
          th: "เปิดเมนูช่วยการเข้าถึงที่แถบนำทางด้านบนได้ตลอดเวลา เพื่อปรับขนาดตัวอักษรหรือเปิดโหมดความต่างสีสูงในทุกหน้าของระบบ",
        },
      },
      {
        heading: {
          en: "2. Browser Zoom & OS Presets",
          th: "2. การซูมผ่านเบราว์เซอร์และการตั้งค่าระบบ",
        },
        body: {
          en: "Combine in-app text scaling with browser zoom (Ctrl/Cmd +) for comfortable reading without clipping buttons or tables.",
          th: "สามารถใช้ร่วมกับการซูมของเบราว์เซอร์ (Ctrl/Cmd +) เพื่อขยายหน้าจอให้อ่านสบายตาโดยไม่ทำให้ปุ่มหรือตารางทับซ้อนกัน",
        },
      },
    ],
  },
  {
    id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
    badgeClass: "bg-a11y-voice text-text-inverse",
    updatedAt: "2026-11-12",
    readMinutes: 5,
    tag: {
      en: "Voice Control",
      th: "สั่งการด้วยเสียง",
    },
    title: {
      en: "Voice Navigation Quick Reference",
      th: "คู่มือคำสั่งเสียงเบื้องต้น",
    },
    summary: {
      en: "Common spoken commands for hands-free browsing.",
      th: "คำสั่งเสียงยอดนิยมสำหรับการใช้งานแบบไม่ต้องใช้มือ",
    },
    sections: [
      {
        heading: {
          en: "1. Activating Controls by Name",
          th: "1. สั่งเปิดปุ่มและเมนูตามชื่อ",
        },
        body: {
          en: "Speak the visible label on any button or sidebar link, such as 'Click Help Requests' or 'Open Settings', to navigate without a mouse.",
          th: "ออกเสียงตามข้อความที่ปรากฏบนปุ่มหรือเมนู เช่น 'Click Help Requests' หรือ 'Open Settings' เพื่อเข้าถึงหน้าต่าง ๆ ได้โดยไม่ต้องใช้เมาส์",
        },
      },
      {
        heading: {
          en: "2. Scrolling & Dictating Forms",
          th: "2. การเลื่อนหน้าจอและการกรอกข้อความด้วยเสียง",
        },
        body: {
          en: "Say 'Scroll down' or 'Scroll up' to move through long lists, and use 'Show numbers' when multiple items share similar labels.",
          th: "ใช้คำสั่งเลื่อนขึ้นหรือลงเพื่อดูรายการยาว ๆ และเปิดแสดงหมายเลขกำกับเมื่อมีปุ่มหลายปุ่มที่มีข้อความคล้ายกันบนหน้าเดียว",
        },
      },
    ],
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    badgeClass: "bg-primary-light text-primary",
    updatedAt: "2026-11-10",
    readMinutes: 4,
    tag: {
      en: "Maintenance",
      th: "การดูแลรักษา",
    },
    title: {
      en: "Daily Assistive Device Care",
      th: "การดูแลอุปกรณ์สิ่งอำนวยความสะดวกประจำวัน",
    },
    summary: {
      en: "Battery, cleaning, and preventive maintenance checklist.",
      th: "เช็กลิสต์แบตเตอรี่ การทำความสะอาด และการบำรุงรักษา",
    },
    sections: [
      {
        heading: {
          en: "1. Battery Charging Habits",
          th: "1. การชาร์จและดูแลแบตเตอรี่",
        },
        body: {
          en: "Keep powered wheelchairs and braille displays charged overnight using only the supplied adapter. Avoid draining lithium batteries completely.",
          th: "ชาร์จรถเข็นไฟฟ้าและจอแสดงผลอักษรเบรลล์ด้วยอะแดปเตอร์มาตรฐานของอุปกรณ์ และหลีกเลี่ยงการปล่อยให้แบตเตอรี่หมดเกลี้ยงบ่อยครั้ง",
        },
      },
      {
        heading: {
          en: "2. Cleaning & When to Request Service",
          th: "2. การทำความสะอาดและการแจ้งซ่อมบำรุง",
        },
        body: {
          en: "Wipe tactile keys and joysticks gently with a dry microfiber cloth. If a control lags or drifts, submit a ticket under Repair & Care Services.",
          th: "ใช้ผ้าไมโครไฟเบอร์แห้งเช็ดทำความสะอาดปุ่มนูนและจอยสติ๊กเบา ๆ หากพบอาการหน่วงหรือควบคุมคลาดเคลื่อนให้แจ้งซ่อมผ่านเมนูบริการซ่อม/ดูแลทันที",
        },
      },
    ],
  },
];
