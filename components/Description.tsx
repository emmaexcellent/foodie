import React from "react";

interface RecipeDescriptionProps {
  description: string;
}

const RecipeDescription = ({ description }: RecipeDescriptionProps) => {
  // Helper to split the description into sections based on predefined keywords or headings
  const parseDescription = (description: string) => {
    const sections = description.split("\n\n"); // Assuming paragraphs are separated by double line breaks
    return sections.map((section, index) => ({
      id: index,
      content: section.includes(":") ? section.split(":")[1].trim() : section,
    }));
  };

  const parsedSections = parseDescription(description);

  return (
    <div className="space-y-6">
      {parsedSections.map((section) => (
        <div key={section.id} className="mt-6 space-y-4">
          
          <p className="text-gray-600">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeDescription;
