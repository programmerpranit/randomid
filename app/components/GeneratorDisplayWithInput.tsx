"use client";

import { useState, useEffect } from "react";

export interface InputField {
  name: string;
  label: string;
  type?: "text" | "number";
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
}

interface GeneratorDisplayWithInputProps {
  label: string;
  generateFn: (inputs: Record<string, string>) => string;
  inputFields: InputField[];
}

export default function GeneratorDisplayWithInput({
  label,
  generateFn,
  inputFields,
}: GeneratorDisplayWithInputProps) {
  const [id, setId] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [inputs, setInputs] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputFields.forEach((field) => {
      initial[field.name] = field.defaultValue || "";
    });
    return initial;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateInputs = (): boolean => {
    const newErrors: Record<string, string> = {};
    inputFields.forEach((field) => {
      if (field.required && !inputs[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateId = () => {
    if (!validateInputs()) {
      return;
    }
    try {
      setId(generateFn(inputs));
      setCopied(false);
    } catch (error) {
      console.error("Error generating ID:", error);
      setId("Error generating ID");
    }
  };

  useEffect(() => {
    // Auto-generate on mount if all required fields have defaults
    const hasAllRequired = inputFields.every(
      (field) => !field.required || inputs[field.name]
    );
    if (hasAllRequired) {
      generateId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12 mb-8">
      {/* Input Fields */}
      <div className="mb-6 space-y-4">
        {inputFields.map((field) => (
          <div key={field.name}>
            <label className="text-xs text-gray-500 font-light tracking-wider uppercase mb-2 block">
              {field.label}
              {field.required && <span className="text-orange-500 ml-1">*</span>}
            </label>
            <input
              type={field.type || "text"}
              value={inputs[field.name] || ""}
              onChange={(e) =>
                handleInputChange(field.name, e.target.value)
              }
              placeholder={field.placeholder}
              className={`w-full bg-gray-900/50 border ${
                errors[field.name]
                  ? "border-red-500/50"
                  : "border-gray-700/30"
              } p-3 text-white font-light focus:outline-none focus:border-orange-500/50 transition-colors`}
            />
            {errors[field.name] && (
              <p className="text-xs text-red-400 mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Generated ID Display */}
      <div className="mb-6">
        <label className="text-xs text-gray-500 font-light tracking-wider uppercase mb-2 block">
          {label}
        </label>
        <div className="bg-gray-900/50 border border-gray-700/30 p-6 font-mono text-lg text-white break-all min-h-[60px] flex items-center">
          {id || "Enter values above and click Generate"}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={copyToClipboard}
          disabled={!id}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-light tracking-wider uppercase hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
        <button
          onClick={generateId}
          className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 text-sm font-light tracking-wider uppercase hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Generate
        </button>
      </div>
    </div>
  );
}

