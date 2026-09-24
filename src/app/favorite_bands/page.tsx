"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { bands } from "@/data/bands";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
  isFollowed: boolean;
  onToggleFollow: (id: number) => void;
  likes: number;
  onLike: (id: number) => void;
};

function BandCard({
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

export default function FavoriteBandsPage() {
  const [keyword, setKeyword] = useState("");
  const [followedIds, setFollowedIds] = useState<number[]>([]);
  const [likesMap, setLikesMap] = useState<{ [id: number]: number }>({});

  function handleKeywordChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  function handleToggleFollow(id: number) {
    setFollowedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  function handleLike(id: number) {
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  const searchText = keyword.trim().toLowerCase();
  const visibleBands = bands.filter((band) =>
    band.name.toLowerCase().includes(searchText)
  );

  return (
    <main style={{ padding: "2rem 4rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff", marginBottom: "0.5rem" }}>
        วงดนตรีที่ชื่นชอบ
      </h1>
      <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
        ตรวจสอบรายชื่อวงดนตรีและสมาชิกที่ชื่นชอบ
      </p>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap" }}>
        <input
          type="search"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวงดนตรี..."
          style={{
            flex: 1,
            padding: "0.65rem 1rem",
            borderRadius: "8px",
            border: "1px solid #374151",
            backgroundColor: "#1f2937",
            color: "#fff",
            outline: "none"
          }}
        />
        <div style={{ color: "#60a5fa", fontWeight: "500" }}>
          กำลังติดตาม: <strong>{followedIds.length}</strong> วง
        </div>
      </div>

      {visibleBands.length === 0 ? (
        <div style={{ textAlign: "center", color: "#9ca3af", padding: "3rem 0" }}>
          ไม่พบวงดนตรีที่ตรงกับเงื่อนไข
        </div>
      ) : (
        <section style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowed={followedIds.includes(band.id)}
              onToggleFollow={handleToggleFollow}
              likes={likesMap[band.id] || 0}
              onLike={handleLike}
            />
          ))}
        </section>
      )}
    </main>
  );
}