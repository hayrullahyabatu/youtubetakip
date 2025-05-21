import Link from 'next/link';
import { Logo } from './logo';
import { ModeToggle } from './mode-toggle';
import { MainNav } from './main-nav';
import { Button } from './ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Logo />
        <MainNav items={[
          {
            title: "Abonelikler",
            href: "/subscriptions",
            disabled: false,
          }
        ]} />
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Link href="/login">
            <Button>Giriş Yap</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
