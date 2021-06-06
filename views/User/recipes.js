import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Recipes() {
  const [recipes, setRecipes] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>Receita de {item.userName}</Text>
      <Text style={[styles.title, textColor]}>Nome: {item.title}</Text>
      <Text style={[styles.title, textColor]}>
        Modo de preparo: {item.recipe}
      </Text>
      <Text style={[styles.title, textColor]}>{item.note}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#000' : '#FFF';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        refreshing={true}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  useEffect(() => {
    async function readRecipes() {
      let read = await fetch(`${config.urlRoot}readAllRecipes`);
      let json = await read.json();
      console.log(json);
      console.log(json[0].id);
      setRecipes(json);
    }
    readRecipes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

      {/* <TouchableOpacity  onPress={() => find()}>
        <Text >Find</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
