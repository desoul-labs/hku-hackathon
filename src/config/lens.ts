import LensClient, { polygon } from "@lens-protocol/client";
import { LensConfig, production } from "@lens-protocol/react-web";
import { bindings } from "@lens-protocol/wagmi";

export const lensConfig: LensConfig = {
  bindings: bindings(),
  environment: production,
};

export const lensClient = new LensClient({
  environment: polygon,
});
