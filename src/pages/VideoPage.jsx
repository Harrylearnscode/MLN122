import ReactPlayer from 'react-player'

const videoData = {
  title: 'Video thuyết trình',
  subtitle: 'Phân tích ai hưởng lợi trong nền kinh tế số.',
  src: 'https://pub-660b2c1a53304862ad9c7aa7740e6a44.r2.dev/Cơ_chế_tạo_tài_sản.mp4',
}

function VideoPage() {
  return (
    <section className="animate-fade-up animate-fade-up-delay-1 w-full px-1 sm:px-2">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-semibold text-slate-800 sm:text-5xl">{videoData.title}</h1>
        <p className="mt-2 text-lg text-slate-600 sm:text-xl">{videoData.subtitle}</p>
      </header>

      <article className="mx-auto max-w-5xl rounded-2xl border border-white/70 bg-white/70 p-5 shadow-[0_10px_24px_rgba(13,55,89,0.1)] backdrop-blur-md sm:p-6">
        <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
          <ReactPlayer
            src={videoData.src}
            width="100%"
            height="100%"
            controls
            playsInline
          />
        </div>
      </article>
    </section>
  )
}

export default VideoPage
