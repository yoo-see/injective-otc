import { Coin } from "@cosmjs/amino";
import { Level } from "level";
import os from "os";
import Path from "path";

export interface OTCMarketDB {
  makeListing(
    chainId: string,
    ownerAddress: string,
    token: Coin,
    price: Coin,
    collateral: Coin,
  ): Promise<void>;
}

export function createOTCMarketOnLevelDB(path: string): OTCMarketDB {
  path = Path.normalize(path);
  const paths = path.split("/");
  if (paths.length > 0 && paths[0] === "~") {
    path = Path.join(os.homedir(), ...paths.slice(1));
  }

  path = Path.resolve(path, "otc-market");

  if (!Path.isAbsolute(path)) {
    throw new Error(`Please provide absolute path for DB: ${path}`);
  }

  const db = new Level(path, {
    valueEncoding: "json",
  });

  return {
    makeListing: async (
      chainId: string,
      ownerAddress: string,
      token: Coin,
      price: Coin,
      collateral: Coin,
    ): Promise<void> => {
      const key = `${chainId}:${ownerAddress}:${token.denom}:${price.denom}:${collateral.denom}`;
      const value = JSON.stringify({
        ownerAddress,
        token,
        price,
        collateral,
        createdAt: new Date().toJSON(),
      });

      return db.put(key, value);
    },
  };
}
