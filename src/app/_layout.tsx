import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function Layout() {
  console.log('Passou pelo LAYOUT primeiro!')
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} colo={color} />
          ),
        }}
      />
    </Tabs>
  )
}
