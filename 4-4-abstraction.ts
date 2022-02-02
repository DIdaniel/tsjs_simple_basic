{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0; // gram 단위

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBenas(beans: number) {
      if (beans < 0) {
        throw new Error(`0보다 작은 커피콩은 있을 수 없어요!`);
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`${shots}만큼 커피를 갈고 있어!`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피콩이 충분하지 않아요");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("커피 데우는 중.... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`${shots}만큼 커피를 추출하고 있어`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBenas(32);
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBenas(32); // Can not use!
  maker2.makeCoffee(2);
}
