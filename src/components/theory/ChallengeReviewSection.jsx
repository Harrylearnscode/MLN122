import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, GripVertical, RotateCcw } from "lucide-react";
import {
  reviewChallenges,
  shuffleChallenges,
  swapChallengePositions,
} from "../../pages/theoryData";

function ChallengeReviewSection({ motionVariant }) {
  const MotionSection = motion.section;
  const expectedChallengeIds = reviewChallenges.map((item) => item.id);
  const [challengeOrder, setChallengeOrder] = useState(() =>
    shuffleChallenges(reviewChallenges),
  );
  const [draggedChallengeId, setDraggedChallengeId] = useState(null);
  const [dragOverChallengeId, setDragOverChallengeId] = useState(null);

  const handleChallengeDragStart = (event, challengeId) => {
    setDraggedChallengeId(challengeId);
    setDragOverChallengeId(challengeId);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", challengeId);
  };

  const handleChallengeDragOver = (event, challengeId) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    if (dragOverChallengeId !== challengeId) {
      setDragOverChallengeId(challengeId);
    }
  };

  const handleChallengeDrop = (event, targetChallengeId) => {
    event.preventDefault();
    const sourceChallengeId =
      draggedChallengeId || event.dataTransfer.getData("text/plain");
    setChallengeOrder((prev) =>
      swapChallengePositions(prev, sourceChallengeId, targetChallengeId),
    );
    setDraggedChallengeId(null);
    setDragOverChallengeId(null);
  };

  const handleChallengeDragEnd = () => {
    setDraggedChallengeId(null);
    setDragOverChallengeId(null);
  };

  const resetChallengeOrder = () => {
    setChallengeOrder(shuffleChallenges(reviewChallenges));
    setDraggedChallengeId(null);
    setDragOverChallengeId(null);
  };

  const isCorrectPosition = (challenge, index) =>
    challenge.id === expectedChallengeIds[index];
  const sequentiallyCorrectByIndex = challengeOrder.reduce(
    (result, challenge, index) => {
      const currentCorrect = isCorrectPosition(challenge, index);
      const previousSequentiallyCorrect =
        index === 0 ? true : result[index - 1];
      result.push(currentCorrect && previousSequentiallyCorrect);
      return result;
    },
    [],
  );
  const isChallengeSolved = challengeOrder.every((challenge, index) =>
    isCorrectPosition(challenge, index),
  );

  return (
    <MotionSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={motionVariant}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-12 rounded-[30px] bg-white/84 p-5 shadow-[0_16px_34px_rgba(13,55,89,0.11)] sm:p-7"
    >
      <div className="mb-5 flex flex-col items-center gap-3 text-center">
        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-800 uppercase">
          Thử thách Ôn tập
        </span>
        <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl">
          Giải mã lợi nhuận Ngân hàng
        </h2>
      </div>
      <p className="mx-auto mb-6 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
        Sắp xếp các bước dưới đây để hiểu rõ hành trình của dòng tiền và nguồn gốc thực sự tạo ra lợi nhuận cho các ngân hàng như BIDV.
      </p>

      <div className="space-y-3">
        {challengeOrder.map((challenge, index) => {
          const showCorrectTick = sequentiallyCorrectByIndex[index];
          const isDragging = draggedChallengeId === challenge.id;
          const isDropTarget =
            dragOverChallengeId === challenge.id &&
            draggedChallengeId !== challenge.id;
          const displayPosition = index + 1;

          return (
            <article
              key={challenge.id}
              draggable
              onDragStart={(event) =>
                handleChallengeDragStart(event, challenge.id)
              }
              onDragOver={(event) =>
                handleChallengeDragOver(event, challenge.id)
              }
              onDrop={(event) => handleChallengeDrop(event, challenge.id)}
              onDragEnd={handleChallengeDragEnd}
              className={`cursor-grab rounded-2xl px-4 py-4 active:cursor-grabbing transition-all ${
                showCorrectTick
                  ? "bg-emerald-50/90 shadow-[inset_0_0_0_1px_rgba(5,150,105,0.3)]"
                  : "bg-slate-50/90 shadow-[inset_0_0_0_1px_rgba(15,42,66,0.08)] hover:shadow-[inset_0_0_0_1px_rgba(15,42,66,0.15)]"
              } ${isDropTarget ? "ring-2 ring-emerald-400 scale-105" : ""} ${
                isDragging ? "opacity-50" : ""
              }`}
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-emerald-600 px-2 text-xs font-bold text-white shadow-sm">
                    {displayPosition}
                  </span>
                  <h3 className="text-base font-semibold text-slate-800">
                    {challenge.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {showCorrectTick && (
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                  )}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
                    <GripVertical className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base ml-11">
                {challenge.prompt}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={resetChallengeOrder}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          <RotateCcw className="h-4 w-4" />
          Trộn lại
        </button>

        {isChallengeSolved ? (
          <p className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl">
            🎉 Tuyệt vời! Bạn đã sắp xếp chính xác chuỗi phân chia giá trị thặng dư.
          </p>
        ) : (
          <p className="text-sm font-medium text-slate-500">
            Kéo thả các thẻ để sắp xếp đúng trình tự vận hành của dòng vốn.
          </p>
        )}
      </div>
    </MotionSection>
  );
}

export default ChallengeReviewSection;