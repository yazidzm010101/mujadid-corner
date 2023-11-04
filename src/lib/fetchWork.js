import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { utcToZonedTime } from "date-fns-tz";

const projectDirectory = join(process.cwd(), "_data/workspace");

// this function wiill get all markdown file list
export function getProjectSlugs() {
  return fs.readdirSync(projectDirectory);
}

// this function parse graymatter by defining exposed fields
export function getProjectGraymatters(filename, fields) {
  const realSlug = filename.replace(/\.md$/, "");
  const fullPath = join(projectDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      if (field === "date") {
        items[field] = utcToZonedTime(data[field], "Asia/Jakarta");
        items["year"] = items[field].getFullYear();
        items["month"] = items[field].getMonth() + 1;
        items[field] = items[field].toString();
      } else {
        items[field] = data[field];
      }
    }
  });

  return items;
}

// return all markdown and parse it
export function getAllProjects(fields) {
  const slugs = getProjectSlugs();
  const posts = slugs
    .map((slug) => getProjectGraymatters(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date).getTime() > new Date(post2.date).getTime() ? -1 : 1
    );
  return posts;
}

// return latest 4 markdown and parse it
export function getLatestProjects(fields, maxLength = 4) {
  const slugs = getProjectSlugs();
  const posts = slugs
    .map((slug) => getProjectGraymatters(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date).getTime() > new Date(post2.date).getTime() ? -1 : 1
    );
  return posts.slice(0, maxLength);
}

// find Post by Slug name
export function getSingleProject({ slug }, fields) {
  if (slug && year && month) {
    const allPost = getAllProjects(fields);
    const currPost = allPost.find((post) => post.slug == slug);
    return currPost;
  }
  return null;
}
