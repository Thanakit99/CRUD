'use client';

import { useState } from 'react';
import type { Game } from '@/types/game';
import { initialGames } from '@/data/games';
import GameCard from '@/components/GameCard';
import GameForm from '@/components/GameForm';

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingGame, setEditingGame] = useState<Game | null>(null);

  const handleFormSubmit = (gameData: Omit<Game, 'id'>) => {
    if (editingGame) {
      setGames(
        games.map((g) => (g.id === editingGame.id ? { ...gameData, id: g.id } : g))
      );
    } else {
      const newGame: Game = {
        id: Date.now().toString(),
        ...gameData,
      };
      setGames([...games, newGame]);
    }
    closeForm();
  };

  const handleEdit = (game: Game) => {
    setEditingGame(game);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('คุณต้องการลบเกมนี้ใช่หรือไม่?')) {
      setGames(games.filter((g) => g.id !== id));
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingGame(null);
  };

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.platform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">รายการเกมที่ตั้งใจจะเล่น</h1>
          <p className="text-gray-400 text-sm">ตรวจสอบรายชื่อเกมและสถานะที่คุณสนใจ</p>
        </div>
        {!isFormOpen && (
          <button
            onClick={() => {
              setEditingGame(null);
              setIsFormOpen(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            + เพิ่มเกมใหม่
          </button>
        )}
      </div>

      {/* ช่องค้นหาและตัวนับจำนวนเกม */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#181b22] border border-gray-800 p-4 rounded-xl mb-8">
        <input
          type="text"
          placeholder="ค้นหาชื่อเกม หรือ แพลตฟอร์ม..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-96 bg-[#12141a] text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm"
        />
        <div className="text-gray-300 text-sm font-medium whitespace-nowrap">
          เกมทั้งหมด: <span className="text-white font-bold">{games.length}</span> เกม
        </div>
      </div>

      {isFormOpen && (
        <div className="mb-8">
          <GameForm
            initialData={editingGame}
            onSubmit={handleFormSubmit}
            onCancel={closeForm}
          />
        </div>
      )}

      {filteredGames.length === 0 ? (
        <div className="text-center py-12 bg-[#181b22] rounded-xl border border-gray-800">
          <p className="text-gray-400">ไม่พบรายการเกมในระบบ</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onEdit={() => handleEdit(game)}
              onDelete={() => handleDelete(game.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}