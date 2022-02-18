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

function LeftTable({ globalData, overData }) {
  return (
    <Table>
      <tbody>
        <tr>
          <TD>
            <span>Previous Close</span>
            <span>{parseFloat(globalData["08. previous close"])}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Open</span>
            <span>{parseFloat(globalData["02. open"])}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Day's Range</span>
            <span>{`${parseFloat(globalData["04. low"])} - ${parseFloat(
              globalData["03. high"]
            )}`}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>52 Week Range</span>
            <span>
              {overData
                ? `${parseFloat(overData["52WeekLow"])} - ${parseFloat(
                    overData["52WeekHigh"]
                  )}`
                : "N/A"}
            </span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Volume</span>
            <span>{globalData["06. volume"]}</span>
          </TD>
        </tr>
        <tr>
          <TD>
            <span>Analyst Target</span>
            <span>
              {overData ? `${overData["AnalystTargetPrice"]}` : "N/A"}
            </span>
          </TD>
        </tr>
      </tbody>
    </Table>
  );
}

export default LeftTable;
