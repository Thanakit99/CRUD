import Image from "next/image"; // นำเข้าคอมโพเนนต์ Image จาก Next.js สำหรับจัดการและoptimizeรูปภาพ
import type { Band } from "@/Type/band"; // นำเข้า TypeScript Type ของข้อมูลวงดนตรี

type BandCardProps = {
  band: Band; // กำหนดให้ props ของคอมโพเนนต์นี้ต้องรับข้อมูลวงดนตรี (band) 1 วง
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card"> {/* กล่องการ์ดหลักสำหรับครอบเนื้อหาทั้งหมด */}
      {/* ส่วนของรูปวง */}
      <div style={{ width: "100%", height: "280px", position: "relative", marginBottom: "1rem", borderRadius: "8px", overflow: "hidden" }}>
        <Image
          src={band.image} // กำหนดพาธรูปภาพหลักของวง
          alt={band.name} // กำหนดข้อความอธิบายรูปภาพสำหรับ Accessibility
          fill // สั่งให้รูปภาพขยายเต็มพื้นที่ของ div ที่ห่อหุ้ม
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // กำหนดขนาดรูปภาพตามขนาดหน้าจอ (Responsive)
          style={{ objectFit: "cover" }} // จัดให้รูปภาพปรับขนาดและตัดส่วนที่เกินเพื่อให้เต็มกรอบพอดี
        />
      </div>

      {/* ส่วนรายละเอียดวง */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#fff", margin: 0 }}>{band.name}</h2> {/* แสดงชื่อวง */}
        <span style={{ background: "#1e3a8a", color: "#60a5fa", padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.875rem" }}>
          {band.yearFormed} {/* แสดงปีที่ก่อตั้งวง */}
        </span>
      </div>

      <p style={{ color: "#9ca3af", fontSize: "0.95rem", marginBottom: "1rem" }}>
        <strong>แนวเพลง:</strong> {band.genre} {/* แสดงแนวเพลง */}
      </p>
      
      {band.description && (
        <p style={{ color: "#d1d5db", fontSize: "0.9rem", marginBottom: "1rem" }}>
          {band.description} {/* แสดงคำอธิบายวง (ถ้ามี) */}
        </p>
      )}

      {/* ส่วนแสดงรายชื่อสมาชิก */}
      <div style={{ borderTop: "1px solid #374151", paddingTop: "1rem", marginTop: "auto" }}>
        <span style={{ fontSize: "0.9rem", color: "#9ca3af", display: "block", marginBottom: "0.75rem" }}>สมาชิกวงและตำแหน่ง:</span>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {band.members.map((member, index) => ( // วนลูปแสดงรายชื่อสมาชิกแต่ละคนในวง
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "48px", height: "48px", position: "relative", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1px solid #4b5563" }}>
                <Image
                  src={member.image} // กำหนดพาธรูปโปรไฟล์ของสมาชิก
                  alt={member.name} // กำหนดชื่อสมาชิกเป็น alt ของรูปภาพ
                  fill // สั่งให้รูปโปรไฟล์ขยายเต็มพื้นที่กรอบวงกลม
                  sizes="48px" // กำหนดขนาดรูปภาพสมาชิก
                  style={{ objectFit: "cover" }} // ครอบตัดรูปให้อยู่ในสัดส่วนที่พอดี
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.9rem", color: "#e5e7eb", fontWeight: "500" }}>{member.name}</span> {/* แสดงชื่อ-นามสกุลสมาชิก */}
                <span style={{ fontSize: "0.8rem", color: "#60a5fa" }}>{member.role}</span> {/* แสดงตำแหน่งของสมาชิก */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}