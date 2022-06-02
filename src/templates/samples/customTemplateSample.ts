import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  total_energy: number,
  cdr_location: {
    evse_id: string,
  },
  start_date_time: string,
  end_date_time: string,
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
  total_energy: 15.342,
  cdr_location: {
    evse_id: "SUTD_TEST",
  },
  start_date_time: "2015-06-29T21:39:09Z",
  end_date_time: "2015-06-29T23:37:32Z",
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};