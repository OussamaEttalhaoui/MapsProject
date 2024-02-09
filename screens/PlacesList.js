import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PlacesList = ({ navigation }) => {
  const places = [
    { id: 1, latitude: 33.225119, longitude: -8.485815, title: 'Administration', description: '' },
    { id: 1, latitude: 33.225119, longitude: -8.485815, title: 'Bibliothèque', description: '' },
    { id: 1, latitude: 33.225119, longitude: -8.485815, title: 'Bloc de Recherche scientifique ', description: '' },
    { id: 1, latitude: 33.225119, longitude: -8.485815, title: 'Station de traitement des eaux usées', description: '' },
    { id: 1, latitude: 33.225119, longitude: -8.485815, title: 'Salle Polyvalente', description: '' },
    { id: 1, latitude: 33.225119, longitude: -8.485815, title: 'Salle de Prière', description: '' },
    { id: 1, latitude: 33.225119, longitude: -8.485815, title: 'Animalerie', description: '' },
    { id: 1, latitude: 33.225119, longitude: -8.485815, title: 'Affichage', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Amphi Al Farabi', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Amphi Al Bayrouni', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Amphi ibno hayitam', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Amphi ibn Younes', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Amphi ibn Nafiss', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Bloc A ', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Bloc B ', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Bloc C ', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Bloc D ', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Departement Physique', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Departement Geologie', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Departement Math/info', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Cafétéria des Enseignants', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Cafétéria des Etudiants', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Toilette T1', description: '' },
    { id: 2, latitude: 33.225139, longitude: -8.485643, title: 'Toilette T2', description: '' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Placesdetails', { place: item })}
    >
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()} // Convertir l'ID en chaîne de caractères
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  listContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    
  },
});

export default PlacesList;
