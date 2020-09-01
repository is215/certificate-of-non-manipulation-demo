import { templates as cnmTemplates } from "./certificateOfNonManipulation";
import { templates as blTemplates } from "./billOfLading";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: cnmTemplates,
  CERTIFICATE_OF_NON_MANIPULATION: cnmTemplates,
  BILL_OF_LADING: blTemplates,
  NULL: [],
};
