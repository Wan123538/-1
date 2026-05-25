import { useState, useCallback } from 'react';
import { shuffle } from '../utils/shuffle';

interface LotteryState {
  candidates: string;
  count: number;
  winners: string[];
  isDrawing: boolean;
  error: string | null;
}

const DEFAULT_CANDIDATES = `张三
李四
王五
赵六
钱七
孙八
周九
吴十`;

export function useLottery() {
  const [state, setState] = useState<LotteryState>({
    candidates: DEFAULT_CANDIDATES,
    count: 1,
    winners: [],
    isDrawing: false,
    error: null,
  });

  const validateInput = useCallback((candidates: string, count: number): string | null => {
    const candidateList = candidates
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);
    
    if (candidateList.length === 0) {
      return '请先输入候选项！';
    }
    
    if (count < 1) {
      return '抽取数量至少为1！';
    }
    
    if (count > candidateList.length) {
      return '抽取数量不能超过候选项数量！';
    }
    
    return null;
  }, []);

  const draw = useCallback(() => {
    const { candidates, count } = state;
    const error = validateInput(candidates, count);
    
    if (error) {
      setState(prev => ({ ...prev, error }));
      setTimeout(() => {
        setState(prev => ({ ...prev, error: null }));
      }, 3000);
      return;
    }

    setState(prev => ({ ...prev, isDrawing: true, winners: [], error: null }));

    const candidateList = candidates
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    setTimeout(() => {
      const shuffled = shuffle(candidateList);
      const selected = shuffled.slice(0, count);
      setState(prev => ({ ...prev, winners: selected, isDrawing: false }));
    }, 1500);
  }, [state, validateInput]);

  const reset = useCallback(() => {
    setState({
      candidates: DEFAULT_CANDIDATES,
      count: 1,
      winners: [],
      isDrawing: false,
      error: null,
    });
  }, []);

  const updateCandidates = useCallback((candidates: string) => {
    setState(prev => ({ ...prev, candidates, winners: [] }));
  }, []);

  const updateCount = useCallback((count: number) => {
    setState(prev => ({ ...prev, count, winners: [] }));
  }, []);

  const candidateCount = state.candidates
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 0).length;

  return {
    ...state,
    candidateCount,
    draw,
    reset,
    updateCandidates,
    updateCount,
  };
}