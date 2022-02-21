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

function LeftTable({ profileData, quoteData }) {
  return (
    <Table>
      <tbody>
        <tr>
          <TD>
            <span>Previous Close</span>
            <span>{ quoteData.previousClose ? parseInt(quoteData.previousClose * 100)/100 : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Open</span>
            <span>{ quoteData.open ? parseInt(quoteData.open * 100)/100 : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Day's Range</span>
            <span>{ quoteData.dayLow && quoteData.dayHigh ? `${parseInt(quoteData.dayLow * 100)/100} - ${parseInt(
              quoteData.dayHigh
              * 100)/100}` : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>52 Week Range</span>
            <span>
              { quoteData.yearLow && quoteData.yearHigh ? `${parseInt(quoteData.yearLow * 100)/100} - ${parseInt(quoteData.yearHigh * 100)/100}` : 'N/A'}
            </span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Volume</span>
            <span>{ quoteData.volume ? quoteData.volume : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Avg. Volume</span>
            <span>{ quoteData.avgVolume ? quoteData.avgVolume : 'N/A'}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>50 Day Average</span>
            <span>{ quoteData.priceAvg50 ? parseInt(quoteData.priceAvg50 * 100)/100 : 'N/A'}</span>
          </TD>
        </tr>
      </tbody>
    </Table>
  );
}

export default LeftTable;
