import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/mock";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${COMPANY.phoneRaw.replace(/\D/g, "")}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Whatsapp"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        className="w-14 h-14 rounded-full bg-emerald-900 hover:bg-emerald-950 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Call"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
