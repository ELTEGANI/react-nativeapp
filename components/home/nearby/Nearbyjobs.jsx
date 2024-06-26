import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import {COLORS} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';


const Nearbyjobs = () => {
  const router = useRouter()
   const {data,isLoading,error} = useFetch
   ('search',{
     query:'Python developer in Texas, USA',
     num_pages:1
   })
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Nearby jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.cardsContainer}>
        {isLoading?(
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ):error?(
          <Text>Somthing Went Wrong</Text>
        ):(
          data?.map((job)=>(
            <NearbyJobCard
            job={job}
            key={`near-job-${job?.job_id}`}
            handleNavigate={()=>router.push(`/job-details/${job.job_id}`)}
            
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs