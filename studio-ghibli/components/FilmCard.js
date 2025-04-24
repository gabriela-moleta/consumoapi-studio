import { View, Text, StyleSheet, Image, Dimensions} from "react-native";

//pegamos a largura da tela para ajustar a altura da imagem de forma proporcional
const screenWidth = Dimensions.get("window").width;

export default function FilmCard({ film }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: film.image }} style={styles.image} />
        <View style={styles.info}>
            
            <Text style={styles.title}>{film.title ?? "Titulo não disponivel"}</Text>

        <Text style={styles.subtitle}>{film.original_title ?? "Titulo origial nao disponivel"}</Text>

        <Text styles={styles.subtitleSmall}>
            {film.original_title_romanised ?? "Titulo origial romanisado nao disponivel"}
        </Text>

        <Text styles={styles.text}>
            {film.description ?? "Descrição nao disponivel"}
        </Text>

        <Text styles={styles.text}>
        📝 Diretor:  {film.director ?? "Não informado"}
        </Text>

        <Text styles={styles.text}>
        📌 Produtor: {film.producer ?? "Não informado"}
        </Text>

        <Text styles={styles.text}>
        🎬 Lançamento: {film.release_date?? "Não informado"}
        </Text>

        <Text styles={styles.text}>
          ⏳ Duração: {film.oriinal_running_time ?? "Não informado"}
        </Text>

        <Text styles={styles.text}>
           ⭐ Nota: {film.rt_score ?? "Não informado"}
        </Text>
        </View>
        </View>
    )}

    const styles = StyleSheet.create({
        card: {
            backgroundColor: "#fff",
            borderRadius: 10,
            overflow: "hidden",
            marginBottom: 20,

            shadowColor: "#000",
            shadowOpacity: 0.5,
            shadowRadius: 5,
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
        title:{
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
        },
        subtitle: {
            fontSize: 16,
            color: "#bbbbbb",
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

       