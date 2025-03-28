import { DateTime } from "luxon";

export default (eleventyConfig) => {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d LLL yyyy");
  });
  eleventyConfig.addPassthroughCopy("css");
  return {
    /* TODO: update below with name of your repo! */
    pathPrefix: "/boosterblog/",
  };
};
