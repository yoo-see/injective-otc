import {
  NotifiContext,
  NotifiSubscriptionCard,
} from "@notifi-network/notifi-react-card";
import "@notifi-network/notifi-react-card/dist/index.css";
import React, { useMemo } from "react";

import NotificationButton from "components/common/button/NotificationButton";

import { useKeplrContext } from "../../../context/KeplrWalletProvider";

export const KeplrConnectButton: React.FC = () => {
  const { key, connect, toggleNotifiCard } = useKeplrContext();
  const onClick = () => {
    connect();
    toggleNotifiCard();
  };
  return <NotificationButton onClick={onClick} />;
};

export const KeplrCard: React.FC = () => {
  const { key, signArbitrary, isOpen } = useKeplrContext();
  const keyBase64 = useMemo(
    () =>
      key !== undefined
        ? Buffer.from(key.pubKey).toString("base64")
        : undefined,
    [key],
  );

  return (
    <div className="relative">
      <KeplrConnectButton />
      {key !== undefined && keyBase64 !== undefined ? (
        <NotifiContext
          dappAddress="injectiveotc"
          walletBlockchain="INJECTIVE"
          env="Development"
          walletPublicKey={keyBase64}
          accountAddress={key.bech32Address}
          signMessage={async (message: Uint8Array): Promise<Uint8Array> => {
            const result = await signArbitrary(
              "injective-1",
              key.bech32Address,
              message,
            );
            return Buffer.from(result.signature, "base64");
          }}
        >
          {isOpen && (
            <div className="absolute top-12 right-0 w-[400px]">
              <NotifiSubscriptionCard
                darkMode
                inputs={{ userWallet: key.bech32Address }}
                cardId="305bb2604f244ecbb83f336481a8956b"
              />
            </div>
          )}
        </NotifiContext>
      ) : null}
    </div>
  );
};
