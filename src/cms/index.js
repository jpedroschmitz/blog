import CMS from "netlify-cms";
import PostPreview from "./preview/post-preview";
import PagePreview from "./preview/page-preview";

CMS.registerPreviewTemplate("blog-pt", PostPreview);
CMS.registerPreviewTemplate("pages-pt", PagePreview);
