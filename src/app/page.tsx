import { EventsShowcaseContent } from "@/assets/content";
import EventsShowcase from "@/components/home/EventsShowcase";

export default function Home() {
  return (
    <>
      <EventsShowcase data={EventsShowcaseContent} />
    </>
  );
}
