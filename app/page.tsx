import { ThemeCustomizer } from "@/components/theme-customizer";
import { ThemeExamples } from "@/components/theme-examples";

export default function Page() {
  return (
    <div className="w-full flex flex-row gap-8 p-10">
      <ThemeCustomizer />
      <ThemeExamples />
    </div>
  );
}
