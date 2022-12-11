export type ObjectData = Record<string, any>;

export type Type = "comedy" | "tragedy" | "horror";

export type InvoicePlay = {
  playID: string;
  audience: number;
  play: PlayerItem;
  amount: number;
  volumeCredit: number;
};

export type Invoice = {
  customer: string;
  performances: InvoicePlay[];
};

export type PlayerItem = {
  type: Type;
  name: string;
};

export type Player = Record<string, PlayerItem>;
