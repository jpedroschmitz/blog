import React from 'react';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import config from '../../../content/data/config';

export default ({
  postNode,
  postPath,
  postSEO,
  pageTitle,
  pageDescription,
}) => {
  let title;
  let description;
  let image;
  let postURL;

  if (postSEO) {
    const postMeta = postNode.frontmatter;
    ({ title } = postMeta);
    description = postMeta.description
      ? postMeta.description
      : postNode.excerpt;
    image = urljoin(config.siteUrl, config.pathPrefix, postMeta.image);
    postURL = urljoin(config.siteUrl, config.pathPrefix, postPath);
  } else {
    title = !pageTitle ? config.siteTitle : pageTitle;
    description = !pageDescription ? config.siteDescription : pageDescription;
    image = urljoin(config.siteUrl, config.pathPrefix, config.siteBanner);
  }

  const blogURL = urljoin(config.siteUrl, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      }
    );
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta
        name="google-site-verification"
        content="T8zsZHxMzNJ2Sb1h-pnIo3ojB7IH0xPomCd1yEQXYJ0"
      />
      <meta name="p:domain_verify" content="1dcab11aa10b5d7be93dd9ee349ff6ec" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={config.siteTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      {postSEO ? (
        <meta property="og:image:alt" content={title} />
      ) : (
        <meta property="og:image:alt" content="Banner do site" />
      )}
      {postSEO ? (
        <meta property="og:image:width" content="2200" />
      ) : (
        <meta property="og:image:width" content="600" />
      )}
      {postSEO ? (
        <meta property="og:image:height" content="1200" />
      ) : (
        <meta property="og:image:height" content="315" />
      )}
      {postSEO && (
        <meta
          property="article:published_time"
          content={postNode.frontmatter.date}
        />
      )}
      {postSEO &&
        postNode.frontmatter.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@joaopedro.cc" />
      <meta name="twitter:creator" content="@joaopedro.cc" />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:image:src" content={image} />
      <meta name="msapplication-TileColor" content={config.themeColor} />
      <meta
        name="msapplication-TileImage"
        content={urljoin(
          config.siteUrl,
          config.pathPrefix,
          '/img/mstile-144x144.png'
        )}
      />
      <meta
        name="msapplication-square70x70logo"
        content={urljoin(
          config.siteUrl,
          config.pathPrefix,
          '/img/mstile-70x70.png'
        )}
      />
      <meta
        name="msapplication-square144x144logo"
        content={urljoin(
          config.siteUrl,
          config.pathPrefix,
          '/img/mstile-144x144.png'
        )}
      />
      <meta
        name="msapplication-square150x150logo"
        content={urljoin(
          config.siteUrl,
          config.pathPrefix,
          '/img/mstile-150x150.png'
        )}
      />
      <meta
        name="msapplication-wide310x150logo"
        content={urljoin(
          config.siteUrl,
          config.pathPrefix,
          '/img/mstile-310x150.png'
        )}
      />
      <meta
        name="msapplication-square310x310logo"
        content={urljoin(
          config.siteUrl,
          config.pathPrefix,
          '/img/mstile-310x310.png'
        )}
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};
