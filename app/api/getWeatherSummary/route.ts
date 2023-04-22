import {NextResponse} from "next/server";
// import openai from "@/openai";
import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
   
    apiKey: process.env.OPENAI_API_KEY,
});




export async function POST(request: Request) {
// weatherData is the data from the weather API and is passed to the openAI API to generate a summary
    const {weatherData} = await request.json();
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `Pretend you're a weather news presenting LIVE on television, be engertic and full of charism.
                 Introduce yourself as Rishabh and say you are LIVE from the weather studio.State the city
                  you are providing a summary for. Then give a summary of todays 
                  weather only.  Make it easy for the viewer to understand and know what
                   to do to prpare for those weather condition such as wear SRF if
                    the UV is high etc. use the uv_index data provided to provide UV advice.
                     Provide a joke reqarding the weather. Assume the data came from your team at the news
                      office and not the user.`
            }, {
                role: 'user',
                content: `Hi there, can i get a summary of todays weather, use the following to get the weather 
                data: ${JSON.stringify(weatherData)}`,
            }
        ]

    });

    const {data} =  response;

    console.log(`DATA is`, data);

    return NextResponse.json(data.choices[0].message);
    
}
