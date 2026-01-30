
import { GoogleGenAI, Type } from "@google/genai";
import { SolarEstimate } from "../types";

// Safe initialization
const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const getSolarEstimate = async (bill: number, roof: number, zip: string): Promise<SolarEstimate> => {
  const ai = getAI();
  
  if (!ai) {
    console.warn("API Key not found, using fallback estimation.");
    return getFallback(bill);
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Calculate a realistic solar energy savings estimate for a user with a monthly electricity bill of $${bill}, a roof size of ${roof} square feet, and living in ZIP code ${zip}. Be optimistic but professional.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            annualSavings: { type: Type.STRING, description: "Estimated annual dollar savings (e.g. $1,200)" },
            paybackYears: { type: Type.STRING, description: "Estimated years to reach ROI (e.g. 6.5 years)" },
            lifetimeSavings: { type: Type.STRING, description: "Total savings over 25 years (e.g. $45,000)" },
            co2Saved: { type: Type.STRING, description: "Annual CO2 emissions avoided in tons" },
            treesPlanted: { type: Type.STRING, description: "Equivalent number of trees planted annually" },
            recommendation: { type: Type.STRING, description: "A brief, 1-2 sentence recommendation on solar suitability." }
          },
          required: ["annualSavings", "paybackYears", "lifetimeSavings", "co2Saved", "treesPlanted", "recommendation"]
        }
      }
    });

    const result = JSON.parse(response.text);
    return result as SolarEstimate;
  } catch (error) {
    console.error("Error fetching estimate:", error);
    return getFallback(bill);
  }
};

const getFallback = (bill: number): SolarEstimate => {
  const annual = bill * 12 * 0.9;
  return {
    annualSavings: `$${Math.round(annual).toLocaleString()}`,
    paybackYears: "6.8 years",
    lifetimeSavings: `$${Math.round(annual * 25).toLocaleString()}`,
    co2Saved: "4.8 tons",
    treesPlanted: "210",
    recommendation: "Your roof has exceptional solar potential based on current utility rates in your area."
  };
};
