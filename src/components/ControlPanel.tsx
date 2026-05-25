interface ControlPanelProps {
  count: number;
  onChangeCount: (count: number) => void;
  onDraw: () => void;
  onReset: () => void;
  isDrawing: boolean;
  maxCount: number;
}

export function ControlPanel({
  count,
  onChangeCount,
  onDraw,
  onReset,
  isDrawing,
  maxCount,
}: ControlPanelProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <label className="text-gray-700 font-medium whitespace-nowrap">抽取数量</label>
        <input
          type="number"
          min="1"
          max={maxCount}
          value={count}
          onChange={(e) => onChangeCount(Math.max(1, Math.min(maxCount, parseInt(e.target.value) || 1)))}
          className="w-20 px-3 py-2 border-2 border-gray-200 rounded-lg text-center focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
        />
        <span className="text-gray-500 text-sm">/ {maxCount}</span>
      </div>
      <div className="flex gap-3 w-full sm:w-auto">
        <button
          onClick={onDraw}
          disabled={isDrawing}
          className={`flex-1 sm:flex-none px-8 py-3 rounded-full font-bold text-white transition-all duration-300 ${
            isDrawing
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:scale-105 active:scale-95 animate-pulse-glow'
          }`}
        >
          {isDrawing ? '抽奖中...' : '开始抽奖'}
        </button>
        <button
          onClick={onReset}
          className="flex-1 sm:flex-none px-6 py-3 rounded-full font-bold text-purple-600 bg-white border-2 border-purple-500 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          重置
        </button>
      </div>
    </div>
  );
}