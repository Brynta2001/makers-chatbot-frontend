import { AssistantPage } from "../pages/AssistantPage";


export const DashboardLayout = () => {
  return (
    <main className="flex flex-row mt-7">
      <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br">
          Makers Tech Assistant
        </h1>
        <span className="text-xl">Welcome to inventory!</span>

        <div className="border-gray-700 border my-3" />        
      </nav>

      <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <AssistantPage />
          </div>
        </div>
      </section>
    </main>
  );
};