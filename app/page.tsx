import { WaitlistForm } from '@/components/waitlistForm';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen full-page-background">
      <Navbar />
      <div className="flex-grow flex justify-center items-center px-4 lg:px-0">
        <WaitlistForm />
      </div>
    </div>
  );
}
