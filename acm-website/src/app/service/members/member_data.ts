// Szerep enum – pontosan tükrözi a DB ENUM mezőt
export type MemberRole = "elnok" | "alelnok" | "tag";

// Nyers adatbázis sor – pontosan tükrözi a Members táblát
export type MemberRow = {
  memberid: number;
  name: string;
  role: MemberRole;
  joined_at: Date;
  description: string | null;
  profile_image: Buffer | null;
};

// Feldolgozott adat – amit a komponensek kapnak
export type MemberDTO = {
  memberid: number;
  name: string;
  role: MemberRole;
  joined_at: string;        // ISO string
  description: string;
  profile_image: string;    // már kész base64 URL string, vagy ""
};

// Olvasható megjelenítési nevek a szerepekhez
export const ROLE_LABELS: Record<MemberRole, string> = {
  elnok:    "Elnök",
  alelnok:  "Alelnök",
  tag:      "Tag",
};
