import { moodOptions, type MoodSlug } from "@/lib/products";

export default function MoodTags({ moods }: { moods: MoodSlug[] }) {
  if (moods.length === 0) return null;

  const items = moodOptions.filter((m) => moods.includes(m.slug));

  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {items.map((mood) => (
        <span
          key={mood.slug}
          className="rounded-full bg-light px-3 py-1 text-xs font-medium text-brand"
        >
          {mood.label}
        </span>
      ))}
    </div>
  );
}
