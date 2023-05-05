import { MouseEventHandler } from 'react';
import './style.css';

interface Props {
  value: 'X' | 'O' | null;
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Square({ value, onSquareClick }: Props) {
  return (
    <button
      type="button"
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
