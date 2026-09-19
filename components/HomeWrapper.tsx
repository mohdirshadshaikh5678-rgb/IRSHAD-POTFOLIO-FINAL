import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSec1 from "@/components/homesec1";
import HomeSec2 from "@/components/homesec2";
import HomeSec3 from "@/components/homesec3";
import HomeSec4 from "@/components/homesec4";
import HomeSec5 from "@/components/homesec5";

export default function HomeWrapper() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <HomeSec1 />
        <HomeSec2 />
        <HomeSec3 />
        <HomeSec4 />
        <HomeSec5 />
      </main>
      <Footer />
    </div>
  );
}