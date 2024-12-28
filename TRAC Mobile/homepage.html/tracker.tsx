import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu, Power, MapPin } from 'lucide-react-native';

export default function DeviceTracker({ navigation }) {
    const [isDeviceOn, setIsDeviceOn] = useState(true);

    const toggleDevice = () => {
        setIsDeviceOn(!isDeviceOn);
    };

    const openMenu = () => {
        // Implement menu opening logic
        console.log('Open menu');
    };

    const viewMap = () => {
        // Implement navigation to map view
        console.log('View map');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={openMenu}>
                    <Menu color="#000" size={24} />
                </TouchableOpacity>
                <Text style={styles.logo}>Trac</Text>
                <View style={{ width: 24 }} /> {/* Placeholder for symmetry */}
            </View>
            <View style={styles.content}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/300x200?text=Arduino+Device' }}
                    style={styles.deviceImage}
                />
                <Text style={styles.deviceName}>Arduino Tracker</Text>
                <Text style={styles.statusText}>
                    Status: {isDeviceOn ? 'Online' : 'Offline'}
                </Text>
                <TouchableOpacity style={styles.mapButton} onPress={viewMap}>
                    <MapPin color="#fff" size={24} />
                    <Text style={styles.mapButtonText}>View on Map</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.powerButton} onPress={toggleDevice}>
                <Power color={isDeviceOn ? "#4CAF50" : "#F44336"} size={32} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    deviceImage: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    deviceName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    statusText: {
        fontSize: 18,
        marginBottom: 16,
    },
    mapButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0066cc',
        padding: 12,
        borderRadius: 8,
    },
    mapButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8,
    },
    powerButton: {
        position: 'absolute',
        bottom: 24,
        alignSelf: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        padding: 12,
    },
});