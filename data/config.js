const config = {
  siteTitle: "João Pedro Schmitz",
  headerTitle: "João Pedro",
  siteTitleShort: "João Pedro S.",
  siteTitleAlt: "João Pedro Schmitz",
  siteLogo: "/images/favicon.png",
  siteBanner: "/images/general/banner.png",
  siteUrl: "https://www.joaopedro.cc",
  pathPrefix: "/",
  siteDescription: "Um blog de um eterno estudante de desenvolvimento web!",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-134411592-1",
  disqusShortname: "blog-do-joao-pedro",
  themeColor: "#00E2BC",
  backgroundColor: "#FFFFFF",
  copyright: "João Pedro Schmitz",
};

if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

if (config.siteUrl.substr(-1) === "/") config.siteUrl = config.siteUrl.slice(0, -1);

if (config.siteRss && config.siteRss[0] !== "/") config.siteRss = `/${config.siteRss}`;

module.exports = config;
