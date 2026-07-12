export const STOIC_QUOTES = [
  "You have power over your mind—not outside events. Realize this, and you will find strength.",
  "The impediment to action advances action. What stands in the way becomes the way.",
  "Waste no more time arguing about what a good man should be. Be one.",
  "It is impossible for a man to learn what he thinks he already knows.",
  "You cannot choose your external circumstances, but you can always choose how you respond to them.",
  "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",
  "Misfortune nobly borne is good fortune.",
  "Nowhere can man find a quieter or more untroubled retreat than in his own soul.",
  "The only true freedom is freedom from the things we fear.",
  "Discipline is choosing between what you want now and what you want most.",
  "Your mind will take the shape of what you frequently think about; for the soul is dyed by the color of its thoughts.",
  "You are not harmed by being rejected; you are only harmed if you take that rejection as an injury.",
  "In the middle of chaos, there is also opportunity.",
  "A ship should not ride on a single anchor, nor life on a single hope.",
  "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
  "It is not that we have a short time to live, but that we waste a lot of it.",
  "Mastery of self must come before mastery of others.",
  "We suffer more in imagination than in reality.",
  "Tranquility can be reached through virtue, which is the highest good and the true foundation of greatness.",
  "The happiness of your life depends upon the quality of your thoughts.",
];

export function getQuoteOfDay(): string {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return STOIC_QUOTES[dayOfYear % STOIC_QUOTES.length];
}
