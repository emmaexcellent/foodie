export const slugify = (name: string, id: string) => {
  return `${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}-${id}`;
};

export const unslugify = (slug: string) => {
  const slugParts = slug.split("-");
  const id = slugParts[slugParts.length - 1];
  const name = slugParts
    .slice(0, -1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return { name, id };
};
