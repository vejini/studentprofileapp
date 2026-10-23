
import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={require('./assets/profile.png')}
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          Virajini Chamika
        </Text>

        <Text style={styles.course}>
          BSc Software Engineering
        </Text>

        <Text style={styles.description}>
          I am a university student.
          I am interested in mobile app development.
        </Text>

        <Text style={styles.info}>
          Email: svckarunadasa@student.com
        </Text>

        <Text style={styles.info}>
          Student ID: 36897
        </Text>

        <Text style={styles.contactButton}>
          Contact Me
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  course: {
    fontSize: 18,
    marginTop: 8,
  },

  description: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },

  info: {
    fontSize: 15,
    marginTop: 8,
  },

  contactButton: {
    marginTop: 24,
    backgroundColor: '#222222',
    color: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    overflow: 'hidden',
    fontWeight: 'bold',
  },

});
