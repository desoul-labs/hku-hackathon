import { LensConfig, staging } from "@lens-protocol/react-web";
import { bindings } from "@lens-protocol/wagmi";

export const lensConfig: LensConfig = {
  bindings: bindings(),
  environment: staging,
};