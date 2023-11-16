import { redirect } from "react-router-dom";

export const submitGameToServer = async (request, url, method) => {
  const formdata = await request.formData();
  const json = {
    hometeam: formdata.get("hometeam"),
    awayteam: formdata.get("awayteam"),
    gametime: formdata.get("gametime"),
  };
  const response = await fetch(url, {
    method,
    body: JSON.stringify(json),
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 403) {
    return redirect("/logout");
  }

  if (response.status === 400) {
    const responseJson = await response.json();
    return responseJson.errors;
  }

  const gameJson = await response.json();

  return redirect(`/game/${gameJson.data.id}`);
};
