import Link from "next/link";

// สมข้อมูลจำลองสำหรับหน้ารายละเอียด (สามารถเปลี่ยนไปดึงจากฐานข้อมูลหรือไฟล์ข้อมูลจริงได้)
const COURSES_DETAIL_DATA: Record<string, { code: string; name: string; credit: number; instructor: string; description: string }> = {
  "1": {
    code: "10301231",
    name: "Web Technology",
    credit: 3,
    instructor: "Dr. Somchai Web",
    description: "ศึกษาหลักการพัฒนาเว็บแอปพลิเคชันสมัยใหม่ ทั้งฝั่ง Frontend และ Backend รวมถึงการเชื่อมต่อฐานข้อมูลและการใช้งาน Framework ยอดนิยม"
  },
  "2": {
    code: "10301232",
    name: "Network",
    credit: 3,
    instructor: "Dr. Prasert Net",
    description: "ศึกษาโครงสร้างระบบเครือข่ายคอมพิวเตอร์ โปรโตคอลการสื่อสาร OSI Model, TCP/IP และความปลอดภัยเบื้องต้นบนเครือข่าย"
  },
  "3": {
    code: "10301233",
    name: "Database Systems",
    credit: 3,
    instructor: "Dr. Malee Data",
    description: "ศึกษาแนวคิดระบบฐานข้อมูล การออกแบบฐานข้อมูลเชิงสัมพันธ์ (Relational Database) ภาษา SQL และการจัดการความปลอดภัยของข้อมูล"
  },
  "4": {
    code: "10301234",
    name: "Structure Relational Database",
    credit: 3,
    instructor: "Dr. Anan Structure",
    description: "ศึกษาโครงสร้างขั้นสูงของฐานข้อมูลเชิงสัมพันธ์ การปรับปรุงประสิทธิภาพคำสั่งคิวรี (Query Optimization) และการจัดเก็บข้อมูลขนาดใหญ่"
  }
};

type CourseDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params;
  const course = COURSES_DETAIL_DATA[id];

  if (!course) {
    return (
      <div style={{ padding: "3rem", color: "#fff", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>ไม่พบข้อมูลรายวิชาที่คุณค้นหา</h1>
        <Link href="/courses" style={{ color: "#60a5fa", textDecoration: "underline" }}>
          กลับสู่หน้ารายวิชาทั้งหมด
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", color: "#fff" }}>
      <Link
        href="/courses"
        style={{
          display: "inline-block",
          marginBottom: "1.5rem",
          color: "#9ca3af",
          textDecoration: "none",
          fontSize: "0.9rem"
        }}
      >
        ← กลับไปหน้าหลัก
      </Link>

      <article
        style={{
          background: "#111827",
          border: "1px solid #374151",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", margin: 0, color: "#fff" }}>
            {course.name}
          </h1>
          <span style={{ background: "#1e3a8a", color: "#60a5fa", padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.9rem" }}>
            รหัส: {course.code}
          </span>
        </div>

        <div style={{ display: "flex", gap: "2rem", borderTop: "1px solid #374151", borderBottom: "1px solid #374151", padding: "1rem 0", marginBottom: "1.5rem" }}>
          <p style={{ color: "#9ca3af", margin: 0 }}>
            <strong style={{ color: "#fff" }}>หน่วยกิต:</strong> {course.credit}
          </p>
          <p style={{ color: "#9ca3af", margin: 0 }}>
            <strong style={{ color: "#fff" }}>ผู้สอน:</strong> {course.instructor}
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem", color: "#60a5fa" }}>
            คำอธิบายรายวิชา
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: "1.6", margin: 0 }}>
            {course.description}
          </p>
        </div>
      </article>
    </div>
  );
}