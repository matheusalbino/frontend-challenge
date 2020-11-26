import { For } from '@equal/react-logic';
import clsx from 'clsx';
import { Button } from './Button';
import { CheckIcon } from './CheckIcon';
import { ProgressBar } from './ProgressBar';

export interface ItemData {
  id: number;
  image: string;
  name: string;
  percentage: number;
  redeemed: boolean;
}

interface ItemProps {
  data: ItemData;
  onClick(itemId: number): void;
}

interface ItemExtraProps {
  onClick: ItemProps['onClick'];
}

export const ListItem = For<ItemProps, ItemExtraProps>((props) => {
  const { data, onClick } = props;
  const inProgress = !data.redeemed && data.percentage < 100;

  return (
    <li className="flex items-center space-x-4 py-4">
      <img src={data.image} alt={data.name} />
      <div className="w-full">
        <div className={clsx('flex items-center text-sm justify-between w-full', { 'mb-2': !data.redeemed })}>
          <p>{data.name}</p>
          {data.redeemed && (
            <p className="flex items-center space-x-1 font-medium uppercase">
              <CheckIcon className="w-4 text-primary-light" />
              <span>Item Resgatado</span>
            </p>
          )}
          {!data.redeemed && (
            <Button disabled={inProgress} onClick={() => onClick(data.id)}>
              Resgatar
            </Button>
          )}
        </div>

        {data.percentage <= 100 && !data.redeemed && <ProgressBar value={data.percentage} />}
      </div>
    </li>
  );
});
