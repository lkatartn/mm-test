import { NowRequest, NowResponse } from "@now/node";
import {
  BaseCalculation,
  Custom1Calculation,
  Custom2Calculation
} from "./calculation";
import { getBool, getFloat, getInteger } from "./helpers";

export default function(req: NowRequest, res: NowResponse) {
  const { type = "Base" } = req.query;
  try {
    const [A, B, C] = [req.query.A, req.query.B, req.query.C].map(getBool);
    const D = getFloat(req.query.D);
    const [E, F] = [req.query.E, req.query.F].map(getInteger);

    const input = { A, B, C, D, E, F };
    const Calculation = getCalculation(type);
    const result = new Calculation(input);
    const { H, K } = result;
    res.send(
      JSON.stringify({
        H,
        K
      })
    );
  } catch (e) {
    res.send((e as Error).message);
  }
}

function getCalculation(type): typeof BaseCalculation {
  switch (type) {
    case "Base":
      return BaseCalculation;
    case "Custom1":
      return Custom1Calculation;
    case "Custom2":
      return Custom2Calculation;
  }
  throw Error("Invalid type specified");
}
