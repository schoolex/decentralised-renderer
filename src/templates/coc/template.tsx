import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

export const CocTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <img
                        src="https://i.im.ge/2022/06/17/r4U2pM.png"
                        height="250"
                    ></img>
      <h1>Carbon Credit Cert</h1>
      <div>Total energy cost of </div>
      <h2>{document.kWh} Kwh</h2>
      <div>generated by </div>
      <h2>{document.evseId}</h2>
      <div>Start datetime : {document.startDateTime}</div>
      <div>End datetime : {document.endDateTime}</div>
    </div>
  );
};
