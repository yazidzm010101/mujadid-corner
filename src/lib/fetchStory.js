import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { utcToZonedTime } from "date-fns-tz";

const postsDirectory = join(process.cwd(), "_data/storyboard");

// this function wiill get all markdown file list
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// this function parse graymatter by defining exposed fields
export function getPostGraymatters(filename, fields) {
  const realSlug = filename.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
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
export function getAllPosts(fields) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostGraymatters(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );
  return posts;
}

// return latest 4 markdown and parse it
export function getLatestPost(fields, maxLength = 4) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostGraymatters(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.date) > new Date(post2.date) ? -1 : 1
    );
  return posts.slice(0, maxLength);
}

// find Post by Slug name
export function getSinglePost({ slug, year, month }, fields) {
  if (slug && year && month) {
    const allPost = getAllPosts(fields);
    const currPost = allPost.find(
      (post) =>
        post.slug == slug &&
        Number(post.year) == Number(year) &&
        Number(post.month) == Number(month)
    );
    return currPost;
  }
  return null;
}
