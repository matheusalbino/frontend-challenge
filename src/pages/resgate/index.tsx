import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { Layout } from '../../layout';
import Metin2Logo from '../../assets/img/metin2-logo.png';
import { ItemData, ListItem } from './components/ListItem';

export const ResgatePage: React.FC = () => {
  const { data } = useQuery<ItemData[]>(
    ['items-premiacao'],
    () => fetch('https://br.ongame.net/api/challenge/items/').then((res) => res.json()),
    {
      initialData: [],
    }
  );
  const [selectedRedeem, setSelectedRedeem] = useState<ItemData | undefined>(undefined);

  return (
    <Layout>
      <Helmet>
        <title>Metin 2 - Resgate sua premiação</title>
      </Helmet>
      <div className="col-start-4 col-end-10 flex items-center h-full">
        <div className="w-full border-2 border-black bg-black bg-opacity-25 text-white p-5 space-y-5">
          <img src={Metin2Logo} alt="Metin 2 Logo" className="mx-auto w-1/3" />

          <p className="text-center font-medium text-2xl" style={{ textShadow: '0px 1px #e11924' }}>
            Resgate sua premiação!
          </p>

          <ul className="divide-y divide-primary-medium">
            {data !== undefined && (
              <ListItem
                for={data}
                for-key={(item) => item.id}
                onClick={(itemId) => {
                  setSelectedRedeem(data.find((item) => item.id === itemId));
                }}
              />
            )}
          </ul>
        </div>
      </div>

      {selectedRedeem !== undefined && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 grid grid-cols-12 gap-4 content-center">
          <div
            className="col-start-5 col-end-9 p-4 border-b-2 border-primary-light text-center space-y-6"
            style={{ backgroundColor: '#242424' }}
          >
            <p className="uppercase font-medium text-3xl text-primary-light">Deseja Resgatar?</p>

            <div className="space-y-4">
              <img src={selectedRedeem.image} alt={selectedRedeem.name} className="mx-auto" />

              <p className="text-white">{selectedRedeem.name}</p>
            </div>

            <div className="space-x-4">
              <button
                type="button"
                className="bg-primary-light px-4 py-1 text-white rounded"
                onClick={() => setSelectedRedeem(undefined)}
              >
                Sim
              </button>
              <button
                type="button"
                className="bg-white bg-opacity-25 px-4 py-1 text-white rounded"
                onClick={() => setSelectedRedeem(undefined)}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
