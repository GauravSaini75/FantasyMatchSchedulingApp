import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation, route}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const response = await res.json();
      if (res.status == 200) {
        setData(response);
      } else {
        console.log(res.error);
      }
      // console.log('response', res.status, response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onPressButton = () => {};

  React.useEffect(() => {
    // getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'#000000'} />
      ) : (
        <View style={{flex: 1, width: '100%'}}>
          <FlatList
            data={data.slice(0, 5)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <>
                  <View
                    style={{
                      padding: 8,
                      backgroundColor: '#ffffff',
                      borderRadius: 8,
                      elevation: 2,
                      margin: 6,
                    }}>
                    <Text style={{fontSize: 16, color: '#000000'}}>
                      Task: {item.title}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => onPressButton()}
                      style={{
                        backgroundColor: !item.completed
                          ? '#ff0000'
                          : '#0000ff',
                        alignSelf: 'flex-start',
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                        borderRadius: 6,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        {item.completed ? 'completed' : 'incompleted'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
