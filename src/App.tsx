import { InputArea } from './components/InputArea';
import { ControlPanel } from './components/ControlPanel';
import { ResultDisplay } from './components/ResultDisplay';
import { useLottery } from './hooks/useLottery';
import './index.css';

function App() {
  const {
    candidates,
    count,
    winners,
    isDrawing,
    error,
    candidateCount,
    draw,
    reset,
    updateCandidates,
    updateCount,
  } = useLottery();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            🎲 随机抽奖工具
          </h1>
          <p className="text-purple-200">公平、快速的随机选择解决方案</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          {error && (
            <div className={`mb-6 p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-600 text-center ${error ? 'animate-shake' : ''}`}>
              ⚠️ {error}
            </div>
          )}

          <InputArea
            value={candidates}
            onChange={updateCandidates}
            candidateCount={candidateCount}
          />

          <ControlPanel
            count={count}
            onChangeCount={updateCount}
            onDraw={draw}
            onReset={reset}
            isDrawing={isDrawing}
            maxCount={candidateCount}
          />

          <ResultDisplay winners={winners} isDrawing={isDrawing} />
        </div>

        <div className="text-center mt-6 text-purple-200 text-sm">
          <p>💡 提示：每行输入一个候选者名称，点击抽奖即可随机选出中奖者</p>
        </div>
      </div>
    </div>
  );
}

export default App;