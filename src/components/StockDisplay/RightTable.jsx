import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 50%;
`;

const TD = styled.td`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  height: 47px;
  align-items: center;
  * {
    &:first-child {
      width: 50%;
    }
    &:last-child {
      text-align: right;
      width: 50%;
      font-weight: bold;
    }
  }
`;

function RightTable({ profileData, quoteData }) {
  return (
    <Table>
      <tbody>
        <tr>
          <TD>
            <span>Market Cap</span>
            <span>{ quoteData.marketCap ? parseFloat(quoteData.marketCap) : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Beta</span>
            <span>{ profileData.beta ? parseInt(profileData.beta * 100)/100 : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>PE Ratio</span>
            <span>{ quoteData.pe ? parseInt(quoteData.pe * 100)/100 : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>EPS</span>
            <span>{ quoteData.eps ? parseInt(quoteData.eps * 100)/100 : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Dividend Rate</span>
            <span>{ profileData.lastDiv ? parseInt(profileData.lastDiv * 100)/100 : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Sector</span>
            <span>{ profileData.sector ? profileData.sector : "N/A"}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>200 Day Average</span>
            <span>{ quoteData.priceAvg200 ? parseInt(quoteData.priceAvg200 * 100)/100 : 'N/A'}</span>
          </TD>
        </tr>
      </tbody>
    </Table>
  );
}

export default RightTable;
