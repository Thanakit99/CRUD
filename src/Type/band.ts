export type BandMember = {
  name: string;
  image: string;
  role: string; 
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  yearFormed: number;
  image: string;
  members: BandMember[];
  description?: string;
};