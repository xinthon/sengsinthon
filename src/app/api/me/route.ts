export function GET(request: Request) {
  const birthDate = new Date("2001-10-01");
  const currentDate = new Date();

  // Calculate the difference in years
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust if the current month/day is before the birth month/day
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  const me = {
    name: "SENG SINTHON",
    age: age,
  };

  return new Response(JSON.stringify(me), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
