import TryTooltip from "./pages/Tooltip/page";
import Link from "next/link";

export default function Home() {
  return (
    <main>
     <h1>home page</h1>
     
    <Link href={"./pages/Tooltip"}>Try Tooltip</Link>
    </main>
  );
}
