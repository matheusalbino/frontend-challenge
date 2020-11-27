import { Helmet } from 'react-helmet';
import { Layout } from '../../layout';
import Metin2Logo from '../../assets/img/metin2-logo.png';
import { Modal } from '../../library/Modal';
import { Button } from '../../library/Button';
import { Loading } from '../../library/Loading';
import { ListRewardItem } from './components/ListRewardItem';
import { ListRewardPlaceholder } from './components/ListRewardPlaceholder';
import { useRedeemPage } from './hooks/useReedemPage';

export const RedeemPage: React.FC = () => {
  const { isLoadingRewards, rewards, selectedReward, setSelectedReward, redeem, isLoadingRedeem } = useRedeemPage();

  return (
    <Layout>
      <Helmet>
        <title>Metin 2 - Resgate sua premiação</title>
      </Helmet>
      <div className="col-span-full sm:col-start-2 sm:col-end-12 lg:col-start-4 lg:col-end-10 md:flex md:items-center h-full mt-12 md:mt-0">
        <div className="w-full border-2 border-black bg-black bg-opacity-25 text-white p-5 space-y-5">
          <img src={Metin2Logo} alt="Metin 2 Logo" className="mx-auto w-2/3 md:w-1/3" />

          <p className="text-center font-medium text-xl md:text-2xl text-shadow-primary-light">
            Resgate sua premiação!
          </p>

          <ul className="divide-y divide-primary-medium">
            {isLoadingRewards && <ListRewardPlaceholder repeat={6} />}
            {rewards !== undefined && (
              <ListRewardItem
                for={rewards}
                for-key={(reward) => reward.id}
                for-redeemed={(reward) => (selectedReward?.id === reward.id && selectedReward?.redeemed) ?? false}
                onClick={(rewardId) => {
                  setSelectedReward(rewards.find((reward) => reward.id === rewardId));
                }}
              />
            )}
          </ul>
        </div>
      </div>

      {selectedReward?.redeemed === false && (
        <Modal>
          {isLoadingRedeem && (
            <div className="text-center space-y-6">
              <p className="uppercase font-medium text-3xl text-primary-light">Resgatando</p>

              <Loading className="mx-auto w-12" />
            </div>
          )}
          {!isLoadingRedeem && (
            <div className="text-center space-y-6">
              <p className="uppercase font-medium text-3xl text-primary-light">Deseja Resgatar?</p>

              <div className="space-y-4">
                <img src={selectedReward.image} alt={selectedReward.name} className="mx-auto" />

                <p className="text-white">{selectedReward.name}</p>
              </div>

              <div className="space-x-4">
                <Button variant="confirm" onClick={() => redeem({ rewardId: selectedReward.id })}>
                  Sim
                </Button>
                <Button variant="cancel" onClick={() => setSelectedReward(undefined)}>
                  Não
                </Button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </Layout>
  );
};
