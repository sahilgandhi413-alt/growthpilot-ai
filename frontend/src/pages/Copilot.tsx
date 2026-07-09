import AIHeader from "../components/copilot/AIHeader";
import AIQuickStats from "../components/copilot/AIStats";
import PromptSuggestions from "../components/copilot/PromptSuggestions";
import ChatSidebar from "../components/copilot/ChatSidebar";
import ChatWindow from "../components/copilot/ChatWindow";
import ChatInput from "../components/copilot/ChatInput";

export default function Copilot() {
  return (
    <div className="mx-auto max-w-[1700px] space-y-8 px-8 py-8">

      <AIHeader />

      <AIQuickStats />

      <PromptSuggestions />

      <div className="grid gap-8 xl:grid-cols-12">

        <div className="xl:col-span-3">
          <ChatSidebar />
        </div>

        <div className="xl:col-span-9 flex h-[800px] flex-col">
          <ChatWindow />

          <ChatInput />
        </div>

      </div>

    </div>
  );
}