import ServiceDetailLayout from "../components/ServiceDetailLayout";
import { getServiceById } from "../data/services";

export default function EventSecurityPage() {
  return <ServiceDetailLayout service={getServiceById("event-security")} />;
}
