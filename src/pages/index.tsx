import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feddback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={'Preencha o seu endereço e veja todos os profissionais da sua localidade'}
      />
    </div>
  );
};

export default Home;
