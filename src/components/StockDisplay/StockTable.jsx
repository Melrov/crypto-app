import React from "react";
import styled from "styled-components";
import LeftTable from "./LeftTable";
import RightTable from "./RightTable";

const TableCon = styled.div`
  display: flex;
  width: 775px;
  font-size: 15px;
  @media (max-width: 1140px) {
    width: 100%;
  }
`;

function StockTable({ profileData, quoteData }) {
  return (
    <TableCon>
      <LeftTable profileData={profileData} quoteData={quoteData} />
      <RightTable profileData={profileData} quoteData={quoteData} />
    </TableCon>
  );
}

export default StockTable;
