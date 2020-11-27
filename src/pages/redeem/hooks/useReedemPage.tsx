import Axios from 'axios';
import { useState } from 'react';
import { useQuery, useMutation, MutateFunction } from 'react-query';

interface RedeemRequest {
  rewardId: number;
}

interface RedeemResponse {
  success: boolean;
}

export interface RewardResponse {
  id: number;
  image: string;
  name: string;
  percentage: number;
  redeemed: boolean;
}

type RewardsResponse = RewardResponse[];

interface RedeemPageHook {
  rewards: RewardsResponse | undefined;
  isLoadingRewards: boolean;
  redeem: MutateFunction<RedeemResponse, unknown, RedeemRequest, unknown>;
  isLoadingRedeem: boolean;
  selectedReward: RewardResponse | undefined;
  setSelectedReward: React.Dispatch<React.SetStateAction<RewardResponse | undefined>>;
}

export function useRedeemPage(): RedeemPageHook {
  const [selectedReward, setSelectedReward] = useState<RewardResponse | undefined>(undefined);

  const { data: rewards, isFetching: isLoadingRewards } = useQuery<RewardsResponse>(['rewards'], rewardsRequest);

  const [redeem, { isLoading: isLoadingRedeem }] = useMutation<RedeemResponse, {}, RedeemRequest, {}>(redeemRequest, {
    onSuccess(data) {
      if (data.success) {
        setSelectedReward((prev) => {
          if (prev !== undefined) {
            return { ...prev, redeemed: true };
          }

          return undefined;
        });
      }
    },
  });

  return {
    rewards,
    isLoadingRewards,
    redeem,
    isLoadingRedeem,
    selectedReward,
    setSelectedReward,
  };
}

function rewardsRequest(): Promise<RewardsResponse> {
  return Axios.get('https://br.ongame.net/api/challenge/items/').then((res) => res.data);
}

function redeemRequest(payload: RedeemRequest): Promise<RedeemResponse> {
  return Axios.post(
    'https://br.ongame.net/api/challenge/item/redeem/',
    JSON.stringify({
      item_id: payload.rewardId,
    })
  ).then((res) => res.data);
}
