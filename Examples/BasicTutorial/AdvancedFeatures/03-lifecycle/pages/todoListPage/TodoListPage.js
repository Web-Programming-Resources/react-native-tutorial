import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { TodoList } from "./todoList";
import axios from "../../config/axios";

const TodoListPage = props => {
    // todos: { id: number, text: string, checked: boolean }
    const [todos, setTodos] = useState([]);
    const [imageUrl, setImageUrl] = useState("https://facebook.github.io/react-native/img/tiny_logo.png");

    // componentWillUpdate
    // call api and get a dog image when todos updates
    useEffect(() => {
        requestAdorablePomeranianImage();

        // componentWillUnmount
        return () => {
            // cancel axios when componentWillUnmount()
            axios.cancel();
        }
    }, [todos])

    const requestAdorablePomeranianImage = () => {
        axios.get("pomeranian/images/random").then(res => {
            setImageUrl(res.data.message);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.titleImage} source={{ uri: imageUrl }} />
                <Text style={styles.title}>Hello Todolist</Text>
            </View>
            <TodoList todos={todos} setTodos={setTodos} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 5,
        flexGrow: 1,
        backgroundColor: 'lightblue'
    },
    title: {
        color: 'black',
        fontSize: 36,
        fontWeight: '300',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
    },
    titleImage: {
        width: 100,
        height: 100,
    }
});

export default TodoListPage;