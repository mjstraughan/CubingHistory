import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css';

const SortableTable = ({ data, columns}) => {
    return <ReactTable data={data}
columns={columns} />;
};

export default SortableTable;