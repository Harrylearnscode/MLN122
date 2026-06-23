function SectionFourContent() {
  return (
    <div className="mt-8 space-y-8 text-left">
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-indigo-800">
          Giải đáp: Bản chất của "Tiền đẻ ra tiền"
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Quay lại câu hỏi ở phần đầu: Tiền của FPT Retail, Ngân hàng BIDV và các chủ Bất động sản từ đâu sinh ra? Dưới lăng kính Kinh tế chính trị, ta đã có câu trả lời rõ ràng:
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-indigo-100 bg-white p-5">
          <h4 className="font-bold text-indigo-900 mb-2">FPT Retail & Ngân hàng</h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            Tiền của FPT Retail (Lợi nhuận thương nghiệp) và Ngân hàng (Lợi tức) thực chất là <strong>giá trị thặng dư từ quá trình sản xuất hàng hóa</strong> của toàn xã hội phân chia lại và trả cho họ.
          </p>
        </div>
        
        <div className="rounded-2xl border border-indigo-100 bg-white p-5">
          <h4 className="font-bold text-indigo-900 mb-2">Bất động sản</h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            Lợi nhuận BĐS không do sản xuất, mà do đầu tư hạ tầng, đô thị hóa (tạo nhu cầu) hoặc do gom đất thổi giá. Địa tô là khoản thu nhập người sở hữu thu được nhờ <strong>quyền sở hữu đất</strong>, chứ không trực tiếp tạo ra giá trị mới.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-inner mt-8">
        <h4 className="text-lg font-bold text-rose-900 mb-3 text-center uppercase tracking-wide">
          Kết luận
        </h4>
        <div className="space-y-3 text-sm text-slate-800 leading-relaxed">
          <p>
            Qua việc phân tích lợi nhuận thương nghiệp, lợi tức cho vay và địa tô, có thể thấy những khoản thu nhập này <strong>không phải xuất hiện một cách tự nhiên</strong> từ ảo vọng <em>"tiền đẻ ra tiền"</em>.
          </p>
          <p>
            Theo kinh tế chính trị Mác-Lênin, nguồn gốc sâu xa của chúng vẫn là <strong>giá trị thặng dư được tạo ra trong quá trình sản xuất</strong>. Các chủ thể thương nghiệp, ngân hàng và chủ sở hữu đất đai nhận được những khoản thu nhập này thông qua quá trình phân chia giá trị thặng dư dưới những hình thức khác nhau.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SectionFourContent;