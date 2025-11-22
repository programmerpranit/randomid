interface DetailedInfoSectionProps {
  about: string;
  useCases: string[];
  howToGenerate: {
    library?: string;
    npmPackage?: string;
    codeExample?: string;
    note?: string;
  };
}

export default function DetailedInfoSection({
  about,
  useCases,
  howToGenerate,
}: DetailedInfoSectionProps) {
  return (
    <div className="space-y-6">
      {/* About Section */}
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 p-6">
        <h3 className="text-sm text-gray-400 font-light tracking-wider uppercase mb-3">
          About
        </h3>
        <p className="text-gray-300 font-light text-sm leading-relaxed">{about}</p>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 p-6">
        <h3 className="text-sm text-gray-400 font-light tracking-wider uppercase mb-3">
          Use Cases
        </h3>
        <ul className="space-y-2">
          {useCases.map((useCase, index) => (
            <li key={index} className="text-gray-300 font-light text-sm leading-relaxed flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <span>{useCase}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* How to Generate Section */}
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 p-6">
        <h3 className="text-sm text-gray-400 font-light tracking-wider uppercase mb-3">
          How to Generate
        </h3>
        <div className="space-y-3">
          {howToGenerate.library && (
            <div>
              <p className="text-gray-400 font-light text-xs uppercase tracking-wider mb-1">
                Library
              </p>
              <p className="text-gray-300 font-light text-sm">{howToGenerate.library}</p>
            </div>
          )}
          {howToGenerate.npmPackage && (
            <div>
              <p className="text-gray-400 font-light text-xs uppercase tracking-wider mb-1">
                NPM Package
              </p>
              <code className="text-amber-400 font-mono text-sm bg-gray-900/50 px-2 py-1 rounded">
                {howToGenerate.npmPackage}
              </code>
            </div>
          )}
          {howToGenerate.codeExample && (
            <div>
              <p className="text-gray-400 font-light text-xs uppercase tracking-wider mb-1">
                Code Example
              </p>
              <pre className="text-gray-300 font-mono text-xs bg-gray-900/50 p-3 rounded overflow-x-auto">
                <code>{howToGenerate.codeExample}</code>
              </pre>
            </div>
          )}
          {howToGenerate.note && (
            <div className="pt-2 border-t border-gray-700/30">
              <p className="text-gray-400 font-light text-xs italic">{howToGenerate.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

