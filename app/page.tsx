import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Aboneliklerinizi kolayca takip edin!
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Abonelik ve ödeme takip sistemine hoş geldiniz.
      </p>
      <Button>Başlamak için tıklayın</Button>
      <Avatar className="w-12 h-12">
        <AvatarImage src="https://i.hizliresim.com/cph7lpg.png" alt="Logo" />
        <AvatarFallback>Logo</AvatarFallback>
      </Avatar>
    </div>
  );
}
