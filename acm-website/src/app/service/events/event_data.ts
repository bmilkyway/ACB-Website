// Nyers adatbázis sor – pontosan tükrözi a DB táblát
export type EventRow = {
    eventid: number;
    title: string;
    description: string | null;
    image: Buffer | null;
    date?: Date | null;
    location?: string | null;
    youtubeUrl?:string | null;
  };

  
  // Feldolgozott adat – amit a komponensek kapnak
export type EventDTO = {
    eventid: number;
    title: string;
    description: string;
    image: string;         // már kész base64 URL string
    date?: string | null;
    location?: string | null;
    youtubeUrl?:string | null;
  };