
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer';


export default luoKayttaja = ({ navigation, }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = () => {
        console.log('handleCreateAccount', email, password, confirmPassword); 
    };

    return (
        <>
            <View>
                <Header />

                <Text>Create Account</Text>

                <TextInput
                    placeholder="Sähköposti"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    placeholder="Salasana"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TextInput
                    placeholder="Vahvista salasana"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <Button
                    title="Luo käyttäjä"
                    onPress={handleCreateAccount}
                />
            </View>
            <Footer />
        </>
    );
};





