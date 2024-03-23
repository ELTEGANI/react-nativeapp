import {useState} from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons,SIZES } from '../../../constants';


const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
       <Text styles={styles.userName}>Hello Adrian</Text>
       <Text styles={styles.WelcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={()=>{}}
            placeholder='What are you loooking'
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome