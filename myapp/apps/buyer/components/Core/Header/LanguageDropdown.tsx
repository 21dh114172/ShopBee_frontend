"use client";
import Image from "next/image";
import { useState } from "react";

export default function LanguageDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Tiếng Việt");
  const [hoveredLanguage, setHoveredLanguage] = useState("");

  const languages = [
    { code: "vi", name: "Tiếng Việt" },
    { code: "en", name: "Tiếng Anh" },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <a
        href="#"
        className={`flex items-center space-x-1 hover:opacity-70 transition-opacity ${showDropdown ? "opacity-70" : ""}`}
      >
        <Image
          src="/iconNavbar/ngon_ngu.svg"
          alt="Language"
          width={16}
          height={16}
          className="white-icon"
        />
        <span
          className={`transition-colors duration-200 ${showDropdown ? "text-gray-300" : "text-white"}`}
        >
          {selectedLanguage}
        </span>
      </a>

      {/* Language Dropdown */}
      <div
        className={`absolute right-0 top-full mt-2 w-[140px] bg-white shadow-xl z-50 border border-gray-200 transition-all duration-300 ease-in-out transform ${
          showDropdown
            ? "opacity-100 translate-y-0 scale-100 visible"
            : "opacity-0 translate-y-[-10px] scale-95 invisible"
        }`}
      >
        {/* Arrow */}
        <div className="absolute -top-2 right-6 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-200"></div>

        {/* Language Options */}
        <div className="py-2">
          {languages.map((language, index) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.name)}
              onMouseEnter={() => setHoveredLanguage(language.name)}
              onMouseLeave={() => setHoveredLanguage("")}
              className={`w-full px-4 py-2 text-left text-sm ${
                hoveredLanguage === language.name
                  ? "text-primary "
                  : selectedLanguage === language.name && hoveredLanguage === ""
                    ? "text-primary "
                    : "text-black "
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
