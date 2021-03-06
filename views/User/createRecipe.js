import React, { useState, useEffect } from 'react';
import { css } from '../../assets/css/cssRegisterCoffe';
import config from '../../config/config';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Alert,
  HelperText,
  Input,
  Slider,
  CheckBox,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function createRecipe(props) {
  const [title, setTitle] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [note, setNote] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [dose, setDose] = useState(40);
  const [water, setWater] = useState(1);
  const [method, setMethod] = useState(null);

  //Recuperando dados usuário
  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setUserName(json.name);
      setUserId(json.id);
    }
    getUser();
  }, []);

  function check() {
    if (checkIsEmpty()) {
      sendForm();
    }
  }

  function checkIsEmpty() {
    if (method === null) {
      Alert.alert('Selecione o método utilizado!');
      return false;
    }
    if (title === null) {
      Alert.alert('Nome é obrigatório!');
      return false;
    }
    if (recipe === null) {
      Alert.alert(
        'É necessário nos contar a receita para que possamos compartilhar a receita!'
      );
      return false;
    }
    return true;
  }

  //Envio do formulário
  async function sendForm() {
    let response = await fetch(`${config.urlRoot}createRecipe`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        method: method,
        dose: dose,
        water: water,
        recipe: recipe,
        note: note,
        userName: userName,
        userId: userId,
      }),
    });

    let json = await response.json();
    //console.log(json);
    Alert.alert('Receita cadastrada com sucesso!');
  }

  return (
    <ScrollView style={css.container}>
      <View style={css.container2}>
        <Text style={css.textQuestion}>Qual o método utilizado?</Text>
        <View style={css.containerRadio}>
          <TouchableOpacity
            style={css.radio}
            onPress={() => setMethod('Expresso')}
          >
            <CheckBox
              title="Expresso"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              value={method === 'Expresso'}
              onValueChange={() => setMethod('Expresso')}
            />
            <Text style={css.textQuestion2}>Expresso</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={css.radio}
            onPress={() => setMethod('Filtro')}
          >
            <CheckBox
              title="Filtro"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              value={method === 'Filtro'}
              onValueChange={() => setMethod('Filtro')}
            />
            <Text style={css.textQuestion2}>Filtro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={css.radio}
            onPress={() => setMethod('Aeropress')}
          >
            <CheckBox
              title="Aeropress"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              value={method === 'Aeropress'}
              onValueChange={() => setMethod('Aeropress')}
            />
            <Text style={css.textQuestion2}>Aeropress</Text>
          </TouchableOpacity>
        </View>

        <Text style={css.textQuestion}>{'\n'} Dose:</Text>
        <View style={css.containerSlider}>
          <Slider
            style={css.slider}
            value={dose}
            minimumValue={0}
            maximumValue={80}
            onValueChange={(value) => setDose(value)}
            step={1}
          ></Slider>
          <Text style={css.textQuestion2}>
            {dose} {'grama(s)'}
          </Text>
        </View>

        <Text style={css.textQuestion}>{'\n'} Água:</Text>
        <View style={css.containerSlider}>
          <Slider
            style={css.slider}
            value={water}
            minimumValue={0}
            maximumValue={2}
            onValueChange={(value) => setWater(value)}
            step={0.1}
          ></Slider>
          <Text style={css.textQuestion2}>
            {water.toFixed(2)} {'litro(s)'}
          </Text>
        </View>

        <Text style={css.textQuestion}>{'\n'} Nome da Receita</Text>
        <View style={css.containerInputs}>
          <TextInput
            style={css.inputs}
            placeholder="Seja criativo! :)"
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <Text style={css.textQuestion}>{'\n'} Receita</Text>
        <View style={css.containerInputs}>
          <TextInput 
            style={css.inputsRecipe}
            placeholder={'Digite aqui a sua receita'}
            onChangeText={(text) => setRecipe(text)}
          />
        </View>

        <Text style={css.textQuestion}>{'\n'} Observações</Text>
        <View style={css.containerInputs}>
          <TextInput
            style={css.inputs}
            placeholder="Alguma observação a ser passada?"
            onChangeText={(text) => setNote(text)}
          />
        </View>

        <View style={css.containerBtn}>
          <TouchableOpacity style={css.btnSave} onPress={() => check()}>
            <Text style={css.btnText}>Salvar receita</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
