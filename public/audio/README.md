# Audio Files Setup

This directory is for storing the audio files for the Conscious Tortoise album tracks.

## Required Files

Add the following MP3 files to this directory:

1. `lincoln-boulevard.mp3` - Lincoln Boulevard (04:04)
2. `badazz.mp3` - Badazz (04:12)
3. `royal.mp3` - Royal (04:32)
4. `turismo.mp3` - Turismo (01:24)
5. `roloway.mp3` - Roloway (04:16)
6. `3g.mp3` - 3G (05:27)
7. `lunar.mp3` - Lunar (04:20)

## File Naming

Make sure the file names match exactly as listed above (lowercase, with hyphens instead of spaces).

## Alternative: Using Different Audio

If you want to use different tracks, update the `tracks` array in `/src/app/components/AudioPlayer.jsx` with your track information:

```javascript
const tracks = [
  { name: "Your Track Name", duration: "00:00", file: "/audio/your-track-file.mp3" },
  // ... more tracks
];
```

## Note

The audio player will gracefully handle missing files and log a message to the console if files are not found. 