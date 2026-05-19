import ServiceDetailLayout from "../components/ServiceDetailLayout";
import { getServiceById } from "../data/services";

export default function CCTVPage() {
  return <ServiceDetailLayout service={getServiceById("cctv-surveillance")} />;
}
