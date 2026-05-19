import ServiceDetailLayout from "../components/ServiceDetailLayout";
import { getServiceById } from "../data/services";

export default function GuardServicesPage() {
  return <ServiceDetailLayout service={getServiceById("security-guard-services")} />;
}
