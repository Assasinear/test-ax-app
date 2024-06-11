import React from 'react';
import {Layout} from "./components/layout";
import {Header} from "./components/header";
import {Table} from "./components/table";

const App: React.FC = () => {
    return (
        <Layout>
            <Header/>
            <Table/>
        </Layout>
    );
};

export default App;
