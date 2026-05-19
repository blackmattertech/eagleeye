import ServiceDetailLayout from "../components/ServiceDetailLayout";
import { getServiceById } from "../data/services";

export default function BouncerServicesPage() {
  return <ServiceDetailLayout service={getServiceById("bouncer-services")} />;
}
