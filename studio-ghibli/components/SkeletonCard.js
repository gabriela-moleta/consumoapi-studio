import { View, StyleSheet, Dimensions} from 'react-native'; 

import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated'

const screenWidth = Dimensions.get("window").width;

export default function SkeletonCard() {
    return (
        <MotiView>
            from={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ 
                loop: true,
                type: "timing",
                duration: 1000,
                delay: 300,
                easing: Easing.inOut(Easing.ease),
            }}
            style={styles.card}
        
            <View style={styles.image} />
            <View style={styles.textBlock} />
            <View style={[styles.textBlock, {width: '80%'}]} />
        </MotiView>

    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "1f1f1f",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,


        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
        image: {
            width: "100%",
            height: screenWidth * 0.6,
            resizeMode: "cover",
        },  
        info: {
            padding: 15,
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
        },
        subtitle:{
            fontSize: 16,
            color: "#fff",
            marginTop: 4,
            fontStyle: "italic",
        },
        text: {
            fontSize: 14,
            color: "#e0e0e0",
            marginTop: 6,
            textAlign: "justify", // Justifica o texto
          },
          subtitleSmall: {
            fontSize: 14,
            color: "#bbbbbb",
            marginTop: 2,
            fontStyle: "italic",
          },
    });

