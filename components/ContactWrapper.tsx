import ContactSec1 from "@/components/contactsec1";
import ContactSec2 from "@/components/contactsec2";
import ContactSec3 from "@/components/contactsec3";

export default function ContactWrapper() {
  return (
    <div className="relative flex-1">
      <ContactSec1 />
      <ContactSec2 />
      <ContactSec3 />
    </div>
  );
}