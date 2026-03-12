// RoomCard.tsx  (ou renomeie o arquivo para RenderRoomCard.tsx)

import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { global } from './styles';

interface RoomCardProps {
  image: ImageSourcePropType;
  name: string;
  price: number;
  descricao: string;
  containerStyle?: any;       // ideal: import { ViewStyle } from 'react-native' e usar ViewStyle
  onPress: () => void;
  onDelete: () => void;
}

export default function RenderRoomCard({
  image,
  name,
  price,
  descricao,
  containerStyle = {},
  onPress,
  onDelete,
}: RoomCardProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      style={[styles.card, containerStyle]} 
      onPress={onPress}
    >
      <Image 
        source={image} 
        style={styles.image} 
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.price}>R$ {price},00</Text>

        {/* Botão de deletar exemplo */}
        <TouchableOpacity 
          style={styles.deleteButton} 
          onPress={onDelete}
        >
          <Text style={styles.deleteText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: 140,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2a6fdd',
  },
  deleteButton: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#ff444450',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  deleteText: {
    color: '#ff4444',
    fontWeight: '600',
    fontSize: 13,
  },
});