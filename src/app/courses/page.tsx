"use client";

import { useState, ChangeEvent } from "react";

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
    title: "Network",
    credits: 3,
    isOpen: true,
  },
  {
    id: 3,
    code: "10301233",
    title: "Database Systems",
    credits: 3,
    isOpen: false,
  },
  {
    id: 4,
    code: "10301234",
    title: "Structure Relational Database",
    credits: 3,
    isOpen: true,
  },
];

export default function CoursesPage() {
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [onlyFavorite, setOnlyFavorite] = useState(false);

  function handleKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  function handleToggleFavorite(id: number) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  const searchText = keyword.trim().toLowerCase();
  const visibleCourses = COURSES_DATA.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchText) ||
      course.code.toLowerCase().includes(searchText);
    const matchesFavorite = onlyFavorite ? favoriteIds.includes(course.id) : true;
    return matchesSearch && matchesFavorite;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 md:p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-50 tracking-tight mb-3">
          รายวิชาทั้งหมด
        </h1>
        <p className="text-xl text-gray-300">
          ตรวจสอบรายชื่อวิชาและสถานะการเปิดลงทะเบียน
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-stretch sm:items-center">
        <input
          type="search"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
          className="flex-1 bg-gray-800 border border-gray-700 text-gray-100 rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500"
        />

        <button
          type="button"
          onClick={() => setOnlyFavorite(!onlyFavorite)}
          className={`px-5 py-2.5 rounded-xl border transition-colors text-sm font-medium whitespace-nowrap ${
            onlyFavorite
              ? "bg-blue-600 border-blue-500 text-white"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {onlyFavorite ? "แสดงทั้งหมด" : "แสดงเฉพาะรายการโปรด"}
        </button>

        <div className="text-sm text-gray-400 self-center whitespace-nowrap">
          รายการโปรด: <strong className="text-blue-400">{favoriteIds.length}</strong> วิชา
        </div>
      </div>

      {visibleCourses.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          ไม่พบรายวิชาที่ตรงกับเงื่อนไข
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleCourses.map((course) => {
            const isFav = favoriteIds.includes(course.id);
            return (
              <article
                key={course.id}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-7 shadow-lg hover:border-blue-700 hover:shadow-blue-900/30 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-gray-50 leading-tight flex-1">
                    {course.title}
                  </h2>
                  <span className="text-xs font-medium px-3 py-1.5 bg-blue-900 text-blue-300 rounded-full whitespace-nowrap">
                    {course.code}
                  </span>
                </div>

                <div className="pt-6 border-t border-gray-700 flex items-center justify-between text-sm">
                  <span className="text-gray-400">{course.credits} หน่วยกิต</span>
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                      course.isOpen
                        ? "bg-green-900 text-green-300"
                        : "bg-red-900 text-red-300"
                    }`}
                  >
                    {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggleFavorite(course.id)}
                  className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                    isFav
                      ? "bg-amber-600/20 border border-amber-500/50 text-amber-300 hover:bg-amber-600/30"
                      : "bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {isFav ? "★ อยู่ในรายการโปรด" : "☆ เพิ่มเป็นรายการโปรด"}
                </button>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}