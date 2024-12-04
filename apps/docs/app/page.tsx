import { Button } from "@repo/ui/components/ui/button";
import { Slider } from "@repo/ui/components/ui/slider";

export default function Page() {
  return (
    <main>
      <Button>Click me</Button>
      <Slider defaultValue={[33]} max={100} step={1} />
    </main>
  );
}
