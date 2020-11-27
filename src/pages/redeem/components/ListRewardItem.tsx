import { For } from '@equal/react-logic';
import clsx from 'clsx';
import { RewardResponse } from '../hooks/useReedemPage';
import { Button } from '../../../library/Button';
import { CheckIcon } from '../../../library/CheckIcon';
import { ProgressBar } from '../../../library/ProgressBar';

interface RewardProps {
  data: RewardResponse;
  redeemed: boolean;
  onClick(rewardId: number): void;
}

interface RewardExtraProps {
  'for-redeemed'(reward: RewardResponse): boolean;
  onClick: RewardProps['onClick'];
}

export const ListRewardItem = For<RewardProps, RewardExtraProps>((props) => {
  const { data, onClick, redeemed } = props;

  const isRedeemed = data.redeemed || (redeemed ?? false);
  const inProgress = !isRedeemed && data.percentage < 100;

  return (
    <li className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0 py-4">
      <img src={data.image} alt={data.name} />
      <div className="w-full">
        <div
          className={clsx(
            'flex flex-col md:flex-row items-center text-sm justify-between w-full space-y-4 md:space-y-0',
            {
              'mb-4 md:mb-2': !isRedeemed,
            }
          )}
        >
          <p>{data.name}</p>
          {isRedeemed && (
            <p className="flex items-center space-x-1 font-medium uppercase">
              <CheckIcon className="w-4 text-primary-light" />
              <span>Item Resgatado</span>
            </p>
          )}
          {!isRedeemed && (
            <Button disabled={inProgress} onClick={() => onClick(data.id)} className="w-full md:w-auto">
              Resgatar
            </Button>
          )}
        </div>

        {data.percentage <= 100 && !isRedeemed && <ProgressBar value={data.percentage} />}
      </div>
    </li>
  );
});
