export default function AboutPage() {
  const siteName = "Student Course Hub";
  const description = "แพลตฟอร์มค้นหาและติดตามรายวิชาสำหรับนักศึกษา";

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-6 md:p-10 max-w-7xl mx-auto">
      {/* ส่วนหัวของหน้า About */}
      <header className="mb-12 bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-50 tracking-tight mb-3">เกี่ยวกับเรา</h1>
        <p className="text-xl text-gray-300 max-w-3xl">{description}</p>
      </header>

      {/* เนื้อหาหลัก */}
      <section className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">วัตถุประสงค์ของเว็บไซต์</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          เว็บไซต์นี้เหมาะกับนักศึกษาที่ต้องการดูรายวิชาที่เปิดสอน ตรวจสอบหน่วยกิต และวางแผนลงทะเบียนเรียนในแต่ละภาคการศึกษาได้อย่างสะดวก รวดเร็ว และเป็นระเบียบ
        </p>

        <div className="pt-6 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 border border-gray-700/60 p-5 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">🔍 ค้นหาง่าย</h3>
            <p className="text-gray-400 text-sm">ค้นหารายวิชาและรหัสวิชาที่ต้องการได้อย่างรวดเร็ว</p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700/60 p-5 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">★ รายการโปรด</h3>
            <p className="text-gray-400 text-sm">บันทึกวิชาที่สนใจไว้ตรวจสอบภายหลังได้ทันที</p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700/60 p-5 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">📊 เช็คสถานะ</h3>
            <p className="text-gray-400 text-sm">ตรวจสอบสถานะการเปิด-ปิดลงทะเบียนและหน่วยกิตได้ชัดเจน</p>
          </div>
        </div>
      </section>
    </div>
  );
}