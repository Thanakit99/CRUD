'use client';

import { useState, useEffect } from 'react';
import type { Game, GameStatus } from '@/types/game';

type GameFormProps = {
  initialData?: Game | null;
  onSubmit: (gameData: Omit<Game, 'id'>) => void;
  onCancel: () => void;
};

export default function GameForm({ initialData, onSubmit, onCancel }: GameFormProps) {
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('');
  const [expectedHours, setExpectedHours] = useState<number | ''>('');
  const [status, setStatus] = useState<GameStatus>('ยังไม่เริ่ม');
  const [imageUrl, setImageUrl] = useState(''); // เพิ่ม State สำหรับเก็บลิงก์รูปภาพ

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPlatform(initialData.platform);
      setExpectedHours(initialData.expectedHours);
      setStatus(initialData.status);
      setImageUrl(initialData.imageUrl || ''); // โหลดค่ารูปภาพเดิมถ้ามี
    } else {
      setName('');
      setPlatform('');
      setExpectedHours('');
      setStatus('ยังไม่เริ่ม');
      setImageUrl('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !platform || expectedHours === '') return;

    onSubmit({
      name,
      platform,
      expectedHours: Number(expectedHours),
      status,
      imageUrl, // ส่งข้อมูลรูปภาพกลับไปด้วย
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#181b22] p-6 rounded-xl shadow-lg border border-gray-800 space-y-4">
      <h2 className="text-xl font-bold text-white">
        {initialData ? 'แก้ไขข้อมูลเกม' : 'เพิ่มเกมใหม่'}
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">ชื่อเกม</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-[#12141a] px-3 py-2 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          placeholder="ระบุชื่อเกม..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">แพลตฟอร์ม</label>
        <input
          type="text"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          required
          className="w-full bg-[#12141a] px-3 py-2 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          placeholder="เช่น PC, PS5, Nintendo Switch"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">ลิงก์รูปภาพ (Image URL)</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full bg-[#12141a] px-3 py-2 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">จำนวนชั่วโมงที่คาดว่าจะใช้เล่น</label>
        <input
          type="number"
          value={expectedHours}
          onChange={(e) => setExpectedHours(e.target.value === '' ? '' : Number(e.target.value))}
          required
          min="0"
          className="w-full bg-[#12141a] px-3 py-2 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          placeholder="เช่น 40"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">สถานะ</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as GameStatus)}
          className="w-full bg-[#12141a] px-3 py-2 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
          <option value="กำลังเล่น">กำลังเล่น</option>
          <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
        >
          ยกเลิก
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          บันทึก
        </button>
      </div>
    </form>
  );
}