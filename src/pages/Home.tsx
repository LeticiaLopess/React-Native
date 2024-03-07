import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, FlatList } from 'react-native';
import { Button } from '../components/Button';

interface SkillData {
    id: string;
    name: string;
    //date?: Date; // ?: diz que tal atributo é opcional, pode ou não ser incluído em objetos que implementam essa interface
}

export function Home() {

    const [newSkill, setNewSkill] = useState<string>('')
    const [mySkills, setMySkills] = useState<SkillData[]>([]); // um array inicialmente
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkills() {

        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
        // setMySkills([...mySkills, newSkill]); eu também poderia fazer assim

    }


    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter( // aqui eu filtro e retorno todas as skills exceto a skill que possui o id recebido no parâmetro
            skill => skill.id !== id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, [mySkills])


    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Welcome, Leticia
            </Text>
            <Text style={styles.greetings}>
                {greeting}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor="#999"
                onChangeText={setNewSkill}

            // onChangeText={() => newSkill = 'Rodrigo'}
            />

            <Button onPress={handleAddNewSkills} activeOpacity={0.75} title='Add' />

            <Text style={[styles.subtitle, { marginTop: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id} // Aqui você está extraindo a chave do array, mas o nome do parâmetro é totalmente flexível
                renderItem={({ item }) => ( // Aqui você está desestruturando o item como 'item'

                    <TouchableOpacity onPress={() => handleRemoveSkill(item.id)} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>

                )} // como a função handleRemoveSkill precisa de um parâmetro, eu tenho que passar a notação () => antes de chamá-la com o parâmetro
            >
            </FlatList>

        </View>
    );
}

export const Nome = 'Rodrigo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 24,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 24
    },
    subtitle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
        shadowColor: '#fff'
    },
    button: {
        backgroundColor: '#a370f7',
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
        marginTop: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff'
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20
    },
    greetings: {
        color: '#fff',
        marginTop: 2
    }
});
