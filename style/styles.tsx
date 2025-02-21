import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textDecorationColor: '#2f4f4f',
      
      
    },
    home_content: {
      justifyContent: 'space-between',
      marginTop: 100,
      alignItems: 'center',
    },
    profile_pic: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderColor: '#2f4f4f',
      borderWidth: 3,
      
    }, 
    bio_txt: {
      padding: 20
    },
    item_container: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      width: width
    },
    background: {
      position: 'absolute',
      height: 500,
      width: 300,
      padding: 20,
      borderRadius: 20,
      justifyContent: 'flex-end'
    },
    title: {
      color: 'black',
      fontSize: 18,
      fontWeight: '600',
      letterSpacing: 1.5
    },
    desc: {
      color: 'black',
      fontSize: 12,
      letterSpacing: 1.2
    },
    pagination_container: {
      flexDirection: 'row',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    dot: {
      backgroundColor: '#aaa',
      height: 8,
      width: 8,
      marginHorizontal: 2,
      borderRadius: 8,
      
    }
  });

export default styles;