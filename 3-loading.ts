type LoadingState = {
  state: "loading";
};

type SuccessState = {
  state: "success";
  response: {
    body: string;
  };
};

type FaileState = {
  state: "fail";
  reason: string;
};

type ResourceLoadState = LoadingState | SuccessState | FaileState;

function printLoginState(resource: ResourceLoadState) {
  switch (resource.state) {
    case "loading":
      console.log("loading...🐽");
      break;
    case "success":
      console.log("loaded 🙈");
      break;
    case "fail":
      console.log("no network🦋");
      break;
  }
}

printLoginState({ state: "loading" });
printLoginState({ state: "success", response: { body: "loaded" } });
printLoginState({ state: "fail", reason: "no network" });
