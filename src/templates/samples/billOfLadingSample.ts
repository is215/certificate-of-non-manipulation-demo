import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface BLCertificate extends Document {
  blNumber: string;
  vessel: string;
  voyageNo: string;
  portOfLoading: string;
  portOfDischarge: string;
  packages?: {
    description: string;
    weight: string;
    measurement: string;
  }[];
  shipper?: {
    name?: string;
    address?: {
      street: string;
      country: string;
    };
  };
  consignee?: { name?: string };
  notifyParty?: { name?: string };
}

export const blCertificate: BLCertificate = {
  blNumber: "SGCNM21566325",
  packages: [
    {
      description: "description",
      weight: "10",
      measurement: "20"
    }
  ],
  shipper: {
    name: "Shipper Name",
    address: {
      street: "101 ORCHARD ROAD",
      country: "SINGAPORE"
    }
  },
  vessel: "vessel",
  voyageNo: "voyageNo",
  consignee: {
    name: "Consignee name"
  },
  notifyParty: {
    name: "Notify Party Name"
  },
  portOfDischarge: "Paris",
  portOfLoading: "Singapore"
};
