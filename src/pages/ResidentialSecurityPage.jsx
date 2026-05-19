import ServiceDetailLayout from "../components/ServiceDetailLayout";
import { getServiceById } from "../data/services";

export default function ResidentialSecurityPage() {
  return <ServiceDetailLayout service={getServiceById("residential-security")} />;
}
