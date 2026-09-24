export type GameStatus = 'ยังไม่เริ่ม' | 'กำลังเล่น' | 'เล่นจบแล้ว';

export interface Game {
  id: string;
  name: string;      
  platform: string;    
  expectedHours: number; 
  status: GameStatus;   
  imageUrl?: string;
}