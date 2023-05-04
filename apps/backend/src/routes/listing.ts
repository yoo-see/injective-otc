import { Coin } from "@cosmjs/amino";
import { Request, Response, Router } from "express";

import { OTCMarketDB } from "../utils/db";

interface PostListingRequestBody {
  chainId: string;
  ownerAddress: string;
  token: Coin;
  price: Coin;
  collateral: Coin;
}

interface ResponseData {}
interface ResponseBody {
  errors: string[];
  data: ResponseData | null;
}

export async function makeListing(
  reqBody: PostListingRequestBody,
  otcMarketDB: OTCMarketDB,
): Promise<{ status: number; data: ResponseData | null; errors: string[] }> {
  const { chainId, ownerAddress, token, price, collateral } = reqBody;

  await otcMarketDB.makeListing(
    chainId,
    ownerAddress,
    token,
    price,
    collateral,
  );

  return {
    status: 200,
    errors: [],
    data: {},
  };
}

export default (otcMarketDB: OTCMarketDB): Router => {
  const router = Router();

  router.post(
    "/",
    async (
      req: Request<{}, {}, PostListingRequestBody>,
      res: Response<ResponseBody>,
    ) => {
      try {
        const { status, data, errors } = await makeListing(
          req.body,
          otcMarketDB,
        );
        res.status(status).send({ errors, data });
      } catch (err: any) {
        res.status(500).send({ errors: [err.toString()], data: null });
      }
    },
  );

  return router;
};
