import Template from 'components/templates/GeneralTemplate';
import { OrderForm } from 'components/organisms';
import productImage from 'images/product.png';
const Home = () => {
  return (
    <Template>
      <OrderForm productName="베이비 페이스 앨범" src={productImage} />
    </Template>
  );
};

export default Home;
