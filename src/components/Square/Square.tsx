import { MouseEventHandler } from 'react';
import './style.css';

export default function Square({ value, onSquareClick }: {value: string; onSquareClick: MouseEventHandler<HTMLButtonElement>}) {
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
