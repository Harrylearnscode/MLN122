import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CircleCheckBig,
  CircleX,
  Play,
  RotateCcw,
} from "lucide-react";

const QUESTION_POOL = [
  {
    id: "q01",
    prompt: "Theo lý luận của C. Mác, chi phí sản xuất tư bản chủ nghĩa (k) bao gồm những bộ phận nào?",
    options: ["k = c + v", "k = v + m", "k = c + m", "k = c + v + m"],
    correctIndex: 0,
    explanation: "Chi phí sản xuất (k = c + v) làm xóa nhòa ranh giới giữa tư bản bất biến (c) và tư bản khả biến (v), che giấu nguồn gốc thực sự tạo ra giá trị thặng dư là sức lao động.",
  },
  {
    id: "q02",
    prompt: "Bản chất của lợi nhuận (p) trong nền kinh tế thị trường là gì?",
    options: ["Là phần dôi ra ngoài chi phí sản xuất, hình thái biến tướng của giá trị thặng dư", "Là kết quả của việc mua rẻ bán đắt trên thị trường", "Là phần giá trị do máy móc và công nghệ hiện đại tạo ra", "Là do năng lực quản lý của nhà tư bản"],
    correctIndex: 0,
    explanation: "Khi giá trị thặng dư (m) được quan niệm là con đẻ của toàn bộ tư bản ứng trước (k), nó mang hình thái biến tướng là lợi nhuận (p).",
  },
  {
    id: "q03",
    prompt: "Tỷ suất lợi nhuận (p') phản ánh điều gì trong hoạt động của nhà tư bản?",
    options: ["Quy mô sản xuất của doanh nghiệp", "Trình độ bóc lột sức lao động của nhà tư bản", "Mức doanh lợi đầu tư, hiệu quả sử dụng vốn", "Số lượng hàng hóa tiêu thụ được trên thị trường"],
    correctIndex: 2,
    explanation: "Nếu m' phản ánh trình độ bóc lột sức lao động, thì p' phản ánh mức doanh lợi đầu tư, tức là một đồng vốn bỏ ra thu được bao nhiêu đồng lợi nhuận.",
  },
  {
    id: "q04",
    prompt: "Sự tự do cạnh tranh và di chuyển vốn giữa các ngành sản xuất khác nhau sẽ dẫn đến sự hình thành của đại lượng nào?",
    options: ["Giá trị thặng dư siêu ngạch", "Lợi nhuận bình quân", "Lợi nhuận thương nghiệp", "Lợi tức cho vay"],
    correctIndex: 1,
    explanation: "Tư bản di chuyển từ ngành có tỷ suất lợi nhuận thấp sang ngành có tỷ suất cao, làm san bằng các tỷ suất lợi nhuận cá biệt thành tỷ suất lợi nhuận bình quân.",
  },
  {
    id: "q05",
    prompt: "Khi hình thành tỷ suất lợi nhuận bình quân, giá trị hàng hóa (W) sẽ chuyển hóa thành hình thái nào?",
    options: ["Giá cả thị trường", "Giá cả độc quyền", "Giá cả sản xuất", "Giá trị sử dụng"],
    correctIndex: 2,
    explanation: "Giá cả sản xuất = Chi phí sản xuất (k) + Lợi nhuận bình quân. Đây là cơ sở hình thành giá cả thị trường.",
  },
  {
    id: "q06",
    prompt: "Lợi nhuận thương nghiệp mà nhà tư bản thương nghiệp thu được có nguồn gốc thực sự từ đâu?",
    options: ["Từ tài năng mua bán trên thị trường", "Từ sức lao động của nhân viên bán hàng", "Một phần giá trị thặng dư do công nhân sản xuất tạo ra", "Từ sự khan hiếm của hàng hóa tiêu dùng"],
    correctIndex: 2,
    explanation: "Nhà tư bản công nghiệp phải nhường một phần giá trị thặng dư (chênh lệch giữa giá bán buôn và giá bán lẻ) cho nhà tư bản thương nghiệp để họ đảm nhận khâu lưu thông.",
  },
  {
    id: "q07",
    prompt: "Lợi tức (z) mà nhà tư bản đi vay phải trả cho nhà tư bản cho vay bản chất là gì?",
    options: ["Tiền công quản lý quỹ tài chính", "Một phần lợi nhuận bình quân sinh ra từ tư bản đi vay", "Phần thưởng cho sự tiết kiệm của người cho vay", "Giá cả của đồng tiền"],
    correctIndex: 1,
    explanation: "Lợi tức là sự phân chia lợi nhuận bình quân giữa tư bản cho vay (người sở hữu vốn) và tư bản đi vay (người sử dụng vốn kinh doanh).",
  },
  {
    id: "q08",
    prompt: "Địa tô tư bản chủ nghĩa (R) là phần giá trị nào mà nhà tư bản kinh doanh nông nghiệp phải nộp cho địa chủ?",
    options: ["Lợi nhuận bình quân của ngành nông nghiệp", "Phần giá trị thặng dư siêu ngạch ngoài lợi nhuận bình quân", "Tiền khấu hao do làm suy kiệt đất đai", "Chi phí mua phân bón và cải tạo đất"],
    correctIndex: 1,
    explanation: "Nhà tư bản nông nghiệp thu được lợi nhuận bình quân, còn phần giá trị thặng dư siêu ngạch tạo ra nhờ ruộng đất (tốt, vị trí thuận lợi) phải nộp cho địa chủ dưới dạng địa tô.",
  },
  {
    id: "q09",
    prompt: "Loại địa tô mà mọi mảnh đất cho thuê, dù là mảnh đất xấu nhất, cũng phải nộp do sự độc quyền sở hữu ruộng đất gây ra gọi là gì?",
    options: ["Địa tô chênh lệch I", "Địa tô chênh lệch II", "Địa tô tuyệt đối", "Địa tô độc quyền"],
    correctIndex: 2,
    explanation: "Địa tô tuyệt đối là khoản thu nhập mà địa chủ nhận được hoàn toàn nhờ vào sự độc quyền sở hữu ruộng đất, bất kể độ màu mỡ của đất.",
  },
  {
    id: "q10",
    prompt: "Điểm chung nhất của lợi nhuận công nghiệp, lợi nhuận thương nghiệp, lợi tức và địa tô là gì?",
    options: ["Đều sinh ra từ quá trình lưu thông", "Đều là các hình thái biến tướng của giá trị thặng dư", "Đều được chia đều cho các giai cấp trong xã hội", "Đều do sự tiến bộ của khoa học công nghệ"],
    correctIndex: 1,
    explanation: "Dù biểu hiện dưới hình thức nào và được phân chia cho ai, nguồn gốc duy nhất của chúng vẫn là lao động không công của công nhân (giá trị thặng dư).",
  }
];

const diversifyQuestionPool = (pool) =>
  pool.map((question, questionIndex) => {
    const optionCount = question.options.length;
    if (optionCount === 0) return question;

    const safeCorrectIndex = Math.min(Math.max(question.correctIndex, 0), optionCount - 1);
    const targetIndex = questionIndex % optionCount;

    if (safeCorrectIndex === targetIndex) return question;

    const diversifiedOptions = [...question.options];
    const [correctOption] = diversifiedOptions.splice(safeCorrectIndex, 1);
    diversifiedOptions.splice(targetIndex, 0, correctOption);

    return { ...question, options: diversifiedOptions, correctIndex: targetIndex };
  });

const DIVERSIFIED_QUESTION_POOL = diversifyQuestionPool(QUESTION_POOL);
const SHIFT_QUESTION_LIMIT = 8;

const shuffleQuestions = (pool) => {
  const shuffled = [...pool];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
};

function GamePage() {
  const MotionSection = motion.section;

  const [gameStarted, setGameStarted] = useState(false);
  const [shiftEnded, setShiftEnded] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [locked, setLocked] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const currentQuestion = gameStarted && !shiftEnded && questionSet.length > 0 ? (questionSet[currentIndex] ?? null) : null;
  const isFinished = gameStarted && shiftEnded;
  const isShiftRunning = gameStarted && !shiftEnded;
  const answeredInCurrentShift = Math.min(totalAnswered + (locked ? 1 : 0), SHIFT_QUESTION_LIMIT);
  const progressValue = Math.round((answeredInCurrentShift / SHIFT_QUESTION_LIMIT) * 100);

  const startGame = () => {
    setGameStarted(true);
    setShiftEnded(false);
    setQuestionSet(shuffleQuestions(DIVERSIFIED_QUESTION_POOL));
    setCurrentIndex(0);
    setTotalAnswered(0);
    setScore(0);
    setFeedback(null);
    setLocked(false);
    setSelectedOptionIndex(null);
  };

  const endShift = () => {
    if (!gameStarted || shiftEnded) return;
    setShiftEnded(true);
    setLocked(false);
    setSelectedOptionIndex(null);
    setFeedback(null);
  };

  const handleAnswer = (selectedIndex) => {
    if (locked || !currentQuestion) return;

    setSelectedOptionIndex(selectedIndex);
    const isCorrect = selectedIndex === currentQuestion.correctIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setFeedback({
      type: isCorrect ? "success" : "error",
      text: isCorrect ? "Chính xác!" : "Chưa chính xác!",
      explanation: currentQuestion.explanation,
    });

    setLocked(true);
  };

  const handleNext = () => {
    if (!locked) return;
    const answeredAfterNext = totalAnswered + 1;
    setFeedback(null);
    setLocked(false);
    setSelectedOptionIndex(null);
    setTotalAnswered(answeredAfterNext);

    if (answeredAfterNext >= SHIFT_QUESTION_LIMIT) {
      endShift();
      return;
    }

    setCurrentIndex(prev => (prev + 1) >= questionSet.length ? 0 : prev + 1);
  };

  return (
    <section className="animate-fade-up animate-fade-up-delay-1 w-full px-1 sm:px-2 pb-20">
      <header className={isShiftRunning ? "mb-3 text-center" : "mb-8 text-center"}>
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-indigo-700 uppercase">
          Thử thách Ôn tập Lý thuyết
        </p>
        <h1 className={isShiftRunning ? "text-2xl font-semibold text-slate-800 sm:text-3xl" : "text-4xl font-semibold text-slate-800 sm:text-5xl"}>
          Hình thái Giá trị Thặng dư
        </h1>
        {!isShiftRunning && (
          <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-600 sm:text-xl">
            Củng cố kiến thức kinh tế chính trị về cách giá trị thặng dư được phân chia thành lợi nhuận, lợi tức và địa tô.
          </p>
        )}
      </header>

      <article className={`rounded-[30px] border border-white/70 bg-slate-100/70 shadow-[0_18px_40px_rgba(13,55,89,0.12)] backdrop-blur-md ${isShiftRunning ? "p-3 sm:p-4" : "p-5 sm:p-7"}`}>
        
        {isShiftRunning && (
          <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${progressValue}%` }} />
          </div>
        )}

        <main className={`rounded-2xl bg-white ${isShiftRunning ? "p-4" : "p-6"}`}>
          {!gameStarted && (
            <section className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800">Sẵn sàng ôn tập?</h2>
              <button onClick={startGame} className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                <Play className="h-4 w-4" /> Bắt đầu bài trắc nghiệm
              </button>
            </section>
          )}

          {gameStarted && !isFinished && currentQuestion && (
            <section>
              <h2 className="text-xl font-bold text-indigo-900">Câu hỏi {totalAnswered + 1}/{SHIFT_QUESTION_LIMIT}</h2>
              <p className="mt-2 text-lg font-medium text-slate-700">{currentQuestion.prompt}</p>

              <div className="mt-4 grid gap-3">
                {currentQuestion.options.map((option, optionIndex) => {
                  const isCorrectOption = optionIndex === currentQuestion.correctIndex;
                  const isSelectedOption = optionIndex === selectedOptionIndex;
                  const shouldHighlightSelectedCorrect = locked && feedback?.type === "success" && isSelectedOption && isCorrectOption;
                  const shouldHighlightCorrect = locked && feedback?.type === "error" && isCorrectOption;
                  const shouldHighlightWrongSelection = locked && feedback?.type === "error" && isSelectedOption && !isCorrectOption;

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswer(optionIndex)}
                      disabled={locked}
                      className={`rounded-xl border p-4 text-left font-medium transition ${
                        shouldHighlightSelectedCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                        : shouldHighlightCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                        : shouldHighlightWrongSelection ? "border-rose-400 bg-rose-50 text-rose-800"
                        : "border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {feedback && (
                  <MotionSection initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}} className={`mt-5 rounded-xl p-4 ${feedback.type === "success" ? "bg-emerald-100/70" : "bg-rose-100/70"}`}>
                    <p className="flex items-center gap-2 font-bold text-slate-800">
                      {feedback.type === "success" ? <CircleCheckBig className="h-5 w-5 text-emerald-600"/> : <CircleX className="h-5 w-5 text-rose-600"/>}
                      {feedback.text}
                    </p>
                    <p className="mt-2 text-sm text-slate-700"><strong>Giải thích:</strong> {feedback.explanation}</p>
                  </MotionSection>
                )}
              </AnimatePresence>

              {locked && (
                <button onClick={handleNext} className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                  {totalAnswered + 1 >= SHIFT_QUESTION_LIMIT ? "Xem Kết quả" : "Câu tiếp theo"}
                </button>
              )}
            </section>
          )}

          {isFinished && (
            <section className="text-center">
              <h2 className="text-3xl font-bold text-indigo-900">Kết quả Ôn tập</h2>
              
              <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-indigo-50 p-6 border border-indigo-100">
                <p className="text-sm font-bold text-indigo-800 uppercase tracking-wider">Điểm của bạn</p>
                <p className="text-5xl font-black text-indigo-600 mt-2">{score} / {SHIFT_QUESTION_LIMIT}</p>
              </div>

              <p className="mt-6 text-lg font-bold text-slate-800">
                Nắm vững Lý thuyết:
                <span className="block text-slate-600 font-medium text-base mt-1">
                  Mọi hình thức phân phối như lợi nhuận, lợi tức hay địa tô đều che giấu bản chất thực sự của nền kinh tế tư bản chủ nghĩa: sự bóc lột giá trị thặng dư.
                </span>
              </p>

              <button onClick={startGame} className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                <RotateCcw className="h-4 w-4" /> Làm lại bài trắc nghiệm
              </button>
            </section>
          )}
        </main>
      </article>
    </section>
  );
}

export default GamePage;