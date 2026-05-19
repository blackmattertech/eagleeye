import ServiceDetailLayout from "../components/ServiceDetailLayout";
import { getServiceById } from "../data/services";

export default function PatrolServicesPage() {
  return <ServiceDetailLayout service={getServiceById("mobile-patrol")} />;
}
