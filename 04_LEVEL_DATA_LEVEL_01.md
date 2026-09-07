# LEVEL 01 CONFIGURATION DATA: FROZEN CABIN

Arena.ai can save this directly as `public/data/level_01.json`.

```json
{
  "level_id": "lvl_01_frozen_cabin",
  "level_title": "Save Mom & Baby in Blizzard",
  "time_limit_seconds": 90,
  "initial_background": "bg_cabin_broken",
  "temperature_start_celsius": -15,
  "temperature_target_celsius": 24,
  "hotspots": [
    {
      "id": "spot_window",
      "order": 1,
      "x": 780,
      "y": 420,
      "width": 240,
      "height": 300,
      "required_item_id": "item_wood_planks",
      "solved_sprite": "window_boarded_up",
      "temp_boost": 8,
      "hint_text": "Block the freezing blizzard wind first!"
    },
    {
      "id": "spot_fireplace",
      "order": 2,
      "x": 260,
      "y": 880,
      "width": 220,
      "height": 260,
      "required_item_id": "item_firewood_bundle",
      "solved_sprite": "fireplace_roaring",
      "temp_boost": 15,
      "hint_text": "Start the fire to warm up the room."
    },
    {
      "id": "spot_mother",
      "order": 3,
      "x": 540,
      "y": 1200,
      "width": 300,
      "height": 350,
      "required_item_id": "item_wool_blanket",
      "solved_sprite": "char_warmed_up",
      "temp_boost": 8,
      "hint_text": "Cover the shivering baby and mother!"
    },
    {
      "id": "spot_floor_trash",
      "order": 4,
      "x": 540,
      "y": 1500,
      "width": 600,
      "height": 200,
      "required_item_id": "item_straw_broom",
      "solved_sprite": "floor_clean",
      "temp_boost": 2,
      "hint_text": "Sweep out the icy debris and garbage."
    }
  ],
  "available_items": [
    { "id": "item_wood_planks", "icon_key": "icon_planks" },
    { "id": "item_firewood_bundle", "icon_key": "icon_firewood" },
    { "id": "item_wool_blanket", "icon_key": "icon_blanket" },
    { "id": "item_straw_broom", "icon_key": "icon_broom" },
    { "id": "item_electric_fan", "icon_key": "icon_fan" },
    { "id": "item_cold_soda", "icon_key": "icon_soda" }
  ]
}
