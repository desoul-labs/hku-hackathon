import { SignInWithLens, Tokens } from "@lens-protocol/widgets-react";
import { useSigner } from "wagmi";
import { Profile, Theme } from "@lens-protocol/widgets-react/dist/types";
import { ethers } from "ethers";

const LensSignInButton = () => {
  const { data: signer } = useSigner({ chainId: 137 })
  if (!signer) return null

  const onSignIn = async (tokens: Tokens, profile: Profile) => {
    console.log('tokens: ', tokens)
    console.log('profile: ', profile)
  }

  return (
    <SignInWithLens
      onSignIn={onSignIn}
      provider={signer.provider as ethers.providers.Web3Provider}
      theme={Theme.lavender}
    />
  )
};

export default LensSignInButton;