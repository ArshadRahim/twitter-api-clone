import { newElement } from "../Twitter";

export const footer = () => {
  let a = [
    { name: "About", link: "https://about.instagram.com/" },
    { name: "Blog", link: "https://about.instagram.com/en_US/blog" },
    { name: "Jobs", link: "https://www.instagram.com/about/jobs/" },
    { name: "Help", link: "https://help.instagram.com/" },
    { name: "Api", link: "https://www.instagram.com/developer/" },
    { name: "Privacy", link: "https://help.instagram.com/519522125107875" },
    { name: "Terms", link: "https://help.instagram.com/581066165581870" },
    {
      name: "Top Accounts",
      link: "https://www.instagram.com/directory/profiles/",
    },
    { name: "Hashtags", link: "https://www.instagram.com/directory/hashtags/" },
    { name: "Locations", link: "https://www.instagram.com/explore/locations/" },
    { name: "Beauty", link: "https://about.instagram.com/" },
    {
      name: "Dance & Performance",
      link: "https://about.instagram.com/en_US/blog",
    },
    { name: "Fitness", link: "https://www.instagram.com/about/jobs/" },
    { name: "Food & Drink", link: "https://help.instagram.com/" },
    { name: "Home & Garden", link: "https://www.instagram.com/developer/" },
    { name: "Music", link: "https://help.instagram.com/519522125107875" },
    { name: "Visual Arts", link: "https://help.instagram.com/581066165581870" },
  ];

  let b = [];

  a.forEach((e) => {
    const links = newElement(
      "a",
      {
        style:
          "font-size:14px; color: grey; font-weight:500; text-decoration:none;",
        href: e.link,
      },
      e.name
    );

    const linksDiv = newElement("div", { class: "link-div" }, links);

    b.push(linksDiv);
  });

  const main = newElement("div", { class: "footer-div" }, b);
  return newElement("footer", { class: "footer-main" }, main);
};

export const footerpostSecondary = () => {
  let a3 = [
    {
      name: "@ 2021  Twitter,  Inc.",
      link: "https://about.instagram.com/en-us/en_US/blog",
    },
  ];

  let b3 = [];

  a3.forEach((e) => {
    const links3 = newElement(
      "a",
      {
        style:
          "font-size:14px; color: grey; font-weight:500; text-decoration:none;",
        href: e.link,
      },
      e.name
    );

    const linksDiv3 = newElement(
      "div",
      { class: "link-post-secoondary" },
      links3
    );

    b3.push(linksDiv3);
  });

  const main3 = newElement(
    "div",
    {
      class: "footer-post-secondary",
      style:
        "display:flex; flex-wrap:wrap; justify-content:center; align-content:center; ; ",
    },
    b3
  );

  return newElement(
    "footer",
    {
      class: "footer-post-secondary",
      style: "margin:auto; width:100%; height:2% ; ",
    },
    main3
  );
};
