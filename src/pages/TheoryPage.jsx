import { motion } from "framer-motion";
import ChallengeReviewSection from "../components/theory/ChallengeReviewSection";
import TheorySectionCard from "../components/theory/TheorySectionCard";
import { motionVariant, theorySections } from "./theoryData";

function TheoryPage() {
  const MotionHeader = motion.header;
  const MotionArticle = motion.article;

  return (
    <section className="animate-fade-up animate-fade-up-delay-1 w-full px-1 sm:px-2 pb-20">
      <MotionHeader
        initial="hidden"
        animate="visible"
        variants={motionVariant}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
          Kinh tế chính trị Mác - Lênin
        </p>
        <h1 className="text-4xl font-semibold text-slate-800 sm:text-5xl lg:text-6xl">
          Sự thật về "Tiền đẻ ra tiền"
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-2xl">
          Phân chia giá trị thặng dư qua các ngành: Thương mại, Ngân hàng và Bất động sản.
        </p>
      </MotionHeader>

      <div className="space-y-8">
        {theorySections.map((section, index) => (
          <TheorySectionCard
            key={section.id}
            section={section}
            index={index}
            MotionArticle={MotionArticle}
            motionVariant={motionVariant}
          />
        ))}
      </div>

      <ChallengeReviewSection motionVariant={motionVariant} />
    </section>
  );
}

export default TheoryPage;
