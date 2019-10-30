import React from "react";
import ReactDOM from "react-dom";
import { FramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";
import "./index.css";

ReactDOM.render(<FramedDocumentRenderer templateRegistry={registry} />, document.getElementById("root"));
