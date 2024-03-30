import SortableTable from "../../../src/components/SortableTable";

# Websites

A collection of websites from members of the community.

<SortableTable
    data={[
        {creator: 'Lars Petrus', content: 'Petrus method', website: 'lar5.com/cube'},
    ]}
    columns={[
        {Header: 'Creator', accessor: 'creator'},
        {Header: 'Content', accessor: 'content'},
        {Header: 'Website', accessor: 'website'},
    ]}
/>

<iframe src="/archive/WebsiteArchive.html" width="100%" height="100%" style={{ minHeight: '1000px' }}></iframe>