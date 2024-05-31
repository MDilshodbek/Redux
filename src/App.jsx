import { Card } from "antd";
import "./App.css";
import Paragraph from "antd/es/typography/Paragraph";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="w-[200px]">
        <Paragraph>123</Paragraph>
      </Card>
    </div>
  );
}

export default App;
