export const STOIC_QUOTES: string[] = [
  "You have power over your mind — not outside events. Realize this, and you will find strength. — Marcus Aurelius",
  "It's not what happens to you, but how you react to it that matters. — Epictetus",
  "He who fears death will never do anything worthy of a living man. — Seneca",
  "Waste no more time arguing about what a good man should be. Be one. — Marcus Aurelius",
  "We suffer more often in imagination than in reality. — Seneca",
  "No man is free who is not master of himself. — Epictetus",
  "The impediment to action advances action. What stands in the way becomes the way. — Marcus Aurelius",
  "Difficulties strengthen the mind, as labor does the body. — Seneca",
  "First say to yourself what you would be; and then do what you have to do. — Epictetus",
  "How long are you going to wait before you demand the best for yourself? — Epictetus",
  "Wealth consists not in having great possessions, but in having few wants. — Epictetus",
  "If it is not right, do not do it; if it is not true, do not say it. — Marcus Aurelius",
  "Man conquers the world by conquering himself. — Zeno of Citium",
  "The whole future lies in uncertainty: live immediately. — Seneca",
  "Begin at once to live, and count each separate day as a separate life. — Seneca",
  "Freedom is not procured by a full enjoyment of what is desired, but by controlling the desire. — Epictetus",
  "It is not the man who has too little, but the man who craves more, that is poor. — Seneca",
  "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. — Marcus Aurelius",
  "How does it help to make troubles heavier by bemoaning them? — Seneca",
  "You could leave life right now. Let that determine what you do and say and think. — Marcus Aurelius",
  "Don't explain your philosophy. Embody it. — Epictetus",
  "The best revenge is to be unlike him who performed the injury. — Marcus Aurelius",
  "Man is not worried by real problems so much as by his imagined anxieties about real problems. — Epictetus",
  "Luck is what happens when preparation meets opportunity. — Seneca",
  "Every new beginning comes from some other beginning's end. — Seneca",
  "He suffers more than necessary, who suffers before it is necessary. — Seneca",
  "The best fighter is never angry. — Lao Tzu",
  "To be even-minded is the greatest virtue. — Marcus Aurelius",
  "What we do now echoes in eternity. — Marcus Aurelius",
  "Only the educated are free. — Epictetus",
  "Circumstances don't make the man, they only reveal him to himself. — Epictetus",
  "The obstacle is the way. — Marcus Aurelius",
  "A gem cannot be polished without friction, nor a man perfected without trials. — Seneca",
  "Do every act of your life as if it were the last. — Marcus Aurelius",
  "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has. — Epictetus",
  "The whole idea of a beginning is only relative. — Marcus Aurelius",
  "Time heals what reason cannot. — Seneca",
  "It is the power of the mind to be unconquerable. — Seneca",
  "You are what you do, not what you say you'll do. — Marcus Aurelius",
  "The soul becomes dyed with the color of its thoughts. — Marcus Aurelius"
];

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

export function getDailyQuote(date: Date = new Date()): string {
  const index = dayOfYear(date) % STOIC_QUOTES.length;
  return STOIC_QUOTES[index];
}
