// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CNMTemplate from "./certificateOfNonManipulation";
import BLTemplate from "./billOfLading";

export default {
  default: DefaultTemplate,
  CERTIFICATE_OF_NON_MANIPULATION: CNMTemplate,
  BILL_OF_LADING: BLTemplate,
  NULL: []
};
