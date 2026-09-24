import Link from "next/link";
import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function CourseCard({
  course,
  isFavorite,
  onToggleFavorite,
  onEdit,
  onDelete,
}: CourseCardProps) {
  return (
    <article
      style={{
        background: "#111827",
        border: "1px solid #374151",
        borderRadius: "12px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.75rem",
          }}
        >
          <h2
            style={{ fontSize: "1.25rem", fontWeight: "600", color: "#fff", margin: 0 }}
          >
            <Link
              href={`/courses/${course.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {course.title ?? course.name}
            </Link>
          </h2>
          <span
            style={{
              background: "#1e3a8a",
              color: "#60a5fa",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.875rem",
            }}
          >
            รหัส: {course.code}
          </span>
        </div>

        <p style={{ color: "#9ca3af", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          <strong>หน่วยกิต:</strong> {course.credits ?? course.credit}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
        <button
          type="button"
          onClick={() => onToggleFavorite(course.id)}
          style={{
            width: "100%",
            background: isFavorite ? "#2563eb" : "#374151",
            color: isFavorite ? "#fff" : "#9ca3af",
            border: isFavorite ? "1px solid #3b82f6" : "1px solid #4b5563",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          {isFavorite ? "★ อยู่ในรายการโปรด" : "☆ เพิ่มเป็นรายการโปรด"}
        </button>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            borderTop: "1px solid #374151",
            paddingTop: "0.75rem",
          }}
        >
          <button
            type="button"
            onClick={onEdit}
            style={{
              flex: 1,
              background: "#374151",
              color: "#fff",
              border: "1px solid #4b5563",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            ✏️ แก้ไข
          </button>

          <button
            type="button"
            onClick={onDelete}
            style={{
              flex: 1,
              background: "#7f1d1d",
              color: "#fca5a5",
              border: "1px solid #991b1b",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            🗑️ ลบ
          </button>
        </div>
      </div>
    </article>
  );
}