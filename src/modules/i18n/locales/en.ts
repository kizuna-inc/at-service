export const en = {
  nav: {
    brand: "Care Connect",
    search: "Search",
    switchLanguage: "Switch language",
    login: "Login",
    logout: "Logout",
  },
  common: {
    loading: "Loading...",
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save",
    or: "or",
  },
  roles: {
    user: "User",
    staff: "Staff",
    admin: "Admin",
  },
  login: {
    title: "Sign in",
    description: "Enter your credentials to access your account",
    username: "Username",
    usernamePlaceholder: "Enter your username",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    submit: "Sign in",
    submitting: "Signing in...",
    invalidCredentials: "Invalid username or password",
    register: "Register",
    forgotPassword: "Forgot password?",
    mockAlertTitle: "Prototype / Mockup Mode",
    mockAlertDescription:
      "This is a mockup environment using sample accounts (admin/admin, staff/staff, user/user).",
  },
  a11y: {
    title: "Accessibility",
    textSize: "Text size",
    textNormal: "Normal",
    textLarge: "Large",
    textXLarge: "Extra Large",
    highContrast: "High Contrast",
    screenReader: "Screen Reader",
    voiceControl: "Voice Control",
    reset: "Reset",
    on: "On",
    off: "Off",
  },
  dashboard: {
    welcome: "Welcome, {{name}}",
    status: {
      active: "Active",
      pending: "Pending",
      inProgress: "In Progress",
      completed: "Completed",
    },
    user: {
      menu: {
        ariaLabel: "User dashboard navigation",
        home: "Home",
        requests: "Help Requests",
        repair: "Repair & Care Services",
        helpers: "Helpers",
        knowledge: "Knowledge & Guides",
        reports: "Reports",
        settings: "Settings",
        helpTitle: "Need Help?",
        helpPhone: "Contact team 02-123-4567",
        helpHours: "(Mon - Fri 08:30 - 17:00)",
      },
      subtitle: "Manage your assistive devices, appointments, and requests.",
      notice:
        "We only ask for information necessary to match your assistive care needs.",
      stats: {
        activeDevices: "Active Devices",
        appointments: "Upcoming Appointments",
        requests: "Open Requests",
      },
      quickActions: "Quick Actions",
      actionAssessment: "New Assessment",
      actionAppointment: "Book Appointment",
      actionDevices: "My Devices",
      recentTitle: "Recent Activity",
      recentItems: {
        item1: {
          title: "Screen Reader Setup Support",
          meta: "Assistive Tech · Tomorrow 10:00",
        },
        item2: {
          title: "Ergonomic Keyboard Check",
          meta: "Device Loan · Active",
        },
        item3: {
          title: "Voice Input Assessment",
          meta: "Consultation · Completed",
        },
      },
      tracking: {
        breadcrumb: {
          dashboard: "Dashboard",
          repairTrack: "Track Repair",
          statusTrack: "Status Tracking",
        },
        requestLabel: "Request ID",
        requestCode: "AT-026",
        updatedAt: "13 Mar 2025 09:15",
        deviceLabel: "Device:",
        deviceValue: "Wheelchair",
        issueLabel: "Issue:",
        issueValue: "Left wheel stiff, cannot rotate",
        timeline: {
          title: "Request Progress",
          stepProgress: "Step {{current}} of {{total}}",
          steps: {
            received: {
              title: "Request Received",
              time: "12 Mar 2025 10:24",
              detail:
                "The system received your request and queued it for technician assignment.",
            },
            reviewing: {
              title: "Under Review",
              time: "13 Mar 2025 09:15",
              detail:
                "Our team is reviewing the issue details and preparing an assistance schedule.",
            },
            scheduled: {
              title: "Assistance Scheduled",
              time: "Pending",
              detail:
                "A technician visit or repair appointment will be confirmed once review finishes.",
            },
            completed: {
              title: "Completed",
              time: "Pending",
              detail:
                "Repair and verification completed with your device ready for regular use.",
            },
          },
        },
        helper: {
          title: "Assigned Helper",
          name: "Wittaya Srisuk",
          role: "Medical Equipment Technician",
          center: "Central AT Service Center",
          sendMessage: "Send Message",
          viewHelper: "View Helper Info",
        },
        appointment: {
          title: "Next Appointment",
          empty:
            "No appointment scheduled yet - our team is reviewing your request and will notify you soon.",
        },
        activity: {
          title: "Activity Log",
          items: {
            item1: {
              time: "13 Mar 2025 09:15",
              title: "Under Review",
              description:
                "The team is reviewing your details and evaluating support options. Updates will follow.",
            },
            item2: {
              time: "12 Mar 2025 10:24",
              title: "Request Received",
              description:
                "Your assistance request was received and is awaiting helper assignment.",
            },
            item3: {
              time: "12 Mar 2025 10:20",
              title: "Request Submitted",
              description: "You submitted assistance request AT-026.",
            },
          },
        },
        actions: {
          sendMessage: "Send Message",
          cancelAppointment: "Cancel Appointment",
          messageSent: "Message sent to Wittaya Srisuk.",
          cancelConfirm: "Are you sure you want to cancel request AT-026?",
          confirmCancel: "Confirm Cancel",
          keepAppointment: "Keep Request",
          cancelledStatus: "Cancelled",
        },
      },
      pages: {
        requests: {
          title: "Help Requests",
          subtitle: "Track your submitted assistance requests and status updates.",
          newRequest: "New Request",
          filterAll: "All",
          items: {
            item1: {
              title: "Screen Reader Configuration",
              meta: "Submitted 2 hours ago · Assigned to ณัฐธิดา ศิริพรชัย",
              category: "Software",
            },
            item2: {
              title: "Home Desk Ergonomic Setup",
              meta: "Scheduled for tomorrow 10:00",
              category: "Assessment",
            },
            item3: {
              title: "Braille Display Orientation",
              meta: "Completed on 18 Nov 2026",
              category: "Training",
            },
          },
        },
        repair: {
          title: "Repair & Care Services",
          subtitle: "Monitor your assigned assistive devices and maintenance tickets.",
          reportIssue: "Report Issue",
          devicesTitle: "Assigned Devices",
          ticketsTitle: "Maintenance Tickets",
          devices: {
            item1: {
              name: "Ergonomic Wireless Keyboard",
              meta: "Serial #AT-KB-204 · Warranty active",
            },
            item2: {
              name: "Power Wheelchair Controller",
              meta: "Serial #AT-WC-089 · Next check in 14 days",
            },
          },
          tickets: {
            item1: {
              title: "Joystick Sensitivity Calibration",
              meta: "Ticket #RM-104 · Technician assigned",
            },
            item2: {
              title: "Battery Health Inspection",
              meta: "Ticket #RM-098 · Passed inspection",
            },
          },
        },
        helpers: {
          title: "Helpers & Specialists",
          subtitle: "Browse assistive technology specialists and care helpers.",
          bookAction: "Book Appointment",
          available: "Available",
          busy: "In Session",
          list: {
            item1: {
              name: "ณัฐธิดา ศิริพรชัย",
              specialty: "Screen Reader & Low-Vision Specialist",
              schedule: "Mon - Fri · 09:00 - 16:30",
            },
            item2: {
              name: "ปิยวัฒน์ เจริญสุข",
              specialty: "Mobility & Wheelchair Technician",
              schedule: "Tue - Sat · 08:30 - 17:00",
            },
            item3: {
              name: "ศิริพร มณีรัตน์",
              specialty: "Voice Control & AAC Trainer",
              schedule: "Mon - Thu · 10:00 - 16:00",
            },
          },
        },
        knowledge: {
          title: "Knowledge & Guides",
          subtitle: "Step-by-step manuals and accessibility tips.",
          searchPlaceholder: "Search guides...",
          readGuide: "Read Guide",
          empty: "No guides match your search.",
          backToGuides: "Back to Guides",
          notFound: "Article not found.",
          readTime: "{{minutes}} min read",
          updatedLabel: "Updated",
        },
        reports: {
          title: "Reports",
          subtitle: "Summary of your completed services and support hours.",
          stats: {
            totalRequests: "Total Requests",
            completedServices: "Completed Services",
            hoursAssisted: "Support Hours",
          },
          historyTitle: "Service History",
          history: {
            item1: {
              title: "Voice Input Assessment",
              date: "18 Nov 2026",
              result: "Completed",
            },
            item2: {
              title: "Battery Health Inspection",
              date: "10 Nov 2026",
              result: "Passed",
            },
            item3: {
              title: "Initial Accessibility Onboarding",
              date: "02 Nov 2026",
              result: "Verified",
            },
          },
        },
        settings: {
          title: "Settings",
          subtitle: "Review your account details and interface preferences.",
          profileTitle: "Account Profile",
          nameLabel: "Full Name",
          usernameLabel: "Username",
          roleLabel: "Role",
          preferencesTitle: "Preferences",
          languageLabel: "Display Language",
          notificationsLabel: "Appointment Notifications",
          notificationsDesc: "Receive reminders for upcoming visits and ticket updates.",
          savedMessage: "Preferences updated",
        },
      },
    },
    staff: {
      menu: {
        ariaLabel: "Staff dashboard navigation",
        overview: "Overview",
        queue: "Service Queue",
        repairs: "Device Repairs",
        schedule: "Appointments",
        reports: "Reports",
        settings: "Settings",
        helpTitle: "Staff Support",
        helpPhone: "Internal ext. 02-123-4568",
        helpHours: "(Mon - Fri 08:30 - 17:00)",
      },
      sectionNote: "Manage assigned tasks and status updates for this section.",
      subtitle: "Review assigned cases and update service progress.",
      stats: {
        pendingQueue: "Pending Cases",
        inProgress: "In Progress",
        completedToday: "Completed Today",
      },
      queueTitle: "Service Request Queue",
      actionAccept: "Accept Case",
      actionView: "View Details",
      queueItems: {
        item1: {
          title: "ธนกร จันทร์เพ็ญ · Screen Reader Calibration",
          meta: "Priority: Normal · Requested 30m ago",
        },
        item2: {
          title: "สมหญิง ใจดี · Wheelchair Joystick Check",
          meta: "Assigned to you · Due today 15:00",
        },
        item3: {
          title: "อนันต์ สุขใจ · Large Print Display Kit",
          meta: "Handover verified · 11:20",
        },
      },
      pages: {
        repairs: {
          title: "Device Repairs",
          subtitle: "Track assistive device diagnostics, repairs, and bench status.",
          filterAll: "All",
          items: {
            item1: {
              title: "Braille Cell Alignment",
              device: "Focus 40 · #AT-104",
              meta: "Ticket #RM-201 · Reported 2 hours ago",
            },
            item2: {
              title: "Wheelchair Joystick Calibration",
              device: "Power Chair · #AT-089",
              meta: "Ticket #RM-198 · Bench diagnostics",
            },
            item3: {
              title: "Tactile Key Switch Replacement",
              device: "Large Print Keyboard · #AT-308",
              meta: "Ticket #RM-190 · Ready for pickup",
            },
          },
        },
        schedule: {
          title: "Appointments",
          subtitle: "Upcoming user fittings, home assessments, and handovers.",
          items: {
            item1: {
              title: "ธนกร จันทร์เพ็ญ · Screen Reader Fitting",
              time: "Today · 13:30 - 14:30",
              meta: "Room B2 · Assistive Tech Lab",
            },
            item2: {
              title: "สมหญิง ใจดี · Home Ergonomic Check",
              time: "Tomorrow · 10:00 - 11:00",
              meta: "On-site visit · Bang Khen",
            },
            item3: {
              title: "อนันต์ สุขใจ · Display Kit Handover",
              time: "Today · 10:30 - 11:20",
              meta: "Front Desk · Signed off",
            },
          },
        },
        reports: {
          title: "Staff Reports",
          subtitle: "Summary of resolved tickets, response times, and user feedback.",
          logsTitle: "Recent Completed Cases",
          stats: {
            completedCases: "Completed This Month",
            avgTurnaround: "Avg. Turnaround",
            satisfaction: "User Rating",
          },
          logs: {
            item1: {
              title: "Large Print Display Kit Handover",
              date: "2026-11-24 · อนันต์ สุขใจ",
              result: "Completed",
            },
            item2: {
              title: "Voice Input Microphone Calibration",
              date: "2026-11-22 · สมชาย ใจดี",
              result: "Completed",
            },
            item3: {
              title: "Ergonomic Keyboard Setup",
              date: "2026-11-20 · กัญญา รัตนากร",
              result: "Verified",
            },
          },
        },
      },
    },
    admin: {
      menu: {
        ariaLabel: "Admin dashboard navigation",
        overview: "Overview",
        users: "Manage Users",
        staff: "Manage Staff",
        devices: "Device Inventory",
        reports: "System Reports",
        settings: "Settings",
        helpTitle: "IT Operations",
        helpPhone: "Admin desk 02-123-4569",
        helpHours: "(24/7 Emergency Support)",
      },
      sectionNote: "Review system configuration and records for this section.",
      subtitle: "Monitor system usage, staff workload, and user accounts.",
      stats: {
        totalUsers: "Total Users",
        activeStaff: "Active Staff",
        openRequests: "Open Requests",
        systemStatus: "System Status",
        operational: "Operational",
      },
      managementTitle: "Administration",
      actionUsers: "Manage Users",
      actionStaff: "Manage Staff",
      actionReports: "View Reports",
      overviewTitle: "System Overview",
      overviewItems: {
        item1: {
          title: "Assistive Device Inventory Sync",
          meta: "48 devices active · 98% availability",
        },
        item2: {
          title: "Pending Staff Assignments",
          meta: "4 new requests awaiting review",
        },
        item3: {
          title: "Daily Accessibility Audit",
          meta: "WCAG 2.2 AA check passed",
        },
      },
      pages: {
        users: {
          title: "Manage Users",
          subtitle: "Review registered user accounts and activation status.",
          addAction: "Add User",
          filterAll: "All",
          items: {
            item1: {
              name: "Somchai Jaidee",
              username: "@somchai.j",
              meta: "Wheelchair & Screen Reader · Joined 12 Jan 2026",
            },
            item2: {
              name: "Thanakorn Chanphen",
              username: "@thanakorn.c",
              meta: "Voice Input Kit · Joined 03 Feb 2026",
            },
            item3: {
              name: "Anan Sukjai",
              username: "@anan.s",
              meta: "Large Print Display · Awaiting verification",
            },
          },
        },
        staff: {
          title: "Manage Staff",
          subtitle: "Monitor technician availability and assign service cases.",
          available: "Available",
          busy: "At Capacity",
          assignAction: "Assign Case",
          list: {
            item1: {
              name: "Nattapong Srisuk",
              specialty: "Screen Reader & Braille Calibration",
              workload: "3 active cases · Mon - Fri",
            },
            item2: {
              name: "Wipada Rattana",
              specialty: "Mobility & Wheelchair Repair",
              workload: "2 active cases · Mon - Fri",
            },
            item3: {
              name: "Kittisak Chaiya",
              specialty: "Voice Control & Hardware Setup",
              workload: "6 active cases · Tue - Sat",
            },
          },
        },
        devices: {
          title: "Device Inventory",
          subtitle: "Track assistive equipment stock, loans, and maintenance.",
          addAction: "Register Device",
          filterAll: "All",
          items: {
            item1: {
              name: "Braille Display Focus 40",
              category: "Vision",
              meta: "Unit #AT-104 · Assigned to Somchai J.",
            },
            item2: {
              name: "Electric Wheelchair Joystick Module",
              category: "Mobility",
              meta: "Unit #AT-219 · In calibration lab",
            },
            item3: {
              name: "Large Print Tactile Keyboard",
              category: "Input",
              meta: "Unit #AT-308 · Pending intake check",
            },
          },
        },
        reports: {
          title: "System Reports",
          subtitle: "Review service throughput, SLA metrics, and audit logs.",
          logsTitle: "Recent System Logs",
          stats: {
            totalCases: "Total Cases",
            resolvedRate: "Resolution Rate",
            avgResponse: "Avg. Response Time",
          },
          logs: {
            item1: {
              title: "Monthly Assistive Equipment Audit",
              date: "2026-11-23 · Automated Sync",
              result: "Passed",
            },
            item2: {
              title: "Staff Workload Rebalance",
              date: "2026-11-21 · Admin Ops",
              result: "Applied",
            },
            item3: {
              title: "WCAG 2.2 AA Compliance Scan",
              date: "2026-11-18 · Accessibility",
              result: "Verified",
            },
          },
        },
      },
    },
  },
  forgotPassword: {
    title: "Forgot Password",
    description: "Use one of the test accounts below to sign in during prototype testing.",
    testAccountsTitle: "Test Accounts (Mockup)",
    testAccountsDesc: "Select any username and password below on the login page:",
    username: "Username",
    password: "Password",
    backToLogin: "Back to Login",
  },
} as const
