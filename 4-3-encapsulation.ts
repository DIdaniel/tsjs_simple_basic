{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public
  // private
  // protective
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0; // gram 단위

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBenas(beans: number) {
      if (beans < 0) {
        throw new Error(`0보다 작은 커피콩은 있을 수 없어요!`);
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피콩이 충분하지 않아요");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBenas(3);
}
