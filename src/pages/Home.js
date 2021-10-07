import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  // estado inicial e vazio
  //const [estado, funcao] = useState('valor do estado');
  const [newSkill, setNewSkill] = useState('');

  // estado para armazenar todas as Skills
  const [mySkills, setMySkills] = useState([]);

  //handle(lidar com essa acao): usada como padrao em acoes do usuario
  function handleAddNewSkill() {
    // spread operator: ...
    setMySkills(oldState => [...oldState, newSkill]);
  }

  //elementos visuais
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Rayza 🤹‍♂️</Text>
        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
        <Button onPress={handleAddNewSkill} />
        <Text style={[styles.title, {marginVertical: 50}]}>My skill</Text>

        {/* 
        ScrollView : poucos intens 
        <ScrollView showsVerticalScrollIndicator={false}>
          {mySkills.map(skill => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </ScrollView>
        */}

        {/* 
        FlatList: listagem e varios elementos
         */}
        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({item}) => <SkillCard skill={item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
