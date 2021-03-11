import React from "react";
import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export interface TableProps {}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  );
};

export default Table;
