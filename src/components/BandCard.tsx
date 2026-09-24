import { useState } from "react";
import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
  isFollowed: boolean;
  onToggleFollow: (id: number) => void;
  likes: number;
  onLike: (id: number) => void;
};

export default function BandCard({
  band,
  isFollowed,
  onToggleFollow,
  likes,
  onLike,
}: BandCardProps) {
  if (!band) return null;

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
            width: "100%",
            height: "280px",
            position: "relative",
            marginBottom: "1rem",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            src={band.image}
            alt={band.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

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
            {band.name}
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
            {band.yearFormed}
          </span>
        </div>

        <p style={{ color: "#9ca3af", fontSize: "0.95rem", marginBottom: "1rem" }}>
          <strong>แนวเพลง:</strong> {band.genre}
        </p>

        {band.description && (
          <p style={{ color: "#d1d5db", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
            {band.description}
          </p>
        )}
      </div>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button
          type="button"
          onClick={() => onLike(band.id)}
          style={{
            flex: 1,
            background: "#374151",
            color: "#fff",
            border: "1px solid #4b5563",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.35rem",
          }}
        >
          ❤️ Like ({likes})
        </button>

        <button
          type="button"
          aria-pressed={isFollowed}
          onClick={() => onToggleFollow(band.id)}
          style={{
            flex: 1,
            background: isFollowed ? "#2563eb" : "#1f2937",
            color: isFollowed ? "#fff" : "#9ca3af",
            border: isFollowed ? "1px solid #3b82f6" : "1px solid #4b5563",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          {isFollowed ? "✓ กำลังติดตาม" : "+ ติดตาม"}
        </button>
      </div>

      <div style={{ borderTop: "1px solid #374151", paddingTop: "1rem", marginTop: "auto" }}>
        <span style={{ fontSize: "0.9rem", color: "#9ca3af", display: "block", marginBottom: "0.75rem" }}>
          สมาชิกวงและตำแหน่ง:
        </span>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {band.members?.map((member, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  position: "relative",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "1px solid #4b5563",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="48px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.9rem", color: "#e5e7eb", fontWeight: "500" }}>
                  {member.name}
                </span>
                <span style={{ fontSize: "0.8rem", color: "#60a5fa" }}>
                  {member.role}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}