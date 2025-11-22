interface InfoSectionProps {
  title: string;
  info: string;
}

export default function InfoSection({ title, info }: InfoSectionProps) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 p-6">
      <h3 className="text-sm text-gray-400 font-light tracking-wider uppercase mb-3">
        {title}
      </h3>
      <p className="text-gray-300 font-light text-sm leading-relaxed">{info}</p>
    </div>
  );
}

