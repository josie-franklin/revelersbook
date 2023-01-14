import { handleJsonResponse, handleError } from "./apiUtils";

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

export async function getChartsBySearch(input) {
  try {
    const response = await fetch(`/api/charts/${input}/`, {
      headers: { Accept: "application/json" },
    });
    return handleJsonResponse(response);
  } catch (error) {
    handleError(error);
  }
}
