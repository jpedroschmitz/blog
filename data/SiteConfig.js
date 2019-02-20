const config = {
  siteTitle: "João Pedro Schmitz | Blog", 
  headerTitle: "João Pedro",
  siteTitleShort: "João Pedro S.", 
  siteTitleAlt: "João Pedro Schmitz | Blog", 
  siteLogo: "/logos/favicon.png", 
  siteBanner: "/banners/sitebanner.png",
  siteUrl: "https://www.joaopedro.cc", 
  pathPrefix: "/", 
  siteDescription: "Um blog de um eterno estudante de desenvolvimento web!",
  siteRss: "/rss.xml", 
  googleAnalyticsID: "UA-134411592-1", 
  disqusShortname: "blog-do-joao-pedro", 
  postDefaultCategoryID: "Tech",
  dateFromFormat: "DD/MM/YYYY", 
  dateFormat: "DD/MM/YYYY", 
  themeColor: "#00E2BC", 
  backgroundColor: "#FFFFFF",
  copyright: 'João Pedro Schmitz'
};

if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
