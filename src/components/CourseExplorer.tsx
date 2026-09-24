"use client";

import { useState, ChangeEvent } from "react";
import type { Course } from "@/types/course";
import CourseCard from "@/components/CourseCard";

type CourseExplorerProps = {
  courses: Course[];
};

export default function CourseExplorer({ courses }: CourseExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]); // ใช้ string[]
  const [onlyFavorite, setOnlyFavorite] = useState(false);

  function handleKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  function handleToggleFavorite(id: string) { // รับค่าเป็น string
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  const searchText = keyword.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchText) ||
      course.code.includes(searchText);
    const matchesFavorite = onlyFavorite ? favoriteIds.includes(course.id) : true;
    return matchesSearch && matchesFavorite;
  });

  return (
    <div className="space-y-4">
      <input
        type="search"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา"
        className="border p-2 rounded w-full bg-gray-900 text-white border-gray-700"
      />
      <div className="flex gap-4 items-center">
        <button
          type="button"
          onClick={() => setOnlyFavorite(!onlyFavorite)}
          className="p-2 border rounded bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
        >
          {onlyFavorite ? "แสดงทั้งหมด" : "แสดงเฉพาะรายการโปรด"}
        </button>
        <span className="text-gray-300">รายการโปรด: {favoriteIds.length} รายการ</span>
      </div>

      {visibleCourses.length === 0 ? (
        <p className="text-gray-400">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        <section className="grid gap-4">
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isFavorite={favoriteIds.includes(course.id)}
              onToggleFavorite={handleToggleFavorite}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))}
        </section>
      )}
    </div>
  );
}