import { SignInWithLens, Tokens } from "@lens-protocol/widgets-react";
import { useSigner, useProvider } from "wagmi";
import { Profile, Theme } from "@lens-protocol/widgets-react/dist/types";
import { ethers } from "ethers";

const SignInButton = () => {
  const {data: signer} = useSigner({ chainId: 137 })
  if (!signer) return null

  const onSignIn = async (tokens: Tokens, profile: Profile) => {
    console.log('tokens: ', tokens)
    console.log('profile: ', profile)
  }

  return (
    <SignInWithLens
      onSignIn={onSignIn}
      provider={new ethers.providers.Web3Provider(signer.provider as any)}
      theme={Theme.lavender}
    />
  )
};

export default SignInButton;