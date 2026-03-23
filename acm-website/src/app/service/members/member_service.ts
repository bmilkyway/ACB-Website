import pool from "../dbservice";
import { MemberDTO, MemberRow } from "./member_data";

// Segédfüggvény: nyers sort DTO-vá alakít
function toDTO(member: MemberRow): MemberDTO {
  return {
    memberid:      member.memberid,
    name:          member.name,
    role:          member.role,
    joined_at:     member.joined_at.toISOString(),
    description:   member.description ?? "",
    profile_image: member.profile_image
      ? `data:image/jpeg;base64,${member.profile_image.toString("base64")}`
      : "",
  };
}

/// Lekéri az összes tagot (szerepkör szerinti sorrendben: elnök, alelnök, tag)
export async function getAllMembers(): Promise<MemberDTO[]> {
  const [rows] = await pool.query(`
    SELECT * FROM Members
    ORDER BY FIELD(role, 'elnok', 'alelnok', 'tag'), name ASC
  `);
  return (rows as MemberRow[]).map(toDTO);
}

/// ID alapján lekér egy tagot
export async function getMemberById(id: number): Promise<MemberDTO | null> {
  const [rows] = await pool.query(
    "SELECT * FROM Members WHERE memberid = ?",
    [id]
  );
  const member = (rows as MemberRow[])[0];
  if (!member) return null;
  return toDTO(member);
}

/// Szerepkör alapján szűr (pl. csak az elnök)
export async function getMembersByRole(role: MemberRow["role"]): Promise<MemberDTO[]> {
  const [rows] = await pool.query(
    "SELECT * FROM Members WHERE role = ? ORDER BY name ASC",
    [role]
  );
  return (rows as MemberRow[]).map(toDTO);
}
