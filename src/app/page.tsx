"use client";

import LensSignInButton from "@/components/LensSignInButton";
import Loading from "@/components/Loading";
import { updateProfileId } from "@/redux/authSlice";
import { useAppDispatch } from "@/redux/store";
import { Profile, Tokens } from "@lens-protocol/widgets-react/dist/types";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAccount } from "wagmi";
import styles from "./page.module.css";
import Providers from "./providers/Providers";

function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);

  const onLensSignIn = (_: Tokens, profile: Profile) => {
    dispatch(updateProfileId(profile.id));
    setIsLoading(true);
    router.push("/social");
  };

  return (
    <main className={styles.main}>
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <ConnectButton />
        </div>
        {address && <LensSignInButton onSignIn={onLensSignIn} />}
        {isLoading && <Loading />}
      </div>
    </main>
  );
}

const RootHome = () => {
  return (
    <Providers>
      <Home />
    </Providers>
  );
};

export default RootHome;
