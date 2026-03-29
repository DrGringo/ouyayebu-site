"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Mail,
  Calendar,
  User,
} from "lucide-react";

const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
    <svg className="w-full h-full">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-green-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-50">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 50 Q 25 30 50 50 T 100 50"
            fill="none"
            stroke="#22c55e"
            strokeWidth="0.5"
            animate={{
              d: [
                "M0 50 Q 25 30 50 50 T 100 50",
                "M0 50 Q 25 70 50 50 T 100 50",
                "M0 50 Q 25 30 50 50 T 100 50",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 50 Q 25 70 50 50 T 100 50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            animate={{
              d: [
                "M0 50 Q 25 70 50 50 T 100 50",
                "M0 50 Q 25 30 50 50 T 100 50",
                "M0 50 Q 25 70 50 50 T 100 50",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          /><motion.path
            d="M0 50 Q 25 70 50 50 T 100 50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.25"
            animate={{
              d: [
                "M0 50 Q 25 70 50 50 T 100 50",
                "M0 50 Q 25 30 50 50 T 100 50",
                "M0 50 Q 25 70 50 50 T 100 50",
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 px-4">
            <img
              src="/ouyayebu-logo-i.svg"
              alt="Ouyayebu Records"
              className="mx-auto w-160 h-auto invert brightness-200 contrast-125 drop-shadow-[0_0_80px_rgba(34,197,94,0.3)]"
             />
          </div>

          <p className="text-gray-400 text-sm md:text-base tracking-[0.5em] uppercase mb-12 font-mono">
            Berlin-based independent vinyl and digital label
          </p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#22c55e", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-green-500 text-green-500 font-mono text-sm tracking-widest uppercase transition-colors"
          >
            Latest Releases
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-green-500 to-transparent" />
      </motion.div>
    </section>
  );
};

const ArtistCard = ({ name, genre, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-900 border border-gray-800 overflow-hidden cursor-pointer"
    >
      <div className="aspect-square bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <User className="w-20 h-20 text-gray-700 group-hover:text-green-500 transition-colors duration-300" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white font-mono mb-1 group-hover:text-green-500 transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-sm font-mono uppercase tracking-wider">{genre}</p>
      </div>
      <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
const Artists = () => {
  const artists = [
    { name: "Ën", genre: "Experimental Electronic" },
    { name: "K.G.", genre: "Weird Techno" },
    { name: "Tonel' x Low Tape", genre: "Underground House" },
    { name: "Logdam", genre: "Ambient Techno" },
    { name: "Anton Kubikov", genre: "Minimal Techno" },
    { name: "Kudamir Katitsa", genre: "Experimental Ambient" },
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-black" id="artists">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white font-mono mb-4">
            ARTISTS
          </h2>
          <div className="w-24 h-1 bg-green-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <ArtistCard key={artist.name} {...artist} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Releases = () => {
  const releases = [
    {
      title: "Yakatoku (Rei Calero Remix)",
      artist: "Ën",
      year: "2025",
      cover:
        "https://i1.sndcdn.com/artworks-yQuiIBHmWZ8VFWvg-tVuNeQ-t1080x1080.png",
      soundcloud:
        "https://soundcloud.com/meoko/premiere-en-natural-earth-rei-calero-remix-ouyayebu-records",
      tags: ["Experimental", "Immersive", "Electronic"],
    },
    {
      title: "Streep Jonny",
      artist: "K.G.",
      year: "2022",
      cover:
        "https://i1.sndcdn.com/artworks-CEZBaynOahXVME8r-5vqz9Q-t1080x1080.jpg",
      soundcloud: "https://soundcloud.com/golikov/kg-streep-jonny-ouyayebu",
      tags: ["Weird", "Techno", "Groove"],
    },
    {
      title: "Some day in Subway EP",
      artist: "Tonel' x Low Tape",
      year: "2022",
      cover:
        "https://i1.sndcdn.com/avatars-000636694827-ejpdbt-t1080x1080.jpg",
      soundcloud:
        "https://soundcloud.com/ouyayebu/sets/low-tapetonel-snippets",
      tags: ["Underground", "House", "Experimental"],
    },
    {
      title: "Chapter I",
      artist: "Logdam",
      year: "2022",
      cover:
        "https://placehold.co/600x600/black/green?text=Chapter+I",
      soundcloud: "https://soundcloud.com/ouyayebu/chapter-i",
      tags: ["Ambient", "Techno", "Raw"],
    },
    {
      title: "Оuyayebu 爆弾 // ROOT",
      artist: "Own Productions",
      year: "2021",
      cover: "https://i1.sndcdn.com/artworks-Q64QU5OtHEA8mIpx-rcL3TQ-t1080x1080.jpg",
      soundcloud:
        "https://soundcloud.com/ouyayebu/ouyayebu-music-root-own-productions",
      tags: ["Experimental", "Ambient", "Mix"],
    },
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-black" id="releases">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white font-mono mb-4">
            RELEASES
          </h2>
          <div className="w-24 h-1 bg-green-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900 border border-gray-800 overflow-hidden cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white font-mono mb-1 group-hover:text-green-500 transition-colors">
                  {release.title}
                </h3>
                <p className="text-gray-500 text-sm font-mono uppercase tracking-wider mb-2">
                  {release.artist} - {release.year}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {release.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-xs text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={release.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline font-mono text-sm"
                >
                  Listen on SoundCloud
                </a>
              </div>
              <iframe
                 width="100%"
                 height="166"
                 scrolling="no"
                 frameBorder="no"
                 allow="autoplay"
                 src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                 release.soundcloud
                 )}&color=%2322c55e&inverse=true&auto_play=false&show_user=true`}
                 loading="lazy"
                 title={`${release.title} player`}
               ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MusicPlayer = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 z-40 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <iframe
          width="100%"
          height="20"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ouyayebu/sets/ouyayebu-kasette&color=%2322c55e&inverse=true&auto_play=false&show_user=true"
          title="Ouyayebu Kasette player"
        ></iframe>
      </div>
    </motion.div>
  );
};



const EventRow = ({ date, title, location, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
      className="border-b border-gray-800 py-8 px-4 cursor-pointer transition-colors group"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <div className="text-green-500 font-mono text-sm w-24">
            {date}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-mono group-hover:text-green-500 transition-colors">
              {title}
            </h3>
            <p className="text-gray-500 font-mono text-sm mt-1 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {location}
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 border border-gray-600 text-gray-300 font-mono text-sm uppercase tracking-wider hover:border-green-500 hover:text-green-500 transition-colors"
        >
          Tickets
        </motion.button>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const events = [
    { date: "MAR 15", title: "WAREHOUSE PROJECT", location: "Berlin, DE" },
    { date: "APR 02", title: "ACID NIGHTS", location: "London, UK" },
    { date: "APR 20", title: "VOID SOUNDS", location: "Tokyo, JP" },
    { date: "MAY 12", title: "DEEP FREQUENCY", location: "Amsterdam, NL" },
  ];

  return (
    <section className="py-32 bg-black" id="events">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white font-mono mb-4">
            EVENTS
          </h2>
          <div className="w-24 h-1 bg-green-500" />
        </motion.div>
      </div>

      <div className="border-t border-gray-800">
        {events.map((event, index) => (
          <EventRow key={event.title} {...event} index={index} />
        ))}
      </div>
    </section>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
       <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
           <img
              src="/ouyayebu-logo.svg"  // или .png, если файл так называется
              alt="Ouyayebu Records"
              className="h-30 w-auto"
           />
         </a>

          <div className="hidden md:flex items-center gap-8">
            {["Releases", "Artists", "Events", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-green-500 font-mono text-sm uppercase tracking-wider transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-black z-40 md:hidden flex flex-col items-center justify-center gap-8"
          >
            {["Releases", "Artists", "Events", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-mono text-white hover:text-green-500 uppercase"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-black text-white font-mono mb-2">
            OUYAYEBU
          </h3>
          <p className="text-gray-500 font-mono text-sm">
            Independent vinyl and digital label based in Berlin
          </p>
        </div>

        <div className="flex gap-6">
          <motion.a
            href="https://www.instagram.com/ouyayebu/"
            whileHover={{ scale: 1.2, color: "#22c55e" }}
            className="text-gray-400 hover:text-green-500 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:info@ouyayebu.com"
            whileHover={{ scale: 1.2, color: "#22c55e" }}
            className="text-gray-400 hover:text-green-500 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>

        <p className="text-gray-600 font-mono text-xs">
          © 2026 OUYAYEBU RECORDS
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-green-500 selection:text-black">
      <NoiseOverlay />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <Releases />
        <Artists />
        <Events />
      </main>

      <MusicPlayer />

      <Footer />
    </div>
  );
}