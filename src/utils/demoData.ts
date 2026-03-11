// Demo Data for Doctor Dashboard
// This provides realistic sample data when doctor has no real appointments

export interface DemoPatient {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
}

export interface DemoAppointment {
  id: string;
  patientId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorId: string;
  doctorEmail: string;
  doctorName: string;
  date: string;
  time: string;
  consultationType: 'online' | 'offline';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  reason: string;
  aiReport?: string;
  labResults?: string;
  createdAt: string;
  updatedAt: string;
}

export const demoPatients: DemoPatient[] = [
  {
    id: 'PT-1024',
    name: 'Ayesha Khan',
    email: 'ayesha.khan@demo.com',
    phone: '+91 98765 43210',
    age: 28,
    gender: 'Female',
  },
  {
    id: 'PT-1025',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@demo.com',
    phone: '+91 98765 43211',
    age: 35,
    gender: 'Male',
  },
  {
    id: 'PT-1026',
    name: 'Mariyam Shaikh',
    email: 'mariyam.shaikh@demo.com',
    phone: '+91 98765 43212',
    age: 42,
    gender: 'Female',
  },
  {
    id: 'PT-1027',
    name: 'Arjun Patil',
    email: 'arjun.patil@demo.com',
    phone: '+91 98765 43213',
    age: 31,
    gender: 'Male',
  },
  {
    id: 'PT-1028',
    name: 'Neha Verma',
    email: 'neha.verma@demo.com',
    phone: '+91 98765 43214',
    age: 26,
    gender: 'Female',
  },
];

export const generateDemoAppointments = (doctorEmail: string, doctorName: string): DemoAppointment[] => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  return [
    {
      id: 'DEMO-APT-001',
      patientId: demoPatients[0].id,
      patientName: demoPatients[0].name,
      patientEmail: demoPatients[0].email,
      patientPhone: demoPatients[0].phone,
      doctorId: doctorEmail,
      doctorEmail: doctorEmail,
      doctorName: doctorName,
      date: today.toISOString().split('T')[0],
      time: '10:00 AM',
      consultationType: 'online',
      status: 'confirmed',
      reason: 'Regular checkup and consultation for persistent headaches',
      aiReport: 'Patient reports frequent headaches (3-4 times per week) for the past month. No fever or vision problems. Stress-related symptoms noted.',
      createdAt: yesterday.toISOString(),
      updatedAt: today.toISOString(),
    },
    {
      id: 'DEMO-APT-002',
      patientId: demoPatients[1].id,
      patientName: demoPatients[1].name,
      patientEmail: demoPatients[1].email,
      patientPhone: demoPatients[1].phone,
      doctorId: doctorEmail,
      doctorEmail: doctorEmail,
      doctorName: doctorName,
      date: today.toISOString().split('T')[0],
      time: '2:30 PM',
      consultationType: 'offline',
      status: 'pending',
      reason: 'Follow-up consultation for diabetes management',
      createdAt: yesterday.toISOString(),
      updatedAt: yesterday.toISOString(),
    },
    {
      id: 'DEMO-APT-003',
      patientId: demoPatients[2].id,
      patientName: demoPatients[2].name,
      patientEmail: demoPatients[2].email,
      patientPhone: demoPatients[2].phone,
      doctorId: doctorEmail,
      doctorEmail: doctorEmail,
      doctorName: doctorName,
      date: yesterday.toISOString().split('T')[0],
      time: '11:00 AM',
      consultationType: 'online',
      status: 'completed',
      reason: 'Consultation for seasonal allergies',
      labResults: 'Blood test results available',
      createdAt: new Date(yesterday.getTime() - 86400000).toISOString(),
      updatedAt: yesterday.toISOString(),
    },
    {
      id: 'DEMO-APT-004',
      patientId: demoPatients[3].id,
      patientName: demoPatients[3].name,
      patientEmail: demoPatients[3].email,
      patientPhone: demoPatients[3].phone,
      doctorId: doctorEmail,
      doctorEmail: doctorEmail,
      doctorName: doctorName,
      date: tomorrow.toISOString().split('T')[0],
      time: '9:00 AM',
      consultationType: 'offline',
      status: 'confirmed',
      reason: 'Annual health checkup',
      createdAt: today.toISOString(),
      updatedAt: today.toISOString(),
    },
    {
      id: 'DEMO-APT-005',
      patientId: demoPatients[4].id,
      patientName: demoPatients[4].name,
      patientEmail: demoPatients[4].email,
      patientPhone: demoPatients[4].phone,
      doctorId: doctorEmail,
      doctorEmail: doctorEmail,
      doctorName: doctorName,
      date: nextWeek.toISOString().split('T')[0],
      time: '4:00 PM',
      consultationType: 'online',
      status: 'pending',
      reason: 'Consultation for back pain',
      aiReport: 'Patient reports lower back pain for 2 weeks. Pain increases with prolonged sitting. No injury reported.',
      createdAt: today.toISOString(),
      updatedAt: today.toISOString(),
    },
  ];
};

export const demoStats = {
  totalAppointments: 5,
  todayAppointments: 2,
  totalPatients: 18,
  totalEarnings: 12500,
  monthlyEarnings: [
    { month: 'Jan 2026', amount: 8500 },
    { month: 'Feb 2026', amount: 11000 },
    { month: 'Mar 2026', amount: 12500 },
  ],
  rating: 4.8,
};

export const isDemoMode = (appointments: any[]): boolean => {
  return appointments.length === 0;
};
