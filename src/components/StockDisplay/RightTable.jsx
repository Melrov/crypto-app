import React from "react";
import styled from "styled-components";

const Table = styled.table`
    width: 50%
`

const TD = styled.td`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  * {
    &:first-child {
      width: 50%;
    }
    &:last-child {
      text-align: right;
      width: 50%;
    }
  }
`;

function RightTable({ globalData, overData }) {
  return (
    <Table>
      <tbody>
        <tr>
          <TD>
            <span>Market Cap</span>
            <span>{overData ? overData["MarketCapitalization"] : "N/A"}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Beta</span>
            <span>{overData ? overData["Beta"] : "N/A"}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>PE Ratio</span>
            <span>{overData ? overData["PERatio"] : "N/A"}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>EPS</span>
            <span>{overData ? overData["EPS"] : "N/A"}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Forward Dividend & Yield</span>
            <span>
              {overData
                ? `${overData["DividendPerShare"]} (${
                    overData["DividendYield"] * 100
                  }%)`
                : "N/A"}
            </span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Ex Dividend Date</span>
            <span>
              {overData && overData["ExDividendDate"]
                ? overData["ExDividendDate"]
                : "N/A"}
            </span>
          </TD>
        </tr>
      </tbody>
    </Table>
  );
}

export default RightTable;
