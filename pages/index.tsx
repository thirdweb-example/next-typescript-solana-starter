import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAddress, useBalance } from "@thirdweb-dev/react/solana";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home: NextPage = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );
  // Here's how to get the currently connected wallet address
  const walletAddress = useAddress();
  // And how to get the balance of the connected wallet
  const { data: balance } = useBalance();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <img src={"/thirdweb.svg"} className={styles.icon} />
          <img src={"/sol.png"} className={styles.icon} />
        </div>
        <h1 className={styles.h1}>Solana, meet thirdweb 👋</h1>
        <p className={styles.explain}>
          Explore what you can do with thirdweb&rsquo;s brand new{" "}
          <b>
            <a
              href="https://portal.thirdweb.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lightPurple}
            >
              Solana SDK
            </a>
          </b>
          .
        </p>

        <WalletMultiButton />
        {walletAddress ? (
          <div>
            <p className={styles.explain}>Connected as</p>
            <p className={styles.lightPurple}>{walletAddress}</p>
            <p className={styles.explain}>
              Your Balance: {balance?.displayValue} SOL
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
