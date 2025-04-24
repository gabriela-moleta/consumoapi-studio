import { useEffect, useState } from "react";
import {FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import axios from "axios";
import FimCard from "../components/FimCard";
import SkeletonCard from "../components/SkeletonCard";

export default function Home(){
    //cria um estado chamado films pra guardar a lista de filmes 
    const [films, setFilms] = useState([]);

    //cria um estado chamado loading para saber se os dados estão sendo carregados
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            axios.get("https://ghibliapi.vercel.app/films")
            .then((res) => setFilms(res.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false)) 
        }
        , 5000);
            }, []);

            return (
                <SafeAreaView>
                    <Text>Filmes Studio Ghibli</Text>

                    {loading? (
                        <FlatList
                        data={[1,2,3,4,5]}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({item}) => <SkeletonCard />}
                        contentContainerStyle={StyleSheet.list}
                        />
                    ) : (
                        <FlatList
                        data={films}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <FimCard item={item} />}
                        contentContainerStyle={StyleSheet.list}
                        />
                    )}
                </SafeAreaView>
            );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 16,
    },
    list: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    }
    );
