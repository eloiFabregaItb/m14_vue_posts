export type postType = {
  content: string
  emoji: EmojiElement
  timestamp:number
}

export type emojiType = "Happy" | "Excited" | "Joyful" | "Smiling" | "Grinning" | "Laughing" | "Hilarious" | "ROFL" | "Content" | "In Love"  | "Cool" | "Angelical" | "Smirking" | "Satisfied"

export type EmojiElement = {
  emoji: string;
  description: emojiType;
};
