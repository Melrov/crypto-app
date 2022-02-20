import React from "react";
import styled from "styled-components";

const Table = styled.table`
    width: 50%
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

function LeftTable({ profileData, quoteData }) {
  return (
    <Table>
      <tbody>
        <tr>
          <TD>
            <span>Previous Close</span>
            <span>{parseFloat(quoteData.previousClose)}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Open</span>
            <span>{parseFloat(quoteData.open)}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Day's Range</span>
            <span>{`${parseFloat(quoteData.dayLow)} - ${parseFloat(
              quoteData.dayHigh
            )}`}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>52 Week Range</span>
            <span>
              {parseFloat(quoteData.yearLow)} - {parseFloat(
                quoteData.yearHigh
              )}
            </span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Volume</span>
            <span>{quoteData.volume}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Avg. Volume</span>
            <span>
              {quoteData.avgVolume}
            </span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>50 Day Average</span>
            <span>
              {parseFloat(quoteData.priceAvg50)}
            </span>
          </TD>
        </tr>
      </tbody>
    </Table>
  );
}

export default LeftTable;
