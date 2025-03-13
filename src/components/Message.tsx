
import { HeartCrack } from 'lucide-react';

type MessageProps = {
  onReset: () => void;
};

export function Message({ onReset }: MessageProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden animate-[slideUp_0.5s_ease-out]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?auto=format&fit=crop&w=800"
              alt="Thoughtful person"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <HeartCrack className="w-12 h-12 text-red-500 mb-6" />
            <h2 className="text-2xl font-bold mb-4">A Moment of Reflection</h2>
            <p className="text-gray-600 mb-4">
              While alimony can provide financial security, it's important to remember that healing and moving forward is about more than monetary compensation.
            </p>
            <p className="text-gray-600 mb-6">
              Consider using this opportunity for personal growth and building a new chapter in your life.
            </p>
            <button
              onClick={onReset}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Calculate Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}