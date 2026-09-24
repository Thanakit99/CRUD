import { Game } from '@/types/game';

export const initialGames: Game[] = [
  {
    id: '1',
    name: '🌟 E FOOTBALL',
    platform: 'Nintendo Switch',
    expectedHours: 100,
    status: 'กำลังเล่น',
  },
  {
    id: '2',
    name: '🚀 ROV',
    platform: 'PC',
    expectedHours: 60,
    status: 'ยังไม่เริ่ม',
  },
  {
    id: '3',
    name: '🐾 LOL',
    platform: 'Nintendo Switch',
    expectedHours: 150,
    status: 'เล่นจบแล้ว',
  },
  {
    id: '4',
    name: '🐱 MINECRAFT',
    platform: 'PlayStation 5',
    expectedHours: 8,
    status: 'ยังไม่เริ่ม',
  },
];