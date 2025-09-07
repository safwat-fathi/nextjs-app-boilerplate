import { getScopedI18n } from "@/locales/server";
import ClientComponent from "./components/ClientComponent";

const Home = async () => {
  const tGlobal = await getScopedI18n("global");

  return (
    <main className="flex h-screen items-center justify-center">
      <h1>{tGlobal("welcome", { name: "John Doe" })}</h1>
      <ClientComponent />
    </main>
  );
};

export default Home;
