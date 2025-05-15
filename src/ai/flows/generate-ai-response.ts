// src/ai/flows/generate-ai-response.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating AI responses to common user questions about software license resales.
 *
 * - `generateAiResponse`: An async function that takes a user query and returns an AI-generated response.
 * - `AiResponseInput`: The input type for the `generateAiResponse` function, representing the user's question.
 * - `AiResponseOutput`: The output type for the `generateAiResponse` function, representing the AI's response.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiResponseInputSchema = z.object({
  query: z.string().describe('The user query about software license resales.'),
});
export type AiResponseInput = z.infer<typeof AiResponseInputSchema>;

const AiResponseOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user query.'),
});
export type AiResponseOutput = z.infer<typeof AiResponseOutputSchema>;

export async function generateAiResponse(input: AiResponseInput): Promise<AiResponseOutput> {
  return generateAiResponseFlow(input);
}

const aiResponsePrompt = ai.definePrompt({
  name: 'aiResponsePrompt',
  input: {schema: AiResponseInputSchema},
  output: {schema: AiResponseOutputSchema},
  prompt: `You are a helpful AI assistant providing information about software license resales.

  Answer the following user query clearly and concisely:
  {{query}}`,
});

const generateAiResponseFlow = ai.defineFlow(
  {
    name: 'generateAiResponseFlow',
    inputSchema: AiResponseInputSchema,
    outputSchema: AiResponseOutputSchema,
  },
  async input => {
    const {output} = await aiResponsePrompt(input);
    return output!;
  }
);
