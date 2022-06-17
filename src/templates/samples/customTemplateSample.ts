import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  kWh: number,
  evseId: string,
  startDateTime: string,
  endDateTime: string,
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "OpenAttestation Tutorial Certificate of Completion",
  issuers: [
    {
      name: "My name",
      documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "few-green-cat.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  kWh: 15.342,
  evseId: "SUTD_TEST",
  startDateTime: "2015-06-29T21:39:09Z",
  endDateTime: "2015-06-29T23:37:32Z",
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};
