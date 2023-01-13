import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@snap-drive/navbar",
  app: () => System.import<LifeCycles>("@snap-drive/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@snap-drive/app-vue",
  app: () => System.import<LifeCycles>("@snap-drive/app-vue"),
  activeWhen: (location) => !location.pathname.startsWith("/event-tracker"),
});

registerApplication({
  name: "@snap-drive/app-react",
  app: () => System.import<LifeCycles>("@snap-drive/app-react"),
  activeWhen: ["/event-tracker"],
});

start({
  urlRerouteOnly: true,
});
