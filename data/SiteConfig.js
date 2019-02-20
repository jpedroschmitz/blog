const config = {
  siteTitle: "João Pedro Schmitz | Blog", 
  headerTitle: "João Pedro",
  siteTitleShort: "João Pedro S.", 
  siteTitleAlt: "João Pedro Schmitz | Blog", 
  siteLogo: "/logos/favicon.png", 
  siteUrl: "https://www.joaopedro.cc", 
  pathPrefix: "/", 
  siteDescription: "Um blog de um desenvolvedor apaixonado por JavaScript e todo o ecossitema ao redor dessa tecnologia!", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", 
  googleAnalyticsID: "UA-134411592-1", 
  disqusShortname: "blog-do-joao-pedro", 
  postDefaultCategoryID: "Tech",
  dateFromFormat: "DD/MM/YYYY", 
  dateFormat: "DD/MM/YYYY", 
  userName: "João Pedro Schmitz", 
  userEmail: "jpedroschmitz@hotmail.com",
  userTwitter: "",
  userLocation: "Ibirama, Santa Catarina", 
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // Precisa alterar o avatar
  userDescription:
    "Um desenvolvedor perfeccionista e que adora escutar música clássica",
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter", // Alterar link github
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K", // Trocar pelo linkedin
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:jpedroschmitz@hotmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. João Pedro Schmitz",
  themeColor: "#00E2BC", 
  backgroundColor: "#FFFFFF" 
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
