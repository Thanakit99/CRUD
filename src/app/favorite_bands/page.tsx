"use client";

import { useState, ChangeEvent } from "react";
import BandCard from "@/components/BandCard";
import { bands } from "@/data/bands";

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