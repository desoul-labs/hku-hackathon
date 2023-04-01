import { SignInWithLens } from "@lens-protocol/widgets-react";
import { useSigner } from "wagmi";
import { Theme } from "@lens-protocol/widgets-react/dist/types";
import { ethers } from "ethers";
import { ComponentProps } from "react";

type LensSignInButtonProps = Partial<
  Pick<ComponentProps<typeof SignInWithLens>, "onSignIn">
>;

const LensSignInButton = ({ onSignIn = () => {} }: LensSignInButtonProps) => {
  const { data: signer } = useSigner({ chainId: 137 });

  if (!signer) return null;

  return (
    <SignInWithLens
      onSignIn={onSignIn}
      provider={signer.provider as ethers.providers.Web3Provider}
      theme={Theme.lavender}
    />
  );
};

export default LensSignInButton;
