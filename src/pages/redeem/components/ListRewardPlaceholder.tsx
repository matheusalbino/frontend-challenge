import { Repeat } from '@equal/react-logic';

export const ListRewardPlaceholder = Repeat(() => {
  return (
    <li className="flex flex-col md:flex-row items-center animate-pulse space-y-4 md:space-x-4 md:space-y-0 py-4">
      <div className="w-12 h-12 bg-primary-medium rounded" />
      <div className="w-full">
        <div className="flex items-center text-sm md:justify-between w-full flex-col md:flex-row space-y-4 md:space-y-0 px-8 md:px-0">
          <div className="w-full h-4 bg-primary-medium rounded" />
        </div>
      </div>
    </li>
  );
});
