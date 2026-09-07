# GAME DESIGN DOCUMENT (GDD): CORE MECHANICS

## 1. Core Game Loop
1. **Crisis Presentation:** Player enters the scene; cold meter ticks down or immediate distress visual is highlighted.
2. **Item Selection:** Player inspects available interactive items in the bottom tray.
3. **Action Execution:** Player drags an item to a designated Hotspot on the scene.
4. **Validation & Resolution:**
   - *Valid Move:* Triggers state transformation animation, increases warmth/progress meter, updates character emotional reaction.
   - *Invalid Move:* Triggers failure animation, docks time/life, or displays a funny meme defeat screen.
5. **Phase Progression:** Phase 1 (Survival) -> Phase 2 (Sanitation) -> Phase 3 (Decoration) -> Victory Screen.

## 2. State Machine: Interactive Environment
Each hotspot follows a Finite State Machine (FSM):

