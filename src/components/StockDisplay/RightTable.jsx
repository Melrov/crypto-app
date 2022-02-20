import React from "react";
import styled from "styled-components";

const Table = styled.table`
    width: 50%;
`

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
            <span>{parseFloat(quoteData.marketCap)}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Beta</span>
            <span>{profileData.beta}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>PE Ratio</span>
            <span>{quoteData.pe}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>EPS</span>
            <span>{quoteData.eps}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Dividend Rate</span>
            <span>
              {profileData.lastDiv}
            </span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Sector</span>
            <span>
              {profileData.sector}
            </span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>200 Day Average</span>
            <span>
              {parseFloat(quoteData.priceAvg200)}
            </span>
          </TD>
        </tr>
      </tbody>
    </Table>
  );
}

export default RightTable;
