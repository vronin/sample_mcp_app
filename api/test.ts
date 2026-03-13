export async function GET() {
  console.log("HIT TEST ROUTE");
  return new Response("hit-test-" + Date.now());
}
