import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Refine } from '@pankod/refine-core'; '@pankod/refine-core';
import routerProvider from "@pankod/refine-react-router-v6";
import { ErrorComponent, Layout, notificationProvider, ReadyPage } from '@pankod/refine-antd';
import dataProvider, { GraphQLClient, graphqlWS } from '@pankod/refine-hasura';

const WS_URL = "ws://smooth-kingfish-80.hasura.app/v1/graphql";

const gqlWebSocketClient = graphqlWS.createClient({
  url: WS_URL,
  },
);



const App: React.FC = () => {
  return (
    <Refine
    routerProvider={routerProvider}
    dataProvider={gqlWebSocketClient}
    Layout={Layout}
    ReadyPage={ReadyPage}
    notificationProvider={notificationProvider}
    catchAll={<ErrorComponent />}
    />
  );
}

export default App;
