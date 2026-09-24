import type { Game } from "@/types/game";

type GameCardProps = {
  game: Game;
  onEdit: () => void;
  onDelete: () => void;
};

export default function GameCard({ game, onEdit, onDelete }: GameCardProps) {
  const getStatusBadgeClass = (status: Game['status']) => {
    switch (status) {
      case 'ยังไม่เริ่ม':
        return 'bg-gray-800 text-gray-300 border border-gray-700';
      case 'กำลังเล่น':
        return 'bg-blue-950 text-blue-300 border border-blue-800';
      case 'เล่นจบแล้ว':
        return 'bg-green-950 text-green-300 border border-green-800';
      default:
        return 'bg-gray-800 text-gray-300';
    }
  };

  return (
    <div className="bg-[#181b22] border border-gray-800 rounded-xl p-5 shadow-lg hover:border-gray-700 transition-all flex flex-col justify-between">
      <div>
        {/* ส่วนแสดงรูปภาพเกม */}
        {game.imageUrl && (
          <div className="relative h-44 w-full overflow-hidden rounded-lg mb-4 bg-gray-900 border border-gray-800">
            <img
              src={game.imageUrl}
              alt={game.name}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="flex justify-between items-start gap-2 mb-3">
          <h3 className="text-lg font-semibold text-white">{game.name}</h3>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(game.status)}`}>
            {game.status}
          </span>
        </div>
        
        <div className="space-y-1.5 text-sm text-gray-400 mb-4">
          <p>
            <span className="text-gray-300">แพลตฟอร์ม:</span> {game.platform}
          </p>
          <p>
            <span className="text-gray-300">เวลาที่คาดว่าจะใช้:</span> {game.expectedHours} ชั่วโมง
          </p>
        </div>
      </div>
      
      <div className="flex justify-end gap-3 pt-3 border-t border-gray-800/60">
        <button
          onClick={onEdit}
          className="px-3 py-1.5 text-sm font-medium text-blue-400 hover:bg-blue-950/50 rounded-md transition-colors"
        >
          แก้ไข
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1.5 text-sm font-medium text-red-400 hover:bg-red-950/50 rounded-md transition-colors"
        >
          ลบ
        </button>
      </div>
    </div>
  );
}