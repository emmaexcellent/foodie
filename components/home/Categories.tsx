import React from "react";
import Image from "next/image";

const Category = ({
  title,
  bgColor,
  imgUrl,
  href,
}: {
  title: string;
  bgColor: string;
  imgUrl: string;
  href: string;
}) => (
  <a
    href={href}
    className={`flex flex-col items-center gap-4 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 w-1/3 md:w-1/4 lg:w-1/6`}
    style={{
      background: `linear-gradient(to bottom, transparent, ${bgColor})`,
    }}
  >
    <Image
      src={imgUrl}
      width={80}
      height={80}
      alt={title}
      className="w-[80px] h-[80px] object-fill"
    />
    <p className="font-semibold text-center text-sm">{title}</p>
  </a>
);

const Categories = () => {
  const categories = [
    {
      imgUrl: "/category/breakfast.png",
      title: "Breakfast",
      bgColor: "#7082461A",
      href: "#",
    },
    {
      imgUrl: "/category/vegan.png",
      title: "Vegan",
      bgColor: "#6CC63F1A",
      href: "#",
    },
    {
      imgUrl: "/category/meat.png",
      title: "Meat",
      bgColor: "#af8b8b1A",
      href: "#",
    },
    {
      imgUrl: "/category/dessert.png",
      title: "Dessert",
      bgColor: "#F09E001A",
      href: "#",
    },
    {
      imgUrl: "/category/lunch.png",
      title: "Lunch",
      bgColor: "#0000001A",
      href: "#",
    },
    {
      imgUrl: "/category/chocolate.png",
      title: "Chocolate",
      bgColor: "#0000001A",
      href: "#",
    },
  ];

  return (
    <section className="my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-row items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Categories</h2>
          <button className="font-medium py-2 px-5 rounded-lg shadow-md hover:shadow-lg bg-[#E7FAFE] transition-colors hover:bg-[#DFF6FA]">
            View All
          </button>
        </div>

        {/* Categories Grid */}
        <div className="mt-6">
          {/* Sliding Container for Small Screens */}
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {categories.map((cat, index) => (
              <Category
                key={index}
                title={cat.title}
                imgUrl={cat.imgUrl}
                bgColor={cat.bgColor}
                href={cat.href}
              />
            ))}
          </div>

          {/* Grid Layout for Medium and Larger Screens */}
          {/* <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <Category
                key={index}
                title={cat.title}
                imgUrl={cat.imgUrl}
                bgColor={cat.bgColor}
                href={cat.href}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Categories;
