import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";
import { Div, DivHor } from "./Divs";
import {
  Typography,
  Grid,
} from "@material-ui/core";
import { format } from 'date-fns';


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
      <>
          <Div style={{ width: "full-width" }}>
              <DivHor>
                  <img
                      src="https://i.im.ge/2022/06/17/r4U2pM.png"
                      // width="100"
                      height="250"
                  ></img>
              </DivHor>
              <DivHor>
                  <Typography
                      className="font-link"
                      style={{
                          marginTop: -70,
                          textAlign: "center",
                          fontSize: 70,
                      }}
                  >
                      {/* Carbon Credit */}
                      Certificate
                  </Typography>
              </DivHor>
              <DivHor>
                  <Typography
                      style={{
                          marginTop: -35,
                          textAlign: "center",
                          fontSize: 40,
                      }}
                  >
                      of Carbon Credit
                  </Typography>
              </DivHor>
              <DivHor style={{ width: "85vw", marginTop: 40 }}>
                  {" "}
                  <Grid item xs={6} style={{ alignItems: "center" }}>
                      <Typography
                          style={{
                              fontSize: 25,
                              textAlign: "center",
                          }}
                      >
                          Total energy cost of
                      </Typography>
                      <Typography
                          style={{
                              fontSize: 35,
                              textAlign: "center",
                          }}
                      >
                          {document.kWh} kWh
                      </Typography>
                  </Grid>
                  <span
                      style={{
                          borderRightWidth: 1,
                          borderRightColor: "lightgray",
                          borderRightStyle: "solid",
                          alignSelf: "stretch",
                      }}
                  />
                  <Grid item xs={6} style={{ alignItems: "center" }}>
                      <Typography
                          style={{
                              fontSize: 25,
                              textAlign: "center",
                          }}
                      >
                          Generated by
                      </Typography>
                      <Typography
                          style={{
                              fontSize: 35,
                              textAlign: "center",
                          }}
                      >
                          {document.evseId}
                      </Typography>
                  </Grid>
              </DivHor>

              <Typography
                  style={{
                      textAlign: "center",
                      marginTop: 30,
                      fontSize: 15,
                  }}
              >
                {format(new Date(document.startDateTime), 'dd/MM/yyyy hh:mm')} - {format(new Date(document.endDateTime), 'dd/MM/yyyy hh:mm')}
              </Typography>
          </Div>
      </>
  );
};
