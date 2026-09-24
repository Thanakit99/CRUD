type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

const COURSES_DATA: Course[] = [
  {
    id: 1,
    code: "10301231",
    title: "Web Technology",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "10301232",
    title: "Database Systems",
    credits: 3,
    isOpen: false,
  },
  {
    id: 3,
    code: "10301233",
    title: "Object-Oriented Programming",
    credits: 3,
    isOpen: true,
  },
  {
    id: 4,
    code: "10301234",
    title: "Data Structures and Algorithms",
    credits: 3,
    isOpen: true,
  },
  {
    id: 5,
    code: "10301235",
    title: "Computer Networks",
    credits: 3,
    isOpen: false,
  },
];

export default function HomePage() {
  const siteName = "Student Course Hub";
  const description = "เว็บไซต์รวบรวมข้อมูลรายวิชาและหลักสูตรสำหรับนักศึกษา";
  const isSystemOpen = true;

  return (
    <div className="min-h-screen bg-black text-gray-200 p-6 md:p-10 max-w-7xl mx-auto">
      {/* ส่วนหัวของเว็บไซต์ */}
      <header className="mb-12 bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-50 tracking-tight mb-3">{siteName}</h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-6">{description}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300 bg-gray-800/60 p-4 rounded-xl max-w-max border border-gray-700">
          <span>จำนวนรายวิชาทั้งหมด: <strong className="text-blue-400">{COURSES_DATA.length}</strong> วิชา</span>
          <span className="hidden md:inline text-gray-600">•</span>
          <span className="flex items-center gap-2">
            สถานะระบบ:{" "}
            <span
              className={`font-semibold px-3 py-0.5 rounded-full text-xs ${
                isSystemOpen ? "bg-green-950 text-green-300 border border-green-800" : "bg-red-950 text-red-300 border border-red-800"
              }`}
            >
              {isSystemOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}
            </span>
          </span>
        </div>
      </header>

      {/* กลุ่มผู้ใช้เป้าหมาย */}
      <section className="bg-gray-900 border border-gray-800 p-8 rounded-2xl mb-12 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">กลุ่มผู้ใช้เป้าหมาย</h2>
        <p className="text-gray-300 leading-relaxed max-w-4xl">
          เว็บไซต์นี้เหมาะสำหรับนักศึกษา อาจารย์ และผู้ที่ต้องการตรวจสอบข้อมูลรายวิชาและสถานะการเปิดลงทะเบียน
        </p>
      </section>

      {/* รายการรายวิชา */}
      <section>
        <h2 className="text-3xl font-bold text-gray-100 mb-8 tracking-tight">รายวิชาทั้งหมด</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course) => (
            <article
              key={course.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-7 shadow-lg hover:border-blue-700 hover:shadow-blue-900/20 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-gray-50 leading-tight flex-1">
                  {course.title}
                </h3>
                <span className="text-xs font-medium px-3 py-1.5 bg-blue-950 text-blue-300 border border-blue-800 rounded-full whitespace-nowrap">
                  {course.code}
                </span>
              </div>

              <div className="pt-6 border-t border-gray-800 flex items-center justify-between text-sm">
                <span className="text-gray-400">{course.credits} หน่วยกิต</span>
                <span
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold ${
                    course.isOpen
                      ? "bg-green-950 text-green-300 border border-green-800"
                      : "bg-red-950 text-red-300 border border-red-800"
                  }`}
                >
                  {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}