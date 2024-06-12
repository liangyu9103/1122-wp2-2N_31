import CabinTable from '../features/cabins/CabinTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Header_xx from './open/components/Header_xx';
import LandingStatic_xx from './open/pages/LandingStatic_xx';

const Cabins_31 = () => {
  return (
    <>
      <Header_xx />
      <LandingStatic_xx />
      {/* <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row> */}
    </>
  );
};

export default Cabins_31;
