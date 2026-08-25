export interface FooterProps {
  readonly className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`w-full py-12 bg-white border-t border-brand-border ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold tracking-tight text-brand-dark">
            Web<span className="text-brand-orange">noia</span>
          </span>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Webnoia Studio. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
