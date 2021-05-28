import React from 'react';
import * as S from './style';
import { OrderItem } from 'components/molcules';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'components/atoms';
const OrderList = ({ items = [] }) => {
  let { url } = useRouteMatch();

  return (
    <S.StyledList>
      {items.map((item) => (
        <Link to={`${url}/${item.id}`} key={item.id}>
          <OrderItem item={item} />
        </Link>
      ))}
    </S.StyledList>
  );
};

export default OrderList;