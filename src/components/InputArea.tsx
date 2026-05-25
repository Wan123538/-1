interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  candidateCount: number;
}

export function InputArea({ value, onChange, candidateCount }: InputAreaProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="text-lg font-semibold text-gray-700">候选名单</label>
        <span className="text-sm text-gray-500">
          共 {candidateCount} 人
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="每行输入一个候选者名称..."
        className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}