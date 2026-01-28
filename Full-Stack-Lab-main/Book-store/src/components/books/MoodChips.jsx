import { Box, Button } from "@mui/material";
import { MOOD_CATEGORIES } from "../../data/books";

export default function MoodChips({ selectedMood, onMoodChange }) {
  return (
    <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
      {MOOD_CATEGORIES.map((mood) => (
        <Button
          key={mood}
          variant={selectedMood === mood ? "contained" : "outlined"}
          className={selectedMood === mood ? "chip-pill active" : "chip-pill"}
          size="small"
          onClick={() => onMoodChange(mood)}
          sx={{
            whiteSpace: "nowrap",
            color: selectedMood === mood ? "white" : "var(--color-primary)",
            borderColor: "var(--color-secondary)",
            backgroundColor: selectedMood === mood ? "var(--color-primary)" : "transparent",
            "&:hover": {
              backgroundColor: selectedMood === mood ? "var(--color-primary)" : "var(--color-warm-bg)"
            }
          }}
        >
          {mood}
        </Button>
      ))}
    </Box>
  );
}
