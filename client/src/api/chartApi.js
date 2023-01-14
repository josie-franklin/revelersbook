import { handleJsonResponse, handleError } from "./apiUtils";

//const baseUrl = "api/charts";

export async function getAllCharts() {
  try {
    const response = await fetch("/api/charts/", {
      headers: { Accept: "application/json" },
    });
    return handleJsonResponse(response);
  } catch (error) {
    handleError(error);
  }
}
