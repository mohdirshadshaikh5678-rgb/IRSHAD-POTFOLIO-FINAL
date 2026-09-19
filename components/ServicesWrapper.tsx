import ServicesSec1 from "@/components/servicesec1";
import ServicesSec2 from "@/components/servicesec2";
import ServicesSec3 from "@/components/servicesec3";
import ServicesSec4 from "@/components/servicesec4";
import ServicesSec5 from "@/components/servicesec5";
import ServicesSec6 from "@/components/servicesec6";

export default function ServicesWrapper() {
  return (
    <div className="relative flex-1">
      <ServicesSec1 />
      <ServicesSec2 />
      <ServicesSec3 />
      <ServicesSec4 />
      <ServicesSec5 />
      <ServicesSec6 />
    </div>
  );
}