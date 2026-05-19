import ServiceDetailLayout from "../components/ServiceDetailLayout";
import { getServiceById } from "../data/services";

export default function PersonalProtectionPage() {
  return <ServiceDetailLayout service={getServiceById("personal-protection")} />;
}
