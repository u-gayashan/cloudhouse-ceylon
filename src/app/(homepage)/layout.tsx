import Shell from "@/components/shell";
import { BottomNavbar } from "@/components/navbar/BottomNavbar";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Shell>{children}</Shell>
      <div className="md:hidden">
        <BottomNavbar />
      </div>
    </>
  );
}
