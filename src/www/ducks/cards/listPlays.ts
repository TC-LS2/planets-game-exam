import { CardsState } from "./CardsState";

function compare(a: any, b: any): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

let piles: any = null;
let result: any[] = [];
export function listPlays(state: CardsState): any[] {
  if (state.cards.piles === piles) return result;
  piles = state.cards.piles;

  result = Object.values(state.cards.piles)
    .flatMap((p) => p.cards)
    .map((card) => {
      const { id, ...play } = card;
      return play;
    })
    .sort((a, b) => {
      if (a.ownerName !== b.ownerName) return compare(a.ownerName, b.ownerName);
      if (a.pile !== b.pile) return compare(a.pile, b.pile);
      if (a.square !== b.square) return compare(a.square, b.square);
      if (a.type !== b.type) return compare(a.type, b.type);
      return compare(a.name, b.name);
    });

  return result;
}
