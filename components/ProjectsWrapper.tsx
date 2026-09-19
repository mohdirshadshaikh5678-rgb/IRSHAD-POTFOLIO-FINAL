import ProjectsSec1 from "@/components/projectssec1";
import ProjectsSec2 from "@/components/projectssec2";
import ProjectsSec3 from "@/components/projectssec3";
import ProjectsSec4 from "@/components/projectssec4";

export default function ProjectsWrapper() {
  return (
    <div className="relative flex-1">
      <ProjectsSec1 />
      <ProjectsSec2 />
      <ProjectsSec3 />
      <ProjectsSec4 />
    </div>
  );
}