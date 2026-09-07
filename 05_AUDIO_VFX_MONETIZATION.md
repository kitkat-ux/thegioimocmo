# AUDIO, VFX & MONETIZATION SPECIFICATION

## 1. Sound Effects (SFX) Trigger Map
- `sfx_wind_loop`: Ambient blizzard wind howling (Plays on loop until window is sealed).
- `sfx_hammer_nail`: Rapid wooden banging sound when applying planks to window.
- `sfx_fire_burst`: "Whoosh" sound followed by crackling wood when fire lights up.
- `sfx_clean_sweep`: Whisking straw sound when sweeping floor.
- `sfx_fail_buzzer`: Cartoon meme brass fail tuba sound upon wrong item usage.
- `sfx_level_complete`: Upbeat orchestral fanfare with baby laughing sound.

## 2. Visual Effects (VFX) Configuration
- **Cold Fog Particle:** Emit low-opacity cyan/white drifting smoke particles from the baby's and mother's mouths every 2 seconds.
- **Fire Sparkles:** Radial gold sparkle particles bursting outward from the fireplace upon ignition.
- **Transform Starburst:** A 0.4s flash-white burst when transitioning an object from broken to repaired.

## 3. Monetization & Hint System Integration
- **Rewarded Video Ad Hook:** 
  - *Trigger:* Player taps the "Lightbulb / Hint" icon.
  - *Ad Callback:* Highlights the correct item in green outline and animates a bouncing hand pointer dragging from the item to the target hotspot.
- **Revive / Skip Mechanic:**
  - When time expires or player triggers catastrophic failure (e.g., freezing the room completely), show a 5-second countdown with an "Watch Ad to Revive (+30s)" button before triggering the final GameOver screen.
