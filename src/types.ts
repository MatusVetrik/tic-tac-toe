export type Grid = [
  [Player, Player, Player],
  [Player, Player, Player],
  [Player, Player, Player]
];

export type Player = 1 | 2 | "";

export interface GridMember {
  x: number;
  y: number;
}
