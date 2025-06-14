import { BodyComp } from "@/components/Body";
import { SearchEngineComponent } from "@/components/SearchEngine";

export default function Home() {
  return (
    <BodyComp results={false}>
      <SearchEngineComponent />
    </BodyComp>
  );
}
