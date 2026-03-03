import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

console.log('Chat completion function loaded successfully')

serve(async (req) => {
  console.log(`${req.method} ${req.url}`)
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message } = await req.json()
    console.log('Received message:', message)
    
    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY')
    console.log('OpenAI API Key available:', !!openaiApiKey)
    
    if (!openaiApiKey) {
      console.error('OpenAI API key not found in environment')
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Making request to OpenAI...')
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a compassionate, supportive, and non-judgmental digital guide within a youth-focused substance abuse support app. Your role is to provide encouragement, education, practical coping strategies, and resources to young people who may be struggling with substance use or recovery. Always prioritize empathy, validation, and trust, making the user feel safe, heard, and respected.

1. Respond in a calm, friendly, and relatable tone that feels approachable for teens and young adults.
2. Never shame, lecture, or use stigmatizing language.
3. Provide evidence-based information and coping strategies for stress, cravings, peer pressure, or relapse triggers.
4. Offer emotional support by listening, validating feelings, and encouraging healthy alternatives.
5. When asked for guidance, suggest small, achievable steps instead of overwhelming solutions.
6. If the user is in crisis (e.g., mentioning self-harm, overdose, or immediate danger), clearly and urgently direct them to emergency services (such as 911 in the U.S.) and provide contact details for relevant hotlines and professional supports.
7. Always remind the user that they are not alone and that seeking help is a strong and brave choice.
8. Encourage connection with positive support networks, such as trusted family members, mentors, or friends.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    console.log('OpenAI response status:', openaiResponse.status)

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text()
      console.error('OpenAI API error:', openaiResponse.status, errorText)

      let details = 'Failed to generate a response from AI provider.'
      try {
        const parsed = JSON.parse(errorText)
        details = parsed?.error?.message || details
      } catch {
        if (errorText) details = errorText
      }

      const status = openaiResponse.status === 429 ? 429 : openaiResponse.status

      return new Response(
        JSON.stringify({
          error: 'AI provider error',
          details,
          code: status === 429 ? 'insufficient_quota_or_rate_limited' : 'provider_error',
          timestamp: new Date().toISOString(),
        }),
        { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const data = await openaiResponse.json()
    console.log('OpenAI response received successfully')
    
    const reply = data.choices[0]?.message?.content || 'I apologize, but I encountered an error processing your message. Please try again.'

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in chat-completion function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})