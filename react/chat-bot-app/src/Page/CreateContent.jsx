import { ai } from "../utils/genai";
import { useState } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

export default function CreateContent() {
  // 사용자가 입력할 프롬프트를 관리할 상태
  const [prompt, setPrompt] = useState("");
  // 사용자 - AI의 대화 내용을 관리할 상태
  const [messages, setMessages] = useState([]);
  // AI 요청 후 응답 대기 상태
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    // 프롬프트가 비어 있거나, AI 응답을 대기 중이라면
    // 즉, isLoading === true라면 작업 X
    if (isLoading === true || prompt.trim() === "") return;

    // 대화 내역 상태를 업데이트
    // 사용자의 프롬프트를 대화 내역에 추가(role: "user")
    // role 역할: user라면 오른쪽에 배치, ai라면 왼쪽에 배치
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    setIsLoading(true); // 요청 시작
    await generateAiContent(); // AI 응답 생성 함수
    setIsLoading(false); // 요청 종료
  }

  // AI에게 요청을 보내서 응답을 생성하는 함수
  async function generateAiContent() {
    try {
      // 단순 텍스트 생성
      const response = await ai["models"].generateContent({
        // 모델 정보와 프롬프트(Content)를 요구
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      console.log(response["data"]);

      // 사용자 입력 프롬프트 초기화
      setPrompt("");

      // messages 상태에 AI의 응답을 저장
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: response["text"] },
      ]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {/* 사용자와 AI 대화 내용 출력 컴포넌트 */}
      <MessageList messages={messages} />

      {/* 사용자의 프롬프트 작성 폼 컴포넌트 */}
      <ChatForm
        prompt={prompt} // 사용자 입력값 관리
        setPrompt={setPrompt} // 사용자 입력값 상태 변경함수
        isLoading={isLoading} // AI 응답 대기 상태
        onSubmit={handleSubmit} // form 요소 제출 이벤트 핸들러 함수
      />
    </div>
  );
}
