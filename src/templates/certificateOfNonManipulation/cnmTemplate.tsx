import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import style from "./template.module.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CNMCertificate } from "../samples";

const borderStyle = {
  borderStyle: "solid",
  borderWidth: 0.5,
  borderColor: "#000",
};

const Header = ({ recipient = {}, id }: CNMCertificate): JSX.Element => (
  <div className="row">
    <div className="col-12 col-md-6">
      <div className="p-2 h-100" style={borderStyle}>
        <div>
          <strong>1. Name & Address of Shipping Agent/Freight Forwarder</strong>
        </div>
        <pre className="p-2">
          <div>{recipient.name || ""}</div>
          <div>{(recipient.address && recipient.address.street) || ""}</div>
          <div>{(recipient.address && recipient.address.country) || ""}</div>
        </pre>
      </div>
    </div>
    <div className="col-12 col-md-6" style={borderStyle}>
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="row m-3">
          <div className={`col-8 p-2 ${style.noParaSpace}`}>
            <p>
              <strong>DEMO CUSTOMS</strong>
            </p>
            <p>55 Newton Road</p>
            <p>#07-01 Revenue House</p>
            <p>Singapore 307987</p>
            <p>Tel : 6355 2000</p>
          </div>
        </div>
        <div className="align-self-center">
          <div className="text-center p-2">
            <strong>CERTIFICATE OF NON-MANIPULATION</strong>
          </div>
          <div className="text-center p-2">No. {id}</div>
        </div>
      </div>
    </div>
  </div>
);

const ConsignmentDetails = ({ consignment }: CNMCertificate): JSX.Element => (
  <div className="row">
    <div className={`p-2 w-100`} style={borderStyle}>
      <strong>2. Details of Consignment</strong>
    </div>
    {/* Row for description and quantity */}
    <div className="col-12 col-md-6">
      <div className="p-2 h-100" style={borderStyle}>
        <div>Item(s) Description</div>
        <pre className="p-2">
          <div>{(consignment && consignment.description) || ""}</div>
        </pre>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="p-2 h-100" style={borderStyle}>
        <div>Quantity/ Gross Weight</div>
        <pre className="p-2">
          <div>{`${(consignment && consignment.quantity && consignment.quantity.value) || ""} ${
            (consignment && consignment.quantity && consignment.quantity.unit) || ""
          }`}</div>
        </pre>
      </div>
    </div>
    {/* Row for country of origin and outward bill */}
    <div className="col-12 col-md-6">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-4 h-100 p-2" style={borderStyle}>
            Country of Origin of Goods
          </div>
          <pre className="col-8 h-100 p-2" style={borderStyle}>
            <div>{(consignment && consignment.countryOfOrigin) || ""}</div>
          </pre>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-4 h-100 p-2" style={borderStyle}>
            Outward Bill of Lading No./ Air Waybill No.
          </div>
          <pre className="col-8 h-100 p-2" style={borderStyle}>
            <div>{(consignment && consignment.outwardBillNo) || ""}</div>
          </pre>
        </div>
      </div>
    </div>
    {/* Row for discharge date and departure date */}
    <div className="col-12 col-md-6">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-4 h-100 p-2" style={borderStyle}>
            Date of Discharge in Singapore
          </div>
          <pre className="col-8 h-100 p-2" style={borderStyle}>
            <div>{(consignment && consignment.dateOfDischarge) || ""}</div>
          </pre>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-4 h-100 p-2" style={borderStyle}>
            Date of Departure from Singapore
          </div>
          <pre className="col-8 h-100 p-2" style={borderStyle}>
            <div>{(consignment && consignment.dateOfDeparture) || ""}</div>
          </pre>
        </div>
      </div>
    </div>
    {/* Row for country of final destination and outgoing vehicle */}
    <div className="col-12 col-md-6">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-4 h-100 p-2" style={borderStyle}>
            Country of Final Destination
          </div>
          <pre className="col-8 h-100 p-2" style={borderStyle}>
            <div>{(consignment && consignment.countryOfFinalDestination) || ""}</div>
          </pre>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="h-100">
        <div className="row h-100">
          <div className="col-4 h-100 p-2" style={borderStyle}>
            Outgoing Vessel/ Vehicle/ Flight No.
          </div>
          <pre className="col-8 h-100 p-2" style={borderStyle}>
            <div>{(consignment && consignment.outgoingVehicleNo) || ""}</div>
          </pre>
        </div>
      </div>
    </div>
  </div>
);

const Declaration = ({ declaration }: CNMCertificate): JSX.Element => (
  <div className="row">
    <div className={`p-2 w-100`} style={borderStyle}>
      <strong>3. Declaration by Shipping Agent/Freight Forwarder</strong>
    </div>
    <div style={borderStyle} className="w-100 p-2">
      <div className="w-100">
        I/We undertake that
        <div className="pl-2">
          a) the goods indicated, when transhipped via Singapore, will not undergo operations beyond the following:
        </div>
        <div className="pl-4">
          i. ensuring the preservation of goods in good condition for the purpose of transport or storage;
        </div>
        <div className="pl-4">ii. facilitating shipment or transportation; and</div>
        <div className="pl-4">iii. packaging or presenting goods for sale.</div>
        <div className="pl-2">b) all the information provided is true and correct.</div>
      </div>
      <div className="col-12 col-md-6 pt-4">
        <div className="row">
          <div className="col-4">Name:</div>
          <div className="col-8">{(declaration && declaration.name) || ""}</div>
        </div>
        <div className="row">
          <div className="col-4">Designation::</div>
          <div className="col-8">{(declaration && declaration.designation) || ""}</div>
        </div>
        <div className="row">
          <div className="col-4">Date:</div>
          <div className="col-8">{(declaration && declaration.date) || ""}</div>
        </div>
      </div>
      (This is an electronically submitted declaration. No signature is required.)
    </div>
  </div>
);

const Certification = ({ certification }: CNMCertificate): JSX.Element => (
  <div className="row">
    <div className={`p-2 w-100`} style={borderStyle}>
      <strong>4. Certification by Singapore Customs</strong>
    </div>
    <div style={borderStyle} className="w-100 p-2">
      <div className="row">
        <div>
          We certify that, to the best of our knowledge, the declaration by the shipping agent/ freight forwarder is
          true and correct.
        </div>
        <div>
          This Certificate is issued without any prejudice or liability whatsoever on our part arising from any
          circumstances.
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-4">Authorised Signature:</div>
            <div className="col-8">
              <img src={(certification && certification.signature) || ""} style={{ width: 100, height: "auto" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-4">Name:</div>
            <div className="col-8">{(certification && certification.name) || ""}</div>
          </div>
          <div className="row">
            <div className="col-4">Designation::</div>
            <div className="col-8">{(certification && certification.designation) || ""}</div>
          </div>
          <div className="row">
            <div className="col-4">Date:</div>
            <div className="col-8">{(certification && certification.date) || ""}</div>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={(certification && certification.stamp) || ""} style={{ width: 100, height: "auto" }} />
          <div>(Stamp)</div>
        </div>
      </div>
    </div>
  </div>
);

export const CnmTemplate: FunctionComponent<TemplateProps<CNMCertificate>> = ({ document }) => (
  <div className="container p-0" style={{ borderStyle: "solid", borderWidth: 1 }}>
    <div className="p-0">
      {Header(document)}
      {ConsignmentDetails(document)}
      {Declaration(document)}
      {Certification(document)}
    </div>
  </div>
);
