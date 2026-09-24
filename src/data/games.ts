import type { Game } from '@/types/game';

export const initialGames: Game[] = [
  {
    id: '1',
    name: 'E FOOTBALL',
    platform: 'Nintendo Switch',
    expectedHours: 100,
    status: 'กำลังเล่น',
    imageUrl: '/image/Band/3.jpg',
  },
  {
    id: '2',
    name: 'ROV',
    platform: 'PC',
    expectedHours: 60,
    status: 'ยังไม่เริ่ม',
    imageUrl: '/image/Band/4.jpg',
  },
  {
    id: '3',
    name: 'LOL',
    platform: 'Nintendo Switch',
    expectedHours: 150,
    status: 'เล่นจบแล้ว',
    imageUrl: '/image/Band/2.jpg',
  },
  {
    id: '4',
    name: 'MINECRAFT',
    platform: 'PlayStation 5',
    expectedHours: 8,
    status: 'ยังไม่เริ่ม',
    imageUrl: '/image/Band/1.jpg',
  },
];