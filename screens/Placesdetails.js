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

const Placesdetails = ({route,navigation})=>{
    const {place}=route.params;

    return(
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 33.225579, 
            longitude: -8.486397,
            latitudeDelta: 0.004, 
          longitudeDelta: 0.004, 
          }}
        >
              <Marker
              coordinate={{latitude: place.latitude, longitude: place.longitude }}
              title={place.title}
              description={place.description}
             /> 
        

        </MapView>
      </View>
    )
}
export default Placesdetails;