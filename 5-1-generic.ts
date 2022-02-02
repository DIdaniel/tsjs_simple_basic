{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("NOT VALID NUMBER!");
    }

    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("NOT VALID NUMBER!");
    }

    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not VALID NUMBER");
    }

    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
