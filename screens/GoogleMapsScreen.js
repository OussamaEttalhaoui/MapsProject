import React, { useState } from 'react';
import { View ,StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Marker} from 'react-native-maps';


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

// import { Container } from './styles';

export const GoogleMapsScreen = () => {

const [markersList,setMarkersList] = useState ([
    {
    id:1,    
    latitude: 33.225119, 
    longitude: -8.485815,
      title:'beuvette',
      description : ''
    },
    {
     id:2,   
     latitude: 33.225139, 
     longitude: -8.485643,
      title:'toilette',
       description : ''
        }
])

    return(
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 33.225579, 
            longitude: -8.486397,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
             {/* <Marker
              coordinate={{latitude: 33.225119, longitude: -8.485815}}
              title={'beuvette'}
              description={''}
             /> */}
           {
           markersList.map((marker)=> {
            return(
                <Marker
              key={marker.id}  
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              title={marker.title}
              description={marker.description}
             />
            )
            })
           }  
           

        </MapView>
      </View>
    )
  
}

    
