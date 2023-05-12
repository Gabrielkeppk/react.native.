/* -- Bottom navigation: quick navigation in bottom bar */
import * as React from 'react';
import { BottomNavigation, Text, StyleSheet } from 'react-native-paper';

const StateRoute = () => <Text>Seja bem-vindo</Text>;

const ClientRoute = () => <Text> Pagina inicial</Text>;

const SettingRoute = () => <Text>conteúdo</Text>;

const LogoutRoute = () => <Text>Pagina final</Text>

export default class BottomNavigatonComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'state', title: 'pag 1', icon: 'queue-music' },
      { key: 'client', title: 'pag 2', icon: 'album' },
      { key: 'setting', title: 'pag 3', icon: 'queue-music' },
      { key: 'logout', title: 'pag 4', icon: 'album' },
    
             
    ],
  };

  // Vi sao ham 1 tham so => khi goi khong co tham so
  // truyen index vao setState co {} ????
  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    state: StateRoute,
    client: ClientRoute,
    setting: SettingRoute,
    logout: LogoutRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
      
    );
  }
}