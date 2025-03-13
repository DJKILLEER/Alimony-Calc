
import { PartyPopper, DollarSign } from 'lucide-react';

type CelebrationProps = {
  displayAmount: number;
};

export function Celebration({ displayAmount }: CelebrationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md mx-4 animate-[slideDown_0.5s_ease-out]">
        <PartyPopper className="w-16 h-16 mx-auto mb-4 text-yellow-500 animate-bounce" />
        <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
        <p className="text-xl mb-4">You're entitled to receive</p>
        <div className="flex items-center justify-center text-4xl font-bold text-green-600 mb-4">
          <DollarSign className="w-8 h-8" />
          <span className="tabular-nums">{Math.round(displayAmount).toLocaleString()}</span>
        </div>
        <p className="text-gray-600">per year in alimony payments</p>
      </div>
    </div>
  );
}