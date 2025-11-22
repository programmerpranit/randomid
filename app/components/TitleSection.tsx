interface TitleSectionProps {
  title: string;
  subtitle: string;
}

export default function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
        {title}
      </h1>
      <p className="text-gray-400 font-light">{subtitle}</p>
    </div>
  );
}

