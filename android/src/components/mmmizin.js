// Bismillahir-Rahmanir-Rahim
// Elhamdu lillahi Rabbil 'alamin
// Assalatu wassalamu 'ala Rasulillah
// Wa 'ala alihi wa sahbihi ajma'in
// La hawla wa la quwwata illa billah
// Allahumma salli 'ala Muhammad wa 'ala ali Muhammad
// SuphanAllah Elhamdulillah Allahu Akbar
// La ilaha illallah Muhammadur Rasulullah

import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Camera from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function PermissionsModal({ visible, onDone }) {
  const [loading, setLoading] = useState(false);

  const requestPermissions = async () => {
    setLoading(true);
    await Location.requestForegroundPermissionsAsync();
    await Camera.requestCameraPermissionsAsync();
    await MediaLibrary.requestPermissionsAsync();
    setLoading(false);
    onDone();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>İzinler Gerekli</Text>
          <Text style={styles.text}>
            Uygulamanın tam çalışabilmesi için konum, kamera ve galeri izinlerine ihtiyacı var.
          </Text>
          <Button title={loading ? "Bekleyin..." : "İzinleri Ver"} onPress={requestPermissions} disabled={loading} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0008' },
  modal: { backgroundColor: 'white', padding: 24, borderRadius: 12, width: 300, alignItems: 'center' },
  title: { fontWeight: 'bold', fontSize: 18, marginBottom: 12 },
  text: { textAlign: 'center', marginBottom: 16 }
});