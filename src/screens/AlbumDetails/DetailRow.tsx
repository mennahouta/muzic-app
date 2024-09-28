import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

// Reusable component for detail rows
export default function DetailRow({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <View style={styles.detailRow}>
            <Icon name={icon} size={20} color="#999" />
            <View style={styles.detailTextContainer}>
                <Text style={styles.detailLabel}>{label}</Text>
                <Text style={styles.detailText}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailTextContainer: {
        marginLeft: 12,
        marginTop: 10,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailLabel: {
        fontSize: 16,
        marginLeft: 4,
    },
    detailText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 4,
    },
})
