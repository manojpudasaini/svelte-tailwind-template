export function miniAppInitializer() {
  console.log(window);

  if (!window.hamromini_sdkjs) {
    return;
  }
  window.miniapp = new window.hamromini_sdkjs.MiniApp();

  return new Promise(async (resolutionFunc, rejectionFunc) => {
    try {
      let userDetails = await window.hamromini_sdkjs.initialize(
        "test-ma-2",
        window.miniapp
      );
      resolutionFunc(userDetails);
      if (window.location.pathname === "/login" && userDetails) {
        window.location.href = "/home";
      }
    } catch (e) {
      rejectionFunc(e);
    }
  });
}
