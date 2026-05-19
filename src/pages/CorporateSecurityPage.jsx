import ServiceDetailLayout from "../components/ServiceDetailLayout";
import { getServiceById } from "../data/services";

export default function CorporateSecurityPage() {
  return <ServiceDetailLayout service={getServiceById("corporate-security")} />;
}
