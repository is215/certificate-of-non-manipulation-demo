import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 0.5,
  borderColor: "#000"
};

const entityInformationCell = entity => (
  <>
    <div>
      <span className="text-muted">Name:</span>{" "}
      <span className="font-weight-bold">{get(entity, "name")}</span>
    </div>
    <div>
      <span className="text-muted">Address:</span>{" "}
      <span className="font-weight-bold">{formatAddress(entity.address)}</span>
    </div>
    <div>
      <span className="text-muted">City/State/Zip:</span>{" "}
      <span className="font-weight-bold">{formatLocality(entity.address)}</span>
    </div>
    <div>
      <span className="text-muted">Country:</span>{" "}
      <span className="font-weight-bold">{get(entity.address, "country")}</span>
    </div>
  </>
);

const formatAddress = address => {
  return `${get(address, "unit")} ${get(address, "street")}`;
};

const formatLocality = address => {
  return `${get(address, "city")} ${get(address, "state")} ${get(
    address,
    "zip"
  )}`;
};

const Header = document => (
  <>
    <div className="row">
      <div className="col-12 col-md-6" style={borderStyle}>
        <div className="shipperInfo h-50">
          <div className="p-0 cell-header">Ship From</div>
          <div className="p-1 my-2">
            {entityInformationCell(get(document, "shipper"))}
          </div>
        </div>

        <div className="consigneeInfo h-50">
          <div className="p-0 cell-header">Ship To</div>
          <div className="p-1 my-2">
            {entityInformationCell(get(document, "consignee"))}
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6" style={borderStyle}>
        <div className="additionalInfo h-50">
          <div className="p-0 cell-header" align="center">
            Additional Info
          </div>
          <div className="p1 mb-5">&nbsp;</div>
        </div>

        <div className="billTo h-50">
          <div className="p-0 cell-header" align="center">
            Bill To
          </div>
          <div className="p1 mb-5"> &nbsp;</div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-md-6" style={borderStyle}>
        <div className="shipperNotes">
          <div className="p-0 cell-header">Notes</div>
          <div className="p-1 mb-5">&nbsp;</div>
        </div>
      </div>
      <div className="col-12 col-md-6" style={borderStyle}>
        <div className="freightChargeTerms">
          <div className="p-0 cell-header" align="center">
            Freight Charge Terms
          </div>
          <div className="p1 mb-5">&nbsp;</div>
        </div>
      </div>
    </div>
  </>
);
const BLANK_SPACE = "\u00A0";
const ConsignmentRow = ({ code, details, quantity, weight } = {}) => (
  <div className="row">
    <div className="col-2 p-1" style={borderStyle}>
      {code || BLANK_SPACE}
    </div>
    <div className="col-8 p-1" style={borderStyle}>
      {details || BLANK_SPACE}
    </div>
    <div className="col-1 p-1" style={borderStyle}>
      {quantity || BLANK_SPACE}
    </div>
    <div className="col-1 p-1" style={borderStyle}>
      {weight || BLANK_SPACE}
    </div>
  </div>
);

const ConsignmentDetails = document => (
  <>
    <div className="row">
      <div className="col-12">
        <div className="cell-header">Customer Order Information</div>
      </div>
    </div>

    <div className="row">
      <div className="col-2 p-1" style={borderStyle}>
        Item Code
      </div>
      <div className="col-8 p-1" style={borderStyle}>
        Details
      </div>
      <div className="col-1 p-1" style={borderStyle}>
        No. Of Packages
      </div>
      <div className="col-1 p-1" style={borderStyle}>
        Gross Weight (Kg)
      </div>
    </div>

    {document.consignment.map(ConsignmentRow)}
  </>
);

const Declaration = document => (
  <div className="row" style={borderStyle}>
    <div className="col-12 col-md-6" style={borderStyle}>
      <div className="cell-header">Carrier</div>
      <div className="my-3 p-2">Pick Up Date:</div>
      <div className="my-3 p-2">Signature:</div>
    </div>
    <div className="col-12 col-md-6" style={borderStyle}>
      <div className="cell-header">Shipper</div>
      <div className="my-3 p-2">Pick Up Date:</div>
      <div className="my-3 p-2">Signature:</div>
    </div>
  </div>
);

const placeholderDocument = {
  id: "001",
  $template: {
    name: "DLT_SHIPPING_LINE_EBL_1",
    type: "EMBEDDED_RENDERER",
    url: "https://ebl.tradetrust.io/renderer"
  },
  issuers: [
    {
      name: "DLT Shipping Line",
      documentStore: "0x4B66952e9e38462079e3Ca2b06e2E27E2c5Bd574"
    }
  ],
  shipper: {
    name: "Peter Antonopoulos",
    address: {
      unit: "11",
      street: "Blackwood Street",
      city: "Melbourne",
      state: "Victoria",
      zip: "3051",
      country: "Australia"
    }
  },
  consignee: {
    name: "Kirti Chowdury",
    address: {
      unit: "C-7/8",
      street: "Gr Flr Satyam Shopping Centre, M G Road, Ghatkopar (east)",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400077",
      country: "India"
    }
  },
  consignment: [
    { code: "1", details: "Elephants", quantity: "10", weight: "2000" },
    { code: "2", details: "Ants", quantity: "10000000", weight: "0.0002" },
    { code: "3", details: "Rabbits", quantity: "7", weight: "43" },
    { code: "4", details: "Crocodiles", quantity: "10", weight: "2000" },
    { code: "5", details: "Cats", quantity: "15", weight: "60" },
    { code: "6", details: "Otters", quantity: "1", weight: "3.2" },
    { code: "7", details: "Zebras", quantity: "1", weight: "184" }
  ]
};

const Template = ({ document = placeholderDocument }) => (
  <div
    className="container p-0"
    style={{ borderStyle: "solid", borderWidth: 1 }}
  >
    <div>
      <h3 align="center">Bill of Lading</h3>
    </div>

    <div className="p-0" style={{ borderStyle }} />

    <div className="p-0" style={{ borderStyle }}>
      {Header(document)}
      {ConsignmentDetails(document)}
      {Declaration(document)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
