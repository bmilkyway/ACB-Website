"use client"
import { EventDTO } from "../service/events/event_data";
import { Navbar } from "./navbar";

type Props = {
    event: EventDTO;
};

// YouTube URL-ből embed URL-t csinál
function getYoutubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return  match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
}
export function EventPageClient({ event }: Props) {
  const embedUrl = event.youtubeUrl ? getYoutubeEmbedUrl(event.youtubeUrl) : null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* KÉP */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-700" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      {/* TARTALOM */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          {event.title}
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          {event.description}
        </p>

        {/* YOUTUBE VIDEÓ */}
        {embedUrl && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Videó</h2>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={embedUrl}
                title="YouTube videó"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
