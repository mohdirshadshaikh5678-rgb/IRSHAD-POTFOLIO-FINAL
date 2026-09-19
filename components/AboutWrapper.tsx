import AboutSec1 from "@/components/aboutsec1";
import AboutSec2 from "@/components/aboutsec2";
import AboutSec3 from "@/components/aboutsec3";
import AboutSec4 from "@/components/aboutsec4";
import AboutSec5 from "@/components/aboutsec5";
import AboutSec6 from "@/components/aboutsec6";

export default function AboutWrapper() {
  return (
    <div className="relative flex-1">
      <AboutSec1 />
      <AboutSec2 />
      <AboutSec3 />
      <AboutSec4 />
      <AboutSec5 />
      <AboutSec6 />
    </div>
  );
}