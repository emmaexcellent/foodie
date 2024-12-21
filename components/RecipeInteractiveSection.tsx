"use client";

import { Models } from "appwrite";
import Image from "next/image";
import React, { useState } from "react";

const RecipeInteractiveSection = ({
  fetchedIngredients,
  fetchedDirections,
}: {
  fetchedIngredients: string[];
  fetchedDirections: Models.Document[]; // Assume $id, description, and img are present in each direction
}) => {
  // Create a local state for directions with `expanded` and `checked` added
  const [directions, setDirections] = useState<
    (Models.Document & { expanded?: boolean; checked?: boolean })[]
  >(
    fetchedDirections?.map((direction) => ({
      ...direction,
      expanded: false, // Initialize collapsed state
      checked: false, // Initialize unchecked state
    }))
  );

  // Toggle expanded state
  const toggleExpanded = (id: string) => {
    setDirections((prev) =>
      prev.map((direction) =>
        direction.$id === id
          ? { ...direction, expanded: !direction.expanded }
          : direction
      )
    );
  };

  // Toggle checked state
  const toggleChecked = (id: string) => {
    setDirections((prev) =>
      prev.map((direction) =>
        direction.$id === id
          ? { ...direction, checked: !direction.checked }
          : direction
      )
    );
  };

  return (
    <>
      <div className="mt-6">
        <h6 className="font-medium">For the main</h6>
        <ul className="space-y-3 mt-4">
          {fetchedIngredients &&
            fetchedIngredients.map((ingredient) => (
              <li
                key={ingredient}
                className="flex items-center gap-3 pb-3 border-b text-sm"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`ingredient`}>{ingredient}</label>
              </li>
            ))}
        </ul>
      </div>
      <h4 className="uppercase font-semibold text-lg sm:text-xl mt-10">
        Directions
      </h4>
      <ul className="space-y-3 mt-5">
        {directions &&
          directions.map((direction, index) => (
            <li key={direction.$id} className="border-b pb-4">
              <div
                className="flex items-center gap-3 w-full cursor-pointer"
                onClick={() => toggleExpanded(direction.$id)}
              >
                <input
                  type="checkbox"
                  id={`direction-${direction.$id}`}
                  checked={direction.checked}
                  onChange={() => toggleChecked(direction.$id)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <h5
                  className={`font-medium ${
                    direction.checked ? "line-through" : ""
                  }`}
                >
                  Step {index + 1}
                </h5>
                <span className="ml-auto">
                  {direction.expanded ? "▲" : "▼"}
                </span>
              </div>
              {direction.expanded && (
                <div className="mt-2 ml-8">
                  {direction.image && (
                    <Image
                      src={direction.image}
                      fill
                      alt="Step image"
                      className="w-full max-w-sm mb-2 rounded-xl h-[200px] object-cover"
                    />
                  )}
                  <p className="text-sm text-gray-600">
                    {direction.description}
                  </p>
                </div>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default RecipeInteractiveSection;
