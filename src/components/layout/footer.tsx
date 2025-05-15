import Link from "next/link";
import Logo from "@/components/icons/logo";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" aria-label="SoftSell Homepage">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-2 text-sm text-center md:text-left max-w-xs">
              Securely resell and acquire enterprise software licenses.
            </p>
          </div>

          <div className="text-center md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Quick Links</h3>
            <nav className="space-y-1">
              {["#how-it-works", "#features", "#testimonials", "#contact"].map((item) => (
                <div key={item}>
                  <Link href={item} className="text-sm hover:text-primary transition-colors">
                    {item.substring(1).replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                </div>
              ))}
               <div>
                  <Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </div>
                 <div>
                  <Link href="/terms-of-service" className="text-sm hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </div>
            </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
             <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="SoftSell on Twitter" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="SoftSell on LinkedIn" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="SoftSell on GitHub" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-secondary-foreground/70">
          &copy; {currentYear} SoftSell Revolution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
