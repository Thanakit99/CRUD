"use client";

import { useState, ChangeEvent } from "react";
import CourseCard from "@/components/CourseCard";

type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

const COURSES_DATA: Course[] = [
  { id: 1, code: "10301231", title: "Web Technology", credits: 3, isOpen: true },
  { id: 2, code: "10301232", title: "Network", credits: 3, isOpen: true },
  { id: 3, code: "10301233", title: "Database Systems", credits: 3, isOpen: false },
  { id: 4, code: "10301234", title: "Structure Relational Database", credits: 3, isOpen: true },
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
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", color: "#fff" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          รายวิชาทั้งหมด
        </h1>
        <p style={{ color: "#9ca3af" }}>
          ตรวจสอบรายชื่อวิชาและสถานะการเปิดลงทะเบียน
        </p>
      </header>

      <div style={{ display: "flex", flexDirection: "row", gap: "1rem", marginBottom: "2rem", alignItems: "center", flexWrap: "wrap" }}>
        <input
          type="search"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
          style={{
            flex: 1,
            minWidth: "260px",
            background: "#1f2937",
            border: "1px solid #374151",
            color: "#fff",
            borderRadius: "8px",
            padding: "0.5rem 1rem",
            outline: "none"
          }}
        />

        <button
          type="button"
          onClick={() => setOnlyFavorite(!onlyFavorite)}
          style={{
            background: onlyFavorite ? "#2563eb" : "#1f2937",
            color: onlyFavorite ? "#fff" : "#9ca3af",
            border: onlyFavorite ? "1px solid #3b82f6" : "1px solid #374151",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: "500",
            whiteSpace: "nowrap"
          }}
        >
          {onlyFavorite ? "แสดงทั้งหมด" : "แสดงเฉพาะรายการโปรด"}
        </button>

        <div style={{ fontSize: "0.9rem", color: "#9ca3af", whiteSpace: "nowrap" }}>
          รายการโปรด: <strong style={{ color: "#60a5fa" }}>{favoriteIds.length}</strong> วิชา
        </div>
      </div>

      {visibleCourses.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 0", color: "#9ca3af" }}>
          ไม่พบรายวิชาที่ตรงกับเงื่อนไข
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isFavorite={favoriteIds.includes(course.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}