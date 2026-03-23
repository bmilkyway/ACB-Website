import { motion } from "framer-motion";
import { MemberDTO, ROLE_LABELS } from "../service/members/member_data";

type MemberCardProps = {
  member: MemberDTO;
  index?: number;
};

const ROLE_BADGE_STYLES: Record<string, string> = {
  elnok:   "bg-indigo-600/30 text-indigo-300 border-indigo-500/40",
  alelnok: "bg-violet-600/30 text-violet-300 border-violet-500/40",
  tag:     "bg-gray-700/60 text-gray-300 border-gray-600/40",
};

export function MemberCard({ member, index = 0 }: MemberCardProps) {
  const imageSrc = member.profile_image || "/assets/default_profile_pic.png";
  const badgeStyle = ROLE_BADGE_STYLES[member.role] ?? ROLE_BADGE_STYLES.tag;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="flex flex-col items-center text-center bg-gray-800 rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
    >
      {/* Profilkép */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-500/40 mb-4 shrink-0">
        <img
          src={imageSrc}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Szerepkör badge */}
      <span className={`inline-block px-3 py-0.5 text-xs font-semibold rounded-full border mb-3 ${badgeStyle}`}>
        {ROLE_LABELS[member.role]}
      </span>

      {/* Név */}
      <h3 className="text-white font-bold text-lg leading-tight mb-2">
        {member.name}
      </h3>

      {/* Csatlakozás dátuma */}
      <p className="text-xs text-gray-500 mb-3">
        Tag since {new Date(member.joined_at).getFullYear()}
      </p>

      {/* Leírás */}
      {member.description && (
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {member.description}
        </p>
      )}
    </motion.div>
  );
}
