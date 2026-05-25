interface ResultDisplayProps {
  winners: string[];
  isDrawing: boolean;
}

export function ResultDisplay({ winners, isDrawing }: ResultDisplayProps) {
  if (isDrawing) {
    return (
      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <p className="text-xl text-gray-600 animate-pulse">正在随机抽取...</p>
      </div>
    );
  }

  if (winners.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        🎊 中奖名单
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {winners.map((winner, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 text-center shadow-lg animate-bounce-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-sm text-gray-500 mb-1">第 {index + 1} 名</div>
            <div className="text-lg font-bold text-purple-600">{winner}</div>
          </div>
        ))}
      </div>
    </div>
  );
}