interface CalculationInput {
  A: boolean;
  B: boolean;
  C: boolean;
  D: number;
  E: number;
  F: number;
}

// These predefined values are defined as literals, not enum
const M = "M",
  P = "P",
  T = "T";
// to use union types
type HType = typeof M | typeof P | typeof T;

export class BaseCalculation {
  input: CalculationInput;
  constructor(input: CalculationInput) {
    this.input = input;
  }
  get H(): HType {
    const { A, B, C } = this.input;

    if (A && B && !C) return M;
    if (A && B && C) return P;
    if (!A && B && C) return T;

    throw Error("invalid arguments");
  }
  get K(): number {
    const { D, E, F } = this.input;
    const H = this.H;
    switch (H) {
      case M:
        return D + (D * E) / 10;
      case P:
        return D + (D * (E - F)) / 25.5;
      case T:
        return D - (D * F) / 30;
    }
  }
}
export class Custom1Calculation extends BaseCalculation {
  get K(): number {
    const { D, E } = this.input;
    const H = this.H;
    if (H === P) return 2 * D + (D * E) / 100;
    return super.K;
  }
}
export class Custom2Calculation extends BaseCalculation {
  get H(): HType {
    const { A, B, C } = this.input;

    if (A && B && !C) return T;
    if (A && !B && C) return M;
    return super.H;
  }
  get K(): number {
    const { D, E, F } = this.input;
    const H = this.H;
    if (H === M) return F + D + (D * E) / 100;
    return super.K;
  }
}
