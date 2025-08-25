interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 3xl:mb-9 4xl:mb-10">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-gray-600 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
} 