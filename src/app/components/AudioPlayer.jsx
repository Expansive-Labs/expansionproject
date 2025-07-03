"use client";
import React, { useState, useRef, useEffect } from "react";
import { 
  PlayIcon, 
  PauseIcon, 
  BackwardIcon, 
  ForwardIcon 
} from "@heroicons/react/24/solid";

const AudioPlayer = () => {
  // Track list from Conscious Tortoise album
  const tracks = [
    { name: "Lincoln Boulevard", duration: "04:04", file: "/audio/lincoln-boulevard.mp3" },
    { name: "Badazz", duration: "04:12", file: "/audio/badazz.mp3" },
    { name: "Royal", duration: "04:32", file: "/audio/royal.mp3" },
    { name: "Turismo", duration: "01:24", file: "/audio/turismo.mp3" },
    { name: "Roloway", duration: "04:16", file: "/audio/roloway.mp3" },
    { name: "3G", duration: "05:27", file: "/audio/3g.mp3" },
    { name: "Lunar", duration: "04:20", file: "/audio/lunar.mp3" }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Handle track changes
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
        setIsPlaying(false);
      });
    }
  }, [currentTrackIndex]);

  // Set up event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => handleNext();
    const handleError = (e) => {
      console.error('Audio error:', e);
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const handlePlayPause = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error('Error toggling playback:', err);
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className="flex items-center w-full gap-1.5 px-2 py-1 bg-[#1a1a1a] rounded-lg border border-[#33353F]">
      <audio ref={audioRef} src={currentTrack.file} preload="metadata" />
      
      {/* Controls */}
      <div className="flex items-center gap-1">
        <button onClick={handlePrevious} className="text-[#7c7c78] hover:text-green-400 h-6 flex items-center justify-center rounded aspect-square">
          <BackwardIcon className="w-3 h-3" />
        </button>
        <button onClick={handlePlayPause} className="text-[#f6f3ed] hover:text-green-400 h-6 flex items-center justify-center rounded aspect-square">
          {isPlaying ? <PauseIcon className="w-3 h-3" /> : <PlayIcon className="w-3 h-3 ml-px" />}
        </button>
        <button onClick={handleNext} className="text-[#7c7c78] hover:text-green-400 h-6 flex items-center justify-center rounded aspect-square">
          <ForwardIcon className="w-3 h-3" />
        </button>
      </div>
      
      {/* Track info */}
      <div className="flex-1 min-w-0 pl-1">
        <p className="text-[#f6f3ed] text-sm font-medium determination-mono-font truncate">
          {currentTrack.name}
        </p>
      </div>
      
      {/* Bandcamp link */}
      <a
        href="https://expansionproject.bandcamp.com/album/conscious-tortoise"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#7c7c78] hover:text-green-400 text-sm determination-mono-font flex-shrink-0"
        title="Listen on Bandcamp"
      >
        BC
      </a>
    </div>
  );
};

export default AudioPlayer; 