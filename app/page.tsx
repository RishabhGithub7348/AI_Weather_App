

import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "@/components/CityPicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#792d81] to-[#241f62] p-10  flex flex-col justify-center  ">
    <Card className="max-w-4xl mx-auto">
      <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
      <Subtitle  className="text-xl text-center">
        Powered by Opean AI , Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!
      </Subtitle>
      <Divider className="my-10" />

      <Card className="bg-gradient-to-br from-[#792d81] to-[#241f62]">
      <CityPicker/>
      </Card>
    </Card>
    </main>
  )
}
